(() => {
  "use strict";
  const RUNTIME_MAP = {"https://mazebert.com/assets/css/mazebert.css?t=1690908854":"_assets/0276c7123049df28b683.css","/assets/css/mazebert.css":"_assets/0276c7123049df28b683.css","/assets/css/mazebert.css?t=1690908854":"_assets/0276c7123049df28b683.css","/css/mazebert.css":"_assets/0276c7123049df28b683.css","/mazebert.css":"_assets/0276c7123049df28b683.css","https://mazebert.com/assets/css/mazebert.css":"_assets/0276c7123049df28b683.css","https://mazebert.com/assets/js/jquery.min.js?t=1690908854":"_assets/0497a8d2a9bde7db8c04.js","/assets/js/jquery.min.js":"_assets/0497a8d2a9bde7db8c04.js","/assets/js/jquery.min.js?t=1690908854":"_assets/0497a8d2a9bde7db8c04.js","/js/jquery.min.js":"_assets/0497a8d2a9bde7db8c04.js","/jquery.min.js":"_assets/0497a8d2a9bde7db8c04.js","https://mazebert.com/assets/js/jquery.min.js":"_assets/0497a8d2a9bde7db8c04.js","https://mazebert.com/assets/images/app-icon.png?t=1690908854":"_assets/91138140a8e94b58f563.png","/assets/images/app-icon.png":"_assets/91138140a8e94b58f563.png","/assets/images/app-icon.png?t=1690908854":"_assets/91138140a8e94b58f563.png","/images/app-icon.png":"_assets/91138140a8e94b58f563.png","/app-icon.png":"_assets/91138140a8e94b58f563.png","https://mazebert.com/assets/images/app-icon.png":"_assets/91138140a8e94b58f563.png","https://mazebert.com/assets/images/navbar.jpg":"_assets/e014662b56f67dd2d975.jpg","/assets/images/navbar.jpg":"_assets/e014662b56f67dd2d975.jpg","/images/navbar.jpg":"_assets/e014662b56f67dd2d975.jpg","/navbar.jpg":"_assets/e014662b56f67dd2d975.jpg","https://mazebert.com/assets/fonts/headline.woff":"_assets/28c9387e584ea5108f69.woff","/assets/fonts/headline.woff":"_assets/28c9387e584ea5108f69.woff","/fonts/headline.woff":"_assets/28c9387e584ea5108f69.woff","/headline.woff":"_assets/28c9387e584ea5108f69.woff","https://mazebert.com/assets/images/features/1.jpeg?t=1690908854":"_assets/4517197664827672c9e4.jpg","/assets/images/features/1.jpeg":"_assets/4517197664827672c9e4.jpg","/assets/images/features/1.jpeg?t=1690908854":"_assets/4517197664827672c9e4.jpg","/images/features/1.jpeg":"_assets/4517197664827672c9e4.jpg","/features/1.jpeg":"_assets/4517197664827672c9e4.jpg","/1.jpeg":"_assets/4517197664827672c9e4.jpg","https://mazebert.com/assets/images/features/1.jpeg":"_assets/4517197664827672c9e4.jpg","https://mazebert.com/assets/images/teaser-preview.jpg?t=1690908854":"_assets/6d128dc4f410f8168213.jpg","/assets/images/teaser-preview.jpg":"_assets/6d128dc4f410f8168213.jpg","/assets/images/teaser-preview.jpg?t=1690908854":"_assets/6d128dc4f410f8168213.jpg","/images/teaser-preview.jpg":"_assets/6d128dc4f410f8168213.jpg","/teaser-preview.jpg":"_assets/6d128dc4f410f8168213.jpg","https://mazebert.com/assets/images/teaser-preview.jpg":"_assets/6d128dc4f410f8168213.jpg","https://mazebert.com/assets/images/features/5.jpeg?t=1690908854":"_assets/7547fc5c0c2354545330.jpg","/assets/images/features/5.jpeg":"_assets/7547fc5c0c2354545330.jpg","/assets/images/features/5.jpeg?t=1690908854":"_assets/7547fc5c0c2354545330.jpg","/images/features/5.jpeg":"_assets/7547fc5c0c2354545330.jpg","/features/5.jpeg":"_assets/7547fc5c0c2354545330.jpg","/5.jpeg":"_assets/7547fc5c0c2354545330.jpg","https://mazebert.com/assets/images/features/5.jpeg":"_assets/7547fc5c0c2354545330.jpg","https://mazebert.com/assets/images/features/2.jpeg?t=1690908854":"_assets/6b619e97333a4d8022b5.jpg","/assets/images/features/2.jpeg":"_assets/6b619e97333a4d8022b5.jpg","/assets/images/features/2.jpeg?t=1690908854":"_assets/6b619e97333a4d8022b5.jpg","/images/features/2.jpeg":"_assets/6b619e97333a4d8022b5.jpg","/features/2.jpeg":"_assets/6b619e97333a4d8022b5.jpg","/2.jpeg":"_assets/6b619e97333a4d8022b5.jpg","https://mazebert.com/assets/images/features/2.jpeg":"_assets/6b619e97333a4d8022b5.jpg","https://mazebert.com/assets/images/features/3.jpeg?t=1690908854":"_assets/b46c2ddb91a634abd8bf.jpg","/assets/images/features/3.jpeg":"_assets/b46c2ddb91a634abd8bf.jpg","/assets/images/features/3.jpeg?t=1690908854":"_assets/b46c2ddb91a634abd8bf.jpg","/images/features/3.jpeg":"_assets/b46c2ddb91a634abd8bf.jpg","/features/3.jpeg":"_assets/b46c2ddb91a634abd8bf.jpg","/3.jpeg":"_assets/b46c2ddb91a634abd8bf.jpg","https://mazebert.com/assets/images/features/3.jpeg":"_assets/b46c2ddb91a634abd8bf.jpg","https://mazebert.com/assets/images/features/6.jpeg?t=1690908854":"_assets/7e8e8432f7e69f6bf1d2.jpg","/assets/images/features/6.jpeg":"_assets/7e8e8432f7e69f6bf1d2.jpg","/assets/images/features/6.jpeg?t=1690908854":"_assets/7e8e8432f7e69f6bf1d2.jpg","/images/features/6.jpeg":"_assets/7e8e8432f7e69f6bf1d2.jpg","/features/6.jpeg":"_assets/7e8e8432f7e69f6bf1d2.jpg","/6.jpeg":"_assets/7e8e8432f7e69f6bf1d2.jpg","https://mazebert.com/assets/images/features/6.jpeg":"_assets/7e8e8432f7e69f6bf1d2.jpg","https://mazebert.com/assets/images/features/4.jpeg?t=1690908854":"_assets/4ad564d5f7707cd39bbc.jpg","/assets/images/features/4.jpeg":"_assets/4ad564d5f7707cd39bbc.jpg","/assets/images/features/4.jpeg?t=1690908854":"_assets/4ad564d5f7707cd39bbc.jpg","/images/features/4.jpeg":"_assets/4ad564d5f7707cd39bbc.jpg","/features/4.jpeg":"_assets/4ad564d5f7707cd39bbc.jpg","/4.jpeg":"_assets/4ad564d5f7707cd39bbc.jpg","https://mazebert.com/assets/images/features/4.jpeg":"_assets/4ad564d5f7707cd39bbc.jpg"};
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
