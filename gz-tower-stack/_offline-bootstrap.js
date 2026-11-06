(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Tower_Stack/style.css":"_assets/b3aeb893ae5ecff82283.css","/GameZone/Games/Tower_Stack/style.css":"_assets/b3aeb893ae5ecff82283.css","/Games/Tower_Stack/style.css":"_assets/b3aeb893ae5ecff82283.css","/Tower_Stack/style.css":"_assets/b3aeb893ae5ecff82283.css","/style.css":"_assets/b3aeb893ae5ecff82283.css","https://kunjgit.github.io/GameZone/Games/Tower_Stack/script.js":"_assets/efbbfa8da60722affac9.js","/GameZone/Games/Tower_Stack/script.js":"_assets/efbbfa8da60722affac9.js","/Games/Tower_Stack/script.js":"_assets/efbbfa8da60722affac9.js","/Tower_Stack/script.js":"_assets/efbbfa8da60722affac9.js","/script.js":"_assets/efbbfa8da60722affac9.js","https://kunjgit.github.io/GameZone/Games/Tower_Stack/TweenMax.min.js":"_assets/efd030e3eebed563cb47.js","/GameZone/Games/Tower_Stack/TweenMax.min.js":"_assets/efd030e3eebed563cb47.js","/Games/Tower_Stack/TweenMax.min.js":"_assets/efd030e3eebed563cb47.js","/Tower_Stack/TweenMax.min.js":"_assets/efd030e3eebed563cb47.js","/TweenMax.min.js":"_assets/efd030e3eebed563cb47.js","https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css":"_assets/bb18ec4bd71814b4e39a.css","/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css":"_assets/bb18ec4bd71814b4e39a.css","/bootstrap-icons@1.7.2/font/bootstrap-icons.css":"_assets/bb18ec4bd71814b4e39a.css","/font/bootstrap-icons.css":"_assets/bb18ec4bd71814b4e39a.css","/bootstrap-icons.css":"_assets/bb18ec4bd71814b4e39a.css","https://kunjgit.github.io/GameZone/Games/Tower_Stack/three.min.js":"_assets/59c8cd34b7797ddd77dc.js","/GameZone/Games/Tower_Stack/three.min.js":"_assets/59c8cd34b7797ddd77dc.js","/Games/Tower_Stack/three.min.js":"_assets/59c8cd34b7797ddd77dc.js","/Tower_Stack/three.min.js":"_assets/59c8cd34b7797ddd77dc.js","/three.min.js":"_assets/59c8cd34b7797ddd77dc.js","https://fonts.googleapis.com/css?family=Comfortaa":"_assets/8bc33a71970c278571c5.css","/css":"_assets/8bc33a71970c278571c5.css","/css?family=Comfortaa":"_assets/8bc33a71970c278571c5.css","https://fonts.googleapis.com/css":"_assets/8bc33a71970c278571c5.css","https://fonts.gstatic.com/s/comfortaa/v47/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfIA.woff2":"_assets/4e86e54d50483956c59a.woff2","/s/comfortaa/v47/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfIA.woff2":"_assets/4e86e54d50483956c59a.woff2","/comfortaa/v47/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfIA.woff2":"_assets/4e86e54d50483956c59a.woff2","/v47/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfIA.woff2":"_assets/4e86e54d50483956c59a.woff2","/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfIA.woff2":"_assets/4e86e54d50483956c59a.woff2"};
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
