(() => {
  "use strict";
  const RUNTIME_MAP = {"http://snollygolly.github.io/IsoCitySim/css/styles.css":"_assets/57a194c4f1ea697f736c.css","/IsoCitySim/css/styles.css":"_assets/57a194c4f1ea697f736c.css","/css/styles.css":"_assets/57a194c4f1ea697f736c.css","/styles.css":"_assets/57a194c4f1ea697f736c.css","http://snollygolly.github.io/IsoCitySim/js/game.js":"_assets/099fe468132c0126aecd.js","/IsoCitySim/js/game.js":"_assets/099fe468132c0126aecd.js","/js/game.js":"_assets/099fe468132c0126aecd.js","/game.js":"_assets/099fe468132c0126aecd.js","http://snollygolly.github.io/IsoCitySim/js/plugins/rStats.js":"_assets/9c28f7e0bd7ed1f649a9.js","/IsoCitySim/js/plugins/rStats.js":"_assets/9c28f7e0bd7ed1f649a9.js","/js/plugins/rStats.js":"_assets/9c28f7e0bd7ed1f649a9.js","/plugins/rStats.js":"_assets/9c28f7e0bd7ed1f649a9.js","/rStats.js":"_assets/9c28f7e0bd7ed1f649a9.js","http://snollygolly.github.io/IsoCitySim/js/plugins/phaser-plugin-isometric.js":"_assets/78824981689ec1ca0c50.js","/IsoCitySim/js/plugins/phaser-plugin-isometric.js":"_assets/78824981689ec1ca0c50.js","/js/plugins/phaser-plugin-isometric.js":"_assets/78824981689ec1ca0c50.js","/plugins/phaser-plugin-isometric.js":"_assets/78824981689ec1ca0c50.js","/phaser-plugin-isometric.js":"_assets/78824981689ec1ca0c50.js","http://snollygolly.github.io/IsoCitySim/js/phaser.js":"_assets/b33d7d72a75710832345.js","/IsoCitySim/js/phaser.js":"_assets/b33d7d72a75710832345.js","/js/phaser.js":"_assets/b33d7d72a75710832345.js","/phaser.js":"_assets/b33d7d72a75710832345.js","http://snollygolly.github.io/IsoCitySim/css/rStats.css":"_assets/4a09a1cf71a49e3b7845.css","/IsoCitySim/css/rStats.css":"_assets/4a09a1cf71a49e3b7845.css","/css/rStats.css":"_assets/4a09a1cf71a49e3b7845.css","/rStats.css":"_assets/4a09a1cf71a49e3b7845.css","http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300":"_assets/f25a4894843dea569523.css","/css":"_assets/f25a4894843dea569523.css","/css?family=Roboto+Condensed:400,700,300":"_assets/f25a4894843dea569523.css","http://fonts.googleapis.com/css":"_assets/f25a4894843dea569523.css","http://snollygolly.github.io/IsoCitySim/assets/landscapeTiles_sheet.png":"_assets/e45c50f3a7c046fc52ad.png","/IsoCitySim/assets/landscapeTiles_sheet.png":"_assets/e45c50f3a7c046fc52ad.png","/assets/landscapeTiles_sheet.png":"_assets/e45c50f3a7c046fc52ad.png","/landscapeTiles_sheet.png":"_assets/e45c50f3a7c046fc52ad.png","http://snollygolly.github.io/IsoCitySim/assets/landscapeTiles_sheet.xml":"_assets/f09ae67f727157d5649a.xml","/IsoCitySim/assets/landscapeTiles_sheet.xml":"_assets/f09ae67f727157d5649a.xml","/assets/landscapeTiles_sheet.xml":"_assets/f09ae67f727157d5649a.xml","/landscapeTiles_sheet.xml":"_assets/f09ae67f727157d5649a.xml","http://snollygolly.github.io/IsoCitySim/assets/cityTiles_sheet.png":"_assets/d1595baffb8eaefda7d1.png","/IsoCitySim/assets/cityTiles_sheet.png":"_assets/d1595baffb8eaefda7d1.png","/assets/cityTiles_sheet.png":"_assets/d1595baffb8eaefda7d1.png","/cityTiles_sheet.png":"_assets/d1595baffb8eaefda7d1.png","http://snollygolly.github.io/IsoCitySim/assets/cityTiles_sheet.xml":"_assets/9497b1f4b17f422a928a.xml","/IsoCitySim/assets/cityTiles_sheet.xml":"_assets/9497b1f4b17f422a928a.xml","/assets/cityTiles_sheet.xml":"_assets/9497b1f4b17f422a928a.xml","/cityTiles_sheet.xml":"_assets/9497b1f4b17f422a928a.xml","http://snollygolly.github.io/IsoCitySim/assets/buildingTiles_sheet.png":"_assets/f1e27dd436e0c022446f.png","/IsoCitySim/assets/buildingTiles_sheet.png":"_assets/f1e27dd436e0c022446f.png","/assets/buildingTiles_sheet.png":"_assets/f1e27dd436e0c022446f.png","/buildingTiles_sheet.png":"_assets/f1e27dd436e0c022446f.png","http://snollygolly.github.io/IsoCitySim/assets/buildingTiles_sheet.xml":"_assets/3e7039a76c82365d964e.xml","/IsoCitySim/assets/buildingTiles_sheet.xml":"_assets/3e7039a76c82365d964e.xml","/assets/buildingTiles_sheet.xml":"_assets/3e7039a76c82365d964e.xml","/buildingTiles_sheet.xml":"_assets/3e7039a76c82365d964e.xml","http://fonts.gstatic.com/s/robotocondensed/v31/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2":"_assets/8d230115e58faa2ed303.woff2","/s/robotocondensed/v31/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2":"_assets/8d230115e58faa2ed303.woff2","/robotocondensed/v31/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2":"_assets/8d230115e58faa2ed303.woff2","/v31/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2":"_assets/8d230115e58faa2ed303.woff2","/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2":"_assets/8d230115e58faa2ed303.woff2"};
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
