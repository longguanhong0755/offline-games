(() => {
  "use strict";
  const RUNTIME_MAP = {"https://darksoulhp19.github.io/card-game/style.css":"_assets/c41b01c263fe96999be8.css","/card-game/style.css":"_assets/c41b01c263fe96999be8.css","/style.css":"_assets/c41b01c263fe96999be8.css","https://fonts.googleapis.com/css2?family=Bungee&family=Fredoka:wght@600&family=Luckiest+Guy&display=swap":"_assets/13a8d32ddcd97ceb6000.css","/css2":"_assets/13a8d32ddcd97ceb6000.css","/css2?family=Bungee&family=Fredoka:wght@600&family=Luckiest+Guy&display=swap":"_assets/13a8d32ddcd97ceb6000.css","https://fonts.googleapis.com/css2":"_assets/13a8d32ddcd97ceb6000.css","https://darksoulhp19.github.io/card-game/game.js":"_assets/1b6ece580af3de4b499d.js","/card-game/game.js":"_assets/1b6ece580af3de4b499d.js","/game.js":"_assets/1b6ece580af3de4b499d.js","https://fonts.gstatic.com/s/bungee/v17/N0bU2SZBIuF2PU_0DXR1.woff2":"_assets/126eec706b7931682dbc.woff2","/s/bungee/v17/N0bU2SZBIuF2PU_0DXR1.woff2":"_assets/126eec706b7931682dbc.woff2","/bungee/v17/N0bU2SZBIuF2PU_0DXR1.woff2":"_assets/126eec706b7931682dbc.woff2","/v17/N0bU2SZBIuF2PU_0DXR1.woff2":"_assets/126eec706b7931682dbc.woff2","/N0bU2SZBIuF2PU_0DXR1.woff2":"_assets/126eec706b7931682dbc.woff2","https://fonts.gstatic.com/s/luckiestguy/v25/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2":"_assets/3877b522181765adf66b.woff2","/s/luckiestguy/v25/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2":"_assets/3877b522181765adf66b.woff2","/luckiestguy/v25/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2":"_assets/3877b522181765adf66b.woff2","/v25/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2":"_assets/3877b522181765adf66b.woff2","/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2":"_assets/3877b522181765adf66b.woff2","https://fonts.gstatic.com/s/fredoka/v17/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OLyX8EemK.woff2":"_assets/b62f2898de150f019961.woff2","/s/fredoka/v17/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OLyX8EemK.woff2":"_assets/b62f2898de150f019961.woff2","/fredoka/v17/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OLyX8EemK.woff2":"_assets/b62f2898de150f019961.woff2","/v17/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OLyX8EemK.woff2":"_assets/b62f2898de150f019961.woff2","/X7nP4b87HvSqjb_WIi2yDCRwoQ_k7367_B-i2yQag0-mac3OLyX8EemK.woff2":"_assets/b62f2898de150f019961.woff2"};
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
