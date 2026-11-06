(() => {
  "use strict";
  const RUNTIME_MAP = {"https://avin.github.io/react-game-snake/static/css/1.0af516fa.chunk.css":"_assets/27e77cb2b5f5563c4d8c.css","/react-game-snake/static/css/1.0af516fa.chunk.css":"_assets/27e77cb2b5f5563c4d8c.css","/static/css/1.0af516fa.chunk.css":"_assets/27e77cb2b5f5563c4d8c.css","/css/1.0af516fa.chunk.css":"_assets/27e77cb2b5f5563c4d8c.css","/1.0af516fa.chunk.css":"_assets/27e77cb2b5f5563c4d8c.css","https://avin.github.io/react-game-snake/static/css/main.dac69997.chunk.css":"_assets/a361b13b4bd2e7698684.css","/react-game-snake/static/css/main.dac69997.chunk.css":"_assets/a361b13b4bd2e7698684.css","/static/css/main.dac69997.chunk.css":"_assets/a361b13b4bd2e7698684.css","/css/main.dac69997.chunk.css":"_assets/a361b13b4bd2e7698684.css","/main.dac69997.chunk.css":"_assets/a361b13b4bd2e7698684.css","https://avin.github.io/react-game-snake/static/js/keymaster.js":"_assets/82e07804acda2c5542b7.js","/react-game-snake/static/js/keymaster.js":"_assets/82e07804acda2c5542b7.js","/static/js/keymaster.js":"_assets/82e07804acda2c5542b7.js","/js/keymaster.js":"_assets/82e07804acda2c5542b7.js","/keymaster.js":"_assets/82e07804acda2c5542b7.js","https://avin.github.io/react-game-snake/static/js/1.37bc4620.chunk.js":"_assets/0029374b9eba6c03e0b0.js","/react-game-snake/static/js/1.37bc4620.chunk.js":"_assets/0029374b9eba6c03e0b0.js","/static/js/1.37bc4620.chunk.js":"_assets/0029374b9eba6c03e0b0.js","/js/1.37bc4620.chunk.js":"_assets/0029374b9eba6c03e0b0.js","/1.37bc4620.chunk.js":"_assets/0029374b9eba6c03e0b0.js","https://avin.github.io/react-game-snake/static/js/main.17c83d08.chunk.js":"_assets/1f326ce552633ddd47a2.js","/react-game-snake/static/js/main.17c83d08.chunk.js":"_assets/1f326ce552633ddd47a2.js","/static/js/main.17c83d08.chunk.js":"_assets/1f326ce552633ddd47a2.js","/js/main.17c83d08.chunk.js":"_assets/1f326ce552633ddd47a2.js","/main.17c83d08.chunk.js":"_assets/1f326ce552633ddd47a2.js","https://fonts.googleapis.com/css?family=Space+Mono":"_assets/1eb6db5c153da84e9cef.css","/css":"_assets/1eb6db5c153da84e9cef.css","/css?family=Space+Mono":"_assets/1eb6db5c153da84e9cef.css","https://fonts.googleapis.com/css":"_assets/1eb6db5c153da84e9cef.css","https://fonts.gstatic.com/s/spacemono/v17/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2":"_assets/fb4a81a2d0a893e5c38c.woff2","/s/spacemono/v17/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2":"_assets/fb4a81a2d0a893e5c38c.woff2","/spacemono/v17/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2":"_assets/fb4a81a2d0a893e5c38c.woff2","/v17/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2":"_assets/fb4a81a2d0a893e5c38c.woff2","/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2":"_assets/fb4a81a2d0a893e5c38c.woff2"};
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
