(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Tile_Game/style.css":"_assets/e0bef316c9804873056f.css","/GameZone/Games/Tile_Game/style.css":"_assets/e0bef316c9804873056f.css","/Games/Tile_Game/style.css":"_assets/e0bef316c9804873056f.css","/Tile_Game/style.css":"_assets/e0bef316c9804873056f.css","/style.css":"_assets/e0bef316c9804873056f.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css":"_assets/82f1278f66b192a223e3.css","/ajax/libs/meyer-reset/2.0/reset.min.css":"_assets/82f1278f66b192a223e3.css","/libs/meyer-reset/2.0/reset.min.css":"_assets/82f1278f66b192a223e3.css","/meyer-reset/2.0/reset.min.css":"_assets/82f1278f66b192a223e3.css","/2.0/reset.min.css":"_assets/82f1278f66b192a223e3.css","/reset.min.css":"_assets/82f1278f66b192a223e3.css","https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js":"_assets/19a28e2d74e7eee25716.js","/ajax/libs/prefixfree/1.0.7/prefixfree.min.js":"_assets/19a28e2d74e7eee25716.js","/libs/prefixfree/1.0.7/prefixfree.min.js":"_assets/19a28e2d74e7eee25716.js","/prefixfree/1.0.7/prefixfree.min.js":"_assets/19a28e2d74e7eee25716.js","/1.0.7/prefixfree.min.js":"_assets/19a28e2d74e7eee25716.js","/prefixfree.min.js":"_assets/19a28e2d74e7eee25716.js","https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js":"_assets/d2b82e612d2a812e8be2.js","/ajax/libs/modernizr/2.8.3/modernizr.min.js":"_assets/d2b82e612d2a812e8be2.js","/libs/modernizr/2.8.3/modernizr.min.js":"_assets/d2b82e612d2a812e8be2.js","/modernizr/2.8.3/modernizr.min.js":"_assets/d2b82e612d2a812e8be2.js","/2.8.3/modernizr.min.js":"_assets/d2b82e612d2a812e8be2.js","/modernizr.min.js":"_assets/d2b82e612d2a812e8be2.js","https://kunjgit.github.io/GameZone/Games/Tile_Game/assets/image/gem.png":"_assets/60c25139cfe70f6205ae.png","/GameZone/Games/Tile_Game/assets/image/gem.png":"_assets/60c25139cfe70f6205ae.png","/Games/Tile_Game/assets/image/gem.png":"_assets/60c25139cfe70f6205ae.png","/Tile_Game/assets/image/gem.png":"_assets/60c25139cfe70f6205ae.png","/assets/image/gem.png":"_assets/60c25139cfe70f6205ae.png","/image/gem.png":"_assets/60c25139cfe70f6205ae.png","/gem.png":"_assets/60c25139cfe70f6205ae.png","https://kunjgit.github.io/GameZone/Games/Tile_Game/assets/image/avatar.png":"_assets/5e248cdec52068677312.png","/GameZone/Games/Tile_Game/assets/image/avatar.png":"_assets/5e248cdec52068677312.png","/Games/Tile_Game/assets/image/avatar.png":"_assets/5e248cdec52068677312.png","/Tile_Game/assets/image/avatar.png":"_assets/5e248cdec52068677312.png","/assets/image/avatar.png":"_assets/5e248cdec52068677312.png","/image/avatar.png":"_assets/5e248cdec52068677312.png","/avatar.png":"_assets/5e248cdec52068677312.png","https://kunjgit.github.io/GameZone/Games/Tile_Game/assets/image/star.png":"_assets/745119d3916e177bdeaf.png","/GameZone/Games/Tile_Game/assets/image/star.png":"_assets/745119d3916e177bdeaf.png","/Games/Tile_Game/assets/image/star.png":"_assets/745119d3916e177bdeaf.png","/Tile_Game/assets/image/star.png":"_assets/745119d3916e177bdeaf.png","/assets/image/star.png":"_assets/745119d3916e177bdeaf.png","/image/star.png":"_assets/745119d3916e177bdeaf.png","/star.png":"_assets/745119d3916e177bdeaf.png","https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js":"_assets/2051d61446d4dbffb037.js","/ajax/libs/jquery/2.1.3/jquery.min.js":"_assets/2051d61446d4dbffb037.js","/libs/jquery/2.1.3/jquery.min.js":"_assets/2051d61446d4dbffb037.js","/jquery/2.1.3/jquery.min.js":"_assets/2051d61446d4dbffb037.js","/2.1.3/jquery.min.js":"_assets/2051d61446d4dbffb037.js","/jquery.min.js":"_assets/2051d61446d4dbffb037.js","https://kunjgit.github.io/GameZone/Games/Tile_Game/script.js":"_assets/66d183b2897a36245d61.js","/GameZone/Games/Tile_Game/script.js":"_assets/66d183b2897a36245d61.js","/Games/Tile_Game/script.js":"_assets/66d183b2897a36245d61.js","/Tile_Game/script.js":"_assets/66d183b2897a36245d61.js","/script.js":"_assets/66d183b2897a36245d61.js","https://fonts.googleapis.com/css?family=Luckiest+Guy":"_assets/cd5f9762504b068d35ac.css","/css":"_assets/cd5f9762504b068d35ac.css","/css?family=Luckiest+Guy":"_assets/cd5f9762504b068d35ac.css","https://fonts.googleapis.com/css":"_assets/cd5f9762504b068d35ac.css","https://fonts.gstatic.com/s/luckiestguy/v25/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2":"_assets/3877b522181765adf66b.woff2","/s/luckiestguy/v25/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2":"_assets/3877b522181765adf66b.woff2","/luckiestguy/v25/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2":"_assets/3877b522181765adf66b.woff2","/v25/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2":"_assets/3877b522181765adf66b.woff2","/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2":"_assets/3877b522181765adf66b.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://adrianpayne.me/game/assets/images/speech.png":"_assets/098c34a302636ab8d3d0.png","/game/assets/images/speech.png":"_assets/098c34a302636ab8d3d0.png","/assets/images/speech.png":"_assets/098c34a302636ab8d3d0.png","/images/speech.png":"_assets/098c34a302636ab8d3d0.png","/speech.png":"_assets/098c34a302636ab8d3d0.png","https://adrianpayne.me/game/assets/images/grass.png":"_assets/7004bcfa8021d024b900.png","/game/assets/images/grass.png":"_assets/7004bcfa8021d024b900.png","/assets/images/grass.png":"_assets/7004bcfa8021d024b900.png","/images/grass.png":"_assets/7004bcfa8021d024b900.png","/grass.png":"_assets/7004bcfa8021d024b900.png","https://adrianpayne.me/game/assets/images/stone.png":"_assets/7cf8d1c1c552a82493db.png","/game/assets/images/stone.png":"_assets/7cf8d1c1c552a82493db.png","/assets/images/stone.png":"_assets/7cf8d1c1c552a82493db.png","/images/stone.png":"_assets/7cf8d1c1c552a82493db.png","/stone.png":"_assets/7cf8d1c1c552a82493db.png","https://adrianpayne.me/game/assets/images/button.jpg":"_assets/300d038bcc65a42ad4f2.jpg","/game/assets/images/button.jpg":"_assets/300d038bcc65a42ad4f2.jpg","/assets/images/button.jpg":"_assets/300d038bcc65a42ad4f2.jpg","/images/button.jpg":"_assets/300d038bcc65a42ad4f2.jpg","/button.jpg":"_assets/300d038bcc65a42ad4f2.jpg","https://kunjgit.github.io/GameZone/Games/Tile_Game/assets/audio/pop2.mp3":"_assets/0ca132fa7b2e47a6a07f.mp3","/GameZone/Games/Tile_Game/assets/audio/pop2.mp3":"_assets/0ca132fa7b2e47a6a07f.mp3","/Games/Tile_Game/assets/audio/pop2.mp3":"_assets/0ca132fa7b2e47a6a07f.mp3","/Tile_Game/assets/audio/pop2.mp3":"_assets/0ca132fa7b2e47a6a07f.mp3","/assets/audio/pop2.mp3":"_assets/0ca132fa7b2e47a6a07f.mp3","/audio/pop2.mp3":"_assets/0ca132fa7b2e47a6a07f.mp3","/pop2.mp3":"_assets/0ca132fa7b2e47a6a07f.mp3","https://kunjgit.github.io/GameZone/Games/Tile_Game/assets/audio/pop1.mp3":"_assets/af83e7ac45405f2bbd72.mp3","/GameZone/Games/Tile_Game/assets/audio/pop1.mp3":"_assets/af83e7ac45405f2bbd72.mp3","/Games/Tile_Game/assets/audio/pop1.mp3":"_assets/af83e7ac45405f2bbd72.mp3","/Tile_Game/assets/audio/pop1.mp3":"_assets/af83e7ac45405f2bbd72.mp3","/assets/audio/pop1.mp3":"_assets/af83e7ac45405f2bbd72.mp3","/audio/pop1.mp3":"_assets/af83e7ac45405f2bbd72.mp3","/pop1.mp3":"_assets/af83e7ac45405f2bbd72.mp3","https://kunjgit.github.io/GameZone/Games/Tile_Game/assets/audio/gem.mp3":"_assets/5a8ca8f268151105131d.mp3","/GameZone/Games/Tile_Game/assets/audio/gem.mp3":"_assets/5a8ca8f268151105131d.mp3","/Games/Tile_Game/assets/audio/gem.mp3":"_assets/5a8ca8f268151105131d.mp3","/Tile_Game/assets/audio/gem.mp3":"_assets/5a8ca8f268151105131d.mp3","/assets/audio/gem.mp3":"_assets/5a8ca8f268151105131d.mp3","/audio/gem.mp3":"_assets/5a8ca8f268151105131d.mp3","/gem.mp3":"_assets/5a8ca8f268151105131d.mp3"};
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
