(() => {
  "use strict";
  const RUNTIME_MAP = {"https://leandrobarone.github.io/dungeonclicker/css/reset.css":"_assets/ddd1bd5f58f867f12925.css","/dungeonclicker/css/reset.css":"_assets/ddd1bd5f58f867f12925.css","/css/reset.css":"_assets/ddd1bd5f58f867f12925.css","/reset.css":"_assets/ddd1bd5f58f867f12925.css","https://leandrobarone.github.io/dungeonclicker/css/style.css":"_assets/b6555785235332c3cde9.css","/dungeonclicker/css/style.css":"_assets/b6555785235332c3cde9.css","/css/style.css":"_assets/b6555785235332c3cde9.css","/style.css":"_assets/b6555785235332c3cde9.css","https://leandrobarone.github.io/dungeonclicker/js/jquery-1.10.2.min.js":"_assets/0ba081f546084bd5097a.js","/dungeonclicker/js/jquery-1.10.2.min.js":"_assets/0ba081f546084bd5097a.js","/js/jquery-1.10.2.min.js":"_assets/0ba081f546084bd5097a.js","/jquery-1.10.2.min.js":"_assets/0ba081f546084bd5097a.js","https://leandrobarone.github.io/dungeonclicker/js/jquery.mCustomScrollbar.css":"_assets/fba8bb1adda43f508da8.css","/dungeonclicker/js/jquery.mCustomScrollbar.css":"_assets/fba8bb1adda43f508da8.css","/js/jquery.mCustomScrollbar.css":"_assets/fba8bb1adda43f508da8.css","/jquery.mCustomScrollbar.css":"_assets/fba8bb1adda43f508da8.css","https://leandrobarone.github.io/dungeonclicker/js/jquery.json.min.js":"_assets/8d04360ebd7d02d977a9.js","/dungeonclicker/js/jquery.json.min.js":"_assets/8d04360ebd7d02d977a9.js","/js/jquery.json.min.js":"_assets/8d04360ebd7d02d977a9.js","/jquery.json.min.js":"_assets/8d04360ebd7d02d977a9.js","https://leandrobarone.github.io/dungeonclicker/js/jstorage.min.js":"_assets/2695782169edff0e1140.js","/dungeonclicker/js/jstorage.min.js":"_assets/2695782169edff0e1140.js","/js/jstorage.min.js":"_assets/2695782169edff0e1140.js","/jstorage.min.js":"_assets/2695782169edff0e1140.js","https://leandrobarone.github.io/dungeonclicker/js/jquery.mCustomScrollbar.min.js":"_assets/bb918b9536d01e11ad65.js","/dungeonclicker/js/jquery.mCustomScrollbar.min.js":"_assets/bb918b9536d01e11ad65.js","/js/jquery.mCustomScrollbar.min.js":"_assets/bb918b9536d01e11ad65.js","/jquery.mCustomScrollbar.min.js":"_assets/bb918b9536d01e11ad65.js","https://leandrobarone.github.io/dungeonclicker/dungeonclicker/math.js":"_assets/d037eafe817ee51d19ac.js","/dungeonclicker/dungeonclicker/math.js":"_assets/d037eafe817ee51d19ac.js","/dungeonclicker/math.js":"_assets/d037eafe817ee51d19ac.js","/math.js":"_assets/d037eafe817ee51d19ac.js","https://leandrobarone.github.io/dungeonclicker/dungeonclicker/focus.js":"_assets/9afb72f988db5df65fd4.js","/dungeonclicker/dungeonclicker/focus.js":"_assets/9afb72f988db5df65fd4.js","/dungeonclicker/focus.js":"_assets/9afb72f988db5df65fd4.js","/focus.js":"_assets/9afb72f988db5df65fd4.js","https://leandrobarone.github.io/dungeonclicker/js/jquery.mousewheel.min.js":"_assets/96daff95ce5be0732a13.js","/dungeonclicker/js/jquery.mousewheel.min.js":"_assets/96daff95ce5be0732a13.js","/js/jquery.mousewheel.min.js":"_assets/96daff95ce5be0732a13.js","/jquery.mousewheel.min.js":"_assets/96daff95ce5be0732a13.js","https://leandrobarone.github.io/dungeonclicker/dungeonclicker/log.js":"_assets/2ac3edffca587a989463.js","/dungeonclicker/dungeonclicker/log.js":"_assets/2ac3edffca587a989463.js","/dungeonclicker/log.js":"_assets/2ac3edffca587a989463.js","/log.js":"_assets/2ac3edffca587a989463.js","https://leandrobarone.github.io/dungeonclicker/dungeonclicker/main.js":"_assets/961342c267fd4ae4ddfa.js","/dungeonclicker/dungeonclicker/main.js":"_assets/961342c267fd4ae4ddfa.js","/dungeonclicker/main.js":"_assets/961342c267fd4ae4ddfa.js","/main.js":"_assets/961342c267fd4ae4ddfa.js","https://leandrobarone.github.io/dungeonclicker/dungeonclicker/tooltips.js":"_assets/ed77626bc6c494fb7166.js","/dungeonclicker/dungeonclicker/tooltips.js":"_assets/ed77626bc6c494fb7166.js","/dungeonclicker/tooltips.js":"_assets/ed77626bc6c494fb7166.js","/tooltips.js":"_assets/ed77626bc6c494fb7166.js","https://leandrobarone.github.io/dungeonclicker/dungeonclicker/sfx.js":"_assets/5287e01e4f3537f377ae.js","/dungeonclicker/dungeonclicker/sfx.js":"_assets/5287e01e4f3537f377ae.js","/dungeonclicker/sfx.js":"_assets/5287e01e4f3537f377ae.js","/sfx.js":"_assets/5287e01e4f3537f377ae.js","https://leandrobarone.github.io/dungeonclicker/dungeonclicker/artifacts.js":"_assets/ef131b6eb0b37cf288b9.js","/dungeonclicker/dungeonclicker/artifacts.js":"_assets/ef131b6eb0b37cf288b9.js","/dungeonclicker/artifacts.js":"_assets/ef131b6eb0b37cf288b9.js","/artifacts.js":"_assets/ef131b6eb0b37cf288b9.js","https://leandrobarone.github.io/dungeonclicker/dungeonclicker/vfx.js":"_assets/87441cbbd07d2dcf08d7.js","/dungeonclicker/dungeonclicker/vfx.js":"_assets/87441cbbd07d2dcf08d7.js","/dungeonclicker/vfx.js":"_assets/87441cbbd07d2dcf08d7.js","/vfx.js":"_assets/87441cbbd07d2dcf08d7.js","https://leandrobarone.github.io/dungeonclicker/dungeonclicker/buildings.js":"_assets/bfcc36cb1f9a45fbb14b.js","/dungeonclicker/dungeonclicker/buildings.js":"_assets/bfcc36cb1f9a45fbb14b.js","/dungeonclicker/buildings.js":"_assets/bfcc36cb1f9a45fbb14b.js","/buildings.js":"_assets/bfcc36cb1f9a45fbb14b.js","https://leandrobarone.github.io/dungeonclicker/dungeonclicker/options.js":"_assets/b594186791574cb0c573.js","/dungeonclicker/dungeonclicker/options.js":"_assets/b594186791574cb0c573.js","/dungeonclicker/options.js":"_assets/b594186791574cb0c573.js","/options.js":"_assets/b594186791574cb0c573.js","https://leandrobarone.github.io/dungeonclicker/dungeonclicker/adventure.js":"_assets/b75fc2f5fb6f924e4761.js","/dungeonclicker/dungeonclicker/adventure.js":"_assets/b75fc2f5fb6f924e4761.js","/dungeonclicker/adventure.js":"_assets/b75fc2f5fb6f924e4761.js","/adventure.js":"_assets/b75fc2f5fb6f924e4761.js","https://leandrobarone.github.io/dungeonclicker/dungeonclicker/dictionaries.js":"_assets/27288a08b4fad7b615ad.js","/dungeonclicker/dungeonclicker/dictionaries.js":"_assets/27288a08b4fad7b615ad.js","/dungeonclicker/dictionaries.js":"_assets/27288a08b4fad7b615ad.js","/dictionaries.js":"_assets/27288a08b4fad7b615ad.js","https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js":"_assets/c8104390115f92b27003.js","/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js":"_assets/c8104390115f92b27003.js","/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js":"_assets/c8104390115f92b27003.js","/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js":"_assets/c8104390115f92b27003.js","/3.0.6/jquery.mousewheel.min.js":"_assets/c8104390115f92b27003.js","https://leandrobarone.github.io/dungeonclicker/img/bg-button.png":"_assets/7f5390eaabd3f95a71c9.png","/dungeonclicker/img/bg-button.png":"_assets/7f5390eaabd3f95a71c9.png","/img/bg-button.png":"_assets/7f5390eaabd3f95a71c9.png","/bg-button.png":"_assets/7f5390eaabd3f95a71c9.png","https://leandrobarone.github.io/dungeonclicker/img/fg-button.png":"_assets/2e2c53e695025562c7d4.png","/dungeonclicker/img/fg-button.png":"_assets/2e2c53e695025562c7d4.png","/img/fg-button.png":"_assets/2e2c53e695025562c7d4.png","/fg-button.png":"_assets/2e2c53e695025562c7d4.png","https://leandrobarone.github.io/dungeonclicker/img/btnAdventure.png":"_assets/5e552c7cc473063f56e9.png","/dungeonclicker/img/btnAdventure.png":"_assets/5e552c7cc473063f56e9.png","/img/btnAdventure.png":"_assets/5e552c7cc473063f56e9.png","/btnAdventure.png":"_assets/5e552c7cc473063f56e9.png","https://leandrobarone.github.io/dungeonclicker/img/shadow-bottom.png":"_assets/7155a90d239031057431.png","/dungeonclicker/img/shadow-bottom.png":"_assets/7155a90d239031057431.png","/img/shadow-bottom.png":"_assets/7155a90d239031057431.png","/shadow-bottom.png":"_assets/7155a90d239031057431.png","https://leandrobarone.github.io/dungeonclicker/img/coin-icon.png":"_assets/6d4fd8d411bb573cf212.png","/dungeonclicker/img/coin-icon.png":"_assets/6d4fd8d411bb573cf212.png","/img/coin-icon.png":"_assets/6d4fd8d411bb573cf212.png","/coin-icon.png":"_assets/6d4fd8d411bb573cf212.png","https://leandrobarone.github.io/dungeonclicker/img/shadow-top.png":"_assets/b7db40a38e9921e76c06.png","/dungeonclicker/img/shadow-top.png":"_assets/b7db40a38e9921e76c06.png","/img/shadow-top.png":"_assets/b7db40a38e9921e76c06.png","/shadow-top.png":"_assets/b7db40a38e9921e76c06.png","https://leandrobarone.github.io/dungeonclicker/img/bg-texture.png":"_assets/7c351dae8c2705c363be.png","/dungeonclicker/img/bg-texture.png":"_assets/7c351dae8c2705c363be.png","/img/bg-texture.png":"_assets/7c351dae8c2705c363be.png","/bg-texture.png":"_assets/7c351dae8c2705c363be.png","https://leandrobarone.github.io/dungeonclicker/img/light.png":"_assets/44674ad1138c7d285d7f.png","/dungeonclicker/img/light.png":"_assets/44674ad1138c7d285d7f.png","/img/light.png":"_assets/44674ad1138c7d285d7f.png","/light.png":"_assets/44674ad1138c7d285d7f.png"};
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
