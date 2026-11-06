(() => {
  "use strict";
  const RUNTIME_MAP = {"https://tduval.github.io/ClickJS/assets/css/bootstrap.min.css":"_assets/80a14abaec942605c9ee.css","/ClickJS/assets/css/bootstrap.min.css":"_assets/80a14abaec942605c9ee.css","/assets/css/bootstrap.min.css":"_assets/80a14abaec942605c9ee.css","/css/bootstrap.min.css":"_assets/80a14abaec942605c9ee.css","/bootstrap.min.css":"_assets/80a14abaec942605c9ee.css","https://tduval.github.io/ClickJS/assets/css/mdb.min.css":"_assets/202ff191fe9735278461.css","/ClickJS/assets/css/mdb.min.css":"_assets/202ff191fe9735278461.css","/assets/css/mdb.min.css":"_assets/202ff191fe9735278461.css","/css/mdb.min.css":"_assets/202ff191fe9735278461.css","/mdb.min.css":"_assets/202ff191fe9735278461.css","https://tduval.github.io/ClickJS/assets/css/fontawesome-all.min.css":"_assets/43730866612149a27f49.css","/ClickJS/assets/css/fontawesome-all.min.css":"_assets/43730866612149a27f49.css","/assets/css/fontawesome-all.min.css":"_assets/43730866612149a27f49.css","/css/fontawesome-all.min.css":"_assets/43730866612149a27f49.css","/fontawesome-all.min.css":"_assets/43730866612149a27f49.css","https://tduval.github.io/ClickJS/assets/css/style.css":"_assets/a18e279342d3bd2b8dbd.css","/ClickJS/assets/css/style.css":"_assets/a18e279342d3bd2b8dbd.css","/assets/css/style.css":"_assets/a18e279342d3bd2b8dbd.css","/css/style.css":"_assets/a18e279342d3bd2b8dbd.css","/style.css":"_assets/a18e279342d3bd2b8dbd.css","https://tduval.github.io/ClickJS/assets/js/bootstrap.min.js":"_assets/0bca10549df770ab6790.js","/ClickJS/assets/js/bootstrap.min.js":"_assets/0bca10549df770ab6790.js","/assets/js/bootstrap.min.js":"_assets/0bca10549df770ab6790.js","/js/bootstrap.min.js":"_assets/0bca10549df770ab6790.js","/bootstrap.min.js":"_assets/0bca10549df770ab6790.js","https://tduval.github.io/ClickJS/assets/js/popper.min.js":"_assets/625b022a42ed5d9c3991.js","/ClickJS/assets/js/popper.min.js":"_assets/625b022a42ed5d9c3991.js","/assets/js/popper.min.js":"_assets/625b022a42ed5d9c3991.js","/js/popper.min.js":"_assets/625b022a42ed5d9c3991.js","/popper.min.js":"_assets/625b022a42ed5d9c3991.js","https://tduval.github.io/ClickJS/assets/js/jquery-3.3.1.min.js":"_assets/160a426ff2894252cd7c.js","/ClickJS/assets/js/jquery-3.3.1.min.js":"_assets/160a426ff2894252cd7c.js","/assets/js/jquery-3.3.1.min.js":"_assets/160a426ff2894252cd7c.js","/js/jquery-3.3.1.min.js":"_assets/160a426ff2894252cd7c.js","/jquery-3.3.1.min.js":"_assets/160a426ff2894252cd7c.js","https://tduval.github.io/ClickJS/clickJS.js":"_assets/483964c6db9399f2d449.js","/ClickJS/clickJS.js":"_assets/483964c6db9399f2d449.js","/clickJS.js":"_assets/483964c6db9399f2d449.js","https://tduval.github.io/ClickJS/assets/js/vuex.js":"_assets/9770ab10ca4b365d1abe.js","/ClickJS/assets/js/vuex.js":"_assets/9770ab10ca4b365d1abe.js","/assets/js/vuex.js":"_assets/9770ab10ca4b365d1abe.js","/js/vuex.js":"_assets/9770ab10ca4b365d1abe.js","/vuex.js":"_assets/9770ab10ca4b365d1abe.js","https://tduval.github.io/ClickJS/assets/js/mdb.min.js":"_assets/e6034d045bddd22aa460.js","/ClickJS/assets/js/mdb.min.js":"_assets/e6034d045bddd22aa460.js","/assets/js/mdb.min.js":"_assets/e6034d045bddd22aa460.js","/js/mdb.min.js":"_assets/e6034d045bddd22aa460.js","/mdb.min.js":"_assets/e6034d045bddd22aa460.js","https://tduval.github.io/ClickJS/assets/js/vue.js":"_assets/08c313ae3e601b03805c.js","/ClickJS/assets/js/vue.js":"_assets/08c313ae3e601b03805c.js","/assets/js/vue.js":"_assets/08c313ae3e601b03805c.js","/js/vue.js":"_assets/08c313ae3e601b03805c.js","/vue.js":"_assets/08c313ae3e601b03805c.js","https://tduval.github.io/ClickJS/assets/images/planet_map.jpg":"_assets/b4985ec1daa3e04470be.jpg","/ClickJS/assets/images/planet_map.jpg":"_assets/b4985ec1daa3e04470be.jpg","/assets/images/planet_map.jpg":"_assets/b4985ec1daa3e04470be.jpg","/images/planet_map.jpg":"_assets/b4985ec1daa3e04470be.jpg","/planet_map.jpg":"_assets/b4985ec1daa3e04470be.jpg","https://tduval.github.io/ClickJS/assets/font/roboto/Roboto-Light.woff2":"_assets/94a0ac8d73bb60a9cbe2.woff2","/ClickJS/assets/font/roboto/Roboto-Light.woff2":"_assets/94a0ac8d73bb60a9cbe2.woff2","/assets/font/roboto/Roboto-Light.woff2":"_assets/94a0ac8d73bb60a9cbe2.woff2","/font/roboto/Roboto-Light.woff2":"_assets/94a0ac8d73bb60a9cbe2.woff2","/roboto/Roboto-Light.woff2":"_assets/94a0ac8d73bb60a9cbe2.woff2","/Roboto-Light.woff2":"_assets/94a0ac8d73bb60a9cbe2.woff2","https://tduval.github.io/ClickJS/assets/font/roboto/Roboto-Medium.woff2":"_assets/1cd5c4b37938d932110e.woff2","/ClickJS/assets/font/roboto/Roboto-Medium.woff2":"_assets/1cd5c4b37938d932110e.woff2","/assets/font/roboto/Roboto-Medium.woff2":"_assets/1cd5c4b37938d932110e.woff2","/font/roboto/Roboto-Medium.woff2":"_assets/1cd5c4b37938d932110e.woff2","/roboto/Roboto-Medium.woff2":"_assets/1cd5c4b37938d932110e.woff2","/Roboto-Medium.woff2":"_assets/1cd5c4b37938d932110e.woff2","https://tduval.github.io/ClickJS/assets/webfonts/fa-solid-900.woff2":"_assets/cbbca7d9888b4a9eab7d.woff2","/ClickJS/assets/webfonts/fa-solid-900.woff2":"_assets/cbbca7d9888b4a9eab7d.woff2","/assets/webfonts/fa-solid-900.woff2":"_assets/cbbca7d9888b4a9eab7d.woff2","/webfonts/fa-solid-900.woff2":"_assets/cbbca7d9888b4a9eab7d.woff2","/fa-solid-900.woff2":"_assets/cbbca7d9888b4a9eab7d.woff2","https://tduval.github.io/ClickJS/assets/font/roboto/Roboto-Regular.woff2":"_assets/b5c9c23bd12593523a46.woff2","/ClickJS/assets/font/roboto/Roboto-Regular.woff2":"_assets/b5c9c23bd12593523a46.woff2","/assets/font/roboto/Roboto-Regular.woff2":"_assets/b5c9c23bd12593523a46.woff2","/font/roboto/Roboto-Regular.woff2":"_assets/b5c9c23bd12593523a46.woff2","/roboto/Roboto-Regular.woff2":"_assets/b5c9c23bd12593523a46.woff2","/Roboto-Regular.woff2":"_assets/b5c9c23bd12593523a46.woff2"};
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
