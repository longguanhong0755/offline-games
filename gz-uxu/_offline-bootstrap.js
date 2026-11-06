(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Uxu/game.js":"_assets/311a21eb60893fcb4851.js","/GameZone/Games/Uxu/game.js":"_assets/311a21eb60893fcb4851.js","/Games/Uxu/game.js":"_assets/311a21eb60893fcb4851.js","/Uxu/game.js":"_assets/311a21eb60893fcb4851.js","/game.js":"_assets/311a21eb60893fcb4851.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://kunjgit.github.io/GameZone/Games/Uxu/mount.png":"_assets/2b6b1a5b2d1abf5d1e13.png","/GameZone/Games/Uxu/mount.png":"_assets/2b6b1a5b2d1abf5d1e13.png","/Games/Uxu/mount.png":"_assets/2b6b1a5b2d1abf5d1e13.png","/Uxu/mount.png":"_assets/2b6b1a5b2d1abf5d1e13.png","/mount.png":"_assets/2b6b1a5b2d1abf5d1e13.png","https://kunjgit.github.io/GameZone/Games/Uxu/bomb.png":"_assets/4adcd0d2f475313bcd7e.png","/GameZone/Games/Uxu/bomb.png":"_assets/4adcd0d2f475313bcd7e.png","/Games/Uxu/bomb.png":"_assets/4adcd0d2f475313bcd7e.png","/Uxu/bomb.png":"_assets/4adcd0d2f475313bcd7e.png","/bomb.png":"_assets/4adcd0d2f475313bcd7e.png","https://kunjgit.github.io/GameZone/Games/Uxu/charac2.png":"_assets/000bd09f63afcc31eec0.png","/GameZone/Games/Uxu/charac2.png":"_assets/000bd09f63afcc31eec0.png","/Games/Uxu/charac2.png":"_assets/000bd09f63afcc31eec0.png","/Uxu/charac2.png":"_assets/000bd09f63afcc31eec0.png","/charac2.png":"_assets/000bd09f63afcc31eec0.png","https://kunjgit.github.io/GameZone/Games/Uxu/tower.png":"_assets/17e09a3b54ccd62e6309.png","/GameZone/Games/Uxu/tower.png":"_assets/17e09a3b54ccd62e6309.png","/Games/Uxu/tower.png":"_assets/17e09a3b54ccd62e6309.png","/Uxu/tower.png":"_assets/17e09a3b54ccd62e6309.png","/tower.png":"_assets/17e09a3b54ccd62e6309.png","https://kunjgit.github.io/GameZone/Games/Uxu/cloud.png":"_assets/5d439ac482c06b799e3a.png","/GameZone/Games/Uxu/cloud.png":"_assets/5d439ac482c06b799e3a.png","/Games/Uxu/cloud.png":"_assets/5d439ac482c06b799e3a.png","/Uxu/cloud.png":"_assets/5d439ac482c06b799e3a.png","/cloud.png":"_assets/5d439ac482c06b799e3a.png","https://kunjgit.github.io/GameZone/Games/Uxu/explo2.png":"_assets/f6c0bf08015c6803fafd.png","/GameZone/Games/Uxu/explo2.png":"_assets/f6c0bf08015c6803fafd.png","/Games/Uxu/explo2.png":"_assets/f6c0bf08015c6803fafd.png","/Uxu/explo2.png":"_assets/f6c0bf08015c6803fafd.png","/explo2.png":"_assets/f6c0bf08015c6803fafd.png","https://kunjgit.github.io/GameZone/Games/Uxu/explo3.png":"_assets/c6b39a0b1101508a9209.png","/GameZone/Games/Uxu/explo3.png":"_assets/c6b39a0b1101508a9209.png","/Games/Uxu/explo3.png":"_assets/c6b39a0b1101508a9209.png","/Uxu/explo3.png":"_assets/c6b39a0b1101508a9209.png","/explo3.png":"_assets/c6b39a0b1101508a9209.png","https://kunjgit.github.io/GameZone/Games/Uxu/explo4.png":"_assets/c97ad6c55c0019ba692e.png","/GameZone/Games/Uxu/explo4.png":"_assets/c97ad6c55c0019ba692e.png","/Games/Uxu/explo4.png":"_assets/c97ad6c55c0019ba692e.png","/Uxu/explo4.png":"_assets/c97ad6c55c0019ba692e.png","/explo4.png":"_assets/c97ad6c55c0019ba692e.png","https://kunjgit.github.io/GameZone/Games/Uxu/explo0.png":"_assets/2e496f34782bf38d6fd0.png","/GameZone/Games/Uxu/explo0.png":"_assets/2e496f34782bf38d6fd0.png","/Games/Uxu/explo0.png":"_assets/2e496f34782bf38d6fd0.png","/Uxu/explo0.png":"_assets/2e496f34782bf38d6fd0.png","/explo0.png":"_assets/2e496f34782bf38d6fd0.png","https://kunjgit.github.io/GameZone/Games/Uxu/explo1.png":"_assets/5aa88e33ded2acf204db.png","/GameZone/Games/Uxu/explo1.png":"_assets/5aa88e33ded2acf204db.png","/Games/Uxu/explo1.png":"_assets/5aa88e33ded2acf204db.png","/Uxu/explo1.png":"_assets/5aa88e33ded2acf204db.png","/explo1.png":"_assets/5aa88e33ded2acf204db.png","https://kunjgit.github.io/GameZone/Games/Uxu/key.png":"_assets/dd2a2e1fb864139df155.png","/GameZone/Games/Uxu/key.png":"_assets/dd2a2e1fb864139df155.png","/Games/Uxu/key.png":"_assets/dd2a2e1fb864139df155.png","/Uxu/key.png":"_assets/dd2a2e1fb864139df155.png","/key.png":"_assets/dd2a2e1fb864139df155.png","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2"};
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
