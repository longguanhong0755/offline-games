// primes-ui.js — Primes tab DOM build and per-frame update.

import { fmt } from '/_assets/6448d0556ec80157a1ac.js';
import { PRIMES } from '/_assets/c24c79b6b7c44a0481ad.js';
import {
  primeState, expandMinCount, expandGain, canExpand, doExpand,
  isExpandMaxed, doAttempt, attemptCooldownMs,
  upgradeCostSpec, isUpgradeVisible, canBuyUpgrade, buyPrimeUpgrade,
  primeRarity, primesUpTo, PRIME_MILESTONES,
  primeNBoost, primeIBoost, primeTauBoost, commonPrimeBonus, rarePrimeBonus,
} from '/_assets/bd2df72de6613d280614.js';

// ── Upgrade definitions ────────────────────────────────────────────────────────

const UPGRADE_DEFS = [
  { id: 'attempt',     name: 'Trial Division' },
  { id: 'nBoost',      name: 'Euler Product'  },
  { id: 'iBoost',      name: 'Dirichlet'      },
  { id: 'batch',       name: 'Batch'          },
  { id: 'expandEase',  name: 'Catalyst'       },
  { id: 'elimination', name: 'Elimination'    },
  { id: 'tauBoost',    name: 'τ Boost'        },
];

// ── SVG icons ─────────────────────────────────────────────────────────────────

const ICONS = {
  attempt:     `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="12" height="12" rx="2"/><circle cx="5.5" cy="5.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="10.5" cy="5.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="8" cy="8" r="0.9" fill="currentColor" stroke="none"/><circle cx="5.5" cy="10.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="10.5" cy="10.5" r="0.9" fill="currentColor" stroke="none"/></svg>`,
  nBoost:      `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="14" x2="3" y2="9"/><line x1="7" y1="14" x2="7" y2="5"/><line x1="11" y1="14" x2="11" y2="2"/><line x1="1" y1="14" x2="14" y2="14"/></svg>`,
  iBoost:      `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="10,2 6,9 9,9 6,14"/></svg>`,
  batch:       `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="1" y="7" width="7" height="7" rx="1"/><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="8" y="2" width="7" height="7" rx="1"/></svg>`,
  elimination: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2,2 L14,2 L12,14 L4,14 Z"/><line x1="3.5" y1="6" x2="12.5" y2="6"/><line x1="4.5" y1="10" x2="11.5" y2="10"/></svg>`,
  tauBoost:    `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13,8 A5,5 0 1,1 10.5,3.5"/><polyline points="9.5,1.5 11,4 14,3"/></svg>`,
  expandEase:  `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,4 14,4 9,9 9,13 7,13 7,9 2,4"/></svg>`,
  expand:      `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1,5 1,1 5,1"/><polyline points="11,1 15,1 15,5"/><polyline points="15,11 15,15 11,15"/><polyline points="5,15 1,15 1,11"/></svg>`,
};

function makeSvg(id, cls) {
  const div = document.createElement('div');
  div.innerHTML = ICONS[id];
  const svg = div.firstChild;
  if (cls) svg.classList.add(cls);
  return svg;
}

function upgradeEffectDesc(id) {
  const lvl = primeState.upgrades[id] ?? 0;
  switch (id) {
    case 'attempt': {
      const ms = attemptCooldownMs();
      return (ms / 1000).toFixed(2) + 's cooldown';
    }
    case 'nBoost':      return lvl === 0 ? 'inactive' : '×' + primeNBoost().toFixed(3) + ' N/s';
    case 'iBoost':      return lvl === 0 ? 'inactive' : '×' + primeIBoost().toFixed(3) + ' ℐ';
    case 'batch':       return lvl === 0 ? 'inactive' : '+' + lvl + ' extra rolls/click';
    case 'elimination': return lvl === 0 ? 'inactive' : lvl + ' composites eliminated';
    case 'expandEase': {
      if (lvl === 0) return 'inactive';
      const div  = (1 / Math.pow(PRIMES.EXPAND_EASE_FACTOR, lvl)).toFixed(2);
      const gain = Math.pow(PRIMES.EXPAND_EASE_GAIN_FACTOR, lvl).toFixed(2);
      return 'min ÷' + div + '  ·  gain ×' + gain;
    }
    case 'tauBoost':    return lvl === 0 ? 'inactive' : '×' + primeTauBoost().toFixed(2) + ' τ/rev';
    default: return '';
  }
}

// ── Roll result state ─────────────────────────────────────────────────────────

let lastRollResults = null;
let stripFilter = 'all';

function renderRollResults(container, results, animate = true) {
  container.innerHTML = '';
  for (const { n, prime, alreadyHeld } of results) {
    const span = document.createElement('span');
    if (prime && !alreadyHeld) {
      span.className = `prime-roll-num prime-roll-found prime-roll-${primeRarity(n)}`;
    } else {
      span.className = 'prime-roll-num' + (alreadyHeld ? ' prime-roll-dupe' : ' prime-roll-miss');
    }
    span.textContent = n;
    container.appendChild(span);
  }
  if (animate) {
    container.classList.remove('prime-roll-flash', 'prime-roll-static');
    void container.offsetWidth;
    container.classList.add('prime-roll-flash');
  } else {
    container.classList.add('prime-roll-static');
    container.style.opacity = '1';
  }
}

// ── DOM helpers ───────────────────────────────────────────────────────────────

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls)                e.className   = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

// ── Expand flash overlay (fixed, survives DOM rebuild) ─────────────────────────

function triggerExpandFlash() {
  let overlay = document.getElementById('prime-expand-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'prime-expand-overlay';
    overlay.className = 'prime-expand-overlay';
    document.body.appendChild(overlay);
  }
  overlay.classList.remove('prime-expand-active');
  void overlay.offsetWidth;
  overlay.classList.add('prime-expand-active');
}

// ── Prime strip ───────────────────────────────────────────────────────────────

function buildStrip() {
  const strip = el('div', 'prime-strip');
  strip.id = 'prime-strip';
  renderStrip(strip);
  return strip;
}

function renderStrip(strip) {
  strip.innerHTML = '';
  const held = primeState.held;
  const filtered = stripFilter === 'all' ? held : held.filter(p => primeRarity(p) === stripFilter);
  const count = filtered.length;

  const fontSize = count < 25 ? 12 : count < 60 ? 10 : count < 130 ? 8 : 6;
  const gap      = count < 25 ? 5  : count < 60 ? 3  : count < 130 ? 2 : 1;
  strip.style.fontSize = fontSize + 'px';
  strip.style.gap      = gap + 'px';

  filtered.forEach((p, i) => {
    const span = el('span', 'prime-item ' + primeRarity(p), String(p));
    span.addEventListener('mouseenter', () => {
      strip.querySelectorAll('.prime-item').forEach((s, j) => {
        const dist = Math.abs(j - i);
        s.classList.toggle('prime-hovered-center', dist === 0);
        s.classList.toggle('prime-hovered-near',   dist === 1);
      });
    });
    span.addEventListener('mouseleave', () => {
      strip.querySelectorAll('.prime-item').forEach(s => {
        s.classList.remove('prime-hovered-center', 'prime-hovered-near');
      });
    });
    strip.appendChild(span);
  });

  if (count === 0) {
    const empty = held.length > 0 ? 'none in this rarity' : 'no primes found yet';
    strip.appendChild(el('span', 'prime-strip-empty', empty));
  }
}

function refreshStrip() {
  const strip = document.getElementById('prime-strip');
  if (strip) renderStrip(strip);
  document.querySelectorAll('[data-strip-filter]').forEach(btn => {
    btn.classList.toggle('prime-filter-active', btn.dataset.stripFilter === stripFilter);
  });
}

// ── Build DOM (called once, or when primeState.primeDirty) ───────────────────

export function buildPrimesDOM() {
  const col = document.getElementById('primes-column');
  if (!col) return;
  col.innerHTML = '';
  primeState.primeDirty = false;

  col.appendChild(el('div', 'section-header', 'PRIMES'));

  // Max info row
  const maxRow = el('div', 'prime-max-row');
  maxRow.id = 'prime-max-row';
  col.appendChild(maxRow);

  // Attempt section
  const attemptSection = el('div', 'prime-attempt-section');

  const attemptBtn = el('button', 'prime-attempt-btn', 'ATTEMPT');
  attemptBtn.id = 'prime-attempt-btn';
  attemptBtn.addEventListener('click', () => {
    const results = doAttempt();
    if (!results) return;
    lastRollResults = results;

    const bar = document.getElementById('prime-cooldown-bar');
    if (bar) {
      const ms = attemptCooldownMs();
      bar.style.animation = 'none';
      void bar.offsetWidth;
      bar.style.animation = `prime-cooldown ${ms}ms linear forwards`;
    }

    const rollEl = document.getElementById('prime-roll-result');
    if (rollEl) renderRollResults(rollEl, results);

    if (results.some(r => r.prime && !r.alreadyHeld)) refreshStrip();
  });

  const cooldownTrack = el('div', 'prime-cooldown-track');
  const cooldownBar   = el('div', 'prime-cooldown-bar');
  cooldownBar.id = 'prime-cooldown-bar';
  const elapsedMs = Date.now() - primeState.lastClickMs;
  const cdMs = attemptCooldownMs();
  if (elapsedMs < cdMs) {
    cooldownBar.style.animation      = `prime-cooldown ${cdMs}ms linear forwards`;
    cooldownBar.style.animationDelay = `-${elapsedMs}ms`;
  }
  cooldownTrack.appendChild(cooldownBar);

  const cooldownLabel = el('div', 'prime-cooldown-label');
  cooldownLabel.id = 'prime-cooldown-label';

  const rollResult = el('div', 'prime-roll-result');
  rollResult.id = 'prime-roll-result';
  if (lastRollResults) renderRollResults(rollResult, lastRollResults, false);

  attemptSection.appendChild(attemptBtn);
  attemptSection.appendChild(cooldownTrack);
  attemptSection.appendChild(cooldownLabel);
  attemptSection.appendChild(rollResult);
  col.appendChild(attemptSection);

  // Prime strip
  const stripHeader = el('div', 'prime-strip-header');
  stripHeader.appendChild(el('span', 'prime-strip-label', 'FOUND PRIMES'));
  const filterRow = el('div', 'prime-filter-row');
  for (const f of ['all', 'common', 'uncommon', 'rare', 'epic', 'legendary']) {
    const btn = el('button', 'prime-filter-btn', f.toUpperCase());
    btn.dataset.stripFilter = f;
    btn.classList.toggle('prime-filter-active', stripFilter === f);
    btn.addEventListener('click', () => { stripFilter = f; refreshStrip(); });
    filterRow.appendChild(btn);
  }
  stripHeader.appendChild(filterRow);
  col.appendChild(stripHeader);
  col.appendChild(buildStrip());

  // Bonuses row
  const bonusRow = el('div', 'prime-bonus-row');
  bonusRow.id = 'prime-bonus-row';
  col.appendChild(bonusRow);

  // Upgrades
  col.appendChild(el('div', 'section-header', 'UPGRADES'));

  const upgList = el('div', 'prime-upgrade-list');
  upgList.id = 'prime-upgrade-list';

  for (const def of UPGRADE_DEFS) {
    if (def.id === 'expandEase') continue;
    const row = el('div', 'prime-upgrade-row');
    row.dataset.primeUpg = def.id;

    const left = el('div', 'prime-upg-left');
    const nameWrap = el('div', 'prime-upg-name-row');
    nameWrap.appendChild(makeSvg(def.id, 'prime-upg-icon'));
    const nameEl = el('span', 'prime-upg-name', def.name);
    const badge  = el('span', 'prime-upg-badge');
    badge.dataset.primeBadge = def.id;
    nameWrap.appendChild(nameEl);
    nameWrap.appendChild(badge);

    const effectEl = el('div', 'prime-upg-effect');
    effectEl.dataset.primeEffect = def.id;

    left.appendChild(nameWrap);
    left.appendChild(effectEl);

    const right = el('div', 'prime-upg-right');
    const costEl = el('div', 'prime-upg-cost');
    costEl.dataset.primeCost = def.id;

    const buyBtn = el('button', 'prime-upg-buy', '+');
    buyBtn.dataset.primeBuy = def.id;
    buyBtn.addEventListener('click', () => buyPrimeUpgrade(def.id));

    right.appendChild(costEl);
    right.appendChild(buyBtn);

    row.appendChild(left);
    row.appendChild(right);
    upgList.appendChild(row);
  }

  col.appendChild(upgList);

  // ── Expand card ─────────────────────────────────────────────────────────────
  const expandCard = el('div', 'prime-expand-card');
  expandCard.id = 'prime-expand-card';

  const cardHeader = el('div', 'prime-expand-card-header');
  cardHeader.appendChild(el('span', 'prime-expand-card-title', 'EXPAND SEARCH RANGE'));
  const cardCount = el('span', 'prime-expand-card-count');
  cardCount.id = 'prime-expand-card-count';
  cardHeader.appendChild(cardCount);
  expandCard.appendChild(cardHeader);

  const maxRow2 = el('div', 'prime-expand-maxes');
  const curMax = el('span', 'prime-expand-cur');
  curMax.id = 'prime-expand-cur';
  const newMaxEl = el('span', 'prime-expand-new');
  newMaxEl.id = 'prime-expand-new';
  maxRow2.appendChild(curMax);
  maxRow2.appendChild(newMaxEl);
  expandCard.appendChild(maxRow2);

  const barTrack = el('div', 'prime-expand-bar-track');
  const barFill  = el('div', 'prime-expand-bar-fill');
  barFill.id = 'prime-expand-bar-fill';
  barTrack.appendChild(barFill);
  expandCard.appendChild(barTrack);

  const countLabel = el('div', 'prime-expand-count-label');
  countLabel.id = 'prime-expand-count-label';
  expandCard.appendChild(countLabel);

  const expandBtn = el('button', 'prime-expand-btn');
  expandBtn.id = 'prime-expand-btn';
  expandBtn.appendChild(makeSvg('expand', 'prime-expand-icon'));
  const expandText = el('span', 'prime-expand-text', 'EXPAND  —  sacrifice all primes');
  expandBtn.appendChild(expandText);
  expandBtn.addEventListener('click', () => {
    if (!canExpand()) return;
    triggerExpandFlash();
    doExpand();
    buildPrimesDOM();
  });
  expandCard.appendChild(expandBtn);

  col.appendChild(expandCard);

  // ── Milestone section ────────────────────────────────────────────────────────
  const milSection = el('div', 'prime-milestone-section');
  milSection.appendChild(el('div', 'prime-milestone-header', 'MILESTONES'));

  for (const m of PRIME_MILESTONES) {
    const reached = primeState.currentMax >= m.maxReq;
    const row = el('div', 'prime-milestone-row' + (reached ? ' prime-milestone-reached' : ''));
    row.appendChild(el('span', 'prime-milestone-dot', reached ? '●' : '○'));
    row.appendChild(el('span', 'prime-milestone-thresh', '≥ ' + m.maxReq.toLocaleString()));
    row.appendChild(el('span', 'prime-milestone-label', m.label));
    row.appendChild(el('span', 'prime-milestone-sub', m.sub));
    milSection.appendChild(row);
  }

  col.appendChild(milSection);

  // ── Catalyst card (expandEase) styled as main upgrade card ───────────────────
  const catalystSection = el('div', 'prime-catalyst-section');
  catalystSection.id = 'prime-catalyst-section';
  catalystSection.style.display = isUpgradeVisible('expandEase') ? '' : 'none';
  catalystSection.appendChild(el('div', 'section-header', 'CATALYST'));

  const catalystCard = document.createElement('div');
  catalystCard.className = 'upgrade-card first-in-group';
  catalystCard.id = 'prime-catalyst-card';

  const catIcon = document.createElement('div');
  catIcon.className = 'upgrade-icon';
  catIcon.innerHTML = `<svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4.5,9 31.5,9 20.25,20.25 20.25,29.25 15.75,29.25 15.75,20.25 4.5,9"/></svg>`;

  const catInfo = document.createElement('div');
  catInfo.className = 'upgrade-info';

  const catNameRow = document.createElement('div');
  catNameRow.className = 'upgrade-name';
  catNameRow.textContent = 'Catalyst ';
  const catBadge = el('span', 'level-badge');
  catBadge.id = 'prime-catalyst-badge';
  catBadge.textContent = 'lv.' + (primeState.upgrades.expandEase ?? 0);
  catNameRow.appendChild(catBadge);

  const catDesc = el('div', 'upgrade-desc');
  catDesc.id = 'prime-catalyst-desc';
  catDesc.textContent = upgradeEffectDesc('expandEase');

  catInfo.appendChild(catNameRow);
  catInfo.appendChild(catDesc);

  const catRight = document.createElement('div');
  catRight.className = 'upgrade-right';

  const catCost = el('div', 'upgrade-cost');
  catCost.id = 'prime-catalyst-cost';

  const catBtn = el('button', 'buy-btn');
  catBtn.id = 'prime-catalyst-btn';
  catBtn.textContent = 'buy';
  catBtn.addEventListener('click', () => buyPrimeUpgrade('expandEase'));

  const catBtnRow = document.createElement('div');
  catBtnRow.className = 'upgrade-btn-row';
  catBtnRow.appendChild(catBtn);

  catRight.appendChild(catCost);
  catRight.appendChild(catBtnRow);
  catalystCard.appendChild(catIcon);
  catalystCard.appendChild(catInfo);
  catalystCard.appendChild(catRight);
  catalystSection.appendChild(catalystCard);
  col.appendChild(catalystSection);
}

// ── Per-frame update ───────────────────────────────────────────────────────────

export function updatePrimesText() {
  if (primeState.primeDirty) {
    buildPrimesDOM();
    return;
  }

  // Max info row
  const maxRow = document.getElementById('prime-max-row');
  if (maxRow) {
    maxRow.innerHTML = '';
    const label = el('span', 'prime-zone-label', 'search range: 2 — ' + primeState.currentMax.toLocaleString());
    const held  = el('span', 'prime-zone-progress', primeState.held.length + ' primes held');
    maxRow.appendChild(label);
    maxRow.appendChild(held);
  }

  // Attempt button cooldown state
  const attemptBtn = document.getElementById('prime-attempt-btn');
  if (attemptBtn) {
    const ready = Date.now() - primeState.lastClickMs >= attemptCooldownMs();
    attemptBtn.disabled = false;
    attemptBtn.classList.toggle('prime-attempt-ready', ready);
  }

  // Cooldown label
  const cdLabel = document.getElementById('prime-cooldown-label');
  if (cdLabel) {
    const ms = attemptCooldownMs();
    cdLabel.textContent = (ms / 1000).toFixed(2) + 's cooldown';
  }

  // Bonus row
  const bonusRow = document.getElementById('prime-bonus-row');
  if (bonusRow) {
    const nb = commonPrimeBonus();
    const ib = rarePrimeBonus();
    const parts = [];
    if (nb > 1) parts.push('N/s ×' + nb.toFixed(3) + '  [common/uncommon/legendary]');
    if (ib > 1) parts.push('ℐ ×' + ib.toFixed(3) + '  [rare/epic/legendary]');
    bonusRow.textContent = parts.join('   ');
    bonusRow.style.display = parts.length ? '' : 'none';
  }

  // Upgrade rows
  for (const def of UPGRADE_DEFS) {
    const row = document.querySelector('[data-prime-upg="' + def.id + '"]');
    if (!row) continue;

    const visible = isUpgradeVisible(def.id);
    row.style.display = visible ? '' : 'none';
    if (!visible) continue;

    const lvl = primeState.upgrades[def.id] ?? 0;
    const badge  = row.querySelector('[data-prime-badge="' + def.id + '"]');
    const effect = row.querySelector('[data-prime-effect="' + def.id + '"]');
    const cost   = row.querySelector('[data-prime-cost="' + def.id + '"]');
    const btn    = row.querySelector('[data-prime-buy="' + def.id + '"]');

    if (badge)  badge.textContent  = 'lv.' + lvl;
    if (effect) effect.textContent = upgradeEffectDesc(def.id);

    if (cost) {
      const spec = upgradeCostSpec(def.id);
      if (!spec) {
        cost.textContent = 'maxed';
      } else if (spec.nCost !== undefined) {
        cost.textContent = fmt(new Decimal(spec.nCost)) + ' N';
      } else {
        cost.textContent = spec.count + '× ≥' + spec.minVal;
      }
    }

    const canBuy = canBuyUpgrade(def.id);
    if (btn) btn.classList.toggle('prime-upg-buy-off', !canBuy);
  }

  // Expand card
  const expandCard = document.getElementById('prime-expand-card');
  if (!expandCard) return;

  const maxed     = isExpandMaxed();
  const heldCount = primeState.held.length;
  const minCount  = expandMinCount();
  const gain      = expandGain();
  const newMax    = Math.min(primeState.currentMax + gain, PRIMES.EXPAND_CAP);
  const ready     = canExpand();
  const pct       = maxed ? 100 : Math.min(heldCount / minCount, 1) * 100;

  expandCard.classList.toggle('expand-card-ready', ready);

  const cardCount = document.getElementById('prime-expand-card-count');
  if (cardCount) cardCount.textContent = '×' + primeState.expandCount;

  const curMaxEl = document.getElementById('prime-expand-cur');
  if (curMaxEl) curMaxEl.textContent = primeState.currentMax.toLocaleString();

  const newMaxEl = document.getElementById('prime-expand-new');
  if (newMaxEl) {
    newMaxEl.textContent = maxed ? 'MAXED' : (ready ? '→ ' + newMax.toLocaleString() : '→ ' + newMax.toLocaleString());
    newMaxEl.classList.toggle('expand-new-ready', ready);
  }

  const barFill = document.getElementById('prime-expand-bar-fill');
  if (barFill) {
    barFill.style.width = pct + '%';
    barFill.classList.toggle('expand-bar-ready', ready);
  }

  const countLabel = document.getElementById('prime-expand-count-label');
  if (countLabel) {
    if (maxed) {
      countLabel.textContent = 'search range maxed';
      countLabel.className = 'prime-expand-count-label';
    } else {
      countLabel.innerHTML = '';
      const hSpan = document.createElement('span');
      hSpan.textContent = heldCount;
      hSpan.className = ready ? 'expand-count-ok' : '';
      countLabel.appendChild(hSpan);
      countLabel.appendChild(document.createTextNode(' / ' + minCount + ' primes'));
    }
  }

  const expandBtn = document.getElementById('prime-expand-btn');
  if (expandBtn) {
    expandBtn.disabled = !ready;
    expandBtn.classList.toggle('prime-expand-ready', ready);
    const expandText = expandBtn.querySelector('.prime-expand-text');
    if (expandText) expandText.textContent = maxed ? 'MAXED' : 'EXPAND  —  sacrifice all primes';
  }

  // Catalyst card
  const catalystSection = document.getElementById('prime-catalyst-section');
  if (catalystSection) {
    const visible = isUpgradeVisible('expandEase');
    catalystSection.style.display = visible ? '' : 'none';
    if (visible) {
      const badge = document.getElementById('prime-catalyst-badge');
      if (badge) badge.textContent = 'lv.' + (primeState.upgrades.expandEase ?? 0);
      const desc = document.getElementById('prime-catalyst-desc');
      if (desc) desc.textContent = upgradeEffectDesc('expandEase');
      const spec    = upgradeCostSpec('expandEase');
      const canBuy  = canBuyUpgrade('expandEase');
      const costEl  = document.getElementById('prime-catalyst-cost');
      if (costEl) {
        costEl.textContent = spec ? fmt(new Decimal(spec.nCost)) + ' N' : 'maxed';
        costEl.className   = 'upgrade-cost' + (canBuy ? '' : ' cannot-afford');
      }
      const btn = document.getElementById('prime-catalyst-btn');
      if (btn) btn.disabled = !canBuy;
    }
  }
}
