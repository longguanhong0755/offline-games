(() => {
  "use strict";
  const RUNTIME_MAP = {"https://breakout-game-dhanushnehru.netlify.app/styles.css":"_assets/6ca9f16052e7b04dd640.css","/styles.css":"_assets/6ca9f16052e7b04dd640.css","https://breakout-game-dhanushnehru.netlify.app/utils/utilsCopyright.js":"_assets/16b40ab48dcf404269ea.js","/utils/utilsCopyright.js":"_assets/16b40ab48dcf404269ea.js","/utilsCopyright.js":"_assets/16b40ab48dcf404269ea.js","https://breakout-game-dhanushnehru.netlify.app/utils/utilsColor.js":"_assets/27acfa97f139785c2768.js","/utils/utilsColor.js":"_assets/27acfa97f139785c2768.js","/utilsColor.js":"_assets/27acfa97f139785c2768.js","https://breakout-game-dhanushnehru.netlify.app/scripts/config.js":"_assets/253b9673933bf1cf0007.js","/scripts/config.js":"_assets/253b9673933bf1cf0007.js","/config.js":"_assets/253b9673933bf1cf0007.js","https://breakout-game-dhanushnehru.netlify.app/scripts/controls.js":"_assets/c9a01e9f8a85ffbfe3ee.js","/scripts/controls.js":"_assets/c9a01e9f8a85ffbfe3ee.js","/controls.js":"_assets/c9a01e9f8a85ffbfe3ee.js","https://breakout-game-dhanushnehru.netlify.app/scripts/gameplay.js":"_assets/820ba3454972091d3c8c.js","/scripts/gameplay.js":"_assets/820ba3454972091d3c8c.js","/gameplay.js":"_assets/820ba3454972091d3c8c.js","https://breakout-game-dhanushnehru.netlify.app/scripts/rendering.js":"_assets/ed5586ba75f8f77bd70e.js","/scripts/rendering.js":"_assets/ed5586ba75f8f77bd70e.js","/rendering.js":"_assets/ed5586ba75f8f77bd70e.js","https://breakout-game-dhanushnehru.netlify.app/script.js":"_assets/ebb18be96c39d8cc26f1.js","/script.js":"_assets/ebb18be96c39d8cc26f1.js","https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap":"_assets/51b9efc0460277a700b5.css","/css2":"_assets/51b9efc0460277a700b5.css","/css2?family=Roboto:wght@400;700&display=swap":"_assets/51b9efc0460277a700b5.css","https://fonts.googleapis.com/css2":"_assets/51b9efc0460277a700b5.css","https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2":"_assets/2addf2d86d7a5778653b.woff2","/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2":"_assets/2addf2d86d7a5778653b.woff2","/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2":"_assets/2addf2d86d7a5778653b.woff2","/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2":"_assets/2addf2d86d7a5778653b.woff2","/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2":"_assets/2addf2d86d7a5778653b.woff2","https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2"};
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
