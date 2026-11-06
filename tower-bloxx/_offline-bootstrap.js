(() => {
  "use strict";
  const RUNTIME_MAP = {"https://dev-tanay.github.io/Tower-Bloxx/script.js":"_assets/2b40d177533589e85c7a.js","/Tower-Bloxx/script.js":"_assets/2b40d177533589e85c7a.js","/script.js":"_assets/2b40d177533589e85c7a.js","https://dev-tanay.github.io/Tower-Bloxx/style.css":"_assets/764670bf3a2e3a32df2a.css","/Tower-Bloxx/style.css":"_assets/764670bf3a2e3a32df2a.css","/style.css":"_assets/764670bf3a2e3a32df2a.css","https://fonts.googleapis.com/css?family=Comfortaa":"_assets/8bc33a71970c278571c5.css","/css":"_assets/8bc33a71970c278571c5.css","/css?family=Comfortaa":"_assets/8bc33a71970c278571c5.css","https://fonts.googleapis.com/css":"_assets/8bc33a71970c278571c5.css","https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.min.js":"_assets/f72b4a0571bbf80f9e76.js","/ajax/libs/three.js/r83/three.min.js":"_assets/f72b4a0571bbf80f9e76.js","/libs/three.js/r83/three.min.js":"_assets/f72b4a0571bbf80f9e76.js","/three.js/r83/three.min.js":"_assets/f72b4a0571bbf80f9e76.js","/r83/three.min.js":"_assets/f72b4a0571bbf80f9e76.js","/three.min.js":"_assets/f72b4a0571bbf80f9e76.js","https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js":"_assets/001acbb15d9c69510c08.js","/ajax/libs/gsap/latest/TweenMax.min.js":"_assets/001acbb15d9c69510c08.js","/libs/gsap/latest/TweenMax.min.js":"_assets/001acbb15d9c69510c08.js","/gsap/latest/TweenMax.min.js":"_assets/001acbb15d9c69510c08.js","/latest/TweenMax.min.js":"_assets/001acbb15d9c69510c08.js","/TweenMax.min.js":"_assets/001acbb15d9c69510c08.js","https://fonts.gstatic.com/s/comfortaa/v47/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfIA.woff2":"_assets/4e86e54d50483956c59a.woff2","/s/comfortaa/v47/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfIA.woff2":"_assets/4e86e54d50483956c59a.woff2","/comfortaa/v47/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfIA.woff2":"_assets/4e86e54d50483956c59a.woff2","/v47/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfIA.woff2":"_assets/4e86e54d50483956c59a.woff2","/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfIA.woff2":"_assets/4e86e54d50483956c59a.woff2"};
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
