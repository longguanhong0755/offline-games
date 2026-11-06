(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/ShroomKnight/js/resources.js":"_assets/f6f4fc57e7536f93b4d1.js","/GameZone/Games/ShroomKnight/js/resources.js":"_assets/f6f4fc57e7536f93b4d1.js","/Games/ShroomKnight/js/resources.js":"_assets/f6f4fc57e7536f93b4d1.js","/ShroomKnight/js/resources.js":"_assets/f6f4fc57e7536f93b4d1.js","/js/resources.js":"_assets/f6f4fc57e7536f93b4d1.js","/resources.js":"_assets/f6f4fc57e7536f93b4d1.js","https://kunjgit.github.io/GameZone/Games/ShroomKnight/css/app.css":"_assets/1a5aa79846de90e8e342.css","/GameZone/Games/ShroomKnight/css/app.css":"_assets/1a5aa79846de90e8e342.css","/Games/ShroomKnight/css/app.css":"_assets/1a5aa79846de90e8e342.css","/ShroomKnight/css/app.css":"_assets/1a5aa79846de90e8e342.css","/css/app.css":"_assets/1a5aa79846de90e8e342.css","/app.css":"_assets/1a5aa79846de90e8e342.css","https://kunjgit.github.io/GameZone/Games/ShroomKnight/js/input.js":"_assets/b1246f2d337843637d05.js","/GameZone/Games/ShroomKnight/js/input.js":"_assets/b1246f2d337843637d05.js","/Games/ShroomKnight/js/input.js":"_assets/b1246f2d337843637d05.js","/ShroomKnight/js/input.js":"_assets/b1246f2d337843637d05.js","/js/input.js":"_assets/b1246f2d337843637d05.js","/input.js":"_assets/b1246f2d337843637d05.js","https://kunjgit.github.io/GameZone/Games/ShroomKnight/js/sprite.js":"_assets/1ebe1c0f870dd64b1d0e.js","/GameZone/Games/ShroomKnight/js/sprite.js":"_assets/1ebe1c0f870dd64b1d0e.js","/Games/ShroomKnight/js/sprite.js":"_assets/1ebe1c0f870dd64b1d0e.js","/ShroomKnight/js/sprite.js":"_assets/1ebe1c0f870dd64b1d0e.js","/js/sprite.js":"_assets/1ebe1c0f870dd64b1d0e.js","/sprite.js":"_assets/1ebe1c0f870dd64b1d0e.js","https://kunjgit.github.io/GameZone/Games/ShroomKnight/js/app.js":"_assets/9f3097a8712a79ac70aa.js","/GameZone/Games/ShroomKnight/js/app.js":"_assets/9f3097a8712a79ac70aa.js","/Games/ShroomKnight/js/app.js":"_assets/9f3097a8712a79ac70aa.js","/ShroomKnight/js/app.js":"_assets/9f3097a8712a79ac70aa.js","/js/app.js":"_assets/9f3097a8712a79ac70aa.js","/app.js":"_assets/9f3097a8712a79ac70aa.js","https://kunjgit.github.io/GameZone/Games/ShroomKnight/img/tower.png":"_assets/fe1f8fe387f650cdb390.png","/GameZone/Games/ShroomKnight/img/tower.png":"_assets/fe1f8fe387f650cdb390.png","/Games/ShroomKnight/img/tower.png":"_assets/fe1f8fe387f650cdb390.png","/ShroomKnight/img/tower.png":"_assets/fe1f8fe387f650cdb390.png","/img/tower.png":"_assets/fe1f8fe387f650cdb390.png","/tower.png":"_assets/fe1f8fe387f650cdb390.png","https://kunjgit.github.io/GameZone/Games/ShroomKnight/img/sprites.png":"_assets/48dda9d012ce0f73f85c.png","/GameZone/Games/ShroomKnight/img/sprites.png":"_assets/48dda9d012ce0f73f85c.png","/Games/ShroomKnight/img/sprites.png":"_assets/48dda9d012ce0f73f85c.png","/ShroomKnight/img/sprites.png":"_assets/48dda9d012ce0f73f85c.png","/img/sprites.png":"_assets/48dda9d012ce0f73f85c.png","/sprites.png":"_assets/48dda9d012ce0f73f85c.png","https://kunjgit.github.io/GameZone/Games/ShroomKnight/img/hero.png":"_assets/111875115e221f80176b.png","/GameZone/Games/ShroomKnight/img/hero.png":"_assets/111875115e221f80176b.png","/Games/ShroomKnight/img/hero.png":"_assets/111875115e221f80176b.png","/ShroomKnight/img/hero.png":"_assets/111875115e221f80176b.png","/img/hero.png":"_assets/111875115e221f80176b.png","/hero.png":"_assets/111875115e221f80176b.png","https://kunjgit.github.io/GameZone/Games/ShroomKnight/img/spider.png":"_assets/13e5d6cc629dfe8e40ec.png","/GameZone/Games/ShroomKnight/img/spider.png":"_assets/13e5d6cc629dfe8e40ec.png","/Games/ShroomKnight/img/spider.png":"_assets/13e5d6cc629dfe8e40ec.png","/ShroomKnight/img/spider.png":"_assets/13e5d6cc629dfe8e40ec.png","/img/spider.png":"_assets/13e5d6cc629dfe8e40ec.png","/spider.png":"_assets/13e5d6cc629dfe8e40ec.png","https://kunjgit.github.io/GameZone/Games/ShroomKnight/img/bullet.png":"_assets/ac1c6f1095591dca80c3.png","/GameZone/Games/ShroomKnight/img/bullet.png":"_assets/ac1c6f1095591dca80c3.png","/Games/ShroomKnight/img/bullet.png":"_assets/ac1c6f1095591dca80c3.png","/ShroomKnight/img/bullet.png":"_assets/ac1c6f1095591dca80c3.png","/img/bullet.png":"_assets/ac1c6f1095591dca80c3.png","/bullet.png":"_assets/ac1c6f1095591dca80c3.png","https://kunjgit.github.io/GameZone/Games/ShroomKnight/img/terrain.png":"_assets/fa2b0582f68449d25daa.png","/GameZone/Games/ShroomKnight/img/terrain.png":"_assets/fa2b0582f68449d25daa.png","/Games/ShroomKnight/img/terrain.png":"_assets/fa2b0582f68449d25daa.png","/ShroomKnight/img/terrain.png":"_assets/fa2b0582f68449d25daa.png","/img/terrain.png":"_assets/fa2b0582f68449d25daa.png","/terrain.png":"_assets/fa2b0582f68449d25daa.png"};
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
