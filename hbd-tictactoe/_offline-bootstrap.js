(() => {
  "use strict";
  const RUNTIME_MAP = {"https://hungrybluedev.github.io/hbd-tictactoe/scripts/main.js":"_assets/1ac8fe08b0e06c0ff465.js","/hbd-tictactoe/scripts/main.js":"_assets/1ac8fe08b0e06c0ff465.js","/scripts/main.js":"_assets/1ac8fe08b0e06c0ff465.js","/main.js":"_assets/1ac8fe08b0e06c0ff465.js","https://hungrybluedev.github.io/hbd-tictactoe/styles/style.css":"_assets/d259aa71e326e0af8da9.css","/hbd-tictactoe/styles/style.css":"_assets/d259aa71e326e0af8da9.css","/styles/style.css":"_assets/d259aa71e326e0af8da9.css","/style.css":"_assets/d259aa71e326e0af8da9.css","https://hungrybluedev.github.io/hbd-tictactoe/scripts/modules/logic.js":"_assets/0bdfe7aff2cb2638025b.js","/hbd-tictactoe/scripts/modules/logic.js":"_assets/0bdfe7aff2cb2638025b.js","/scripts/modules/logic.js":"_assets/0bdfe7aff2cb2638025b.js","/modules/logic.js":"_assets/0bdfe7aff2cb2638025b.js","/logic.js":"_assets/0bdfe7aff2cb2638025b.js","https://hungrybluedev.github.io/hbd-tictactoe/styles/fonts.css":"_assets/68019262e583dcdceb25.css","/hbd-tictactoe/styles/fonts.css":"_assets/68019262e583dcdceb25.css","/styles/fonts.css":"_assets/68019262e583dcdceb25.css","/fonts.css":"_assets/68019262e583dcdceb25.css","https://hungrybluedev.github.io/hbd-tictactoe/scripts/modules/constants.js":"_assets/8e7264229123f2c767d4.js","/hbd-tictactoe/scripts/modules/constants.js":"_assets/8e7264229123f2c767d4.js","/scripts/modules/constants.js":"_assets/8e7264229123f2c767d4.js","/modules/constants.js":"_assets/8e7264229123f2c767d4.js","/constants.js":"_assets/8e7264229123f2c767d4.js","https://hungrybluedev.github.io/hbd-tictactoe/scripts/modules/types.js":"_assets/3966950b68f431e7297b.js","/hbd-tictactoe/scripts/modules/types.js":"_assets/3966950b68f431e7297b.js","/scripts/modules/types.js":"_assets/3966950b68f431e7297b.js","/modules/types.js":"_assets/3966950b68f431e7297b.js","/types.js":"_assets/3966950b68f431e7297b.js","https://hungrybluedev.github.io/hbd-tictactoe/scripts/modules/pure_functions.js":"_assets/1901493c9cc5126b1214.js","/hbd-tictactoe/scripts/modules/pure_functions.js":"_assets/1901493c9cc5126b1214.js","/scripts/modules/pure_functions.js":"_assets/1901493c9cc5126b1214.js","/modules/pure_functions.js":"_assets/1901493c9cc5126b1214.js","/pure_functions.js":"_assets/1901493c9cc5126b1214.js","https://hungrybluedev.github.io/hbd-tictactoe/scripts/modules/ui.js":"_assets/87d207a5a3b4f08bff50.js","/hbd-tictactoe/scripts/modules/ui.js":"_assets/87d207a5a3b4f08bff50.js","/scripts/modules/ui.js":"_assets/87d207a5a3b4f08bff50.js","/modules/ui.js":"_assets/87d207a5a3b4f08bff50.js","/ui.js":"_assets/87d207a5a3b4f08bff50.js","https://hungrybluedev.github.io/hbd-tictactoe/images/logo.png":"_assets/137bd4744e3f8c468d10.png","/hbd-tictactoe/images/logo.png":"_assets/137bd4744e3f8c468d10.png","/images/logo.png":"_assets/137bd4744e3f8c468d10.png","/logo.png":"_assets/137bd4744e3f8c468d10.png","https://hungrybluedev.github.io/hbd-tictactoe/images/reset.png":"_assets/52199c9ac4356f70a006.png","/hbd-tictactoe/images/reset.png":"_assets/52199c9ac4356f70a006.png","/images/reset.png":"_assets/52199c9ac4356f70a006.png","/reset.png":"_assets/52199c9ac4356f70a006.png","https://hungrybluedev.github.io/hbd-tictactoe/images/pvp.png":"_assets/c76b0e3533a52b3684ed.png","/hbd-tictactoe/images/pvp.png":"_assets/c76b0e3533a52b3684ed.png","/images/pvp.png":"_assets/c76b0e3533a52b3684ed.png","/pvp.png":"_assets/c76b0e3533a52b3684ed.png","https://hungrybluedev.github.io/hbd-tictactoe/images/info.png":"_assets/878b2f580132b4754870.png","/hbd-tictactoe/images/info.png":"_assets/878b2f580132b4754870.png","/images/info.png":"_assets/878b2f580132b4754870.png","/info.png":"_assets/878b2f580132b4754870.png","https://hungrybluedev.github.io/hbd-tictactoe/fonts/PermanentMarker-Regular.ttf":"_assets/4a613a4e0a67ad9c48ee.ttf","/hbd-tictactoe/fonts/PermanentMarker-Regular.ttf":"_assets/4a613a4e0a67ad9c48ee.ttf","/fonts/PermanentMarker-Regular.ttf":"_assets/4a613a4e0a67ad9c48ee.ttf","/PermanentMarker-Regular.ttf":"_assets/4a613a4e0a67ad9c48ee.ttf"};
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
