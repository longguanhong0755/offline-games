(() => {
  "use strict";
  const RUNTIME_MAP = {"https://caviardeul.fr/_next/static/chunks/06tu2snb_sxyk.css":"_assets/85a08b600c19245a31cb.css","/_next/static/chunks/06tu2snb_sxyk.css":"_assets/85a08b600c19245a31cb.css","/static/chunks/06tu2snb_sxyk.css":"_assets/85a08b600c19245a31cb.css","/chunks/06tu2snb_sxyk.css":"_assets/85a08b600c19245a31cb.css","/06tu2snb_sxyk.css":"_assets/85a08b600c19245a31cb.css","https://caviardeul.fr/_next/static/chunks/0i7_7cawgdn68.js":"_assets/070d5cde85c2ec21f3e4.js","/_next/static/chunks/0i7_7cawgdn68.js":"_assets/070d5cde85c2ec21f3e4.js","/static/chunks/0i7_7cawgdn68.js":"_assets/070d5cde85c2ec21f3e4.js","/chunks/0i7_7cawgdn68.js":"_assets/070d5cde85c2ec21f3e4.js","/0i7_7cawgdn68.js":"_assets/070d5cde85c2ec21f3e4.js","https://caviardeul.fr/_next/static/chunks/0x29bm9bz2_46.js":"_assets/2fbb60e336826f867777.js","/_next/static/chunks/0x29bm9bz2_46.js":"_assets/2fbb60e336826f867777.js","/static/chunks/0x29bm9bz2_46.js":"_assets/2fbb60e336826f867777.js","/chunks/0x29bm9bz2_46.js":"_assets/2fbb60e336826f867777.js","/0x29bm9bz2_46.js":"_assets/2fbb60e336826f867777.js","https://caviardeul.fr/_next/static/chunks/169_w7q4_h_qf.js":"_assets/63849e6954fc4d97528b.js","/_next/static/chunks/169_w7q4_h_qf.js":"_assets/63849e6954fc4d97528b.js","/static/chunks/169_w7q4_h_qf.js":"_assets/63849e6954fc4d97528b.js","/chunks/169_w7q4_h_qf.js":"_assets/63849e6954fc4d97528b.js","/169_w7q4_h_qf.js":"_assets/63849e6954fc4d97528b.js","https://caviardeul.fr/_next/static/chunks/19h1939wgvxc3.js":"_assets/0cbfb66fbecb0e2903e0.js","/_next/static/chunks/19h1939wgvxc3.js":"_assets/0cbfb66fbecb0e2903e0.js","/static/chunks/19h1939wgvxc3.js":"_assets/0cbfb66fbecb0e2903e0.js","/chunks/19h1939wgvxc3.js":"_assets/0cbfb66fbecb0e2903e0.js","/19h1939wgvxc3.js":"_assets/0cbfb66fbecb0e2903e0.js","https://caviardeul.fr/_next/static/chunks/33wxfchvh-hf_.js":"_assets/033f6807a63f482b4657.js","/_next/static/chunks/33wxfchvh-hf_.js":"_assets/033f6807a63f482b4657.js","/static/chunks/33wxfchvh-hf_.js":"_assets/033f6807a63f482b4657.js","/chunks/33wxfchvh-hf_.js":"_assets/033f6807a63f482b4657.js","/33wxfchvh-hf_.js":"_assets/033f6807a63f482b4657.js","https://caviardeul.fr/_next/static/chunks/0hfzum_zj26eg.js":"_assets/22c9bf52f9b4987764e4.js","/_next/static/chunks/0hfzum_zj26eg.js":"_assets/22c9bf52f9b4987764e4.js","/static/chunks/0hfzum_zj26eg.js":"_assets/22c9bf52f9b4987764e4.js","/chunks/0hfzum_zj26eg.js":"_assets/22c9bf52f9b4987764e4.js","/0hfzum_zj26eg.js":"_assets/22c9bf52f9b4987764e4.js","https://caviardeul.fr/_next/static/chunks/182k7usxlxotp.js":"_assets/f80b02339e24c22d6934.js","/_next/static/chunks/182k7usxlxotp.js":"_assets/f80b02339e24c22d6934.js","/static/chunks/182k7usxlxotp.js":"_assets/f80b02339e24c22d6934.js","/chunks/182k7usxlxotp.js":"_assets/f80b02339e24c22d6934.js","/182k7usxlxotp.js":"_assets/f80b02339e24c22d6934.js","https://caviardeul.fr/_next/static/chunks/turbopack-2c3mg3r-05n1w.js":"_assets/b5f9b5199b99ab6c141f.js","/_next/static/chunks/turbopack-2c3mg3r-05n1w.js":"_assets/b5f9b5199b99ab6c141f.js","/static/chunks/turbopack-2c3mg3r-05n1w.js":"_assets/b5f9b5199b99ab6c141f.js","/chunks/turbopack-2c3mg3r-05n1w.js":"_assets/b5f9b5199b99ab6c141f.js","/turbopack-2c3mg3r-05n1w.js":"_assets/b5f9b5199b99ab6c141f.js","https://caviardeul.fr/_next/static/chunks/3ku5horadcie1.js":"_assets/8e5763db9f87aafd8675.js","/_next/static/chunks/3ku5horadcie1.js":"_assets/8e5763db9f87aafd8675.js","/static/chunks/3ku5horadcie1.js":"_assets/8e5763db9f87aafd8675.js","/chunks/3ku5horadcie1.js":"_assets/8e5763db9f87aafd8675.js","/3ku5horadcie1.js":"_assets/8e5763db9f87aafd8675.js","https://caviardeul.fr/_next/static/b9dZefGLOn0JjLbpjjvYQ/_ssgManifest.js":"_assets/678f6ce2cb80b1fe72fc.js","/_next/static/b9dZefGLOn0JjLbpjjvYQ/_ssgManifest.js":"_assets/678f6ce2cb80b1fe72fc.js","/static/b9dZefGLOn0JjLbpjjvYQ/_ssgManifest.js":"_assets/678f6ce2cb80b1fe72fc.js","/b9dZefGLOn0JjLbpjjvYQ/_ssgManifest.js":"_assets/678f6ce2cb80b1fe72fc.js","/_ssgManifest.js":"_assets/678f6ce2cb80b1fe72fc.js","https://caviardeul.fr/_next/static/b9dZefGLOn0JjLbpjjvYQ/_buildManifest.js":"_assets/bbec2d21df3e152cd389.js","/_next/static/b9dZefGLOn0JjLbpjjvYQ/_buildManifest.js":"_assets/bbec2d21df3e152cd389.js","/static/b9dZefGLOn0JjLbpjjvYQ/_buildManifest.js":"_assets/bbec2d21df3e152cd389.js","/b9dZefGLOn0JjLbpjjvYQ/_buildManifest.js":"_assets/bbec2d21df3e152cd389.js","/_buildManifest.js":"_assets/bbec2d21df3e152cd389.js","https://caviardeul.fr/_next/static/chunks/42d2v6m__0--i.js":"_assets/b0f198eb8dcaa363be1f.js","/_next/static/chunks/42d2v6m__0--i.js":"_assets/b0f198eb8dcaa363be1f.js","/static/chunks/42d2v6m__0--i.js":"_assets/b0f198eb8dcaa363be1f.js","/chunks/42d2v6m__0--i.js":"_assets/b0f198eb8dcaa363be1f.js","/42d2v6m__0--i.js":"_assets/b0f198eb8dcaa363be1f.js","https://caviardeul.fr/_next/static/b9dZefGLOn0JjLbpjjvYQ/_clientMiddlewareManifest.js":"_assets/cc1424c75ecd89bd4c15.js","/_next/static/b9dZefGLOn0JjLbpjjvYQ/_clientMiddlewareManifest.js":"_assets/cc1424c75ecd89bd4c15.js","/static/b9dZefGLOn0JjLbpjjvYQ/_clientMiddlewareManifest.js":"_assets/cc1424c75ecd89bd4c15.js","/b9dZefGLOn0JjLbpjjvYQ/_clientMiddlewareManifest.js":"_assets/cc1424c75ecd89bd4c15.js","/_clientMiddlewareManifest.js":"_assets/cc1424c75ecd89bd4c15.js","https://caviardeul.fr/_next/static/chunks/0d5dszl78f_1u.js":"_assets/bf81b38330f5eb51eb3c.js","/_next/static/chunks/0d5dszl78f_1u.js":"_assets/bf81b38330f5eb51eb3c.js","/static/chunks/0d5dszl78f_1u.js":"_assets/bf81b38330f5eb51eb3c.js","/chunks/0d5dszl78f_1u.js":"_assets/bf81b38330f5eb51eb3c.js","/0d5dszl78f_1u.js":"_assets/bf81b38330f5eb51eb3c.js"};
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
