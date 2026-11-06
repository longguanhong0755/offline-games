(() => {
  "use strict";
  const RUNTIME_MAP = {"https://hulkiokantabak.github.io/trace-game/css/game.css":"_assets/4f1d2be3512f9e520829.css","/trace-game/css/game.css":"_assets/4f1d2be3512f9e520829.css","/css/game.css":"_assets/4f1d2be3512f9e520829.css","/game.css":"_assets/4f1d2be3512f9e520829.css","https://hulkiokantabak.github.io/trace-game/js/engine.js":"_assets/80423212885c433240d9.js","/trace-game/js/engine.js":"_assets/80423212885c433240d9.js","/js/engine.js":"_assets/80423212885c433240d9.js","/engine.js":"_assets/80423212885c433240d9.js","https://hulkiokantabak.github.io/trace-game/js/state.js":"_assets/06a331bc84c18bc7b3d8.js","/trace-game/js/state.js":"_assets/06a331bc84c18bc7b3d8.js","/js/state.js":"_assets/06a331bc84c18bc7b3d8.js","/state.js":"_assets/06a331bc84c18bc7b3d8.js","https://hulkiokantabak.github.io/trace-game/js/game.js":"_assets/18c6f904a8695f2c13ac.js","/trace-game/js/game.js":"_assets/18c6f904a8695f2c13ac.js","/js/game.js":"_assets/18c6f904a8695f2c13ac.js","/game.js":"_assets/18c6f904a8695f2c13ac.js","https://hulkiokantabak.github.io/trace-game/js/ai.js":"_assets/2eaa8cd7ae5f18fb1e48.js","/trace-game/js/ai.js":"_assets/2eaa8cd7ae5f18fb1e48.js","/js/ai.js":"_assets/2eaa8cd7ae5f18fb1e48.js","/ai.js":"_assets/2eaa8cd7ae5f18fb1e48.js","https://hulkiokantabak.github.io/trace-game/js/ui.js":"_assets/f5f473306d62c68b546f.js","/trace-game/js/ui.js":"_assets/f5f473306d62c68b546f.js","/js/ui.js":"_assets/f5f473306d62c68b546f.js","/ui.js":"_assets/f5f473306d62c68b546f.js","https://hulkiokantabak.github.io/trace-game/content/config.json":"_assets/f3bc1ce7e25158e7b9e1.json","/trace-game/content/config.json":"_assets/f3bc1ce7e25158e7b9e1.json","/content/config.json":"_assets/f3bc1ce7e25158e7b9e1.json","/config.json":"_assets/f3bc1ce7e25158e7b9e1.json","https://gc.zgo.at/count.js":"_assets/792b7abd26c1fb6ae629.js","/count.js":"_assets/792b7abd26c1fb6ae629.js","https://hulkiokantabak.github.io/trace-game/content/locations.json":"_assets/c06ce48c64b267dd87ea.json","/trace-game/content/locations.json":"_assets/c06ce48c64b267dd87ea.json","/content/locations.json":"_assets/c06ce48c64b267dd87ea.json","/locations.json":"_assets/c06ce48c64b267dd87ea.json","https://hulkiokantabak.github.io/trace-game/content/thoughts.json":"_assets/4e5888f9b76091dd4ee8.json","/trace-game/content/thoughts.json":"_assets/4e5888f9b76091dd4ee8.json","/content/thoughts.json":"_assets/4e5888f9b76091dd4ee8.json","/thoughts.json":"_assets/4e5888f9b76091dd4ee8.json","https://hulkiokantabak.github.io/trace-game/content/npcs.json":"_assets/95bdfab05d5845bcfc56.json","/trace-game/content/npcs.json":"_assets/95bdfab05d5845bcfc56.json","/content/npcs.json":"_assets/95bdfab05d5845bcfc56.json","/npcs.json":"_assets/95bdfab05d5845bcfc56.json","https://hulkiokantabak.github.io/trace-game/content/investigations.json":"_assets/5f09557b22a154b9f123.json","/trace-game/content/investigations.json":"_assets/5f09557b22a154b9f123.json","/content/investigations.json":"_assets/5f09557b22a154b9f123.json","/investigations.json":"_assets/5f09557b22a154b9f123.json","https://hulkiokantabak.github.io/trace-game/content/fragments.json":"_assets/ecc3a3db8c1840fae316.json","/trace-game/content/fragments.json":"_assets/ecc3a3db8c1840fae316.json","/content/fragments.json":"_assets/ecc3a3db8c1840fae316.json","/fragments.json":"_assets/ecc3a3db8c1840fae316.json"};
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
