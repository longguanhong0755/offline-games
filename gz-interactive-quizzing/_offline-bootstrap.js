(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Interactive_Quizzing/style.css":"_assets/48feea69fa1dc65f9097.css","/GameZone/Games/Interactive_Quizzing/style.css":"_assets/48feea69fa1dc65f9097.css","/Games/Interactive_Quizzing/style.css":"_assets/48feea69fa1dc65f9097.css","/Interactive_Quizzing/style.css":"_assets/48feea69fa1dc65f9097.css","/style.css":"_assets/48feea69fa1dc65f9097.css","https://kunjgit.github.io/GameZone/Games/Interactive_Quizzing/images/happy.png":"_assets/4d6f137646d5fb6c034d.png","/GameZone/Games/Interactive_Quizzing/images/happy.png":"_assets/4d6f137646d5fb6c034d.png","/Games/Interactive_Quizzing/images/happy.png":"_assets/4d6f137646d5fb6c034d.png","/Interactive_Quizzing/images/happy.png":"_assets/4d6f137646d5fb6c034d.png","/images/happy.png":"_assets/4d6f137646d5fb6c034d.png","/happy.png":"_assets/4d6f137646d5fb6c034d.png","https://kunjgit.github.io/GameZone/Games/Interactive_Quizzing/script.js":"_assets/3556ef9b4142d01e516e.js","/GameZone/Games/Interactive_Quizzing/script.js":"_assets/3556ef9b4142d01e516e.js","/Games/Interactive_Quizzing/script.js":"_assets/3556ef9b4142d01e516e.js","/Interactive_Quizzing/script.js":"_assets/3556ef9b4142d01e516e.js","/script.js":"_assets/3556ef9b4142d01e516e.js","https://fonts.googleapis.com/css?family=Cabin":"_assets/8566af0f004baa621890.css","/css":"_assets/50ea937b7a6c46b468f0.css","/css?family=Cabin":"_assets/8566af0f004baa621890.css","https://fonts.googleapis.com/css":"_assets/50ea937b7a6c46b468f0.css","https://fonts.googleapis.com/css?family=Cormorant+Garamond|Inconsolata":"_assets/c2abff7fc51f18349a97.css","/css?family=Cormorant+Garamond|Inconsolata":"_assets/c2abff7fc51f18349a97.css","https://fonts.googleapis.com/css?family=Crimson+Text|Raleway":"_assets/4467f5b1c6e919950d3c.css","/css?family=Crimson+Text|Raleway":"_assets/4467f5b1c6e919950d3c.css","https://fonts.googleapis.com/css?family=Josefin+Sans":"_assets/50ea937b7a6c46b468f0.css","/css?family=Josefin+Sans":"_assets/50ea937b7a6c46b468f0.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://fonts.gstatic.com/s/josefinsans/v34/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMZhLw.woff2":"_assets/242e98782313218a60ac.woff2","/s/josefinsans/v34/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMZhLw.woff2":"_assets/242e98782313218a60ac.woff2","/josefinsans/v34/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMZhLw.woff2":"_assets/242e98782313218a60ac.woff2","/v34/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMZhLw.woff2":"_assets/242e98782313218a60ac.woff2","/Qw3PZQNVED7rKGKxtqIqX5E-AVSJrOCfjY46_DjQbMZhLw.woff2":"_assets/242e98782313218a60ac.woff2","https://fonts.gstatic.com/s/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2":"_assets/2318962e7930f55b4590.woff2","/s/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2":"_assets/2318962e7930f55b4590.woff2","/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2":"_assets/2318962e7930f55b4590.woff2","/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2":"_assets/2318962e7930f55b4590.woff2","/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2":"_assets/2318962e7930f55b4590.woff2","https://fonts.gstatic.com/s/cabin/v35/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkV2EH7alxw.woff2":"_assets/77f442b8d11d3f4fad14.woff2","/s/cabin/v35/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkV2EH7alxw.woff2":"_assets/77f442b8d11d3f4fad14.woff2","/cabin/v35/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkV2EH7alxw.woff2":"_assets/77f442b8d11d3f4fad14.woff2","/v35/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkV2EH7alxw.woff2":"_assets/77f442b8d11d3f4fad14.woff2","/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkV2EH7alxw.woff2":"_assets/77f442b8d11d3f4fad14.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://kunjgit.github.io/GameZone/Games/Interactive_Quizzing/images/landing-bg.jpg":"_assets/a35df60b1c5f743449c9.jpg","/GameZone/Games/Interactive_Quizzing/images/landing-bg.jpg":"_assets/a35df60b1c5f743449c9.jpg","/Games/Interactive_Quizzing/images/landing-bg.jpg":"_assets/a35df60b1c5f743449c9.jpg","/Interactive_Quizzing/images/landing-bg.jpg":"_assets/a35df60b1c5f743449c9.jpg","/images/landing-bg.jpg":"_assets/a35df60b1c5f743449c9.jpg","/landing-bg.jpg":"_assets/a35df60b1c5f743449c9.jpg"};
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
