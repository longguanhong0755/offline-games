(() => {
  "use strict";
  const RUNTIME_MAP = {"https://josephlou5.github.io/planet-x-searching/images/planet-x.png":"_assets/1197b2d10b1ce7f98456.png","/planet-x-searching/images/planet-x.png":"_assets/1197b2d10b1ce7f98456.png","/images/planet-x.png":"_assets/1197b2d10b1ce7f98456.png","/planet-x.png":"_assets/1197b2d10b1ce7f98456.png","https://josephlou5.github.io/planet-x-searching/images/truly-empty.png":"_assets/fce25cd9a1203e610718.png","/planet-x-searching/images/truly-empty.png":"_assets/fce25cd9a1203e610718.png","/images/truly-empty.png":"_assets/fce25cd9a1203e610718.png","/truly-empty.png":"_assets/fce25cd9a1203e610718.png","https://josephlou5.github.io/planet-x-searching/style.css":"_assets/d980a33484554af60a0c.css","/planet-x-searching/style.css":"_assets/d980a33484554af60a0c.css","/style.css":"_assets/d980a33484554af60a0c.css","https://josephlou5.github.io/planet-x-searching/images/dwarf-planet.png":"_assets/57410feac02538657f39.png","/planet-x-searching/images/dwarf-planet.png":"_assets/57410feac02538657f39.png","/images/dwarf-planet.png":"_assets/57410feac02538657f39.png","/dwarf-planet.png":"_assets/57410feac02538657f39.png","https://josephlou5.github.io/planet-x-searching/images/gas-cloud.png":"_assets/2d0b26368232e35ec3d6.png","/planet-x-searching/images/gas-cloud.png":"_assets/2d0b26368232e35ec3d6.png","/images/gas-cloud.png":"_assets/2d0b26368232e35ec3d6.png","/gas-cloud.png":"_assets/2d0b26368232e35ec3d6.png","https://code.jquery.com/jquery-3.6.0.min.js":"_assets/ff1523fb7389539c84c6.js","/jquery-3.6.0.min.js":"_assets/ff1523fb7389539c84c6.js","https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js":"_assets/59e2e3c3c25802d35473.js","/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js":"_assets/59e2e3c3c25802d35473.js","/bootstrap@5.3.0/dist/js/bootstrap.min.js":"_assets/59e2e3c3c25802d35473.js","/dist/js/bootstrap.min.js":"_assets/59e2e3c3c25802d35473.js","/js/bootstrap.min.js":"_assets/59e2e3c3c25802d35473.js","/bootstrap.min.js":"_assets/59e2e3c3c25802d35473.js","https://josephlou5.github.io/planet-x-searching/images/asteroid.png":"_assets/a212bc3c5d452410af3d.png","/planet-x-searching/images/asteroid.png":"_assets/a212bc3c5d452410af3d.png","/images/asteroid.png":"_assets/a212bc3c5d452410af3d.png","/asteroid.png":"_assets/a212bc3c5d452410af3d.png","https://josephlou5.github.io/planet-x-searching/images/comet.png":"_assets/ace788008daef8e1daf6.png","/planet-x-searching/images/comet.png":"_assets/ace788008daef8e1daf6.png","/images/comet.png":"_assets/ace788008daef8e1daf6.png","/comet.png":"_assets/ace788008daef8e1daf6.png","https://josephlou5.github.io/planet-x-searching/script.js":"_assets/5c7e37726ebd00d5c851.js","/planet-x-searching/script.js":"_assets/5c7e37726ebd00d5c851.js","/script.js":"_assets/5c7e37726ebd00d5c851.js","https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css":"_assets/7f1d37f0d90b6385354c.css","/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css":"_assets/7f1d37f0d90b6385354c.css","/bootstrap@5.3.0/dist/css/bootstrap.min.css":"_assets/7f1d37f0d90b6385354c.css","/dist/css/bootstrap.min.css":"_assets/7f1d37f0d90b6385354c.css","/css/bootstrap.min.css":"_assets/7f1d37f0d90b6385354c.css","/bootstrap.min.css":"_assets/7f1d37f0d90b6385354c.css","https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css":"_assets/d8824f7067cdfea38afe.css","/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css":"_assets/d8824f7067cdfea38afe.css","/bootstrap-icons@1.10.5/font/bootstrap-icons.css":"_assets/d8824f7067cdfea38afe.css","/font/bootstrap-icons.css":"_assets/d8824f7067cdfea38afe.css","/bootstrap-icons.css":"_assets/d8824f7067cdfea38afe.css"};
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
