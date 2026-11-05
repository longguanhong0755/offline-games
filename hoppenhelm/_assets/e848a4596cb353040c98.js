(function () {
  // window.mockLoc must exist before the game bundle runs. The JS patcher above
  // rewrites location.hostname/origin/href inside game_min.js to window.mockLoc.*,
  // but the matching definition lives in SITELOCK_BYPASS, which is only injected
  // when a game's HTML is first saved. Games saved before mockLoc was added to
  // that bypass therefore load new JS against an old HTML and die on
  // "Cannot read properties of undefined (reading 'origin')" — solitaire-golf did.
  // Defining it here fixes every such game at once, because this file is loaded
  // from the <head> of each of them, ahead of the bundle.
  // mockLoc now lives in /_stub/mockloc.js as a plain object. A Proxy over the
  // real location cannot satisfy the engine's invariants for location's
  // non-configurable methods — binding them throws "'get' on proxy: property
  // 'reload' is a read-only and non-configurable data property", not binding
  // them throws "Illegal invocation" — and either one kills the game. Keep one
  // definition, and keep it here too for pages that load this file and nothing
  // else.
  if (!window.mockLoc) {
    var _L = window.location;
    window.mockLoc = {
      href: _L.href, origin: _L.origin, protocol: _L.protocol,
      host: 'poki.com', hostname: 'poki.com', port: _L.port,
      pathname: _L.pathname, search: _L.search, hash: _L.hash,
      ancestorOrigins: { length: 1, 0: 'https://poki.com',
        item: function (i) { return i === 0 ? 'https://poki.com' : null; },
        contains: function (s) { return String(s).indexOf('poki') !== -1; } },
      assign: function () {}, replace: function () {},
      reload: function () { try { _L.reload(); } catch (e) {} },
      toString: function () { return _L.href; }
    };
  }
  var noop = function (cb) { if (typeof cb === 'function') { try { cb(); } catch (e) {} } return Promise.resolve(); };
  var base = {
    init: function () { return Promise.resolve(); },
    setDebug: noop,
    gameLoadingStart: noop,
    gameLoadingFinished: noop,
    gameLoadingProgress: noop,
    gameplayStart: noop,
    gameplayStop: noop,
    commercialBreak: noop,
    adBreak: noop,
    displayAd: noop,
    destroyAd: noop,
    rewardedBreak: function (cb) { if (typeof cb === 'function') { try { cb(true); } catch (e) {} } return Promise.resolve(true); },
    happyTime: noop,
    captureError: noop,
    customEvent: noop,
    roundStart: noop,
    roundEnd: noop,
    isAdBlocked: function () { return false; },
    shareableURL: function () { return Promise.resolve(location.href); },
    getURLParam: function (n) { /* real SDK returns '' when absent (G-Switch 4 does ''!=a&&a.length) */ try { return new URLSearchParams(location.search).get(n) || ''; } catch (e) { return ''; } }
  };
  if (!window.PokiSDK) {
    window.PokiSDK = (typeof Proxy === 'function')
      ? new Proxy(base, { get: function (t, p) { return p in t ? t[p] : noop; } })
      : base;
  }
  // Poki games also call the IAB consent APIs before they start. Missing, they
  // throw "window.__tcfapi is not a function" and the canvas never draws — that
  // exact error is in the arcade log for tribals-io.
  // Poki games build a Web Worker from a poki.com script URL. That construction
  // is cross-origin, so the browser throws "Failed to construct 'Worker'" and
  // the boot sequence stops there — 43 of the games marked broken die on this
  // one line. Swallow those and hand back a worker that answers nothing, which
  // is what the real SDK's worker does for us anyway.
  if (typeof window.Worker === 'function' && !window.__workerPatched) {
    var RealWorker = window.Worker;
    var StubWorker = function () {
      this.onmessage = null;
      this.onerror = null;
      this.postMessage = function () {};
      this.terminate = function () {};
      this.addEventListener = function () {};
      this.removeEventListener = function () {};
    };
    window.Worker = function (url, opts) {
      try {
        if (typeof url === 'string' && /poki\.com|poki-gdn\.com|game-cdn\.poki/.test(url)) {
          return new StubWorker();
        }
        return new RealWorker(url, opts);
      } catch (e) {
        return new StubWorker();
      }
    };
    window.Worker.prototype = RealWorker.prototype;
    window.__workerPatched = true;
  }
  if (typeof window.__tcfapi !== 'function') {
    window.__tcfapi = function (cmd, ver, cb) {
      if (typeof cb !== 'function') return;
      if (cmd === 'addEventListener' || cmd === 'getTCData') {
        cb({ eventStatus: 'tcloaded', gdprApplies: false, tcString: '', listenerId: 1,
             purpose: { consents: {}, legitimateInterests: {} },
             vendor: { consents: {}, legitimateInterests: {} } }, true);
      } else if (cmd === 'removeEventListener') {
        cb(true, true);
      } else {
        cb({}, true);
      }
    };
  }
  if (typeof window.__gpp !== 'function') {
    window.__gpp = function (cmd, cb) {
      if (typeof cb === 'function') cb({ gppString: '', applicableSections: [-1] }, true);
    };
  }
  if (typeof window.__uspapi !== 'function') {
    window.__uspapi = function (cmd, ver, cb) {
      if (typeof cb === 'function') cb({ version: 1, uspString: '1---' }, true);
    };
  }
  if (typeof window.PokiSDKReady === 'function') { try { window.PokiSDKReady(); } catch (e) {} }
  try { window.dispatchEvent(new Event('poki-sdk-ready')); } catch (e) {}
})();