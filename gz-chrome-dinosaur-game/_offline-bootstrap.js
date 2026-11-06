(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Chrome_Dinosaur_Game/style.css":"_assets/b5d560713cca3723296d.css","/GameZone/Games/Chrome_Dinosaur_Game/style.css":"_assets/b5d560713cca3723296d.css","/Games/Chrome_Dinosaur_Game/style.css":"_assets/b5d560713cca3723296d.css","/Chrome_Dinosaur_Game/style.css":"_assets/b5d560713cca3723296d.css","/style.css":"_assets/b5d560713cca3723296d.css","https://kunjgit.github.io/GameZone/Games/Chrome_Dinosaur_Game/script.js":"_assets/b6197a6f2a70e5d88a30.js","/GameZone/Games/Chrome_Dinosaur_Game/script.js":"_assets/b6197a6f2a70e5d88a30.js","/Games/Chrome_Dinosaur_Game/script.js":"_assets/b6197a6f2a70e5d88a30.js","/Chrome_Dinosaur_Game/script.js":"_assets/b6197a6f2a70e5d88a30.js","/script.js":"_assets/b6197a6f2a70e5d88a30.js","https://fonts.googleapis.com/css2?family=Play&family=Press+Start+2P&display=swap":"_assets/3bc4164106b1e88f6e34.css","/css2":"_assets/3bc4164106b1e88f6e34.css","/css2?family=Play&family=Press+Start+2P&display=swap":"_assets/3bc4164106b1e88f6e34.css","https://fonts.googleapis.com/css2":"_assets/3bc4164106b1e88f6e34.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://kunjgit.github.io/GameZone/Games/Chrome_Dinosaur_Game/assets/sounds/die.mp3":"_assets/06deefeb1a4b96945530.mp3","/GameZone/Games/Chrome_Dinosaur_Game/assets/sounds/die.mp3":"_assets/06deefeb1a4b96945530.mp3","/Games/Chrome_Dinosaur_Game/assets/sounds/die.mp3":"_assets/06deefeb1a4b96945530.mp3","/Chrome_Dinosaur_Game/assets/sounds/die.mp3":"_assets/06deefeb1a4b96945530.mp3","/assets/sounds/die.mp3":"_assets/06deefeb1a4b96945530.mp3","/sounds/die.mp3":"_assets/06deefeb1a4b96945530.mp3","/die.mp3":"_assets/06deefeb1a4b96945530.mp3","https://kunjgit.github.io/GameZone/Games/Chrome_Dinosaur_Game/assets/sounds/jump.mp3":"_assets/f19cc11ffb9289d6ed84.mp3","/GameZone/Games/Chrome_Dinosaur_Game/assets/sounds/jump.mp3":"_assets/f19cc11ffb9289d6ed84.mp3","/Games/Chrome_Dinosaur_Game/assets/sounds/jump.mp3":"_assets/f19cc11ffb9289d6ed84.mp3","/Chrome_Dinosaur_Game/assets/sounds/jump.mp3":"_assets/f19cc11ffb9289d6ed84.mp3","/assets/sounds/jump.mp3":"_assets/f19cc11ffb9289d6ed84.mp3","/sounds/jump.mp3":"_assets/f19cc11ffb9289d6ed84.mp3","/jump.mp3":"_assets/f19cc11ffb9289d6ed84.mp3","https://kunjgit.github.io/GameZone/Games/Chrome_Dinosaur_Game/assets/sounds/point.mp3":"_assets/a15d2d45b9998ba8d510.mp3","/GameZone/Games/Chrome_Dinosaur_Game/assets/sounds/point.mp3":"_assets/a15d2d45b9998ba8d510.mp3","/Games/Chrome_Dinosaur_Game/assets/sounds/point.mp3":"_assets/a15d2d45b9998ba8d510.mp3","/Chrome_Dinosaur_Game/assets/sounds/point.mp3":"_assets/a15d2d45b9998ba8d510.mp3","/assets/sounds/point.mp3":"_assets/a15d2d45b9998ba8d510.mp3","/sounds/point.mp3":"_assets/a15d2d45b9998ba8d510.mp3","/point.mp3":"_assets/a15d2d45b9998ba8d510.mp3","https://fonts.gstatic.com/s/pressstart2p/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/s/pressstart2p/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/pressstart2p/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://fonts.gstatic.com/s/play/v21/6aez4K2oVqwIvtU2Hw.woff2":"_assets/a8824b32c20407f3e05b.woff2","/s/play/v21/6aez4K2oVqwIvtU2Hw.woff2":"_assets/a8824b32c20407f3e05b.woff2","/play/v21/6aez4K2oVqwIvtU2Hw.woff2":"_assets/a8824b32c20407f3e05b.woff2","/v21/6aez4K2oVqwIvtU2Hw.woff2":"_assets/a8824b32c20407f3e05b.woff2","/6aez4K2oVqwIvtU2Hw.woff2":"_assets/a8824b32c20407f3e05b.woff2","https://kunjgit.github.io/GameZone/Games/Chrome_Dinosaur_Game/assets/dino.png":"_assets/80b54cb6171c21c9fa64.png","/GameZone/Games/Chrome_Dinosaur_Game/assets/dino.png":"_assets/80b54cb6171c21c9fa64.png","/Games/Chrome_Dinosaur_Game/assets/dino.png":"_assets/80b54cb6171c21c9fa64.png","/Chrome_Dinosaur_Game/assets/dino.png":"_assets/80b54cb6171c21c9fa64.png","/assets/dino.png":"_assets/80b54cb6171c21c9fa64.png","/dino.png":"_assets/80b54cb6171c21c9fa64.png","https://kunjgit.github.io/GameZone/Games/Chrome_Dinosaur_Game/assets/cactus1.png":"_assets/75fb88f818ca84d3443e.png","/GameZone/Games/Chrome_Dinosaur_Game/assets/cactus1.png":"_assets/75fb88f818ca84d3443e.png","/Games/Chrome_Dinosaur_Game/assets/cactus1.png":"_assets/75fb88f818ca84d3443e.png","/Chrome_Dinosaur_Game/assets/cactus1.png":"_assets/75fb88f818ca84d3443e.png","/assets/cactus1.png":"_assets/75fb88f818ca84d3443e.png","/cactus1.png":"_assets/75fb88f818ca84d3443e.png","https://kunjgit.github.io/GameZone/Games/Chrome_Dinosaur_Game/assets/cactus2.png":"_assets/61b777a6f50cfb7837bb.png","/GameZone/Games/Chrome_Dinosaur_Game/assets/cactus2.png":"_assets/61b777a6f50cfb7837bb.png","/Games/Chrome_Dinosaur_Game/assets/cactus2.png":"_assets/61b777a6f50cfb7837bb.png","/Chrome_Dinosaur_Game/assets/cactus2.png":"_assets/61b777a6f50cfb7837bb.png","/assets/cactus2.png":"_assets/61b777a6f50cfb7837bb.png","/cactus2.png":"_assets/61b777a6f50cfb7837bb.png","https://kunjgit.github.io/GameZone/Games/Chrome_Dinosaur_Game/assets/cactus3.png":"_assets/e0487d079e15dd04be75.png","/GameZone/Games/Chrome_Dinosaur_Game/assets/cactus3.png":"_assets/e0487d079e15dd04be75.png","/Games/Chrome_Dinosaur_Game/assets/cactus3.png":"_assets/e0487d079e15dd04be75.png","/Chrome_Dinosaur_Game/assets/cactus3.png":"_assets/e0487d079e15dd04be75.png","/assets/cactus3.png":"_assets/e0487d079e15dd04be75.png","/cactus3.png":"_assets/e0487d079e15dd04be75.png","https://kunjgit.github.io/GameZone/Games/Chrome_Dinosaur_Game/assets/dino-dead.png":"_assets/a6d76009aa6f7a0109a2.png","/GameZone/Games/Chrome_Dinosaur_Game/assets/dino-dead.png":"_assets/a6d76009aa6f7a0109a2.png","/Games/Chrome_Dinosaur_Game/assets/dino-dead.png":"_assets/a6d76009aa6f7a0109a2.png","/Chrome_Dinosaur_Game/assets/dino-dead.png":"_assets/a6d76009aa6f7a0109a2.png","/assets/dino-dead.png":"_assets/a6d76009aa6f7a0109a2.png","/dino-dead.png":"_assets/a6d76009aa6f7a0109a2.png"};
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
