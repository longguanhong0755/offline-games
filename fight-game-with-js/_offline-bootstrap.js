(() => {
  "use strict";
  const RUNTIME_MAP = {"https://elchin-novruzov.github.io/Fight-game-With-JS/js/utils.js":"_assets/b17a303c6420d4f02a2f.js","/Fight-game-With-JS/js/utils.js":"_assets/b17a303c6420d4f02a2f.js","/js/utils.js":"_assets/b17a303c6420d4f02a2f.js","/utils.js":"_assets/b17a303c6420d4f02a2f.js","https://elchin-novruzov.github.io/Fight-game-With-JS/index.js":"_assets/6361248df7c231f187c3.js","/Fight-game-With-JS/index.js":"_assets/6361248df7c231f187c3.js","/index.js":"_assets/6361248df7c231f187c3.js","https://elchin-novruzov.github.io/Fight-game-With-JS/js/classes.js":"_assets/a9a9fb2cfbd03ed34bd4.js","/Fight-game-With-JS/js/classes.js":"_assets/a9a9fb2cfbd03ed34bd4.js","/js/classes.js":"_assets/a9a9fb2cfbd03ed34bd4.js","/classes.js":"_assets/a9a9fb2cfbd03ed34bd4.js","https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap":"_assets/e5a8a86613d5dfb3290a.css","/css2":"_assets/e5a8a86613d5dfb3290a.css","/css2?family=Press+Start+2P&display=swap":"_assets/e5a8a86613d5dfb3290a.css","https://fonts.googleapis.com/css2":"_assets/e5a8a86613d5dfb3290a.css","https://fonts.gstatic.com/s/pressstart2p/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/s/pressstart2p/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/pressstart2p/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js":"_assets/6dbe9c2e13cf06c6633e.js","/ajax/libs/gsap/3.9.1/gsap.min.js":"_assets/6dbe9c2e13cf06c6633e.js","/libs/gsap/3.9.1/gsap.min.js":"_assets/6dbe9c2e13cf06c6633e.js","/gsap/3.9.1/gsap.min.js":"_assets/6dbe9c2e13cf06c6633e.js","/3.9.1/gsap.min.js":"_assets/6dbe9c2e13cf06c6633e.js","/gsap.min.js":"_assets/6dbe9c2e13cf06c6633e.js","https://elchin-novruzov.github.io/Fight-game-With-JS/img/shop.png":"_assets/e39fc4cb784e8fcc8f47.png","/Fight-game-With-JS/img/shop.png":"_assets/e39fc4cb784e8fcc8f47.png","/img/shop.png":"_assets/e39fc4cb784e8fcc8f47.png","/shop.png":"_assets/e39fc4cb784e8fcc8f47.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/background.png":"_assets/0b4d42a7a315806fd84f.png","/Fight-game-With-JS/img/background.png":"_assets/0b4d42a7a315806fd84f.png","/img/background.png":"_assets/0b4d42a7a315806fd84f.png","/background.png":"_assets/0b4d42a7a315806fd84f.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/samuraiMack/Run.png":"_assets/53e3087278e316bf0104.png","/Fight-game-With-JS/img/samuraiMack/Run.png":"_assets/53e3087278e316bf0104.png","/img/samuraiMack/Run.png":"_assets/53e3087278e316bf0104.png","/samuraiMack/Run.png":"_assets/53e3087278e316bf0104.png","/Run.png":"_assets/53e3087278e316bf0104.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/samuraiMack/Idle.png":"_assets/dc4e2a722ea36e6e0e2d.png","/Fight-game-With-JS/img/samuraiMack/Idle.png":"_assets/dc4e2a722ea36e6e0e2d.png","/img/samuraiMack/Idle.png":"_assets/dc4e2a722ea36e6e0e2d.png","/samuraiMack/Idle.png":"_assets/dc4e2a722ea36e6e0e2d.png","/Idle.png":"_assets/dc4e2a722ea36e6e0e2d.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/samuraiMack/Jump.png":"_assets/57fea6537831c3ef1edb.png","/Fight-game-With-JS/img/samuraiMack/Jump.png":"_assets/57fea6537831c3ef1edb.png","/img/samuraiMack/Jump.png":"_assets/57fea6537831c3ef1edb.png","/samuraiMack/Jump.png":"_assets/57fea6537831c3ef1edb.png","/Jump.png":"_assets/57fea6537831c3ef1edb.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/samuraiMack/Fall.png":"_assets/2fa791a2fd712daa2ac0.png","/Fight-game-With-JS/img/samuraiMack/Fall.png":"_assets/2fa791a2fd712daa2ac0.png","/img/samuraiMack/Fall.png":"_assets/2fa791a2fd712daa2ac0.png","/samuraiMack/Fall.png":"_assets/2fa791a2fd712daa2ac0.png","/Fall.png":"_assets/2fa791a2fd712daa2ac0.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/samuraiMack/Attack1.png":"_assets/e51f15d319b206b1567a.png","/Fight-game-With-JS/img/samuraiMack/Attack1.png":"_assets/e51f15d319b206b1567a.png","/img/samuraiMack/Attack1.png":"_assets/e51f15d319b206b1567a.png","/samuraiMack/Attack1.png":"_assets/e51f15d319b206b1567a.png","/Attack1.png":"_assets/e51f15d319b206b1567a.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/samuraiMack/Take%20Hit%20-%20white%20silhouette.png":"_assets/73fd37b0b78db4d88b1e.png","/Fight-game-With-JS/img/samuraiMack/Take%20Hit%20-%20white%20silhouette.png":"_assets/73fd37b0b78db4d88b1e.png","/img/samuraiMack/Take%20Hit%20-%20white%20silhouette.png":"_assets/73fd37b0b78db4d88b1e.png","/samuraiMack/Take%20Hit%20-%20white%20silhouette.png":"_assets/73fd37b0b78db4d88b1e.png","/Take%20Hit%20-%20white%20silhouette.png":"_assets/73fd37b0b78db4d88b1e.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/samuraiMack/Death.png":"_assets/88b47b160e1734ac7db1.png","/Fight-game-With-JS/img/samuraiMack/Death.png":"_assets/88b47b160e1734ac7db1.png","/img/samuraiMack/Death.png":"_assets/88b47b160e1734ac7db1.png","/samuraiMack/Death.png":"_assets/88b47b160e1734ac7db1.png","/Death.png":"_assets/88b47b160e1734ac7db1.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/kenji/Jump.png":"_assets/b7fd3d4ef3685b6a2c7b.png","/Fight-game-With-JS/img/kenji/Jump.png":"_assets/b7fd3d4ef3685b6a2c7b.png","/img/kenji/Jump.png":"_assets/b7fd3d4ef3685b6a2c7b.png","/kenji/Jump.png":"_assets/b7fd3d4ef3685b6a2c7b.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/kenji/Idle.png":"_assets/634c15b6ebbb64430b64.png","/Fight-game-With-JS/img/kenji/Idle.png":"_assets/634c15b6ebbb64430b64.png","/img/kenji/Idle.png":"_assets/634c15b6ebbb64430b64.png","/kenji/Idle.png":"_assets/634c15b6ebbb64430b64.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/kenji/Run.png":"_assets/c8e3d399e0ee80cf58f5.png","/Fight-game-With-JS/img/kenji/Run.png":"_assets/c8e3d399e0ee80cf58f5.png","/img/kenji/Run.png":"_assets/c8e3d399e0ee80cf58f5.png","/kenji/Run.png":"_assets/c8e3d399e0ee80cf58f5.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/kenji/Fall.png":"_assets/1beba9d7f709832ec516.png","/Fight-game-With-JS/img/kenji/Fall.png":"_assets/1beba9d7f709832ec516.png","/img/kenji/Fall.png":"_assets/1beba9d7f709832ec516.png","/kenji/Fall.png":"_assets/1beba9d7f709832ec516.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/kenji/Attack1.png":"_assets/88dbb2410c2d7a0db458.png","/Fight-game-With-JS/img/kenji/Attack1.png":"_assets/88dbb2410c2d7a0db458.png","/img/kenji/Attack1.png":"_assets/88dbb2410c2d7a0db458.png","/kenji/Attack1.png":"_assets/88dbb2410c2d7a0db458.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/kenji/Death.png":"_assets/ed2ae818d8342a596211.png","/Fight-game-With-JS/img/kenji/Death.png":"_assets/ed2ae818d8342a596211.png","/img/kenji/Death.png":"_assets/ed2ae818d8342a596211.png","/kenji/Death.png":"_assets/ed2ae818d8342a596211.png","https://elchin-novruzov.github.io/Fight-game-With-JS/img/kenji/Take%20hit.png":"_assets/11e1f9370aba0924c282.png","/Fight-game-With-JS/img/kenji/Take%20hit.png":"_assets/11e1f9370aba0924c282.png","/img/kenji/Take%20hit.png":"_assets/11e1f9370aba0924c282.png","/kenji/Take%20hit.png":"_assets/11e1f9370aba0924c282.png","/Take%20hit.png":"_assets/11e1f9370aba0924c282.png"};
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
