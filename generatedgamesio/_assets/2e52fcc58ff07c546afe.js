const GAME_CACHE = 'generated-games-modules-v2';

export function createPWA(store) {
  const state = {
    deferredPrompt: null,
    standalone:
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true,
    registration: null,
  };
  const events = new EventTarget();

  function emit(type, detail = {}) {
    events.dispatchEvent(new CustomEvent(type, { detail }));
  }

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker
      .register('./sw.js', { scope: './' })
      .then((registration) => {
        state.registration = registration;
        emit('ready', { registration });
      })
      .catch((error) => emit('error', { error }));
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    state.deferredPrompt = event;
    emit('installable');
  });

  window.addEventListener('appinstalled', () => {
    state.deferredPrompt = null;
    state.standalone = true;
    emit('installed');
  });

  async function cacheGame(game) {
    if (!('caches' in window)) throw new Error('Cache Storage не поддерживается');
    const cache = await caches.open(GAME_CACHE);
    await cache.add(new Request(game.moduleUrl, { cache: 'reload' }));
    if (navigator.storage?.persist) {
      navigator.storage.persist().catch(() => false);
    }
    const achievements = store.markInstalled(game.id);
    emit('gamecached', { game, achievements });
    return true;
  }

  return {
    events,
    state,
    cacheGame,
    async isCached(game) {
      if (!('caches' in window)) return false;
      return Boolean(await caches.match(game.moduleUrl));
    },
    async installApp() {
      if (!state.deferredPrompt) return false;
      const prompt = state.deferredPrompt;
      state.deferredPrompt = null;
      prompt.prompt();
      const choice = await prompt.userChoice;
      return choice.outcome === 'accepted';
    },
    isIOS() {
      return /iphone|ipad|ipod/i.test(navigator.userAgent);
    },
    async persistStorage() {
      if (!navigator.storage?.persist) return false;
      return navigator.storage.persist();
    },
  };
}
