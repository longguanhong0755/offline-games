// residue.js — Residue (ρ) system: persistent upgrade floors that survive resets.

import { gameState, lemmaState } from '/_assets/d2c7ede9925029d5b096.js';
import { RESIDUE } from '/_assets/c24c79b6b7c44a0481ad.js';

export const residueState = {
  rho:          0,
  floors:       [0, 0, 0, 0],
  dirty:        true,
  hasConverted: false,
};

export function isResidueUnlocked() {
  return (lemmaState.levels[5] ?? 0) >= 1;
}

// gain = floor(fraction × log10(N+1)^RHO_LOG_EXP)
// fraction is derived from how much of current N is being spent
export function rhoGain(nDecimal) {
  if (!nDecimal || nDecimal.lte(0)) return 0;
  const fullN = gameState.N;
  if (!fullN || fullN.lte(0)) return 0;
  const fraction = Math.min(1, nDecimal.div(fullN).toNumber());
  const base = Math.pow(fullN.add(1).log10().toNumber(), RESIDUE.RHO_LOG_EXP);
  return Math.floor(fraction * base);
}

export function doConvert(nDecimal) {
  if (!isResidueUnlocked()) return 0;
  if (residueState.hasConverted) return 0;
  if (!nDecimal || nDecimal.lte(0) || gameState.N.lt(nDecimal)) return 0;
  const gain = rhoGain(nDecimal);
  if (gain <= 0) return 0;
  gameState.N = gameState.N.sub(nDecimal);
  residueState.rho += gain;
  residueState.hasConverted = true;
  return gain;
}

export function floorCost(idx) {
  return Math.ceil(RESIDUE.COST_BASE * Math.pow(RESIDUE.COST_SCALE, residueState.floors[idx]));
}

export function canBuyFloor(idx) {
  if (!isResidueUnlocked()) return false;
  if (idx === 3 && gameState.theoremCount < 1) return false;
  return residueState.rho >= floorCost(idx);
}

export function buyFloor(idx) {
  if (!canBuyFloor(idx)) return;
  residueState.rho -= floorCost(idx);
  residueState.floors[idx]++;
}

// ── UI state ──────────────────────────────────────────────────────────────────

let convFrac = 0.5;

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls)                e.className   = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function spawnRhoFloat(container, amount) {
  const floater = document.createElement('div');
  floater.className = 'residue-rho-float';
  floater.textContent = '+' + amount + ' ρ';
  container.appendChild(floater);
  setTimeout(() => floater.remove(), 900);

  const balEl = document.querySelector('[data-residue-bal]');
  if (balEl) {
    balEl.classList.remove('residue-bal-flash');
    void balEl.offsetWidth;
    balEl.classList.add('residue-bal-flash');
    setTimeout(() => balEl.classList.remove('residue-bal-flash'), 500);
  }
}

// ── DOM Build ─────────────────────────────────────────────────────────────────

export function buildResidueDOM() {
  const col = document.getElementById('iter-residue-column');
  if (!col) return;
  col.innerHTML = '';

  col.appendChild(el('div', 'section-header', 'RESIDUE'));

  const body = el('div', 'residue-body');

  // ── Left: convert ─────────────────────────────────────────────────────────
  const leftPanel = el('div', 'residue-panel');

  const balRow = el('div', 'residue-head-row');

  const labelWrap = el('span', 'residue-header-label');
  const iconWrap = el('span', 'residue-header-icon');
  iconWrap.innerHTML = `<svg width="15" height="15" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="2"  width="14" height="3.2" stroke="currentColor" stroke-width="1.1" fill="none"/>
    <rect x="1" y="6.4" width="14" height="3.2" stroke="currentColor" stroke-width="1.1" fill="none" opacity="0.6"/>
    <rect x="1" y="10.8" width="14" height="3.2" stroke="currentColor" stroke-width="1.1" fill="none" opacity="0.28"/>
  </svg>`;
  labelWrap.appendChild(iconWrap);
  labelWrap.appendChild(document.createTextNode('ρ  ·  balance'));
  balRow.appendChild(labelWrap);
  const balVal = el('span', 'residue-balance-val');
  balVal.dataset.residueBal = '';
  balRow.appendChild(balVal);
  leftPanel.appendChild(balRow);

  leftPanel.appendChild(el('div', 'residue-divider'));
  leftPanel.appendChild(el('div', 'residue-section-label', 'convert  N → ρ'));

  const presetRow = el('div', 'residue-preset-row');
  for (const [label, frac] of [['25%', 0.25], ['50%', 0.5], ['75%', 0.75], ['all', 1.0]]) {
    const pBtn = el('button',
      'residue-preset-btn' + (frac === convFrac ? ' residue-preset-active' : ''),
      label);
    pBtn.dataset.residuePreset = String(frac);
    pBtn.addEventListener('click', () => {
      convFrac = frac;
      document.querySelectorAll('[data-residue-preset]').forEach(b =>
        b.classList.toggle('residue-preset-active', parseFloat(b.dataset.residuePreset) === frac)
      );
    });
    presetRow.appendChild(pBtn);
  }
  leftPanel.appendChild(presetRow);

  const convPreview = el('div', 'residue-conv-preview');
  convPreview.dataset.residueConvPreview = '';
  leftPanel.appendChild(convPreview);

  const convBtn = el('button', 'residue-convert-btn', '[ convert ]');
  convBtn.dataset.residueConvBtn = '';
  convBtn.addEventListener('click', () => {
    if (!gameState.N) return;
    const n = gameState.N.mul(convFrac);
    const gained = doConvert(n);
    if (gained > 0) spawnRhoFloat(leftPanel, gained);
  });
  leftPanel.appendChild(convBtn);

  leftPanel.appendChild(el('div', 'residue-divider'));

  const gainDesc = el('div', 'residue-gain-desc');
  gainDesc.dataset.residueGainDesc = '';
  leftPanel.appendChild(gainDesc);

  body.appendChild(leftPanel);

  // ── Right: floors ─────────────────────────────────────────────────────────
  const rightPanel = el('div', 'residue-panel');

  const floorLabel = el('div', 'residue-section-label residue-section-label-icon');
  const floorIcon = el('span', 'residue-header-icon');
  floorIcon.innerHTML = `<svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <polyline points="1,15 1,11 5,11 5,7 9,7 9,3 13,3 13,1" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linejoin="miter"/>
    <line x1="13" y1="1" x2="15" y2="1" stroke="currentColor" stroke-width="1.3"/>
    <line x1="1" y1="15" x2="1" y2="15" stroke="currentColor" stroke-width="1.3"/>
  </svg>`;
  floorLabel.appendChild(floorIcon);
  floorLabel.appendChild(document.createTextNode('upgrade floors'));
  rightPanel.appendChild(floorLabel);

  const FLOOR_NAMES = ['Successor', 'Addition', 'Multiplication', 'Exponentiation'];
  const FLOOR_SHORT = ['Succ', 'Add', 'Mult', 'Exp'];
  const columnsRow = el('div', 'residue-columns-row');

  for (let i = 0; i < 4; i++) {
    const floorCol = el('div', 'residue-floor-col');
    floorCol.dataset.residueFloorCol = String(i);

    const nameEl = el('span', 'residue-floor-col-name', FLOOR_SHORT[i]);
    nameEl.title = FLOOR_NAMES[i];
    floorCol.appendChild(nameEl);

    const blocks = el('div', 'residue-blocks');
    for (let b = 4; b >= 0; b--) {
      const block = document.createElement('div');
      block.className = 'residue-block';
      block.dataset.residueBlock = `${i}-${b}`;
      blocks.appendChild(block);
    }
    floorCol.appendChild(blocks);

    const lvlEl = el('span', 'residue-floor-lvl-num');
    lvlEl.dataset.residueFloorLvl = String(i);
    floorCol.appendChild(lvlEl);

    const costSpan = el('span', 'residue-floor-cost');
    costSpan.dataset.residueFloorCost = String(i);
    floorCol.appendChild(costSpan);

    const floorBtn = el('button', 'residue-floor-btn', '+');
    floorBtn.dataset.residueFloorBtn = String(i);
    floorBtn.addEventListener('click', () => {
      if (!canBuyFloor(i)) return;
      buyFloor(i);
      const target = document.querySelector(`[data-residue-floor-col="${i}"]`);
      if (target) {
        target.classList.remove('residue-floor-flash');
        void target.offsetWidth;
        target.classList.add('residue-floor-flash');
        setTimeout(() => target.classList.remove('residue-floor-flash'), 450);
      }
    });
    floorCol.appendChild(floorBtn);
    columnsRow.appendChild(floorCol);
  }
  rightPanel.appendChild(columnsRow);

  body.appendChild(rightPanel);
  col.appendChild(body);
}

// ── Per-frame update ───────────────────────────────────────────────────────────

export function updateResidueText() {
  if (!isResidueUnlocked()) return;

  // Tab badge
  const tabRho = document.getElementById('residue-tab-rho');
  if (tabRho) tabRho.textContent = residueState.rho > 0 ? residueState.rho + ' ρ' : '';

  const balEl = document.querySelector('[data-residue-bal]');
  if (balEl) balEl.textContent = residueState.rho + ' ρ';

  // Convert preview
  const previewEl = document.querySelector('[data-residue-conv-preview]');
  const convBtnEl = document.querySelector('[data-residue-conv-btn]');
  const gainDescEl = document.querySelector('[data-residue-gain-desc]');
  if (previewEl && gameState.N) {
    if (residueState.hasConverted) {
      previewEl.textContent = 'converted this iteration';
      previewEl.style.color = '#3a2a4a';
      if (convBtnEl) convBtnEl.disabled = true;
    } else {
      const n    = gameState.N.mul(convFrac);
      const gain = rhoGain(n);
      const pct  = Math.round(convFrac * 100);
      previewEl.textContent = gain > 0
        ? pct + '% N  →  +' + gain + ' ρ'
        : pct + '% N  →  0 ρ';
      previewEl.style.color = gain > 0 ? '#a78bfa' : '#3a2a4a';
      if (convBtnEl) convBtnEl.disabled = gain <= 0;
    }
  }
  if (gainDescEl) {
    const maxGain = gameState.N ? Math.floor(Math.pow(gameState.N.add(1).log10().toNumber(), RESIDUE.RHO_LOG_EXP)) : 0;
    gainDescEl.textContent = 'max = ⌊ log₁₀(N+1) ^ ' + RESIDUE.RHO_LOG_EXP + ' ⌋ = ' + maxGain;
  }

  // Blocks + costs + buttons
  for (let i = 0; i < 4; i++) {
    const lvl        = residueState.floors[i];
    const affordable = canBuyFloor(i);

    const windowStart = Math.max(0, lvl - 4);
    for (let b = 0; b < 5; b++) {
      const blockEl = document.querySelector(`[data-residue-block="${i}-${b}"]`);
      if (!blockEl) continue;
      const actualLvl = windowStart + b;
      blockEl.className = 'residue-block'
        + (actualLvl < lvl              ? ' residue-block-filled' : '')
        + (actualLvl === lvl && affordable ? ' residue-block-next'   : '');
    }

    const lvlEl  = document.querySelector(`[data-residue-floor-lvl="${i}"]`);
    const costEl = document.querySelector(`[data-residue-floor-cost="${i}"]`);
    const btnEl  = document.querySelector(`[data-residue-floor-btn="${i}"]`);
    if (lvlEl)  lvlEl.textContent  = 'floor ' + lvl;
    if (costEl) costEl.textContent = floorCost(i) + ' ρ';
    if (btnEl)  btnEl.disabled     = !canBuyFloor(i);
  }
}
