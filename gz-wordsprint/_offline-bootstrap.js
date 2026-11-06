(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fonts.googleapis.com/css?family=Paytone+One|Montserrat":"_assets/29cae60e3147b81bf787.css","/css":"_assets/29cae60e3147b81bf787.css","/css?family=Paytone+One|Montserrat":"_assets/29cae60e3147b81bf787.css","https://fonts.googleapis.com/css":"_assets/29cae60e3147b81bf787.css","https://kunjgit.github.io/GameZone/Games/WordSprint/style.css":"_assets/26c0ac337569a296bd20.css","/GameZone/Games/WordSprint/style.css":"_assets/26c0ac337569a296bd20.css","/Games/WordSprint/style.css":"_assets/26c0ac337569a296bd20.css","/WordSprint/style.css":"_assets/26c0ac337569a296bd20.css","/style.css":"_assets/26c0ac337569a296bd20.css","https://kunjgit.github.io/GameZone/Games/WordSprint/script.js":"_assets/5efe10c44865d1396f7f.js","/GameZone/Games/WordSprint/script.js":"_assets/5efe10c44865d1396f7f.js","/Games/WordSprint/script.js":"_assets/5efe10c44865d1396f7f.js","/WordSprint/script.js":"_assets/5efe10c44865d1396f7f.js","/script.js":"_assets/5efe10c44865d1396f7f.js","https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js":"_assets/246ea1b2e323167436b2.js","/ajax/libs/Chart.js/2.7.2/Chart.bundle.js":"_assets/246ea1b2e323167436b2.js","/libs/Chart.js/2.7.2/Chart.bundle.js":"_assets/246ea1b2e323167436b2.js","/Chart.js/2.7.2/Chart.bundle.js":"_assets/246ea1b2e323167436b2.js","/2.7.2/Chart.bundle.js":"_assets/246ea1b2e323167436b2.js","/Chart.bundle.js":"_assets/246ea1b2e323167436b2.js","https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXo.woff2":"_assets/e66bcd2761ab6924b25c.woff2","/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXo.woff2":"_assets/e66bcd2761ab6924b25c.woff2","/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXo.woff2":"_assets/e66bcd2761ab6924b25c.woff2","/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXo.woff2":"_assets/e66bcd2761ab6924b25c.woff2","/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXo.woff2":"_assets/e66bcd2761ab6924b25c.woff2","https://fonts.gstatic.com/s/paytoneone/v25/0nksC9P7MfYHj2oFtYm2ChTtgPs.woff2":"_assets/07b1f40d200f78b09482.woff2","/s/paytoneone/v25/0nksC9P7MfYHj2oFtYm2ChTtgPs.woff2":"_assets/07b1f40d200f78b09482.woff2","/paytoneone/v25/0nksC9P7MfYHj2oFtYm2ChTtgPs.woff2":"_assets/07b1f40d200f78b09482.woff2","/v25/0nksC9P7MfYHj2oFtYm2ChTtgPs.woff2":"_assets/07b1f40d200f78b09482.woff2","/0nksC9P7MfYHj2oFtYm2ChTtgPs.woff2":"_assets/07b1f40d200f78b09482.woff2"};
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
