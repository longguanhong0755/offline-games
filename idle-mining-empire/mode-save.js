(() => {
  'use strict';
  const MAIN_KEY = 'MJS-Idle-Mining-Empire-v1.0.0';
  const slotKey = window.__GAME_SAVE_SLOT__;
  if (!slotKey) return;
  const persist = () => {
    try {
      const gc = window.ig && window.ig.game && window.ig.game.gameController;
      if (gc && typeof gc.saveGameData === 'function') gc.saveGameData();
    } catch (_) {}
    const value = localStorage.getItem(MAIN_KEY);
    if (value) localStorage.setItem(slotKey, value);
  };
  setInterval(persist, 1500);
  window.addEventListener('pagehide', persist);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) persist();
  });
})();
