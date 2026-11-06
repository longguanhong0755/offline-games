(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Baseketball/style.css":"_assets/d3489b7ede61af79d428.css","/GameZone/Games/Baseketball/style.css":"_assets/d3489b7ede61af79d428.css","/Games/Baseketball/style.css":"_assets/d3489b7ede61af79d428.css","/Baseketball/style.css":"_assets/d3489b7ede61af79d428.css","/style.css":"_assets/d3489b7ede61af79d428.css","https://kunjgit.github.io/GameZone/Games/Baseketball/js/phaser.min.js":"_assets/b871b07a17bae5494815.js","/GameZone/Games/Baseketball/js/phaser.min.js":"_assets/b871b07a17bae5494815.js","/Games/Baseketball/js/phaser.min.js":"_assets/b871b07a17bae5494815.js","/Baseketball/js/phaser.min.js":"_assets/b871b07a17bae5494815.js","/js/phaser.min.js":"_assets/b871b07a17bae5494815.js","/phaser.min.js":"_assets/b871b07a17bae5494815.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/hoop.png":"_assets/e2a3d836bd3d8a10f6c2.png","/GameZone/Games/Baseketball/assets/images/hoop.png":"_assets/e2a3d836bd3d8a10f6c2.png","/Games/Baseketball/assets/images/hoop.png":"_assets/e2a3d836bd3d8a10f6c2.png","/Baseketball/assets/images/hoop.png":"_assets/e2a3d836bd3d8a10f6c2.png","/assets/images/hoop.png":"_assets/e2a3d836bd3d8a10f6c2.png","/images/hoop.png":"_assets/e2a3d836bd3d8a10f6c2.png","/hoop.png":"_assets/e2a3d836bd3d8a10f6c2.png","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/ball.png":"_assets/752845a5b37aefe08e26.png","/GameZone/Games/Baseketball/assets/images/ball.png":"_assets/752845a5b37aefe08e26.png","/Games/Baseketball/assets/images/ball.png":"_assets/752845a5b37aefe08e26.png","/Baseketball/assets/images/ball.png":"_assets/752845a5b37aefe08e26.png","/assets/images/ball.png":"_assets/752845a5b37aefe08e26.png","/images/ball.png":"_assets/752845a5b37aefe08e26.png","/ball.png":"_assets/752845a5b37aefe08e26.png","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/side_rim.png":"_assets/494b3064a5c2e0b3a551.png","/GameZone/Games/Baseketball/assets/images/side_rim.png":"_assets/494b3064a5c2e0b3a551.png","/Games/Baseketball/assets/images/side_rim.png":"_assets/494b3064a5c2e0b3a551.png","/Baseketball/assets/images/side_rim.png":"_assets/494b3064a5c2e0b3a551.png","/assets/images/side_rim.png":"_assets/494b3064a5c2e0b3a551.png","/images/side_rim.png":"_assets/494b3064a5c2e0b3a551.png","/side_rim.png":"_assets/494b3064a5c2e0b3a551.png","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/front_rim.png":"_assets/cacdd68030fd20e19962.png","/GameZone/Games/Baseketball/assets/images/front_rim.png":"_assets/cacdd68030fd20e19962.png","/Games/Baseketball/assets/images/front_rim.png":"_assets/cacdd68030fd20e19962.png","/Baseketball/assets/images/front_rim.png":"_assets/cacdd68030fd20e19962.png","/assets/images/front_rim.png":"_assets/cacdd68030fd20e19962.png","/images/front_rim.png":"_assets/cacdd68030fd20e19962.png","/front_rim.png":"_assets/cacdd68030fd20e19962.png","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/win0.png":"_assets/55e32cfea4a03afe4b6c.png","/GameZone/Games/Baseketball/assets/images/win0.png":"_assets/55e32cfea4a03afe4b6c.png","/Games/Baseketball/assets/images/win0.png":"_assets/55e32cfea4a03afe4b6c.png","/Baseketball/assets/images/win0.png":"_assets/55e32cfea4a03afe4b6c.png","/assets/images/win0.png":"_assets/55e32cfea4a03afe4b6c.png","/images/win0.png":"_assets/55e32cfea4a03afe4b6c.png","/win0.png":"_assets/55e32cfea4a03afe4b6c.png","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/win1.png":"_assets/e0dcd50bcf24d49715ee.png","/GameZone/Games/Baseketball/assets/images/win1.png":"_assets/e0dcd50bcf24d49715ee.png","/Games/Baseketball/assets/images/win1.png":"_assets/e0dcd50bcf24d49715ee.png","/Baseketball/assets/images/win1.png":"_assets/e0dcd50bcf24d49715ee.png","/assets/images/win1.png":"_assets/e0dcd50bcf24d49715ee.png","/images/win1.png":"_assets/e0dcd50bcf24d49715ee.png","/win1.png":"_assets/e0dcd50bcf24d49715ee.png","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/win2.png":"_assets/897ee671d8a293ef5bef.png","/GameZone/Games/Baseketball/assets/images/win2.png":"_assets/897ee671d8a293ef5bef.png","/Games/Baseketball/assets/images/win2.png":"_assets/897ee671d8a293ef5bef.png","/Baseketball/assets/images/win2.png":"_assets/897ee671d8a293ef5bef.png","/assets/images/win2.png":"_assets/897ee671d8a293ef5bef.png","/images/win2.png":"_assets/897ee671d8a293ef5bef.png","/win2.png":"_assets/897ee671d8a293ef5bef.png","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/win3.png":"_assets/05a6b16278f8f0469cd3.png","/GameZone/Games/Baseketball/assets/images/win3.png":"_assets/05a6b16278f8f0469cd3.png","/Games/Baseketball/assets/images/win3.png":"_assets/05a6b16278f8f0469cd3.png","/Baseketball/assets/images/win3.png":"_assets/05a6b16278f8f0469cd3.png","/assets/images/win3.png":"_assets/05a6b16278f8f0469cd3.png","/images/win3.png":"_assets/05a6b16278f8f0469cd3.png","/win3.png":"_assets/05a6b16278f8f0469cd3.png","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/win4.png":"_assets/696cd1f71fc7aadda7d6.png","/GameZone/Games/Baseketball/assets/images/win4.png":"_assets/696cd1f71fc7aadda7d6.png","/Games/Baseketball/assets/images/win4.png":"_assets/696cd1f71fc7aadda7d6.png","/Baseketball/assets/images/win4.png":"_assets/696cd1f71fc7aadda7d6.png","/assets/images/win4.png":"_assets/696cd1f71fc7aadda7d6.png","/images/win4.png":"_assets/696cd1f71fc7aadda7d6.png","/win4.png":"_assets/696cd1f71fc7aadda7d6.png","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/lose0.png":"_assets/bf7a8a298b079dfa2357.png","/GameZone/Games/Baseketball/assets/images/lose0.png":"_assets/bf7a8a298b079dfa2357.png","/Games/Baseketball/assets/images/lose0.png":"_assets/bf7a8a298b079dfa2357.png","/Baseketball/assets/images/lose0.png":"_assets/bf7a8a298b079dfa2357.png","/assets/images/lose0.png":"_assets/bf7a8a298b079dfa2357.png","/images/lose0.png":"_assets/bf7a8a298b079dfa2357.png","/lose0.png":"_assets/bf7a8a298b079dfa2357.png","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/lose1.png":"_assets/f6b9c1a88201c7c34500.png","/GameZone/Games/Baseketball/assets/images/lose1.png":"_assets/f6b9c1a88201c7c34500.png","/Games/Baseketball/assets/images/lose1.png":"_assets/f6b9c1a88201c7c34500.png","/Baseketball/assets/images/lose1.png":"_assets/f6b9c1a88201c7c34500.png","/assets/images/lose1.png":"_assets/f6b9c1a88201c7c34500.png","/images/lose1.png":"_assets/f6b9c1a88201c7c34500.png","/lose1.png":"_assets/f6b9c1a88201c7c34500.png","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/lose2.png":"_assets/cd30cc1f1c86e9ebff23.png","/GameZone/Games/Baseketball/assets/images/lose2.png":"_assets/cd30cc1f1c86e9ebff23.png","/Games/Baseketball/assets/images/lose2.png":"_assets/cd30cc1f1c86e9ebff23.png","/Baseketball/assets/images/lose2.png":"_assets/cd30cc1f1c86e9ebff23.png","/assets/images/lose2.png":"_assets/cd30cc1f1c86e9ebff23.png","/images/lose2.png":"_assets/cd30cc1f1c86e9ebff23.png","/lose2.png":"_assets/cd30cc1f1c86e9ebff23.png","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/lose3.png":"_assets/c8ff8282e4176b11c894.png","/GameZone/Games/Baseketball/assets/images/lose3.png":"_assets/c8ff8282e4176b11c894.png","/Games/Baseketball/assets/images/lose3.png":"_assets/c8ff8282e4176b11c894.png","/Baseketball/assets/images/lose3.png":"_assets/c8ff8282e4176b11c894.png","/assets/images/lose3.png":"_assets/c8ff8282e4176b11c894.png","/images/lose3.png":"_assets/c8ff8282e4176b11c894.png","/lose3.png":"_assets/c8ff8282e4176b11c894.png","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/images/lose4.png":"_assets/c6ef046ef6ca9f0787fa.png","/GameZone/Games/Baseketball/assets/images/lose4.png":"_assets/c6ef046ef6ca9f0787fa.png","/Games/Baseketball/assets/images/lose4.png":"_assets/c6ef046ef6ca9f0787fa.png","/Baseketball/assets/images/lose4.png":"_assets/c6ef046ef6ca9f0787fa.png","/assets/images/lose4.png":"_assets/c6ef046ef6ca9f0787fa.png","/images/lose4.png":"_assets/c6ef046ef6ca9f0787fa.png","/lose4.png":"_assets/c6ef046ef6ca9f0787fa.png","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/audio/score.wav":"_assets/36e5b3d9a98f8e7de260.wav","/GameZone/Games/Baseketball/assets/audio/score.wav":"_assets/36e5b3d9a98f8e7de260.wav","/Games/Baseketball/assets/audio/score.wav":"_assets/36e5b3d9a98f8e7de260.wav","/Baseketball/assets/audio/score.wav":"_assets/36e5b3d9a98f8e7de260.wav","/assets/audio/score.wav":"_assets/36e5b3d9a98f8e7de260.wav","/audio/score.wav":"_assets/36e5b3d9a98f8e7de260.wav","/score.wav":"_assets/36e5b3d9a98f8e7de260.wav","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/audio/backboard.wav":"_assets/7f802290a6ff1ccc760f.wav","/GameZone/Games/Baseketball/assets/audio/backboard.wav":"_assets/7f802290a6ff1ccc760f.wav","/Games/Baseketball/assets/audio/backboard.wav":"_assets/7f802290a6ff1ccc760f.wav","/Baseketball/assets/audio/backboard.wav":"_assets/7f802290a6ff1ccc760f.wav","/assets/audio/backboard.wav":"_assets/7f802290a6ff1ccc760f.wav","/audio/backboard.wav":"_assets/7f802290a6ff1ccc760f.wav","/backboard.wav":"_assets/7f802290a6ff1ccc760f.wav","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/audio/whoosh.wav":"_assets/5971ca00a18fb60ebdc6.wav","/GameZone/Games/Baseketball/assets/audio/whoosh.wav":"_assets/5971ca00a18fb60ebdc6.wav","/Games/Baseketball/assets/audio/whoosh.wav":"_assets/5971ca00a18fb60ebdc6.wav","/Baseketball/assets/audio/whoosh.wav":"_assets/5971ca00a18fb60ebdc6.wav","/assets/audio/whoosh.wav":"_assets/5971ca00a18fb60ebdc6.wav","/audio/whoosh.wav":"_assets/5971ca00a18fb60ebdc6.wav","/whoosh.wav":"_assets/5971ca00a18fb60ebdc6.wav","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/audio/fail.wav":"_assets/dc7f893bab6c7d417cf2.wav","/GameZone/Games/Baseketball/assets/audio/fail.wav":"_assets/dc7f893bab6c7d417cf2.wav","/Games/Baseketball/assets/audio/fail.wav":"_assets/dc7f893bab6c7d417cf2.wav","/Baseketball/assets/audio/fail.wav":"_assets/dc7f893bab6c7d417cf2.wav","/assets/audio/fail.wav":"_assets/dc7f893bab6c7d417cf2.wav","/audio/fail.wav":"_assets/dc7f893bab6c7d417cf2.wav","/fail.wav":"_assets/dc7f893bab6c7d417cf2.wav","https://kunjgit.github.io/GameZone/Games/Baseketball/assets/audio/spawn.wav":"_assets/f8aeb650f5c43c0769be.wav","/GameZone/Games/Baseketball/assets/audio/spawn.wav":"_assets/f8aeb650f5c43c0769be.wav","/Games/Baseketball/assets/audio/spawn.wav":"_assets/f8aeb650f5c43c0769be.wav","/Baseketball/assets/audio/spawn.wav":"_assets/f8aeb650f5c43c0769be.wav","/assets/audio/spawn.wav":"_assets/f8aeb650f5c43c0769be.wav","/audio/spawn.wav":"_assets/f8aeb650f5c43c0769be.wav","/spawn.wav":"_assets/f8aeb650f5c43c0769be.wav"};
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
