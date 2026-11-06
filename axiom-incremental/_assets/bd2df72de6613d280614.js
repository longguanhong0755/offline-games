// primes.js — Primes tab: find primes by clicking, expand system, upgrades.

import { gameState, iterState } from '/_assets/d2c7ede9925029d5b096.js';
import { PRIMES } from '/_assets/c24c79b6b7c44a0481ad.js';

// ── Sieve of Eratosthenes ─────────────────────────────────────────────────────

function buildSieve(max) {
  const s = new Uint8Array(max + 1).fill(1);
  s[0] = s[1] = 0;
  for (let i = 2; i * i <= max; i++) {
    if (s[i]) for (let j = i * i; j <= max; j += i) s[j] = 0;
  }
  const list = [];
  for (let i = 2; i <= max; i++) if (s[i]) list.push(i);
  return { sieve: s, primes: list };
}

const SIEVE_MAX = PRIMES.EXPAND_CAP;
const { sieve: PRIME_SIEVE, primes: ALL_PRIMES } = buildSieve(SIEVE_MAX);

export function isPrime(n) {
  return n >= 2 && n <= SIEVE_MAX && PRIME_SIEVE[n] === 1;
}

export function primesUpTo(max) {
  let hi = ALL_PRIMES.length;
  for (let i = 0; i < ALL_PRIMES.length; i++) {
    if (ALL_PRIMES[i] > max) { hi = i; break; }
  }
  return ALL_PRIMES.slice(0, hi);
}

// ── Special prime sets ────────────────────────────────────────────────────────

const TWIN_SET = new Set();
for (const p of ALL_PRIMES) {
  if ((p >= 4 && PRIME_SIEVE[p - 2]) || (p + 2 <= SIEVE_MAX && PRIME_SIEVE[p + 2]))
    TWIN_SET.add(p);
}

const SOPHIE_SET = new Set();
for (const p of ALL_PRIMES) {
  if (2 * p + 1 <= SIEVE_MAX && PRIME_SIEVE[2 * p + 1]) SOPHIE_SET.add(p);
}

const EPIC_SET = new Set();
for (let n = 2; 2 ** n - 1 <= SIEVE_MAX; n++) {
  const m = 2 ** n - 1;
  if (PRIME_SIEVE[m]) EPIC_SET.add(m);
}
for (let n = 0; 2 ** (2 ** n) + 1 <= SIEVE_MAX; n++) {
  const f = 2 ** (2 ** n) + 1;
  if (PRIME_SIEVE[f]) EPIC_SET.add(f);
}

// ── Constants ─────────────────────────────────────────────────────────────────

const ELIMINATABLE = (() => {
  const a = [];
  for (let n = 4; n <= 300; n++) if (!PRIME_SIEVE[n]) a.push(n);
  return a;
})();

const SMALL_PRIMES = ALL_PRIMES.filter(p => p <= 1000);

// ── State ─────────────────────────────────────────────────────────────────────

export const primeState = {
  held:        [],
  currentMax:  PRIMES.EXPAND_BASE_MAX,
  expandCount: 0,
  upgrades: {
    attempt:     0,
    nBoost:      0,
    iBoost:      0,
    batch:       0,
    expandEase:  0,
    elimination: 0,
    tauBoost:    0,
  },
  lastClickMs: 0,
  primeDirty:  true,
};

// ── Expand helpers ─────────────────────────────────────────────────────────────

export function expandMinCount() {
  const ratio = primeState.currentMax / PRIMES.EXPAND_BASE_MAX;
  const base = Math.max(1, Math.floor(PRIMES.EXPAND_MIN_BASE * Math.pow(ratio, PRIMES.EXPAND_MIN_EXP)));
  const ease = primeState.upgrades.expandEase;
  if (ease <= 0) return base;
  return Math.max(1, Math.floor(base * Math.pow(PRIMES.EXPAND_EASE_FACTOR, ease)));
}

export function expandGain() {
  const ratio = primeState.currentMax / PRIMES.EXPAND_BASE_MAX;
  const base = primeState.held.length * PRIMES.EXPAND_RATE / Math.pow(ratio, PRIMES.EXPAND_COMPRESS_EXP);
  const ease = primeState.upgrades.expandEase;
  const gainMult = ease > 0 ? Math.pow(PRIMES.EXPAND_EASE_GAIN_FACTOR, ease) : 1;
  return Math.floor(base * gainMult);
}

export function isExpandMaxed() {
  return primeState.currentMax >= PRIMES.EXPAND_CAP;
}

export function canExpand() {
  return !isExpandMaxed() && primeState.held.length >= expandMinCount();
}

export function doExpand() {
  if (!canExpand()) return false;
  const gain = expandGain();
  primeState.held = [];
  primeState.currentMax = Math.min(primeState.currentMax + gain, PRIMES.EXPAND_CAP);
  primeState.expandCount++;
  primeState.primeDirty = true;
  return true;
}

// ── Click attempt ─────────────────────────────────────────────────────────────

export function attemptCooldownMs() {
  return Math.max(50, PRIMES.BASE_COOLDOWN_MS / (1 + primeState.upgrades.attempt * PRIMES.ATTEMPT_COOLDOWN_FACTOR));
}

export function doAttempt() {
  const now = Date.now();
  if (now - primeState.lastClickMs < attemptCooldownMs()) return null;
  primeState.lastClickMs = now;

  const rolls = 1 + primeState.upgrades.batch;
  const heldSet = new Set(primeState.held);
  const elim = new Set(ELIMINATABLE.slice(0, primeState.upgrades.elimination));
  const max = primeState.currentMax;
  const results = [];

  for (let r = 0; r < rolls; r++) {
    let n, attempts = 0;
    do {
      n = Math.floor(Math.random() * (max - 1)) + 2;
      attempts++;
    } while (attempts < 500 && (heldSet.has(n) || elim.has(n)));

    const alreadyHeld = heldSet.has(n);
    const prime = isPrime(n);
    if (prime && !alreadyHeld) {
      primeState.held.push(n);
      primeState.held.sort((a, b) => a - b);
      heldSet.add(n);
    }
    results.push({ n, prime, alreadyHeld });
  }

  return results;
}

// ── Upgrade costs ─────────────────────────────────────────────────────────────

function costSpec(name, level) {
  const e1 = primeState.expandCount >= 1;
  switch (name) {
    case 'attempt': {
      const idx = e1 ? Math.floor(level / 2) + 1 : level + 1;
      const count = Math.max(1, Math.floor(Math.pow(PRIMES.ATTEMPT_COUNT_RATE, level)));
      return { count, minVal: SMALL_PRIMES[Math.min(idx, SMALL_PRIMES.length - 1)] };
    }
    case 'nBoost': {
      const count = level + 1;
      return { count, minVal: SMALL_PRIMES[Math.min(level * 4 + 4, SMALL_PRIMES.length - 1)] };
    }
    case 'iBoost': {
      const count = (level + 1) * 2;
      return { count, minVal: SMALL_PRIMES[Math.min(level * 4 + 6, SMALL_PRIMES.length - 1)] };
    }
    case 'batch': {
      const count = Math.floor(PRIMES.BATCH_COUNT_START * Math.pow(PRIMES.BATCH_COUNT_RATE, level));
      return { count, minVal: SMALL_PRIMES[Math.min(level * 3 + 2, SMALL_PRIMES.length - 1)] };
    }
    case 'elimination':
      return { count: 5, minVal: SMALL_PRIMES[Math.min(level * 2 + 4, SMALL_PRIMES.length - 1)] };
    case 'expandEase': {
      const nCost = PRIMES.EXPAND_EASE_N_BASE * Math.pow(PRIMES.EXPAND_EASE_N_SCALE, level);
      return { nCost };
    }
    case 'tauBoost':
      return { count: 2, minVal: SMALL_PRIMES[Math.min(level + 24, SMALL_PRIMES.length - 1)] };
    default: return null;
  }
}

export function upgradeCostSpec(name) {
  return costSpec(name, primeState.upgrades[name] ?? 0);
}

export const PRIME_MILESTONES = [
  { maxReq: PRIMES.MILESTONE_MAX[0], label: 'Batch',       sub: 'upgrade unlock'                    },
  { maxReq: PRIMES.MILESTONE_MAX[1], label: 'Catalyst',    sub: 'upgrade unlock'                    },
  { maxReq: PRIMES.MILESTONE_MAX[2], label: 'Elimination', sub: 'upgrade unlock'                    },
  { maxReq: PRIMES.MILESTONE_MAX[3], label: 'τ Boost',     sub: 'upgrade unlock'                    },
  { maxReq: PRIMES.MILESTONE_MAX[4], label: 'Proliferate', sub: 'N/s ×' + PRIMES.MILESTONE_N_BOOST1 },
];

export function primeMilestoneNBoost() {
  let b = 1;
  if (primeState.currentMax >= PRIMES.MILESTONE_MAX[4]) b *= PRIMES.MILESTONE_N_BOOST1;
  return b;
}

export function isUpgradeVisible(name) {
  if (name === 'batch')       return primeState.currentMax >= PRIMES.MILESTONE_MAX[0];
  if (name === 'expandEase')  return primeState.currentMax >= PRIMES.MILESTONE_MAX[1];
  if (name === 'elimination') return primeState.currentMax >= PRIMES.MILESTONE_MAX[2];
  if (name === 'tauBoost')    return primeState.currentMax >= PRIMES.MILESTONE_MAX[3];
  return true;
}

export function canBuyUpgrade(name) {
  if (!isUpgradeVisible(name)) return false;
  const spec = upgradeCostSpec(name);
  if (!spec) return false;
  if (spec.nCost !== undefined) return gameState.N.gte(spec.nCost);
  return primeState.held.filter(p => p >= spec.minVal).length >= spec.count;
}

export function buyPrimeUpgrade(name) {
  if (!canBuyUpgrade(name)) return;
  const spec = upgradeCostSpec(name);
  if (spec.nCost !== undefined) {
    gameState.N = gameState.N.sub(new Decimal(spec.nCost));
  } else {
    const qualifying = primeState.held.filter(p => p >= spec.minVal);
    for (const p of qualifying.slice(0, spec.count)) {
      const i = primeState.held.indexOf(p);
      if (i !== -1) primeState.held.splice(i, 1);
    }
  }
  primeState.upgrades[name]++;
  primeState.primeDirty = true;
}

// ── Rarity ────────────────────────────────────────────────────────────────────

export function primeRarity(p) {
  const isEpic   = EPIC_SET.has(p);
  const isSophie = SOPHIE_SET.has(p);
  const isTwin   = TWIN_SET.has(p);
  const count    = (isEpic ? 1 : 0) + (isSophie ? 1 : 0) + (isTwin ? 1 : 0);
  if (count >= 2) return 'legendary';
  if (isEpic)     return 'epic';
  if (isSophie)   return 'rare';
  if (isTwin)     return 'uncommon';
  return 'common';
}

// ── Bonuses & boosts ──────────────────────────────────────────────────────────

export function commonPrimeBonus() {
  let bonus = 0;
  for (const p of primeState.held) {
    const r = primeRarity(p);
    if (r === 'common')    bonus += PRIMES.COMMON_N_PER_PRIME;
    if (r === 'uncommon')  bonus += PRIMES.UNCOMMON_N_PER_PRIME;
    if (r === 'legendary') bonus += PRIMES.LEGENDARY_N_PER_PRIME;
  }
  return 1 + bonus;
}

export function rarePrimeBonus() {
  let bonus = 0;
  for (const p of primeState.held) {
    const r = primeRarity(p);
    if (r === 'rare')      bonus += PRIMES.RARE_I_PER_PRIME;
    if (r === 'epic')      bonus += PRIMES.EPIC_I_PER_PRIME;
    if (r === 'legendary') bonus += PRIMES.LEGENDARY_I_PER_PRIME;
  }
  return 1 + bonus;
}

export function primeNBoost() {
  return Math.pow(1 + PRIMES.N_BOOST_PER_LEVEL, primeState.upgrades.nBoost);
}

export function primeIBoost() {
  return Math.pow(1 + PRIMES.I_BOOST_PER_LEVEL, primeState.upgrades.iBoost);
}

export function primeTauBoost() {
  return 1 + primeState.upgrades.tauBoost * PRIMES.TAU_BOOST_PER_LEVEL;
}
