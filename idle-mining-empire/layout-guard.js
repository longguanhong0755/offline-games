(() => {
  'use strict';
  const MIN_ASPECT = 640 / 700;
  const root = document.documentElement;
  let stage = { width: 640, height: 700 };

  const measure = () => {
    const vw = Math.max(1, root.clientWidth || window.innerWidth || 1);
    const vh = Math.max(1, root.clientHeight || window.innerHeight || 1);
    let width = vw;
    let height = vh;
    // The original game cannot compose a viewport narrower than 640:700.
    // Letterbox portrait windows instead of squeezing the game horizontally.
    if (vw / vh < MIN_ASPECT) {
      height = Math.max(1, Math.round(vw / MIN_ASPECT));
    }
    stage = { width: Math.round(width), height: Math.round(height) };
    root.style.setProperty('--offline-stage-width', stage.width + 'px');
    root.style.setProperty('--offline-stage-height', stage.height + 'px');
    return stage;
  };

  measure();
  try {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      get: () => stage.width
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      get: () => stage.height
    });
  } catch (_) {
    // CSS still preserves the frame when the browser disallows overriding these getters.
  }

  let timer = 0;
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      measure();
      window.dispatchEvent(new Event('offline-layout-ready'));
    }, 30);
  }, { passive: true });
})();
