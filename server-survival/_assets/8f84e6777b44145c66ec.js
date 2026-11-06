// Relational DB job handler (#155 PR 9). Terminal node: completes requests
// whose destination is the database, fails everything else. Logic lifted
// unchanged from the per-type if-chain in Service.update().

import { failRequest, finishRequest } from "/_assets/cd4e22c5d72887a3dfbf.js";
import { FAIL_REASONS } from "/_assets/f248ea24253475b1ef39.js";

export function process(service, job) {
  if (job.req.destination === "db") {
    finishRequest(job.req, service.type, service);
  } else {
    // Not database traffic — a SQL DB is the wrong store for it (#156).
    failRequest(job.req, FAIL_REASONS.WRONG_STORE);
  }
  return "next";
}
