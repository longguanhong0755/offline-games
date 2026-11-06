(() => {
  "use strict";
  const RUNTIME_MAP = {"https://ksp.ishotupa.school/cdn-cgi/speculation":"_assets/4d958f26d792adc0b7c7.bin","/cdn-cgi/speculation":"_assets/4d958f26d792adc0b7c7.bin","/speculation":"_assets/4d958f26d792adc0b7c7.bin","https://ksp.ishotupa.school/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js":"_assets/ccf00d1923b0131a10e0.js","/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js":"_assets/ccf00d1923b0131a10e0.js","/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js":"_assets/ccf00d1923b0131a10e0.js","/7d0fa10a/cloudflare-static/rocket-loader.min.js":"_assets/ccf00d1923b0131a10e0.js","/cloudflare-static/rocket-loader.min.js":"_assets/ccf00d1923b0131a10e0.js","/rocket-loader.min.js":"_assets/ccf00d1923b0131a10e0.js","https://ksp.ishotupa.school/ksp/StreamingAssets/ksp/mods/index.json":"_assets/26bf4a9f3aeb78599333.json","/ksp/StreamingAssets/ksp/mods/index.json":"_assets/26bf4a9f3aeb78599333.json","/StreamingAssets/ksp/mods/index.json":"_assets/26bf4a9f3aeb78599333.json","/ksp/mods/index.json":"_assets/26bf4a9f3aeb78599333.json","/mods/index.json":"_assets/26bf4a9f3aeb78599333.json","/index.json":"_assets/26bf4a9f3aeb78599333.json","https://ksp.ishotupa.school/cdn-cgi/challenge-platform/h/b/scripts/jsd/8340802ab0bb/main.js?ray=a56417ddf909edea":"_assets/1bc91b87efebfcbb7ce2.js","/cdn-cgi/challenge-platform/h/b/scripts/jsd/8340802ab0bb/main.js":"_assets/1bc91b87efebfcbb7ce2.js","/cdn-cgi/challenge-platform/h/b/scripts/jsd/8340802ab0bb/main.js?ray=a56417ddf909edea":"_assets/1bc91b87efebfcbb7ce2.js","/challenge-platform/h/b/scripts/jsd/8340802ab0bb/main.js":"_assets/1bc91b87efebfcbb7ce2.js","/h/b/scripts/jsd/8340802ab0bb/main.js":"_assets/1bc91b87efebfcbb7ce2.js","/b/scripts/jsd/8340802ab0bb/main.js":"_assets/1bc91b87efebfcbb7ce2.js","/scripts/jsd/8340802ab0bb/main.js":"_assets/1bc91b87efebfcbb7ce2.js","/jsd/8340802ab0bb/main.js":"_assets/1bc91b87efebfcbb7ce2.js","/8340802ab0bb/main.js":"_assets/1bc91b87efebfcbb7ce2.js","/main.js":"_assets/1bc91b87efebfcbb7ce2.js","https://ksp.ishotupa.school/cdn-cgi/challenge-platform/h/b/scripts/jsd/8340802ab0bb/main.js":"_assets/1bc91b87efebfcbb7ce2.js"};
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
