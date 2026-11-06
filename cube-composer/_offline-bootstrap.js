(() => {
  "use strict";
  const RUNTIME_MAP = {"https://david-peter.de/cube-composer/dist/main.css":"_assets/d7562db2bf07cf2b9110.css","/cube-composer/dist/main.css":"_assets/d7562db2bf07cf2b9110.css","/dist/main.css":"_assets/d7562db2bf07cf2b9110.css","/main.css":"_assets/d7562db2bf07cf2b9110.css","https://david-peter.de/cube-composer/img/cube-composer.svg":"_assets/51f4db99148573112381.svg","/cube-composer/img/cube-composer.svg":"_assets/51f4db99148573112381.svg","/img/cube-composer.svg":"_assets/51f4db99148573112381.svg","/cube-composer.svg":"_assets/51f4db99148573112381.svg","https://david-peter.de/cube-composer/dist/main.js":"_assets/1d0fba559f402f1d7262.js","/cube-composer/dist/main.js":"_assets/1d0fba559f402f1d7262.js","/dist/main.js":"_assets/1d0fba559f402f1d7262.js","/main.js":"_assets/1d0fba559f402f1d7262.js","https://ghbtns.com/github-btn.html?user=sharkdp&repo=cube-composer&type=star&count=true":"_assets/ea62216563585ae3e3be.html","/github-btn.html":"_assets/ea62216563585ae3e3be.html","/github-btn.html?user=sharkdp&repo=cube-composer&type=star&count=true":"_assets/ea62216563585ae3e3be.html","https://ghbtns.com/github-btn.html":"_assets/ea62216563585ae3e3be.html","https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700":"_assets/d30af09c1c594df28f9a.css","/css":"_assets/d30af09c1c594df28f9a.css","/css?family=Roboto+Condensed:400,700":"_assets/d30af09c1c594df28f9a.css","https://fonts.googleapis.com/css":"_assets/d30af09c1c594df28f9a.css","https://api.github.com/repos/sharkdp/cube-composer?callback=callback":"_assets/a66d9269924d6973ae44.js","/repos/sharkdp/cube-composer":"_assets/a66d9269924d6973ae44.js","/repos/sharkdp/cube-composer?callback=callback":"_assets/a66d9269924d6973ae44.js","/sharkdp/cube-composer":"_assets/a66d9269924d6973ae44.js","/cube-composer":"_assets/a66d9269924d6973ae44.js","https://api.github.com/repos/sharkdp/cube-composer":"_assets/a66d9269924d6973ae44.js","https://fonts.gstatic.com/s/robotocondensed/v31/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2":"_assets/8d230115e58faa2ed303.woff2","/s/robotocondensed/v31/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2":"_assets/8d230115e58faa2ed303.woff2","/robotocondensed/v31/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2":"_assets/8d230115e58faa2ed303.woff2","/v31/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2":"_assets/8d230115e58faa2ed303.woff2","/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2":"_assets/8d230115e58faa2ed303.woff2"};
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
