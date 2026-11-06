(() => {
  "use strict";
  const RUNTIME_MAP = {"https://www.cameroncouch.me/zoo-dots/bundle.js":"_assets/2b6e9214b128a0e21b8d.js","/zoo-dots/bundle.js":"_assets/2b6e9214b128a0e21b8d.js","/bundle.js":"_assets/2b6e9214b128a0e21b8d.js","https://www.cameroncouch.me/zoo-dots/assets/index.css":"_assets/04be34fed43d565281fe.css","/zoo-dots/assets/index.css":"_assets/04be34fed43d565281fe.css","/assets/index.css":"_assets/04be34fed43d565281fe.css","/index.css":"_assets/04be34fed43d565281fe.css","https://fonts.googleapis.com/css?family=Open+Sans:600":"_assets/294b60994c7eb64acd01.css","/css":"_assets/294b60994c7eb64acd01.css","/css?family=Open+Sans:600":"_assets/294b60994c7eb64acd01.css","https://fonts.googleapis.com/css":"_assets/294b60994c7eb64acd01.css","https://use.fontawesome.com/releases/v5.7.1/css/all.css":"_assets/9c099acc093abd2df85e.css","/releases/v5.7.1/css/all.css":"_assets/9c099acc093abd2df85e.css","/v5.7.1/css/all.css":"_assets/9c099acc093abd2df85e.css","/css/all.css":"_assets/9c099acc093abd2df85e.css","/all.css":"_assets/9c099acc093abd2df85e.css","https://fonts.gstatic.com/s/opensans/v44/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4gaVI.woff2":"_assets/a97a6ed7ef9f75c495e9.woff2","/s/opensans/v44/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4gaVI.woff2":"_assets/a97a6ed7ef9f75c495e9.woff2","/opensans/v44/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4gaVI.woff2":"_assets/a97a6ed7ef9f75c495e9.woff2","/v44/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4gaVI.woff2":"_assets/a97a6ed7ef9f75c495e9.woff2","/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4gaVI.woff2":"_assets/a97a6ed7ef9f75c495e9.woff2","https://use.fontawesome.com/releases/v5.7.1/webfonts/fa-solid-900.woff2":"_assets/9e6bd5b2d75bba485d23.woff2","/releases/v5.7.1/webfonts/fa-solid-900.woff2":"_assets/9e6bd5b2d75bba485d23.woff2","/v5.7.1/webfonts/fa-solid-900.woff2":"_assets/9e6bd5b2d75bba485d23.woff2","/webfonts/fa-solid-900.woff2":"_assets/9e6bd5b2d75bba485d23.woff2","/fa-solid-900.woff2":"_assets/9e6bd5b2d75bba485d23.woff2","https://www.cameroncouch.me/zoo-dots/assets/background.png":"_assets/ee63e5cc163ee0f7e6d4.png","/zoo-dots/assets/background.png":"_assets/ee63e5cc163ee0f7e6d4.png","/assets/background.png":"_assets/ee63e5cc163ee0f7e6d4.png","/background.png":"_assets/ee63e5cc163ee0f7e6d4.png","https://use.fontawesome.com/releases/v5.7.1/webfonts/fa-brands-400.woff2":"_assets/4b5b989f374a637c1e57.woff2","/releases/v5.7.1/webfonts/fa-brands-400.woff2":"_assets/4b5b989f374a637c1e57.woff2","/v5.7.1/webfonts/fa-brands-400.woff2":"_assets/4b5b989f374a637c1e57.woff2","/webfonts/fa-brands-400.woff2":"_assets/4b5b989f374a637c1e57.woff2","/fa-brands-400.woff2":"_assets/4b5b989f374a637c1e57.woff2","https://use.fontawesome.com/releases/v5.7.1/webfonts/fa-regular-400.woff2":"_assets/ac24e5303881213e92ef.woff2","/releases/v5.7.1/webfonts/fa-regular-400.woff2":"_assets/ac24e5303881213e92ef.woff2","/v5.7.1/webfonts/fa-regular-400.woff2":"_assets/ac24e5303881213e92ef.woff2","/webfonts/fa-regular-400.woff2":"_assets/ac24e5303881213e92ef.woff2","/fa-regular-400.woff2":"_assets/ac24e5303881213e92ef.woff2","https://www.cameroncouch.me/zoo-dots/assets/muted-speaker.png":"_assets/b0939af937406147e240.png","/zoo-dots/assets/muted-speaker.png":"_assets/b0939af937406147e240.png","/assets/muted-speaker.png":"_assets/b0939af937406147e240.png","/muted-speaker.png":"_assets/b0939af937406147e240.png","https://www.cameroncouch.me/zoo-dots/assets/sound/zoo_tycoon_theme.mp3":"_assets/38db555860163530981c.mp3","/zoo-dots/assets/sound/zoo_tycoon_theme.mp3":"_assets/38db555860163530981c.mp3","/assets/sound/zoo_tycoon_theme.mp3":"_assets/38db555860163530981c.mp3","/sound/zoo_tycoon_theme.mp3":"_assets/38db555860163530981c.mp3","/zoo_tycoon_theme.mp3":"_assets/38db555860163530981c.mp3"};
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
