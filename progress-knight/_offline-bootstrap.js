(() => {
  "use strict";
  const RUNTIME_MAP = {"https://ihtasham42.github.io/progress-knight/css/dark.css":"_assets/e4a8707048304d120886.css","/progress-knight/css/dark.css":"_assets/e4a8707048304d120886.css","/css/dark.css":"_assets/e4a8707048304d120886.css","/dark.css":"_assets/e4a8707048304d120886.css","https://ihtasham42.github.io/progress-knight/css/styles.css":"_assets/b3ed903f9405f1610390.css","/progress-knight/css/styles.css":"_assets/b3ed903f9405f1610390.css","/css/styles.css":"_assets/b3ed903f9405f1610390.css","/styles.css":"_assets/b3ed903f9405f1610390.css","https://ihtasham42.github.io/progress-knight/js/HackTimer.js":"_assets/aae2e133d6f166b4cf22.js","/progress-knight/js/HackTimer.js":"_assets/aae2e133d6f166b4cf22.js","/js/HackTimer.js":"_assets/aae2e133d6f166b4cf22.js","/HackTimer.js":"_assets/aae2e133d6f166b4cf22.js","https://ihtasham42.github.io/progress-knight/js/classes.js":"_assets/ced51ef40af0dcf15f6a.js","/progress-knight/js/classes.js":"_assets/ced51ef40af0dcf15f6a.js","/js/classes.js":"_assets/ced51ef40af0dcf15f6a.js","/classes.js":"_assets/ced51ef40af0dcf15f6a.js","https://www.w3schools.com/w3css/4/w3.css":"_assets/c4f2aba13970ecf8303f.css","/w3css/4/w3.css":"_assets/c4f2aba13970ecf8303f.css","/4/w3.css":"_assets/c4f2aba13970ecf8303f.css","/w3.css":"_assets/c4f2aba13970ecf8303f.css","https://ihtasham42.github.io/progress-knight/js/main.js":"_assets/12feb2c42afa1dfa9c17.js","/progress-knight/js/main.js":"_assets/12feb2c42afa1dfa9c17.js","/js/main.js":"_assets/12feb2c42afa1dfa9c17.js","/main.js":"_assets/12feb2c42afa1dfa9c17.js"};
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
