// easter-egg.js — Red Nebula Incremental (secret mini-game)

const SAVE_KEY           = 'axiom_easter_v1';
const LOGO_CLICKS_NEEDED = 10;
const TICK_MS            = 100;

// Upgrade costs
const CLICK_COST_BASE    = 8;
const CLICK_COST_SCALE   = 6.5;
const AUTO_COST_BASE     = 12;
const AUTO_COST_SCALE    = 12;
const MULT_COST_BASE     = 60;
const MULT_COST_SCALE    = 16;

// Per-level gains
const CLICK_RED_PER_LVL  = 1;
const AUTO_RED_PER_LVL   = 3;
const MULT_FACTOR        = 1.8;

// Prestige thresholds — all scale as base × scale^totalBought
const NEBULA_REQ_BASE    = 100;
const NEBULA_REQ_SCALE   = 8;
const STAR_REQ_BASE      = 3;
const STAR_REQ_SCALE     = 1.6;
const GALAXY_REQ_BASE    = 4;
const GALAXY_REQ_SCALE   = 1.5;
const WIN_REQ            = 3;

// Prestige bonuses — permanent multipliers per cumulative count
const NEBULA_RED_BONUS   = 1.5;    // ×3 Red/s per Nebula ever bought
const NEBULA_CLICK_BONUS = 2;    // ×2 click power per Nebula ever bought
const STAR_RED_BONUS     = 3;    // ×6 Red/s per Star ever bought
const GALAXY_RED_BONUS   = 1.2;   // ×15 Red/s per Galaxy ever bought

const DEFAULT_STATE = {
  red: 0, nebula: 0, star: 0, galaxy: 0,
  nebulaTotal: 0, starTotal: 0, galaxyTotal: 0,
  clickLvl: 0, autoLvl: 0, multLvl: 0,
  finished: false,
};

const egState = { ...DEFAULT_STATE };

let tickId     = null;
let logoClicks = 0;
let egBuyMax   = false;

// ── Save / Load ───────────────────────────────────────────────────────────────

function egSave() { localStorage.setItem(SAVE_KEY, JSON.stringify(egState)); }

function egLoad() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) Object.assign(egState, JSON.parse(raw));
  } catch {}
}

// ── Math ──────────────────────────────────────────────────────────────────────

function nebulaReq()  { return Math.floor(NEBULA_REQ_BASE  * Math.pow(NEBULA_REQ_SCALE,  egState.nebula)); }
function starReq()    { return Math.floor(STAR_REQ_BASE    * Math.pow(STAR_REQ_SCALE,    egState.star));   }
function galaxyReq()  { return Math.floor(GALAXY_REQ_BASE  * Math.pow(GALAXY_REQ_SCALE,  egState.galaxy)); }
function clickCost()  { return Math.ceil(CLICK_COST_BASE  * Math.pow(CLICK_COST_SCALE,  egState.clickLvl));  }
function autoCost()   { return Math.ceil(AUTO_COST_BASE   * Math.pow(AUTO_COST_SCALE,   egState.autoLvl));   }
function multCost()   { return Math.ceil(MULT_COST_BASE   * Math.pow(MULT_COST_SCALE,   egState.multLvl));   }

function prestigeMult() {
  return Math.pow(NEBULA_RED_BONUS,  egState.nebulaTotal)
       * Math.pow(STAR_RED_BONUS,    egState.starTotal)
       * Math.pow(GALAXY_RED_BONUS,  egState.galaxyTotal);
}

function clickPower() {
  return (1 + egState.clickLvl * CLICK_RED_PER_LVL)
       * Math.pow(NEBULA_CLICK_BONUS, egState.nebulaTotal);
}

function redPerSec() {
  if (egState.autoLvl === 0) return 0;
  return egState.autoLvl * AUTO_RED_PER_LVL
       * Math.pow(MULT_FACTOR, egState.multLvl)
       * prestigeMult();
}

const FMT_SUFFIXES = [
  '', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No',
  'Dc', 'UDc', 'DDc', 'TDc', 'QaDc', 'QiDc', 'SxDc', 'SpDc', 'OcDc', 'NoDc',
  'Vg', 'UVg', 'DVg', 'TVg', 'QaVg', 'QiVg', 'SxVg', 'SpVg', 'OcVg', 'NoVg',
  'Tg', 'UTg', 'DTg', 'TTg', 'QaTg', 'QiTg', 'SxTg', 'SpTg', 'OcTg', 'NoTg',
  'Qag', 'UQag', 'DQag', 'TQag', 'QaQag', 'QiQag', 'SxQag', 'SpQag', 'OcQag', 'NoQag',
  'Qig', 'UQig', 'DQig', 'TQig', 'QaQig', 'QiQig', 'SxQig', 'SpQig', 'OcQig', 'NoQig',
  'Sxg', 'USxg', 'DSxg', 'TSxg', 'QaSxg', 'QiSxg', 'SxSxg', 'SpSxg', 'OcSxg', 'NoSxg',
  'Spg', 'USpg', 'DSpg', 'TSpg', 'QaSpg', 'QiSpg', 'SxSpg', 'SpSpg', 'OcSpg', 'NoSpg',
  'Ocg', 'UOcg', 'DOcg', 'TOcg', 'QaOcg', 'QiOcg', 'SxOcg', 'SpOcg', 'OcOcg', 'NoOcg',
  'Nog', 'UNog', 'DNog', 'TNog', 'QaNog', 'QiNog', 'SxNog', 'SpNog', 'OcNog', 'NoNog',
  'Ce',
];

function fmtEg(n) {
  if (n < 1000) return Math.floor(n).toString();
  const tier = Math.min(Math.floor(Math.log10(n) / 3), FMT_SUFFIXES.length - 1);
  return (n / Math.pow(1000, tier)).toFixed(2) + FMT_SUFFIXES[tier];
}

// ── Game Logic ────────────────────────────────────────────────────────────────

function egUpdate(delta) {
  if (egState.finished) return;
  egState.red += redPerSec() * delta;
}

function doClick() {
  if (egState.finished) return;
  egState.red += clickPower();
}

function buyUpgrade(costFn, lvlKey, unlocked) {
  if (unlocked === false) return;
  let bought = false;
  do {
    const cost = costFn();
    if (egState.red < cost) break;
    egState.red -= cost;
    egState[lvlKey]++;
    bought = true;
  } while (egBuyMax);
  if (bought) egSave();
}

function doNebula() {
  let did = false;
  while (egState.red >= nebulaReq()) {
    egState.red = 0;
    egState.nebula++;
    egState.nebulaTotal++;
    did = true;
    if (!egBuyMax) break;
  }
  if (did) egSave();
}

function doStar() {
  let did = false;
  while (egState.nebula >= starReq()) {
    egState.nebula = 0;
    egState.star++;
    egState.starTotal++;
    did = true;
    if (!egBuyMax) break;
  }
  if (did) egSave();
}

function doGalaxy() {
  let did = false;
  while (egState.star >= galaxyReq()) {
    egState.star = 0;
    egState.galaxy++;
    egState.galaxyTotal++;
    did = true;
    if (!egBuyMax) break;
  }
  if (did) egSave();
}

function doWin() {
  if (egState.galaxy < WIN_REQ) return;
  egState.galaxy -= WIN_REQ;
  egState.finished = true;
  egSave();
  showEnding();
}

function egReset() {
  Object.assign(egState, { ...DEFAULT_STATE });
  egSave();
  buildEgDOM();
}

// ── DOM Helpers ───────────────────────────────────────────────────────────────

function el(tag, cls, txt) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt !== undefined) e.textContent = txt;
  return e;
}

function makeUpgradeRow(id, name, desc, buyFn) {
  const row = el('div', 'eg-upg-row');
  row.id = id + '-row';

  const btn = el('button', 'eg-upg-btn');
  btn.id = id + '-btn';
  btn.textContent = 'buy';
  btn.addEventListener('click', buyFn);

  const info = el('div', 'eg-upg-info');
  info.appendChild(el('div', 'eg-upg-name', name));
  info.appendChild(el('div', 'eg-upg-desc', desc));

  const right = el('div', 'eg-upg-right');
  const lvlEl  = el('span', 'eg-upg-lvl');  lvlEl.id  = id + '-lvl';
  const costEl = el('span', 'eg-upg-cost'); costEl.id = id + '-cost';
  right.appendChild(lvlEl);
  right.appendChild(costEl);

  row.appendChild(btn);
  row.appendChild(info);
  row.appendChild(right);
  return row;
}

function makePrestigeRow(id, btnText, btnCls, clickFn) {
  const row = el('div', 'eg-prestige-row');
  row.id = id + '-row';

  const btn = el('button', 'eg-prestige-btn ' + btnCls);
  btn.id = id + '-btn';
  btn.textContent = btnText;
  btn.addEventListener('click', clickFn);

  const info = el('div', 'eg-prestige-info');
  const reqEl = el('span', 'eg-prestige-req'); reqEl.id = id + '-req';
  const rewardEl = el('span', 'eg-prestige-reward'); rewardEl.id = id + '-reward';
  info.appendChild(reqEl);
  info.appendChild(rewardEl);

  row.appendChild(btn);
  row.appendChild(info);
  return row;
}

// ── Ending Screen ─────────────────────────────────────────────────────────────

function showEnding() {
  const panel = document.getElementById('easter-egg-panel');
  if (!panel) return;

  const ending = el('div', 'eg-ending');

  const lines = [
    ['eg-ending-title', 'done.'],
    ['eg-ending-gap',   ''],
    ['eg-ending-body',  '"Red Nebula" is a type of nebula.'],
    ['eg-ending-muted', 'specifically, an emission nebula.'],
    ['eg-ending-muted', 'gas.  dust.  ionized hydrogen.'],
    ['eg-ending-gap',   ''],
    ['eg-ending-body',  'it does not make games.'],
    ['eg-ending-body',  'it does not click buttons.'],
    ['eg-ending-muted', 'it does not need to.'],
    ['eg-ending-gap',   ''],
    ['eg-ending-muted', '(you do.)'],
  ];

  for (const [cls, txt] of lines) {
    if (cls === 'eg-ending-gap') { ending.appendChild(el('div', 'eg-ending-gap')); continue; }
    ending.appendChild(el('div', cls, txt));
  }

  const again = el('button', 'eg-prestige-btn eg-btn-galaxy', '[ play again ]');
  again.style.marginTop = '20px';
  again.addEventListener('click', egReset);
  ending.appendChild(again);

  panel.innerHTML = '';
  panel.appendChild(ending);
}

// ── Build DOM ─────────────────────────────────────────────────────────────────

function buildEgDOM() {
  const panel = document.getElementById('easter-egg-panel');
  if (!panel) return;
  panel.innerHTML = '';

  // Header
  const hdr = el('div', 'eg-header');
  hdr.appendChild(el('div', 'eg-title', 'RED NEBULA INCREMENTAL'));
  hdr.appendChild(el('div', 'eg-sub', 'a game within a game.  concerning.'));
  panel.appendChild(hdr);

  // Resources
  const res = el('div', 'eg-resources');

  const redRow = el('div', 'eg-res-row');
  redRow.appendChild(el('span', 'eg-res-name eg-col-red', 'red'));
  const redVal  = el('span', 'eg-res-val');  redVal.id  = 'eg-red-val';  redVal.textContent = '0';
  const redRate = el('span', 'eg-res-rate'); redRate.id = 'eg-red-rate';
  redRow.appendChild(redVal);
  redRow.appendChild(redRate);
  res.appendChild(redRow);

  const secRow = el('div', 'eg-res-row eg-res-secondary');
  const addSec = (name, cls, id) => {
    secRow.appendChild(el('span', 'eg-res-name ' + cls, name));
    const v = el('span', 'eg-res-val'); v.id = id; v.textContent = '0';
    secRow.appendChild(v);
  };
  addSec('nebula', 'eg-col-nebula', 'eg-nebula-val');
  secRow.appendChild(el('span', 'eg-res-sep', '·'));
  addSec('star', 'eg-col-star', 'eg-star-val');
  secRow.appendChild(el('span', 'eg-res-sep', '·'));
  addSec('galaxy', 'eg-col-galaxy', 'eg-galaxy-val');
  res.appendChild(secRow);

  // Prestige bonus row (hidden until first nebula)
  const bonusRow = el('div', 'eg-res-row eg-bonus-row');
  bonusRow.id = 'eg-bonus-row';
  bonusRow.style.display = 'none';
  bonusRow.appendChild(el('span', 'eg-res-name', 'bonus'));
  const bonusVal = el('span', 'eg-bonus-val'); bonusVal.id = 'eg-bonus-val';
  bonusRow.appendChild(bonusVal);
  res.appendChild(bonusRow);

  panel.appendChild(res);
  panel.appendChild(el('div', 'eg-divider'));

  // Click button
  const clickBtn = el('button', 'eg-click-btn', '[ collect red ]');
  clickBtn.addEventListener('click', doClick);
  panel.appendChild(clickBtn);

  // Upgrades
  const upgHdr = el('div', 'eg-section-label-row');
  upgHdr.appendChild(el('span', 'eg-section-label', 'upgrades'));
  const maxBtn = el('button', 'eg-max-btn', 'max: off');
  maxBtn.id = 'eg-max-btn';
  maxBtn.addEventListener('click', () => {
    egBuyMax = !egBuyMax;
    maxBtn.textContent = egBuyMax ? 'max: on' : 'max: off';
    maxBtn.classList.toggle('eg-max-btn-on', egBuyMax);
  });
  upgHdr.appendChild(maxBtn);
  panel.appendChild(upgHdr);
  const upgs = el('div', 'eg-upgrades');

  upgs.appendChild(makeUpgradeRow(
    'eg-upg-click',
    'Mildly Committed',
    '+1 Red per click.  stacks with nebula bonus.',
    () => buyUpgrade(clickCost, 'clickLvl')
  ));
  upgs.appendChild(makeUpgradeRow(
    'eg-upg-auto',
    'Passive-Aggressive Cosmology',
    '+3 Red/s.  the universe produces red.  somehow.',
    () => buyUpgrade(autoCost, 'autoLvl')
  ));
  const multRow = makeUpgradeRow(
    'eg-upg-mult',
    'Chromatic Overdrive',
    '×1.8 Red/s.  more red.  yes.',
    () => buyUpgrade(multCost, 'multLvl', egState.nebulaTotal >= 1)
  );
  multRow.id = 'eg-upg-mult-row';
  upgs.appendChild(multRow);

  panel.appendChild(upgs);

  // Prestige
  panel.appendChild(el('div', 'eg-section-label', 'prestige'));
  const prestige = el('div', 'eg-prestige');

  prestige.appendChild(makePrestigeRow('eg-nebula', '[ condense ]',  'eg-btn-red',    doNebula));
  prestige.appendChild(makePrestigeRow('eg-star',   '[ sublimate ]', 'eg-btn-nebula', doStar));
  prestige.appendChild(makePrestigeRow('eg-galaxy', '[ collapse ]',  'eg-btn-star',   doGalaxy));
  prestige.appendChild(makePrestigeRow('eg-win',    '[ become ]',    'eg-btn-galaxy', doWin));

  panel.appendChild(prestige);

  const footer = el('div', 'eg-footer');
  const resetBtn = el('button', 'eg-footer-reset', 'reset this too');
  resetBtn.addEventListener('click', () => {
    if (confirm('reset Red Nebula Incremental?')) egReset();
  });
  footer.appendChild(resetBtn);
  panel.appendChild(footer);

  if (egState.finished) showEnding();
}

// ── Render ────────────────────────────────────────────────────────────────────

function egRender() {
  const g = id => document.getElementById(id);

  const redV = g('eg-red-val');    if (redV)  redV.textContent  = fmtEg(egState.red);
  const nbV  = g('eg-nebula-val'); if (nbV)   nbV.textContent   = fmtEg(egState.nebula);
  const stV  = g('eg-star-val');   if (stV)   stV.textContent   = fmtEg(egState.star);
  const gxV  = g('eg-galaxy-val'); if (gxV)   gxV.textContent   = fmtEg(egState.galaxy);

  const rr = g('eg-red-rate');
  if (rr) {
    const rate = redPerSec();
    rr.textContent = rate > 0 ? '+' + fmtEg(rate) + '/s' : '';
  }

  // Prestige bonus row
  const bonusRow = g('eg-bonus-row');
  const bonusVal = g('eg-bonus-val');
  if (bonusRow && bonusVal && egState.nebulaTotal >= 1) {
    bonusRow.style.display = '';
    const parts = [];
    if (egState.nebulaTotal > 0) parts.push('nebula ×' + fmtEg(Math.pow(NEBULA_RED_BONUS, egState.nebulaTotal)) + ' R/s');
    if (egState.starTotal   > 0) parts.push('star ×'   + fmtEg(Math.pow(STAR_RED_BONUS,   egState.starTotal))   + ' R/s');
    if (egState.galaxyTotal > 0) parts.push('galaxy ×' + fmtEg(Math.pow(GALAXY_RED_BONUS, egState.galaxyTotal)) + ' R/s');
    bonusVal.textContent = parts.join('  ·  ');
  }

  // Upgrades
  const setUpg = (idBase, lvl, cost, canAfford) => {
    const btn  = g(idBase + '-btn');
    const lvlE = g(idBase + '-lvl');
    const cstE = g(idBase + '-cost');
    if (btn)  btn.disabled     = !canAfford;
    if (lvlE) lvlE.textContent = 'Lv ' + lvl;
    if (cstE) cstE.textContent = fmtEg(cost) + ' Red';
  };

  setUpg('eg-upg-click', egState.clickLvl, clickCost(), egState.red >= clickCost());
  setUpg('eg-upg-auto',  egState.autoLvl,  autoCost(),  egState.red >= autoCost());

  const multRow = g('eg-upg-mult-row');
  if (multRow) {
    const visible = egState.nebulaTotal >= 1;
    multRow.style.display = visible ? '' : 'none';
    if (visible) setUpg('eg-upg-mult', egState.multLvl, multCost(), egState.red >= multCost());
  }

  // Prestige buttons + requirements + reward descriptions
  const req = nebulaReq();
  const nbReq = g('eg-nebula-req');    if (nbReq) nbReq.textContent    = 'need ' + fmtEg(req) + ' Red';
  const nbBtn = g('eg-nebula-btn');    if (nbBtn) nbBtn.disabled        = egState.red < req;
  const nbRwd = g('eg-nebula-reward'); if (nbRwd) nbRwd.textContent    = `→ 1 Nebula  ·  ×${NEBULA_RED_BONUS} R/s  ·  ×${NEBULA_CLICK_BONUS} click`;

  const starRow = g('eg-star-row');
  if (starRow) starRow.style.display = egState.nebulaTotal >= 1 ? '' : 'none';
  const sr    = starReq();
  const stReq = g('eg-star-req');    if (stReq) stReq.textContent    = 'need ' + fmtEg(sr) + ' Neb';
  const stBtn = g('eg-star-btn');    if (stBtn) stBtn.disabled        = egState.nebula < sr;
  const stRwd = g('eg-star-reward'); if (stRwd) stRwd.textContent    = `→ 1 Star  ·  ×${STAR_RED_BONUS} R/s`;

  const galaxyRow = g('eg-galaxy-row');
  if (galaxyRow) galaxyRow.style.display = egState.starTotal >= 1 ? '' : 'none';
  const gr    = galaxyReq();
  const gxReq = g('eg-galaxy-req');    if (gxReq) gxReq.textContent    = 'need ' + fmtEg(gr) + ' Star';
  const gxBtn = g('eg-galaxy-btn');    if (gxBtn) gxBtn.disabled        = egState.star < gr;
  const gxRwd = g('eg-galaxy-reward'); if (gxRwd) gxRwd.textContent    = `→ 1 Galaxy  ·  ×${GALAXY_RED_BONUS} R/s`;

  const winRow = g('eg-win-row');
  if (winRow) winRow.style.display = egState.galaxyTotal >= 1 ? '' : 'none';
  const winReq = g('eg-win-req');    if (winReq) winReq.textContent    = 'need ' + WIN_REQ + ' Gal';
  const winBtn = g('eg-win-btn');    if (winBtn) winBtn.disabled        = egState.galaxy < WIN_REQ;
  const winRwd = g('eg-win-reward'); if (winRwd) winRwd.textContent    = '→ Red Nebula';
}

// ── Loop ──────────────────────────────────────────────────────────────────────

function startLoop() {
  if (tickId !== null) return;
  tickId = setInterval(() => {
    egUpdate(TICK_MS / 1000);
    egRender();
  }, TICK_MS);
  setInterval(egSave, 30_000);
}

// ── Init ──────────────────────────────────────────────────────────────────────

function openEasterEgg() {
  const panel = document.getElementById('easter-egg-panel');
  if (!panel) return;
  panel.style.display = '';
  buildEgDOM();
  startLoop();
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
}

function initEasterEgg() {
  egLoad();

  const logo = document.querySelector('.settings-logo-img');
  if (!logo) return;

  logo.style.cursor = 'pointer';
  logo.title = '?';

  logo.addEventListener('click', () => {
    logoClicks++;
    if (logoClicks >= LOGO_CLICKS_NEEDED) {
      logoClicks = LOGO_CLICKS_NEEDED;
      openEasterEgg();
      return;
    }
    logo.style.opacity = '0.3';
    setTimeout(() => { logo.style.opacity = ''; }, 80);
    if (logoClicks >= 5) logo.title = '· '.repeat(logoClicks - 4).trimEnd();
  });

  const hasProgress = egState.finished || egState.nebulaTotal > 0
    || egState.clickLvl > 0 || egState.autoLvl > 0;
  if (hasProgress) {
    logoClicks = LOGO_CLICKS_NEEDED;
    openEasterEgg();
  }
}

initEasterEgg();
