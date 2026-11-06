(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@500;600;700&display=swap":"_assets/8f0bb376dfb787fe65dc.css","/css2":"_assets/8f0bb376dfb787fe65dc.css","/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@500;600;700&display=swap":"_assets/8f0bb376dfb787fe65dc.css","https://fonts.googleapis.com/css2":"_assets/8f0bb376dfb787fe65dc.css","https://kungpowunicorn.github.io/outrun/styles.css":"_assets/eea386d1d8aa3c4c6de5.css","/outrun/styles.css":"_assets/eea386d1d8aa3c4c6de5.css","/styles.css":"_assets/eea386d1d8aa3c4c6de5.css","https://fonts.gstatic.com/l/font?kit=yMJ_MIlzdpvBhQQL_SC3X9yhF25-T1nyKS7TrUDChqmWoLxl7rvry-eeuQ&skey=1145794a0c86a867&v=v35":"_assets/82aa6ae6b3850bb5db46.html","/l/font":"_assets/82aa6ae6b3850bb5db46.html","/l/font?kit=yMJ_MIlzdpvBhQQL_SC3X9yhF25-T1nyKS7TrUDChqmWoLxl7rvry-eeuQ&skey=1145794a0c86a867&v=v35":"_assets/82aa6ae6b3850bb5db46.html","/font":"_assets/82aa6ae6b3850bb5db46.html","https://fonts.gstatic.com/l/font":"_assets/82aa6ae6b3850bb5db46.html","https://fonts.gstatic.com/s/rajdhani/v17/LDI2apCSOBg7S-QT7pb0EPOreec.woff2":"_assets/23afdb9b5b89b878fab0.woff2","/s/rajdhani/v17/LDI2apCSOBg7S-QT7pb0EPOreec.woff2":"_assets/23afdb9b5b89b878fab0.woff2","/rajdhani/v17/LDI2apCSOBg7S-QT7pb0EPOreec.woff2":"_assets/23afdb9b5b89b878fab0.woff2","/v17/LDI2apCSOBg7S-QT7pb0EPOreec.woff2":"_assets/23afdb9b5b89b878fab0.woff2","/LDI2apCSOBg7S-QT7pb0EPOreec.woff2":"_assets/23afdb9b5b89b878fab0.woff2","https://kungpowunicorn.github.io/outrun/game.js":"_assets/563a528734a70ad9342f.js","/outrun/game.js":"_assets/563a528734a70ad9342f.js","/game.js":"_assets/563a528734a70ad9342f.js","https://fonts.gstatic.com/s/rajdhani/v17/LDI2apCSOBg7S-QT7pa8FvOreec.woff2":"_assets/5b7e4a6f97163c263672.woff2","/s/rajdhani/v17/LDI2apCSOBg7S-QT7pa8FvOreec.woff2":"_assets/5b7e4a6f97163c263672.woff2","/rajdhani/v17/LDI2apCSOBg7S-QT7pa8FvOreec.woff2":"_assets/5b7e4a6f97163c263672.woff2","/v17/LDI2apCSOBg7S-QT7pa8FvOreec.woff2":"_assets/5b7e4a6f97163c263672.woff2","/LDI2apCSOBg7S-QT7pa8FvOreec.woff2":"_assets/5b7e4a6f97163c263672.woff2"};
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
