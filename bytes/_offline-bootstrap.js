(() => {
  "use strict";
  const RUNTIME_MAP = {"https://bytegames.github.io/bytes/css/style.css":"_assets/c3e1c6ff9c6b71a26592.css","/bytes/css/style.css":"_assets/c3e1c6ff9c6b71a26592.css","/css/style.css":"_assets/c3e1c6ff9c6b71a26592.css","/style.css":"_assets/c3e1c6ff9c6b71a26592.css","https://bytegames.github.io/bytes/build/game.js":"_assets/31dea382c93a3e2a238e.js","/bytes/build/game.js":"_assets/31dea382c93a3e2a238e.js","/build/game.js":"_assets/31dea382c93a3e2a238e.js","/game.js":"_assets/31dea382c93a3e2a238e.js","https://bytegames.github.io/bytes/build/types/index.js":"_assets/70485fd07f8327cbbef7.js","/bytes/build/types/index.js":"_assets/70485fd07f8327cbbef7.js","/build/types/index.js":"_assets/70485fd07f8327cbbef7.js","/types/index.js":"_assets/70485fd07f8327cbbef7.js","/index.js":"_assets/70485fd07f8327cbbef7.js","https://bytegames.github.io/bytes/build/ux/index.js":"_assets/f1ea86d4940ac78e8557.js","/bytes/build/ux/index.js":"_assets/f1ea86d4940ac78e8557.js","/build/ux/index.js":"_assets/f1ea86d4940ac78e8557.js","/ux/index.js":"_assets/f1ea86d4940ac78e8557.js","https://bytegames.github.io/bytes/build/objects/index.js":"_assets/137cfe5c3d992493a520.js","/bytes/build/objects/index.js":"_assets/137cfe5c3d992493a520.js","/build/objects/index.js":"_assets/137cfe5c3d992493a520.js","/objects/index.js":"_assets/137cfe5c3d992493a520.js","https://bytegames.github.io/bytes/build/types/timer.js":"_assets/48dd0500deaedb738ef6.js","/bytes/build/types/timer.js":"_assets/48dd0500deaedb738ef6.js","/build/types/timer.js":"_assets/48dd0500deaedb738ef6.js","/types/timer.js":"_assets/48dd0500deaedb738ef6.js","/timer.js":"_assets/48dd0500deaedb738ef6.js","https://bytegames.github.io/bytes/build/types/enums.js":"_assets/80450f508ca97d7b76e7.js","/bytes/build/types/enums.js":"_assets/80450f508ca97d7b76e7.js","/build/types/enums.js":"_assets/80450f508ca97d7b76e7.js","/types/enums.js":"_assets/80450f508ca97d7b76e7.js","/enums.js":"_assets/80450f508ca97d7b76e7.js","https://bytegames.github.io/bytes/build/types/position.js":"_assets/d497d8a3dc39e415748a.js","/bytes/build/types/position.js":"_assets/d497d8a3dc39e415748a.js","/build/types/position.js":"_assets/d497d8a3dc39e415748a.js","/types/position.js":"_assets/d497d8a3dc39e415748a.js","/position.js":"_assets/d497d8a3dc39e415748a.js","https://bytegames.github.io/bytes/build/ux/board.js":"_assets/f62c25e9fed708629b8f.js","/bytes/build/ux/board.js":"_assets/f62c25e9fed708629b8f.js","/build/ux/board.js":"_assets/f62c25e9fed708629b8f.js","/ux/board.js":"_assets/f62c25e9fed708629b8f.js","/board.js":"_assets/f62c25e9fed708629b8f.js","https://bytegames.github.io/bytes/build/ux/controls.js":"_assets/9da66935bdb6d5aeb30c.js","/bytes/build/ux/controls.js":"_assets/9da66935bdb6d5aeb30c.js","/build/ux/controls.js":"_assets/9da66935bdb6d5aeb30c.js","/ux/controls.js":"_assets/9da66935bdb6d5aeb30c.js","/controls.js":"_assets/9da66935bdb6d5aeb30c.js","https://bytegames.github.io/bytes/build/ux/console.js":"_assets/c54e1f2090478168f6a5.js","/bytes/build/ux/console.js":"_assets/c54e1f2090478168f6a5.js","/build/ux/console.js":"_assets/c54e1f2090478168f6a5.js","/ux/console.js":"_assets/c54e1f2090478168f6a5.js","/console.js":"_assets/c54e1f2090478168f6a5.js","https://bytegames.github.io/bytes/build/ux/canvas.js":"_assets/825f2e25b0a41a096076.js","/bytes/build/ux/canvas.js":"_assets/825f2e25b0a41a096076.js","/build/ux/canvas.js":"_assets/825f2e25b0a41a096076.js","/ux/canvas.js":"_assets/825f2e25b0a41a096076.js","/canvas.js":"_assets/825f2e25b0a41a096076.js","https://bytegames.github.io/bytes/build/ux/gui.js":"_assets/9a1068b01f344f203d83.js","/bytes/build/ux/gui.js":"_assets/9a1068b01f344f203d83.js","/build/ux/gui.js":"_assets/9a1068b01f344f203d83.js","/ux/gui.js":"_assets/9a1068b01f344f203d83.js","/gui.js":"_assets/9a1068b01f344f203d83.js","https://bytegames.github.io/bytes/build/objects/snake.js":"_assets/76a8f0e780ec63907937.js","/bytes/build/objects/snake.js":"_assets/76a8f0e780ec63907937.js","/build/objects/snake.js":"_assets/76a8f0e780ec63907937.js","/objects/snake.js":"_assets/76a8f0e780ec63907937.js","/snake.js":"_assets/76a8f0e780ec63907937.js","https://bytegames.github.io/bytes/build/objects/coin.js":"_assets/a30366981a84c35e6c38.js","/bytes/build/objects/coin.js":"_assets/a30366981a84c35e6c38.js","/build/objects/coin.js":"_assets/a30366981a84c35e6c38.js","/objects/coin.js":"_assets/a30366981a84c35e6c38.js","/coin.js":"_assets/a30366981a84c35e6c38.js","https://bytegames.github.io/bytes/build/objects/fastplayer.js":"_assets/38c501c40b6f73888b58.js","/bytes/build/objects/fastplayer.js":"_assets/38c501c40b6f73888b58.js","/build/objects/fastplayer.js":"_assets/38c501c40b6f73888b58.js","/objects/fastplayer.js":"_assets/38c501c40b6f73888b58.js","/fastplayer.js":"_assets/38c501c40b6f73888b58.js","https://bytegames.github.io/bytes/build/objects/snakesegment.js":"_assets/a677e0d407f2c15de156.js","/bytes/build/objects/snakesegment.js":"_assets/a677e0d407f2c15de156.js","/build/objects/snakesegment.js":"_assets/a677e0d407f2c15de156.js","/objects/snakesegment.js":"_assets/a677e0d407f2c15de156.js","/snakesegment.js":"_assets/a677e0d407f2c15de156.js","https://bytegames.github.io/bytes/build/objects/slowplayer.js":"_assets/c7db7edf7eefe9952e47.js","/bytes/build/objects/slowplayer.js":"_assets/c7db7edf7eefe9952e47.js","/build/objects/slowplayer.js":"_assets/c7db7edf7eefe9952e47.js","/objects/slowplayer.js":"_assets/c7db7edf7eefe9952e47.js","/slowplayer.js":"_assets/c7db7edf7eefe9952e47.js"};
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
