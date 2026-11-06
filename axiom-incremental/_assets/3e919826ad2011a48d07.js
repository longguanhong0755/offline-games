// tabs.js — Tab switching, settings panel, and developer tools.

import { gameState, iterState, reservePtsCap } from '/_assets/d2c7ede9925029d5b096.js';
import { seqState } from '/_assets/39bc0725aa17e2322457.js';
import { orbitState } from '/_assets/5347d29d71d559e3b485.js';
import { save, exportSave, importSave } from '/_assets/09fec7785193a67b4075.js';
import { ENGINE } from '/_assets/c24c79b6b7c44a0481ad.js';

export function initTabs() {
  const iterSubtabbar = document.getElementById('iter-subtabbar');
  const miscSubtabbar = document.getElementById('misc-subtabbar');

  // ── Tab switching ─────────────────────────────────────────────────────────
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`panel-${target}`).classList.add('active');
      iterSubtabbar.classList.toggle('visible', target === 'iteration');
      miscSubtabbar.classList.toggle('visible', target === 'misc');
    });
  });

  // ── Iteration subtab switching ─────────────────────────────────────────────
  document.querySelectorAll('.iter-subtab').forEach((subtab) => {
    subtab.addEventListener('click', () => {
      const target = subtab.dataset.iterSubtab;
      document.querySelectorAll('.iter-subtab').forEach((t) => t.classList.remove('active'));
      document.querySelectorAll('.iter-subpanel').forEach((p) => p.classList.remove('active'));
      subtab.classList.add('active');
      document.getElementById(`iter-subpanel-${target}`).classList.add('active');
    });
  });

  // ── Misc subtab switching ──────────────────────────────────────────────────
  document.querySelectorAll('.misc-subtab').forEach((subtab) => {
    subtab.addEventListener('click', () => {
      const target = subtab.dataset.miscSubtab;
      document.querySelectorAll('.misc-subtab').forEach((t) => t.classList.remove('active'));
      document.querySelectorAll('.misc-subpanel').forEach((p) => p.classList.remove('active'));
      subtab.classList.add('active');
      document.getElementById(`misc-subpanel-${target}`).classList.add('active');
    });
  });

  // ── Reset (3-click confirmation) ───────────────────────────────────────────
  const resetBtn = document.getElementById('btn-reset');
  const RESET_CLICKS = 3;
  const RESET_TIMEOUT_MS = 3000;
  let resetClicks = 0;
  let resetTimer  = null;

  const resetClickState = () => {
    resetClicks = 0;
    resetBtn.textContent = 'reset game';
  };

  resetBtn.addEventListener('click', () => {
    clearTimeout(resetTimer);
    resetClicks++;
    if (resetClicks >= RESET_CLICKS) {
      localStorage.clear();
      location.reload();
      return;
    }
    const remaining = RESET_CLICKS - resetClicks;
    resetBtn.textContent = `reset game (${remaining}×)`;
    resetTimer = setTimeout(resetClickState, RESET_TIMEOUT_MS);
  });

  // ── Buy Max toggle ────────────────────────────────────────────────────────
  const buyMaxBtn = document.getElementById('btn-buy-max');
  buyMaxBtn.addEventListener('click', () => {
    gameState.buyMax = !gameState.buyMax;
    buyMaxBtn.textContent = gameState.buyMax ? 'enabled' : 'disabled';
    gameState.domDirty = true;
  });

  // ── Dev: password unlock ─────────────────────────────────────────────────
  const DEV_PASSWORD = '16384';
  const devUnlock = () => {
    document.getElementById('dev-password-row').style.display = 'none';
    document.querySelectorAll('.settings-dev').forEach(el => el.style.display = 'flex');
  };
  document.getElementById('btn-dev-password').addEventListener('click', () => {
    if (document.getElementById('dev-password-input').value === DEV_PASSWORD) devUnlock();
  });

  // ── Dev: N × 2 ───────────────────────────────────────────────────────────
  document.getElementById('btn-dev-double').addEventListener('click', () => {
    gameState.N = gameState.N.mul(new Decimal(2));
  });

  // ── Dev: production boost ─────────────────────────────────────────────────
  document.getElementById('btn-dev-boost').addEventListener('click', () => {
    const raw = document.getElementById('dev-boost-input').value.trim();
    if (!raw) return;
    const val = parseFloat(raw);
    if (isNaN(val) || val <= 0) return;
    gameState.devBoost = val;
  });

  // ── Dev: set N ────────────────────────────────────────────────────────────
  document.getElementById('dev-n-btn').addEventListener('click', () => {
    const raw = document.getElementById('dev-n-input').value.trim();
    if (!raw) return;
    try {
      gameState.N = new Decimal(raw);
      gameState.domDirty = true;
    } catch (_) {}
  });

  // ── Dev: set axiom count ──────────────────────────────────────────────────
  document.getElementById('dev-ax-btn').addEventListener('click', () => {
    const val = parseInt(document.getElementById('dev-ax-input').value, 10);
    if (isNaN(val) || val < 0) return;
    gameState.axiomCount = val;
    if (val >= 10) gameState.theoremUnlocked = true;
    gameState.domDirty = true;
  });

  // ── Dev: set theorem count ────────────────────────────────────────────────
  document.getElementById('dev-thm-btn').addEventListener('click', () => {
    const val = parseInt(document.getElementById('dev-thm-input').value, 10);
    if (isNaN(val) || val < 0) return;
    gameState.theoremCount = val;
    if (val >= 1) gameState.theoremUnlocked = true;
    gameState.domDirty = true;
    gameState.seqDomDirty = true;
  });

  // ── Dev: set τ ───────────────────────────────────────────────────────────
  document.getElementById('dev-tau-btn').addEventListener('click', () => {
    const val = parseFloat(document.getElementById('dev-tau-input').value);
    if (isNaN(val) || val < 0) return;
    orbitState.tau = val;
  });

  // ── Dev: τ boost ─────────────────────────────────────────────────────────
  document.getElementById('dev-tau-boost-btn').addEventListener('click', () => {
    const raw = document.getElementById('dev-tau-boost-input').value.trim();
    if (!raw) return;
    const val = parseFloat(raw);
    if (isNaN(val) || val <= 0) return;
    orbitState.devTauBoost = val;
  });

  // ── Dev: set ℐ ───────────────────────────────────────────────────────────
  document.getElementById('dev-iter-btn').addEventListener('click', () => {
    const val = parseInt(document.getElementById('dev-iter-input').value, 10);
    if (isNaN(val) || val < 0) return;
    iterState.count = val;
  });

  // ── Dev: orbit layers ─────────────────────────────────────────────────────
  document.getElementById('dev-orbit-layers-btn').addEventListener('click', () => {
    const val = parseInt(document.getElementById('dev-orbit-layers-input').value, 10);
    if (isNaN(val) || val < 1) return;
    const prev = orbitState.layers;
    orbitState.layers = val;
    if (val > prev) {
      orbitState.speedLevels = [...orbitState.speedLevels, ...new Array(val - prev).fill(0)];
      orbitState.gainLevels  = [...orbitState.gainLevels,  ...new Array(val - prev).fill(0)];
      orbitState.angles      = [...orbitState.angles,      ...new Array(val - prev).fill(0)];
    } else {
      orbitState.speedLevels = orbitState.speedLevels.slice(0, val);
      orbitState.gainLevels  = orbitState.gainLevels.slice(0, val);
      orbitState.angles      = orbitState.angles.slice(0, val);
    }
    orbitState.dirty = true;
  });

  // ── Dev: set reserve pts ─────────────────────────────────────────────────
  document.getElementById('dev-pts-btn').addEventListener('click', () => {
    const val = parseInt(document.getElementById('dev-pts-input').value, 10);
    if (isNaN(val) || val < 0) return;
    seqState.reservePts = Math.min(val, reservePtsCap());
    gameState.seqDomDirty = true;
  });

  // ── Autosave interval ─────────────────────────────────────────────────────
  const AUTOSAVE_OPTIONS = ENGINE.AUTOSAVE_OPTIONS;
  const fmtInterval = (s) => s >= 60 ? `${Math.floor(s/60)}m ${s%60 > 0 ? (s%60)+'s' : ''}`.trim() : `${s}s`;
  const autosaveBtn = document.getElementById('btn-autosave-interval');
  const syncAutosaveBtn = () => { autosaveBtn.textContent = fmtInterval(gameState.autosaveInterval); };
  syncAutosaveBtn();
  autosaveBtn.addEventListener('click', () => {
    const idx = AUTOSAVE_OPTIONS.indexOf(gameState.autosaveInterval);
    gameState.autosaveInterval = AUTOSAVE_OPTIONS[(idx + 1) % AUTOSAVE_OPTIONS.length];
    syncAutosaveBtn();
    save();
  });

  // ── Export save ───────────────────────────────────────────────────────────
  const exportBtn = document.getElementById('btn-export');
  exportBtn.addEventListener('click', () => {
    const encoded = exportSave();
    if (!encoded) return;
    navigator.clipboard.writeText(encoded).then(() => {
      exportBtn.textContent = 'copied!';
      setTimeout(() => { exportBtn.textContent = 'copy'; }, 1500);
    });
  });

  // ── Import save ───────────────────────────────────────────────────────────
  document.getElementById('btn-import').addEventListener('click', () => {
    const input = document.getElementById('import-input').value.trim();
    if (!input) return;
    if (!importSave(input)) {
      const btn = document.getElementById('btn-import');
      btn.textContent = 'invalid';
      setTimeout(() => { btn.textContent = 'load'; }, 1500);
    }
  });

  // ── Offline production toggle ─────────────────────────────────────────────
  const offlineBtn = document.getElementById('btn-offline');
  offlineBtn.textContent = gameState.offlineProduction ? 'enabled' : 'disabled';
  offlineBtn.addEventListener('click', () => {
    gameState.offlineProduction = !gameState.offlineProduction;
    offlineBtn.textContent = gameState.offlineProduction ? 'enabled' : 'disabled';
    save();
  });

  // ── Notation toggle ───────────────────────────────────────────────────────
  const notationBtn = document.getElementById('btn-notation');
  notationBtn.textContent = gameState.scientificNotation ? 'scientific' : 'suffix';
  notationBtn.addEventListener('click', () => {
    gameState.scientificNotation = !gameState.scientificNotation;
    notationBtn.textContent = gameState.scientificNotation ? 'scientific' : 'suffix';
    save();
  });

  // ── Confirmation toggle ───────────────────────────────────────────────────
  const confirmBtn = document.getElementById('btn-confirm-toggle');
  confirmBtn.textContent = gameState.confirmResets ? 'enabled' : 'disabled';
  confirmBtn.addEventListener('click', () => {
    gameState.confirmResets = !gameState.confirmResets;
    confirmBtn.textContent = gameState.confirmResets ? 'enabled' : 'disabled';
    save();
  });
}
