(() => {
  "use strict";
  const RUNTIME_MAP = {"https://pjh-eric.github.io/draw-guess/css/style.css":"_assets/2204c43cc786bc84d399.css","/draw-guess/css/style.css":"_assets/2204c43cc786bc84d399.css","/css/style.css":"_assets/2204c43cc786bc84d399.css","/style.css":"_assets/2204c43cc786bc84d399.css","https://pjh-eric.github.io/draw-guess/css/latency.css?v=20261002c":"_assets/60c6e85ff4afc09228f9.css","/draw-guess/css/latency.css":"_assets/60c6e85ff4afc09228f9.css","/draw-guess/css/latency.css?v=20261002c":"_assets/60c6e85ff4afc09228f9.css","/css/latency.css":"_assets/60c6e85ff4afc09228f9.css","/latency.css":"_assets/60c6e85ff4afc09228f9.css","https://pjh-eric.github.io/draw-guess/css/latency.css":"_assets/60c6e85ff4afc09228f9.css","https://pjh-eric.github.io/draw-guess/css/server-outage.css?v=20261026":"_assets/64bead66d2c2262ccf74.css","/draw-guess/css/server-outage.css":"_assets/64bead66d2c2262ccf74.css","/draw-guess/css/server-outage.css?v=20261026":"_assets/64bead66d2c2262ccf74.css","/css/server-outage.css":"_assets/64bead66d2c2262ccf74.css","/server-outage.css":"_assets/64bead66d2c2262ccf74.css","https://pjh-eric.github.io/draw-guess/css/server-outage.css":"_assets/64bead66d2c2262ccf74.css","https://pjh-eric.github.io/draw-guess/js/server-outage.js?v=20261026":"_assets/9bfe81918ce343785cbb.js","/draw-guess/js/server-outage.js":"_assets/9bfe81918ce343785cbb.js","/draw-guess/js/server-outage.js?v=20261026":"_assets/9bfe81918ce343785cbb.js","/js/server-outage.js":"_assets/9bfe81918ce343785cbb.js","/server-outage.js":"_assets/9bfe81918ce343785cbb.js","https://pjh-eric.github.io/draw-guess/js/server-outage.js":"_assets/9bfe81918ce343785cbb.js","https://pjh-eric.github.io/draw-guess/js/analytics.js":"_assets/507dbf3a32e23ca70ba3.js","/draw-guess/js/analytics.js":"_assets/507dbf3a32e23ca70ba3.js","/js/analytics.js":"_assets/507dbf3a32e23ca70ba3.js","/analytics.js":"_assets/507dbf3a32e23ca70ba3.js","https://pjh-eric.github.io/draw-guess/js/i18n.js":"_assets/ba529a660254276bb3f1.js","/draw-guess/js/i18n.js":"_assets/ba529a660254276bb3f1.js","/js/i18n.js":"_assets/ba529a660254276bb3f1.js","/i18n.js":"_assets/ba529a660254276bb3f1.js","https://pjh-eric.github.io/draw-guess/js/locales.js":"_assets/e231cfbc4a50aaeef7e5.js","/draw-guess/js/locales.js":"_assets/e231cfbc4a50aaeef7e5.js","/js/locales.js":"_assets/e231cfbc4a50aaeef7e5.js","/locales.js":"_assets/e231cfbc4a50aaeef7e5.js","https://pjh-eric.github.io/draw-guess/js/words.en.js":"_assets/97539c6c331e26c51c9c.js","/draw-guess/js/words.en.js":"_assets/97539c6c331e26c51c9c.js","/js/words.en.js":"_assets/97539c6c331e26c51c9c.js","/words.en.js":"_assets/97539c6c331e26c51c9c.js","https://pjh-eric.github.io/draw-guess/js/config.js":"_assets/726c37e974b2387de766.js","/draw-guess/js/config.js":"_assets/726c37e974b2387de766.js","/js/config.js":"_assets/726c37e974b2387de766.js","/config.js":"_assets/726c37e974b2387de766.js","https://pjh-eric.github.io/draw-guess/js/keyboard.js":"_assets/42704ce3a9a4c52f5a3c.js","/draw-guess/js/keyboard.js":"_assets/42704ce3a9a4c52f5a3c.js","/js/keyboard.js":"_assets/42704ce3a9a4c52f5a3c.js","/keyboard.js":"_assets/42704ce3a9a4c52f5a3c.js","https://pjh-eric.github.io/draw-guess/js/words.zh-Hans.js":"_assets/8e559b68c045562655e6.js","/draw-guess/js/words.zh-Hans.js":"_assets/8e559b68c045562655e6.js","/js/words.zh-Hans.js":"_assets/8e559b68c045562655e6.js","/words.zh-Hans.js":"_assets/8e559b68c045562655e6.js","https://pjh-eric.github.io/draw-guess/js/words.js":"_assets/668cd1787d945b90e83e.js","/draw-guess/js/words.js":"_assets/668cd1787d945b90e83e.js","/js/words.js":"_assets/668cd1787d945b90e83e.js","/words.js":"_assets/668cd1787d945b90e83e.js","https://pjh-eric.github.io/draw-guess/js/rng.js":"_assets/047df9e456c34b963c3c.js","/draw-guess/js/rng.js":"_assets/047df9e456c34b963c3c.js","/js/rng.js":"_assets/047df9e456c34b963c3c.js","/rng.js":"_assets/047df9e456c34b963c3c.js","https://pjh-eric.github.io/draw-guess/js/reference-recipes.js":"_assets/619f4bee4ce81dcf6976.js","/draw-guess/js/reference-recipes.js":"_assets/619f4bee4ce81dcf6976.js","/js/reference-recipes.js":"_assets/619f4bee4ce81dcf6976.js","/reference-recipes.js":"_assets/619f4bee4ce81dcf6976.js","https://pjh-eric.github.io/draw-guess/js/reference-path.js":"_assets/6d59e12d94e2c20f136d.js","/draw-guess/js/reference-path.js":"_assets/6d59e12d94e2c20f136d.js","/js/reference-path.js":"_assets/6d59e12d94e2c20f136d.js","/reference-path.js":"_assets/6d59e12d94e2c20f136d.js","https://pjh-eric.github.io/draw-guess/js/reference-kit.js":"_assets/7e55d5f149b61ae3c2a9.js","/draw-guess/js/reference-kit.js":"_assets/7e55d5f149b61ae3c2a9.js","/js/reference-kit.js":"_assets/7e55d5f149b61ae3c2a9.js","/reference-kit.js":"_assets/7e55d5f149b61ae3c2a9.js","https://pjh-eric.github.io/draw-guess/js/drawing-file.js":"_assets/e6d37d0c0c152c530676.js","/draw-guess/js/drawing-file.js":"_assets/e6d37d0c0c152c530676.js","/js/drawing-file.js":"_assets/e6d37d0c0c152c530676.js","/drawing-file.js":"_assets/e6d37d0c0c152c530676.js","https://pjh-eric.github.io/draw-guess/js/meaning-reference.js":"_assets/c8389a646899213d8fb2.js","/draw-guess/js/meaning-reference.js":"_assets/c8389a646899213d8fb2.js","/js/meaning-reference.js":"_assets/c8389a646899213d8fb2.js","/meaning-reference.js":"_assets/c8389a646899213d8fb2.js","https://pjh-eric.github.io/draw-guess/js/reference.js":"_assets/27093360f67200dd059b.js","/draw-guess/js/reference.js":"_assets/27093360f67200dd059b.js","/js/reference.js":"_assets/27093360f67200dd059b.js","/reference.js":"_assets/27093360f67200dd059b.js","https://pjh-eric.github.io/draw-guess/js/storage.js":"_assets/12a8c6c817a0da34c8b4.js","/draw-guess/js/storage.js":"_assets/12a8c6c817a0da34c8b4.js","/js/storage.js":"_assets/12a8c6c817a0da34c8b4.js","/storage.js":"_assets/12a8c6c817a0da34c8b4.js","https://pjh-eric.github.io/draw-guess/js/rules.js":"_assets/8d0d9deb46357bb63cd8.js","/draw-guess/js/rules.js":"_assets/8d0d9deb46357bb63cd8.js","/js/rules.js":"_assets/8d0d9deb46357bb63cd8.js","/rules.js":"_assets/8d0d9deb46357bb63cd8.js","https://pjh-eric.github.io/draw-guess/js/svgui.js":"_assets/24d5d60ddda4d6406fcb.js","/draw-guess/js/svgui.js":"_assets/24d5d60ddda4d6406fcb.js","/js/svgui.js":"_assets/24d5d60ddda4d6406fcb.js","/svgui.js":"_assets/24d5d60ddda4d6406fcb.js","https://pjh-eric.github.io/draw-guess/js/paint.js":"_assets/ed8bef09a1f05516859b.js","/draw-guess/js/paint.js":"_assets/ed8bef09a1f05516859b.js","/js/paint.js":"_assets/ed8bef09a1f05516859b.js","/paint.js":"_assets/ed8bef09a1f05516859b.js","https://pjh-eric.github.io/draw-guess/js/latency.js?v=20261002c":"_assets/b703cb2f788c2412417f.js","/draw-guess/js/latency.js":"_assets/b703cb2f788c2412417f.js","/draw-guess/js/latency.js?v=20261002c":"_assets/b703cb2f788c2412417f.js","/js/latency.js":"_assets/b703cb2f788c2412417f.js","/latency.js":"_assets/b703cb2f788c2412417f.js","https://pjh-eric.github.io/draw-guess/js/latency.js":"_assets/b703cb2f788c2412417f.js","https://pjh-eric.github.io/draw-guess/js/audio.js":"_assets/d7223f3354a39d12a08a.js","/draw-guess/js/audio.js":"_assets/d7223f3354a39d12a08a.js","/js/audio.js":"_assets/d7223f3354a39d12a08a.js","/audio.js":"_assets/d7223f3354a39d12a08a.js","https://pjh-eric.github.io/draw-guess/js/online.js":"_assets/8d69d27fc423bcaaaa56.js","/draw-guess/js/online.js":"_assets/8d69d27fc423bcaaaa56.js","/js/online.js":"_assets/8d69d27fc423bcaaaa56.js","/online.js":"_assets/8d69d27fc423bcaaaa56.js","https://pjh-eric.github.io/draw-guess/js/app.js":"_assets/c10eea814d2052c31e1e.js","/draw-guess/js/app.js":"_assets/c10eea814d2052c31e1e.js","/js/app.js":"_assets/c10eea814d2052c31e1e.js","/app.js":"_assets/c10eea814d2052c31e1e.js","https://pjh-eric.github.io/draw-guess/js/locales/result-share.js":"_assets/1ad7d7f22d5858275dce.js","/draw-guess/js/locales/result-share.js":"_assets/1ad7d7f22d5858275dce.js","/js/locales/result-share.js":"_assets/1ad7d7f22d5858275dce.js","/locales/result-share.js":"_assets/1ad7d7f22d5858275dce.js","/result-share.js":"_assets/1ad7d7f22d5858275dce.js","https://pjh-eric.github.io/draw-guess/js/result-share.js":"_assets/8b59b7eb53fb2a861332.js","/draw-guess/js/result-share.js":"_assets/8b59b7eb53fb2a861332.js","/js/result-share.js":"_assets/8b59b7eb53fb2a861332.js"};
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
