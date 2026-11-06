// scaling-ui.js — Scaling info subtab (misc panel).

import { gameState } from '/_assets/d2c7ede9925029d5b096.js';
import { seqState } from '/_assets/39bc0725aa17e2322457.js';
import { orbitState } from '/_assets/5347d29d71d559e3b485.js';
import { SCALING } from '/_assets/c24c79b6b7c44a0481ad.js';
import {
  getScalingStart, getScalingPower,
  scaledAmt, scalingTierIndex, SCALE_TYPE,
} from '/_assets/ecf30920451cfbcde09a.js';

const TIER_COLORS = {
  prime:    '#a78bfa',
  formal:   '#60a5fa',
  superior: '#34d399',
  abstract: '#fbbf24',
  hyper:    '#fb923c',
  ultra:    '#f87171',
  infinite: '#e879f9',
  eternal:  '#f1f5f9',
};

const EFFECT_TARGETS = ['successor', 'addition', 'multiplication', 'exponentiation', 'sequence_completion'];
const EFFECT_LABELS  = ['Successor', 'Addition', 'Multiplication', 'Exponentiation', 'Seq Completion'];
const ORBIT_TARGETS  = ['orbit-speed', 'orbit-gain', 'orbit-n-boost', 'orbit-seq-boost'];
const ORBIT_LABELS   = ['Rot. Speed (c1)', 'τ/rev (c1)', 'N Amplifier', 'Seq Resonance'];
const REQ_TARGETS    = ['axiom', 'theorem'];
const REQ_LABELS     = ['Axiom req', 'Theorem req'];

let built = false;  // set to false to force rebuild after structural changes
let currentTier = null;

function getRaw(name) {
  switch (name) {
    case 'successor':           return gameState.upgrades[0].level;
    case 'addition':            return gameState.upgrades[1].level;
    case 'multiplication':      return gameState.upgrades[2].level;
    case 'exponentiation':      return gameState.upgrades[3]?.level ?? 0;
    case 'sequence_completion': return seqState.slots[seqState.activeId]?.completions ?? 0;
    case 'orbit-speed':        return orbitState.speedLevels[0] ?? 0;
    case 'orbit-gain':         return orbitState.gainLevels[0] ?? 0;
    case 'orbit-n-boost':      return orbitState.nBoostLevel;
    case 'orbit-seq-boost':    return orbitState.seqBoostLevel;
    case 'axiom':               return gameState.axiomCount;
    case 'theorem':             return gameState.theoremCount;
    default: return 0;
  }
}

function pctColor(pct) {
  if (pct <= 0)  return '#444';
  if (pct < 30)  return '#888';
  if (pct < 60)  return '#c8a020';
  return '#c86020';
}

function fmtReqMult(v) {
  return '×10^' + Math.round(Math.log10(v));
}

function selectTier(type) {
  currentTier = type;
  document.querySelectorAll('.sc-tier-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.sc-panel').forEach(p => p.classList.remove('active'));
  const tab = document.querySelector(`[data-sc-tier="${type}"]`);
  if (tab) tab.classList.add('active');
  const panel = document.getElementById(`sc-panel-${type}`);
  if (panel) panel.classList.add('active');
}

function el(tag, cls) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  return e;
}

function buildDOM() {
  const col = document.getElementById('scaling-column');
  if (!col) return;
  col.innerHTML = '';

  // Empty state
  const empty = el('div', 'sc-empty');
  empty.id = 'sc-empty';
  empty.textContent = 'no active scaling';
  col.appendChild(empty);

  // Tier tab bar
  const bar = el('div', 'sc-tier-bar');
  bar.id = 'sc-tier-bar';
  col.appendChild(bar);

  for (const type of SCALE_TYPE) {
    const color = TIER_COLORS[type];
    const power = getScalingPower(type);

    // Tab button
    const tab = el('button', 'sc-tier-tab');
    tab.dataset.scTier = type;
    tab.style.setProperty('--tc', color);
    tab.textContent = type;
    tab.addEventListener('click', () => selectTier(type));
    bar.appendChild(tab);

    // Panel
    const panel = el('div', 'sc-panel');
    panel.id = `sc-panel-${type}`;

    // Tier header
    const header = el('div', 'sc-tier-header');
    const tierName = el('span', 'sc-tier-title');
    tierName.textContent = type.toUpperCase() + ' SCALING';
    tierName.style.color = color;
    const tierPow = el('span', 'sc-tier-subtitle');
    tierPow.textContent = `exponent  ^${power}`;
    header.appendChild(tierName);
    header.appendChild(tierPow);
    panel.appendChild(header);

    // ── Effect softcap block ──────────────────────────────────────────────────
    const effBlock = el('div', 'sc-block');

    const effLabel = el('div', 'sc-block-label');
    effLabel.textContent = 'EFFECT SOFTCAP';
    effBlock.appendChild(effLabel);

    for (let i = 0; i < EFFECT_TARGETS.length; i++) {
      const name = EFFECT_TARGETS[i];
      const row = el('div', 'sc-entry');
      row.dataset.scRow = `${type}-${name}`;

      const nameEl = el('span', 'sc-entry-name');
      nameEl.textContent = EFFECT_LABELS[i];

      const statsEl = el('span', 'sc-entry-stats');

      const pctEl = el('span', 'sc-entry-pct');
      pctEl.dataset.scPct = `${type}-${name}`;

      const metaEl = el('span', 'sc-entry-meta');
      metaEl.textContent = `starts at ${getScalingStart(type, name)}`;

      statsEl.appendChild(pctEl);
      statsEl.appendChild(metaEl);
      row.appendChild(nameEl);
      row.appendChild(statsEl);
      effBlock.appendChild(row);
    }
    panel.appendChild(effBlock);

    // ── Orbit softcap block ───────────────────────────────────────────────────
    const orbitBlock = el('div', 'sc-block');

    const orbitLabel = el('div', 'sc-block-label');
    orbitLabel.textContent = 'ORBIT SOFTCAP';
    orbitBlock.appendChild(orbitLabel);

    for (let i = 0; i < ORBIT_TARGETS.length; i++) {
      const name = ORBIT_TARGETS[i];
      const row = el('div', 'sc-entry');
      row.dataset.scRow = `${type}-${name}`;

      const nameEl = el('span', 'sc-entry-name');
      nameEl.textContent = ORBIT_LABELS[i];

      const statsEl = el('span', 'sc-entry-stats');

      const pctEl = el('span', 'sc-entry-pct');
      pctEl.dataset.scPct = `${type}-${name}`;

      const metaEl = el('span', 'sc-entry-meta');
      metaEl.textContent = `starts at ${getScalingStart(type, name)}`;

      statsEl.appendChild(pctEl);
      statsEl.appendChild(metaEl);
      row.appendChild(nameEl);
      row.appendChild(statsEl);
      orbitBlock.appendChild(row);
    }
    panel.appendChild(orbitBlock);

    // ── Prestige req block ────────────────────────────────────────────────────
    const reqBlock = el('div', 'sc-block');

    const reqLabel = el('div', 'sc-block-label');
    reqLabel.textContent = 'PRESTIGE REQ PENALTY';
    reqBlock.appendChild(reqLabel);

    for (let i = 0; i < REQ_TARGETS.length; i++) {
      const name = REQ_TARGETS[i];
      const mult = SCALING.REQ_MULT?.[name]?.[type] ?? 1;

      const row = el('div', 'sc-entry');
      row.dataset.scRow = `${type}-${name}`;

      const nameEl = el('span', 'sc-entry-name');
      nameEl.textContent = REQ_LABELS[i];

      const statsEl = el('span', 'sc-entry-stats');

      const multEl = el('span', 'sc-entry-mult');
      multEl.textContent = fmtReqMult(mult);

      const statusEl = el('span', 'sc-entry-status');
      statusEl.dataset.scStatus = `${type}-${name}`;

      statsEl.appendChild(multEl);
      statsEl.appendChild(statusEl);
      row.appendChild(nameEl);
      row.appendChild(statsEl);
      reqBlock.appendChild(row);
    }
    panel.appendChild(reqBlock);

    col.appendChild(panel);
  }

  built = true;
}

export function updateScalingText() {
  if (!built) buildDOM();

  const allTargets = [...EFFECT_TARGETS, ...ORBIT_TARGETS, ...REQ_TARGETS];
  let anyActive = false;
  let firstActive = null;

  for (let ti = 0; ti < SCALE_TYPE.length; ti++) {
    const type    = SCALE_TYPE[ti];
    const tierHit = allTargets.some(name => scalingTierIndex(name, getRaw(name)) > ti);
    const tab = document.querySelector(`[data-sc-tier="${type}"]`);
    if (tab) tab.style.display = tierHit ? '' : 'none';
    if (tierHit) { anyActive = true; if (!firstActive) firstActive = type; }
  }

  const emptyEl = document.getElementById('sc-empty');
  const tierBar  = document.getElementById('sc-tier-bar');
  if (emptyEl) emptyEl.style.display = anyActive ? 'none' : '';
  if (tierBar)  tierBar.style.display  = anyActive ? '' : 'none';

  if (anyActive) {
    const curTab = currentTier && document.querySelector(`[data-sc-tier="${currentTier}"]`);
    if (!currentTier || !curTab || curTab.style.display === 'none') selectTier(firstActive);
  }

  for (let ti = 0; ti < SCALE_TYPE.length; ti++) {
    const type = SCALE_TYPE[ti];

    // Effect rows
    for (let i = 0; i < EFFECT_TARGETS.length; i++) {
      const name   = EFFECT_TARGETS[i];
      const raw    = getRaw(name);
      const active = scalingTierIndex(name, raw) > ti;
      const row    = document.querySelector(`[data-sc-row="${type}-${name}"]`);
      const pctEl  = document.querySelector(`[data-sc-pct="${type}-${name}"]`);
      if (!row || !pctEl) continue;

      row.classList.toggle('sc-entry-active', active);

      if (active && raw > 0) {
        const eff = scaledAmt(name, raw);
        const pct = Math.round((1 - eff / raw) * 100);
        pctEl.textContent = `−${pct}%`;
        pctEl.style.color = pctColor(pct);
      } else {
        pctEl.textContent = '—';
        pctEl.style.color = '';
      }
    }

    // Orbit rows
    for (let i = 0; i < ORBIT_TARGETS.length; i++) {
      const name   = ORBIT_TARGETS[i];
      const raw    = getRaw(name);
      const active = scalingTierIndex(name, raw) > ti;
      const row    = document.querySelector(`[data-sc-row="${type}-${name}"]`);
      const pctEl  = document.querySelector(`[data-sc-pct="${type}-${name}"]`);
      if (!row || !pctEl) continue;

      row.classList.toggle('sc-entry-active', active);

      if (active && raw > 0) {
        const eff = scaledAmt(name, raw);
        const pct = Math.round((1 - eff / raw) * 100);
        pctEl.textContent = `−${pct}%`;
        pctEl.style.color = pctColor(pct);
      } else {
        pctEl.textContent = '—';
        pctEl.style.color = '';
      }
    }

    // Req rows
    for (let i = 0; i < REQ_TARGETS.length; i++) {
      const name     = REQ_TARGETS[i];
      const active   = scalingTierIndex(name, getRaw(name)) > ti;
      const row      = document.querySelector(`[data-sc-row="${type}-${name}"]`);
      const statusEl = document.querySelector(`[data-sc-status="${type}-${name}"]`);
      if (!row || !statusEl) continue;

      row.classList.toggle('sc-entry-active', active);
      statusEl.textContent  = active ? 'active' : 'inactive';
      statusEl.className    = 'sc-entry-status ' + (active ? 'sc-status-on' : 'sc-status-off');
    }
  }
}
