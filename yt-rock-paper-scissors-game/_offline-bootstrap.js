(() => {
  "use strict";
  const RUNTIME_MAP = {"https://scissors-paper-rock-game.netlify.app/styles/styles.css":"_assets/20765766e5df759edea3.css","/styles/styles.css":"_assets/20765766e5df759edea3.css","/styles.css":"_assets/20765766e5df759edea3.css","https://scissors-paper-rock-game.netlify.app/images/icon-close.svg":"_assets/55b786afa0ff1423b505.svg","/images/icon-close.svg":"_assets/55b786afa0ff1423b505.svg","/icon-close.svg":"_assets/55b786afa0ff1423b505.svg","https://scissors-paper-rock-game.netlify.app/styles/reset.css":"_assets/8ba8bbecd0afefb52ca1.css","/styles/reset.css":"_assets/8ba8bbecd0afefb52ca1.css","/reset.css":"_assets/8ba8bbecd0afefb52ca1.css","https://scissors-paper-rock-game.netlify.app/images/image-rules.svg":"_assets/1a7bc2cb4994ce750d42.svg","/images/image-rules.svg":"_assets/1a7bc2cb4994ce750d42.svg","/image-rules.svg":"_assets/1a7bc2cb4994ce750d42.svg","https://scissors-paper-rock-game.netlify.app/images/icon-paper.svg":"_assets/90d579036ddb770c4158.svg","/images/icon-paper.svg":"_assets/90d579036ddb770c4158.svg","/icon-paper.svg":"_assets/90d579036ddb770c4158.svg","https://scissors-paper-rock-game.netlify.app/images/icon-scissors.svg":"_assets/f778df7321781905d254.svg","/images/icon-scissors.svg":"_assets/f778df7321781905d254.svg","/icon-scissors.svg":"_assets/f778df7321781905d254.svg","https://scissors-paper-rock-game.netlify.app/images/icon-rock.svg":"_assets/e16feca1079a94aff8e7.svg","/images/icon-rock.svg":"_assets/e16feca1079a94aff8e7.svg","/icon-rock.svg":"_assets/e16feca1079a94aff8e7.svg","https://scissors-paper-rock-game.netlify.app/scripts.js":"_assets/9e8cd2fa4941359e4ea9.js","/scripts.js":"_assets/9e8cd2fa4941359e4ea9.js","https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap":"_assets/e6fa29ba217a2d2da4b1.css","/css2":"_assets/e6fa29ba217a2d2da4b1.css","/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap":"_assets/e6fa29ba217a2d2da4b1.css","https://fonts.googleapis.com/css2":"_assets/e6fa29ba217a2d2da4b1.css","https://scissors-paper-rock-game.netlify.app/images/bg-triangle.svg":"_assets/e0a7e2da09514acdb7c3.svg","/images/bg-triangle.svg":"_assets/e0a7e2da09514acdb7c3.svg","/bg-triangle.svg":"_assets/e0a7e2da09514acdb7c3.svg","https://fonts.gstatic.com/s/barlowsemicondensed/v16/wlpigxjLBV1hqnzfr-F8sEYMB0Yybp0mudRfp66_B2sl.woff2":"_assets/f158417e9207b5362f9b.woff2","/s/barlowsemicondensed/v16/wlpigxjLBV1hqnzfr-F8sEYMB0Yybp0mudRfp66_B2sl.woff2":"_assets/f158417e9207b5362f9b.woff2","/barlowsemicondensed/v16/wlpigxjLBV1hqnzfr-F8sEYMB0Yybp0mudRfp66_B2sl.woff2":"_assets/f158417e9207b5362f9b.woff2","/v16/wlpigxjLBV1hqnzfr-F8sEYMB0Yybp0mudRfp66_B2sl.woff2":"_assets/f158417e9207b5362f9b.woff2","/wlpigxjLBV1hqnzfr-F8sEYMB0Yybp0mudRfp66_B2sl.woff2":"_assets/f158417e9207b5362f9b.woff2","https://fonts.gstatic.com/s/barlowsemicondensed/v16/wlpigxjLBV1hqnzfr-F8sEYMB0Yybp0mudRfw6-_B2sl.woff2":"_assets/fb958c8c20a05552ac8a.woff2","/s/barlowsemicondensed/v16/wlpigxjLBV1hqnzfr-F8sEYMB0Yybp0mudRfw6-_B2sl.woff2":"_assets/fb958c8c20a05552ac8a.woff2","/barlowsemicondensed/v16/wlpigxjLBV1hqnzfr-F8sEYMB0Yybp0mudRfw6-_B2sl.woff2":"_assets/fb958c8c20a05552ac8a.woff2","/v16/wlpigxjLBV1hqnzfr-F8sEYMB0Yybp0mudRfw6-_B2sl.woff2":"_assets/fb958c8c20a05552ac8a.woff2","/wlpigxjLBV1hqnzfr-F8sEYMB0Yybp0mudRfw6-_B2sl.woff2":"_assets/fb958c8c20a05552ac8a.woff2"};
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
