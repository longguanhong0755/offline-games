(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Space_Gun/css/style.css":"_assets/bb2e9fa8dbd73fbbbad0.css","/GameZone/Games/Space_Gun/css/style.css":"_assets/bb2e9fa8dbd73fbbbad0.css","/Games/Space_Gun/css/style.css":"_assets/bb2e9fa8dbd73fbbbad0.css","/Space_Gun/css/style.css":"_assets/bb2e9fa8dbd73fbbbad0.css","/css/style.css":"_assets/bb2e9fa8dbd73fbbbad0.css","/style.css":"_assets/bb2e9fa8dbd73fbbbad0.css","https://kunjgit.github.io/GameZone/Games/Space_Gun/js/spaceship_fig.js":"_assets/268c22a4459f81240d55.js","/GameZone/Games/Space_Gun/js/spaceship_fig.js":"_assets/268c22a4459f81240d55.js","/Games/Space_Gun/js/spaceship_fig.js":"_assets/268c22a4459f81240d55.js","/Space_Gun/js/spaceship_fig.js":"_assets/268c22a4459f81240d55.js","/js/spaceship_fig.js":"_assets/268c22a4459f81240d55.js","/spaceship_fig.js":"_assets/268c22a4459f81240d55.js","https://kunjgit.github.io/GameZone/Games/Space_Gun/js/bg.js":"_assets/40a6044af2eae64a4b43.js","/GameZone/Games/Space_Gun/js/bg.js":"_assets/40a6044af2eae64a4b43.js","/Games/Space_Gun/js/bg.js":"_assets/40a6044af2eae64a4b43.js","/Space_Gun/js/bg.js":"_assets/40a6044af2eae64a4b43.js","/js/bg.js":"_assets/40a6044af2eae64a4b43.js","/bg.js":"_assets/40a6044af2eae64a4b43.js","https://kunjgit.github.io/GameZone/Games/Space_Gun/js/spaceship_favicon.js":"_assets/42f3d09738be434cc0b8.js","/GameZone/Games/Space_Gun/js/spaceship_favicon.js":"_assets/42f3d09738be434cc0b8.js","/Games/Space_Gun/js/spaceship_favicon.js":"_assets/42f3d09738be434cc0b8.js","/Space_Gun/js/spaceship_favicon.js":"_assets/42f3d09738be434cc0b8.js","/js/spaceship_favicon.js":"_assets/42f3d09738be434cc0b8.js","/spaceship_favicon.js":"_assets/42f3d09738be434cc0b8.js","https://kunjgit.github.io/GameZone/Games/Space_Gun/js/music.js":"_assets/59ca58504b0a65281b75.js","/GameZone/Games/Space_Gun/js/music.js":"_assets/59ca58504b0a65281b75.js","/Games/Space_Gun/js/music.js":"_assets/59ca58504b0a65281b75.js","/Space_Gun/js/music.js":"_assets/59ca58504b0a65281b75.js","/js/music.js":"_assets/59ca58504b0a65281b75.js","/music.js":"_assets/59ca58504b0a65281b75.js","https://kunjgit.github.io/GameZone/Games/Space_Gun/js/interface.js":"_assets/811e734bf5eab4de5304.js","/GameZone/Games/Space_Gun/js/interface.js":"_assets/811e734bf5eab4de5304.js","/Games/Space_Gun/js/interface.js":"_assets/811e734bf5eab4de5304.js","/Space_Gun/js/interface.js":"_assets/811e734bf5eab4de5304.js","/js/interface.js":"_assets/811e734bf5eab4de5304.js","/interface.js":"_assets/811e734bf5eab4de5304.js","https://kunjgit.github.io/GameZone/Games/Space_Gun/js/spaceship.js":"_assets/aacd3f86d9ad84c09e4b.js","/GameZone/Games/Space_Gun/js/spaceship.js":"_assets/aacd3f86d9ad84c09e4b.js","/Games/Space_Gun/js/spaceship.js":"_assets/aacd3f86d9ad84c09e4b.js","/Space_Gun/js/spaceship.js":"_assets/aacd3f86d9ad84c09e4b.js","/js/spaceship.js":"_assets/aacd3f86d9ad84c09e4b.js","/spaceship.js":"_assets/aacd3f86d9ad84c09e4b.js","https://kunjgit.github.io/GameZone/Games/Space_Gun/js/meteor.js":"_assets/37c938c78e290c08421a.js","/GameZone/Games/Space_Gun/js/meteor.js":"_assets/37c938c78e290c08421a.js","/Games/Space_Gun/js/meteor.js":"_assets/37c938c78e290c08421a.js","/Space_Gun/js/meteor.js":"_assets/37c938c78e290c08421a.js","/js/meteor.js":"_assets/37c938c78e290c08421a.js","/meteor.js":"_assets/37c938c78e290c08421a.js","https://kunjgit.github.io/GameZone/Games/Space_Gun/js/weapon.js":"_assets/d6c7e7e76547926fa625.js","/GameZone/Games/Space_Gun/js/weapon.js":"_assets/d6c7e7e76547926fa625.js","/Games/Space_Gun/js/weapon.js":"_assets/d6c7e7e76547926fa625.js","/Space_Gun/js/weapon.js":"_assets/d6c7e7e76547926fa625.js","/js/weapon.js":"_assets/d6c7e7e76547926fa625.js","/weapon.js":"_assets/d6c7e7e76547926fa625.js","https://kunjgit.github.io/GameZone/Games/Space_Gun/js/collision.js":"_assets/13917031c81e6383b93c.js","/GameZone/Games/Space_Gun/js/collision.js":"_assets/13917031c81e6383b93c.js","/Games/Space_Gun/js/collision.js":"_assets/13917031c81e6383b93c.js","/Space_Gun/js/collision.js":"_assets/13917031c81e6383b93c.js","/js/collision.js":"_assets/13917031c81e6383b93c.js","/collision.js":"_assets/13917031c81e6383b93c.js","https://kunjgit.github.io/GameZone/Games/Space_Gun/js/game.js":"_assets/64cfe7eeae36751e0145.js","/GameZone/Games/Space_Gun/js/game.js":"_assets/64cfe7eeae36751e0145.js","/Games/Space_Gun/js/game.js":"_assets/64cfe7eeae36751e0145.js","/Space_Gun/js/game.js":"_assets/64cfe7eeae36751e0145.js","/js/game.js":"_assets/64cfe7eeae36751e0145.js","/game.js":"_assets/64cfe7eeae36751e0145.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2"};
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
