(() => {
  'use strict';
  const fire = (name) => {
    const options = window.GD_OPTIONS || {};
    if (typeof options.onEvent === 'function') {
      options.onEvent({ name, data: {}, source: 'offline' });
    }
  };
  setTimeout(() => fire('SDK_READY'), 0);
  window.gdsdk = window.gdsdk || {
    preloadAd: () => Promise.resolve(true),
    showAd: () => {
      setTimeout(() => fire('SDK_GAME_START'), 0);
      return Promise.resolve();
    },
    openSteam: () => undefined
  };
})();
