// ── balance.js ────────────────────────────────────────────────────────────────
// Single source of truth for all numerical balance parameters.
// Change values here; nothing else needs touching.

// ── Upgrades ──────────────────────────────────────────────────────────────────

export const SUCCESSOR = {
  COST_BASE:  10,
  COST_SCALE: 1.8,
};

export const ADDITION = {
  COST_BASE:      100,
  COST_SCALE:     2.5,
  EFFECT_EXP:     1.2,   // A = (lvl+1)^EXP  — base that Multiplication will exponentiate
  UNLOCK_AT_SUCC: 3,      // Successor levels required
};

export const MULTIPLICATION = {
  COST_BASE:      1500,
  COST_SCALE:     6,
  EFFECT_COEFF:   2.02,   // M = 1 + log10(lvl+1)*COEFF  → A^M (exponent on Addition's base)
  UNLOCK_AT_ADD:  2,      // Addition levels required
};

export const EXPONENTIATION = {
  COST_BASE:       5000,
  COST_SCALE:      95,
  EFFECT_COEFF:    0.3,  // E = 1 + log10(lvl+1)*COEFF  → M^E (exponent of Multiplication's exponent)
  UNLOCK_AT_THMS:  1,     // Theorems required
};

// ── Prestige: Axiom ───────────────────────────────────────────────────────────

export const AXIOM = {
  REQ_BASE:            1e4,
  // n ≤ REQ_ACC_THRESHOLD : REQ_BASE × REQ_EXP_BASE^n
  // n >  REQ_ACC_THRESHOLD : REQ_BASE × REQ_EXP_BASE^(n × REQ_ACC_RATE^(n - REQ_ACC_THRESHOLD))
  REQ_EXP_BASE:        2,
  REQ_ACC_RATE:        1.09,

  MULT_PER_AXIOM:      1.75,   // production ×N per axiom (before threshold)
  MULT_PER_AXIOM_HIGH: 1.62,   // retroactive boost at MULT_THRESHOLD
  MULT_THRESHOLD:      7,      // axiomCount at which HIGH kicks in

  COST_REDUCTION_AX:   5,      // axiomCount that unlocks -25% upgrade costs
  COST_REDUCTION_MULT: 0.75,

  RECURSION_AX:        3,      // axiomCount at which base bonus activates
  RECURSION_PER_AXIOM: 2,      // +N N/s per axiom once active

  AX12_LOG_COEFF:      0.15,   // ax.12 boost = 1 + log10(axioms+1) * coeff
  AX20_LOG_EXP:        1.5,    // ax.20 boost = log10(axioms+1)^k
};

// ── Prestige: Theorem ─────────────────────────────────────────────────────────

export const THEOREM = {
  REQ_BASE:     1e11,
  // REQ_BASE × REQ_EXP_BASE^(n × REQ_ACC_RATE^n)  — accelerates from the first reset
  // n=0: 10B  n=1: ~28B  n=2: ~226B  n=3: ~11T  n=4: ~12e15
  REQ_EXP_BASE: 4,
  REQ_ACC_RATE: 2.5,

  MULT_PER_THM: 1.5,  // production ×N per theorem

  UNLOCK_AT_AX: 10,   // axiomCount needed to permanently unlock Theorems

  MILESTONE4_REQ: 4,    // theoremCount to unlock 4th milestone
  MILESTONE4_EXP: 0.2,  // N/s × theorems^EXP
};

// ── Milestone: Sigma (th.2) ───────────────────────────────────────────────────

export const SIGMA = {
  COEFF:      0.08,   // +N% production per total upgrade level
  UNLOCK_THM: 2,
};

// ── Sequences ─────────────────────────────────────────────────────────────────

export const ARITHMETIC_SEQ = {
  UNLOCK_THM:       3,     // Theorems needed to unlock

  TERMS_PER_COMP:   5,     // terms to buy before a completion triggers

  COST_BASE:        5e7,   // N cost of term 0
  COST_SCALE:       5,     // ×N per total term (completions×5 + terms) — pure exponential

  // totalMult = ∏ (MULT_BASE + MULT_STEP * i)  for i = 1..completions
  MULT_BASE:  1.3,
  MULT_STEP:  0.1,

  A_BOOST_PER_PT: 0.10,  // each pt allocated to 'a' → +10% base multiplier
  D_STEP_PER_PT:  0.025, // each pt allocated to 'd' → +0.025 per-completion mult step
};

export const GEOMETRIC_SEQ = {
  REFORMULATE_COST:      100,   // pts to switch from arithmetic
  NEXT_REFORMULATE_COST: 1000,  // pts to switch from geometric to polynomial
  TERMS_PER_COMP:   5,
  COST_BASE:        5e9,  // 100× more expensive than arithmetic
  COST_SCALE:       6,    // steeper per-term scaling

  BASE_R:           1.5,  // base ratio when r pts = 0
  A_BOOST_PER_PT:   0.08, // each a pt → +8% flat multiplier
  R_BOOST_PER_PT:   0.05, // each r pt → +0.05 to ratio
};

// ── Sequence Reset (mini-prestige inside Sequences tab) ───────────────────

export const SEQ_RESET = {
  POINTS_BASE:    5e5,  // N threshold for first point at 0 pts held
  POINTS_SCALE:   3,    // ×3 N per additional point (log3 curve)
  PTS_HELD_SCALE: 1.08, // POINTS_BASE multiplied by this for each pt currently held
  POINT_BOOST:    0.25, // each allocated point adds +25% to active sequence's final multiplier
  PTS_CAP:        500,  // total pts ceiling (reserve + allocated); excess is not earned
};

// ── Completion Softcap ────────────────────────────────────────────────────────
// effective_mult = threshold_mult + (raw_mult - threshold_mult)^K  for comps > THRESHOLD
export const COMPLETIONS_SOFTCAP = {
  THRESHOLD: 5,
  K:         0.5,  // square-root feel — clear diminishing returns past comp 5
};

// ── Geometric Sequence: Base Scaling upgrade ──────────────────────────────────
// Each level amplifies 'a' variable's contribution based on total terms bought.
// effectiveABoost = A_BOOST_PER_PT × (1 + level × TERM_RATE × totalTerms)
export const BASE_SCALING = {
  COST_BASE:  1,    // pts cost for level 1
  COST_SCALE: 2.5,   // cost ×N per additional level  (lv1=15, lv2=38, lv3=94…)
  TERM_RATE:  0.01, // a boost multiplier per term per upgrade level
};

// ── Reformulate ref ───────────────────────────────────────────────────────────
// nth reformulate (1-indexed) earns n pts; mult = MULT_BASE^refPts
export const REF = {
  PTS_STEP:  1,     // pts earned per reformulate = refCount × PTS_STEP
  MULT_BASE: 2,  // ref mult = MULT_BASE^refPts
};

// ── Iteration (ℐ) ─────────────────────────────────────────────────────────────
// ℐ earned = floor(log10(N+1)^K / SCALE)   e.g. at 1Ud (1e36): floor(36^2/1296) = 1 ℐ
// Production multiplier = (ℐ + 1)^MULT_EXP
export const ITER = {
  UNLOCK_AT_AX:      20,    // axiomCount to permanently unlock Iteration tab
  K:                 2,     // exponent in acquisition formula
  SCALE:             1296,  // divisor so that N=1Ud (1e36) → earn exactly 1 ℐ
  MULT_EXP:          0.75,  // production multiplier exponent: (ℐ+1)^MULT_EXP
  MULT_SOFTCAP_AT:   15,    // raw mult threshold where softcap begins
  MULT_SOFTCAP_EXP:  0.5,   // excess^EXP beyond threshold (square-root feel)
};

// ── Sigma Automation ─────────────────────────────────────────────────────────
// freq cost for level n→n+1: ceil(FREQ_BASE_COST × FREQ_COST_SCALE^(n-1))
// freq=1→2: 1 ℐ  ·  2→3: 3 ℐ  ·  3→4: 9 ℐ  ·  4→5: 27 ℐ
export const SIGMA_AUTO = {
  FREQ_BASE_COST:  1,
  FREQ_COST_SCALE: 3,
};

// ── Harmonic Amplifier ────────────────────────────────────────────────────────
// Harmonic Amplifier: each level multiplies effective freq by EFFECT_MULT
// cost for level n: ceil(COST_BASE * COST_SCALE^n)
// lv0→1: 3 ℐ  lv1→2: 12 ℐ  lv2→3: 48 ℐ
export const FREQ_AMP = {
  COST_BASE:   1e21,   // 1 Sx N for first purchase
  COST_SCALE:  2500,   // ×2500 N per level
  EFFECT_MULT: 1.05,    // ×1.05 effective freq per level
};

// ── Epoch ─────────────────────────────────────────────────────────────────────
// Epoch 1: permanent one-time purchase.
// E1_ITER_K: boost = max(1, log10(ℐ+1)^k)  e.g. at 100 ℐ → ×4,  1000 ℐ → ×9
// Epoch 2: unlocks Orbit tab; requires Epoch 1.
export const EPOCH = {
  E1_COST:       1,     // ℐ cost
  E1_FLAT_BOOST: 3,     // ×3 N production
  E1_ITER_K:     2,     // log10(ℐ+1)^k exponent
  E1_PTS_CAP:    750,   // reserve pts cap (replaces SEQ_RESET.PTS_CAP = 500)

  E2_COST:       1,     // ℐ cost
  E2_N_BOOST:    2,     // ×2 N production (permanent)
  E2_PTS_MULT:   1.2,   // ×1.2 pts earned per sequence reset
};

// ── Epoch 3 ───────────────────────────────────────────────────────────────────
export const EPOCH3 = {
  COST:        1,     // ℐ cost
  EXP_COST_K:  0.5,  // exponentiation cost × (1 / log10(ℐ+1)^k)
  TAU_SELF_K:  0.15, // τ gain × (τ+1)^k
};

// ── Orbit ─────────────────────────────────────────────────────────────────────
// Concentric orbits earn τ (tau) per revolution.
// Layer 0 is innermost (fastest, least τ/rev); each reset adds one outer layer.
export const ORBIT = {
  BASE_REV_RATE:        0.1,    // inner orbit: 1 revolution per 10 seconds
  SPEED_RATIO:          2.5,    // each outer layer is 2.5× slower
  BASE_TAU_PER_REV:     1,      // inner orbit: 1 τ per revolution
  TAU_RATIO:            3,      // each outer layer earns 3× more τ/rev
  SPEED_COST_BASE:      10,     // τ cost for speed lv0→1
  SPEED_COST_SCALE:     3,      // ×3 per level
  SPEED_MULT:           1.3,    // ×1.3 rev/s per speed level
  GAIN_COST_BASE:       15,     // τ cost for gain lv0→1
  GAIN_COST_SCALE:      3,
  GAIN_MULT:            1.5,    // ×1.5 τ/rev per gain level
  ORBIT_N_EXP:          0.15,   // k per nBoostLevel: production × τ^(level × k)
  N_BOOST_COST_BASE:    100,
  N_BOOST_COST_SCALE:   25,
  SEQ_BOOST_COEFF:      0.02,   // seq mult × (1 + seqBoostLevel × coeff × τ)
  SEQ_BOOST_COST_BASE:  200,
  SEQ_BOOST_COST_SCALE: 25,
  CANVAS_SIZE:          220,
  RADIUS_BASE:          35,     // innermost circle radius (px)
  RADIUS_STEP:          25,     // radius increment per outer layer
  ORBIT_RESET_BASE:         10,  // τ cost for first new orbit
  ORBIT_RESET_SCALE:        10,  // ×N per layer (layers < threshold)
  ORBIT_RESET_SCALE_THRESH:  9,  // layers where escalation starts (×100, ×1000, ×10000…)
  CYCLE_MULT_COST_BASE:  1e12,  // N cost for cycle amplifier lv0→1
  CYCLE_MULT_COST_SCALE: 10,   // exponent = lvl*(lvl+1)/2 → per-level mult grows as ×10, ×100, ×1000…
  CYCLE_MULT:            1.5,   // ×τ/rev for all cycles per level
  SPEED_LAYER_SCALE:     1.5,   // each outer cycle's softcap threshold ×1.5 (more lenient)
  GAIN_LAYER_SCALE:      1.4,   // each outer cycle's softcap threshold ×1.4
};

// ── Epoch 4 ───────────────────────────────────────────────────────────────────
export const EPOCH4 = {
  COST:        1,
  TAU_PTS_K:   0.05,   // pts gain × (τ+1)^k
  EPOCH_N_K:   0.5,   // N × (epochCount+1)^k
};

// ── Epoch 5 ───────────────────────────────────────────────────────────────────
export const EPOCH5 = {
  COST:      1,
  N_BOOST:   1.2,
  TAU_BOOST: 1.8,
};

// ── Lemma upgrades ────────────────────────────────────────────────────────────
// Lemma 1: ℐ acquisition scale = ITER.SCALE × L1_SCALE_FACTOR^level
// Lemma 2: τ gain per cycle × (cycleIndex+1)^(L2_BASE_EXP + (lv-1)×L2_EXP_STEP)
// Lemma 3: seq softcap threshold = COMPLETIONS_SOFTCAP.THRESHOLD + theoremCount (lv1 cap)
// Lemma 4: pts cap += floor(log10(N+1) × L4_K × level)
export const LEMMA = {
  L1_COST:         1e48,
  L1_SCALE_FACTOR: 0.35,

  L2_COST:         7.5e52,
  L2_BASE_EXP:     1.2,
  L2_EXP_STEP:     0.15,

  L3_COST:         9e63,

  L_PRIME_COST:    5e75,  // Lemma 4: Prime Theory

  L4_COST:         1e89,
  L4_K:            5,

  L_RESIDUE_COST:  8,   // ℐ cost for Residue unlock
};

// ── Residue (ρ) ───────────────────────────────────────────────────────────────
// ρ per convert = floor(log10(N+1)^RHO_LOG_EXP)
// floor 0→1 costs COST_BASE ρ, ×COST_SCALE per existing floor level
export const RESIDUE = {
  RHO_LOG_EXP: 1.5,
  COST_BASE:   3,
  COST_SCALE:  2.5,
};

// ── Primes ────────────────────────────────────────────────────────────────────
export const PRIMES = {
  EXPAND_BASE_MAX:         100,    // starting search range
  EXPAND_MIN_BASE:         8,      // min primes to expand at base max
  EXPAND_MIN_EXP:          0.75,   // how fast min grows with max
  EXPAND_RATE:             10,     // max gained per prime at base max
  EXPAND_COMPRESS_EXP:     2.6,    // bigger max → less gain per prime
  EXPAND_CAP:              100000, // hard cap (sieve limit)
  MILESTONE_MAX:           [300, 400, 1000, 5000, 20000],
  MILESTONE_N_BOOST1:      1.5,   // N/s mult at milestone 5
  EXPAND_EASE_N_BASE:      5e65,
  EXPAND_EASE_N_SCALE:     3000,
  EXPAND_EASE_FACTOR:      0.82,  // expandMinCount × factor^level
  EXPAND_EASE_GAIN_FACTOR: 1.2,   // expandGain × factor^level
  BASE_COOLDOWN_MS:        3000,
  ATTEMPT_COOLDOWN_FACTOR: 0.03,
  N_BOOST_PER_LEVEL:       0.4,
  I_BOOST_PER_LEVEL:       0.6,
  TAU_BOOST_PER_LEVEL:     0.3,
  ATTEMPT_COUNT_RATE:      1.30,
  BATCH_COUNT_START:       3,
  BATCH_COUNT_RATE:        2.25,
  COMMON_N_PER_PRIME:      0.02,
  UNCOMMON_N_PER_PRIME:    0.05,
  RARE_I_PER_PRIME:        0.10,
  EPIC_I_PER_PRIME:        0.50,
  LEGENDARY_N_PER_PRIME:   0.05,
  LEGENDARY_I_PER_PRIME:   0.10,
};

// ── Scaling (IMR-style multi-tier softcap) ────────────────────────────────────
// Formula per active tier: effective = start + (excess)^(1/power)
// Tiers are checked sequentially against the already-reduced effective value.
// POWER per tier is shared across all targets — higher tier = stronger reduction.
export const SCALING = {
  TYPE:      ['prime', 'formal', 'superior', 'abstract', 'hyper', 'ultra', 'infinite', 'eternal'],
  FULL_NAME: ['Prime', 'Formal', 'Superior', 'Abstract', 'Hyper', 'Ultra', 'Infinite', 'Eternal'],
  // Thresholds in effective-amount space (checked against prior-tier-reduced value).
  // Gaps widen dramatically each tier — reaching the next tier requires vastly more raw progress.
  START: {
    prime:    { axiom: 20,   theorem: 3,   successor: 55,    addition: 32,   multiplication: 22,  exponentiation: 16,  sequence_completion: 10,  'orbit-speed': 10,  'orbit-gain': 5,  'orbit-seq-boost': 3,   'orbit-n-boost': 6   },
    formal:   { axiom: 45,   theorem: 7,   successor: 130,   addition: 75,   multiplication: 52,  exponentiation: 38,  sequence_completion: 25,  'orbit-speed': 35,  'orbit-gain': 28,  'orbit-seq-boost': 8,   'orbit-n-boost': 15  },
    superior: { axiom: 90,   theorem: 15,  successor: 350,   addition: 200,  multiplication: 140, exponentiation: 100, sequence_completion: 65,  'orbit-speed': 72, 'orbit-gain': 50,  'orbit-seq-boost': 18,  'orbit-n-boost': 35  },
    abstract: { axiom: 180,  theorem: 30,  successor: 900,   addition: 520,  multiplication: 370, exponentiation: 260, sequence_completion: 170, 'orbit-speed': 155, 'orbit-gain': 120, 'orbit-seq-boost': 40,  'orbit-n-boost': 80  },
    hyper:    { axiom: 400,  theorem: 65,  successor: 2500,  addition: 1400, multiplication: 1000,exponentiation: 700, sequence_completion: 450, 'orbit-speed': 650, 'orbit-gain': 490, 'orbit-seq-boost': 90,  'orbit-n-boost': 180 },
    ultra:    { axiom: 900,  theorem: 140, successor: 7000,  addition: 4000, multiplication: 2800,exponentiation: 2000,sequence_completion: 1300,'orbit-speed': 1500,'orbit-gain': 1150,'orbit-seq-boost': 200, 'orbit-n-boost': 420 },
    infinite: { axiom: 2200, theorem: 320, successor: 22000, addition: 12000,multiplication: 8500,exponentiation: 6000,sequence_completion: 4000,'orbit-speed': 4000,'orbit-gain': 3000,'orbit-seq-boost': 500, 'orbit-n-boost': 1000},
    eternal:  { axiom: 6000, theorem: 800, successor: 80000, addition: 45000,multiplication: 32000,exponentiation:22000,sequence_completion:15000,'orbit-speed':12000,'orbit-gain': 9000,'orbit-seq-boost': 1200,'orbit-n-boost': 2500},
  },
  // Reduction exponent denominator: effective excess = excess^(1/power).
  // Each tier applies a far more brutal cap than the last.
  POWER: {
    prime:    1.5,
    formal:   3.5,
    superior: 8,
    abstract: 18,
    hyper:    40,
    ultra:    90,
    infinite: 200,
    eternal:  500,
  },
  // Multiplicative req penalty per tier (stacks across all active tiers).
  // Escalates aggressively — later tiers make prestige req astronomically higher.
  REQ_MULT: {
    axiom:   { prime: 1e6, formal: 1e13,  superior: 1e11, abstract: 1e16, hyper: 1e22, ultra: 1e30, infinite: 1e40, eternal: 1e55 },
    theorem: { prime: 1e12, formal: 1e16, superior: 1e19, abstract: 1e26, hyper: 1e35, ultra: 1e47, infinite: 1e62, eternal: 1e82 },
  },
};

// ── Engine ────────────────────────────────────────────────────────────────────

export const ENGINE = {
  DELTA_CAP:           30,        // max seconds per tick (backgrounded-tab protection)
  OFFLINE_CAP_SECONDS: 4 * 3600,  // max offline production credit (4 hours)
  OFFLINE_MIN_SECONDS: 5,         // don't bother below this threshold
  SAVE_INTERVAL_MS:    314_000,
  BUY_MAX_CAP:         500,       // max levels purchased in one buy-max click
  AUTOSAVE_OPTIONS:    [10, 30, 60, 314, 600, 3141],  // selectable autosave intervals (seconds)
};
