// save.js — Serialize / deserialize game state to localStorage, plus export/import.

import { gameState, iterState, epochState, lemmaState } from '/_assets/d2c7ede9925029d5b096.js';
import { seqState } from '/_assets/39bc0725aa17e2322457.js';
import { sigmaState } from '/_assets/aa5dc9827efa02a28524.js';
import { orbitState } from '/_assets/5347d29d71d559e3b485.js';
import { primeState } from '/_assets/bd2df72de6613d280614.js';
import { residueState } from '/_assets/b3875d91ee440746da08.js';

const SAVE_KEY = 'axiom_save_v1';

export function showAutosaveToast() {
  const el = document.getElementById('autosave-toast');
  if (!el) return;
  el.classList.remove('autosave-active');
  void el.offsetWidth;
  el.classList.add('autosave-active');
}

export function exportSave() {
  save();
  const raw = localStorage.getItem(SAVE_KEY);
  return raw ? btoa(raw) : '';
}

export function importSave(encoded) {
  try {
    const raw = atob(encoded.trim());
    JSON.parse(raw);
    localStorage.setItem(SAVE_KEY, raw);
    location.reload();
  } catch (_) {
    return false;
  }
  return true;
}

export function save() {
  const data = {
    N: gameState.N.toString(),
    axiomCount: gameState.axiomCount,
    theoremCount: gameState.theoremCount,
    theoremUnlocked: gameState.theoremUnlocked,
    buyMax: gameState.buyMax,
    upgrades: gameState.upgrades.map((u) => ({
      id: u.id,
      level: u.level,
      unlocked: u.unlocked,
    })),
    sequencesUnlocked: gameState.sequencesUnlocked,
    seqActiveId: seqState.activeId,
    seqSlots: seqState.slots,
    seqVars: seqState.vars,
    seqReservePts: seqState.reservePts,
    offlineProduction:  gameState.offlineProduction,
    scientificNotation: gameState.scientificNotation,
    confirmResets:      gameState.confirmResets,
    totalPlaytime:      gameState.totalPlaytime,
    autosaveInterval:   gameState.autosaveInterval,
    seqRefPts:   seqState.refPts,
    seqRefCount: seqState.refCount,
    seqGeoBaseScalingLevel:    seqState.geoUpgrades.baseScaling.level,
    seqGeoBaseScalingUnlocked: seqState.geoUpgrades.baseScaling.unlocked,
    iterCount:         iterState.count,
    iterationUnlocked: gameState.iterationUnlocked,
    sigmaFreq:         sigmaState.freq,
    sigmaSlots:        sigmaState.slots,
    sigmaSlotEnabled:  sigmaState.slotEnabled.slice(),
    sigmaAmpLevel:     sigmaState.ampLevel,
    epoch1:            epochState.epoch1,
    epoch2:            epochState.epoch2,
    epoch3:            epochState.epoch3,
    epoch4:            epochState.epoch4,
    epoch5:            epochState.epoch5,
    lemmaLevels:       lemmaState.levels.slice(),
    orbitTau:          orbitState.tau,
    orbitLayers:       orbitState.layers,
    orbitSpeedLevels:  orbitState.speedLevels,
    orbitGainLevels:   orbitState.gainLevels,
    orbitNBoostLevel:   orbitState.nBoostLevel,
    orbitSeqBoostLevel: orbitState.seqBoostLevel,
    orbitCycleMultLevel: orbitState.cycleMultLevel,
    orbitAngles:        orbitState.angles.slice(),
    primesUnlocked:    gameState.primesUnlocked,
    primesHeld:        primeState.held.slice(),
    primesCurrentMax:  primeState.currentMax,
    primesExpandCount: primeState.expandCount,
    primesUpgrades:    { ...primeState.upgrades },
    residueRho:          residueState.rho,
    residueFloors:       residueState.floors.slice(),
    residueHasConverted: residueState.hasConverted,
    timestamp: Date.now(),
  };
  localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  gameState.lastSave = Date.now();
}

export function load() {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    if (data.timestamp !== undefined)       gameState.lastSave        = data.timestamp;
    if (data.N !== undefined)               gameState.N               = new Decimal(data.N);
    if (data.axiomCount !== undefined)      gameState.axiomCount      = data.axiomCount;
    if (data.theoremCount !== undefined)    gameState.theoremCount    = data.theoremCount;
    if (data.theoremUnlocked !== undefined) gameState.theoremUnlocked = data.theoremUnlocked;
    if (data.buyMax !== undefined)          gameState.buyMax          = data.buyMax;

    if (Array.isArray(data.upgrades)) {
      for (const saved of data.upgrades) {
        const upg = gameState.upgrades.find((u) => u.id === saved.id);
        if (!upg) continue;
        upg.level = saved.level ?? 0;
        if (saved.unlocked !== undefined) upg.unlocked = saved.unlocked;
      }
    }

    for (const upg of gameState.upgrades) {
      if (!upg.unlocked && upg.unlockCondition?.(gameState)) upg.unlocked = true;
    }

    if (data.sequencesUnlocked !== undefined) {
      gameState.sequencesUnlocked = data.sequencesUnlocked;
      if (gameState.sequencesUnlocked) {
        const seqTab = document.getElementById('tab-sequences');
        if (seqTab) seqTab.style.display = '';
      }
    }

    if (data.seqActiveId !== undefined) seqState.activeId = data.seqActiveId;
    if (data.seqReservePts !== undefined) seqState.reservePts = data.seqReservePts;
    if (data.offlineProduction  !== undefined) gameState.offlineProduction  = data.offlineProduction;
    if (data.scientificNotation !== undefined) gameState.scientificNotation = data.scientificNotation;
    if (data.confirmResets      !== undefined) gameState.confirmResets      = data.confirmResets;
    if (data.totalPlaytime      !== undefined) gameState.totalPlaytime      = data.totalPlaytime;
    if (data.autosaveInterval   !== undefined) gameState.autosaveInterval   = data.autosaveInterval;
    else if (data.seqBankPts !== undefined) seqState.reservePts = data.seqBankPts; // legacy
    if (data.seqRefPts   !== undefined) seqState.refPts   = data.seqRefPts;
    if (data.seqRefCount !== undefined) seqState.refCount = data.seqRefCount;
    if (data.seqGeoBaseScalingLevel    !== undefined) seqState.geoUpgrades.baseScaling.level    = data.seqGeoBaseScalingLevel;
    if (data.seqGeoBaseScalingUnlocked !== undefined) seqState.geoUpgrades.baseScaling.unlocked = data.seqGeoBaseScalingUnlocked;
    if (data.iterCount   !== undefined) iterState.count  = data.iterCount;
    if (data.sigmaFreq  !== undefined) sigmaState.freq  = data.sigmaFreq;
    if (data.sigmaAmpLevel !== undefined) sigmaState.ampLevel = data.sigmaAmpLevel;
    if (data.sigmaSlots !== undefined) {
      sigmaState.slots = data.sigmaSlots;
      const targetSlots = epochState.epoch3 ? 4 : 3;
      while (sigmaState.slots.length < targetSlots) sigmaState.slots.push(null);
    }
    if (Array.isArray(data.sigmaSlotEnabled)) {
      sigmaState.slotEnabled = data.sigmaSlotEnabled.slice();
      while (sigmaState.slotEnabled.length < sigmaState.slots.length) sigmaState.slotEnabled.push(true);
    }
    if (data.epoch1 !== undefined) epochState.epoch1 = data.epoch1;
    if (data.epoch2 !== undefined) epochState.epoch2 = data.epoch2;
    if (data.epoch3 !== undefined) epochState.epoch3 = data.epoch3;
    if (data.epoch4 !== undefined) epochState.epoch4 = data.epoch4;
    if (data.epoch5 !== undefined) epochState.epoch5 = data.epoch5;
    if (Array.isArray(data.lemmaLevels)) {
      const levels = data.lemmaLevels.slice();
      if (levels.length === 4) levels.splice(3, 0, 0); // migrate: insert Prime Theory slot at index 3
      if (levels.length === 5) levels.push(0);          // migrate: add Residue slot at index 5
      for (let i = 0; i < lemmaState.levels.length; i++) {
        if (levels[i] !== undefined) lemmaState.levels[i] = levels[i];
      }
    }
    if (data.residueRho          !== undefined) residueState.rho          = data.residueRho;
    if (data.residueHasConverted !== undefined) residueState.hasConverted = data.residueHasConverted;
    if (Array.isArray(data.residueFloors)) {
      for (let i = 0; i < residueState.floors.length; i++) {
        if (data.residueFloors[i] !== undefined) residueState.floors[i] = data.residueFloors[i];
      }
    }

    if (data.orbitTau          !== undefined) orbitState.tau          = data.orbitTau;
    if (data.orbitLayers       !== undefined) {
      orbitState.layers = data.orbitLayers;
      orbitState.angles = data.orbitAngles?.length === data.orbitLayers
        ? data.orbitAngles
        : new Array(orbitState.layers).fill(0);
    }
    if (data.orbitSpeedLevels  !== undefined) orbitState.speedLevels  = data.orbitSpeedLevels;
    if (data.orbitGainLevels   !== undefined) orbitState.gainLevels   = data.orbitGainLevels;
    if (data.orbitNBoostLevel    !== undefined) orbitState.nBoostLevel    = data.orbitNBoostLevel;
    if (data.orbitSeqBoostLevel  !== undefined) orbitState.seqBoostLevel  = data.orbitSeqBoostLevel;
    if (data.orbitCycleMultLevel !== undefined) orbitState.cycleMultLevel = data.orbitCycleMultLevel;

    if (data.primesUnlocked !== undefined) {
      gameState.primesUnlocked = data.primesUnlocked;
      if (gameState.primesUnlocked) {
        const tab = document.getElementById('tab-primes');
        if (tab) tab.style.display = '';
      }
    }
    if (Array.isArray(data.primesHeld)) primeState.held = data.primesHeld.slice();
    if (data.primesCurrentMax  !== undefined) primeState.currentMax  = data.primesCurrentMax;
    if (data.primesExpandCount !== undefined) primeState.expandCount = data.primesExpandCount;
    // legacy: old zone saves map zone index → approximate max
    if (data.primesZone !== undefined && data.primesCurrentMax === undefined) {
      const legacyMaxes = [100, 1000, 10000, 100000];
      primeState.currentMax  = legacyMaxes[Math.min(data.primesZone, legacyMaxes.length - 1)];
      primeState.expandCount = data.primesZonesCompleted ?? data.primesZone;
    }
    if (data.primesUpgrades && typeof data.primesUpgrades === 'object') {
      for (const k of Object.keys(primeState.upgrades)) {
        if (data.primesUpgrades[k] !== undefined) primeState.upgrades[k] = data.primesUpgrades[k];
      }
    }

    if (epochState.epoch2) {
      const orbitTab = document.querySelector('[data-iter-subtab="orbit"]');
      if (orbitTab) orbitTab.style.display = '';
    }

    if (epochState.epoch5) {
      const lemmaTab = document.querySelector('[data-iter-subtab="lemma"]');
      if (lemmaTab) lemmaTab.style.display = '';
    }

    if ((data.lemmaLevels?.[5] ?? 0) >= 1) {
      const residueTab = document.querySelector('[data-iter-subtab="residue"]');
      if (residueTab) residueTab.style.display = '';
    }

    if (data.iterationUnlocked !== undefined) {
      gameState.iterationUnlocked = data.iterationUnlocked;
      if (gameState.iterationUnlocked) {
        const iterTab = document.getElementById('tab-iteration');
        if (iterTab) iterTab.style.display = '';
      }
    }

    if (data.seqSlots && typeof data.seqSlots === 'object') {
      for (const id of Object.keys(seqState.slots)) {
        if (data.seqSlots[id]) {
          seqState.slots[id] = {
            terms:       data.seqSlots[id].terms       ?? 0,
            completions: data.seqSlots[id].completions ?? 0,
          };
        }
      }
    }

    if (data.seqVars && typeof data.seqVars === 'object') {
      for (const id of Object.keys(seqState.vars)) {
        if (data.seqVars[id]) {
          for (const k of Object.keys(seqState.vars[id])) {
            if (data.seqVars[id][k] !== undefined) seqState.vars[id][k] = data.seqVars[id][k];
          }
        }
      }
    }

    // Legacy compat: old single-field saves
    if (data.seqArithmeticTerms !== undefined)
      seqState.slots.arithmetic.terms = data.seqArithmeticTerms;
    if (data.seqArithmeticCompletions !== undefined)
      seqState.slots.arithmetic.completions = data.seqArithmeticCompletions;
    if (data.seqAllocPts !== undefined)
      seqState.vars.arithmetic.a = data.seqAllocPts; // migrate old alloc to 'a'

  } catch (e) {
    console.warn('[axiom] Failed to load save:', e);
  }
}
