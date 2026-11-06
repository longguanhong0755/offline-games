(() => {
  "use strict";
  const RUNTIME_MAP = {"http://0x0800.github.io/2048-CUPCAKES/style/main.css":"_assets/4aea547e1c3e221a7a7b.css","/2048-CUPCAKES/style/main.css":"_assets/4aea547e1c3e221a7a7b.css","/style/main.css":"_assets/4aea547e1c3e221a7a7b.css","/main.css":"_assets/4aea547e1c3e221a7a7b.css","http://0x0800.github.io/2048-CUPCAKES/js/bind_polyfill.js":"_assets/90e671a58a24122ffac4.js","/2048-CUPCAKES/js/bind_polyfill.js":"_assets/90e671a58a24122ffac4.js","/js/bind_polyfill.js":"_assets/90e671a58a24122ffac4.js","/bind_polyfill.js":"_assets/90e671a58a24122ffac4.js","http://0x0800.github.io/2048-CUPCAKES/js/classlist_polyfill.js":"_assets/6abb09a37567fb3735e9.js","/2048-CUPCAKES/js/classlist_polyfill.js":"_assets/6abb09a37567fb3735e9.js","/js/classlist_polyfill.js":"_assets/6abb09a37567fb3735e9.js","/classlist_polyfill.js":"_assets/6abb09a37567fb3735e9.js","http://0x0800.github.io/2048-CUPCAKES/js/animframe_polyfill.js":"_assets/b9ba80189171d8158b60.js","/2048-CUPCAKES/js/animframe_polyfill.js":"_assets/b9ba80189171d8158b60.js","/js/animframe_polyfill.js":"_assets/b9ba80189171d8158b60.js","/animframe_polyfill.js":"_assets/b9ba80189171d8158b60.js","http://0x0800.github.io/2048-CUPCAKES/js/l10n.js":"_assets/77275815c4ce3f815376.js","/2048-CUPCAKES/js/l10n.js":"_assets/77275815c4ce3f815376.js","/js/l10n.js":"_assets/77275815c4ce3f815376.js","/l10n.js":"_assets/77275815c4ce3f815376.js","http://0x0800.github.io/2048-CUPCAKES/js/localization.js":"_assets/3471f6be0a876c6825b6.js","/2048-CUPCAKES/js/localization.js":"_assets/3471f6be0a876c6825b6.js","/js/localization.js":"_assets/3471f6be0a876c6825b6.js","/localization.js":"_assets/3471f6be0a876c6825b6.js","http://0x0800.github.io/2048-CUPCAKES/js/keyboard_input_manager.js":"_assets/b326dde6e800ff5bddf9.js","/2048-CUPCAKES/js/keyboard_input_manager.js":"_assets/b326dde6e800ff5bddf9.js","/js/keyboard_input_manager.js":"_assets/b326dde6e800ff5bddf9.js","/keyboard_input_manager.js":"_assets/b326dde6e800ff5bddf9.js","http://0x0800.github.io/2048-CUPCAKES/style/fonts/clear-sans.css":"_assets/ada5fc5f508d57bf4f8d.css","/2048-CUPCAKES/style/fonts/clear-sans.css":"_assets/ada5fc5f508d57bf4f8d.css","/style/fonts/clear-sans.css":"_assets/ada5fc5f508d57bf4f8d.css","/fonts/clear-sans.css":"_assets/ada5fc5f508d57bf4f8d.css","/clear-sans.css":"_assets/ada5fc5f508d57bf4f8d.css","http://0x0800.github.io/2048-CUPCAKES/js/html_actuator.js":"_assets/a455951aabf5dd22fa97.js","/2048-CUPCAKES/js/html_actuator.js":"_assets/a455951aabf5dd22fa97.js","/js/html_actuator.js":"_assets/a455951aabf5dd22fa97.js","/html_actuator.js":"_assets/a455951aabf5dd22fa97.js","http://0x0800.github.io/2048-CUPCAKES/js/tile.js":"_assets/13699e51d62179a6d368.js","/2048-CUPCAKES/js/tile.js":"_assets/13699e51d62179a6d368.js","/js/tile.js":"_assets/13699e51d62179a6d368.js","/tile.js":"_assets/13699e51d62179a6d368.js","http://0x0800.github.io/2048-CUPCAKES/js/local_storage_manager.js":"_assets/04b82b4561718726c79b.js","/2048-CUPCAKES/js/local_storage_manager.js":"_assets/04b82b4561718726c79b.js","/js/local_storage_manager.js":"_assets/04b82b4561718726c79b.js","/local_storage_manager.js":"_assets/04b82b4561718726c79b.js","http://0x0800.github.io/2048-CUPCAKES/js/grid.js":"_assets/169428f5ff7f726c3811.js","/2048-CUPCAKES/js/grid.js":"_assets/169428f5ff7f726c3811.js","/js/grid.js":"_assets/169428f5ff7f726c3811.js","/grid.js":"_assets/169428f5ff7f726c3811.js","http://0x0800.github.io/2048-CUPCAKES/js/game_manager.js":"_assets/34208eba29fc2d09ce9d.js","/2048-CUPCAKES/js/game_manager.js":"_assets/34208eba29fc2d09ce9d.js","/js/game_manager.js":"_assets/34208eba29fc2d09ce9d.js","/game_manager.js":"_assets/34208eba29fc2d09ce9d.js","http://0x0800.github.io/2048-CUPCAKES/js/application.js":"_assets/5fc43863225b371c4586.js","/2048-CUPCAKES/js/application.js":"_assets/5fc43863225b371c4586.js","/js/application.js":"_assets/5fc43863225b371c4586.js","/application.js":"_assets/5fc43863225b371c4586.js","http://0x0800.github.io/2048-CUPCAKES/style/img/bg.jpg":"_assets/a738bbc8b141b89402f4.jpg","/2048-CUPCAKES/style/img/bg.jpg":"_assets/a738bbc8b141b89402f4.jpg","/style/img/bg.jpg":"_assets/a738bbc8b141b89402f4.jpg","/img/bg.jpg":"_assets/a738bbc8b141b89402f4.jpg","/bg.jpg":"_assets/a738bbc8b141b89402f4.jpg","http://0x0800.github.io/2048-CUPCAKES/style/fonts/ClearSans-Bold-webfont.woff":"_assets/b16e36cc53aa72023c67.woff","/2048-CUPCAKES/style/fonts/ClearSans-Bold-webfont.woff":"_assets/b16e36cc53aa72023c67.woff","/style/fonts/ClearSans-Bold-webfont.woff":"_assets/b16e36cc53aa72023c67.woff","/fonts/ClearSans-Bold-webfont.woff":"_assets/b16e36cc53aa72023c67.woff","/ClearSans-Bold-webfont.woff":"_assets/b16e36cc53aa72023c67.woff","http://0x0800.github.io/2048-CUPCAKES/style/fonts/ClearSans-Regular-webfont.woff":"_assets/8c94cd2fdc93f5a86f17.woff","/2048-CUPCAKES/style/fonts/ClearSans-Regular-webfont.woff":"_assets/8c94cd2fdc93f5a86f17.woff","/style/fonts/ClearSans-Regular-webfont.woff":"_assets/8c94cd2fdc93f5a86f17.woff","/fonts/ClearSans-Regular-webfont.woff":"_assets/8c94cd2fdc93f5a86f17.woff","/ClearSans-Regular-webfont.woff":"_assets/8c94cd2fdc93f5a86f17.woff","http://0x0800.github.io/2048-CUPCAKES/style/img/8.jpg":"_assets/49c111c24d566feb6368.jpg","/2048-CUPCAKES/style/img/8.jpg":"_assets/49c111c24d566feb6368.jpg","/style/img/8.jpg":"_assets/49c111c24d566feb6368.jpg","/img/8.jpg":"_assets/49c111c24d566feb6368.jpg","/8.jpg":"_assets/49c111c24d566feb6368.jpg","http://0x0800.github.io/2048-CUPCAKES/style/img/2.jpg":"_assets/547fc194e7f3206f4a20.jpg","/2048-CUPCAKES/style/img/2.jpg":"_assets/547fc194e7f3206f4a20.jpg","/style/img/2.jpg":"_assets/547fc194e7f3206f4a20.jpg","/img/2.jpg":"_assets/547fc194e7f3206f4a20.jpg","/2.jpg":"_assets/547fc194e7f3206f4a20.jpg","http://0x0800.github.io/2048-CUPCAKES/style/img/16.jpg":"_assets/e9e601d8626934bba377.jpg","/2048-CUPCAKES/style/img/16.jpg":"_assets/e9e601d8626934bba377.jpg","/style/img/16.jpg":"_assets/e9e601d8626934bba377.jpg","/img/16.jpg":"_assets/e9e601d8626934bba377.jpg","/16.jpg":"_assets/e9e601d8626934bba377.jpg","http://0x0800.github.io/2048-CUPCAKES/style/img/32.jpg":"_assets/0aa8591ecb84ef7babef.jpg","/2048-CUPCAKES/style/img/32.jpg":"_assets/0aa8591ecb84ef7babef.jpg","/style/img/32.jpg":"_assets/0aa8591ecb84ef7babef.jpg","/img/32.jpg":"_assets/0aa8591ecb84ef7babef.jpg","/32.jpg":"_assets/0aa8591ecb84ef7babef.jpg","http://0x0800.github.io/2048-CUPCAKES/style/img/64.jpg":"_assets/6aeecc181eddaf1cc988.jpg","/2048-CUPCAKES/style/img/64.jpg":"_assets/6aeecc181eddaf1cc988.jpg","/style/img/64.jpg":"_assets/6aeecc181eddaf1cc988.jpg","/img/64.jpg":"_assets/6aeecc181eddaf1cc988.jpg","/64.jpg":"_assets/6aeecc181eddaf1cc988.jpg","http://0x0800.github.io/2048-CUPCAKES/style/img/4.jpg":"_assets/9c7487ea79c707976e6e.jpg","/2048-CUPCAKES/style/img/4.jpg":"_assets/9c7487ea79c707976e6e.jpg","/style/img/4.jpg":"_assets/9c7487ea79c707976e6e.jpg","/img/4.jpg":"_assets/9c7487ea79c707976e6e.jpg","/4.jpg":"_assets/9c7487ea79c707976e6e.jpg","http://0x0800.github.io/2048-CUPCAKES/style/img/1024.jpg":"_assets/e6e25c7c92c1fe0877ad.jpg","/2048-CUPCAKES/style/img/1024.jpg":"_assets/e6e25c7c92c1fe0877ad.jpg","/style/img/1024.jpg":"_assets/e6e25c7c92c1fe0877ad.jpg","/img/1024.jpg":"_assets/e6e25c7c92c1fe0877ad.jpg","/1024.jpg":"_assets/e6e25c7c92c1fe0877ad.jpg","http://0x0800.github.io/2048-CUPCAKES/style/img/2048.jpg":"_assets/1422e889245a90c85ce5.jpg","/2048-CUPCAKES/style/img/2048.jpg":"_assets/1422e889245a90c85ce5.jpg","/style/img/2048.jpg":"_assets/1422e889245a90c85ce5.jpg","/img/2048.jpg":"_assets/1422e889245a90c85ce5.jpg","/2048.jpg":"_assets/1422e889245a90c85ce5.jpg","http://0x0800.github.io/2048-CUPCAKES/style/img/128.jpg":"_assets/d5c32912c2126f54eeb1.jpg","/2048-CUPCAKES/style/img/128.jpg":"_assets/d5c32912c2126f54eeb1.jpg","/style/img/128.jpg":"_assets/d5c32912c2126f54eeb1.jpg","/img/128.jpg":"_assets/d5c32912c2126f54eeb1.jpg","/128.jpg":"_assets/d5c32912c2126f54eeb1.jpg","http://0x0800.github.io/2048-CUPCAKES/style/img/512.jpg":"_assets/9b0792049e9f13bce4c9.jpg","/2048-CUPCAKES/style/img/512.jpg":"_assets/9b0792049e9f13bce4c9.jpg","/style/img/512.jpg":"_assets/9b0792049e9f13bce4c9.jpg","/img/512.jpg":"_assets/9b0792049e9f13bce4c9.jpg","/512.jpg":"_assets/9b0792049e9f13bce4c9.jpg","http://0x0800.github.io/2048-CUPCAKES/style/img/256.jpg":"_assets/3c102521fa9916a8c030.jpg","/2048-CUPCAKES/style/img/256.jpg":"_assets/3c102521fa9916a8c030.jpg","/style/img/256.jpg":"_assets/3c102521fa9916a8c030.jpg","/img/256.jpg":"_assets/3c102521fa9916a8c030.jpg","/256.jpg":"_assets/3c102521fa9916a8c030.jpg","http://0x0800.github.io/2048-CUPCAKES/style/img/8192.jpg":"_assets/f55e847a45d02d59df71.jpg","/2048-CUPCAKES/style/img/8192.jpg":"_assets/f55e847a45d02d59df71.jpg","/style/img/8192.jpg":"_assets/f55e847a45d02d59df71.jpg","/img/8192.jpg":"_assets/f55e847a45d02d59df71.jpg","/8192.jpg":"_assets/f55e847a45d02d59df71.jpg","http://0x0800.github.io/2048-CUPCAKES/style/img/4096.jpg":"_assets/b60c2939f298141475a6.jpg","/2048-CUPCAKES/style/img/4096.jpg":"_assets/b60c2939f298141475a6.jpg","/style/img/4096.jpg":"_assets/b60c2939f298141475a6.jpg","/img/4096.jpg":"_assets/b60c2939f298141475a6.jpg","/4096.jpg":"_assets/b60c2939f298141475a6.jpg"};
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
