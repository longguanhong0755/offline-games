// Search Engine job handler (#155 PR 9). Terminal node: completes SEARCH
// requests only. Logic lifted unchanged from the per-type if-chain in
// Service.update().

import { failRequest, finishRequest } from "/_assets/cd4e22c5d72887a3dfbf.js";
import { FAIL_REASONS } from "/_assets/f248ea24253475b1ef39.js";

export function process(service, job) {
  if (job.req.type === "SEARCH") {
    finishRequest(job.req, service.type, service);
  } else {
    // A search index serves SEARCH and nothing else (#156).
    failRequest(job.req, FAIL_REASONS.SEARCH_ONLY);
  }
  return "next";
}
