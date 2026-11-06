(() => {
  "use strict";
  const RUNTIME_MAP = {"https://taximanli.github.io/kotobade-asobou/static/css/main.262cc0ce.css":"_assets/0eca930d73c1372ee0d5.css","/kotobade-asobou/static/css/main.262cc0ce.css":"_assets/0eca930d73c1372ee0d5.css","/static/css/main.262cc0ce.css":"_assets/0eca930d73c1372ee0d5.css","/css/main.262cc0ce.css":"_assets/0eca930d73c1372ee0d5.css","/main.262cc0ce.css":"_assets/0eca930d73c1372ee0d5.css","https://taximanli.github.io/kotobade-asobou/static/js/main.a611d7a8.js":"_assets/428df3c6c8710be4d845.js","/kotobade-asobou/static/js/main.a611d7a8.js":"_assets/428df3c6c8710be4d845.js","/static/js/main.a611d7a8.js":"_assets/428df3c6c8710be4d845.js","/js/main.a611d7a8.js":"_assets/428df3c6c8710be4d845.js","/main.a611d7a8.js":"_assets/428df3c6c8710be4d845.js","https://taximanli.github.io/kotobade-asobou/static/media/close-lime.99656e40f3f7dd1d173f.svg":"_assets/fbee3142cf8b8fc9a82e.svg","/kotobade-asobou/static/media/close-lime.99656e40f3f7dd1d173f.svg":"_assets/fbee3142cf8b8fc9a82e.svg","/static/media/close-lime.99656e40f3f7dd1d173f.svg":"_assets/fbee3142cf8b8fc9a82e.svg","/media/close-lime.99656e40f3f7dd1d173f.svg":"_assets/fbee3142cf8b8fc9a82e.svg","/close-lime.99656e40f3f7dd1d173f.svg":"_assets/fbee3142cf8b8fc9a82e.svg","https://taximanli.github.io/kotobade-asobou/static/media/vowel-green.b297242a84d27f31c808.svg":"_assets/9af5106b429e86f1c9c5.svg","/kotobade-asobou/static/media/vowel-green.b297242a84d27f31c808.svg":"_assets/9af5106b429e86f1c9c5.svg","/static/media/vowel-green.b297242a84d27f31c808.svg":"_assets/9af5106b429e86f1c9c5.svg","/media/vowel-green.b297242a84d27f31c808.svg":"_assets/9af5106b429e86f1c9c5.svg","/vowel-green.b297242a84d27f31c808.svg":"_assets/9af5106b429e86f1c9c5.svg","https://taximanli.github.io/kotobade-asobou/static/media/consonant-green.c8cbcf2c4ecedc3e2988.svg":"_assets/472164ff4dd0b3d61ca7.svg","/kotobade-asobou/static/media/consonant-green.c8cbcf2c4ecedc3e2988.svg":"_assets/472164ff4dd0b3d61ca7.svg","/static/media/consonant-green.c8cbcf2c4ecedc3e2988.svg":"_assets/472164ff4dd0b3d61ca7.svg","/media/consonant-green.c8cbcf2c4ecedc3e2988.svg":"_assets/472164ff4dd0b3d61ca7.svg","/consonant-green.c8cbcf2c4ecedc3e2988.svg":"_assets/472164ff4dd0b3d61ca7.svg"};
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
