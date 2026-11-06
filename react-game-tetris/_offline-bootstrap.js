(() => {
  "use strict";
  const RUNTIME_MAP = {"https://avin.github.io/react-game-tetris/static/css/1.2f25b985.chunk.css":"_assets/7c1d37d3be34fc1791d6.css","/react-game-tetris/static/css/1.2f25b985.chunk.css":"_assets/7c1d37d3be34fc1791d6.css","/static/css/1.2f25b985.chunk.css":"_assets/7c1d37d3be34fc1791d6.css","/css/1.2f25b985.chunk.css":"_assets/7c1d37d3be34fc1791d6.css","/1.2f25b985.chunk.css":"_assets/7c1d37d3be34fc1791d6.css","https://avin.github.io/react-game-tetris/static/css/main.6192a234.chunk.css":"_assets/6a2c42d5a33e35775786.css","/react-game-tetris/static/css/main.6192a234.chunk.css":"_assets/6a2c42d5a33e35775786.css","/static/css/main.6192a234.chunk.css":"_assets/6a2c42d5a33e35775786.css","/css/main.6192a234.chunk.css":"_assets/6a2c42d5a33e35775786.css","/main.6192a234.chunk.css":"_assets/6a2c42d5a33e35775786.css","https://avin.github.io/react-game-tetris/static/js/keypress-2.1.5.min.js":"_assets/2ddef5bb6841bde56282.js","/react-game-tetris/static/js/keypress-2.1.5.min.js":"_assets/2ddef5bb6841bde56282.js","/static/js/keypress-2.1.5.min.js":"_assets/2ddef5bb6841bde56282.js","/js/keypress-2.1.5.min.js":"_assets/2ddef5bb6841bde56282.js","/keypress-2.1.5.min.js":"_assets/2ddef5bb6841bde56282.js","https://fonts.googleapis.com/css?family=Passero+One":"_assets/9d581fc74585e7213d4f.css","/css":"_assets/9d581fc74585e7213d4f.css","/css?family=Passero+One":"_assets/9d581fc74585e7213d4f.css","https://fonts.googleapis.com/css":"_assets/9d581fc74585e7213d4f.css","https://avin.github.io/react-game-tetris/static/js/1.e5b89ec9.chunk.js":"_assets/547714012f7cead61f7b.js","/react-game-tetris/static/js/1.e5b89ec9.chunk.js":"_assets/547714012f7cead61f7b.js","/static/js/1.e5b89ec9.chunk.js":"_assets/547714012f7cead61f7b.js","/js/1.e5b89ec9.chunk.js":"_assets/547714012f7cead61f7b.js","/1.e5b89ec9.chunk.js":"_assets/547714012f7cead61f7b.js","https://avin.github.io/react-game-tetris/static/js/main.42ed072c.chunk.js":"_assets/fde18b234e8288e8fbc1.js","/react-game-tetris/static/js/main.42ed072c.chunk.js":"_assets/fde18b234e8288e8fbc1.js","/static/js/main.42ed072c.chunk.js":"_assets/fde18b234e8288e8fbc1.js","/js/main.42ed072c.chunk.js":"_assets/fde18b234e8288e8fbc1.js","/main.42ed072c.chunk.js":"_assets/fde18b234e8288e8fbc1.js","https://fonts.gstatic.com/s/passeroone/v28/JTUTjIko8DOq5FeaeEAjgH5G7gs.woff2":"_assets/e76d2536f57b35dcbffd.woff2","/s/passeroone/v28/JTUTjIko8DOq5FeaeEAjgH5G7gs.woff2":"_assets/e76d2536f57b35dcbffd.woff2","/passeroone/v28/JTUTjIko8DOq5FeaeEAjgH5G7gs.woff2":"_assets/e76d2536f57b35dcbffd.woff2","/v28/JTUTjIko8DOq5FeaeEAjgH5G7gs.woff2":"_assets/e76d2536f57b35dcbffd.woff2","/JTUTjIko8DOq5FeaeEAjgH5G7gs.woff2":"_assets/e76d2536f57b35dcbffd.woff2"};
  const ROOT = new URL(".", document.currentScript.src);
  const nativeFetch = window.fetch.bind(window);
  const nativeOpen = XMLHttpRequest.prototype.open;
  const nativeAppendChild = Node.prototype.appendChild;
  const nativeInsertBefore = Node.prototype.insertBefore;
  const BLOCKED_FRAGMENTS = [
    "hotjar", "googletagmanager", "google-analytics", "doubleclick",
    "googlesyndication", "pagead2", "cloudflareinsights", "sentry.io",
    "adinplay", "pubnation", "cdn-cgi/challenge-platform", "about:blank",
    "/patch/_cloner", "/patch/gamemonetize", "_cloner-monitor",
    "_cloner-v3", "main.min.js", "adsbygoogle", "/null.html?"
  ];

  function isBlockedNode(node) {
    if (!node || !node.tagName) return false;
    const tag = String(node.tagName).toLowerCase();
    if (!["script", "img", "link", "iframe", "frame", "source", "video", "audio"].includes(tag)) return false;
    const ref = String(node.src || node.href || node.data || "");
    if (!ref) return false;
    const lowered = ref.toLowerCase();
    if (BLOCKED_FRAGMENTS.some(part => lowered.includes(part))) return true;
    try {
      const absolute = new URL(ref, document.baseURI);
      return absolute.origin !== location.origin && absolute.protocol !== "data:" && absolute.protocol !== "blob:";
    } catch (_) {
      return false;
    }
  }

  function localizeNode(node) {
    if (!node || !node.tagName) return node;
    for (const property of ["src", "href", "data"]) {
      if (!(property in node)) continue;
      const local = resolveUrl(node[property]);
      if (local) {
        try { node[property] = local; } catch (_) {}
      }
    }
    return node;
  }

  Node.prototype.appendChild = function(node) {
    localizeNode(node);
    if (isBlockedNode(node)) return node;
    return nativeAppendChild.call(this, node);
  };

  Node.prototype.insertBefore = function(node, reference) {
    localizeNode(node);
    if (isBlockedNode(node)) return node;
    return nativeInsertBefore.call(this, node, reference);
  };

  function resolveUrl(input) {
    try {
      const raw = typeof input === "string" ? input : input.url;
      const absolute = new URL(raw, document.baseURI).href.split("#")[0];
      const parts = new URL(absolute);
      const cleanPath = parts.pathname.replace(/\/+/g, "/");
      let local = RUNTIME_MAP[absolute] || RUNTIME_MAP[cleanPath + parts.search] || RUNTIME_MAP[cleanPath];
      if (!local) {
        const marker = cleanPath.lastIndexOf("/_assets/");
        if (marker >= 0) local = cleanPath.slice(marker + 1);
      }
      return local ? new URL(local, ROOT).href : null;
    } catch (_) {
      return null;
    }
  }

  for (const constructor of [HTMLScriptElement, HTMLImageElement, HTMLMediaElement, HTMLSourceElement, HTMLLinkElement, HTMLIFrameElement]) {
    try {
      const descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, "src");
      if (!descriptor || !descriptor.set || !descriptor.configurable) continue;
      Object.defineProperty(constructor.prototype, "src", {
        configurable: true,
        enumerable: descriptor.enumerable,
        get: descriptor.get,
        set(value) {
          const local = resolveUrl(value);
          return descriptor.set.call(this, local || value);
        },
      });
    } catch (_) {}
  }

  window.fetch = function(input, init) {
    const local = resolveUrl(input);
    if (local) return nativeFetch(local, init);
    try {
      const absolute = new URL(typeof input === "string" ? input : input.url, document.baseURI);
      if (absolute.origin !== location.origin) {
        return Promise.resolve(new Response("", {status: 204, statusText: "Offline mirror"}));
      }
    } catch (_) {}
    return nativeFetch(input, init);
  };

  XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
    const local = resolveUrl(url);
    const nextUrl = local || url;
    return nativeOpen.call(this, method, nextUrl, async === undefined ? true : async, user, password);
  };

  if (navigator.sendBeacon) navigator.sendBeacon = () => false;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(items => items.forEach(item => item.unregister())).catch(() => {});
  }
})();
