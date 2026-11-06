(() => {
  "use strict";
  const RUNTIME_MAP = {"https://criscarr26.github.io/laser-chess/css/style.css":"_assets/2645b953f600d1cf1ba9.css","/laser-chess/css/style.css":"_assets/2645b953f600d1cf1ba9.css","/css/style.css":"_assets/2645b953f600d1cf1ba9.css","/style.css":"_assets/2645b953f600d1cf1ba9.css","https://criscarr26.github.io/laser-chess/js/ui.js":"_assets/f807f059ac3c2048d2ad.js","/laser-chess/js/ui.js":"_assets/f807f059ac3c2048d2ad.js","/js/ui.js":"_assets/f807f059ac3c2048d2ad.js","/ui.js":"_assets/f807f059ac3c2048d2ad.js","https://criscarr26.github.io/laser-chess/js/engine.js":"_assets/48f2ec33e910cd3899e5.js","/laser-chess/js/engine.js":"_assets/48f2ec33e910cd3899e5.js","/js/engine.js":"_assets/48f2ec33e910cd3899e5.js","/engine.js":"_assets/48f2ec33e910cd3899e5.js","https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=Rajdhani:wght@400;500;600;700&display=swap":"_assets/b8e5ca0b6ea6c3bd4657.css","/css2":"_assets/b8e5ca0b6ea6c3bd4657.css","/css2?family=Orbitron:wght@600;800&family=Rajdhani:wght@400;500;600;700&display=swap":"_assets/b8e5ca0b6ea6c3bd4657.css","https://fonts.googleapis.com/css2":"_assets/b8e5ca0b6ea6c3bd4657.css","https://criscarr26.github.io/laser-chess/js/ai.js":"_assets/361ef50a6e558082e3be.js","/laser-chess/js/ai.js":"_assets/361ef50a6e558082e3be.js","/js/ai.js":"_assets/361ef50a6e558082e3be.js","/ai.js":"_assets/361ef50a6e558082e3be.js","https://fonts.gstatic.com/s/rajdhani/v17/LDI2apCSOBg7S-QT7pbYF_Oreec.woff2":"_assets/433a7007e4747a02a790.woff2","/s/rajdhani/v17/LDI2apCSOBg7S-QT7pbYF_Oreec.woff2":"_assets/433a7007e4747a02a790.woff2","/rajdhani/v17/LDI2apCSOBg7S-QT7pbYF_Oreec.woff2":"_assets/433a7007e4747a02a790.woff2","/v17/LDI2apCSOBg7S-QT7pbYF_Oreec.woff2":"_assets/433a7007e4747a02a790.woff2","/LDI2apCSOBg7S-QT7pbYF_Oreec.woff2":"_assets/433a7007e4747a02a790.woff2","https://fonts.gstatic.com/s/orbitron/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","/s/orbitron/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","/orbitron/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","https://fonts.gstatic.com/s/rajdhani/v17/LDIxapCSOBg7S-QT7p4HM-Y.woff2":"_assets/759a9000e47b028799d7.woff2","/s/rajdhani/v17/LDIxapCSOBg7S-QT7p4HM-Y.woff2":"_assets/759a9000e47b028799d7.woff2","/rajdhani/v17/LDIxapCSOBg7S-QT7p4HM-Y.woff2":"_assets/759a9000e47b028799d7.woff2","/v17/LDIxapCSOBg7S-QT7p4HM-Y.woff2":"_assets/759a9000e47b028799d7.woff2","/LDIxapCSOBg7S-QT7p4HM-Y.woff2":"_assets/759a9000e47b028799d7.woff2","https://fonts.gstatic.com/s/rajdhani/v17/LDI2apCSOBg7S-QT7pa8FvOreec.woff2":"_assets/5b7e4a6f97163c263672.woff2","/s/rajdhani/v17/LDI2apCSOBg7S-QT7pa8FvOreec.woff2":"_assets/5b7e4a6f97163c263672.woff2","/rajdhani/v17/LDI2apCSOBg7S-QT7pa8FvOreec.woff2":"_assets/5b7e4a6f97163c263672.woff2","/v17/LDI2apCSOBg7S-QT7pa8FvOreec.woff2":"_assets/5b7e4a6f97163c263672.woff2","/LDI2apCSOBg7S-QT7pa8FvOreec.woff2":"_assets/5b7e4a6f97163c263672.woff2"};
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
