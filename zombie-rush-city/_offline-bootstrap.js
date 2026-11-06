(() => {
  "use strict";
  const RUNTIME_MAP = {"https://sowmya-sagili.github.io/zombie-rush-city/css/style.css":"_assets/429b0be71ca7f224562f.css","/zombie-rush-city/css/style.css":"_assets/429b0be71ca7f224562f.css","/css/style.css":"_assets/429b0be71ca7f224562f.css","/style.css":"_assets/429b0be71ca7f224562f.css","https://sowmya-sagili.github.io/zombie-rush-city/js/FX.js":"_assets/622d85c16e07ce396a51.js","/zombie-rush-city/js/FX.js":"_assets/622d85c16e07ce396a51.js","/js/FX.js":"_assets/622d85c16e07ce396a51.js","/FX.js":"_assets/622d85c16e07ce396a51.js","https://sowmya-sagili.github.io/zombie-rush-city/js/Player.js":"_assets/11892271978bef938d13.js","/zombie-rush-city/js/Player.js":"_assets/11892271978bef938d13.js","/js/Player.js":"_assets/11892271978bef938d13.js","/Player.js":"_assets/11892271978bef938d13.js","https://sowmya-sagili.github.io/zombie-rush-city/js/World.js":"_assets/66063d48a58d503f8711.js","/zombie-rush-city/js/World.js":"_assets/66063d48a58d503f8711.js","/js/World.js":"_assets/66063d48a58d503f8711.js","/World.js":"_assets/66063d48a58d503f8711.js","https://sowmya-sagili.github.io/zombie-rush-city/js/UI.js":"_assets/f234191897c9eeeb1b73.js","/zombie-rush-city/js/UI.js":"_assets/f234191897c9eeeb1b73.js","/js/UI.js":"_assets/f234191897c9eeeb1b73.js","/UI.js":"_assets/f234191897c9eeeb1b73.js","https://sowmya-sagili.github.io/zombie-rush-city/js/Game.js":"_assets/4c8a162931496c4ab450.js","/zombie-rush-city/js/Game.js":"_assets/4c8a162931496c4ab450.js","/js/Game.js":"_assets/4c8a162931496c4ab450.js","/Game.js":"_assets/4c8a162931496c4ab450.js","https://sowmya-sagili.github.io/zombie-rush-city/js/Zombie.js":"_assets/9e53c4d712155120512a.js","/zombie-rush-city/js/Zombie.js":"_assets/9e53c4d712155120512a.js","/js/Zombie.js":"_assets/9e53c4d712155120512a.js","/Zombie.js":"_assets/9e53c4d712155120512a.js","https://sowmya-sagili.github.io/zombie-rush-city/js/Sound.js":"_assets/af893b9d06c1f99b7399.js","/zombie-rush-city/js/Sound.js":"_assets/af893b9d06c1f99b7399.js","/js/Sound.js":"_assets/af893b9d06c1f99b7399.js","/Sound.js":"_assets/af893b9d06c1f99b7399.js","https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js":"_assets/9274bbcec8d96168626c.js","/ajax/libs/three.js/r128/three.min.js":"_assets/9274bbcec8d96168626c.js","/libs/three.js/r128/three.min.js":"_assets/9274bbcec8d96168626c.js","/three.js/r128/three.min.js":"_assets/9274bbcec8d96168626c.js","/r128/three.min.js":"_assets/9274bbcec8d96168626c.js","/three.min.js":"_assets/9274bbcec8d96168626c.js","https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@500;700&display=swap":"_assets/282073d4fe171e40b8e8.css","/css2":"_assets/282073d4fe171e40b8e8.css","/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@500;700&display=swap":"_assets/282073d4fe171e40b8e8.css","https://fonts.googleapis.com/css2":"_assets/282073d4fe171e40b8e8.css","https://fonts.gstatic.com/s/rajdhani/v17/LDI2apCSOBg7S-QT7pb0EPOreec.woff2":"_assets/23afdb9b5b89b878fab0.woff2","/s/rajdhani/v17/LDI2apCSOBg7S-QT7pb0EPOreec.woff2":"_assets/23afdb9b5b89b878fab0.woff2","/rajdhani/v17/LDI2apCSOBg7S-QT7pb0EPOreec.woff2":"_assets/23afdb9b5b89b878fab0.woff2","/v17/LDI2apCSOBg7S-QT7pb0EPOreec.woff2":"_assets/23afdb9b5b89b878fab0.woff2","/LDI2apCSOBg7S-QT7pb0EPOreec.woff2":"_assets/23afdb9b5b89b878fab0.woff2","https://fonts.gstatic.com/s/orbitron/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","/s/orbitron/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","/orbitron/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2"};
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
