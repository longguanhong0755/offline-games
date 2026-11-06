(() => {
  "use strict";
  const RUNTIME_MAP = {"https://pjh-eric.github.io/pinball-hoops/css/style.css":"_assets/baec40ce8476b4b992be.css","/pinball-hoops/css/style.css":"_assets/baec40ce8476b4b992be.css","/css/style.css":"_assets/baec40ce8476b4b992be.css","/style.css":"_assets/baec40ce8476b4b992be.css","https://pjh-eric.github.io/pinball-hoops/js/analytics.js":"_assets/d8c9d1de4b39513ac485.js","/pinball-hoops/js/analytics.js":"_assets/d8c9d1de4b39513ac485.js","/js/analytics.js":"_assets/d8c9d1de4b39513ac485.js","/analytics.js":"_assets/d8c9d1de4b39513ac485.js","https://pjh-eric.github.io/pinball-hoops/js/rng.js":"_assets/39f755040ba4788fbd3e.js","/pinball-hoops/js/rng.js":"_assets/39f755040ba4788fbd3e.js","/js/rng.js":"_assets/39f755040ba4788fbd3e.js","/rng.js":"_assets/39f755040ba4788fbd3e.js","https://pjh-eric.github.io/pinball-hoops/js/rules.js":"_assets/7e96455e2d662539a7b9.js","/pinball-hoops/js/rules.js":"_assets/7e96455e2d662539a7b9.js","/js/rules.js":"_assets/7e96455e2d662539a7b9.js","/rules.js":"_assets/7e96455e2d662539a7b9.js","https://pjh-eric.github.io/pinball-hoops/js/app.js":"_assets/552fc03ec3b9b121a395.js","/pinball-hoops/js/app.js":"_assets/552fc03ec3b9b121a395.js","/js/app.js":"_assets/552fc03ec3b9b121a395.js","/app.js":"_assets/552fc03ec3b9b121a395.js","https://pjh-eric.github.io/pinball-hoops/js/locales.js":"_assets/e9d20ab8153bc1c9efb6.js","/pinball-hoops/js/locales.js":"_assets/e9d20ab8153bc1c9efb6.js","/js/locales.js":"_assets/e9d20ab8153bc1c9efb6.js","/locales.js":"_assets/e9d20ab8153bc1c9efb6.js","https://pjh-eric.github.io/pinball-hoops/js/render.js":"_assets/61642bd8c5691308adff.js","/pinball-hoops/js/render.js":"_assets/61642bd8c5691308adff.js","/js/render.js":"_assets/61642bd8c5691308adff.js","/render.js":"_assets/61642bd8c5691308adff.js","https://pjh-eric.github.io/pinball-hoops/js/i18n.js":"_assets/635afa6838c40651fb7e.js","/pinball-hoops/js/i18n.js":"_assets/635afa6838c40651fb7e.js","/js/i18n.js":"_assets/635afa6838c40651fb7e.js","/i18n.js":"_assets/635afa6838c40651fb7e.js","https://pjh-eric.github.io/pinball-hoops/js/result-share.js":"_assets/8b59b7eb53fb2a861332.js","/pinball-hoops/js/result-share.js":"_assets/8b59b7eb53fb2a861332.js","/js/result-share.js":"_assets/8b59b7eb53fb2a861332.js","/result-share.js":"_assets/8b59b7eb53fb2a861332.js","https://pjh-eric.github.io/pinball-hoops/js/storage.js":"_assets/999bf97fb1e7bb2a8557.js","/pinball-hoops/js/storage.js":"_assets/999bf97fb1e7bb2a8557.js","/js/storage.js":"_assets/999bf97fb1e7bb2a8557.js","/storage.js":"_assets/999bf97fb1e7bb2a8557.js","https://pjh-eric.github.io/pinball-hoops/js/locales/result-share.js":"_assets/1ad7d7f22d5858275dce.js","/pinball-hoops/js/locales/result-share.js":"_assets/1ad7d7f22d5858275dce.js","/js/locales/result-share.js":"_assets/1ad7d7f22d5858275dce.js","/locales/result-share.js":"_assets/1ad7d7f22d5858275dce.js","https://pjh-eric.github.io/pinball-hoops/js/audio.js":"_assets/04d832f623e17958d323.js","/pinball-hoops/js/audio.js":"_assets/04d832f623e17958d323.js","/js/audio.js":"_assets/04d832f623e17958d323.js","/audio.js":"_assets/04d832f623e17958d323.js"};
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
