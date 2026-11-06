(() => {
  "use strict";
  const RUNTIME_MAP = {"https://wijsman.de/oceanpop/screenshot.jpg?raw=true":"_assets/f8fd957283aee7468702.jpg","/oceanpop/screenshot.jpg":"_assets/f8fd957283aee7468702.jpg","/oceanpop/screenshot.jpg?raw=true":"_assets/f8fd957283aee7468702.jpg","/screenshot.jpg":"_assets/f8fd957283aee7468702.jpg","https://wijsman.de/oceanpop/screenshot.jpg":"_assets/f8fd957283aee7468702.jpg","https://wijsman.de/oceanpop/assets/css/print.css":"_assets/b9ca43fb07381a5dafd3.css","/oceanpop/assets/css/print.css":"_assets/b9ca43fb07381a5dafd3.css","/assets/css/print.css":"_assets/b9ca43fb07381a5dafd3.css","/css/print.css":"_assets/b9ca43fb07381a5dafd3.css","/print.css":"_assets/b9ca43fb07381a5dafd3.css","https://wijsman.de/oceanpop/assets/css/style.css?v=ca2f0c6286f9a9a1861c4209b3c11d540cd60196":"_assets/d0e5fcb072985b649bca.css","/oceanpop/assets/css/style.css":"_assets/d0e5fcb072985b649bca.css","/oceanpop/assets/css/style.css?v=ca2f0c6286f9a9a1861c4209b3c11d540cd60196":"_assets/d0e5fcb072985b649bca.css","/assets/css/style.css":"_assets/d0e5fcb072985b649bca.css","/css/style.css":"_assets/d0e5fcb072985b649bca.css","/style.css":"_assets/d0e5fcb072985b649bca.css","https://wijsman.de/oceanpop/assets/css/style.css":"_assets/d0e5fcb072985b649bca.css","https://fonts.googleapis.com/css?family=Chivo:900":"_assets/dce9f5d4bb33f0b65c0d.css","/css":"_assets/dce9f5d4bb33f0b65c0d.css","/css?family=Chivo:900":"_assets/dce9f5d4bb33f0b65c0d.css","https://fonts.googleapis.com/css":"_assets/dce9f5d4bb33f0b65c0d.css","https://wijsman.de/oceanpop/assets/images/shells128.png?raw=true":"_assets/5d046f953c586216de9c.png","/oceanpop/assets/images/shells128.png":"_assets/5d046f953c586216de9c.png","/oceanpop/assets/images/shells128.png?raw=true":"_assets/5d046f953c586216de9c.png","/assets/images/shells128.png":"_assets/5d046f953c586216de9c.png","/images/shells128.png":"_assets/5d046f953c586216de9c.png","/shells128.png":"_assets/5d046f953c586216de9c.png","https://wijsman.de/oceanpop/assets/images/shells128.png":"_assets/5d046f953c586216de9c.png","https://wijsman.de/oceanpop/assets/images/octocat-icon.png":"_assets/b2184e5099b9d9816682.png","/oceanpop/assets/images/octocat-icon.png":"_assets/b2184e5099b9d9816682.png","/assets/images/octocat-icon.png":"_assets/b2184e5099b9d9816682.png","/images/octocat-icon.png":"_assets/b2184e5099b9d9816682.png","/octocat-icon.png":"_assets/b2184e5099b9d9816682.png","https://wijsman.de/oceanpop/assets/images/body-bg.png":"_assets/9ee3cbcb266baa1e8286.png","/oceanpop/assets/images/body-bg.png":"_assets/9ee3cbcb266baa1e8286.png","/assets/images/body-bg.png":"_assets/9ee3cbcb266baa1e8286.png","/images/body-bg.png":"_assets/9ee3cbcb266baa1e8286.png","/body-bg.png":"_assets/9ee3cbcb266baa1e8286.png","https://wijsman.de/oceanpop/assets/images/highlight-bg.jpg":"_assets/6906d143f7338275143c.jpg","/oceanpop/assets/images/highlight-bg.jpg":"_assets/6906d143f7338275143c.jpg","/assets/images/highlight-bg.jpg":"_assets/6906d143f7338275143c.jpg","/images/highlight-bg.jpg":"_assets/6906d143f7338275143c.jpg","/highlight-bg.jpg":"_assets/6906d143f7338275143c.jpg","https://wijsman.de/oceanpop/assets/images/hr.png":"_assets/52ba19186009c738da24.png","/oceanpop/assets/images/hr.png":"_assets/52ba19186009c738da24.png","/assets/images/hr.png":"_assets/52ba19186009c738da24.png","/images/hr.png":"_assets/52ba19186009c738da24.png","/hr.png":"_assets/52ba19186009c738da24.png","https://fonts.gstatic.com/s/chivo/v21/va9b4kzIxd1KFppkaRKvDRPJVDf_FRjekGrT.woff2":"_assets/d648bc146847c08e581c.woff2","/s/chivo/v21/va9b4kzIxd1KFppkaRKvDRPJVDf_FRjekGrT.woff2":"_assets/d648bc146847c08e581c.woff2","/chivo/v21/va9b4kzIxd1KFppkaRKvDRPJVDf_FRjekGrT.woff2":"_assets/d648bc146847c08e581c.woff2","/v21/va9b4kzIxd1KFppkaRKvDRPJVDf_FRjekGrT.woff2":"_assets/d648bc146847c08e581c.woff2","/va9b4kzIxd1KFppkaRKvDRPJVDf_FRjekGrT.woff2":"_assets/d648bc146847c08e581c.woff2"};
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
