(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Cross_The_Road/styles.css":"_assets/ef9c278df7ee6fc8dee5.css","/GameZone/Games/Cross_The_Road/styles.css":"_assets/ef9c278df7ee6fc8dee5.css","/Games/Cross_The_Road/styles.css":"_assets/ef9c278df7ee6fc8dee5.css","/Cross_The_Road/styles.css":"_assets/ef9c278df7ee6fc8dee5.css","/styles.css":"_assets/ef9c278df7ee6fc8dee5.css","https://kunjgit.github.io/GameZone/Games/Cross_The_Road/images/man.jpg":"_assets/c70994385e4992e82cc1.jpg","/GameZone/Games/Cross_The_Road/images/man.jpg":"_assets/c70994385e4992e82cc1.jpg","/Games/Cross_The_Road/images/man.jpg":"_assets/c70994385e4992e82cc1.jpg","/Cross_The_Road/images/man.jpg":"_assets/c70994385e4992e82cc1.jpg","/images/man.jpg":"_assets/c70994385e4992e82cc1.jpg","/man.jpg":"_assets/c70994385e4992e82cc1.jpg","https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css":"_assets/62f74b1cf824a89f0355.css","/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css":"_assets/62f74b1cf824a89f0355.css","/bootstrap@5.1.3/dist/css/bootstrap.min.css":"_assets/62f74b1cf824a89f0355.css","/dist/css/bootstrap.min.css":"_assets/62f74b1cf824a89f0355.css","/css/bootstrap.min.css":"_assets/62f74b1cf824a89f0355.css","/bootstrap.min.css":"_assets/62f74b1cf824a89f0355.css","https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js":"_assets/a3cf00c109d907e543bc.js","/ajax/libs/jquery/3.6.1/jquery.min.js":"_assets/a3cf00c109d907e543bc.js","/libs/jquery/3.6.1/jquery.min.js":"_assets/a3cf00c109d907e543bc.js","/jquery/3.6.1/jquery.min.js":"_assets/a3cf00c109d907e543bc.js","/3.6.1/jquery.min.js":"_assets/a3cf00c109d907e543bc.js","/jquery.min.js":"_assets/a3cf00c109d907e543bc.js","https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js":"_assets/f5210fa3e7f0245a4c51.js","/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js":"_assets/f5210fa3e7f0245a4c51.js","/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js":"_assets/f5210fa3e7f0245a4c51.js","/dist/js/bootstrap.bundle.min.js":"_assets/f5210fa3e7f0245a4c51.js","/js/bootstrap.bundle.min.js":"_assets/f5210fa3e7f0245a4c51.js","/bootstrap.bundle.min.js":"_assets/f5210fa3e7f0245a4c51.js","https://kunjgit.github.io/GameZone/Games/Cross_The_Road/index.js":"_assets/836289f9c1debe7c5f82.js","/GameZone/Games/Cross_The_Road/index.js":"_assets/836289f9c1debe7c5f82.js","/Games/Cross_The_Road/index.js":"_assets/836289f9c1debe7c5f82.js","/Cross_The_Road/index.js":"_assets/836289f9c1debe7c5f82.js","/index.js":"_assets/836289f9c1debe7c5f82.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://kunjgit.github.io/GameZone/Games/Cross_The_Road/audio/songs.mp3":"_assets/19abd06abcc1ebd51894.mp3","/GameZone/Games/Cross_The_Road/audio/songs.mp3":"_assets/19abd06abcc1ebd51894.mp3","/Games/Cross_The_Road/audio/songs.mp3":"_assets/19abd06abcc1ebd51894.mp3","/Cross_The_Road/audio/songs.mp3":"_assets/19abd06abcc1ebd51894.mp3","/audio/songs.mp3":"_assets/19abd06abcc1ebd51894.mp3","/songs.mp3":"_assets/19abd06abcc1ebd51894.mp3","https://kunjgit.github.io/GameZone/Games/Cross_The_Road/audio/car.wav":"_assets/a9d62ef940fe1cea16c9.wav","/GameZone/Games/Cross_The_Road/audio/car.wav":"_assets/a9d62ef940fe1cea16c9.wav","/Games/Cross_The_Road/audio/car.wav":"_assets/a9d62ef940fe1cea16c9.wav","/Cross_The_Road/audio/car.wav":"_assets/a9d62ef940fe1cea16c9.wav","/audio/car.wav":"_assets/a9d62ef940fe1cea16c9.wav","/car.wav":"_assets/a9d62ef940fe1cea16c9.wav"};
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
