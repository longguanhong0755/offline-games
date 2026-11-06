// render.js — DOM building (on dirty flag) and per-frame text patching.

import {
  gameState, axiomRequirement, upgradeCostMult,
  totalAxiomMult, totalTheoremMult, theoremRequirement, MILESTONES, THEOREM_MILESTONES,
  epochState, iterState,
} from '/_assets/d2c7ede9925029d5b096.js';
import { totalSeqMult } from '/_assets/39bc0725aa17e2322457.js';
import { buildSequencesDOM, updateSequencesText } from '/_assets/672cc2c7f0edacc011f3.js';
import { computeProduction } from '/_assets/0961ea02e8e958458dec.js';
import { fmt, fmtRate } from '/_assets/6448d0556ec80157a1ac.js';
import { buyUpgrade, doAxiom, doTheorem } from '/_assets/1443c8cb925acff26221.js';
import { showConfirm } from '/_assets/9f97f3e9c4a006c45f05.js';
import { buildIterationDOM, updateIterationText } from '/_assets/9d304deed03c7cf47269.js';
import { sigmaState, removeAutoFromSlots, toggleAutoEnabled, isAutoEnabled, buildSigmaAutomationDOM, updateSigmaText } from '/_assets/aa5dc9827efa02a28524.js';
import { buildEpochDOM, updateEpochText } from '/_assets/94052ebcea34c1f44b1d.js';
import { orbitState, buildOrbitDOM, updateOrbitText, orbitSeqBoost } from '/_assets/5347d29d71d559e3b485.js';
import { scaledAmt, scalingTierIndex, SCALE_TYPE, FULL_SCALE_NAME, reqScalingMult } from '/_assets/ecf30920451cfbcde09a.js';
import { buildLemmaDOM, updateLemmaText } from '/_assets/2ba5a072dd12add186b3.js';
import { lemmaState } from '/_assets/d2c7ede9925029d5b096.js';
import { updateScalingText } from '/_assets/cb9cea25501ccd250c22.js';
import { buildPrimesDOM, updatePrimesText } from '/_assets/71b1dca3f6d190d83300.js';
import { primeState } from '/_assets/bd2df72de6613d280614.js';
import { residueState, buildResidueDOM, updateResidueText } from '/_assets/b3875d91ee440746da08.js';

// ── Upgrade icons ─────────────────────────────────────────────────────────────

function iconSVG(id) {
  if (id === 'icon-successor') {
    return `<svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <line x1="18" y1="8"  x2="18" y2="28" stroke="#666" stroke-width="1.5"/>
      <line x1="8"  y1="18" x2="28" y2="18" stroke="#666" stroke-width="1.5"/>
    </svg>`;
  }
  if (id === 'icon-addition') {
    return `<svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <line x1="8" y1="12" x2="28" y2="12" stroke="#666" stroke-width="1.5"/>
      <line x1="8" y1="18" x2="28" y2="18" stroke="#666" stroke-width="1.5"/>
      <line x1="8" y1="24" x2="28" y2="24" stroke="#666" stroke-width="1.5"/>
    </svg>`;
  }
  if (id === 'icon-multiplication') {
    return `<svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <line x1="9"  y1="9"  x2="27" y2="27" stroke="#666" stroke-width="1.5"/>
      <line x1="27" y1="9"  x2="9"  y2="27" stroke="#666" stroke-width="1.5"/>
    </svg>`;
  }
  if (id === 'icon-exponentiation') {
    // Caret ( ^ ) — just two lines, no baseline, consistent minimal style
    return `<svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <line x1="7"  y1="26" x2="18" y2="10" stroke="#666" stroke-width="1.5"/>
      <line x1="18" y1="10" x2="29" y2="26" stroke="#666" stroke-width="1.5"/>
    </svg>`;
  }
  return '';
}

// ── Reset icons (fixed) ───────────────────────────────────────────────────────

const AXIOM_ICON = `<svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
  <polygon points="18,5 31,18 18,31 5,18" stroke="#777" stroke-width="1.5" fill="none"/>
  <line x1="18" y1="11" x2="18" y2="25" stroke="#555" stroke-width="1.2"/>
  <line x1="11" y1="18" x2="25" y2="18" stroke="#555" stroke-width="1.2"/>
</svg>`;

const THEOREM_ICON = `<svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
  <polygon points="18,4 32,18 18,32 4,18" stroke="#999" stroke-width="1.5" fill="none"/>
  <polygon points="18,9 27,18 18,27 9,18" stroke="#999" stroke-width="1.5" fill="none"/>
  <polygon points="18,14 22,18 18,22 14,18" stroke="#999" stroke-width="1" fill="none"/>
</svg>`;

// ── Section helpers ───────────────────────────────────────────────────────────

function createSectionHeader(text) {
  const el = document.createElement('div');
  el.className = 'section-header';
  el.textContent = text;
  return el;
}


// ── Upgrade card ──────────────────────────────────────────────────────────────

function createUpgradeCard(upg, isFirst) {
  const card = document.createElement('div');
  card.className = 'upgrade-card' + (isFirst ? ' first-in-group' : '');
  card.dataset.upgId = upg.id;
  card.dataset.scalingTier = '';

  const iconDiv = document.createElement('div');
  iconDiv.className = 'upgrade-icon';
  iconDiv.innerHTML = iconSVG(upg.iconId);

  const info = document.createElement('div');
  info.className = 'upgrade-info';

  const nameRow = document.createElement('div');
  nameRow.className = 'upgrade-name';
  nameRow.innerHTML =
    `${upg.name} <span class="level-badge" data-lvl="${upg.id}">lv.${upg.level}</span>`;

  const desc = document.createElement('div');
  desc.className = 'upgrade-desc';
  desc.dataset.desc = upg.id;
  desc.textContent = upg.descTemplate(scaledAmt(upg.id, upg.level));

  info.appendChild(nameRow);
  info.appendChild(desc);

  const right = document.createElement('div');
  right.className = 'upgrade-right';

  const costEl = document.createElement('div');
  costEl.className = 'upgrade-cost';
  costEl.dataset.cost = upg.id;

  const btn = document.createElement('button');
  btn.className = 'buy-btn';
  btn.dataset.buy = upg.id;
  btn.textContent = gameState.buyMax ? 'max' : 'buy';
  btn.addEventListener('click', () => buyUpgrade(upg.id));

  const autoBtn = document.createElement('button');
  autoBtn.className = 'auto-toggle-btn';
  autoBtn.dataset.autoToggle = upg.id;
  autoBtn.style.display = 'none';
  autoBtn.addEventListener('click', () => toggleAutoEnabled('auto-' + upg.id));

  const btnRow = document.createElement('div');
  btnRow.className = 'upgrade-btn-row';
  btnRow.appendChild(btn);
  btnRow.appendChild(autoBtn);

  right.appendChild(costEl);
  right.appendChild(btnRow);
  card.appendChild(iconDiv);
  card.appendChild(info);
  card.appendChild(right);
  return card;
}

// ── Reset card (Axiom / Theorem) ─────────────────────────────────────────────

function createResetCard({ id, iconHTML, label, btnId, onReset, milestones = [], msType = 'axiom', unlockedCount = milestones.length }) {
  const card = document.createElement('div');
  card.id = id;
  card.className = 'reset-card';
  card.dataset.scalingTier = '';

  const iconWrap = document.createElement('div');
  iconWrap.className = 'reset-card-icon';
  iconWrap.innerHTML = iconHTML;

  const lbl = document.createElement('div');
  lbl.className = 'reset-card-label';
  lbl.textContent = label;

  const countEl = document.createElement('div');
  countEl.id = `${id}-count`;
  countEl.className = 'reset-card-count';

  const boostEl = document.createElement('div');
  boostEl.id = `${id}-boost`;
  boostEl.className = 'reset-card-boost';

  const reqEl = document.createElement('div');
  reqEl.id = `${id}-req`;
  reqEl.className = 'reset-card-req';

  const btn = document.createElement('button');
  btn.id = btnId;
  btn.className = 'reset-btn';
  btn.addEventListener('click', () => showConfirm(`perform ${label.toLowerCase()}?`, onReset));

  card.appendChild(iconWrap);
  card.appendChild(lbl);
  card.appendChild(countEl);
  card.appendChild(boostEl);
  card.appendChild(reqEl);
  card.appendChild(btn);

  // ── Milestone drawer ──
  // Visible: all achieved + the very next unachieved (dimmed preview)
  const visibleMs = milestones.slice(0, unlockedCount + 1);
  if (visibleMs.length > 0) {
    const toggle = document.createElement('div');
    toggle.className = 'ms-toggle';

    const arrow = document.createElement('span');
    arrow.className = 'ms-arrow';
    arrow.textContent = '\u25b8';   // ▸

    const countLbl = document.createElement('span');
    countLbl.textContent = `${unlockedCount} milestone${unlockedCount !== 1 ? 's' : ''}`;

    toggle.appendChild(arrow);
    toggle.appendChild(countLbl);

    const drawer = document.createElement('div');
    drawer.className = 'ms-drawer';

    // Group consecutive same-req unlocked milestones into branched rows
    let rowIndex = 0;
    let vi = 0;
    while (vi < visibleMs.length) {
      const ms = visibleMs[vi];
      const isNextItem = vi === unlockedCount;
      const isFirst = rowIndex === 0;

      if (!isNextItem) {
        // Collect all consecutive milestones sharing this req
        const group = [ms];
        let vj = vi + 1;
        while (vj < visibleMs.length && vj < unlockedCount && visibleMs[vj].req === ms.req) {
          group.push(visibleMs[vj]);
          vj++;
        }
        if (group.length > 1) {
          drawer.appendChild(createBranchedMilestoneRow(group, isFirst, msType));
          vi = vj;
          rowIndex++;
          continue;
        }
      }

      drawer.appendChild(createMilestoneRow(ms, isFirst, msType, isNextItem));
      vi++;
      rowIndex++;
    }

    toggle.addEventListener('click', () => {
      const open = card.classList.toggle('ms-open');
      arrow.textContent = open ? '\u25be' : '\u25b8';   // ▾ : ▸
    });

    card.appendChild(toggle);
    card.appendChild(drawer);
  }

  return card;
}

// ── Branched milestone row (multiple rewards from one req) ────────────────────

function createBranchedMilestoneRow(group, isFirst, type = 'axiom') {
  const row = document.createElement('div');
  const baseClass = type === 'theorem' ? 'theorem-milestone-row' : 'milestone-row';
  row.className = baseClass + ' ms-branched' + (isFirst ? ' first-in-group' : '');

  const indicator = document.createElement('span');
  indicator.className = 'ms-indicator';
  indicator.textContent = '✓';

  const req = document.createElement('span');
  req.className = 'ms-req';
  req.textContent = type === 'theorem' ? `th.${group[0].req}` : `ax.${group[0].req}`;

  // SVG branch: entry → vertical bar → two arms
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('class', 'ms-branch-svg');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '44');
  svg.setAttribute('viewBox', '0 0 24 44');
  svg.setAttribute('aria-hidden', 'true');

  function line(x1, y1, x2, y2) {
    const l = document.createElementNS(NS, 'line');
    l.setAttribute('x1', x1); l.setAttribute('y1', y1);
    l.setAttribute('x2', x2); l.setAttribute('y2', y2);
    l.setAttribute('stroke', '#3a5a4a');
    l.setAttribute('stroke-width', '1');
    return l;
  }
  svg.appendChild(line(0, 22, 12, 22));  // entry horizontal to fork
  svg.appendChild(line(12, 10, 12, 34)); // vertical bar
  svg.appendChild(line(12, 10, 24, 10)); // top arm → Logarithm
  svg.appendChild(line(12, 34, 24, 34)); // bottom arm → Iteration

  const items = document.createElement('div');
  items.className = 'ms-branch-items';

  for (const ms of group) {
    const item = document.createElement('div');
    item.className = 'ms-branch-item';

    const name = document.createElement('span');
    name.className = 'ms-name';
    name.textContent = ms.name;

    const desc = document.createElement('span');
    desc.className = 'ms-desc';
    desc.textContent = ms.descFn();

    item.appendChild(name);
    item.appendChild(desc);
    items.appendChild(item);
  }

  row.appendChild(indicator);
  row.appendChild(req);
  row.appendChild(svg);
  row.appendChild(items);
  return row;
}

// ── Milestone row ─────────────────────────────────────────────────────────────

function createMilestoneRow(ms, isFirst, type = 'axiom', isNext = false) {
  const row = document.createElement('div');
  const baseClass = type === 'theorem' ? 'theorem-milestone-row' : 'milestone-row';
  row.className = baseClass + (isFirst ? ' first-in-group' : '') + (isNext ? ' ms-locked' : '');

  const indicator = document.createElement('span');
  indicator.className = 'ms-indicator';
  indicator.textContent = isNext ? '\u00b7' : '\u2713';

  const req = document.createElement('span');
  req.className = 'ms-req';
  req.textContent = type === 'theorem' ? `th.${ms.req}` : `ax.${ms.req}`;

  const name = document.createElement('span');
  name.className = 'ms-name';
  name.textContent = isNext ? '???' : ms.name;

  const desc = document.createElement('span');
  desc.className = 'ms-desc';
  desc.textContent = isNext ? '???' : ms.descFn();

  row.appendChild(indicator);
  row.appendChild(req);
  row.appendChild(name);
  row.appendChild(desc);
  return row;
}

// ── Full DOM rebuild ──────────────────────────────────────────────────────────

export function buildUpgradeDOM() {
  const col      = document.getElementById('upgrade-column');
  const prestige = document.getElementById('prestige-column');
  col.innerHTML      = '';
  prestige.innerHTML = '';

  // ── Upgrades ──
  const unlockedUpgrades = gameState.upgrades.filter((u) => u.unlocked);
  if (unlockedUpgrades.length > 0) {
    col.appendChild(createSectionHeader('UPGRADES'));
    unlockedUpgrades.forEach((upg, i) => col.appendChild(createUpgradeCard(upg, i === 0)));
  }

  // ── Prestige resets in their own wider column ──
  const showAxiom = gameState.N.gte(axiomRequirement().mul(new Decimal(reqScalingMult('axiom', gameState.axiomCount)))) || gameState.axiomCount > 0 || gameState.theoremCount >= 1;
  if (showAxiom) {
    const unlockedMs    = MILESTONES.filter((ms) => gameState.axiomCount   >= ms.req);
    const unlockedTMCnt = THEOREM_MILESTONES.filter((ms) => gameState.theoremCount >= ms.req).length;

    prestige.appendChild(createSectionHeader('PRESTIGE'));

    const resetRow = document.createElement('div');
    resetRow.id = 'reset-row';

    const axiomTierIdx = scalingTierIndex('axiom', gameState.axiomCount);
    const axiomLabel   = axiomTierIdx > 0 ? `${FULL_SCALE_NAME[axiomTierIdx - 1]} AXIOM` : 'AXIOM';
    resetRow.appendChild(createResetCard({
      id: 'axiom-section',
      iconHTML: AXIOM_ICON,
      label: axiomLabel,
      btnId: 'axiom-btn',
      onReset: doAxiom,
      milestones: unlockedMs,
      msType: 'axiom',
    }));

    if (gameState.theoremUnlocked) {
      const thmTierIdx = scalingTierIndex('theorem', gameState.theoremCount);
      const thmLabel   = thmTierIdx > 0 ? `${FULL_SCALE_NAME[thmTierIdx - 1]} THEOREM` : 'THEOREM';
      resetRow.appendChild(createResetCard({
        id: 'theorem-section',
        iconHTML: THEOREM_ICON,
        label: thmLabel,
        btnId: 'theorem-btn',
        onReset: doTheorem,
        milestones: THEOREM_MILESTONES.slice(0, unlockedTMCnt),
        msType: 'theorem',
      }));
    }

    prestige.appendChild(resetRow);
  }
}

// ── Per-frame text patches ────────────────────────────────────────────────────

export function updateCardText() {
  const costMult = upgradeCostMult();
  const isBuyMax = gameState.buyMax;

  for (const upg of gameState.upgrades) {
    if (!upg.unlocked) continue;

    const cost      = upg.costFn(upg.level).mul(new Decimal(costMult));
    const canAfford = gameState.N.gte(cost);

    const costEl = document.querySelector(`[data-cost="${upg.id}"]`);
    const btnEl  = document.querySelector(`[data-buy="${upg.id}"]`);
    const descEl = document.querySelector(`[data-desc="${upg.id}"]`);
    const lvlEl  = document.querySelector(`[data-lvl="${upg.id}"]`);

    if (costEl) {
      costEl.textContent = fmt(cost) + ' N';
      costEl.className   = 'upgrade-cost' + (canAfford ? '' : ' cannot-afford');
    }
    if (btnEl) {
      btnEl.disabled     = !canAfford;
      btnEl.textContent  = isBuyMax ? 'max' : 'buy';
    }
    if (descEl) descEl.textContent = upg.descTemplate(scaledAmt(upg.id, upg.level));
    if (lvlEl) {
      const tierIdx = scalingTierIndex(upg.id, upg.level);
      const tierStr = tierIdx > 0 ? ` [${SCALE_TYPE[tierIdx - 1]}]` : '';
      lvlEl.textContent = `lv.${upg.level}${tierStr}`;
      const cardEl = document.querySelector(`[data-upg-id="${upg.id}"]`);
      if (cardEl) cardEl.dataset.scalingTier = SCALE_TYPE[tierIdx - 1] ?? '';
    }

    const autoBtn = document.querySelector(`[data-auto-toggle="${upg.id}"]`);
    if (autoBtn) {
      const autoId = 'auto-' + upg.id;
      const inSlot = gameState.iterationUnlocked && sigmaState.slots.some(s => s === autoId);
      autoBtn.style.display = inSlot ? '' : 'none';
      if (inSlot) {
        const on = isAutoEnabled(autoId);
        autoBtn.textContent = on ? 'on' : 'off';
        autoBtn.className   = 'auto-toggle-btn ' + (on ? 'auto-on' : 'auto-off');
      }
    }
  }

  // ── Axiom card ──
  const axiomBtn   = document.getElementById('axiom-btn');
  if (axiomBtn) {
    const req      = axiomRequirement().mul(new Decimal(reqScalingMult('axiom', gameState.axiomCount)));
    const canAxiom = gameState.N.gte(req);
    const nextTotal = fmt(totalAxiomMult(gameState.axiomCount + 1));
    axiomBtn.disabled    = !canAxiom;
    axiomBtn.textContent = `axiom  [ \u00d7${nextTotal} ]`;

    const countEl = document.getElementById('axiom-section-count');
    const boostEl = document.getElementById('axiom-section-boost');
    const reqEl   = document.getElementById('axiom-section-req');
    if (countEl) countEl.textContent = `count: ${gameState.axiomCount}`;
    if (boostEl) boostEl.textContent = gameState.axiomCount > 0
      ? `boost: \u00d7${fmt(totalAxiomMult())}`
      : 'boost: \u00d71.00';
    if (reqEl)   reqEl.textContent   = `req \u2265 ${fmt(req)}`;

    const axiomCard = document.getElementById('axiom-section');
    if (axiomCard) axiomCard.dataset.scalingTier = SCALE_TYPE[scalingTierIndex('axiom', gameState.axiomCount) - 1] ?? '';
  }

  // ── Theorem card ──
  const theoremBtn = document.getElementById('theorem-btn');
  if (theoremBtn) {
    const req        = theoremRequirement().mul(new Decimal(reqScalingMult('theorem', gameState.theoremCount)));
    const canTheorem = gameState.N.gte(req);
    const nextTotal  = fmt(totalTheoremMult(gameState.theoremCount + 1));
    theoremBtn.disabled    = !canTheorem;
    theoremBtn.textContent = `theorem  [ \u00d7${nextTotal} ]`;

    const countEl = document.getElementById('theorem-section-count');
    const boostEl = document.getElementById('theorem-section-boost');
    const reqEl   = document.getElementById('theorem-section-req');
    if (countEl) countEl.textContent = `count: ${gameState.theoremCount}`;
    if (boostEl) boostEl.textContent = gameState.theoremCount > 0
      ? `boost: \u00d7${fmt(totalTheoremMult())}`
      : 'boost: \u00d71.00';
    if (reqEl)   reqEl.textContent   = `req \u2265 ${fmt(req)}`;
  }

    const thmCard = document.getElementById('theorem-section');
    if (thmCard) thmCard.dataset.scalingTier = SCALE_TYPE[scalingTierIndex('theorem', gameState.theoremCount) - 1] ?? '';

  // Trigger rebuild when axiom section becomes visible
  if (!document.getElementById('axiom-section') && gameState.N.gte(axiomRequirement().mul(new Decimal(reqScalingMult('axiom', gameState.axiomCount))))) {
    gameState.domDirty = true;
  }
}

// ── Manual unlock display ─────────────────────────────────────────────────────

function updateManual() {
  const showPrestige  = gameState.N.gte(axiomRequirement().mul(new Decimal(reqScalingMult('axiom', gameState.axiomCount))))
    || gameState.axiomCount > 0
    || gameState.theoremCount >= 1;
  const showSequences = gameState.sequencesUnlocked;

  const secPrestige  = document.getElementById('manual-section-prestige');
  const secSequences = document.getElementById('manual-section-sequences');
  const secUnknown   = document.getElementById('manual-section-unknown');

  if (secPrestige)  secPrestige.style.display  = showPrestige  ? '' : 'none';
  if (secSequences) secSequences.style.display = showSequences ? '' : 'none';
  if (secUnknown)   secUnknown.style.display   = '';
}

// ── Main render entry ─────────────────────────────────────────────────────────

export function render() {
  const prod = computeProduction();

  document.getElementById('topbar-n').textContent    = 'N: ' + fmt(gameState.N);
  document.getElementById('topbar-rate').textContent = fmtRate(prod);

  if (gameState.domDirty) {
    gameState.domDirty = false;
    const msOpenIds = ['axiom-section', 'theorem-section']
      .filter(id => document.getElementById(id)?.classList.contains('ms-open'));
    buildUpgradeDOM();
    for (const id of msOpenIds) {
      const card = document.getElementById(id);
      if (!card) continue;
      card.classList.add('ms-open');
      const arrow = card.querySelector('.ms-arrow');
      if (arrow) arrow.textContent = '▾';
    }
  }

  if (gameState.seqDomDirty) {
    gameState.seqDomDirty = false;
    buildSequencesDOM();
  }

  if (gameState.itDomDirty) {
    gameState.itDomDirty = false;
    buildIterationDOM();
  }

  if (sigmaState.dirty) {
    sigmaState.dirty = false;
    buildSigmaAutomationDOM();
  }

  if (residueState.dirty) {
    residueState.dirty = false;
    buildResidueDOM();
  }

  if (epochState.dirty) {
    epochState.dirty = false;
    buildEpochDOM();
  }

  if (orbitState.dirty) {
    orbitState.dirty = false;
    buildOrbitDOM();
  }

  if (lemmaState.dirty) {
    lemmaState.dirty = false;
    buildLemmaDOM();
  }

  if (primeState.primeDirty) {
    buildPrimesDOM();
  }

  updateCardText();

  const settingsPanel = document.getElementById('misc-subpanel-settings');
  if (settingsPanel && settingsPanel.classList.contains('active')) {
    const pt = gameState.totalPlaytime;
    const h  = Math.floor(pt / 3600);
    const m  = Math.floor((pt % 3600) / 60);
    const s  = Math.floor(pt % 60);
    const el = document.getElementById('settings-playtime');
    if (el) el.textContent =
      `playtime: ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  const seqPanel = document.getElementById('panel-sequences');
  if (seqPanel && seqPanel.classList.contains('active')) {
    updateSequencesText();
  }

  const manualPanel = document.getElementById('misc-subpanel-manual');
  if (manualPanel && manualPanel.classList.contains('active')) {
    updateManual();
  }

  const scalingSubpanel = document.getElementById('misc-subpanel-scaling');
  if (scalingSubpanel && scalingSubpanel.classList.contains('active')) {
    updateScalingText();
  }

  const iterPanel = document.getElementById('panel-iteration');
  if (iterPanel && iterPanel.classList.contains('active')) {
    updateIterationText();
    updateSigmaText();
    updateEpochText();
    updateOrbitText();
    updateLemmaText();
    updateResidueText();
  }

  const primesPanel = document.getElementById('panel-primes');
  if (primesPanel && primesPanel.classList.contains('active')) {
    updatePrimesText();
  }

  const seqMult = gameState.sequencesUnlocked ? totalSeqMult() * orbitSeqBoost() : 1;
  const seqDivider = document.getElementById('topbar-seq-divider');
  const seqEl = document.getElementById('topbar-seq');
  if (seqDivider && seqEl) {
    const show = seqMult > 1;
    seqDivider.style.display = show ? '' : 'none';
    seqEl.style.display = show ? '' : 'none';
    if (show) seqEl.textContent = 'seq \u00d7' + fmt(seqMult);
  }

  const iterDivider = document.getElementById('topbar-iter-divider');
  const iterEl = document.getElementById('topbar-iter');
  if (iterDivider && iterEl) {
    const show = iterState.count > 0;
    iterDivider.style.display = show ? '' : 'none';
    iterEl.style.display = show ? '' : 'none';
    if (show) iterEl.textContent = ' \u2110: ' + iterState.count;
  }
}
