// Per-service-type job handler registry (#155 PR 9 — the strategy-pattern
// enabler for Wave 1, #193). Service.update() finishes a job's processing
// timer, runs the shared failure roll, then dispatches the job here:
//
//   const handler = SERVICE_HANDLERS[service.type] || genericForward;
//   const outcome = handler(service, job);
//
// Adding a new service type = one handler file + one registry line below.
//
// CONTROL-FLOW CONTRACT — a handler's return value maps 1:1 onto the control
// flow the old inline if-chain used inside Service.update()'s job loop
// (the job has already been splice()d out of service.processing when the
// handler runs):
//
//   "next"          The job was consumed (finished / failed / throttled) or
//                   forwarded downstream. Move on to the next job.
//                   (was: `continue`)
//   "requeue-next"  The job was NOT consumed — put it back at its old index
//                   and move on to the next job. Used by SQS while it waits
//                   for a compute node to pull.
//                   (was: `this.processing.splice(i, 0, job); continue`)
//   "requeue-stop"  Backpressure — put the job back at its old index and stop
//                   processing this service for the rest of the frame. Used
//                   by SQS when every downstream target is saturated.
//                   (was: `this.processing.splice(i, 0, job); break`)
//
// Handlers reach shared context (STATE, core/actions) via imports, and the
// service instance via the first argument — no parameter soup.
//
// Types with no dedicated handler (waf, alb) fall back to genericForward.
// WAF's malicious-blocking logic is NOT here by design: it lives in
// Service.processQueue() (requests are blocked on intake, before they ever
// become processing jobs), outside the job-dispatch chain this registry owns.

import { TRAFFIC_TYPES } from "/_assets/ba0c1a46eecca16c0d04.js";
import { STATE } from "/_assets/1ca22428bc952fe5c89a.js";
import { failOrPark } from "/_assets/cd4e22c5d72887a3dfbf.js";
import { FAIL_REASONS } from "/_assets/f248ea24253475b1ef39.js";
import { isRoutable } from "/_assets/b915bf71070b4e858a23.js";
import { process as apigw } from "/_assets/8b888baf1b0883d4a8fa.js";
import { process as cache } from "/_assets/68bcdf54b9418b008833.js";
import { process as cdn } from "/_assets/046075ea2d356a4721fb.js";
import { process as compute } from "/_assets/db16da4efb013254f271.js";
import { process as db } from "/_assets/8f84e6777b44145c66ec.js";
import { process as dns } from "/_assets/51aac33f6194b6139b32.js";
import { process as nosql } from "/_assets/75cc10fe4c6a4467d740.js";
import { process as notify } from "/_assets/75277507aefdba84b7db.js";
import { process as pubsub } from "/_assets/72b60e8b0b1eb16a22e6.js";
import { process as replica } from "/_assets/f37f0d023152a5e20f06.js";
import { process as s3 } from "/_assets/266b82c6f71712e090a3.js";
import { process as search } from "/_assets/d78ee0a48bbe6fdb1ee4.js";
import { process as serverless } from "/_assets/3b9fbd93db1fcb49e1d4.js";
import { process as sqs } from "/_assets/2a32ea8bdec3149661b9.js";
import { process as warehouse } from "/_assets/d3efa362b343675185e2.js";

// Forward-candidate filter, shared by genericForward and the apigw handler
// (whose forward block is the same exclusion filter). "Live" means isRoutable
// (#196): offline OR breaker-open are skipped, and a Dead-Letter Queue (#197)
// is never a normal forward target — it is a failure SINK reached only via
// failOrPark, so it is excluded here; with no other candidate the request
// falls through to failOrPark and can still be parked.
//
// The AI Wave (#87) makes this minimally TYPE-aware: for INFERENCE it prefers
// Inference Gateway targets, then direct GPUs, then the generic set (a
// compute downstream still knows the way); for everything else infgw/gpu join
// the dlq in the exclusion — they are single-type nodes, and round-robining a
// READ onto one would just teach "fail_gpu_only" the hard way.
export function forwardCandidates(service, req) {
  const live = service.connections
    .map((id) => STATE.services.find((s) => s.id === id))
    .filter((s) => s && s.type !== "dlq" && isRoutable(s));

  if (req.type === TRAFFIC_TYPES.INFERENCE) {
    const infgws = live.filter((s) => s.type === "infgw");
    if (infgws.length > 0) return infgws;
    const gpus = live.filter((s) => s.type === "gpu");
    if (gpus.length > 0) return gpus;
    return live;
  }
  return live.filter((s) => s.type !== "infgw" && s.type !== "gpu");
}

// Shared fallback: round-robin the job to any live connected service.
// Logic lifted unchanged from the final `else` of the old if-chain; the
// candidate set is forwardCandidates() above.
export function genericForward(service, job) {
  const candidates = forwardCandidates(service, job.req);

  if (candidates.length > 0) {
    const target = candidates[service.rrIndex % candidates.length];
    service.rrIndex++;
    job.req.flyTo(target);
  } else {
    failOrPark(job.req, service, FAIL_REASONS.NO_ROUTE);
  }
  return "next";
}

export const SERVICE_HANDLERS = {
  apigw,
  cache,
  cdn,
  compute,
  // Container Cluster (#198) processes exactly like Compute — same routing
  // brain, same handler. Its distinguishing behavior is economic (dense fixed
  // capacity at a flat per-cluster fee) + operational (a longer ASG warmup),
  // not a different job path, so it deliberately reuses the compute handler.
  container: compute,
  db,
  dns,
  nosql,
  notify,
  pubsub,
  replica,
  s3,
  search,
  serverless,
  sqs,
  warehouse,
};
