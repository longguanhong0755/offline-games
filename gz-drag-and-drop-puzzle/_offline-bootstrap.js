(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/puzzle.css":"_assets/cb76efc588a97aa7cfc3.css","/GameZone/Games/Drag_And_Drop_Puzzle/puzzle.css":"_assets/cb76efc588a97aa7cfc3.css","/Games/Drag_And_Drop_Puzzle/puzzle.css":"_assets/cb76efc588a97aa7cfc3.css","/Drag_And_Drop_Puzzle/puzzle.css":"_assets/cb76efc588a97aa7cfc3.css","/puzzle.css":"_assets/cb76efc588a97aa7cfc3.css","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/puzzle.js":"_assets/076b82b76f8cadc48070.js","/GameZone/Games/Drag_And_Drop_Puzzle/puzzle.js":"_assets/076b82b76f8cadc48070.js","/Games/Drag_And_Drop_Puzzle/puzzle.js":"_assets/076b82b76f8cadc48070.js","/Drag_And_Drop_Puzzle/puzzle.js":"_assets/076b82b76f8cadc48070.js","/puzzle.js":"_assets/076b82b76f8cadc48070.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/blank.jpg":"_assets/337b0477ddeef2608bfe.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/blank.jpg":"_assets/337b0477ddeef2608bfe.jpg","/Games/Drag_And_Drop_Puzzle/images/blank.jpg":"_assets/337b0477ddeef2608bfe.jpg","/Drag_And_Drop_Puzzle/images/blank.jpg":"_assets/337b0477ddeef2608bfe.jpg","/images/blank.jpg":"_assets/337b0477ddeef2608bfe.jpg","/blank.jpg":"_assets/337b0477ddeef2608bfe.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/25.jpg":"_assets/8bc5a38b8a0cef971dcc.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/25.jpg":"_assets/8bc5a38b8a0cef971dcc.jpg","/Games/Drag_And_Drop_Puzzle/images/25.jpg":"_assets/8bc5a38b8a0cef971dcc.jpg","/Drag_And_Drop_Puzzle/images/25.jpg":"_assets/8bc5a38b8a0cef971dcc.jpg","/images/25.jpg":"_assets/8bc5a38b8a0cef971dcc.jpg","/25.jpg":"_assets/8bc5a38b8a0cef971dcc.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/8.jpg":"_assets/1fdf115e3d156ad3e2a2.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/8.jpg":"_assets/1fdf115e3d156ad3e2a2.jpg","/Games/Drag_And_Drop_Puzzle/images/8.jpg":"_assets/1fdf115e3d156ad3e2a2.jpg","/Drag_And_Drop_Puzzle/images/8.jpg":"_assets/1fdf115e3d156ad3e2a2.jpg","/images/8.jpg":"_assets/1fdf115e3d156ad3e2a2.jpg","/8.jpg":"_assets/1fdf115e3d156ad3e2a2.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/14.jpg":"_assets/9a920d48fabc60a596bc.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/14.jpg":"_assets/9a920d48fabc60a596bc.jpg","/Games/Drag_And_Drop_Puzzle/images/14.jpg":"_assets/9a920d48fabc60a596bc.jpg","/Drag_And_Drop_Puzzle/images/14.jpg":"_assets/9a920d48fabc60a596bc.jpg","/images/14.jpg":"_assets/9a920d48fabc60a596bc.jpg","/14.jpg":"_assets/9a920d48fabc60a596bc.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/21.jpg":"_assets/04a9e5fae81e79aedc25.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/21.jpg":"_assets/04a9e5fae81e79aedc25.jpg","/Games/Drag_And_Drop_Puzzle/images/21.jpg":"_assets/04a9e5fae81e79aedc25.jpg","/Drag_And_Drop_Puzzle/images/21.jpg":"_assets/04a9e5fae81e79aedc25.jpg","/images/21.jpg":"_assets/04a9e5fae81e79aedc25.jpg","/21.jpg":"_assets/04a9e5fae81e79aedc25.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/13.jpg":"_assets/ba22a3c3855bbe19034b.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/13.jpg":"_assets/ba22a3c3855bbe19034b.jpg","/Games/Drag_And_Drop_Puzzle/images/13.jpg":"_assets/ba22a3c3855bbe19034b.jpg","/Drag_And_Drop_Puzzle/images/13.jpg":"_assets/ba22a3c3855bbe19034b.jpg","/images/13.jpg":"_assets/ba22a3c3855bbe19034b.jpg","/13.jpg":"_assets/ba22a3c3855bbe19034b.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/10.jpg":"_assets/bd42fd2d972a84d30cc6.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/10.jpg":"_assets/bd42fd2d972a84d30cc6.jpg","/Games/Drag_And_Drop_Puzzle/images/10.jpg":"_assets/bd42fd2d972a84d30cc6.jpg","/Drag_And_Drop_Puzzle/images/10.jpg":"_assets/bd42fd2d972a84d30cc6.jpg","/images/10.jpg":"_assets/bd42fd2d972a84d30cc6.jpg","/10.jpg":"_assets/bd42fd2d972a84d30cc6.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/4.jpg":"_assets/9cc175b2c4722c295dbd.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/4.jpg":"_assets/9cc175b2c4722c295dbd.jpg","/Games/Drag_And_Drop_Puzzle/images/4.jpg":"_assets/9cc175b2c4722c295dbd.jpg","/Drag_And_Drop_Puzzle/images/4.jpg":"_assets/9cc175b2c4722c295dbd.jpg","/images/4.jpg":"_assets/9cc175b2c4722c295dbd.jpg","/4.jpg":"_assets/9cc175b2c4722c295dbd.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/7.jpg":"_assets/35492a308144a0106ca2.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/7.jpg":"_assets/35492a308144a0106ca2.jpg","/Games/Drag_And_Drop_Puzzle/images/7.jpg":"_assets/35492a308144a0106ca2.jpg","/Drag_And_Drop_Puzzle/images/7.jpg":"_assets/35492a308144a0106ca2.jpg","/images/7.jpg":"_assets/35492a308144a0106ca2.jpg","/7.jpg":"_assets/35492a308144a0106ca2.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/17.jpg":"_assets/aba13c08d83fd7ec5a70.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/17.jpg":"_assets/aba13c08d83fd7ec5a70.jpg","/Games/Drag_And_Drop_Puzzle/images/17.jpg":"_assets/aba13c08d83fd7ec5a70.jpg","/Drag_And_Drop_Puzzle/images/17.jpg":"_assets/aba13c08d83fd7ec5a70.jpg","/images/17.jpg":"_assets/aba13c08d83fd7ec5a70.jpg","/17.jpg":"_assets/aba13c08d83fd7ec5a70.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/16.jpg":"_assets/8da54ac14873af4f087a.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/16.jpg":"_assets/8da54ac14873af4f087a.jpg","/Games/Drag_And_Drop_Puzzle/images/16.jpg":"_assets/8da54ac14873af4f087a.jpg","/Drag_And_Drop_Puzzle/images/16.jpg":"_assets/8da54ac14873af4f087a.jpg","/images/16.jpg":"_assets/8da54ac14873af4f087a.jpg","/16.jpg":"_assets/8da54ac14873af4f087a.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/15.jpg":"_assets/6487fc16fed1e7ebee21.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/15.jpg":"_assets/6487fc16fed1e7ebee21.jpg","/Games/Drag_And_Drop_Puzzle/images/15.jpg":"_assets/6487fc16fed1e7ebee21.jpg","/Drag_And_Drop_Puzzle/images/15.jpg":"_assets/6487fc16fed1e7ebee21.jpg","/images/15.jpg":"_assets/6487fc16fed1e7ebee21.jpg","/15.jpg":"_assets/6487fc16fed1e7ebee21.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/12.jpg":"_assets/e76e5b8a93339c534c98.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/12.jpg":"_assets/e76e5b8a93339c534c98.jpg","/Games/Drag_And_Drop_Puzzle/images/12.jpg":"_assets/e76e5b8a93339c534c98.jpg","/Drag_And_Drop_Puzzle/images/12.jpg":"_assets/e76e5b8a93339c534c98.jpg","/images/12.jpg":"_assets/e76e5b8a93339c534c98.jpg","/12.jpg":"_assets/e76e5b8a93339c534c98.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/18.jpg":"_assets/fb823e2ac5cc698c17f0.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/18.jpg":"_assets/fb823e2ac5cc698c17f0.jpg","/Games/Drag_And_Drop_Puzzle/images/18.jpg":"_assets/fb823e2ac5cc698c17f0.jpg","/Drag_And_Drop_Puzzle/images/18.jpg":"_assets/fb823e2ac5cc698c17f0.jpg","/images/18.jpg":"_assets/fb823e2ac5cc698c17f0.jpg","/18.jpg":"_assets/fb823e2ac5cc698c17f0.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/22.jpg":"_assets/b6db733c315639f4cd7a.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/22.jpg":"_assets/b6db733c315639f4cd7a.jpg","/Games/Drag_And_Drop_Puzzle/images/22.jpg":"_assets/b6db733c315639f4cd7a.jpg","/Drag_And_Drop_Puzzle/images/22.jpg":"_assets/b6db733c315639f4cd7a.jpg","/images/22.jpg":"_assets/b6db733c315639f4cd7a.jpg","/22.jpg":"_assets/b6db733c315639f4cd7a.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/1.jpg":"_assets/ffa3d04bffd6f591c800.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/1.jpg":"_assets/ffa3d04bffd6f591c800.jpg","/Games/Drag_And_Drop_Puzzle/images/1.jpg":"_assets/ffa3d04bffd6f591c800.jpg","/Drag_And_Drop_Puzzle/images/1.jpg":"_assets/ffa3d04bffd6f591c800.jpg","/images/1.jpg":"_assets/ffa3d04bffd6f591c800.jpg","/1.jpg":"_assets/ffa3d04bffd6f591c800.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/6.jpg":"_assets/1b1913a88cd81c62d4fa.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/6.jpg":"_assets/1b1913a88cd81c62d4fa.jpg","/Games/Drag_And_Drop_Puzzle/images/6.jpg":"_assets/1b1913a88cd81c62d4fa.jpg","/Drag_And_Drop_Puzzle/images/6.jpg":"_assets/1b1913a88cd81c62d4fa.jpg","/images/6.jpg":"_assets/1b1913a88cd81c62d4fa.jpg","/6.jpg":"_assets/1b1913a88cd81c62d4fa.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/2.jpg":"_assets/5141267931512b2f435b.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/2.jpg":"_assets/5141267931512b2f435b.jpg","/Games/Drag_And_Drop_Puzzle/images/2.jpg":"_assets/5141267931512b2f435b.jpg","/Drag_And_Drop_Puzzle/images/2.jpg":"_assets/5141267931512b2f435b.jpg","/images/2.jpg":"_assets/5141267931512b2f435b.jpg","/2.jpg":"_assets/5141267931512b2f435b.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/23.jpg":"_assets/34f34560cdaae73c97e5.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/23.jpg":"_assets/34f34560cdaae73c97e5.jpg","/Games/Drag_And_Drop_Puzzle/images/23.jpg":"_assets/34f34560cdaae73c97e5.jpg","/Drag_And_Drop_Puzzle/images/23.jpg":"_assets/34f34560cdaae73c97e5.jpg","/images/23.jpg":"_assets/34f34560cdaae73c97e5.jpg","/23.jpg":"_assets/34f34560cdaae73c97e5.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/11.jpg":"_assets/0e8f43102f6f86b91ab5.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/11.jpg":"_assets/0e8f43102f6f86b91ab5.jpg","/Games/Drag_And_Drop_Puzzle/images/11.jpg":"_assets/0e8f43102f6f86b91ab5.jpg","/Drag_And_Drop_Puzzle/images/11.jpg":"_assets/0e8f43102f6f86b91ab5.jpg","/images/11.jpg":"_assets/0e8f43102f6f86b91ab5.jpg","/11.jpg":"_assets/0e8f43102f6f86b91ab5.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/20.jpg":"_assets/923760b94303a1805b67.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/20.jpg":"_assets/923760b94303a1805b67.jpg","/Games/Drag_And_Drop_Puzzle/images/20.jpg":"_assets/923760b94303a1805b67.jpg","/Drag_And_Drop_Puzzle/images/20.jpg":"_assets/923760b94303a1805b67.jpg","/images/20.jpg":"_assets/923760b94303a1805b67.jpg","/20.jpg":"_assets/923760b94303a1805b67.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/24.jpg":"_assets/22462453da2e638c1043.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/24.jpg":"_assets/22462453da2e638c1043.jpg","/Games/Drag_And_Drop_Puzzle/images/24.jpg":"_assets/22462453da2e638c1043.jpg","/Drag_And_Drop_Puzzle/images/24.jpg":"_assets/22462453da2e638c1043.jpg","/images/24.jpg":"_assets/22462453da2e638c1043.jpg","/24.jpg":"_assets/22462453da2e638c1043.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/5.jpg":"_assets/7d752d02f7763b0927e4.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/5.jpg":"_assets/7d752d02f7763b0927e4.jpg","/Games/Drag_And_Drop_Puzzle/images/5.jpg":"_assets/7d752d02f7763b0927e4.jpg","/Drag_And_Drop_Puzzle/images/5.jpg":"_assets/7d752d02f7763b0927e4.jpg","/images/5.jpg":"_assets/7d752d02f7763b0927e4.jpg","/5.jpg":"_assets/7d752d02f7763b0927e4.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/19.jpg":"_assets/13b19cf4a5ff1fd3fbd5.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/19.jpg":"_assets/13b19cf4a5ff1fd3fbd5.jpg","/Games/Drag_And_Drop_Puzzle/images/19.jpg":"_assets/13b19cf4a5ff1fd3fbd5.jpg","/Drag_And_Drop_Puzzle/images/19.jpg":"_assets/13b19cf4a5ff1fd3fbd5.jpg","/images/19.jpg":"_assets/13b19cf4a5ff1fd3fbd5.jpg","/19.jpg":"_assets/13b19cf4a5ff1fd3fbd5.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/9.jpg":"_assets/f18e11f52817b59de2c8.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/9.jpg":"_assets/f18e11f52817b59de2c8.jpg","/Games/Drag_And_Drop_Puzzle/images/9.jpg":"_assets/f18e11f52817b59de2c8.jpg","/Drag_And_Drop_Puzzle/images/9.jpg":"_assets/f18e11f52817b59de2c8.jpg","/images/9.jpg":"_assets/f18e11f52817b59de2c8.jpg","/9.jpg":"_assets/f18e11f52817b59de2c8.jpg","https://kunjgit.github.io/GameZone/Games/Drag_And_Drop_Puzzle/images/3.jpg":"_assets/ba6fd6b51f2ae1e659d3.jpg","/GameZone/Games/Drag_And_Drop_Puzzle/images/3.jpg":"_assets/ba6fd6b51f2ae1e659d3.jpg","/Games/Drag_And_Drop_Puzzle/images/3.jpg":"_assets/ba6fd6b51f2ae1e659d3.jpg","/Drag_And_Drop_Puzzle/images/3.jpg":"_assets/ba6fd6b51f2ae1e659d3.jpg","/images/3.jpg":"_assets/ba6fd6b51f2ae1e659d3.jpg","/3.jpg":"_assets/ba6fd6b51f2ae1e659d3.jpg"};
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
