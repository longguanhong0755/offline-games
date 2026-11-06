(() => {
  "use strict";
  const RUNTIME_MAP = {"http://bbales.github.io/battle-snake/css/main.css":"_assets/813339114211051b902b.css","/battle-snake/css/main.css":"_assets/813339114211051b902b.css","/css/main.css":"_assets/813339114211051b902b.css","/main.css":"_assets/813339114211051b902b.css","http://bbales.github.io/battle-snake/js/explosions.js":"_assets/afdd7746724ce27feb1d.js","/battle-snake/js/explosions.js":"_assets/afdd7746724ce27feb1d.js","/js/explosions.js":"_assets/afdd7746724ce27feb1d.js","/explosions.js":"_assets/afdd7746724ce27feb1d.js","http://bbales.github.io/battle-snake/js/keyboard.js":"_assets/089f949d2a95e891f72b.js","/battle-snake/js/keyboard.js":"_assets/089f949d2a95e891f72b.js","/js/keyboard.js":"_assets/089f949d2a95e891f72b.js","/keyboard.js":"_assets/089f949d2a95e891f72b.js","http://bbales.github.io/battle-snake/css/Pixel.ttf":"_assets/1574fbe3b3b645cef596.ttf","/battle-snake/css/Pixel.ttf":"_assets/1574fbe3b3b645cef596.ttf","/css/Pixel.ttf":"_assets/1574fbe3b3b645cef596.ttf","/Pixel.ttf":"_assets/1574fbe3b3b645cef596.ttf","http://bbales.github.io/battle-snake/js/util.js":"_assets/9e2bbd1df135ca962faa.js","/battle-snake/js/util.js":"_assets/9e2bbd1df135ca962faa.js","/js/util.js":"_assets/9e2bbd1df135ca962faa.js","/util.js":"_assets/9e2bbd1df135ca962faa.js","http://bbales.github.io/battle-snake/js/setup.js":"_assets/e4208477f7b49a593ac2.js","/battle-snake/js/setup.js":"_assets/e4208477f7b49a593ac2.js","/js/setup.js":"_assets/e4208477f7b49a593ac2.js","/setup.js":"_assets/e4208477f7b49a593ac2.js","http://bbales.github.io/battle-snake/js/main.js":"_assets/fa48886f289825adb3ed.js","/battle-snake/js/main.js":"_assets/fa48886f289825adb3ed.js","/js/main.js":"_assets/fa48886f289825adb3ed.js","/main.js":"_assets/fa48886f289825adb3ed.js","http://bbales.github.io/battle-snake/js/bullets.js":"_assets/c20257ed1a513bc40d0c.js","/battle-snake/js/bullets.js":"_assets/c20257ed1a513bc40d0c.js","/js/bullets.js":"_assets/c20257ed1a513bc40d0c.js","/bullets.js":"_assets/c20257ed1a513bc40d0c.js","http://bbales.github.io/battle-snake/css/karma_future.ttf":"_assets/eddefa7fd2fadbebfc62.ttf","/battle-snake/css/karma_future.ttf":"_assets/eddefa7fd2fadbebfc62.ttf","/css/karma_future.ttf":"_assets/eddefa7fd2fadbebfc62.ttf","/karma_future.ttf":"_assets/eddefa7fd2fadbebfc62.ttf","http://bbales.github.io/battle-snake/img/shield.png":"_assets/d3a7e870b69258e880ad.png","/battle-snake/img/shield.png":"_assets/d3a7e870b69258e880ad.png","/img/shield.png":"_assets/d3a7e870b69258e880ad.png","/shield.png":"_assets/d3a7e870b69258e880ad.png","http://bbales.github.io/battle-snake/js/snakes.js":"_assets/f7e852ba5795029f392d.js","/battle-snake/js/snakes.js":"_assets/f7e852ba5795029f392d.js","/js/snakes.js":"_assets/f7e852ba5795029f392d.js","/snakes.js":"_assets/f7e852ba5795029f392d.js","http://bbales.github.io/battle-snake/js/animationfunctions.js":"_assets/8fc29f6e21d86ac9f5f6.js","/battle-snake/js/animationfunctions.js":"_assets/8fc29f6e21d86ac9f5f6.js","/js/animationfunctions.js":"_assets/8fc29f6e21d86ac9f5f6.js","/animationfunctions.js":"_assets/8fc29f6e21d86ac9f5f6.js","http://bbales.github.io/battle-snake/img/bullets.png":"_assets/b0ced9c96bea6a547f89.png","/battle-snake/img/bullets.png":"_assets/b0ced9c96bea6a547f89.png","/img/bullets.png":"_assets/b0ced9c96bea6a547f89.png","/bullets.png":"_assets/b0ced9c96bea6a547f89.png"};
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
