(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fonts.googleapis.com/css?family=Do+Hyeon":"_assets/376a823d6c61c77cc92b.css","/css":"_assets/376a823d6c61c77cc92b.css","/css?family=Do+Hyeon":"_assets/376a823d6c61c77cc92b.css","https://fonts.googleapis.com/css":"_assets/376a823d6c61c77cc92b.css","https://deathraygames.github.io/mortal/styles/mortal.css":"_assets/b3284be8f4d7742d131e.css","/mortal/styles/mortal.css":"_assets/b3284be8f4d7742d131e.css","/styles/mortal.css":"_assets/b3284be8f4d7742d131e.css","/mortal.css":"_assets/b3284be8f4d7742d131e.css","https://fonts.gstatic.com/s/dohyeon/v21/TwMN-I8CRRU2zM86HGEwbQc.woff2":"_assets/f45baf5d5da50d10aeda.woff2","/s/dohyeon/v21/TwMN-I8CRRU2zM86HGEwbQc.woff2":"_assets/f45baf5d5da50d10aeda.woff2","/dohyeon/v21/TwMN-I8CRRU2zM86HGEwbQc.woff2":"_assets/f45baf5d5da50d10aeda.woff2","/v21/TwMN-I8CRRU2zM86HGEwbQc.woff2":"_assets/f45baf5d5da50d10aeda.woff2","/TwMN-I8CRRU2zM86HGEwbQc.woff2":"_assets/f45baf5d5da50d10aeda.woff2","https://deathraygames.github.io/mortal/images/age-0.png":"_assets/3a16d5083ac10e9d36b1.png","/mortal/images/age-0.png":"_assets/3a16d5083ac10e9d36b1.png","/images/age-0.png":"_assets/3a16d5083ac10e9d36b1.png","/age-0.png":"_assets/3a16d5083ac10e9d36b1.png","https://deathraygames.github.io/mortal/images/age-3.png":"_assets/8d6183ac8b29332b0fbe.png","/mortal/images/age-3.png":"_assets/8d6183ac8b29332b0fbe.png","/images/age-3.png":"_assets/8d6183ac8b29332b0fbe.png","/age-3.png":"_assets/8d6183ac8b29332b0fbe.png","https://deathraygames.github.io/mortal/images/age-1.png":"_assets/e88f1cbd26a66b450f9e.png","/mortal/images/age-1.png":"_assets/e88f1cbd26a66b450f9e.png","/images/age-1.png":"_assets/e88f1cbd26a66b450f9e.png","/age-1.png":"_assets/e88f1cbd26a66b450f9e.png","https://deathraygames.github.io/mortal/scripts/mortal-game.js":"_assets/f9703487c543262304be.js","/mortal/scripts/mortal-game.js":"_assets/f9703487c543262304be.js","/scripts/mortal-game.js":"_assets/f9703487c543262304be.js","/mortal-game.js":"_assets/f9703487c543262304be.js","https://deathraygames.github.io/mortal/images/age-5.png":"_assets/ea6f492beae1b43c140c.png","/mortal/images/age-5.png":"_assets/ea6f492beae1b43c140c.png","/images/age-5.png":"_assets/ea6f492beae1b43c140c.png","/age-5.png":"_assets/ea6f492beae1b43c140c.png","https://deathraygames.github.io/mortal/images/age-4.png":"_assets/82976a935ee0ac569589.png","/mortal/images/age-4.png":"_assets/82976a935ee0ac569589.png","/images/age-4.png":"_assets/82976a935ee0ac569589.png","/age-4.png":"_assets/82976a935ee0ac569589.png","https://deathraygames.github.io/mortal/images/age-6.png":"_assets/27747b3d6c9d2a49df44.png","/mortal/images/age-6.png":"_assets/27747b3d6c9d2a49df44.png","/images/age-6.png":"_assets/27747b3d6c9d2a49df44.png","/age-6.png":"_assets/27747b3d6c9d2a49df44.png","https://deathraygames.github.io/mortal/images/age-2.png":"_assets/e0fc06398702ead89710.png","/mortal/images/age-2.png":"_assets/e0fc06398702ead89710.png","/images/age-2.png":"_assets/e0fc06398702ead89710.png","/age-2.png":"_assets/e0fc06398702ead89710.png"};
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
