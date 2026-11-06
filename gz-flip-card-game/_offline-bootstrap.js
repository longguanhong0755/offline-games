(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Flip_Card_Game/style.css":"_assets/bde5d339f954ac3922fd.css","/GameZone/Games/Flip_Card_Game/style.css":"_assets/bde5d339f954ac3922fd.css","/Games/Flip_Card_Game/style.css":"_assets/bde5d339f954ac3922fd.css","/Flip_Card_Game/style.css":"_assets/bde5d339f954ac3922fd.css","/style.css":"_assets/bde5d339f954ac3922fd.css","https://kunjgit.github.io/GameZone/Games/Flip_Card_Game/script.js":"_assets/bdf2ae751fe783c8ab00.js","/GameZone/Games/Flip_Card_Game/script.js":"_assets/bdf2ae751fe783c8ab00.js","/Games/Flip_Card_Game/script.js":"_assets/bdf2ae751fe783c8ab00.js","/Flip_Card_Game/script.js":"_assets/bdf2ae751fe783c8ab00.js","/script.js":"_assets/bdf2ae751fe783c8ab00.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css":"_assets/82f1278f66b192a223e3.css","/ajax/libs/meyer-reset/2.0/reset.min.css":"_assets/82f1278f66b192a223e3.css","/libs/meyer-reset/2.0/reset.min.css":"_assets/82f1278f66b192a223e3.css","/meyer-reset/2.0/reset.min.css":"_assets/82f1278f66b192a223e3.css","/2.0/reset.min.css":"_assets/82f1278f66b192a223e3.css","/reset.min.css":"_assets/82f1278f66b192a223e3.css","https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js":"_assets/19a28e2d74e7eee25716.js","/ajax/libs/prefixfree/1.0.7/prefixfree.min.js":"_assets/19a28e2d74e7eee25716.js","/libs/prefixfree/1.0.7/prefixfree.min.js":"_assets/19a28e2d74e7eee25716.js","/prefixfree/1.0.7/prefixfree.min.js":"_assets/19a28e2d74e7eee25716.js","/1.0.7/prefixfree.min.js":"_assets/19a28e2d74e7eee25716.js","/prefixfree.min.js":"_assets/19a28e2d74e7eee25716.js","https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js":"_assets/2051d61446d4dbffb037.js","/ajax/libs/jquery/2.1.3/jquery.min.js":"_assets/2051d61446d4dbffb037.js","/libs/jquery/2.1.3/jquery.min.js":"_assets/2051d61446d4dbffb037.js","/jquery/2.1.3/jquery.min.js":"_assets/2051d61446d4dbffb037.js","/2.1.3/jquery.min.js":"_assets/2051d61446d4dbffb037.js","/jquery.min.js":"_assets/2051d61446d4dbffb037.js","https://fonts.googleapis.com/css?family=Open+Sans":"_assets/d74d8455ef8d97bb37b6.css","/css":"_assets/d74d8455ef8d97bb37b6.css","/css?family=Open+Sans":"_assets/d74d8455ef8d97bb37b6.css","https://fonts.googleapis.com/css":"_assets/d74d8455ef8d97bb37b6.css","https://fonts.gstatic.com/s/opensans/v44/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2":"_assets/0e44026ad31376af1b56.woff2","/s/opensans/v44/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2":"_assets/0e44026ad31376af1b56.woff2","/opensans/v44/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2":"_assets/0e44026ad31376af1b56.woff2","/v44/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2":"_assets/0e44026ad31376af1b56.woff2","/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2":"_assets/0e44026ad31376af1b56.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2"};
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
