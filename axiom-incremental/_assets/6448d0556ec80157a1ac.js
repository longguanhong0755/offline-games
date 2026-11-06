// format.js — Number formatting for display.

import { gameState } from '/_assets/d2c7ede9925029d5b096.js';

// Prefix parts for units digit (0–9) and tens groups.
const UNIT_PARTS = ['', 'U', 'D', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No'];
const TENS_PARTS = ['', 'Dc', 'Vg', 'Tg', 'Qag', 'Qig', 'Sxg', 'Spg', 'Ocg', 'Nog'];

// n is the suffix index (1 = K at e3, 2 = M at e6, …, 101 = Ce at e303).
// Returns null when n > 101 (falls through to e-notation).
function getSuffix(n) {
  if (n === 1)   return 'K';
  if (n === 2)   return 'M';
  if (n === 3)   return 'B';
  if (n === 4)   return 'T';
  if (n <= 10)   return UNIT_PARTS[n - 1];   // Qa … No  (e15 – e30)
  if (n === 101) return 'Ce';
  if (n > 101)   return null;
  // n = 11–100: systematic construction
  const k = n - 11;
  return UNIT_PARTS[k % 10] + TENS_PARTS[Math.floor(k / 10) + 1];
}

export function fmt(val) {
  if (!(val instanceof Decimal)) val = new Decimal(val);

  // ── Scientific-notation toggle ────────────────────────────────────────────
  if (gameState.scientificNotation) {
    if (val.layer >= 2) return val.mag.toFixed(3) + '↑↑' + val.layer;
    return val.toExponential(3).replace('e+', 'e');
  }

  // ── Below 1 000: plain decimal ────────────────────────────────────────────
  if (val.lt(1000)) return val.toFixed(3);

  // ── Tetration (break_eternity layer 2+) ───────────────────────────────────
  if (val.layer >= 2) {
    return val.mag.toFixed(3) + '↑↑' + val.layer;
  }

  // log10 of val as a JS number (works for layer 0 and layer 1).
  const log = val.layer === 0 ? val.log10().toNumber() : val.mag;

  // ── Suffix abbreviations  e3 – e305.999 (Ce range) ───────────────────────
  if (log < 306) {
    const n = Math.floor(log / 3);          // 1 → K, 101 → Ce
    const suffix = getSuffix(n);
    if (suffix !== null) {
      const mantissa = val.div(new Decimal(10).pow(n * 3)).toNumber();
      return mantissa.toFixed(3) + suffix;
    }
  }

  // ── e-notation  e306+ (layer 1 break_eternity territory) ─────────────────
  return 'e' + log.toFixed(3);
}

export function fmtRate(val) {
  if (!(val instanceof Decimal)) val = new Decimal(val);
  return '+' + fmt(val) + ' / s';
}
