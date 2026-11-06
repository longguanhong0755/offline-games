(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Death_by_Hamster/letters.js":"_assets/4a77947a279b154fcdaa.js","/GameZone/Games/Death_by_Hamster/letters.js":"_assets/4a77947a279b154fcdaa.js","/Games/Death_by_Hamster/letters.js":"_assets/4a77947a279b154fcdaa.js","/Death_by_Hamster/letters.js":"_assets/4a77947a279b154fcdaa.js","/letters.js":"_assets/4a77947a279b154fcdaa.js","https://kunjgit.github.io/GameZone/Games/Death_by_Hamster/lzs.js":"_assets/1036d41f2b1044113c82.js","/GameZone/Games/Death_by_Hamster/lzs.js":"_assets/1036d41f2b1044113c82.js","/Games/Death_by_Hamster/lzs.js":"_assets/1036d41f2b1044113c82.js","/Death_by_Hamster/lzs.js":"_assets/1036d41f2b1044113c82.js","/lzs.js":"_assets/1036d41f2b1044113c82.js","https://kunjgit.github.io/GameZone/Games/Death_by_Hamster/game.js":"_assets/c6ea1ea4759a572294f0.js","/GameZone/Games/Death_by_Hamster/game.js":"_assets/c6ea1ea4759a572294f0.js","/Games/Death_by_Hamster/game.js":"_assets/c6ea1ea4759a572294f0.js","/Death_by_Hamster/game.js":"_assets/c6ea1ea4759a572294f0.js","/game.js":"_assets/c6ea1ea4759a572294f0.js","https://kunjgit.github.io/GameZone/Games/Death_by_Hamster/aimerthing.png":"_assets/fcb7a91b2bd2ce2233b0.png","/GameZone/Games/Death_by_Hamster/aimerthing.png":"_assets/fcb7a91b2bd2ce2233b0.png","/Games/Death_by_Hamster/aimerthing.png":"_assets/fcb7a91b2bd2ce2233b0.png","/Death_by_Hamster/aimerthing.png":"_assets/fcb7a91b2bd2ce2233b0.png","/aimerthing.png":"_assets/fcb7a91b2bd2ce2233b0.png","https://kunjgit.github.io/GameZone/Games/Death_by_Hamster/t.png":"_assets/f39a7e3caa5db89154c1.png","/GameZone/Games/Death_by_Hamster/t.png":"_assets/f39a7e3caa5db89154c1.png","/Games/Death_by_Hamster/t.png":"_assets/f39a7e3caa5db89154c1.png","/Death_by_Hamster/t.png":"_assets/f39a7e3caa5db89154c1.png","/t.png":"_assets/f39a7e3caa5db89154c1.png","https://kunjgit.github.io/GameZone/Games/Death_by_Hamster/cursor.png":"_assets/eaad5b86190e0abc007b.png","/GameZone/Games/Death_by_Hamster/cursor.png":"_assets/eaad5b86190e0abc007b.png","/Games/Death_by_Hamster/cursor.png":"_assets/eaad5b86190e0abc007b.png","/Death_by_Hamster/cursor.png":"_assets/eaad5b86190e0abc007b.png","/cursor.png":"_assets/eaad5b86190e0abc007b.png","https://kunjgit.github.io/GameZone/Games/Death_by_Hamster/gun.png":"_assets/a195ae59c9b506f566a1.png","/GameZone/Games/Death_by_Hamster/gun.png":"_assets/a195ae59c9b506f566a1.png","/Games/Death_by_Hamster/gun.png":"_assets/a195ae59c9b506f566a1.png","/Death_by_Hamster/gun.png":"_assets/a195ae59c9b506f566a1.png","/gun.png":"_assets/a195ae59c9b506f566a1.png","https://kunjgit.github.io/GameZone/Games/Death_by_Hamster/hamster.png":"_assets/1ed75b2f7e530b82b91e.png","/GameZone/Games/Death_by_Hamster/hamster.png":"_assets/1ed75b2f7e530b82b91e.png","/Games/Death_by_Hamster/hamster.png":"_assets/1ed75b2f7e530b82b91e.png","/Death_by_Hamster/hamster.png":"_assets/1ed75b2f7e530b82b91e.png","/hamster.png":"_assets/1ed75b2f7e530b82b91e.png","https://kunjgit.github.io/GameZone/Games/Death_by_Hamster/human.png":"_assets/22ab213a130a9c8fca9c.png","/GameZone/Games/Death_by_Hamster/human.png":"_assets/22ab213a130a9c8fca9c.png","/Games/Death_by_Hamster/human.png":"_assets/22ab213a130a9c8fca9c.png","/Death_by_Hamster/human.png":"_assets/22ab213a130a9c8fca9c.png","/human.png":"_assets/22ab213a130a9c8fca9c.png","https://kunjgit.github.io/GameZone/Games/Death_by_Hamster/blip.mp3":"_assets/c30bf527f1c63dfd8e71.mp3","/GameZone/Games/Death_by_Hamster/blip.mp3":"_assets/c30bf527f1c63dfd8e71.mp3","/Games/Death_by_Hamster/blip.mp3":"_assets/c30bf527f1c63dfd8e71.mp3","/Death_by_Hamster/blip.mp3":"_assets/c30bf527f1c63dfd8e71.mp3","/blip.mp3":"_assets/c30bf527f1c63dfd8e71.mp3","https://kunjgit.github.io/GameZone/Games/Death_by_Hamster/arw.png":"_assets/a560213237eb7ecccc6e.png","/GameZone/Games/Death_by_Hamster/arw.png":"_assets/a560213237eb7ecccc6e.png","/Games/Death_by_Hamster/arw.png":"_assets/a560213237eb7ecccc6e.png","/Death_by_Hamster/arw.png":"_assets/a560213237eb7ecccc6e.png","/arw.png":"_assets/a560213237eb7ecccc6e.png"};
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
