// iteration.js — Iteration prestige layer: ℐ system.
// Sits above Theorems and Sequences; resets all of layer 0.

import { gameState, iterState, lemmaState } from '/_assets/d2c7ede9925029d5b096.js';
import { showConfirm } from '/_assets/9f97f3e9c4a006c45f05.js';
import { fmt } from '/_assets/6448d0556ec80157a1ac.js';
import { ITER, LEMMA } from '/_assets/c24c79b6b7c44a0481ad.js';
import { seqState, resetSeqState } from '/_assets/39bc0725aa17e2322457.js';
import { sigmaState } from '/_assets/aa5dc9827efa02a28524.js';
import { save } from '/_assets/09fec7785193a67b4075.js';
import { primeIBoost, rarePrimeBonus } from '/_assets/bd2df72de6613d280614.js';
import { residueState } from '/_assets/b3875d91ee440746da08.js';

// ── Math ──────────────────────────────────────────────────────────────────────

function effectiveIterScale() {
  const lvl = lemmaState.levels[0];
  return lvl > 0 ? ITER.SCALE * Math.pow(LEMMA.L1_SCALE_FACTOR, lvl) : ITER.SCALE;
}

// floor(log10(N+1)^K / SCALE × primeIBoost × rarePrimeBonus)
export function computeIter(N) {
  if (N.lte(0)) return 0;
  const log10 = N.add(1).log10().toNumber();
  const raw = Math.pow(log10, ITER.K) / effectiveIterScale();
  return Math.max(0, Math.floor(raw * primeIBoost() * rarePrimeBonus()));
}

// N needed to earn exactly k ℐ: 10^(sqrt(k * SCALE))
export function iterThreshold(k) {
  return new Decimal(10).pow(Math.sqrt(k * effectiveIterScale()));
}

// (ℐ+1)^MULT_EXP, softcapped at MULT_SOFTCAP_AT: excess^MULT_SOFTCAP_EXP
export function iterMult() {
  if (iterState.count <= 0) return 1;
  const raw = Math.pow(iterState.count + 1, ITER.MULT_EXP);
  if (raw <= ITER.MULT_SOFTCAP_AT) return raw;
  return ITER.MULT_SOFTCAP_AT + Math.pow(raw - ITER.MULT_SOFTCAP_AT, ITER.MULT_SOFTCAP_EXP);
}

// ── Action ────────────────────────────────────────────────────────────────────

export function doIter() {
  const earned = computeIter(gameState.N);
  if (earned <= 0) return;

  iterState.count += earned;

  // Full layer-0 reset
  gameState.N               = new Decimal(0);
  gameState.axiomCount      = 0;
  gameState.theoremCount    = 0;
  gameState.theoremUnlocked = false;
  for (const upg of gameState.upgrades) {
    upg.level = 0;
    if (upg.unlockCondition !== null) upg.unlocked = false;
  }

  // Full sequence reset (slots, vars, pts, ref, geoUpgrades)
  resetSeqState({ keepPts: false });
  seqState.refPts   = 0;
  seqState.refCount = 0;
  seqState.geoUpgrades.baseScaling.level    = 0;
  seqState.geoUpgrades.baseScaling.unlocked = false;

  // Hide sequences tab until re-earned
  gameState.sequencesUnlocked = false;
  const seqTab = document.getElementById('tab-sequences');
  if (seqTab) seqTab.style.display = 'none';

  sigmaState.elapsed     = 0;
  sigmaState.currentSlot = 0;
  residueState.hasConverted = false;

  gameState.domDirty    = true;
  gameState.seqDomDirty = true;
  gameState.itDomDirty  = true;

  save();
}

// ── Ripple effect ─────────────────────────────────────────────────────────────

function spawnRipple(anchorRect) {
  const cx = anchorRect.left + anchorRect.width  / 2;
  const cy = anchorRect.top  + anchorRect.height / 2;

  const ns = 'http://www.w3.org/2000/svg';
  for (let i = 0; i < 3; i++) {
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'iter-ripple');
    svg.setAttribute('viewBox', '0 0 200 200');
    svg.style.left           = cx + 'px';
    svg.style.top            = cy + 'px';
    svg.style.animationDelay = (i * 90) + 'ms';

    const circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('cx', '100');
    circle.setAttribute('cy', '100');
    circle.setAttribute('r',  '99');
    circle.setAttribute('stroke', i === 0 ? '#d4960e' : i === 1 ? '#9a6610' : '#5a3e08');
    circle.setAttribute('stroke-width', String(1.8 - i * 0.3));
    circle.setAttribute('fill', 'none');
    svg.appendChild(circle);

    document.body.appendChild(svg);
    svg.addEventListener('animationend', () => svg.remove(), { once: true });
  }
}

// ── DOM helper ────────────────────────────────────────────────────────────────

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls)                e.className   = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

// ── SVG icon — concentric rings with cardinal ticks (cosmos / recursion) ──────

const ITER_ICON = `<svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
  <circle cx="26" cy="26" r="22" stroke="#5a3e08" stroke-width="1.2" fill="none"/>
  <circle cx="26" cy="26" r="14" stroke="#6e4e10" stroke-width="1.2" fill="none"/>
  <circle cx="26" cy="26" r="6"  stroke="#826018" stroke-width="1.2" fill="none"/>
  <line x1="26" y1="4"  x2="26" y2="10" stroke="#826018" stroke-width="1.6"/>
  <line x1="26" y1="42" x2="26" y2="48" stroke="#826018" stroke-width="1.6"/>
  <line x1="4"  y1="26" x2="10" y2="26" stroke="#826018" stroke-width="1.6"/>
  <line x1="42" y1="26" x2="48" y2="26" stroke="#826018" stroke-width="1.6"/>
  <line x1="10" y1="10" x2="14" y2="14" stroke="#5a3e08" stroke-width="1"/>
  <line x1="42" y1="10" x2="38" y2="14" stroke="#5a3e08" stroke-width="1"/>
  <line x1="10" y1="42" x2="14" y2="38" stroke="#5a3e08" stroke-width="1"/>
  <line x1="42" y1="42" x2="38" y2="38" stroke="#5a3e08" stroke-width="1"/>
</svg>`;

// ── DOM Build ─────────────────────────────────────────────────────────────────

export function buildIterationDOM() {
  const col = document.getElementById('iteration-column');
  if (!col) return;
  col.innerHTML = '';

  col.appendChild(el('div', 'section-header', 'ITERATION'));

  const card = el('div', 'iteration-card first-in-group');

  const iconWrap = el('div', 'iteration-icon');
  iconWrap.innerHTML = ITER_ICON;
  card.appendChild(iconWrap);

  card.appendChild(el('div', 'iteration-label', 'ℐ  ·  iterate'));
  card.appendChild(el('div', 'iter-divider'));

  // Stat rows
  const rows = [
    { label: 'earn',        attr: 'iterEarn',   extra: '' },
    { label: 'next ℐ at', attr: 'iterNextAt', extra: 'iter-val-dim' },
    { label: 'total ℐ', attr: 'iterTotal',  extra: '' },
    { label: 'production',  attr: 'iterMult',   extra: 'iter-val-mult' },
  ];
  for (const { label, attr, extra } of rows) {
    const row = el('div', 'iter-stat-row');
    row.appendChild(el('span', 'iter-stat-label', label));
    const val = el('span', 'iter-stat-val' + (extra ? ' ' + extra : ''));
    val.dataset[attr] = '';
    row.appendChild(val);
    card.appendChild(row);
  }

  card.appendChild(el('div', 'iter-divider'));
  card.appendChild(el('div', 'iter-warning',
    'costs everything  ·  all progress resets  ·  a new layer begins'));

  const btn = el('button', 'iterate-btn', '[ iterate ]');
  btn.dataset.iterBtn = '';
  btn.addEventListener('click', () => {
    const rect = btn.getBoundingClientRect();
    showConfirm('perform iteration? all layer 0 progress resets.', () => {
      spawnRipple(rect);
      doIter();
    });
  });
  card.appendChild(btn);

  col.appendChild(card);
}

// ── Per-frame update ──────────────────────────────────────────────────────────

export function updateIterationText() {
  const earned   = computeIter(gameState.N);
  const total    = iterState.count;
  const mult     = iterMult();
  const nextAt   = iterThreshold(earned + 1);

  const earnEl   = document.querySelector('[data-iter-earn]');
  const nextAtEl = document.querySelector('[data-iter-next-at]');
  const totalEl  = document.querySelector('[data-iter-total]');
  const multEl   = document.querySelector('[data-iter-mult]');
  const btnEl    = document.querySelector('[data-iter-btn]');

  if (earnEl)   earnEl.textContent   = '+' + earned + ' ℐ';
  if (nextAtEl) nextAtEl.textContent = fmt(nextAt) + ' N';
  if (totalEl)  totalEl.textContent  = total + ' ℐ';
  if (multEl)   multEl.textContent   = '×' + (mult <= 1 ? '1.000' : mult.toFixed(3));
  if (btnEl)    btnEl.disabled       = earned <= 0;
}
