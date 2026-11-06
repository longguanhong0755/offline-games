(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Diamond_Run/images/sprites.png":"_assets/3562e2ec6d488e7709c1.png","/GameZone/Games/Diamond_Run/images/sprites.png":"_assets/3562e2ec6d488e7709c1.png","/Games/Diamond_Run/images/sprites.png":"_assets/3562e2ec6d488e7709c1.png","/Diamond_Run/images/sprites.png":"_assets/3562e2ec6d488e7709c1.png","/images/sprites.png":"_assets/3562e2ec6d488e7709c1.png","/sprites.png":"_assets/3562e2ec6d488e7709c1.png","https://kunjgit.github.io/GameZone/Games/Diamond_Run/js/game.js":"_assets/21f4b4201f695e109bb2.js","/GameZone/Games/Diamond_Run/js/game.js":"_assets/21f4b4201f695e109bb2.js","/Games/Diamond_Run/js/game.js":"_assets/21f4b4201f695e109bb2.js","/Diamond_Run/js/game.js":"_assets/21f4b4201f695e109bb2.js","/js/game.js":"_assets/21f4b4201f695e109bb2.js","/game.js":"_assets/21f4b4201f695e109bb2.js","https://kunjgit.github.io/GameZone/Games/Diamond_Run/js/levelLoader.js":"_assets/3554401bee7ce5a84e83.js","/GameZone/Games/Diamond_Run/js/levelLoader.js":"_assets/3554401bee7ce5a84e83.js","/Games/Diamond_Run/js/levelLoader.js":"_assets/3554401bee7ce5a84e83.js","/Diamond_Run/js/levelLoader.js":"_assets/3554401bee7ce5a84e83.js","/js/levelLoader.js":"_assets/3554401bee7ce5a84e83.js","/levelLoader.js":"_assets/3554401bee7ce5a84e83.js","https://kunjgit.github.io/GameZone/Games/Diamond_Run/js/world.js":"_assets/21414e99384b1a76a75a.js","/GameZone/Games/Diamond_Run/js/world.js":"_assets/21414e99384b1a76a75a.js","/Games/Diamond_Run/js/world.js":"_assets/21414e99384b1a76a75a.js","/Diamond_Run/js/world.js":"_assets/21414e99384b1a76a75a.js","/js/world.js":"_assets/21414e99384b1a76a75a.js","/world.js":"_assets/21414e99384b1a76a75a.js","https://kunjgit.github.io/GameZone/Games/Diamond_Run/js/renderer.js":"_assets/dd8e4d1de446e4b6e799.js","/GameZone/Games/Diamond_Run/js/renderer.js":"_assets/dd8e4d1de446e4b6e799.js","/Games/Diamond_Run/js/renderer.js":"_assets/dd8e4d1de446e4b6e799.js","/Diamond_Run/js/renderer.js":"_assets/dd8e4d1de446e4b6e799.js","/js/renderer.js":"_assets/dd8e4d1de446e4b6e799.js","/renderer.js":"_assets/dd8e4d1de446e4b6e799.js","https://kunjgit.github.io/GameZone/Games/Diamond_Run/js/controls.js":"_assets/0ecdd2f50e401dbf8cf7.js","/GameZone/Games/Diamond_Run/js/controls.js":"_assets/0ecdd2f50e401dbf8cf7.js","/Games/Diamond_Run/js/controls.js":"_assets/0ecdd2f50e401dbf8cf7.js","/Diamond_Run/js/controls.js":"_assets/0ecdd2f50e401dbf8cf7.js","/js/controls.js":"_assets/0ecdd2f50e401dbf8cf7.js","/controls.js":"_assets/0ecdd2f50e401dbf8cf7.js","https://kunjgit.github.io/GameZone/Games/Diamond_Run/js/main.js":"_assets/4ea3eb26c63628a9b0ea.js","/GameZone/Games/Diamond_Run/js/main.js":"_assets/4ea3eb26c63628a9b0ea.js","/Games/Diamond_Run/js/main.js":"_assets/4ea3eb26c63628a9b0ea.js","/Diamond_Run/js/main.js":"_assets/4ea3eb26c63628a9b0ea.js","/js/main.js":"_assets/4ea3eb26c63628a9b0ea.js","/main.js":"_assets/4ea3eb26c63628a9b0ea.js","https://kunjgit.github.io/GameZone/Games/Diamond_Run/js/menuDriver.js":"_assets/255779e208f7d47473fd.js","/GameZone/Games/Diamond_Run/js/menuDriver.js":"_assets/255779e208f7d47473fd.js","/Games/Diamond_Run/js/menuDriver.js":"_assets/255779e208f7d47473fd.js","/Diamond_Run/js/menuDriver.js":"_assets/255779e208f7d47473fd.js","/js/menuDriver.js":"_assets/255779e208f7d47473fd.js","/menuDriver.js":"_assets/255779e208f7d47473fd.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2"};
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
