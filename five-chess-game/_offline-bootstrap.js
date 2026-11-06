(() => {
  "use strict";
  const RUNTIME_MAP = {"https://gomoku.game.miniasp.com/styles.css?v=471135e8":"_assets/c759ed6b956943e4af6e.css","/styles.css":"_assets/c759ed6b956943e4af6e.css","/styles.css?v=471135e8":"_assets/c759ed6b956943e4af6e.css","https://gomoku.game.miniasp.com/styles.css":"_assets/c759ed6b956943e4af6e.css","https://gomoku.game.miniasp.com/assets/vendor/qrcode.min.js?v=7f5daa37":"_assets/b054bbeb191ad4c130b5.js","/assets/vendor/qrcode.min.js":"_assets/b054bbeb191ad4c130b5.js","/assets/vendor/qrcode.min.js?v=7f5daa37":"_assets/b054bbeb191ad4c130b5.js","/vendor/qrcode.min.js":"_assets/b054bbeb191ad4c130b5.js","/qrcode.min.js":"_assets/b054bbeb191ad4c130b5.js","https://gomoku.game.miniasp.com/assets/vendor/qrcode.min.js":"_assets/b054bbeb191ad4c130b5.js","https://gomoku.game.miniasp.com/game.js?v=43ed8ed4":"_assets/cdc850817183da483727.js","/game.js":"_assets/cdc850817183da483727.js","/game.js?v=43ed8ed4":"_assets/cdc850817183da483727.js","https://gomoku.game.miniasp.com/game.js":"_assets/cdc850817183da483727.js","https://gomoku.game.miniasp.com/shared/protocol.js?v=cd437f63":"_assets/5aeabb928380c22ab85d.js","/shared/protocol.js":"_assets/5aeabb928380c22ab85d.js","/shared/protocol.js?v=cd437f63":"_assets/5aeabb928380c22ab85d.js","/protocol.js":"_assets/5aeabb928380c22ab85d.js","https://gomoku.game.miniasp.com/shared/protocol.js":"_assets/5aeabb928380c22ab85d.js","https://gomoku.game.miniasp.com/online/socket.js?v=6a0fc39e":"_assets/19c2b78ce3b0b264b361.js","/online/socket.js":"_assets/19c2b78ce3b0b264b361.js","/online/socket.js?v=6a0fc39e":"_assets/19c2b78ce3b0b264b361.js","/socket.js":"_assets/19c2b78ce3b0b264b361.js","https://gomoku.game.miniasp.com/online/socket.js":"_assets/19c2b78ce3b0b264b361.js","https://gomoku.game.miniasp.com/online/tokens.js?v=9f606c10":"_assets/735b47c061222e607ac3.js","/online/tokens.js":"_assets/735b47c061222e607ac3.js","/online/tokens.js?v=9f606c10":"_assets/735b47c061222e607ac3.js","/tokens.js":"_assets/735b47c061222e607ac3.js","https://gomoku.game.miniasp.com/online/tokens.js":"_assets/735b47c061222e607ac3.js","https://gomoku.game.miniasp.com/online/session.js?v=76e73e5e":"_assets/16d2a3f398d5d4bdfa51.js","/online/session.js":"_assets/16d2a3f398d5d4bdfa51.js","/online/session.js?v=76e73e5e":"_assets/16d2a3f398d5d4bdfa51.js","/session.js":"_assets/16d2a3f398d5d4bdfa51.js","https://gomoku.game.miniasp.com/online/session.js":"_assets/16d2a3f398d5d4bdfa51.js","https://gomoku.game.miniasp.com/app.js?v=c80071d7":"_assets/b672ae144aab7c5bbda3.js","/app.js":"_assets/b672ae144aab7c5bbda3.js","/app.js?v=c80071d7":"_assets/b672ae144aab7c5bbda3.js","https://gomoku.game.miniasp.com/app.js":"_assets/b672ae144aab7c5bbda3.js","https://gomoku.game.miniasp.com/online/ui.js?v=c779e88b":"_assets/180bc6a52e8b06db9f4a.js","/online/ui.js":"_assets/180bc6a52e8b06db9f4a.js","/online/ui.js?v=c779e88b":"_assets/180bc6a52e8b06db9f4a.js","/ui.js":"_assets/180bc6a52e8b06db9f4a.js","https://gomoku.game.miniasp.com/online/ui.js":"_assets/180bc6a52e8b06db9f4a.js","https://gomoku.game.miniasp.com/api/health":"_assets/e1607df1b487cdb8fbf3.json","/api/health":"_assets/e1607df1b487cdb8fbf3.json","/health":"_assets/e1607df1b487cdb8fbf3.json","https://gomoku.game.miniasp.com/assets/home-bg.webp":"_assets/7b05a2081924cdd4db86.webp","/assets/home-bg.webp":"_assets/7b05a2081924cdd4db86.webp","/home-bg.webp":"_assets/7b05a2081924cdd4db86.webp"};
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
