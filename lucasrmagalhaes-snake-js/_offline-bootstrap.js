(() => {
  "use strict";
  const RUNTIME_MAP = {"https://lucasrmagalhaes.github.io/snake-js/css/style.css":"_assets/fb42a35c950634c6c97c.css","/snake-js/css/style.css":"_assets/fb42a35c950634c6c97c.css","/css/style.css":"_assets/fb42a35c950634c6c97c.css","/style.css":"_assets/fb42a35c950634c6c97c.css","https://lucasrmagalhaes.github.io/snake-js/js/main.js":"_assets/400807012c077dd81479.js","/snake-js/js/main.js":"_assets/400807012c077dd81479.js","/js/main.js":"_assets/400807012c077dd81479.js","/main.js":"_assets/400807012c077dd81479.js","https://lucasrmagalhaes.github.io/snake-js/js/state.js":"_assets/88d537dafee3853f035b.js","/snake-js/js/state.js":"_assets/88d537dafee3853f035b.js","/js/state.js":"_assets/88d537dafee3853f035b.js","/state.js":"_assets/88d537dafee3853f035b.js","https://lucasrmagalhaes.github.io/snake-js/js/render.js":"_assets/920bc67d2b4c3745f6ea.js","/snake-js/js/render.js":"_assets/920bc67d2b4c3745f6ea.js","/js/render.js":"_assets/920bc67d2b4c3745f6ea.js","/render.js":"_assets/920bc67d2b4c3745f6ea.js","https://lucasrmagalhaes.github.io/snake-js/js/game.js":"_assets/2efb678d768467656a3c.js","/snake-js/js/game.js":"_assets/2efb678d768467656a3c.js","/js/game.js":"_assets/2efb678d768467656a3c.js","/game.js":"_assets/2efb678d768467656a3c.js","https://lucasrmagalhaes.github.io/snake-js/js/input.js":"_assets/a76348a0ba596af7e527.js","/snake-js/js/input.js":"_assets/a76348a0ba596af7e527.js","/js/input.js":"_assets/a76348a0ba596af7e527.js","/input.js":"_assets/a76348a0ba596af7e527.js","https://lucasrmagalhaes.github.io/snake-js/js/ui.js":"_assets/29b59ef72d25cabc194a.js","/snake-js/js/ui.js":"_assets/29b59ef72d25cabc194a.js","/js/ui.js":"_assets/29b59ef72d25cabc194a.js","/ui.js":"_assets/29b59ef72d25cabc194a.js","https://lucasrmagalhaes.github.io/snake-js/js/skin.js":"_assets/f3abf4edf1b0e9a8633c.js","/snake-js/js/skin.js":"_assets/f3abf4edf1b0e9a8633c.js","/js/skin.js":"_assets/f3abf4edf1b0e9a8633c.js","/skin.js":"_assets/f3abf4edf1b0e9a8633c.js","https://lucasrmagalhaes.github.io/snake-js/js/achievements.js":"_assets/38b3713ef9108a18ede4.js","/snake-js/js/achievements.js":"_assets/38b3713ef9108a18ede4.js","/js/achievements.js":"_assets/38b3713ef9108a18ede4.js","/achievements.js":"_assets/38b3713ef9108a18ede4.js","https://lucasrmagalhaes.github.io/snake-js/js/config.js":"_assets/adf56c913e3399ce8e59.js","/snake-js/js/config.js":"_assets/adf56c913e3399ce8e59.js","/js/config.js":"_assets/adf56c913e3399ce8e59.js","/config.js":"_assets/adf56c913e3399ce8e59.js","https://lucasrmagalhaes.github.io/snake-js/js/i18n.js":"_assets/0951e9a8a6f8ceed23ef.js","/snake-js/js/i18n.js":"_assets/0951e9a8a6f8ceed23ef.js","/js/i18n.js":"_assets/0951e9a8a6f8ceed23ef.js","/i18n.js":"_assets/0951e9a8a6f8ceed23ef.js","https://lucasrmagalhaes.github.io/snake-js/js/rng.js":"_assets/c11a2cc12d639cd6c9a7.js","/snake-js/js/rng.js":"_assets/c11a2cc12d639cd6c9a7.js","/js/rng.js":"_assets/c11a2cc12d639cd6c9a7.js","/rng.js":"_assets/c11a2cc12d639cd6c9a7.js","https://lucasrmagalhaes.github.io/snake-js/js/replay.js":"_assets/45ebe5a3e1fb12d7d4a8.js","/snake-js/js/replay.js":"_assets/45ebe5a3e1fb12d7d4a8.js","/js/replay.js":"_assets/45ebe5a3e1fb12d7d4a8.js","/replay.js":"_assets/45ebe5a3e1fb12d7d4a8.js","https://lucasrmagalhaes.github.io/snake-js/js/audio.js":"_assets/730fc7134da67b36d0e3.js","/snake-js/js/audio.js":"_assets/730fc7134da67b36d0e3.js","/js/audio.js":"_assets/730fc7134da67b36d0e3.js","/audio.js":"_assets/730fc7134da67b36d0e3.js","https://lucasrmagalhaes.github.io/snake-js/js/leaderboard.js":"_assets/8a89ffbd78a1e0674a2c.js","/snake-js/js/leaderboard.js":"_assets/8a89ffbd78a1e0674a2c.js","/js/leaderboard.js":"_assets/8a89ffbd78a1e0674a2c.js","/leaderboard.js":"_assets/8a89ffbd78a1e0674a2c.js"};
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
