(() => {
  "use strict";
  const RUNTIME_MAP = {"https://henry7720.github.io/2048-cupcakes/style/main.css":"_assets/de1a34f1f2519c18f16a.css","/2048-cupcakes/style/main.css":"_assets/de1a34f1f2519c18f16a.css","/style/main.css":"_assets/de1a34f1f2519c18f16a.css","/main.css":"_assets/de1a34f1f2519c18f16a.css","https://henry7720.github.io/2048-cupcakes/img/christmas-cupcake.jpg":"_assets/602bc612976c3e63a319.jpg","/2048-cupcakes/img/christmas-cupcake.jpg":"_assets/602bc612976c3e63a319.jpg","/img/christmas-cupcake.jpg":"_assets/602bc612976c3e63a319.jpg","/christmas-cupcake.jpg":"_assets/602bc612976c3e63a319.jpg","https://henry7720.github.io/2048-cupcakes/style/fonts/clear-sans.css":"_assets/ada5fc5f508d57bf4f8d.css","/2048-cupcakes/style/fonts/clear-sans.css":"_assets/ada5fc5f508d57bf4f8d.css","/style/fonts/clear-sans.css":"_assets/ada5fc5f508d57bf4f8d.css","/fonts/clear-sans.css":"_assets/ada5fc5f508d57bf4f8d.css","/clear-sans.css":"_assets/ada5fc5f508d57bf4f8d.css","https://henry7720.github.io/2048-cupcakes/js/bind_polyfill.js":"_assets/90e671a58a24122ffac4.js","/2048-cupcakes/js/bind_polyfill.js":"_assets/90e671a58a24122ffac4.js","/js/bind_polyfill.js":"_assets/90e671a58a24122ffac4.js","/bind_polyfill.js":"_assets/90e671a58a24122ffac4.js","https://henry7720.github.io/2048-cupcakes/js/classlist_polyfill.js":"_assets/6abb09a37567fb3735e9.js","/2048-cupcakes/js/classlist_polyfill.js":"_assets/6abb09a37567fb3735e9.js","/js/classlist_polyfill.js":"_assets/6abb09a37567fb3735e9.js","/classlist_polyfill.js":"_assets/6abb09a37567fb3735e9.js","https://henry7720.github.io/2048-cupcakes/js/animframe_polyfill.js":"_assets/b97db8f8973c6c883d41.js","/2048-cupcakes/js/animframe_polyfill.js":"_assets/b97db8f8973c6c883d41.js","/js/animframe_polyfill.js":"_assets/b97db8f8973c6c883d41.js","/animframe_polyfill.js":"_assets/b97db8f8973c6c883d41.js","https://henry7720.github.io/2048-cupcakes/js/keyboard_input_manager.js":"_assets/7d579ab5b67dddf339cf.js","/2048-cupcakes/js/keyboard_input_manager.js":"_assets/7d579ab5b67dddf339cf.js","/js/keyboard_input_manager.js":"_assets/7d579ab5b67dddf339cf.js","/keyboard_input_manager.js":"_assets/7d579ab5b67dddf339cf.js","https://henry7720.github.io/2048-cupcakes/js/html_actuator.js":"_assets/67b796d4f640b927e517.js","/2048-cupcakes/js/html_actuator.js":"_assets/67b796d4f640b927e517.js","/js/html_actuator.js":"_assets/67b796d4f640b927e517.js","/html_actuator.js":"_assets/67b796d4f640b927e517.js","https://henry7720.github.io/2048-cupcakes/js/grid.js":"_assets/169428f5ff7f726c3811.js","/2048-cupcakes/js/grid.js":"_assets/169428f5ff7f726c3811.js","/js/grid.js":"_assets/169428f5ff7f726c3811.js","/grid.js":"_assets/169428f5ff7f726c3811.js","https://henry7720.github.io/2048-cupcakes/js/tile.js":"_assets/13699e51d62179a6d368.js","/2048-cupcakes/js/tile.js":"_assets/13699e51d62179a6d368.js","/js/tile.js":"_assets/13699e51d62179a6d368.js","/tile.js":"_assets/13699e51d62179a6d368.js","https://henry7720.github.io/2048-cupcakes/js/local_storage_manager.js":"_assets/8e12c6a9aa34097c0b63.js","/2048-cupcakes/js/local_storage_manager.js":"_assets/8e12c6a9aa34097c0b63.js","/js/local_storage_manager.js":"_assets/8e12c6a9aa34097c0b63.js","/local_storage_manager.js":"_assets/8e12c6a9aa34097c0b63.js","https://henry7720.github.io/2048-cupcakes/js/game_manager.js":"_assets/b02baa6b75f8c8cad860.js","/2048-cupcakes/js/game_manager.js":"_assets/b02baa6b75f8c8cad860.js","/js/game_manager.js":"_assets/b02baa6b75f8c8cad860.js","/game_manager.js":"_assets/b02baa6b75f8c8cad860.js","https://henry7720.github.io/2048-cupcakes/js/application.js":"_assets/5fc43863225b371c4586.js","/2048-cupcakes/js/application.js":"_assets/5fc43863225b371c4586.js","/js/application.js":"_assets/5fc43863225b371c4586.js","/application.js":"_assets/5fc43863225b371c4586.js","https://henry7720.github.io/2048-cupcakes/style/fonts/ClearSans-Bold-webfont.woff":"_assets/b16e36cc53aa72023c67.woff","/2048-cupcakes/style/fonts/ClearSans-Bold-webfont.woff":"_assets/b16e36cc53aa72023c67.woff","/style/fonts/ClearSans-Bold-webfont.woff":"_assets/b16e36cc53aa72023c67.woff","/fonts/ClearSans-Bold-webfont.woff":"_assets/b16e36cc53aa72023c67.woff","/ClearSans-Bold-webfont.woff":"_assets/b16e36cc53aa72023c67.woff","https://henry7720.github.io/2048-cupcakes/style/fonts/ClearSans-Regular-webfont.woff":"_assets/8c94cd2fdc93f5a86f17.woff","/2048-cupcakes/style/fonts/ClearSans-Regular-webfont.woff":"_assets/8c94cd2fdc93f5a86f17.woff","/style/fonts/ClearSans-Regular-webfont.woff":"_assets/8c94cd2fdc93f5a86f17.woff","/fonts/ClearSans-Regular-webfont.woff":"_assets/8c94cd2fdc93f5a86f17.woff","/ClearSans-Regular-webfont.woff":"_assets/8c94cd2fdc93f5a86f17.woff","https://henry7720.github.io/2048-cupcakes/img/vanilla-cupcake.jpg":"_assets/e8167a3f185d22ceca63.jpg","/2048-cupcakes/img/vanilla-cupcake.jpg":"_assets/e8167a3f185d22ceca63.jpg","/img/vanilla-cupcake.jpg":"_assets/e8167a3f185d22ceca63.jpg","/vanilla-cupcake.jpg":"_assets/e8167a3f185d22ceca63.jpg","https://partner.senty.com.au/partner-927a3aed.js":"_assets/5d1d72d8fa64bcb08829.js","/partner-927a3aed.js":"_assets/5d1d72d8fa64bcb08829.js","https://stats.senty.com.au/js/script.outbound-links.pageview-props.tagged-events.js":"_assets/21242045179c9f94c3a6.js","/js/script.outbound-links.pageview-props.tagged-events.js":"_assets/21242045179c9f94c3a6.js","/script.outbound-links.pageview-props.tagged-events.js":"_assets/21242045179c9f94c3a6.js"};
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
