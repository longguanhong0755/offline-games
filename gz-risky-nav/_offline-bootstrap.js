(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Risky_Nav/assets/various.png":"_assets/e79034edc39d97b73308.png","/GameZone/Games/Risky_Nav/assets/various.png":"_assets/e79034edc39d97b73308.png","/Games/Risky_Nav/assets/various.png":"_assets/e79034edc39d97b73308.png","/Risky_Nav/assets/various.png":"_assets/e79034edc39d97b73308.png","/assets/various.png":"_assets/e79034edc39d97b73308.png","/various.png":"_assets/e79034edc39d97b73308.png","https://kunjgit.github.io/GameZone/Games/Risky_Nav/assets/player.png":"_assets/f867642c5e2757dd48ac.png","/GameZone/Games/Risky_Nav/assets/player.png":"_assets/f867642c5e2757dd48ac.png","/Games/Risky_Nav/assets/player.png":"_assets/f867642c5e2757dd48ac.png","/Risky_Nav/assets/player.png":"_assets/f867642c5e2757dd48ac.png","/assets/player.png":"_assets/f867642c5e2757dd48ac.png","/player.png":"_assets/f867642c5e2757dd48ac.png","https://kunjgit.github.io/GameZone/Games/Risky_Nav/assets/monster.png":"_assets/170bf76978a5486a3fbc.png","/GameZone/Games/Risky_Nav/assets/monster.png":"_assets/170bf76978a5486a3fbc.png","/Games/Risky_Nav/assets/monster.png":"_assets/170bf76978a5486a3fbc.png","/Risky_Nav/assets/monster.png":"_assets/170bf76978a5486a3fbc.png","/assets/monster.png":"_assets/170bf76978a5486a3fbc.png","/monster.png":"_assets/170bf76978a5486a3fbc.png","https://kunjgit.github.io/GameZone/Games/Risky_Nav/kontra.js":"_assets/3f1c3b385acd0eded43a.js","/GameZone/Games/Risky_Nav/kontra.js":"_assets/3f1c3b385acd0eded43a.js","/Games/Risky_Nav/kontra.js":"_assets/3f1c3b385acd0eded43a.js","/Risky_Nav/kontra.js":"_assets/3f1c3b385acd0eded43a.js","/kontra.js":"_assets/3f1c3b385acd0eded43a.js","https://kunjgit.github.io/GameZone/Games/Risky_Nav/Keys.js":"_assets/8b4c8a9fb8dddad62e22.js","/GameZone/Games/Risky_Nav/Keys.js":"_assets/8b4c8a9fb8dddad62e22.js","/Games/Risky_Nav/Keys.js":"_assets/8b4c8a9fb8dddad62e22.js","/Risky_Nav/Keys.js":"_assets/8b4c8a9fb8dddad62e22.js","/Keys.js":"_assets/8b4c8a9fb8dddad62e22.js","https://kunjgit.github.io/GameZone/Games/Risky_Nav/Char.js":"_assets/85bf2b33bc2ecec16382.js","/GameZone/Games/Risky_Nav/Char.js":"_assets/85bf2b33bc2ecec16382.js","/Games/Risky_Nav/Char.js":"_assets/85bf2b33bc2ecec16382.js","/Risky_Nav/Char.js":"_assets/85bf2b33bc2ecec16382.js","/Char.js":"_assets/85bf2b33bc2ecec16382.js","https://kunjgit.github.io/GameZone/Games/Risky_Nav/PathFinding.js":"_assets/70b4f42324c80369bbe0.js","/GameZone/Games/Risky_Nav/PathFinding.js":"_assets/70b4f42324c80369bbe0.js","/Games/Risky_Nav/PathFinding.js":"_assets/70b4f42324c80369bbe0.js","/Risky_Nav/PathFinding.js":"_assets/70b4f42324c80369bbe0.js","/PathFinding.js":"_assets/70b4f42324c80369bbe0.js","https://kunjgit.github.io/GameZone/Games/Risky_Nav/init.js":"_assets/273e6d5baa67275bc03f.js","/GameZone/Games/Risky_Nav/init.js":"_assets/273e6d5baa67275bc03f.js","/Games/Risky_Nav/init.js":"_assets/273e6d5baa67275bc03f.js","/Risky_Nav/init.js":"_assets/273e6d5baa67275bc03f.js","/init.js":"_assets/273e6d5baa67275bc03f.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2"};
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
