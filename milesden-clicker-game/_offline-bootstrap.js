(() => {
  "use strict";
  const RUNTIME_MAP = {"https://milesden.github.io/clicker-game/css/reset.css":"_assets/2c0eeefb2276f523a839.css","/clicker-game/css/reset.css":"_assets/2c0eeefb2276f523a839.css","/css/reset.css":"_assets/2c0eeefb2276f523a839.css","/reset.css":"_assets/2c0eeefb2276f523a839.css","https://milesden.github.io/clicker-game/css/style.css":"_assets/0723b20c42a5b2583a09.css","/clicker-game/css/style.css":"_assets/0723b20c42a5b2583a09.css","/css/style.css":"_assets/0723b20c42a5b2583a09.css","/style.css":"_assets/0723b20c42a5b2583a09.css","https://milesden.github.io/clicker-game/css/animations.css":"_assets/9f4db3c2fe39424b3a85.css","/clicker-game/css/animations.css":"_assets/9f4db3c2fe39424b3a85.css","/css/animations.css":"_assets/9f4db3c2fe39424b3a85.css","/animations.css":"_assets/9f4db3c2fe39424b3a85.css","https://milesden.github.io/clicker-game/css/variables.css":"_assets/82696951cb82f8fc5839.css","/clicker-game/css/variables.css":"_assets/82696951cb82f8fc5839.css","/css/variables.css":"_assets/82696951cb82f8fc5839.css","/variables.css":"_assets/82696951cb82f8fc5839.css","https://milesden.github.io/clicker-game/css/responsive.css":"_assets/e2b0bcb4e8f8b790b89d.css","/clicker-game/css/responsive.css":"_assets/e2b0bcb4e8f8b790b89d.css","/css/responsive.css":"_assets/e2b0bcb4e8f8b790b89d.css","/responsive.css":"_assets/e2b0bcb4e8f8b790b89d.css","https://milesden.github.io/clicker-game/js/main.js":"_assets/6313d2d0ba69a776a17f.js","/clicker-game/js/main.js":"_assets/6313d2d0ba69a776a17f.js","/js/main.js":"_assets/6313d2d0ba69a776a17f.js","/main.js":"_assets/6313d2d0ba69a776a17f.js","https://milesden.github.io/clicker-game/js/state.js":"_assets/a19150d2669a05bc3a49.js","/clicker-game/js/state.js":"_assets/a19150d2669a05bc3a49.js","/js/state.js":"_assets/a19150d2669a05bc3a49.js","/state.js":"_assets/a19150d2669a05bc3a49.js","https://milesden.github.io/clicker-game/js/upgrades.js":"_assets/4ea559c070fd1206ee10.js","/clicker-game/js/upgrades.js":"_assets/4ea559c070fd1206ee10.js","/js/upgrades.js":"_assets/4ea559c070fd1206ee10.js","/upgrades.js":"_assets/4ea559c070fd1206ee10.js","https://milesden.github.io/clicker-game/js/storage.js":"_assets/de13299b392d08dadfd3.js","/clicker-game/js/storage.js":"_assets/de13299b392d08dadfd3.js","/js/storage.js":"_assets/de13299b392d08dadfd3.js","/storage.js":"_assets/de13299b392d08dadfd3.js","https://milesden.github.io/clicker-game/js/ui.js":"_assets/454a666c46106a28ca7c.js","/clicker-game/js/ui.js":"_assets/454a666c46106a28ca7c.js","/js/ui.js":"_assets/454a666c46106a28ca7c.js","/ui.js":"_assets/454a666c46106a28ca7c.js","https://milesden.github.io/clicker-game/js/prestige.js":"_assets/5846b5f7df0f69098cc7.js","/clicker-game/js/prestige.js":"_assets/5846b5f7df0f69098cc7.js","/js/prestige.js":"_assets/5846b5f7df0f69098cc7.js","/prestige.js":"_assets/5846b5f7df0f69098cc7.js","https://milesden.github.io/clicker-game/js/events.js":"_assets/950266b4327c7ec5a533.js","/clicker-game/js/events.js":"_assets/950266b4327c7ec5a533.js","/js/events.js":"_assets/950266b4327c7ec5a533.js","/events.js":"_assets/950266b4327c7ec5a533.js","https://milesden.github.io/clicker-game/js/pets.js":"_assets/967056b4db334c9f0e3f.js","/clicker-game/js/pets.js":"_assets/967056b4db334c9f0e3f.js","/js/pets.js":"_assets/967056b4db334c9f0e3f.js","/pets.js":"_assets/967056b4db334c9f0e3f.js","https://milesden.github.io/clicker-game/js/game.js":"_assets/b001a505423bde524ced.js","/clicker-game/js/game.js":"_assets/b001a505423bde524ced.js","/js/game.js":"_assets/b001a505423bde524ced.js","/game.js":"_assets/b001a505423bde524ced.js","https://milesden.github.io/clicker-game/js/missions.js":"_assets/ace778d936696a970a82.js","/clicker-game/js/missions.js":"_assets/ace778d936696a970a82.js","/js/missions.js":"_assets/ace778d936696a970a82.js","/missions.js":"_assets/ace778d936696a970a82.js","https://milesden.github.io/clicker-game/js/stats.js":"_assets/f1b840ec86f477220e93.js","/clicker-game/js/stats.js":"_assets/f1b840ec86f477220e93.js","/js/stats.js":"_assets/f1b840ec86f477220e93.js","/stats.js":"_assets/f1b840ec86f477220e93.js","https://milesden.github.io/clicker-game/js/achievements.js":"_assets/27bb217aabf1a3da7b2f.js","/clicker-game/js/achievements.js":"_assets/27bb217aabf1a3da7b2f.js","/js/achievements.js":"_assets/27bb217aabf1a3da7b2f.js","/achievements.js":"_assets/27bb217aabf1a3da7b2f.js"};
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
