// main.js — Entry point: initialises state, runs the RAF game loop.

import { gameState, initState } from '/_assets/d2c7ede9925029d5b096.js';
import { computeProduction } from '/_assets/0961ea02e8e958458dec.js';
import { render } from '/_assets/f2594d8d9139c1515300.js';
import { save, load, showAutosaveToast } from '/_assets/09fec7785193a67b4075.js';
import { initTabs } from '/_assets/3e919826ad2011a48d07.js';
import { fmt } from '/_assets/6448d0556ec80157a1ac.js';
import { ENGINE, THEOREM, ARITHMETIC_SEQ, ITER } from '/_assets/c24c79b6b7c44a0481ad.js';
import { setupParticles, tickParticles } from '/_assets/f8bd0d82e70eb247339b.js';
import { tickSigmaAutomation, simulateSigmaOffline } from '/_assets/aa5dc9827efa02a28524.js';
import { tickOrbit, orbitState } from '/_assets/5347d29d71d559e3b485.js';
import { showOfflineModal } from '/_assets/390ce14dbe734656276d.js';

// ── Unlock checks ────────────────────────────────────────────────────────────

function checkUnlocks() {
  for (const upg of gameState.upgrades) {
    if (!upg.unlocked && upg.unlockCondition?.(gameState)) {
      upg.unlocked = true;
      gameState.domDirty = true;
    }
  }
  // Theorem unlocks permanently when axiomCount first hits the threshold
  if (!gameState.theoremUnlocked && gameState.axiomCount >= THEOREM.UNLOCK_AT_AX) {
    gameState.theoremUnlocked = true;
    gameState.domDirty = true;
  }

  // Iteration tab unlocks permanently at axiomCount >= ITER.UNLOCK_AT_AX
  if (!gameState.iterationUnlocked && gameState.axiomCount >= ITER.UNLOCK_AT_AX) {
    gameState.iterationUnlocked = true;
    gameState.domDirty = true;
    const iterTab = document.getElementById('tab-iteration');
    if (iterTab) iterTab.style.display = '';
  }

  // Sequences tab unlocks at the configured theorem count
  if (!gameState.sequencesUnlocked && gameState.theoremCount >= ARITHMETIC_SEQ.UNLOCK_THM) {
    gameState.sequencesUnlocked = true;
    gameState.seqDomDirty = true;
    const seqTab = document.getElementById('tab-sequences');
    if (seqTab) seqTab.style.display = '';
  }
}

// ── Per-frame update ─────────────────────────────────────────────────────────

function update(delta) {
  checkUnlocks();
  gameState.totalPlaytime += delta;

  const prod = computeProduction();
  const boost = gameState.devBoost > 1 ? new Decimal(gameState.devBoost) : new Decimal(1);
  gameState.N = gameState.N.add(prod.mul(boost).mul(new Decimal(delta)));

  tickSigmaAutomation(delta);
  tickOrbit(delta);

  if (Date.now() - gameState.lastSave > gameState.autosaveInterval * 1000) {
    save();
    showAutosaveToast();
  }
}

// ── Game loop ────────────────────────────────────────────────────────────────

function loop(timestamp) {
  if (gameState.lastTick === null) {
    gameState.lastTick = timestamp;
  }

  const delta = Math.min((timestamp - gameState.lastTick) / 1000, ENGINE.DELTA_CAP);
  gameState.lastTick = timestamp;

  update(delta);
  tickParticles(delta);
  render();

  requestAnimationFrame(loop);
}

// ── Init ─────────────────────────────────────────────────────────────────────

initState();   // creates gameState.N — must come before load() or any Decimal use
load();

// Offline progress — apply production for time away (capped at ENGINE.OFFLINE_CAP_SECONDS)
{
  const elapsed = Math.min((Date.now() - gameState.lastSave) / 1000, ENGINE.OFFLINE_CAP_SECONDS);
  if (gameState.offlineProduction && elapsed > ENGINE.OFFLINE_MIN_SECONDS) {
    const production = computeProduction();
    const gainN      = production.mul(new Decimal(elapsed));
    gameState.N      = gameState.N.add(gainN);

    const tauBefore  = orbitState.tau;
    tickOrbit(elapsed);
    const gainTau    = orbitState.tau - tauBefore;

    const sigmaGains = simulateSigmaOffline(elapsed);

    showOfflineModal(elapsed, gainN, production, gainTau, sigmaGains);
  }
}

initTabs();
setupParticles();
gameState.domDirty = true;
requestAnimationFrame(loop);
