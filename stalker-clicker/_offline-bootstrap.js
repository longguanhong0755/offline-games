(() => {
  "use strict";
  const RUNTIME_MAP = {"https://papugaxx.github.io/stalker-clicker/styles.css":"_assets/db4f457816a99afb59d6.css","/stalker-clicker/styles.css":"_assets/db4f457816a99afb59d6.css","/styles.css":"_assets/db4f457816a99afb59d6.css","https://papugaxx.github.io/stalker-clicker/assets/icon_ru.png":"_assets/f5a85f7c7f49449a4688.png","/stalker-clicker/assets/icon_ru.png":"_assets/f5a85f7c7f49449a4688.png","/assets/icon_ru.png":"_assets/f5a85f7c7f49449a4688.png","/icon_ru.png":"_assets/f5a85f7c7f49449a4688.png","https://papugaxx.github.io/stalker-clicker/js/main.js":"_assets/f14871bfb6e80bbe407c.js","/stalker-clicker/js/main.js":"_assets/f14871bfb6e80bbe407c.js","/js/main.js":"_assets/f14871bfb6e80bbe407c.js","/main.js":"_assets/f14871bfb6e80bbe407c.js","https://fonts.googleapis.com/css2?family=Russo+One&family=Share+Tech+Mono&display=swap":"_assets/79b5292857864840ad96.css","/css2":"_assets/79b5292857864840ad96.css","/css2?family=Russo+One&family=Share+Tech+Mono&display=swap":"_assets/79b5292857864840ad96.css","https://fonts.googleapis.com/css2":"_assets/79b5292857864840ad96.css","https://papugaxx.github.io/stalker-clicker/assets/icon_knife.png":"_assets/6c63c7728b0b99943523.png","/stalker-clicker/assets/icon_knife.png":"_assets/6c63c7728b0b99943523.png","/assets/icon_knife.png":"_assets/6c63c7728b0b99943523.png","/icon_knife.png":"_assets/6c63c7728b0b99943523.png","https://papugaxx.github.io/stalker-clicker/assets/cursor_hand.gif":"_assets/bbd7686590b8607f95cb.gif","/stalker-clicker/assets/cursor_hand.gif":"_assets/bbd7686590b8607f95cb.gif","/assets/cursor_hand.gif":"_assets/bbd7686590b8607f95cb.gif","/cursor_hand.gif":"_assets/bbd7686590b8607f95cb.gif","https://papugaxx.github.io/stalker-clicker/assets/sounds/click.mp3":"_assets/dcb3c68f0c0774fab559.mp3","/stalker-clicker/assets/sounds/click.mp3":"_assets/dcb3c68f0c0774fab559.mp3","/assets/sounds/click.mp3":"_assets/dcb3c68f0c0774fab559.mp3","/sounds/click.mp3":"_assets/dcb3c68f0c0774fab559.mp3","/click.mp3":"_assets/dcb3c68f0c0774fab559.mp3","https://papugaxx.github.io/stalker-clicker/assets/sounds/daily_bonus.mp3":"_assets/3ddfc975984c01135d07.mp3","/stalker-clicker/assets/sounds/daily_bonus.mp3":"_assets/3ddfc975984c01135d07.mp3","/assets/sounds/daily_bonus.mp3":"_assets/3ddfc975984c01135d07.mp3","/sounds/daily_bonus.mp3":"_assets/3ddfc975984c01135d07.mp3","/daily_bonus.mp3":"_assets/3ddfc975984c01135d07.mp3","https://papugaxx.github.io/stalker-clicker/js/ui.js":"_assets/f526b2def9c9cf29ae34.js","/stalker-clicker/js/ui.js":"_assets/f526b2def9c9cf29ae34.js","/js/ui.js":"_assets/f526b2def9c9cf29ae34.js","/ui.js":"_assets/f526b2def9c9cf29ae34.js","https://papugaxx.github.io/stalker-clicker/js/storage.js":"_assets/4686c2e5c5b363c8f116.js","/stalker-clicker/js/storage.js":"_assets/4686c2e5c5b363c8f116.js","/js/storage.js":"_assets/4686c2e5c5b363c8f116.js","/storage.js":"_assets/4686c2e5c5b363c8f116.js","https://papugaxx.github.io/stalker-clicker/js/audio.js":"_assets/f57d5f279d69cdf5fb0a.js","/stalker-clicker/js/audio.js":"_assets/f57d5f279d69cdf5fb0a.js","/js/audio.js":"_assets/f57d5f279d69cdf5fb0a.js","/audio.js":"_assets/f57d5f279d69cdf5fb0a.js","https://papugaxx.github.io/stalker-clicker/js/systems.js":"_assets/b3ac8466086b8ab9e8f7.js","/stalker-clicker/js/systems.js":"_assets/b3ac8466086b8ab9e8f7.js","/js/systems.js":"_assets/b3ac8466086b8ab9e8f7.js","/systems.js":"_assets/b3ac8466086b8ab9e8f7.js","https://papugaxx.github.io/stalker-clicker/js/gameLogic.js":"_assets/5158451805add5c7b409.js","/stalker-clicker/js/gameLogic.js":"_assets/5158451805add5c7b409.js","/js/gameLogic.js":"_assets/5158451805add5c7b409.js","/gameLogic.js":"_assets/5158451805add5c7b409.js","https://papugaxx.github.io/stalker-clicker/js/state.js":"_assets/ef15aaa0d96c889ff8da.js","/stalker-clicker/js/state.js":"_assets/ef15aaa0d96c889ff8da.js","/js/state.js":"_assets/ef15aaa0d96c889ff8da.js","/state.js":"_assets/ef15aaa0d96c889ff8da.js","https://papugaxx.github.io/stalker-clicker/assets/icon_shield.png":"_assets/d70b15eb0b18c134c6d8.png","/stalker-clicker/assets/icon_shield.png":"_assets/d70b15eb0b18c134c6d8.png","/assets/icon_shield.png":"_assets/d70b15eb0b18c134c6d8.png","/icon_shield.png":"_assets/d70b15eb0b18c134c6d8.png","https://papugaxx.github.io/stalker-clicker/assets/sounds/buy.mp3":"_assets/08ba6361aae001c237a7.mp3","/stalker-clicker/assets/sounds/buy.mp3":"_assets/08ba6361aae001c237a7.mp3","/assets/sounds/buy.mp3":"_assets/08ba6361aae001c237a7.mp3","/sounds/buy.mp3":"_assets/08ba6361aae001c237a7.mp3","/buy.mp3":"_assets/08ba6361aae001c237a7.mp3","https://fonts.gstatic.com/s/sharetechmono/v16/J7aHnp1uDWRBEqV98dVQztYldFcLowEF.woff2":"_assets/41e6b9f297f7d9a2df2a.woff2","/s/sharetechmono/v16/J7aHnp1uDWRBEqV98dVQztYldFcLowEF.woff2":"_assets/41e6b9f297f7d9a2df2a.woff2","/sharetechmono/v16/J7aHnp1uDWRBEqV98dVQztYldFcLowEF.woff2":"_assets/41e6b9f297f7d9a2df2a.woff2","/v16/J7aHnp1uDWRBEqV98dVQztYldFcLowEF.woff2":"_assets/41e6b9f297f7d9a2df2a.woff2","/J7aHnp1uDWRBEqV98dVQztYldFcLowEF.woff2":"_assets/41e6b9f297f7d9a2df2a.woff2","https://fonts.gstatic.com/s/russoone/v18/Z9XUDmZRWg6M1LvRYsHOz8mJ.woff2":"_assets/8a6b754cd3bc5ad2bf0d.woff2","/s/russoone/v18/Z9XUDmZRWg6M1LvRYsHOz8mJ.woff2":"_assets/8a6b754cd3bc5ad2bf0d.woff2","/russoone/v18/Z9XUDmZRWg6M1LvRYsHOz8mJ.woff2":"_assets/8a6b754cd3bc5ad2bf0d.woff2","/v18/Z9XUDmZRWg6M1LvRYsHOz8mJ.woff2":"_assets/8a6b754cd3bc5ad2bf0d.woff2","/Z9XUDmZRWg6M1LvRYsHOz8mJ.woff2":"_assets/8a6b754cd3bc5ad2bf0d.woff2","https://fonts.gstatic.com/s/russoone/v18/Z9XUDmZRWg6M1LvRYsHOy8mJrrg.woff2":"_assets/ae0eadf1b084ac50848e.woff2","/s/russoone/v18/Z9XUDmZRWg6M1LvRYsHOy8mJrrg.woff2":"_assets/ae0eadf1b084ac50848e.woff2","/russoone/v18/Z9XUDmZRWg6M1LvRYsHOy8mJrrg.woff2":"_assets/ae0eadf1b084ac50848e.woff2","/v18/Z9XUDmZRWg6M1LvRYsHOy8mJrrg.woff2":"_assets/ae0eadf1b084ac50848e.woff2","/Z9XUDmZRWg6M1LvRYsHOy8mJrrg.woff2":"_assets/ae0eadf1b084ac50848e.woff2","https://papugaxx.github.io/stalker-clicker/assets/art_stoneflower.png":"_assets/947a2b066622008e90a0.png","/stalker-clicker/assets/art_stoneflower.png":"_assets/947a2b066622008e90a0.png","/assets/art_stoneflower.png":"_assets/947a2b066622008e90a0.png","/art_stoneflower.png":"_assets/947a2b066622008e90a0.png","https://papugaxx.github.io/stalker-clicker/assets/art_jellyfish.png":"_assets/d087a5af380983aa5fe4.png","/stalker-clicker/assets/art_jellyfish.png":"_assets/d087a5af380983aa5fe4.png","/assets/art_jellyfish.png":"_assets/d087a5af380983aa5fe4.png","/art_jellyfish.png":"_assets/d087a5af380983aa5fe4.png","https://papugaxx.github.io/stalker-clicker/assets/icon_stash.png":"_assets/f7d7934d8799c5db8a52.png","/stalker-clicker/assets/icon_stash.png":"_assets/f7d7934d8799c5db8a52.png","/assets/icon_stash.png":"_assets/f7d7934d8799c5db8a52.png","/icon_stash.png":"_assets/f7d7934d8799c5db8a52.png","https://papugaxx.github.io/stalker-clicker/assets/sounds/ambient_music.mp3":"_assets/efb55c92683a093a595a.mp3","/stalker-clicker/assets/sounds/ambient_music.mp3":"_assets/efb55c92683a093a595a.mp3","/assets/sounds/ambient_music.mp3":"_assets/efb55c92683a093a595a.mp3","/sounds/ambient_music.mp3":"_assets/efb55c92683a093a595a.mp3","/ambient_music.mp3":"_assets/efb55c92683a093a595a.mp3","https://papugaxx.github.io/stalker-clicker/assets/bg_zone.jpg":"_assets/25c9219549f5ba46d411.jpg","/stalker-clicker/assets/bg_zone.jpg":"_assets/25c9219549f5ba46d411.jpg","/assets/bg_zone.jpg":"_assets/25c9219549f5ba46d411.jpg","/bg_zone.jpg":"_assets/25c9219549f5ba46d411.jpg","https://papugaxx.github.io/stalker-clicker/js/config.js":"_assets/e5a92bb1959264b5b954.js","/stalker-clicker/js/config.js":"_assets/e5a92bb1959264b5b954.js","/js/config.js":"_assets/e5a92bb1959264b5b954.js","/config.js":"_assets/e5a92bb1959264b5b954.js"};
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
