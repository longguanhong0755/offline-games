(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/css/rpg-awesome.min.css":"_assets/444bf79dabe1e138d5a0.css","/GameZone/Games/Dungeon_Crawler/assets/css/rpg-awesome.min.css":"_assets/444bf79dabe1e138d5a0.css","/Games/Dungeon_Crawler/assets/css/rpg-awesome.min.css":"_assets/444bf79dabe1e138d5a0.css","/Dungeon_Crawler/assets/css/rpg-awesome.min.css":"_assets/444bf79dabe1e138d5a0.css","/assets/css/rpg-awesome.min.css":"_assets/444bf79dabe1e138d5a0.css","/css/rpg-awesome.min.css":"_assets/444bf79dabe1e138d5a0.css","/rpg-awesome.min.css":"_assets/444bf79dabe1e138d5a0.css","https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/css/style.css":"_assets/b2b133250a86971af91c.css","/GameZone/Games/Dungeon_Crawler/assets/css/style.css":"_assets/b2b133250a86971af91c.css","/Games/Dungeon_Crawler/assets/css/style.css":"_assets/b2b133250a86971af91c.css","/Dungeon_Crawler/assets/css/style.css":"_assets/b2b133250a86971af91c.css","/assets/css/style.css":"_assets/b2b133250a86971af91c.css","/css/style.css":"_assets/b2b133250a86971af91c.css","/style.css":"_assets/b2b133250a86971af91c.css","https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/css/all.min.css":"_assets/6752b9ba151a25703b2e.css","/GameZone/Games/Dungeon_Crawler/assets/css/all.min.css":"_assets/6752b9ba151a25703b2e.css","/Games/Dungeon_Crawler/assets/css/all.min.css":"_assets/6752b9ba151a25703b2e.css","/Dungeon_Crawler/assets/css/all.min.css":"_assets/6752b9ba151a25703b2e.css","/assets/css/all.min.css":"_assets/6752b9ba151a25703b2e.css","/css/all.min.css":"_assets/6752b9ba151a25703b2e.css","/all.min.css":"_assets/6752b9ba151a25703b2e.css","https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/js/utility.js":"_assets/ed29edd435d9f65aade8.js","/GameZone/Games/Dungeon_Crawler/assets/js/utility.js":"_assets/ed29edd435d9f65aade8.js","/Games/Dungeon_Crawler/assets/js/utility.js":"_assets/ed29edd435d9f65aade8.js","/Dungeon_Crawler/assets/js/utility.js":"_assets/ed29edd435d9f65aade8.js","/assets/js/utility.js":"_assets/ed29edd435d9f65aade8.js","/js/utility.js":"_assets/ed29edd435d9f65aade8.js","/utility.js":"_assets/ed29edd435d9f65aade8.js","https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/js/music.js":"_assets/397e0a7b06a562746517.js","/GameZone/Games/Dungeon_Crawler/assets/js/music.js":"_assets/397e0a7b06a562746517.js","/Games/Dungeon_Crawler/assets/js/music.js":"_assets/397e0a7b06a562746517.js","/Dungeon_Crawler/assets/js/music.js":"_assets/397e0a7b06a562746517.js","/assets/js/music.js":"_assets/397e0a7b06a562746517.js","/js/music.js":"_assets/397e0a7b06a562746517.js","/music.js":"_assets/397e0a7b06a562746517.js","https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/js/howler.min.js":"_assets/0febfd99e2733b690eca.js","/GameZone/Games/Dungeon_Crawler/assets/js/howler.min.js":"_assets/0febfd99e2733b690eca.js","/Games/Dungeon_Crawler/assets/js/howler.min.js":"_assets/0febfd99e2733b690eca.js","/Dungeon_Crawler/assets/js/howler.min.js":"_assets/0febfd99e2733b690eca.js","/assets/js/howler.min.js":"_assets/0febfd99e2733b690eca.js","/js/howler.min.js":"_assets/0febfd99e2733b690eca.js","/howler.min.js":"_assets/0febfd99e2733b690eca.js","https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/js/elements.js":"_assets/92b6dee42cea350a3fe6.js","/GameZone/Games/Dungeon_Crawler/assets/js/elements.js":"_assets/92b6dee42cea350a3fe6.js","/Games/Dungeon_Crawler/assets/js/elements.js":"_assets/92b6dee42cea350a3fe6.js","/Dungeon_Crawler/assets/js/elements.js":"_assets/92b6dee42cea350a3fe6.js","/assets/js/elements.js":"_assets/92b6dee42cea350a3fe6.js","/js/elements.js":"_assets/92b6dee42cea350a3fe6.js","/elements.js":"_assets/92b6dee42cea350a3fe6.js","https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/js/equipment.js":"_assets/3b5c32062aa9c4b70e8d.js","/GameZone/Games/Dungeon_Crawler/assets/js/equipment.js":"_assets/3b5c32062aa9c4b70e8d.js","/Games/Dungeon_Crawler/assets/js/equipment.js":"_assets/3b5c32062aa9c4b70e8d.js","/Dungeon_Crawler/assets/js/equipment.js":"_assets/3b5c32062aa9c4b70e8d.js","/assets/js/equipment.js":"_assets/3b5c32062aa9c4b70e8d.js","/js/equipment.js":"_assets/3b5c32062aa9c4b70e8d.js","/equipment.js":"_assets/3b5c32062aa9c4b70e8d.js","https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/js/combat.js":"_assets/839edda00775ac3e0f92.js","/GameZone/Games/Dungeon_Crawler/assets/js/combat.js":"_assets/839edda00775ac3e0f92.js","/Games/Dungeon_Crawler/assets/js/combat.js":"_assets/839edda00775ac3e0f92.js","/Dungeon_Crawler/assets/js/combat.js":"_assets/839edda00775ac3e0f92.js","/assets/js/combat.js":"_assets/839edda00775ac3e0f92.js","/js/combat.js":"_assets/839edda00775ac3e0f92.js","/combat.js":"_assets/839edda00775ac3e0f92.js","https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/js/player.js":"_assets/f5b9789fd9a560b8fda1.js","/GameZone/Games/Dungeon_Crawler/assets/js/player.js":"_assets/f5b9789fd9a560b8fda1.js","/Games/Dungeon_Crawler/assets/js/player.js":"_assets/f5b9789fd9a560b8fda1.js","/Dungeon_Crawler/assets/js/player.js":"_assets/f5b9789fd9a560b8fda1.js","/assets/js/player.js":"_assets/f5b9789fd9a560b8fda1.js","/js/player.js":"_assets/f5b9789fd9a560b8fda1.js","/player.js":"_assets/f5b9789fd9a560b8fda1.js","https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/js/dungeon.js":"_assets/ed0d1428cc56e2e30492.js","/GameZone/Games/Dungeon_Crawler/assets/js/dungeon.js":"_assets/ed0d1428cc56e2e30492.js","/Games/Dungeon_Crawler/assets/js/dungeon.js":"_assets/ed0d1428cc56e2e30492.js","/Dungeon_Crawler/assets/js/dungeon.js":"_assets/ed0d1428cc56e2e30492.js","/assets/js/dungeon.js":"_assets/ed0d1428cc56e2e30492.js","/js/dungeon.js":"_assets/ed0d1428cc56e2e30492.js","/dungeon.js":"_assets/ed0d1428cc56e2e30492.js","https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/js/enemy.js":"_assets/49a360fc01d4836fc9cf.js","/GameZone/Games/Dungeon_Crawler/assets/js/enemy.js":"_assets/49a360fc01d4836fc9cf.js","/Games/Dungeon_Crawler/assets/js/enemy.js":"_assets/49a360fc01d4836fc9cf.js","/Dungeon_Crawler/assets/js/enemy.js":"_assets/49a360fc01d4836fc9cf.js","/assets/js/enemy.js":"_assets/49a360fc01d4836fc9cf.js","/js/enemy.js":"_assets/49a360fc01d4836fc9cf.js","/enemy.js":"_assets/49a360fc01d4836fc9cf.js","https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/js/main.js":"_assets/95d42df1fdc19fd706fb.js","/GameZone/Games/Dungeon_Crawler/assets/js/main.js":"_assets/95d42df1fdc19fd706fb.js","/Games/Dungeon_Crawler/assets/js/main.js":"_assets/95d42df1fdc19fd706fb.js","/Dungeon_Crawler/assets/js/main.js":"_assets/95d42df1fdc19fd706fb.js","/assets/js/main.js":"_assets/95d42df1fdc19fd706fb.js","/js/main.js":"_assets/95d42df1fdc19fd706fb.js","/main.js":"_assets/95d42df1fdc19fd706fb.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://kunjgit.github.io/GameZone/Games/Dungeon_Crawler/assets/webfonts/fa-solid-900.woff2":"_assets/8f06540fd77f1effe1e2.woff2","/GameZone/Games/Dungeon_Crawler/assets/webfonts/fa-solid-900.woff2":"_assets/8f06540fd77f1effe1e2.woff2","/Games/Dungeon_Crawler/assets/webfonts/fa-solid-900.woff2":"_assets/8f06540fd77f1effe1e2.woff2","/Dungeon_Crawler/assets/webfonts/fa-solid-900.woff2":"_assets/8f06540fd77f1effe1e2.woff2","/assets/webfonts/fa-solid-900.woff2":"_assets/8f06540fd77f1effe1e2.woff2","/webfonts/fa-solid-900.woff2":"_assets/8f06540fd77f1effe1e2.woff2","/fa-solid-900.woff2":"_assets/8f06540fd77f1effe1e2.woff2"};
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
