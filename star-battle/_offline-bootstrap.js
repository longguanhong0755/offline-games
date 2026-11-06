(() => {
  "use strict";
  const RUNTIME_MAP = {"https://4ark.me/star-battle/css/common.css":"_assets/c9c4a6bcaea72cb5dc73.css","/star-battle/css/common.css":"_assets/c9c4a6bcaea72cb5dc73.css","/css/common.css":"_assets/c9c4a6bcaea72cb5dc73.css","/common.css":"_assets/c9c4a6bcaea72cb5dc73.css","https://4ark.me/star-battle/css/style.css":"_assets/ce1491c72f167b2b69f0.css","/star-battle/css/style.css":"_assets/ce1491c72f167b2b69f0.css","/css/style.css":"_assets/ce1491c72f167b2b69f0.css","/style.css":"_assets/ce1491c72f167b2b69f0.css","https://4ark.me/star-battle/img/fuel2.png":"_assets/eb2eb6177ae8317700a7.png","/star-battle/img/fuel2.png":"_assets/eb2eb6177ae8317700a7.png","/img/fuel2.png":"_assets/eb2eb6177ae8317700a7.png","/fuel2.png":"_assets/eb2eb6177ae8317700a7.png","https://4ark.me/star-battle/img/time3.png":"_assets/a290d8733a3768e7dfc9.png","/star-battle/img/time3.png":"_assets/a290d8733a3768e7dfc9.png","/img/time3.png":"_assets/a290d8733a3768e7dfc9.png","/time3.png":"_assets/a290d8733a3768e7dfc9.png","https://4ark.me/star-battle/img/playerBullet.png":"_assets/df54e38df5e8447cbc80.png","/star-battle/img/playerBullet.png":"_assets/df54e38df5e8447cbc80.png","/img/playerBullet.png":"_assets/df54e38df5e8447cbc80.png","/playerBullet.png":"_assets/df54e38df5e8447cbc80.png","https://4ark.me/star-battle/img/logo-01.png":"_assets/7fe4b45d93d26ffa5ea8.png","/star-battle/img/logo-01.png":"_assets/7fe4b45d93d26ffa5ea8.png","/img/logo-01.png":"_assets/7fe4b45d93d26ffa5ea8.png","/logo-01.png":"_assets/7fe4b45d93d26ffa5ea8.png","https://4ark.me/star-battle/img/score.png":"_assets/73ebfd6b08da01ac54b4.png","/star-battle/img/score.png":"_assets/73ebfd6b08da01ac54b4.png","/img/score.png":"_assets/73ebfd6b08da01ac54b4.png","/score.png":"_assets/73ebfd6b08da01ac54b4.png","https://4ark.me/star-battle/js/utils/utils.js":"_assets/fef4bd1ddce34ca1e645.js","/star-battle/js/utils/utils.js":"_assets/fef4bd1ddce34ca1e645.js","/js/utils/utils.js":"_assets/fef4bd1ddce34ca1e645.js","/utils/utils.js":"_assets/fef4bd1ddce34ca1e645.js","/utils.js":"_assets/fef4bd1ddce34ca1e645.js","https://4ark.me/star-battle/js/utils/res.js":"_assets/607c9dcbcb781f9452b4.js","/star-battle/js/utils/res.js":"_assets/607c9dcbcb781f9452b4.js","/js/utils/res.js":"_assets/607c9dcbcb781f9452b4.js","/utils/res.js":"_assets/607c9dcbcb781f9452b4.js","/res.js":"_assets/607c9dcbcb781f9452b4.js","https://4ark.me/star-battle/js/class/scene.js":"_assets/e9b3d029ad16adfeb5a1.js","/star-battle/js/class/scene.js":"_assets/e9b3d029ad16adfeb5a1.js","/js/class/scene.js":"_assets/e9b3d029ad16adfeb5a1.js","/class/scene.js":"_assets/e9b3d029ad16adfeb5a1.js","/scene.js":"_assets/e9b3d029ad16adfeb5a1.js","https://4ark.me/star-battle/js/class/element.js":"_assets/daa619543b401d1c54ff.js","/star-battle/js/class/element.js":"_assets/daa619543b401d1c54ff.js","/js/class/element.js":"_assets/daa619543b401d1c54ff.js","/class/element.js":"_assets/daa619543b401d1c54ff.js","/element.js":"_assets/daa619543b401d1c54ff.js","https://4ark.me/star-battle/js/class/cooldown.js":"_assets/32f380cd89a7bc63eb30.js","/star-battle/js/class/cooldown.js":"_assets/32f380cd89a7bc63eb30.js","/js/class/cooldown.js":"_assets/32f380cd89a7bc63eb30.js","/class/cooldown.js":"_assets/32f380cd89a7bc63eb30.js","/cooldown.js":"_assets/32f380cd89a7bc63eb30.js","https://4ark.me/star-battle/js/class/plane.js":"_assets/88d5eb73935748930495.js","/star-battle/js/class/plane.js":"_assets/88d5eb73935748930495.js","/js/class/plane.js":"_assets/88d5eb73935748930495.js","/class/plane.js":"_assets/88d5eb73935748930495.js","/plane.js":"_assets/88d5eb73935748930495.js","https://4ark.me/star-battle/js/class/animation.js":"_assets/e32cc347d46d4ab895a2.js","/star-battle/js/class/animation.js":"_assets/e32cc347d46d4ab895a2.js","/js/class/animation.js":"_assets/e32cc347d46d4ab895a2.js","/class/animation.js":"_assets/e32cc347d46d4ab895a2.js","/animation.js":"_assets/e32cc347d46d4ab895a2.js","https://4ark.me/star-battle/js/class/player.js":"_assets/726e15c80fe05fcdb73c.js","/star-battle/js/class/player.js":"_assets/726e15c80fe05fcdb73c.js","/js/class/player.js":"_assets/726e15c80fe05fcdb73c.js","/class/player.js":"_assets/726e15c80fe05fcdb73c.js","/player.js":"_assets/726e15c80fe05fcdb73c.js","https://4ark.me/star-battle/js/class/enemy.js":"_assets/eb2dfef67993297770ce.js","/star-battle/js/class/enemy.js":"_assets/eb2dfef67993297770ce.js","/js/class/enemy.js":"_assets/eb2dfef67993297770ce.js","/class/enemy.js":"_assets/eb2dfef67993297770ce.js","/enemy.js":"_assets/eb2dfef67993297770ce.js","https://4ark.me/star-battle/js/class/meteorite.js":"_assets/97822423000eaca4e9d5.js","/star-battle/js/class/meteorite.js":"_assets/97822423000eaca4e9d5.js","/js/class/meteorite.js":"_assets/97822423000eaca4e9d5.js","/class/meteorite.js":"_assets/97822423000eaca4e9d5.js","/meteorite.js":"_assets/97822423000eaca4e9d5.js","https://4ark.me/star-battle/js/class/bullet.js":"_assets/911ed3fd41691613f631.js","/star-battle/js/class/bullet.js":"_assets/911ed3fd41691613f631.js","/js/class/bullet.js":"_assets/911ed3fd41691613f631.js","/class/bullet.js":"_assets/911ed3fd41691613f631.js","/bullet.js":"_assets/911ed3fd41691613f631.js","https://4ark.me/star-battle/js/config/config.js":"_assets/8bfc307e621ff71d2a54.js","/star-battle/js/config/config.js":"_assets/8bfc307e621ff71d2a54.js","/js/config/config.js":"_assets/8bfc307e621ff71d2a54.js","/config/config.js":"_assets/8bfc307e621ff71d2a54.js","/config.js":"_assets/8bfc307e621ff71d2a54.js","https://4ark.me/star-battle/js/class/star.js":"_assets/8c7412f65be9cdc83f54.js","/star-battle/js/class/star.js":"_assets/8c7412f65be9cdc83f54.js","/js/class/star.js":"_assets/8c7412f65be9cdc83f54.js","/class/star.js":"_assets/8c7412f65be9cdc83f54.js","/star.js":"_assets/8c7412f65be9cdc83f54.js","https://4ark.me/star-battle/js/scenes/start.js":"_assets/70bba8e572c8700cb085.js","/star-battle/js/scenes/start.js":"_assets/70bba8e572c8700cb085.js","/js/scenes/start.js":"_assets/70bba8e572c8700cb085.js","/scenes/start.js":"_assets/70bba8e572c8700cb085.js","/start.js":"_assets/70bba8e572c8700cb085.js","https://4ark.me/star-battle/img/a+.png":"_assets/4a35f5697b085c752278.png","/star-battle/img/a+.png":"_assets/4a35f5697b085c752278.png","/img/a+.png":"_assets/4a35f5697b085c752278.png","/a+.png":"_assets/4a35f5697b085c752278.png","https://4ark.me/star-battle/img/play.png":"_assets/e55857aece05f767ee4f.png","/star-battle/img/play.png":"_assets/e55857aece05f767ee4f.png","/img/play.png":"_assets/e55857aece05f767ee4f.png","/play.png":"_assets/e55857aece05f767ee4f.png","https://4ark.me/star-battle/img/mute.png":"_assets/a63a5306001512c9b3ad.png","/star-battle/img/mute.png":"_assets/a63a5306001512c9b3ad.png","/img/mute.png":"_assets/a63a5306001512c9b3ad.png","/mute.png":"_assets/a63a5306001512c9b3ad.png","https://4ark.me/star-battle/img/speaker.png":"_assets/aee06280269520fa5570.png","/star-battle/img/speaker.png":"_assets/aee06280269520fa5570.png","/img/speaker.png":"_assets/aee06280269520fa5570.png","/speaker.png":"_assets/aee06280269520fa5570.png","https://4ark.me/star-battle/img/pause.png":"_assets/5f7a0912d1baff11f3e8.png","/star-battle/img/pause.png":"_assets/5f7a0912d1baff11f3e8.png","/img/pause.png":"_assets/5f7a0912d1baff11f3e8.png","/pause.png":"_assets/5f7a0912d1baff11f3e8.png","https://4ark.me/star-battle/js/scenes/over.js":"_assets/0479c9f00287e01093cb.js","/star-battle/js/scenes/over.js":"_assets/0479c9f00287e01093cb.js","/js/scenes/over.js":"_assets/0479c9f00287e01093cb.js","/scenes/over.js":"_assets/0479c9f00287e01093cb.js","/over.js":"_assets/0479c9f00287e01093cb.js","https://4ark.me/star-battle/js/class/fuel.js":"_assets/7ec78786b5bce7d68a36.js","/star-battle/js/class/fuel.js":"_assets/7ec78786b5bce7d68a36.js","/js/class/fuel.js":"_assets/7ec78786b5bce7d68a36.js","/class/fuel.js":"_assets/7ec78786b5bce7d68a36.js","/fuel.js":"_assets/7ec78786b5bce7d68a36.js","https://4ark.me/star-battle/js/class/friend.js":"_assets/0afc2eed994bbd7cf601.js","/star-battle/js/class/friend.js":"_assets/0afc2eed994bbd7cf601.js","/js/class/friend.js":"_assets/0afc2eed994bbd7cf601.js","/class/friend.js":"_assets/0afc2eed994bbd7cf601.js","/friend.js":"_assets/0afc2eed994bbd7cf601.js","https://4ark.me/star-battle/js/scenes/rank.js":"_assets/a9b8f4cccd24827ea5c5.js","/star-battle/js/scenes/rank.js":"_assets/a9b8f4cccd24827ea5c5.js","/js/scenes/rank.js":"_assets/a9b8f4cccd24827ea5c5.js","/scenes/rank.js":"_assets/a9b8f4cccd24827ea5c5.js","/rank.js":"_assets/a9b8f4cccd24827ea5c5.js","https://4ark.me/star-battle/js/game.js":"_assets/592955e2a410cde8a2f0.js","/star-battle/js/game.js":"_assets/592955e2a410cde8a2f0.js","/js/game.js":"_assets/592955e2a410cde8a2f0.js","/game.js":"_assets/592955e2a410cde8a2f0.js","https://4ark.me/star-battle/js/scenes/play.js":"_assets/d4c8115e8cba28061d12.js","/star-battle/js/scenes/play.js":"_assets/d4c8115e8cba28061d12.js","/js/scenes/play.js":"_assets/d4c8115e8cba28061d12.js","/scenes/play.js":"_assets/d4c8115e8cba28061d12.js","/play.js":"_assets/d4c8115e8cba28061d12.js","https://4ark.me/star-battle/js/main.js":"_assets/165197aa872742e40c10.js","/star-battle/js/main.js":"_assets/165197aa872742e40c10.js","/js/main.js":"_assets/165197aa872742e40c10.js","/main.js":"_assets/165197aa872742e40c10.js","https://4ark.me/star-battle/img/a-.png":"_assets/6aade2fe58422345cf8d.png","/star-battle/img/a-.png":"_assets/6aade2fe58422345cf8d.png","/img/a-.png":"_assets/6aade2fe58422345cf8d.png","/a-.png":"_assets/6aade2fe58422345cf8d.png","https://4ark.me/star-battle/img/background-1.jpg":"_assets/fb976ebe009341d08a00.jpg","/star-battle/img/background-1.jpg":"_assets/fb976ebe009341d08a00.jpg","/img/background-1.jpg":"_assets/fb976ebe009341d08a00.jpg","/background-1.jpg":"_assets/fb976ebe009341d08a00.jpg"};
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
