// lemma.js — Lemma upgrade system: IMR-style icon grid, post-epoch-5.

import { gameState, epochState, lemmaState, iterState } from '/_assets/d2c7ede9925029d5b096.js';
import { LEMMA, ITER, COMPLETIONS_SOFTCAP } from '/_assets/c24c79b6b7c44a0481ad.js';
import { isResidueUnlocked, residueState } from '/_assets/b3875d91ee440746da08.js';
import { sigmaState } from '/_assets/aa5dc9827efa02a28524.js';
import { fmt } from '/_assets/6448d0556ec80157a1ac.js';

// ── Upgrade definitions ────────────────────────────────────────────────────────

const LEMMA_DEFS = [
  {
    name:   'Compression',
    flavor: 'ℐ acquisition scale decreases — more ℐ earned at the same N.',
  },
  {
    name:   'Orbital Resonance',
    flavor: 'Outer cycles grow exponentially faster — resonance with radius.',
  },
  {
    name:   'Theorem Resonance',
    flavor: 'Each theorem earned pushes the sequence softcap threshold further.',
  },
  {
    name:   'Prime Theory',
    flavor: 'The arithmetic lattice crystallizes — prime numbers emerge as fundamental building blocks.',
  },
  {
    name:   'Expansion',
    flavor: 'Reserve pts cap grows with N — accumulate without bound.',
  },
  {
    name:   'Residue',
    flavor: 'Persistent upgrade floors survive resets — a foundation that cannot be erased.',
  },
];

// ── SVG Icons ──────────────────────────────────────────────────────────────────

const ICONS = [
  `<svg width="36" height="36" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <line x1="6" y1="40" x2="42" y2="40" stroke="currentColor" stroke-width="0.6" opacity="0.3"/>
    <line x1="6" y1="8"  x2="6"  y2="40" stroke="currentColor" stroke-width="0.6" opacity="0.3"/>
    <path d="M6,10 C10,10 16,14 22,24 C28,34 36,38 42,38" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <polyline points="37,38 42,38 42,33" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <line x1="14" y1="8" x2="14" y2="40" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2,3" opacity="0.4"/>
    <line x1="28" y1="8" x2="28" y2="40" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2,3" opacity="0.25"/>
  </svg>`,

  `<svg width="36" height="36" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="26" r="5"  stroke="currentColor" stroke-width="1.3" fill="none"/>
    <circle cx="24" cy="26" r="11" stroke="currentColor" stroke-width="1.0" fill="none" opacity="0.65"/>
    <circle cx="24" cy="26" r="18" stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.35"/>
    <line x1="24" y1="21" x2="24" y2="8"  stroke="currentColor" stroke-width="1.2"/>
    <line x1="35" y1="26" x2="44" y2="26" stroke="currentColor" stroke-width="1.2"/>
    <circle cx="24" cy="8"  r="1.8" fill="currentColor"/>
    <circle cx="44" cy="26" r="1.8" fill="currentColor"/>
    <circle cx="24" cy="44" r="1.4" fill="currentColor" opacity="0.4"/>
    <circle cx="4"  cy="26" r="1.4" fill="currentColor" opacity="0.4"/>
  </svg>`,

  `<svg width="36" height="36" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <line x1="6" y1="40" x2="42" y2="40" stroke="currentColor" stroke-width="0.6" opacity="0.3"/>
    <line x1="6" y1="8"  x2="6"  y2="40" stroke="currentColor" stroke-width="0.6" opacity="0.3"/>
    <polyline points="6,38 6,30 14,30 14,22 22,22 22,14 34,14 34,10 42,10" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <line x1="22" y1="14" x2="22" y2="40" stroke="currentColor" stroke-width="0.7" stroke-dasharray="2,3" opacity="0.5"/>
    <line x1="34" y1="10" x2="34" y2="40" stroke="currentColor" stroke-width="0.7" stroke-dasharray="2,3" opacity="0.3"/>
  </svg>`,

  `<svg width="36" height="36" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="6"  y="8"  width="5" height="5" fill="currentColor" opacity="0.9"/>
    <rect x="14" y="8"  width="5" height="5" fill="currentColor" opacity="0.9"/>
    <rect x="22" y="8"  width="5" height="5" fill="currentColor" opacity="0.2"/>
    <rect x="30" y="8"  width="5" height="5" fill="currentColor" opacity="0.9"/>
    <rect x="38" y="8"  width="5" height="5" fill="currentColor" opacity="0.2"/>
    <rect x="6"  y="17" width="5" height="5" fill="currentColor" opacity="0.9"/>
    <rect x="14" y="17" width="5" height="5" fill="currentColor" opacity="0.2"/>
    <rect x="22" y="17" width="5" height="5" fill="currentColor" opacity="0.2"/>
    <rect x="30" y="17" width="5" height="5" fill="currentColor" opacity="0.2"/>
    <rect x="38" y="17" width="5" height="5" fill="currentColor" opacity="0.9"/>
    <rect x="6"  y="26" width="5" height="5" fill="currentColor" opacity="0.2"/>
    <rect x="14" y="26" width="5" height="5" fill="currentColor" opacity="0.9"/>
    <rect x="22" y="26" width="5" height="5" fill="currentColor" opacity="0.2"/>
    <rect x="30" y="26" width="5" height="5" fill="currentColor" opacity="0.2"/>
    <rect x="38" y="26" width="5" height="5" fill="currentColor" opacity="0.2"/>
    <rect x="6"  y="35" width="5" height="5" fill="currentColor" opacity="0.9"/>
    <rect x="14" y="35" width="5" height="5" fill="currentColor" opacity="0.2"/>
    <rect x="22" y="35" width="5" height="5" fill="currentColor" opacity="0.9"/>
    <rect x="30" y="35" width="5" height="5" fill="currentColor" opacity="0.2"/>
    <rect x="38" y="35" width="5" height="5" fill="currentColor" opacity="0.2"/>
  </svg>`,

  `<svg width="36" height="36" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M8,24 C8,18 12,13 18,13 C24,13 24,24 24,24 C24,24 24,35 30,35 C36,35 40,30 40,24 C40,18 36,13 30,13 C24,13 24,24 24,24 C24,24 24,35 18,35 C12,35 8,30 8,24 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <line x1="6" y1="40" x2="42" y2="40" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <path d="M6,38 C8,35 12,28 18,26 C24,24 30,20 36,12" stroke="currentColor" stroke-width="0.6" opacity="0.35" fill="none"/>
  </svg>`,

  `<svg width="36" height="36" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="11" width="36" height="6" stroke="currentColor" stroke-width="1.3" fill="none"/>
    <rect x="6" y="21" width="36" height="6" stroke="currentColor" stroke-width="1.3" fill="none" opacity="0.65"/>
    <rect x="6" y="31" width="36" height="6" stroke="currentColor" stroke-width="1.3" fill="none" opacity="0.35"/>
    <line x1="6" y1="40" x2="42" y2="40" stroke="currentColor" stroke-width="1" opacity="0.25"/>
  </svg>`,
];

// ── Cost functions ─────────────────────────────────────────────────────────────

export function lemmaCost(index) {
  switch (index) {
    case 0: return new Decimal(LEMMA.L1_COST);
    case 1: return new Decimal(LEMMA.L2_COST);
    case 2: return new Decimal(LEMMA.L3_COST);
    case 3: return new Decimal(LEMMA.L_PRIME_COST);
    case 4: return new Decimal(LEMMA.L4_COST);
    case 5: return null; // costs ℐ — handled separately
    default: return new Decimal(Infinity);
  }
}

export function lemmaCanBuy(index) {
  if (index >= LEMMA_DEFS.length) return false;
  if ((lemmaState.levels[index] ?? 0) >= 1) return false;
  if (index === 5) return iterState.count >= LEMMA.L_RESIDUE_COST;
  return gameState.N.gte(lemmaCost(index));
}

// ── Effect descriptions ────────────────────────────────────────────────────────

function lemmaEffectDesc(index, level) {
  switch (index) {
    case 0: {
      const scale = ITER.SCALE * Math.pow(LEMMA.L1_SCALE_FACTOR, Math.max(0, level));
      return level === 0
        ? 'ℐ scale = ' + ITER.SCALE + '  (no reduction)'
        : 'ℐ scale = ' + scale.toFixed(1) + '  (−' + (100 * (1 - scale / ITER.SCALE)).toFixed(0) + '%)';
    }
    case 1: {
      if (level === 0) return 'orbit resonance  (inactive)';
      const exp = LEMMA.L2_BASE_EXP + (level - 1) * LEMMA.L2_EXP_STEP;
      return 'τ gain ×(cycle)^' + exp.toFixed(2) + '  [c2: ×' + Math.pow(2, exp).toFixed(2) + ']';
    }
    case 2: {
      const bonus = level >= 1 ? gameState.theoremCount : 0;
      const threshold = COMPLETIONS_SOFTCAP.THRESHOLD + bonus;
      return level === 0
        ? 'softcap at ' + COMPLETIONS_SOFTCAP.THRESHOLD + ' comps  (inactive)'
        : 'softcap at ' + threshold + ' comps  (+' + bonus + ' from thms)';
    }
    case 3:
      return level === 0 ? 'unlocks Primes tab  (inactive)' : 'Primes tab unlocked';
    case 4: {
      const logN = gameState.N ? gameState.N.add(1).log10().toNumber() : 0;
      const extra = Math.floor(logN * LEMMA.L4_K * level);
      return level === 0
        ? 'pts cap bonus  (inactive)'
        : 'pts cap +' + extra + '  [+' + LEMMA.L4_K + '×log₁₀(N)/lv]';
    }
    case 5:
      return level === 0 ? 'unlocks Residue (ρ) system  (inactive)' : 'Residue (ρ) unlocked';
    default: return '';
  }
}

// ── Buy ───────────────────────────────────────────────────────────────────────

export function buyLemma(index) {
  if (!lemmaCanBuy(index)) return;

  if (index === 5) {
    iterState.count -= LEMMA.L_RESIDUE_COST;
    residueState.dirty = true;
    const residueTab = document.querySelector('[data-iter-subtab="residue"]');
    if (residueTab) residueTab.style.display = '';
  } else {
    gameState.N = gameState.N.sub(lemmaCost(index));
    if (index === 3) {
      gameState.primesUnlocked = true;
      const tab = document.getElementById('tab-primes');
      if (tab) tab.style.display = '';
    }
  }

  lemmaState.levels[index]++;

  const card = document.querySelector('[data-lemma-card="' + index + '"]');
  if (card) {
    card.classList.add('lemma-flash');
    setTimeout(() => card.classList.remove('lemma-flash'), 350);
  }
}

// ── DOM helpers ───────────────────────────────────────────────────────────────

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls)                e.className   = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

// ── Info panel (stable DOM — no innerHTML rebuilds) ───────────────────────────

function buildInfoPanelDOM(panel) {
  panel.appendChild(el('div', 'lemma-info-empty', 'hover an upgrade to preview'));
  const detail = el('div', 'lemma-info-detail');
  detail.style.display = 'none';
  detail.appendChild(el('div', 'lemma-info-name'));
  detail.appendChild(el('div', 'lemma-info-line'));
  detail.appendChild(el('div', 'lemma-info-line lemma-info-next'));
  detail.appendChild(el('div', 'lemma-info-line lemma-info-cost'));
  panel.appendChild(detail);
}

function clearInfoPanel() {
  const panel = document.getElementById('lemma-info-panel');
  if (!panel) return;
  const empty  = panel.querySelector('.lemma-info-empty');
  const detail = panel.querySelector('.lemma-info-detail');
  if (empty)  empty.style.display  = '';
  if (detail) detail.style.display = 'none';
}

function updateInfoPanel(index) {
  const panel = document.getElementById('lemma-info-panel');
  if (!panel) return;
  const empty  = panel.querySelector('.lemma-info-empty');
  const detail = panel.querySelector('.lemma-info-detail');
  if (!empty || !detail) return;

  const def     = LEMMA_DEFS[index];
  const lvl     = lemmaState.levels[index] ?? 0;
  const isMaxed = lvl >= 1;

  empty.style.display  = 'none';
  detail.style.display = '';

  const [nameEl, curEl, nextEl, costEl] = detail.children;

  nameEl.textContent = def.name;

  if (def.reserved) {
    curEl.textContent  = 'coming soon';
    curEl.className    = 'lemma-info-line';
    nextEl.style.display = 'none';
    costEl.style.display = 'none';
    return;
  }

  if (isMaxed) {
    curEl.textContent    = lemmaEffectDesc(index, lvl);
    curEl.className      = 'lemma-info-line lemma-info-next';
    curEl.style.display  = '';
    nextEl.style.display = 'none';
    costEl.style.display = 'none';
    return;
  }

  curEl.textContent    = 'effect  ' + lemmaEffectDesc(index, 1);
  curEl.className      = 'lemma-info-line';
  curEl.style.display  = '';
  nextEl.style.display = 'none';

  costEl.style.display = '';
  if (index === 5) {
    const canAfford = iterState.count >= LEMMA.L_RESIDUE_COST;
    costEl.textContent = 'cost  ' + LEMMA.L_RESIDUE_COST + ' ℐ';
    costEl.className   = 'lemma-info-line lemma-info-cost' + (canAfford ? '' : ' lemma-cost-dim');
  } else {
    const costVal   = lemmaCost(index);
    const canAfford = gameState.N.gte(costVal);
    costEl.textContent = 'cost  ' + fmt(costVal) + ' N';
    costEl.className   = 'lemma-info-line lemma-info-cost' + (canAfford ? '' : ' lemma-cost-dim');
  }
}

// ── Card factory ─────────────────────────────────────────────────────────────

function makeLemmaCard(i) {
  const def  = LEMMA_DEFS[i];
  const card = el('div', 'lemma-icon-card' + (def.reserved ? ' lemma-reserved' : ''));
  card.dataset.lemmaCard = String(i);
  const iconWrap = el('div', 'lemma-icon-wrap');
  iconWrap.innerHTML = ICONS[i];
  card.appendChild(iconWrap);
  if (!def.reserved) {
    card.addEventListener('mouseenter', () => updateInfoPanel(i));
    card.addEventListener('mouseleave', () => clearInfoPanel());
    card.addEventListener('click', () => buyLemma(i));
  }
  return card;
}

// ── DOM Build ─────────────────────────────────────────────────────────────────

export function buildLemmaDOM() {
  const col = document.getElementById('iter-lemma-column');
  if (!col) return;
  col.innerHTML = '';

  col.appendChild(el('div', 'section-header', 'LEMMA'));

  const infoPanel = el('div', 'lemma-info-panel');
  infoPanel.id = 'lemma-info-panel';
  buildInfoPanelDOM(infoPanel);
  col.appendChild(infoPanel);

  col.appendChild(el('div', 'lemma-section-label', 'N'));

  const grid = el('div', 'lemma-grid');
  for (let i = 0; i < LEMMA_DEFS.length - 1; i++) {
    grid.appendChild(makeLemmaCard(i));
  }
  col.appendChild(grid);

  col.appendChild(el('div', 'lemma-section-label', 'ℐ'));

  const gridI = el('div', 'lemma-grid');
  gridI.appendChild(makeLemmaCard(LEMMA_DEFS.length - 1));
  col.appendChild(gridI);
}

// ── Per-frame update ───────────────────────────────────────────────────────────

export function updateLemmaText() {
  document.querySelectorAll('[data-lemma-card]').forEach(card => {
    const i   = parseInt(card.dataset.lemmaCard);
    const def = LEMMA_DEFS[i];
    if (def.reserved) return;

    const lvl       = lemmaState.levels[i] ?? 0;
    const isBought  = lvl >= 1;
    const canAfford = !isBought && lemmaCanBuy(i);

    card.classList.toggle('lemma-can-afford', canAfford);
    card.classList.toggle('lemma-maxed', isBought);
  });

  const hovered = document.querySelector('[data-lemma-card]:hover');
  if (hovered && !LEMMA_DEFS[parseInt(hovered.dataset.lemmaCard)]?.reserved) {
    updateInfoPanel(parseInt(hovered.dataset.lemmaCard));
  }
}
