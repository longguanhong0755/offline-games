(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap":"_assets/51b9efc0460277a700b5.css","/css2":"_assets/51b9efc0460277a700b5.css","/css2?family=Roboto:wght@400;700&display=swap":"_assets/51b9efc0460277a700b5.css","https://fonts.googleapis.com/css2":"_assets/51b9efc0460277a700b5.css","https://sideeid.github.io/kuruto/style.css":"_assets/8fbcebf7dc879177a1d4.css","/kuruto/style.css":"_assets/8fbcebf7dc879177a1d4.css","/style.css":"_assets/8fbcebf7dc879177a1d4.css","https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js":"_assets/93077e20a92f2173fde5.js","/iconify-icon/1.0.2/iconify-icon.min.js":"_assets/93077e20a92f2173fde5.js","/1.0.2/iconify-icon.min.js":"_assets/93077e20a92f2173fde5.js","/iconify-icon.min.js":"_assets/93077e20a92f2173fde5.js","https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","https://sideeid.github.io/kuruto/img/hertaa2.gif":"_assets/9cb1559044d956c88875.gif","/kuruto/img/hertaa2.gif":"_assets/9cb1559044d956c88875.gif","/img/hertaa2.gif":"_assets/9cb1559044d956c88875.gif","/hertaa2.gif":"_assets/9cb1559044d956c88875.gif","https://api.iconify.design/mdi.json?icons=github":"_assets/431850075f0a6f8254fe.json","/mdi.json":"_assets/431850075f0a6f8254fe.json","/mdi.json?icons=github":"_assets/431850075f0a6f8254fe.json","https://api.iconify.design/mdi.json":"_assets/431850075f0a6f8254fe.json","https://sideeid.github.io/kuruto/img/hertaa1.gif":"_assets/e8690f1886fa6634ece3.gif","/kuruto/img/hertaa1.gif":"_assets/e8690f1886fa6634ece3.gif","/img/hertaa1.gif":"_assets/e8690f1886fa6634ece3.gif","/hertaa1.gif":"_assets/e8690f1886fa6634ece3.gif","https://sideeid.github.io/kuruto/script.js":"_assets/fd8dae7383476fd163cf.js","/kuruto/script.js":"_assets/fd8dae7383476fd163cf.js","/script.js":"_assets/fd8dae7383476fd163cf.js","https://sideeid.github.io/kuruto/audio/kuru2.mp3":"_assets/f5745a87db41bd882a28.mp3","/kuruto/audio/kuru2.mp3":"_assets/f5745a87db41bd882a28.mp3","/audio/kuru2.mp3":"_assets/f5745a87db41bd882a28.mp3","/kuru2.mp3":"_assets/f5745a87db41bd882a28.mp3","https://api.simplesvg.com/mdi.json?icons=github":"_assets/431850075f0a6f8254fe.json","https://api.simplesvg.com/mdi.json":"_assets/431850075f0a6f8254fe.json","https://sideeid.github.io/kuruto/audio/kuru1.mp3":"_assets/d8a6c94d3932e76d33b7.mp3","/kuruto/audio/kuru1.mp3":"_assets/d8a6c94d3932e76d33b7.mp3","/audio/kuru1.mp3":"_assets/d8a6c94d3932e76d33b7.mp3","/kuru1.mp3":"_assets/d8a6c94d3932e76d33b7.mp3","https://sideeid.github.io/kuruto/audio/kuruto.mp3":"_assets/20c71a30dc42cacb6468.mp3","/kuruto/audio/kuruto.mp3":"_assets/20c71a30dc42cacb6468.mp3","/audio/kuruto.mp3":"_assets/20c71a30dc42cacb6468.mp3","/kuruto.mp3":"_assets/20c71a30dc42cacb6468.mp3"};
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
