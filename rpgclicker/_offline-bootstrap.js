(() => {
  "use strict";
  const RUNTIME_MAP = {"http://onsubmit.github.io/RPGClicker/js/jquery-1.11.1.min.js":"_assets/540bc6dec1dd4b92ea4d.js","/RPGClicker/js/jquery-1.11.1.min.js":"_assets/540bc6dec1dd4b92ea4d.js","/js/jquery-1.11.1.min.js":"_assets/540bc6dec1dd4b92ea4d.js","/jquery-1.11.1.min.js":"_assets/540bc6dec1dd4b92ea4d.js","http://onsubmit.github.io/RPGClicker/js/equipment.js":"_assets/acff08f9cafbccf60db2.js","/RPGClicker/js/equipment.js":"_assets/acff08f9cafbccf60db2.js","/js/equipment.js":"_assets/acff08f9cafbccf60db2.js","/equipment.js":"_assets/acff08f9cafbccf60db2.js","http://onsubmit.github.io/RPGClicker/js/armor.js":"_assets/73a685c43107efcb6050.js","/RPGClicker/js/armor.js":"_assets/73a685c43107efcb6050.js","/js/armor.js":"_assets/73a685c43107efcb6050.js","/armor.js":"_assets/73a685c43107efcb6050.js","http://onsubmit.github.io/RPGClicker/js/enemy.js":"_assets/9d797bd5e3e57990058f.js","/RPGClicker/js/enemy.js":"_assets/9d797bd5e3e57990058f.js","/js/enemy.js":"_assets/9d797bd5e3e57990058f.js","/enemy.js":"_assets/9d797bd5e3e57990058f.js","http://onsubmit.github.io/RPGClicker/styles/styles.css":"_assets/8cee6b9f05e93037ebbf.css","/RPGClicker/styles/styles.css":"_assets/8cee6b9f05e93037ebbf.css","/styles/styles.css":"_assets/8cee6b9f05e93037ebbf.css","/styles.css":"_assets/8cee6b9f05e93037ebbf.css","http://onsubmit.github.io/RPGClicker/js/weapon.js":"_assets/a2266962786cde64cfa3.js","/RPGClicker/js/weapon.js":"_assets/a2266962786cde64cfa3.js","/js/weapon.js":"_assets/a2266962786cde64cfa3.js","/weapon.js":"_assets/a2266962786cde64cfa3.js","http://onsubmit.github.io/RPGClicker/js/inventory.js":"_assets/d4f40995eb740c64c17d.js","/RPGClicker/js/inventory.js":"_assets/d4f40995eb740c64c17d.js","/js/inventory.js":"_assets/d4f40995eb740c64c17d.js","/inventory.js":"_assets/d4f40995eb740c64c17d.js","http://onsubmit.github.io/RPGClicker/js/game.js":"_assets/d5cfc47ff0da875a20f5.js","/RPGClicker/js/game.js":"_assets/d5cfc47ff0da875a20f5.js","/js/game.js":"_assets/d5cfc47ff0da875a20f5.js","/game.js":"_assets/d5cfc47ff0da875a20f5.js","http://onsubmit.github.io/RPGClicker/js/player.js":"_assets/58d857ff87449e32e1f0.js","/RPGClicker/js/player.js":"_assets/58d857ff87449e32e1f0.js","/js/player.js":"_assets/58d857ff87449e32e1f0.js","/player.js":"_assets/58d857ff87449e32e1f0.js","http://onsubmit.github.io/RPGClicker/js/entity.js":"_assets/752b7c9ce1fd8c821df6.js","/RPGClicker/js/entity.js":"_assets/752b7c9ce1fd8c821df6.js","/js/entity.js":"_assets/752b7c9ce1fd8c821df6.js","/entity.js":"_assets/752b7c9ce1fd8c821df6.js","http://onsubmit.github.io/RPGClicker/js/enemies.js":"_assets/e0ad2eeef8ac523fc16c.js","/RPGClicker/js/enemies.js":"_assets/e0ad2eeef8ac523fc16c.js","/js/enemies.js":"_assets/e0ad2eeef8ac523fc16c.js","/enemies.js":"_assets/e0ad2eeef8ac523fc16c.js"};
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
