(() => {
  'use strict';
  if (window.__GAME_MODE__ !== 'creative') return;
  const CASH = window.__OFFLINE_CASH__ || 1e100;
  let attempts = 0;
  const install = () => {
    attempts += 1;
    const g = window.ig && window.ig.game;
    const gc = g && g.gameController;
    if (!gc) {
      if (attempts < 600) setTimeout(install, 50);
      return;
    }
    if (gc.__offlineCreativeInstalled) return;
    gc.__offlineCreativeInstalled = true;

    const originalAddMoney = gc.addMoney.bind(gc);
    gc.PlayerMoney = () => CASH;
    gc.addMoney = () => {
      g.sessionData.playerMoney = CASH;
      originalAddMoney(0);
    };
    gc.checkOfflineEarning = () => {};

    const makePurchasesFree = () => {
      const db = window.ig && window.ig.businessdb;
      if (db) {
        for (const item of db.Mineshaft || []) {
          item.BaseCost = 0;
          item.CostExp = 0;
          item.BarrierPrice = 0;
          item.ManagerPrice = 0;
        }
        for (const item of [db.Elevator, db.Warehouse]) {
          if (!item) continue;
          item.BaseCost = 0;
          item.CostExp = 0;
          item.BarrierPrice = 0;
          item.ManagerPrice = 0;
        }
      }
      const zeroUpgradeCosts = (value) => {
        if (Array.isArray(value)) {
          for (const child of value) zeroUpgradeCosts(child);
        } else if (value && typeof value === 'object' && Object.prototype.hasOwnProperty.call(value, 'Cost')) {
          value.Cost = 0;
          value.CostExp = 0;
        }
      };
      if (window.ig && window.ig.upgradedb) zeroUpgradeCosts(window.ig.upgradedb);
      const bm = gc.businessManager;
      if (bm) {
        for (const item of bm.mineshaft || []) {
          zeroUpgradeCosts(item.upgradeData);
          item.price = 0;
          if (item.buyButton && item.buyButton.setPrice) item.buyButton.setPrice('0', 1);
        }
        for (const item of [bm.elevator, bm.warehouse]) {
          if (!item) continue;
          zeroUpgradeCosts(item.upgradeData);
        }
        if (typeof bm.renderButtons === 'function') bm.renderButtons();
        const activeIndex = g.sessionData.activeShaft;
        const active = bm.mineshaft && bm.mineshaft[activeIndex];
        if (active && typeof active.showBuyButton === 'function') active.showBuyButton();
      }
    };
    if (gc.utility) {
      gc.utility.getPriceUpgrade = () => 0;
      gc.utility.getMaxUpgrade = () => 100;
    }
    makePurchasesFree();
    [250, 1000, 2500, 5000].forEach((delay) => setTimeout(makePurchasesFree, delay));

    const patchCashDisplay = () => {
      const ui = gc.gameplayUI;
      if (!ui) return false;
      ui.updateCash = function () {
        this.currentIdle = '∞';
        this.currentCash = '∞';
        this.idleActive = true;
      };
      ui.updateCash();
      return true;
    };
    if (!patchCashDisplay()) {
      const uiTimer = setInterval(() => {
        if (patchCashDisplay()) clearInterval(uiTimer);
      }, 250);
      window.addEventListener('pagehide', () => clearInterval(uiTimer), { once: true });
    }

    if (window.ig && window.ig.gd) {
      window.ig.gd.show = (callback) => { if (typeof callback === 'function') callback(); };
    }
    window.__CREATIVE_MODE__ = {
      enabled: true,
      cash: CASH,
      freePurchases: true,
      makePurchasesFree
    };
  };
  install();
})();
