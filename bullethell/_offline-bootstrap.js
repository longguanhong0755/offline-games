(() => {
  "use strict";
  const RUNTIME_MAP = {"https://selenebun.github.io/bullethell/scripts/util.js":"_assets/a784cd129062a64dd66e.js","/bullethell/scripts/util.js":"_assets/a784cd129062a64dd66e.js","/scripts/util.js":"_assets/a784cd129062a64dd66e.js","/util.js":"_assets/a784cd129062a64dd66e.js","https://selenebun.github.io/bullethell/style.css":"_assets/1128053ef4fb731b0474.css","/bullethell/style.css":"_assets/1128053ef4fb731b0474.css","/style.css":"_assets/1128053ef4fb731b0474.css","https://selenebun.github.io/bullethell/scripts/template/models.js":"_assets/cb88419a11e2ec5c2d03.js","/bullethell/scripts/template/models.js":"_assets/cb88419a11e2ec5c2d03.js","/scripts/template/models.js":"_assets/cb88419a11e2ec5c2d03.js","/template/models.js":"_assets/cb88419a11e2ec5c2d03.js","/models.js":"_assets/cb88419a11e2ec5c2d03.js","https://selenebun.github.io/bullethell/scripts/template/bosses.js":"_assets/0e03bb2425238dfd9ec3.js","/bullethell/scripts/template/bosses.js":"_assets/0e03bb2425238dfd9ec3.js","/scripts/template/bosses.js":"_assets/0e03bb2425238dfd9ec3.js","/template/bosses.js":"_assets/0e03bb2425238dfd9ec3.js","/bosses.js":"_assets/0e03bb2425238dfd9ec3.js","https://selenebun.github.io/bullethell/scripts/template/enemies.js":"_assets/b8f8ce69ad7b3ba10813.js","/bullethell/scripts/template/enemies.js":"_assets/b8f8ce69ad7b3ba10813.js","/scripts/template/enemies.js":"_assets/b8f8ce69ad7b3ba10813.js","/template/enemies.js":"_assets/b8f8ce69ad7b3ba10813.js","/enemies.js":"_assets/b8f8ce69ad7b3ba10813.js","https://selenebun.github.io/bullethell/scripts/lib/p5.min.js":"_assets/183bafd797aa4292ea5a.js","/bullethell/scripts/lib/p5.min.js":"_assets/183bafd797aa4292ea5a.js","/scripts/lib/p5.min.js":"_assets/183bafd797aa4292ea5a.js","/lib/p5.min.js":"_assets/183bafd797aa4292ea5a.js","/p5.min.js":"_assets/183bafd797aa4292ea5a.js","https://selenebun.github.io/bullethell/scripts/template/levels.js":"_assets/668b8410e1b523dfa7ee.js","/bullethell/scripts/template/levels.js":"_assets/668b8410e1b523dfa7ee.js","/scripts/template/levels.js":"_assets/668b8410e1b523dfa7ee.js","/template/levels.js":"_assets/668b8410e1b523dfa7ee.js","/levels.js":"_assets/668b8410e1b523dfa7ee.js","https://selenebun.github.io/bullethell/scripts/template/bullets.js":"_assets/5ff6c5a46c2bf6c768ec.js","/bullethell/scripts/template/bullets.js":"_assets/5ff6c5a46c2bf6c768ec.js","/scripts/template/bullets.js":"_assets/5ff6c5a46c2bf6c768ec.js","/template/bullets.js":"_assets/5ff6c5a46c2bf6c768ec.js","/bullets.js":"_assets/5ff6c5a46c2bf6c768ec.js","https://selenebun.github.io/bullethell/scripts/template/weapons.js":"_assets/9c700a544255a2aecee6.js","/bullethell/scripts/template/weapons.js":"_assets/9c700a544255a2aecee6.js","/scripts/template/weapons.js":"_assets/9c700a544255a2aecee6.js","/template/weapons.js":"_assets/9c700a544255a2aecee6.js","/weapons.js":"_assets/9c700a544255a2aecee6.js","https://selenebun.github.io/bullethell/scripts/template/items.js":"_assets/44197f57329fecd7261a.js","/bullethell/scripts/template/items.js":"_assets/44197f57329fecd7261a.js","/scripts/template/items.js":"_assets/44197f57329fecd7261a.js","/template/items.js":"_assets/44197f57329fecd7261a.js","/items.js":"_assets/44197f57329fecd7261a.js","https://selenebun.github.io/bullethell/scripts/class/entity.js":"_assets/1d720e813fc0fe7fd392.js","/bullethell/scripts/class/entity.js":"_assets/1d720e813fc0fe7fd392.js","/scripts/class/entity.js":"_assets/1d720e813fc0fe7fd392.js","/class/entity.js":"_assets/1d720e813fc0fe7fd392.js","/entity.js":"_assets/1d720e813fc0fe7fd392.js","https://selenebun.github.io/bullethell/scripts/template/particles.js":"_assets/a6107d8266a275e9e0ed.js","/bullethell/scripts/template/particles.js":"_assets/a6107d8266a275e9e0ed.js","/scripts/template/particles.js":"_assets/a6107d8266a275e9e0ed.js","/template/particles.js":"_assets/a6107d8266a275e9e0ed.js","/particles.js":"_assets/a6107d8266a275e9e0ed.js","https://selenebun.github.io/bullethell/scripts/class/bullet.js":"_assets/d9deb3183cb9197bf2cc.js","/bullethell/scripts/class/bullet.js":"_assets/d9deb3183cb9197bf2cc.js","/scripts/class/bullet.js":"_assets/d9deb3183cb9197bf2cc.js","/class/bullet.js":"_assets/d9deb3183cb9197bf2cc.js","/bullet.js":"_assets/d9deb3183cb9197bf2cc.js","https://selenebun.github.io/bullethell/scripts/class/item.js":"_assets/8012b745ca8c6f00d337.js","/bullethell/scripts/class/item.js":"_assets/8012b745ca8c6f00d337.js","/scripts/class/item.js":"_assets/8012b745ca8c6f00d337.js","/class/item.js":"_assets/8012b745ca8c6f00d337.js","/item.js":"_assets/8012b745ca8c6f00d337.js","https://selenebun.github.io/bullethell/scripts/class/emitter.js":"_assets/8ded31697293d0666ba0.js","/bullethell/scripts/class/emitter.js":"_assets/8ded31697293d0666ba0.js","/scripts/class/emitter.js":"_assets/8ded31697293d0666ba0.js","/class/emitter.js":"_assets/8ded31697293d0666ba0.js","/emitter.js":"_assets/8ded31697293d0666ba0.js","https://selenebun.github.io/bullethell/scripts/class/ship.js":"_assets/e6e942ae54d0ba29e494.js","/bullethell/scripts/class/ship.js":"_assets/e6e942ae54d0ba29e494.js","/scripts/class/ship.js":"_assets/e6e942ae54d0ba29e494.js","/class/ship.js":"_assets/e6e942ae54d0ba29e494.js","/ship.js":"_assets/e6e942ae54d0ba29e494.js","https://selenebun.github.io/bullethell/scripts/class/particle_system.js":"_assets/74157cfc81d35ce2fee4.js","/bullethell/scripts/class/particle_system.js":"_assets/74157cfc81d35ce2fee4.js","/scripts/class/particle_system.js":"_assets/74157cfc81d35ce2fee4.js","/class/particle_system.js":"_assets/74157cfc81d35ce2fee4.js","/particle_system.js":"_assets/74157cfc81d35ce2fee4.js","https://selenebun.github.io/bullethell/scripts/class/particle.js":"_assets/6b2d10c05defc141a7bd.js","/bullethell/scripts/class/particle.js":"_assets/6b2d10c05defc141a7bd.js","/scripts/class/particle.js":"_assets/6b2d10c05defc141a7bd.js","/class/particle.js":"_assets/6b2d10c05defc141a7bd.js","/particle.js":"_assets/6b2d10c05defc141a7bd.js","https://selenebun.github.io/bullethell/scripts/class/starfield.js":"_assets/cec445e5c9190ca51c69.js","/bullethell/scripts/class/starfield.js":"_assets/cec445e5c9190ca51c69.js","/scripts/class/starfield.js":"_assets/cec445e5c9190ca51c69.js","/class/starfield.js":"_assets/cec445e5c9190ca51c69.js","/starfield.js":"_assets/cec445e5c9190ca51c69.js","https://selenebun.github.io/bullethell/scripts/class/enemy.js":"_assets/787361ba499b44b781e3.js","/bullethell/scripts/class/enemy.js":"_assets/787361ba499b44b781e3.js","/scripts/class/enemy.js":"_assets/787361ba499b44b781e3.js","/class/enemy.js":"_assets/787361ba499b44b781e3.js","/enemy.js":"_assets/787361ba499b44b781e3.js","https://selenebun.github.io/bullethell/scripts/class/player.js":"_assets/3c7a3bce2dcb786b69b7.js","/bullethell/scripts/class/player.js":"_assets/3c7a3bce2dcb786b69b7.js","/scripts/class/player.js":"_assets/3c7a3bce2dcb786b69b7.js","/class/player.js":"_assets/3c7a3bce2dcb786b69b7.js","/player.js":"_assets/3c7a3bce2dcb786b69b7.js","https://selenebun.github.io/bullethell/scripts/class/boss.js":"_assets/b1e58bad6cf667651b41.js","/bullethell/scripts/class/boss.js":"_assets/b1e58bad6cf667651b41.js","/scripts/class/boss.js":"_assets/b1e58bad6cf667651b41.js","/class/boss.js":"_assets/b1e58bad6cf667651b41.js","/boss.js":"_assets/b1e58bad6cf667651b41.js","https://selenebun.github.io/bullethell/scripts/class/wall.js":"_assets/8a37d92d42bcb99484ff.js","/bullethell/scripts/class/wall.js":"_assets/8a37d92d42bcb99484ff.js","/scripts/class/wall.js":"_assets/8a37d92d42bcb99484ff.js","/class/wall.js":"_assets/8a37d92d42bcb99484ff.js","/wall.js":"_assets/8a37d92d42bcb99484ff.js","https://selenebun.github.io/bullethell/scripts/main.js":"_assets/de9f39b7e06d11a34da9.js","/bullethell/scripts/main.js":"_assets/de9f39b7e06d11a34da9.js","/scripts/main.js":"_assets/de9f39b7e06d11a34da9.js","/main.js":"_assets/de9f39b7e06d11a34da9.js","https://selenebun.github.io/bullethell/fonts/SourceCodePro-Regular.ttf":"_assets/2967dd73df838d2a2d39.ttf","/bullethell/fonts/SourceCodePro-Regular.ttf":"_assets/2967dd73df838d2a2d39.ttf","/fonts/SourceCodePro-Regular.ttf":"_assets/2967dd73df838d2a2d39.ttf","/SourceCodePro-Regular.ttf":"_assets/2967dd73df838d2a2d39.ttf"};
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
