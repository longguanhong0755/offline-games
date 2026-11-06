(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/mario-game/p5.sound.min.js":"_assets/a5c528ac852f96ab6b61.js","/GameZone/Games/mario-game/p5.sound.min.js":"_assets/a5c528ac852f96ab6b61.js","/Games/mario-game/p5.sound.min.js":"_assets/a5c528ac852f96ab6b61.js","/mario-game/p5.sound.min.js":"_assets/a5c528ac852f96ab6b61.js","/p5.sound.min.js":"_assets/a5c528ac852f96ab6b61.js","https://kunjgit.github.io/GameZone/Games/mario-game/p5.dom.min.js":"_assets/c1662cb449128a7f8241.js","/GameZone/Games/mario-game/p5.dom.min.js":"_assets/c1662cb449128a7f8241.js","/Games/mario-game/p5.dom.min.js":"_assets/c1662cb449128a7f8241.js","/mario-game/p5.dom.min.js":"_assets/c1662cb449128a7f8241.js","/p5.dom.min.js":"_assets/c1662cb449128a7f8241.js","https://kunjgit.github.io/GameZone/Games/mario-game/p5.play.js":"_assets/3386bec3a904103d131d.js","/GameZone/Games/mario-game/p5.play.js":"_assets/3386bec3a904103d131d.js","/Games/mario-game/p5.play.js":"_assets/3386bec3a904103d131d.js","/mario-game/p5.play.js":"_assets/3386bec3a904103d131d.js","/p5.play.js":"_assets/3386bec3a904103d131d.js","https://kunjgit.github.io/GameZone/Games/mario-game/style.css":"_assets/934a59add6863aa978e1.css","/GameZone/Games/mario-game/style.css":"_assets/934a59add6863aa978e1.css","/Games/mario-game/style.css":"_assets/934a59add6863aa978e1.css","/mario-game/style.css":"_assets/934a59add6863aa978e1.css","/style.css":"_assets/934a59add6863aa978e1.css","https://kunjgit.github.io/GameZone/Games/mario-game/sketch.js":"_assets/9039315bd4fcf95e7b91.js","/GameZone/Games/mario-game/sketch.js":"_assets/9039315bd4fcf95e7b91.js","/Games/mario-game/sketch.js":"_assets/9039315bd4fcf95e7b91.js","/mario-game/sketch.js":"_assets/9039315bd4fcf95e7b91.js","/sketch.js":"_assets/9039315bd4fcf95e7b91.js","https://kunjgit.github.io/GameZone/Games/mario-game/p5.js":"_assets/89237b843c6f4d3a3463.js","/GameZone/Games/mario-game/p5.js":"_assets/89237b843c6f4d3a3463.js","/Games/mario-game/p5.js":"_assets/89237b843c6f4d3a3463.js","/mario-game/p5.js":"_assets/89237b843c6f4d3a3463.js","/p5.js":"_assets/89237b843c6f4d3a3463.js","https://kunjgit.github.io/GameZone/Games/mario-game/jump.mp3":"_assets/e5349fddba83ece01443.mp3","/GameZone/Games/mario-game/jump.mp3":"_assets/e5349fddba83ece01443.mp3","/Games/mario-game/jump.mp3":"_assets/e5349fddba83ece01443.mp3","/mario-game/jump.mp3":"_assets/e5349fddba83ece01443.mp3","/jump.mp3":"_assets/e5349fddba83ece01443.mp3","https://kunjgit.github.io/GameZone/Games/mario-game/die.mp3":"_assets/284633fac7e26014a823.mp3","/GameZone/Games/mario-game/die.mp3":"_assets/284633fac7e26014a823.mp3","/Games/mario-game/die.mp3":"_assets/284633fac7e26014a823.mp3","/mario-game/die.mp3":"_assets/284633fac7e26014a823.mp3","/die.mp3":"_assets/284633fac7e26014a823.mp3","https://kunjgit.github.io/GameZone/Games/mario-game/checkPoint.mp3":"_assets/3325dd7d8988e67bd368.mp3","/GameZone/Games/mario-game/checkPoint.mp3":"_assets/3325dd7d8988e67bd368.mp3","/Games/mario-game/checkPoint.mp3":"_assets/3325dd7d8988e67bd368.mp3","/mario-game/checkPoint.mp3":"_assets/3325dd7d8988e67bd368.mp3","/checkPoint.mp3":"_assets/3325dd7d8988e67bd368.mp3","https://kunjgit.github.io/GameZone/Games/mario-game/ground2.png":"_assets/726fc688ef2fd6186350.png","/GameZone/Games/mario-game/ground2.png":"_assets/726fc688ef2fd6186350.png","/Games/mario-game/ground2.png":"_assets/726fc688ef2fd6186350.png","/mario-game/ground2.png":"_assets/726fc688ef2fd6186350.png","/ground2.png":"_assets/726fc688ef2fd6186350.png","https://kunjgit.github.io/GameZone/Games/mario-game/bg.png":"_assets/23a3ce3b0d1d5ff931bf.png","/GameZone/Games/mario-game/bg.png":"_assets/23a3ce3b0d1d5ff931bf.png","/Games/mario-game/bg.png":"_assets/23a3ce3b0d1d5ff931bf.png","/mario-game/bg.png":"_assets/23a3ce3b0d1d5ff931bf.png","/bg.png":"_assets/23a3ce3b0d1d5ff931bf.png","https://kunjgit.github.io/GameZone/Games/mario-game/mario02.png":"_assets/95c83681d1722bdc16e8.png","/GameZone/Games/mario-game/mario02.png":"_assets/95c83681d1722bdc16e8.png","/Games/mario-game/mario02.png":"_assets/95c83681d1722bdc16e8.png","/mario-game/mario02.png":"_assets/95c83681d1722bdc16e8.png","/mario02.png":"_assets/95c83681d1722bdc16e8.png","https://kunjgit.github.io/GameZone/Games/mario-game/mario00.png":"_assets/ccafb393bb636d48cd3c.png","/GameZone/Games/mario-game/mario00.png":"_assets/ccafb393bb636d48cd3c.png","/Games/mario-game/mario00.png":"_assets/ccafb393bb636d48cd3c.png","/mario-game/mario00.png":"_assets/ccafb393bb636d48cd3c.png","/mario00.png":"_assets/ccafb393bb636d48cd3c.png","https://kunjgit.github.io/GameZone/Games/mario-game/mario01.png":"_assets/4f2888d4130b15db4edd.png","/GameZone/Games/mario-game/mario01.png":"_assets/4f2888d4130b15db4edd.png","/Games/mario-game/mario01.png":"_assets/4f2888d4130b15db4edd.png","/mario-game/mario01.png":"_assets/4f2888d4130b15db4edd.png","/mario01.png":"_assets/4f2888d4130b15db4edd.png","https://kunjgit.github.io/GameZone/Games/mario-game/obstacle1.png":"_assets/dfa9d3b1c58937a6f06b.png","/GameZone/Games/mario-game/obstacle1.png":"_assets/dfa9d3b1c58937a6f06b.png","/Games/mario-game/obstacle1.png":"_assets/dfa9d3b1c58937a6f06b.png","/mario-game/obstacle1.png":"_assets/dfa9d3b1c58937a6f06b.png","/obstacle1.png":"_assets/dfa9d3b1c58937a6f06b.png","https://kunjgit.github.io/GameZone/Games/mario-game/mario03.png":"_assets/406f117f3a94f230fc1f.png","/GameZone/Games/mario-game/mario03.png":"_assets/406f117f3a94f230fc1f.png","/Games/mario-game/mario03.png":"_assets/406f117f3a94f230fc1f.png","/mario-game/mario03.png":"_assets/406f117f3a94f230fc1f.png","/mario03.png":"_assets/406f117f3a94f230fc1f.png","https://kunjgit.github.io/GameZone/Games/mario-game/brick.png":"_assets/a3013a0ccf6bd1fe86fc.png","/GameZone/Games/mario-game/brick.png":"_assets/a3013a0ccf6bd1fe86fc.png","/Games/mario-game/brick.png":"_assets/a3013a0ccf6bd1fe86fc.png","/mario-game/brick.png":"_assets/a3013a0ccf6bd1fe86fc.png","/brick.png":"_assets/a3013a0ccf6bd1fe86fc.png","https://kunjgit.github.io/GameZone/Games/mario-game/obstacle2.png":"_assets/35097731cc551615e2bf.png","/GameZone/Games/mario-game/obstacle2.png":"_assets/35097731cc551615e2bf.png","/Games/mario-game/obstacle2.png":"_assets/35097731cc551615e2bf.png","/mario-game/obstacle2.png":"_assets/35097731cc551615e2bf.png","/obstacle2.png":"_assets/35097731cc551615e2bf.png","https://kunjgit.github.io/GameZone/Games/mario-game/obstacle3.png":"_assets/03d8fa77e13632d256b8.png","/GameZone/Games/mario-game/obstacle3.png":"_assets/03d8fa77e13632d256b8.png","/Games/mario-game/obstacle3.png":"_assets/03d8fa77e13632d256b8.png","/mario-game/obstacle3.png":"_assets/03d8fa77e13632d256b8.png","/obstacle3.png":"_assets/03d8fa77e13632d256b8.png","https://kunjgit.github.io/GameZone/Games/mario-game/obstacle4.png":"_assets/96182c165f8882553a10.png","/GameZone/Games/mario-game/obstacle4.png":"_assets/96182c165f8882553a10.png","/Games/mario-game/obstacle4.png":"_assets/96182c165f8882553a10.png","/mario-game/obstacle4.png":"_assets/96182c165f8882553a10.png","/obstacle4.png":"_assets/96182c165f8882553a10.png","https://kunjgit.github.io/GameZone/Games/mario-game/gameOver.png":"_assets/93717e304c1678382bd6.png","/GameZone/Games/mario-game/gameOver.png":"_assets/93717e304c1678382bd6.png","/Games/mario-game/gameOver.png":"_assets/93717e304c1678382bd6.png","/mario-game/gameOver.png":"_assets/93717e304c1678382bd6.png","/gameOver.png":"_assets/93717e304c1678382bd6.png","https://kunjgit.github.io/GameZone/Games/mario-game/restart.png":"_assets/9af1e0d58ea8935a9e88.png","/GameZone/Games/mario-game/restart.png":"_assets/9af1e0d58ea8935a9e88.png","/Games/mario-game/restart.png":"_assets/9af1e0d58ea8935a9e88.png","/mario-game/restart.png":"_assets/9af1e0d58ea8935a9e88.png","/restart.png":"_assets/9af1e0d58ea8935a9e88.png","https://kunjgit.github.io/GameZone/Games/mario-game/collided.png":"_assets/61c6abb0ce4d644774a6.png","/GameZone/Games/mario-game/collided.png":"_assets/61c6abb0ce4d644774a6.png","/Games/mario-game/collided.png":"_assets/61c6abb0ce4d644774a6.png","/mario-game/collided.png":"_assets/61c6abb0ce4d644774a6.png","/collided.png":"_assets/61c6abb0ce4d644774a6.png"};
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
