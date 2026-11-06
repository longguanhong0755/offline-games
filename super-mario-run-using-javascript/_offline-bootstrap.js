(() => {
  "use strict";
  const RUNTIME_MAP = {"https://varunbanka.github.io/super-mario-run-using-javascript/css/style.css":"_assets/c7928d22cde972ff00e3.css","/super-mario-run-using-javascript/css/style.css":"_assets/c7928d22cde972ff00e3.css","/css/style.css":"_assets/c7928d22cde972ff00e3.css","/style.css":"_assets/c7928d22cde972ff00e3.css","https://varunbanka.github.io/super-mario-run-using-javascript/css/reset.css":"_assets/bba975443be4d69c5459.css","/super-mario-run-using-javascript/css/reset.css":"_assets/bba975443be4d69c5459.css","/css/reset.css":"_assets/bba975443be4d69c5459.css","/reset.css":"_assets/bba975443be4d69c5459.css","https://varunbanka.github.io/super-mario-run-using-javascript/js/View.js":"_assets/cab4daf65cf038aab068.js","/super-mario-run-using-javascript/js/View.js":"_assets/cab4daf65cf038aab068.js","/js/View.js":"_assets/cab4daf65cf038aab068.js","/View.js":"_assets/cab4daf65cf038aab068.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/GameUI.js":"_assets/258043950b898aab0ca2.js","/super-mario-run-using-javascript/js/GameUI.js":"_assets/258043950b898aab0ca2.js","/js/GameUI.js":"_assets/258043950b898aab0ca2.js","/GameUI.js":"_assets/258043950b898aab0ca2.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/mainGame/PowerUp.js":"_assets/e472aa3394661d76d9b3.js","/super-mario-run-using-javascript/js/mainGame/PowerUp.js":"_assets/e472aa3394661d76d9b3.js","/js/mainGame/PowerUp.js":"_assets/e472aa3394661d76d9b3.js","/mainGame/PowerUp.js":"_assets/e472aa3394661d76d9b3.js","/PowerUp.js":"_assets/e472aa3394661d76d9b3.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/mainGame/Element.js":"_assets/ae8ece56bca20815aa94.js","/super-mario-run-using-javascript/js/mainGame/Element.js":"_assets/ae8ece56bca20815aa94.js","/js/mainGame/Element.js":"_assets/ae8ece56bca20815aa94.js","/mainGame/Element.js":"_assets/ae8ece56bca20815aa94.js","/Element.js":"_assets/ae8ece56bca20815aa94.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/mainGame/GameSound.js":"_assets/daa7ae359b524ffcdb22.js","/super-mario-run-using-javascript/js/mainGame/GameSound.js":"_assets/daa7ae359b524ffcdb22.js","/js/mainGame/GameSound.js":"_assets/daa7ae359b524ffcdb22.js","/mainGame/GameSound.js":"_assets/daa7ae359b524ffcdb22.js","/GameSound.js":"_assets/daa7ae359b524ffcdb22.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/mainGame/Enemy.js":"_assets/0bb8ad979f3ec588899d.js","/super-mario-run-using-javascript/js/mainGame/Enemy.js":"_assets/0bb8ad979f3ec588899d.js","/js/mainGame/Enemy.js":"_assets/0bb8ad979f3ec588899d.js","/mainGame/Enemy.js":"_assets/0bb8ad979f3ec588899d.js","/Enemy.js":"_assets/0bb8ad979f3ec588899d.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/mainGame/Bullet.js":"_assets/c82a755c5b80707fd52a.js","/super-mario-run-using-javascript/js/mainGame/Bullet.js":"_assets/c82a755c5b80707fd52a.js","/js/mainGame/Bullet.js":"_assets/c82a755c5b80707fd52a.js","/mainGame/Bullet.js":"_assets/c82a755c5b80707fd52a.js","/Bullet.js":"_assets/c82a755c5b80707fd52a.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/mainGame/Mario.js":"_assets/001db710c6b8342eed13.js","/super-mario-run-using-javascript/js/mainGame/Mario.js":"_assets/001db710c6b8342eed13.js","/js/mainGame/Mario.js":"_assets/001db710c6b8342eed13.js","/mainGame/Mario.js":"_assets/001db710c6b8342eed13.js","/Mario.js":"_assets/001db710c6b8342eed13.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/levelEditor/Storage.js":"_assets/b7e52fb4967a4ba9d111.js","/super-mario-run-using-javascript/js/levelEditor/Storage.js":"_assets/b7e52fb4967a4ba9d111.js","/js/levelEditor/Storage.js":"_assets/b7e52fb4967a4ba9d111.js","/levelEditor/Storage.js":"_assets/b7e52fb4967a4ba9d111.js","/Storage.js":"_assets/b7e52fb4967a4ba9d111.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/mainGame/Score.js":"_assets/8963704a1e1ff8dd0c95.js","/super-mario-run-using-javascript/js/mainGame/Score.js":"_assets/8963704a1e1ff8dd0c95.js","/js/mainGame/Score.js":"_assets/8963704a1e1ff8dd0c95.js","/mainGame/Score.js":"_assets/8963704a1e1ff8dd0c95.js","/Score.js":"_assets/8963704a1e1ff8dd0c95.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/levelEditor/Editor.js":"_assets/b6462bcf6984cc5cf254.js","/super-mario-run-using-javascript/js/levelEditor/Editor.js":"_assets/b6462bcf6984cc5cf254.js","/js/levelEditor/Editor.js":"_assets/b6462bcf6984cc5cf254.js","/levelEditor/Editor.js":"_assets/b6462bcf6984cc5cf254.js","/Editor.js":"_assets/b6462bcf6984cc5cf254.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/mainGame/MarioGame.js":"_assets/aaaed8df0bc71555fe5c.js","/super-mario-run-using-javascript/js/mainGame/MarioGame.js":"_assets/aaaed8df0bc71555fe5c.js","/js/mainGame/MarioGame.js":"_assets/aaaed8df0bc71555fe5c.js","/mainGame/MarioGame.js":"_assets/aaaed8df0bc71555fe5c.js","/MarioGame.js":"_assets/aaaed8df0bc71555fe5c.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/levelEditor/CreatedLevels.js":"_assets/5d159aaffd61d88663eb.js","/super-mario-run-using-javascript/js/levelEditor/CreatedLevels.js":"_assets/5d159aaffd61d88663eb.js","/js/levelEditor/CreatedLevels.js":"_assets/5d159aaffd61d88663eb.js","/levelEditor/CreatedLevels.js":"_assets/5d159aaffd61d88663eb.js","/CreatedLevels.js":"_assets/5d159aaffd61d88663eb.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/MarioMaker.js":"_assets/b536434c7f7df1b75011.js","/super-mario-run-using-javascript/js/MarioMaker.js":"_assets/b536434c7f7df1b75011.js","/js/MarioMaker.js":"_assets/b536434c7f7df1b75011.js","/MarioMaker.js":"_assets/b536434c7f7df1b75011.js","https://varunbanka.github.io/super-mario-run-using-javascript/js/Preloader.js":"_assets/f884ef13385326d63389.js","/super-mario-run-using-javascript/js/Preloader.js":"_assets/f884ef13385326d63389.js","/js/Preloader.js":"_assets/f884ef13385326d63389.js","/Preloader.js":"_assets/f884ef13385326d63389.js","https://varunbanka.github.io/super-mario-run-using-javascript/images/back-btn.png":"_assets/728caa8cd2b5e89ad84c.png","/super-mario-run-using-javascript/images/back-btn.png":"_assets/728caa8cd2b5e89ad84c.png","/images/back-btn.png":"_assets/728caa8cd2b5e89ad84c.png","/back-btn.png":"_assets/728caa8cd2b5e89ad84c.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/bg.png":"_assets/b480e5b05d6529c35f61.png","/super-mario-run-using-javascript/images/bg.png":"_assets/b480e5b05d6529c35f61.png","/images/bg.png":"_assets/b480e5b05d6529c35f61.png","/bg.png":"_assets/b480e5b05d6529c35f61.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/coin.png":"_assets/2d2fe52d5ab2f1872a07.png","/super-mario-run-using-javascript/images/coin.png":"_assets/2d2fe52d5ab2f1872a07.png","/images/coin.png":"_assets/2d2fe52d5ab2f1872a07.png","/coin.png":"_assets/2d2fe52d5ab2f1872a07.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/bullet.png":"_assets/1dec5def8089feadf225.png","/super-mario-run-using-javascript/images/bullet.png":"_assets/1dec5def8089feadf225.png","/images/bullet.png":"_assets/1dec5def8089feadf225.png","/bullet.png":"_assets/1dec5def8089feadf225.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/delete-all-btn.png":"_assets/82e5cef63a2353e9806e.png","/super-mario-run-using-javascript/images/delete-all-btn.png":"_assets/82e5cef63a2353e9806e.png","/images/delete-all-btn.png":"_assets/82e5cef63a2353e9806e.png","/delete-all-btn.png":"_assets/82e5cef63a2353e9806e.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/elements.png":"_assets/a8d814ded82e2a16e181.png","/super-mario-run-using-javascript/images/elements.png":"_assets/a8d814ded82e2a16e181.png","/images/elements.png":"_assets/a8d814ded82e2a16e181.png","/elements.png":"_assets/a8d814ded82e2a16e181.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/clear-map-btn.png":"_assets/254b2a55f09f3796b74f.png","/super-mario-run-using-javascript/images/clear-map-btn.png":"_assets/254b2a55f09f3796b74f.png","/images/clear-map-btn.png":"_assets/254b2a55f09f3796b74f.png","/clear-map-btn.png":"_assets/254b2a55f09f3796b74f.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/editor-btn.png":"_assets/d06679ece9c69e9dd19c.png","/super-mario-run-using-javascript/images/editor-btn.png":"_assets/d06679ece9c69e9dd19c.png","/images/editor-btn.png":"_assets/d06679ece9c69e9dd19c.png","/editor-btn.png":"_assets/d06679ece9c69e9dd19c.png","https://varunbanka.github.io/super-mario-run-using-javascript/fonts/SuperMario256.ttf":"_assets/6e9eef4f6def32280211.ttf","/super-mario-run-using-javascript/fonts/SuperMario256.ttf":"_assets/6e9eef4f6def32280211.ttf","/fonts/SuperMario256.ttf":"_assets/6e9eef4f6def32280211.ttf","/SuperMario256.ttf":"_assets/6e9eef4f6def32280211.ttf","https://varunbanka.github.io/super-mario-run-using-javascript/images/grid-medium-btn.png":"_assets/9e8dc6a12f1b12071563.png","/super-mario-run-using-javascript/images/grid-medium-btn.png":"_assets/9e8dc6a12f1b12071563.png","/images/grid-medium-btn.png":"_assets/9e8dc6a12f1b12071563.png","/grid-medium-btn.png":"_assets/9e8dc6a12f1b12071563.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/enemies.png":"_assets/08b6469f37a7fe675ae3.png","/super-mario-run-using-javascript/images/enemies.png":"_assets/08b6469f37a7fe675ae3.png","/images/enemies.png":"_assets/08b6469f37a7fe675ae3.png","/enemies.png":"_assets/08b6469f37a7fe675ae3.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/flag-pole.png":"_assets/956d7cdced74a57ade08.png","/super-mario-run-using-javascript/images/flag-pole.png":"_assets/956d7cdced74a57ade08.png","/images/flag-pole.png":"_assets/956d7cdced74a57ade08.png","/flag-pole.png":"_assets/956d7cdced74a57ade08.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/grid.png":"_assets/51268bd1ac728cf1f048.png","/super-mario-run-using-javascript/images/grid.png":"_assets/51268bd1ac728cf1f048.png","/images/grid.png":"_assets/51268bd1ac728cf1f048.png","/grid.png":"_assets/51268bd1ac728cf1f048.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/start-screen.png":"_assets/e84c48ab528a58c55159.png","/super-mario-run-using-javascript/images/start-screen.png":"_assets/e84c48ab528a58c55159.png","/images/start-screen.png":"_assets/e84c48ab528a58c55159.png","/start-screen.png":"_assets/e84c48ab528a58c55159.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/grid-large-btn.png":"_assets/5f2bb39d5c691c99c48a.png","/super-mario-run-using-javascript/images/grid-large-btn.png":"_assets/5f2bb39d5c691c99c48a.png","/images/grid-large-btn.png":"_assets/5f2bb39d5c691c99c48a.png","/grid-large-btn.png":"_assets/5f2bb39d5c691c99c48a.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/flag.png":"_assets/fa35b4841249ec124911.png","/super-mario-run-using-javascript/images/flag.png":"_assets/fa35b4841249ec124911.png","/images/flag.png":"_assets/fa35b4841249ec124911.png","/flag.png":"_assets/fa35b4841249ec124911.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/grid-small-btn.png":"_assets/967caa9273dbb2c588b9.png","/super-mario-run-using-javascript/images/grid-small-btn.png":"_assets/967caa9273dbb2c588b9.png","/images/grid-small-btn.png":"_assets/967caa9273dbb2c588b9.png","/grid-small-btn.png":"_assets/967caa9273dbb2c588b9.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/powerups.png":"_assets/3b28d4ca709662a68b8f.png","/super-mario-run-using-javascript/images/powerups.png":"_assets/3b28d4ca709662a68b8f.png","/images/powerups.png":"_assets/3b28d4ca709662a68b8f.png","/powerups.png":"_assets/3b28d4ca709662a68b8f.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/mario-head.png":"_assets/fb785ae06f8fd2452d6b.png","/super-mario-run-using-javascript/images/mario-head.png":"_assets/fb785ae06f8fd2452d6b.png","/images/mario-head.png":"_assets/fb785ae06f8fd2452d6b.png","/mario-head.png":"_assets/fb785ae06f8fd2452d6b.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/mario-sprites.png":"_assets/9ceaf099761080eb8bbc.png","/super-mario-run-using-javascript/images/mario-sprites.png":"_assets/9ceaf099761080eb8bbc.png","/images/mario-sprites.png":"_assets/9ceaf099761080eb8bbc.png","/mario-sprites.png":"_assets/9ceaf099761080eb8bbc.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/lvl-size.png":"_assets/2beabbd44b9f6692522d.png","/super-mario-run-using-javascript/images/lvl-size.png":"_assets/2beabbd44b9f6692522d.png","/images/lvl-size.png":"_assets/2beabbd44b9f6692522d.png","/lvl-size.png":"_assets/2beabbd44b9f6692522d.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/saved-btn.png":"_assets/0d094eeb022b5f2f4d44.png","/super-mario-run-using-javascript/images/saved-btn.png":"_assets/0d094eeb022b5f2f4d44.png","/images/saved-btn.png":"_assets/0d094eeb022b5f2f4d44.png","/saved-btn.png":"_assets/0d094eeb022b5f2f4d44.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/slider-left.png":"_assets/5524d651fdf29e3f52a0.png","/super-mario-run-using-javascript/images/slider-left.png":"_assets/5524d651fdf29e3f52a0.png","/images/slider-left.png":"_assets/5524d651fdf29e3f52a0.png","/slider-left.png":"_assets/5524d651fdf29e3f52a0.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/save-map-btn.png":"_assets/346d5d7e677f1166fe87.png","/super-mario-run-using-javascript/images/save-map-btn.png":"_assets/346d5d7e677f1166fe87.png","/images/save-map-btn.png":"_assets/346d5d7e677f1166fe87.png","/save-map-btn.png":"_assets/346d5d7e677f1166fe87.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/slider-right.png":"_assets/9bfbfed1185fbcb733d9.png","/super-mario-run-using-javascript/images/slider-right.png":"_assets/9bfbfed1185fbcb733d9.png","/images/slider-right.png":"_assets/9bfbfed1185fbcb733d9.png","/slider-right.png":"_assets/9bfbfed1185fbcb733d9.png","https://varunbanka.github.io/super-mario-run-using-javascript/images/start-btn.png":"_assets/8d4eaf6b12d4f9a2514c.png","/super-mario-run-using-javascript/images/start-btn.png":"_assets/8d4eaf6b12d4f9a2514c.png","/images/start-btn.png":"_assets/8d4eaf6b12d4f9a2514c.png","/start-btn.png":"_assets/8d4eaf6b12d4f9a2514c.png"};
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
