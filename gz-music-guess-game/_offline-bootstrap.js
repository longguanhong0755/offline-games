(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Music_Guess_Game/style.css":"_assets/c2b60566097c8465cb5e.css","/GameZone/Games/Music_Guess_Game/style.css":"_assets/c2b60566097c8465cb5e.css","/Games/Music_Guess_Game/style.css":"_assets/c2b60566097c8465cb5e.css","/Music_Guess_Game/style.css":"_assets/c2b60566097c8465cb5e.css","/style.css":"_assets/c2b60566097c8465cb5e.css","https://kunjgit.github.io/GameZone/Games/Music_Guess_Game/script.js":"_assets/0973ee2c9748c0ce5d6e.js","/GameZone/Games/Music_Guess_Game/script.js":"_assets/0973ee2c9748c0ce5d6e.js","/Games/Music_Guess_Game/script.js":"_assets/0973ee2c9748c0ce5d6e.js","/Music_Guess_Game/script.js":"_assets/0973ee2c9748c0ce5d6e.js","/script.js":"_assets/0973ee2c9748c0ce5d6e.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://kunjgit.github.io/GameZone/Games/Music_Guess_Game/images/PlayingCaste.gif":"_assets/cdbd8da2338bac05fc66.gif","/GameZone/Games/Music_Guess_Game/images/PlayingCaste.gif":"_assets/cdbd8da2338bac05fc66.gif","/Games/Music_Guess_Game/images/PlayingCaste.gif":"_assets/cdbd8da2338bac05fc66.gif","/Music_Guess_Game/images/PlayingCaste.gif":"_assets/cdbd8da2338bac05fc66.gif","/images/PlayingCaste.gif":"_assets/cdbd8da2338bac05fc66.gif","/PlayingCaste.gif":"_assets/cdbd8da2338bac05fc66.gif","https://kunjgit.github.io/GameZone/Games/Music_Guess_Game/sounds/gameOver.mp3":"_assets/5d7d09f025a3f64f43ca.mp3","/GameZone/Games/Music_Guess_Game/sounds/gameOver.mp3":"_assets/5d7d09f025a3f64f43ca.mp3","/Games/Music_Guess_Game/sounds/gameOver.mp3":"_assets/5d7d09f025a3f64f43ca.mp3","/Music_Guess_Game/sounds/gameOver.mp3":"_assets/5d7d09f025a3f64f43ca.mp3","/sounds/gameOver.mp3":"_assets/5d7d09f025a3f64f43ca.mp3","/gameOver.mp3":"_assets/5d7d09f025a3f64f43ca.mp3","https://kunjgit.github.io/GameZone/Games/Music_Guess_Game/sounds/playAgain.mp3":"_assets/3f14d8d7c246160850fd.mp3","/GameZone/Games/Music_Guess_Game/sounds/playAgain.mp3":"_assets/3f14d8d7c246160850fd.mp3","/Games/Music_Guess_Game/sounds/playAgain.mp3":"_assets/3f14d8d7c246160850fd.mp3","/Music_Guess_Game/sounds/playAgain.mp3":"_assets/3f14d8d7c246160850fd.mp3","/sounds/playAgain.mp3":"_assets/3f14d8d7c246160850fd.mp3","/playAgain.mp3":"_assets/3f14d8d7c246160850fd.mp3","https://kunjgit.github.io/GameZone/Games/Music_Guess_Game/sounds/rightAnswer.mp3":"_assets/80c14dab9a77a04081c2.mp3","/GameZone/Games/Music_Guess_Game/sounds/rightAnswer.mp3":"_assets/80c14dab9a77a04081c2.mp3","/Games/Music_Guess_Game/sounds/rightAnswer.mp3":"_assets/80c14dab9a77a04081c2.mp3","/Music_Guess_Game/sounds/rightAnswer.mp3":"_assets/80c14dab9a77a04081c2.mp3","/sounds/rightAnswer.mp3":"_assets/80c14dab9a77a04081c2.mp3","/rightAnswer.mp3":"_assets/80c14dab9a77a04081c2.mp3","https://kunjgit.github.io/GameZone/Games/Music_Guess_Game/sounds/wrongAnswer.mp3":"_assets/f57ac392a3050d37ae20.mp3","/GameZone/Games/Music_Guess_Game/sounds/wrongAnswer.mp3":"_assets/f57ac392a3050d37ae20.mp3","/Games/Music_Guess_Game/sounds/wrongAnswer.mp3":"_assets/f57ac392a3050d37ae20.mp3","/Music_Guess_Game/sounds/wrongAnswer.mp3":"_assets/f57ac392a3050d37ae20.mp3","/sounds/wrongAnswer.mp3":"_assets/f57ac392a3050d37ae20.mp3","/wrongAnswer.mp3":"_assets/f57ac392a3050d37ae20.mp3","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2"};
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
