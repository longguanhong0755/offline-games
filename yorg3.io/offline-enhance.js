(() => {
  'use strict';

  let app = null;
  let startingCreative = false;

  const ALL_PERK_IDS = Object.freeze([
    101, 102, 103,
    201, 202,
    301, 302, 303,
    501, 502, 503, 504, 505, 506
  ]);

  const ALL_ACHIEVEMENT_IDS = Object.freeze([
    26, 1, 2, 3, 4, 5, 41, 6, 7, 8, 9, 10, 27, 31, 32, 36,
    11, 12, 13, 14, 15, 28, 33, 40, 35, 16, 17, 18, 19, 20,
    29, 34, 37, 39, 21, 22, 24, 25, 30, 38
  ]);

  const PERK_INTERNAL_ID_BY_STRING = Object.freeze({
    transporter_collect_graves: 101,
    allow_setting_priority: 102,
    advanced_synchronization: 103,
    map_desert: 201,
    map_ice: 202,
    difficulty_medium: 301,
    difficulty_hard: 302,
    difficulty_sandbox: 303,
    skin_relaxed_basic_zombie: 501,
    skin_present_exploding_zombie: 502,
    skin_robinhood_archer_zombie: 503,
    skin_supporter_playerbase: 504,
    skin_golem_axe_zombie: 505,
    skin_hulk_armored_axe_zombie: 506,
    no_ads: 999
  });

  const safe = (fn, fallback = null) => {
    try { return fn(); } catch (_) { return fallback; }
  };

  function getApp() {
    const candidate = window.__YORG_APP__;
    if (candidate && candidate.stateMgr && candidate.savegameMgr) app = candidate;
    return app;
  }

  function getRegistries() {
    return getApp() && app.modManager && app.modManager.modApi &&
      app.modManager.modApi.registries;
  }

  function getCurrentRoot() {
    const state = safe(() => app.stateMgr.getCurrentState());
    return state && state.core && state.core.root || null;
  }

  function isCreativeRoot(root) {
    return !!(root && root.difficulty && root.difficulty.getIsSandbox &&
      root.difficulty.getIsSandbox());
  }

  function forceFullUnlocks(save = false) {
    const profile = app && app.userProfile;
    if (!profile) return Promise.resolve();

    safe(() => profile.setUnlockedPerks(ALL_PERK_IDS.slice()));
    safe(() => profile.setUnlockedAchievements(ALL_ACHIEVEMENT_IDS.slice()));

    if (!save || typeof profile.save !== 'function') return Promise.resolve();
    return safe(() => profile.save(), Promise.resolve());
  }

  function patchProfileApi() {
    const profile = app.userProfile;
    const api = app.api;
    if (!profile || !api) return;

    profile.isPerkUnlockedByStringId = () => true;
    profile.isPerkUnlockedByInternalId = () => true;
    profile.getUnlockedPerks = () => ALL_PERK_IDS.slice();
    profile.getUnlockedAchievements = () => ALL_ACHIEVEMENT_IDS.slice();

    if (typeof profile.setPlayerName === 'function') {
      safe(() => profile.setPlayerName('离线玩家'));
    }

    if (!api.__offlineProfilePatched && typeof api.fetchProfile === 'function') {
      const originalFetchProfile = api.fetchProfile.bind(api);
      api.fetchProfile = (...args) => {
        const enabledBeforeFetch = safe(() => {
          const enabled = profile.getEnabledPerks();
          return Array.isArray(enabled) ? enabled.slice() : [];
        }, []);

        return originalFetchProfile(...args).then(result => {
          // The offline API response does not contain unlocked data. Restore the
          // local profile and preserve the user's own skin switch choices.
          safe(() => profile.setEnabledPerks(enabledBeforeFetch));
          return forceFullUnlocks(true).then(() => result);
        });
      };
      api.__offlineProfilePatched = true;
    }

    if (!api.__offlinePerkActionsPatched) {
      api.purchasePerk = perkId => {
        const internalId = PERK_INTERNAL_ID_BY_STRING[perkId];
        if (!internalId) return Promise.reject(new Error('Unknown offline perk: ' + perkId));
        safe(() => profile.setUnlockedPerks(ALL_PERK_IDS.slice()));
        return safe(() => profile.save(), Promise.resolve());
      };

      api.togglePerkEnabled = (perkId, enabled = true) => {
        const internalId = PERK_INTERNAL_ID_BY_STRING[perkId];
        if (!internalId) return Promise.reject(new Error('Unknown offline perk: ' + perkId));

        const enabledPerks = new Set(safe(() => {
          const values = profile.getEnabledPerks();
          return Array.isArray(values) ? values : [];
        }, []));

        if (enabled) enabledPerks.add(internalId);
        else enabledPerks.delete(internalId);

        profile.setEnabledPerks(Array.from(enabledPerks));
        return safe(() => profile.save(), Promise.resolve());
      };

      api.__offlinePerkActionsPatched = true;
    }

    forceFullUnlocks(true);
  }

  function patchOfflineGame() {
    if (!getApp() || app.__offlineEnhanced) return;
    app.__offlineEnhanced = true;

    patchProfileApi();

    const registries = getRegistries();
    const sandbox = registries && registries.difficulty &&
      registries.difficulty.findById('sandbox');
    if (sandbox) {
      sandbox.getTitle = () => '创造模式';
      sandbox.getDesc = () => '红色水晶与蓝色精华无限、瞬间建造、全部内容解锁。';
      sandbox.getPerkId = () => null;
      sandbox.getStartingCrystals = () => Number.MAX_VALUE;
      sandbox.getStartingHeads = () => Number.MAX_VALUE;
      sandbox.getBuildDurationMultiplier = () => 0;
      sandbox.getHasBlueprints = () => false;
    }
  }

  function startCreativeMode(event) {
    if (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    if (startingCreative) return;
    patchOfflineGame();

    const registries = getRegistries();
    if (!app || !registries) return;

    const layout = registries.mapLayout.findById('tutorial');
    const difficulty = registries.difficulty.findById('sandbox');
    if (!layout || !difficulty) {
      console.error('[offline] Creative mode is unavailable.');
      return;
    }

    startingCreative = true;
    try {
      const savegame = app.savegameMgr.createNewSavegame(layout, difficulty);
      app.stateMgr.moveToState('RunningGameState', { savegame });
    } catch (error) {
      console.error('[offline] Failed to start creative mode:', error);
    } finally {
      window.setTimeout(() => { startingCreative = false; }, 800);
    }
  }

  function makeCreativeMainButton() {
    const buttons = document.querySelector('#state_MainMenuState .mainButtons');
    if (!buttons || buttons.querySelector('.offlineCreativeButton')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'singleplayer offlineCreativeButton';
    button.innerHTML = '<i aria-hidden="true"></i><span>创造模式</span>' +
      '<strong class="offlineCreativeHint">双资源无限 · 瞬建 · 全解锁</strong>';

    const singleplayer = buttons.querySelector('.singleplayer');
    if (singleplayer && singleplayer.nextSibling) buttons.insertBefore(button, singleplayer.nextSibling);
    else buttons.appendChild(button);
  }

  function makeOverviewCreativeButton() {
    const actions = document.querySelector('#state_SingleplayerOverviewState .actions');
    if (!actions || actions.querySelector('.offlineCreativeNew')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'newGame offlineCreativeNew';
    button.innerHTML = '<i aria-hidden="true"></i><strong>创造模式</strong>';
    actions.insertBefore(button, actions.querySelector('.perks') || null);
  }

  function fillInfiniteResources(root) {
    const playerBase = safe(() => root.logic.getLocalPlayerBase());
    const storage = playerBase && playerBase.components && playerBase.components.Storage;
    if (!storage || !storage.current || !storage.maximum) return;

    for (const resource of ['crystal', 'head']) {
      const maximum = storage.maximum[resource];
      if (Number.isFinite(maximum) && maximum > 0) {
        storage.current[resource] = maximum;
      }
    }
  }

  function unlockEntityUpgrades(entity) {
    const upgrades = entity && entity.components && entity.components.Upgrades;
    if (!upgrades || !upgrades.upgradesById || !Array.isArray(upgrades.unlockedUpgradeIds)) return;

    for (const upgradeId of Object.keys(upgrades.upgradesById)) {
      if (!upgrades.unlockedUpgradeIds.includes(upgradeId)) {
        upgrades.unlockedUpgradeIds.push(upgradeId);
      }
    }
  }

  function unlockAllBuildingUpgrades(root) {
    const entities = safe(() => root.entityMgr.entities, []);
    if (!Array.isArray(entities)) return;
    for (const entity of entities) unlockEntityUpgrades(entity);
  }

  function patchCreativeRoot(root) {
    if (!root) return;
    fillInfiniteResources(root);
    unlockAllBuildingUpgrades(root);

    if (!root.__offlineCreativePatched) {
      root.__offlineCreativePatched = true;
      safe(() => root.signals.structurePlaced.add(entity => {
        if (!isCreativeRoot(root)) return;
        fillInfiniteResources(root);
        unlockEntityUpgrades(entity);
      }));
    }
  }

  function patchOfflineTexts(stateId) {
    if (stateId === 'state_PerksState') {
      const description = document.querySelector('#state_PerksState .perksDesc');
      const localText = '离线版已解锁全部皮肤、地图与难度。皮肤可在这里自由启用或关闭。';
      if (description && description.textContent !== localText) {
        description.textContent = localText;
      }
    }
  }

  function refreshUi() {
    patchOfflineGame();

    const stateId = document.body && document.body.id || '';
    if (stateId === 'state_MainMenuState') {
      const label = document.querySelector('#state_MainMenuState .singleplayer > span');
      if (label && label.textContent !== '生存模式') label.textContent = '生存模式';
      makeCreativeMainButton();
    } else if (stateId === 'state_SingleplayerOverviewState') {
      makeOverviewCreativeButton();
    }

    const root = getCurrentRoot();
    if (isCreativeRoot(root)) patchCreativeRoot(root);
    patchOfflineTexts(stateId);
  }

  document.addEventListener('pointerdown', event => {
    const target = event.target;
    if (target && target.closest &&
        target.closest('.offlineCreativeButton, .offlineCreativeNew')) {
      event.stopImmediatePropagation();
    }
  }, true);

  document.addEventListener('click', event => {
    const target = event.target;
    if (!target || !target.closest) return;

    const start = target.closest('.offlineCreativeButton, .offlineCreativeNew');
    if (start) startCreativeMode(event);
  }, true);

  const observer = new MutationObserver(() => {
    window.clearTimeout(observer._offlineTimer);
    observer._offlineTimer = window.setTimeout(refreshUi, 30);
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });

  window.setInterval(refreshUi, 500);
  window.addEventListener('load', refreshUi, { once: true });
  refreshUi();
})();