(() => {
  'use strict';
  const MAIN_KEY = 'MJS-Idle-Mining-Empire-v1.0.0';
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode') === 'creative' ? 'creative' : 'normal';
  const slotKey = mode === 'creative'
    ? 'YORG_IDLE_SAVE_CREATIVE_V2'
    : 'YORG_IDLE_SAVE_NORMAL';
  const CASH = 1e100;

  const read = (key) => {
    try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (_) { return null; }
  };
  const blankSlot = () => ({
    level: 0,
    managerExist: false,
    managerLevel: 0,
    barrierRemoved: false,
    currentEarning: 0,
    managerSkillActive: false,
    managerSkillTimer: 0,
    speedBooster: 0
  });
  const normalSave = () => ({
    sound: true,
    music: true,
    investor: 0,
    lifetimeEarning: 0,
    startingLifetimeEarning: 0,
    playerMoney: 10,
    activeShaft: 0,
    lastTimeStamp: Date.now(),
    tutorialState: 0,
    tutorialActive: true,
    investorTutorial: false,
    investorPopupTutorial: false,
    barrierTutorial: false,
    Mineshaft: Array.from({ length: 9 }, blankSlot),
    Elevator: Object.assign(blankSlot(), { level: 1 }),
    Warehouse: Object.assign(blankSlot(), { level: 1 })
  });
  const creativeSave = (base = {}) => Object.assign(normalSave(), base, {
    playerMoney: CASH,
    lastTimeStamp: Date.now()
  });
  const looksCreative = (state) => !!state &&
    (state.activeShaft === 9 || Number(state.playerMoney) >= 1e20);

  let state = read(slotKey);
  if (mode === 'creative') {
    // The previous creative format started everything at max level. Reset only
    // that obsolete creative save so the corrected mode starts from scratch.
    localStorage.removeItem('YORG_IDLE_SAVE_CREATIVE');
    state = creativeSave(state || {});
  } else {
    if (!state) {
      const previousMain = read(MAIN_KEY);
      state = previousMain && !looksCreative(previousMain) ? previousMain : normalSave();
    }
  }

  localStorage.setItem(MAIN_KEY, JSON.stringify(state));
  window.__GAME_MODE__ = mode;
  window.__GAME_SAVE_SLOT__ = slotKey;
  window.__OFFLINE_CASH__ = CASH;
})();
