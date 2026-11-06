// actions.js — Upgrade purchases and prestige resets (Axiom / Theorem).

import { gameState, axiomRequirement, upgradeCostMult, theoremRequirement } from '/_assets/d2c7ede9925029d5b096.js';
import { ENGINE } from '/_assets/c24c79b6b7c44a0481ad.js';
import { resetSeqState } from '/_assets/39bc0725aa17e2322457.js';
import { reqScalingMult } from '/_assets/ecf30920451cfbcde09a.js';
import { residueState } from '/_assets/b3875d91ee440746da08.js';

// Shared helper: zero N and reset all upgrades. Residue floors set minimum levels.
function resetUpgrades() {
  gameState.N = new Decimal(0);
  for (let i = 0; i < gameState.upgrades.length; i++) {
    const upg   = gameState.upgrades[i];
    const floor = residueState.floors[i] ?? 0;
    upg.level = floor;
    if (upg.unlockCondition !== null) upg.unlocked = floor > 0 || upg.unlockCondition(gameState);
  }
}

export function buyUpgrade(id) {
  const upg = gameState.upgrades.find((u) => u.id === id);
  if (!upg) return;

  const mult = upgradeCostMult();

  if (gameState.buyMax) {
    // Buy as many levels as currently affordable (geometric series sum)
    let totalCost = new Decimal(0);
    let k = 0;
    while (k < ENGINE.BUY_MAX_CAP) {
      const next = upg.costFn(upg.level + k).mul(new Decimal(mult));
      if (gameState.N.sub(totalCost).lt(next)) break;
      totalCost = totalCost.add(next);
      k++;
    }
    if (k === 0) return;
    gameState.N = gameState.N.sub(totalCost);
    upg.level += k;
  } else {
    const cost = upg.costFn(upg.level).mul(new Decimal(mult));
    if (gameState.N.lt(cost)) return;
    gameState.N = gameState.N.sub(cost);
    upg.level++;
  }

}

export function doAxiom() {
  if (gameState.N.lt(axiomRequirement().mul(new Decimal(reqScalingMult('axiom', gameState.axiomCount))))) return;
  resetUpgrades();
  gameState.axiomCount++;
  gameState.domDirty = true;
}

export function doTheorem() {
  if (!gameState.theoremUnlocked) return;
  if (gameState.N.lt(theoremRequirement().mul(new Decimal(reqScalingMult('theorem', gameState.theoremCount))))) return;
  resetUpgrades();
  gameState.axiomCount = 0;
  gameState.theoremCount++;
  resetSeqState({ keepPts: true });
  gameState.domDirty    = true;
  gameState.seqDomDirty = true;
}
