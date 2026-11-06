// production.js — Computes total N/s production each frame.

import { gameState, totalAxiomMult, totalTheoremMult, totalSigmaMult, totalThm4Mult, epochState, ax12Boost } from '/_assets/d2c7ede9925029d5b096.js';
import { totalSeqMult } from '/_assets/39bc0725aa17e2322457.js';
import { iterMult } from '/_assets/9d304deed03c7cf47269.js';
import { epoch1IterBoost } from '/_assets/94052ebcea34c1f44b1d.js';
import { orbitNBoost, orbitSeqBoost } from '/_assets/5347d29d71d559e3b485.js';
import { AXIOM, THEOREM, SIGMA, EPOCH, EPOCH4, EPOCH5, ITER } from '/_assets/c24c79b6b7c44a0481ad.js';
import { scaledAmt } from '/_assets/ecf30920451cfbcde09a.js';
import { primeNBoost, commonPrimeBonus, primeMilestoneNBoost } from '/_assets/bd2df72de6613d280614.js';

export function computeProduction() {
  const [successor, addition, multiplication, exponentiation] = gameState.upgrades;

  // ── Successor: flat +N/s (덧셈) ────────────────────────────────────────────
  const bonusBase = gameState.axiomCount >= AXIOM.RECURSION_AX
    ? AXIOM.RECURSION_PER_AXIOM * gameState.axiomCount
    : 0;
  const effSucc = scaledAmt('successor', successor.level);
  let base = new Decimal(1 + bonusBase).add(successor.effectFlat(effSucc));

  // ── Upgrade chain: A^(M^E) ────────────────────────────────────────────────
  const effAdd  = scaledAmt('addition',        addition.level);
  const effMul  = scaledAmt('multiplication',  multiplication.level);
  const effExpn = exponentiation ? scaledAmt('exponentiation', exponentiation.level) : 0;

  const A = addition.level > 0 ? addition.effectBase(effAdd) : 1;
  const M = multiplication.level > 0 ? multiplication.effectExp(effMul) : 1;
  const E = (exponentiation && exponentiation.level > 0)
    ? exponentiation.effectExpExp(effExpn)
    : 1;

  if (addition.level > 0) {
    const totalExp = Math.pow(M, E);
    base = base.mul(new Decimal(A).pow(totalExp));
  }

  // ── Prestige multipliers (applied after upgrade chain) ────────────────────

  // Axiom permanent multiplier
  if (gameState.axiomCount > 0) {
    base = base.mul(new Decimal(totalAxiomMult()));
  }

  // Theorem multiplier
  if (gameState.theoremCount > 0) {
    base = base.mul(new Decimal(totalTheoremMult()));
  }

  // Sigma milestone: scales with total upgrade levels
  if (gameState.theoremCount >= SIGMA.UNLOCK_THM) {
    base = base.mul(new Decimal(totalSigmaMult()));
  }

  // Theorem milestone 4: N/s × theorems^0.2
  if (gameState.theoremCount >= THEOREM.MILESTONE4_REQ) {
    base = base.mul(new Decimal(totalThm4Mult()));
  }

  // Sequence multiplier (with optional orbit resonance boost)
  if (gameState.sequencesUnlocked) {
    const sMult     = totalSeqMult();
    const seqBoost  = orbitSeqBoost();
    const effective = sMult * seqBoost;
    if (effective > 1) base = base.mul(new Decimal(effective));
  }

  // Iteration multiplier
  const iMult = iterMult();
  if (iMult > 1) base = base.mul(new Decimal(iMult));

  // ax.12 log boost: 1 + log10(axioms+1) * 0.15
  if (gameState.axiomCount >= 12) {
    base = base.mul(new Decimal(ax12Boost()));
  }

  // ax.20 log boost: log10(axioms+1)^k
  if (gameState.axiomCount >= ITER.UNLOCK_AT_AX) {
    const logBoost = Math.pow(Math.log10(gameState.axiomCount + 1), AXIOM.AX20_LOG_EXP);
    if (logBoost > 1) base = base.mul(new Decimal(logBoost));
  }

  // Orbit N amplifier: production × τ^k
  const nBoost = orbitNBoost();
  if (nBoost > 1) base = base.mul(new Decimal(nBoost));

  // Primes: N Boost upgrade + common prime collection bonus
  const pNBoost = primeNBoost();
  if (pNBoost > 1) base = base.mul(new Decimal(pNBoost));
  const pCommon = commonPrimeBonus();
  if (pCommon > 1) base = base.mul(new Decimal(pCommon));
  const pMilestone = primeMilestoneNBoost();
  if (pMilestone > 1) base = base.mul(new Decimal(pMilestone));

  // Epoch 1 boosts (outermost — applied last)
  if (epochState.epoch1) {
    base = base.mul(new Decimal(EPOCH.E1_FLAT_BOOST));
    const iterBoost = epoch1IterBoost();
    if (iterBoost > 1) base = base.mul(new Decimal(iterBoost));
  }

  // Epoch 2 N boost
  if (epochState.epoch2) {
    base = base.mul(new Decimal(EPOCH.E2_N_BOOST));
  }

  // Epoch 4: epoch count boosts N
  if (epochState.epoch4) {
    const epochCount = [epochState.epoch1, epochState.epoch2, epochState.epoch3, epochState.epoch4]
      .filter(Boolean).length;
    base = base.mul(new Decimal(Math.pow(epochCount + 1, EPOCH4.EPOCH_N_K)));
  }

  if (epochState.epoch5) {
    base = base.mul(new Decimal(EPOCH5.N_BOOST));
  }

  return base;
}
