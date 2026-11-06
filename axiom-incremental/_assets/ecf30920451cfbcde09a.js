// scaling.js — IMR-style multi-tier softcap system.
// Effective amount: for each active tier, excess = (raw - start)^(1/power).
// Tiers are applied sequentially on the already-reduced effective value.

import { SCALING } from '/_assets/c24c79b6b7c44a0481ad.js';
import { gameState, lemmaState } from '/_assets/d2c7ede9925029d5b096.js';

export const SCALE_TYPE      = SCALING.TYPE;
export const FULL_SCALE_NAME = SCALING.FULL_NAME;

export function getScalingStart(type, name) {
  const base = SCALING.START[type]?.[name] ?? Infinity;
  if (name === 'sequence_completion' && lemmaState.levels[2] > 0) {
    return base + gameState.theoremCount;
  }
  return base;
}

export function getScalingPower(type) {
  return SCALING.POWER[type] ?? 1;
}

export function scalingActive(name, amt, type) {
  return amt >= getScalingStart(type, name);
}

export function scaledAmt(name, rawAmt) {
  let eff = rawAmt;
  for (const type of SCALE_TYPE) {
    const start = getScalingStart(type, name);
    if (rawAmt < start) break;  // tier activation based on raw level
    if (eff <= start) break;    // effective already compressed below this start, stop
    eff = start + Math.pow(eff - start, 1 / getScalingPower(type));
  }
  return eff;
}

export function scalingTierIndex(name, rawAmt) {
  let idx = 0;
  for (const type of SCALE_TYPE) {
    if (rawAmt < getScalingStart(type, name)) break;
    idx++;
  }
  return idx;
}

export function scalingTierName(name, rawAmt) {
  const idx = scalingTierIndex(name, rawAmt);
  return idx === 0 ? null : SCALE_TYPE[idx - 1];
}

export function scalingFullName(name, rawAmt) {
  const idx = scalingTierIndex(name, rawAmt);
  return idx === 0 ? null : FULL_SCALE_NAME[idx - 1];
}

// Cumulative req multiplier: product of REQ_MULT for each active tier.
export function reqScalingMult(name, count) {
  let mult = 1;
  for (const type of SCALE_TYPE) {
    const start = getScalingStart(type, name);
    if (count < start) break;
    mult *= SCALING.REQ_MULT?.[name]?.[type] ?? 1;
  }
  return mult;
}
