(() => {
  "use strict";
  const RUNTIME_MAP = {"https://www.chuclone.com/wp-content/themes/flatsome/style.css?ver=3.18.7":"_assets/0eebea0a6a794bc32151.css","/wp-content/themes/flatsome/style.css":"_assets/0eebea0a6a794bc32151.css","/wp-content/themes/flatsome/style.css?ver=3.18.7":"_assets/0eebea0a6a794bc32151.css","/themes/flatsome/style.css":"_assets/0eebea0a6a794bc32151.css","/flatsome/style.css":"_assets/0eebea0a6a794bc32151.css","/style.css":"_assets/0eebea0a6a794bc32151.css","https://www.chuclone.com/wp-content/themes/flatsome/style.css":"_assets/0eebea0a6a794bc32151.css","https://www.chuclone.com/wp-content/themes/flatsome/assets/css/effects.css?ver=3.18.7":"_assets/9f9e48f93b94c527067e.css","/wp-content/themes/flatsome/assets/css/effects.css":"_assets/9f9e48f93b94c527067e.css","/wp-content/themes/flatsome/assets/css/effects.css?ver=3.18.7":"_assets/9f9e48f93b94c527067e.css","/themes/flatsome/assets/css/effects.css":"_assets/9f9e48f93b94c527067e.css","/flatsome/assets/css/effects.css":"_assets/9f9e48f93b94c527067e.css","/assets/css/effects.css":"_assets/9f9e48f93b94c527067e.css","/css/effects.css":"_assets/9f9e48f93b94c527067e.css","/effects.css":"_assets/9f9e48f93b94c527067e.css","https://www.chuclone.com/wp-content/themes/flatsome/assets/css/effects.css":"_assets/9f9e48f93b94c527067e.css","https://www.chuclone.com/wp-includes/js/hoverIntent.min.js?ver=1.10.2":"_assets/ed5b5df9ceacfe76857a.js","/wp-includes/js/hoverIntent.min.js":"_assets/ed5b5df9ceacfe76857a.js","/wp-includes/js/hoverIntent.min.js?ver=1.10.2":"_assets/ed5b5df9ceacfe76857a.js","/js/hoverIntent.min.js":"_assets/ed5b5df9ceacfe76857a.js","/hoverIntent.min.js":"_assets/ed5b5df9ceacfe76857a.js","https://www.chuclone.com/wp-includes/js/hoverIntent.min.js":"_assets/ed5b5df9ceacfe76857a.js","https://www.chuclone.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1":"_assets/5274f11e6fb32ae0cf2d.js","/wp-includes/js/jquery/jquery-migrate.min.js":"_assets/5274f11e6fb32ae0cf2d.js","/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1":"_assets/5274f11e6fb32ae0cf2d.js","/js/jquery/jquery-migrate.min.js":"_assets/5274f11e6fb32ae0cf2d.js","/jquery/jquery-migrate.min.js":"_assets/5274f11e6fb32ae0cf2d.js","/jquery-migrate.min.js":"_assets/5274f11e6fb32ae0cf2d.js","https://www.chuclone.com/wp-includes/js/jquery/jquery-migrate.min.js":"_assets/5274f11e6fb32ae0cf2d.js","https://www.chuclone.com/wp-content/themes/flatsome/inc/extensions/flatsome-live-search/flatsome-live-search.js?ver=3.18.7":"_assets/4c1f3df3646c27bf2afe.js","/wp-content/themes/flatsome/inc/extensions/flatsome-live-search/flatsome-live-search.js":"_assets/4c1f3df3646c27bf2afe.js","/wp-content/themes/flatsome/inc/extensions/flatsome-live-search/flatsome-live-search.js?ver=3.18.7":"_assets/4c1f3df3646c27bf2afe.js","/themes/flatsome/inc/extensions/flatsome-live-search/flatsome-live-search.js":"_assets/4c1f3df3646c27bf2afe.js","/flatsome/inc/extensions/flatsome-live-search/flatsome-live-search.js":"_assets/4c1f3df3646c27bf2afe.js","/inc/extensions/flatsome-live-search/flatsome-live-search.js":"_assets/4c1f3df3646c27bf2afe.js","/extensions/flatsome-live-search/flatsome-live-search.js":"_assets/4c1f3df3646c27bf2afe.js","/flatsome-live-search/flatsome-live-search.js":"_assets/4c1f3df3646c27bf2afe.js","/flatsome-live-search.js":"_assets/4c1f3df3646c27bf2afe.js","https://www.chuclone.com/wp-content/themes/flatsome/inc/extensions/flatsome-live-search/flatsome-live-search.js":"_assets/4c1f3df3646c27bf2afe.js","https://www.chuclone.com/wp-content/themes/flatsome/assets/css/flatsome.css?ver=3.18.7":"_assets/f33b70f5f1d46edbe129.css","/wp-content/themes/flatsome/assets/css/flatsome.css":"_assets/f33b70f5f1d46edbe129.css","/wp-content/themes/flatsome/assets/css/flatsome.css?ver=3.18.7":"_assets/f33b70f5f1d46edbe129.css","/themes/flatsome/assets/css/flatsome.css":"_assets/f33b70f5f1d46edbe129.css","/flatsome/assets/css/flatsome.css":"_assets/f33b70f5f1d46edbe129.css","/assets/css/flatsome.css":"_assets/f33b70f5f1d46edbe129.css","/css/flatsome.css":"_assets/f33b70f5f1d46edbe129.css","/flatsome.css":"_assets/f33b70f5f1d46edbe129.css","https://www.chuclone.com/wp-content/themes/flatsome/assets/css/flatsome.css":"_assets/f33b70f5f1d46edbe129.css","https://www.chuclone.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1":"_assets/cb6f2d32c49d1c2b25e9.js","/wp-includes/js/jquery/jquery.min.js":"_assets/cb6f2d32c49d1c2b25e9.js","/wp-includes/js/jquery/jquery.min.js?ver=3.7.1":"_assets/cb6f2d32c49d1c2b25e9.js","/js/jquery/jquery.min.js":"_assets/cb6f2d32c49d1c2b25e9.js","/jquery/jquery.min.js":"_assets/cb6f2d32c49d1c2b25e9.js","/jquery.min.js":"_assets/cb6f2d32c49d1c2b25e9.js","https://www.chuclone.com/wp-includes/js/jquery/jquery.min.js":"_assets/cb6f2d32c49d1c2b25e9.js","https://www.chuclone.com/wp-content/themes/flatsome/assets/js/flatsome.js?ver=a0a7aee297766598a20e":"_assets/1ce97f1528f3d41dff54.js","/wp-content/themes/flatsome/assets/js/flatsome.js":"_assets/1ce97f1528f3d41dff54.js","/wp-content/themes/flatsome/assets/js/flatsome.js?ver=a0a7aee297766598a20e":"_assets/1ce97f1528f3d41dff54.js","/themes/flatsome/assets/js/flatsome.js":"_assets/1ce97f1528f3d41dff54.js","/flatsome/assets/js/flatsome.js":"_assets/1ce97f1528f3d41dff54.js","/assets/js/flatsome.js":"_assets/1ce97f1528f3d41dff54.js","/js/flatsome.js":"_assets/1ce97f1528f3d41dff54.js","/flatsome.js":"_assets/1ce97f1528f3d41dff54.js","https://www.chuclone.com/wp-content/themes/flatsome/assets/js/flatsome.js":"_assets/1ce97f1528f3d41dff54.js","https://www.chuclone.com/wp-content/themes/flatsome/assets/js/chunk.popups.js?ver=3.18.7":"_assets/f793c6524fb66bf6952e.js","/wp-content/themes/flatsome/assets/js/chunk.popups.js":"_assets/f793c6524fb66bf6952e.js","/wp-content/themes/flatsome/assets/js/chunk.popups.js?ver=3.18.7":"_assets/f793c6524fb66bf6952e.js","/themes/flatsome/assets/js/chunk.popups.js":"_assets/f793c6524fb66bf6952e.js","/flatsome/assets/js/chunk.popups.js":"_assets/f793c6524fb66bf6952e.js","/assets/js/chunk.popups.js":"_assets/f793c6524fb66bf6952e.js","/js/chunk.popups.js":"_assets/f793c6524fb66bf6952e.js","/chunk.popups.js":"_assets/f793c6524fb66bf6952e.js","https://www.chuclone.com/wp-content/themes/flatsome/assets/js/chunk.popups.js":"_assets/f793c6524fb66bf6952e.js","https://www.chuclone.com/wp-content/themes/flatsome/assets/js/chunk.tooltips.js?ver=3.18.7":"_assets/0a0a9c4251675f3abb5b.js","/wp-content/themes/flatsome/assets/js/chunk.tooltips.js":"_assets/0a0a9c4251675f3abb5b.js","/wp-content/themes/flatsome/assets/js/chunk.tooltips.js?ver=3.18.7":"_assets/0a0a9c4251675f3abb5b.js","/themes/flatsome/assets/js/chunk.tooltips.js":"_assets/0a0a9c4251675f3abb5b.js","/flatsome/assets/js/chunk.tooltips.js":"_assets/0a0a9c4251675f3abb5b.js","/assets/js/chunk.tooltips.js":"_assets/0a0a9c4251675f3abb5b.js","/js/chunk.tooltips.js":"_assets/0a0a9c4251675f3abb5b.js","/chunk.tooltips.js":"_assets/0a0a9c4251675f3abb5b.js","https://www.chuclone.com/wp-content/themes/flatsome/assets/js/chunk.tooltips.js":"_assets/0a0a9c4251675f3abb5b.js","https://www.chuclone.com/wp-content/themes/flatsome/assets/img/effects/sparkle1.png":"_assets/e62e2d6021d52dc6ede2.png","/wp-content/themes/flatsome/assets/img/effects/sparkle1.png":"_assets/e62e2d6021d52dc6ede2.png","/themes/flatsome/assets/img/effects/sparkle1.png":"_assets/e62e2d6021d52dc6ede2.png","/flatsome/assets/img/effects/sparkle1.png":"_assets/e62e2d6021d52dc6ede2.png","/assets/img/effects/sparkle1.png":"_assets/e62e2d6021d52dc6ede2.png","/img/effects/sparkle1.png":"_assets/e62e2d6021d52dc6ede2.png","/effects/sparkle1.png":"_assets/e62e2d6021d52dc6ede2.png","/sparkle1.png":"_assets/e62e2d6021d52dc6ede2.png","https://www.chuclone.com/wp-content/themes/flatsome/assets/css/icons/fl-icons.woff2?v=3.18.7":"_assets/bc425300c8a8a921a3d4.woff2","/wp-content/themes/flatsome/assets/css/icons/fl-icons.woff2":"_assets/bc425300c8a8a921a3d4.woff2","/wp-content/themes/flatsome/assets/css/icons/fl-icons.woff2?v=3.18.7":"_assets/bc425300c8a8a921a3d4.woff2","/themes/flatsome/assets/css/icons/fl-icons.woff2":"_assets/bc425300c8a8a921a3d4.woff2","/flatsome/assets/css/icons/fl-icons.woff2":"_assets/bc425300c8a8a921a3d4.woff2","/assets/css/icons/fl-icons.woff2":"_assets/bc425300c8a8a921a3d4.woff2","/css/icons/fl-icons.woff2":"_assets/bc425300c8a8a921a3d4.woff2","/icons/fl-icons.woff2":"_assets/bc425300c8a8a921a3d4.woff2","/fl-icons.woff2":"_assets/bc425300c8a8a921a3d4.woff2","https://www.chuclone.com/wp-content/themes/flatsome/assets/css/icons/fl-icons.woff2":"_assets/bc425300c8a8a921a3d4.woff2","https://www.chuclone.com/wp-content/fonts/kanit/nKKU-Go6G5tXcr4uPhWzVaF5NQ.woff2":"_assets/20ee1ffc0cbccfc9e4b7.woff2","/wp-content/fonts/kanit/nKKU-Go6G5tXcr4uPhWzVaF5NQ.woff2":"_assets/20ee1ffc0cbccfc9e4b7.woff2","/fonts/kanit/nKKU-Go6G5tXcr4uPhWzVaF5NQ.woff2":"_assets/20ee1ffc0cbccfc9e4b7.woff2","/kanit/nKKU-Go6G5tXcr4uPhWzVaF5NQ.woff2":"_assets/20ee1ffc0cbccfc9e4b7.woff2","/nKKU-Go6G5tXcr4uPhWzVaF5NQ.woff2":"_assets/20ee1ffc0cbccfc9e4b7.woff2","https://www.chuclone.com/wp-content/themes/flatsome/assets/img/effects/sparkle2.png":"_assets/6f8e86b0b2a0ab4f7b68.png","/wp-content/themes/flatsome/assets/img/effects/sparkle2.png":"_assets/6f8e86b0b2a0ab4f7b68.png","/themes/flatsome/assets/img/effects/sparkle2.png":"_assets/6f8e86b0b2a0ab4f7b68.png","/flatsome/assets/img/effects/sparkle2.png":"_assets/6f8e86b0b2a0ab4f7b68.png","/assets/img/effects/sparkle2.png":"_assets/6f8e86b0b2a0ab4f7b68.png","/img/effects/sparkle2.png":"_assets/6f8e86b0b2a0ab4f7b68.png","/effects/sparkle2.png":"_assets/6f8e86b0b2a0ab4f7b68.png","/sparkle2.png":"_assets/6f8e86b0b2a0ab4f7b68.png","https://www.chuclone.com/wp-content/fonts/kanit/nKKZ-Go6G5tXcraVGwA.woff2":"_assets/1e856b3a04f93a23ec75.woff2","/wp-content/fonts/kanit/nKKZ-Go6G5tXcraVGwA.woff2":"_assets/1e856b3a04f93a23ec75.woff2","/fonts/kanit/nKKZ-Go6G5tXcraVGwA.woff2":"_assets/1e856b3a04f93a23ec75.woff2","/kanit/nKKZ-Go6G5tXcraVGwA.woff2":"_assets/1e856b3a04f93a23ec75.woff2","/nKKZ-Go6G5tXcraVGwA.woff2":"_assets/1e856b3a04f93a23ec75.woff2","https://www.chuclone.com/wp-content/themes/flatsome/assets/js/chunk.slider.js?ver=3.18.7":"_assets/bec887feaec684bbc559.js","/wp-content/themes/flatsome/assets/js/chunk.slider.js":"_assets/bec887feaec684bbc559.js","/wp-content/themes/flatsome/assets/js/chunk.slider.js?ver=3.18.7":"_assets/bec887feaec684bbc559.js","/themes/flatsome/assets/js/chunk.slider.js":"_assets/bec887feaec684bbc559.js","/flatsome/assets/js/chunk.slider.js":"_assets/bec887feaec684bbc559.js","/assets/js/chunk.slider.js":"_assets/bec887feaec684bbc559.js","/js/chunk.slider.js":"_assets/bec887feaec684bbc559.js","/chunk.slider.js":"_assets/bec887feaec684bbc559.js","https://www.chuclone.com/wp-content/themes/flatsome/assets/js/chunk.slider.js":"_assets/bec887feaec684bbc559.js","https://www.chuclone.com/wp-content/fonts/kanit/nKKU-Go6G5tXcr4uPhWnVaE.woff2":"_assets/a44817a3dcd26f5c659c.woff2","/wp-content/fonts/kanit/nKKU-Go6G5tXcr4uPhWnVaE.woff2":"_assets/a44817a3dcd26f5c659c.woff2","/fonts/kanit/nKKU-Go6G5tXcr4uPhWnVaE.woff2":"_assets/a44817a3dcd26f5c659c.woff2","/kanit/nKKU-Go6G5tXcr4uPhWnVaE.woff2":"_assets/a44817a3dcd26f5c659c.woff2","/nKKU-Go6G5tXcr4uPhWnVaE.woff2":"_assets/a44817a3dcd26f5c659c.woff2","https://www.chuclone.com/wp-content/uploads/2025/03/chuclone.webp":"_assets/137c8e3c3f635a0377c4.webp","/wp-content/uploads/2025/03/chuclone.webp":"_assets/137c8e3c3f635a0377c4.webp","/uploads/2025/03/chuclone.webp":"_assets/137c8e3c3f635a0377c4.webp","/2025/03/chuclone.webp":"_assets/137c8e3c3f635a0377c4.webp","/03/chuclone.webp":"_assets/137c8e3c3f635a0377c4.webp","/chuclone.webp":"_assets/137c8e3c3f635a0377c4.webp","https://www.chuclone.com/wp-content/uploads/2025/03/three.webp":"_assets/1e43a914bc16634b413f.webp","/wp-content/uploads/2025/03/three.webp":"_assets/1e43a914bc16634b413f.webp","/uploads/2025/03/three.webp":"_assets/1e43a914bc16634b413f.webp","/2025/03/three.webp":"_assets/1e43a914bc16634b413f.webp","/03/three.webp":"_assets/1e43a914bc16634b413f.webp","/three.webp":"_assets/1e43a914bc16634b413f.webp","https://www.chuclone.com/wp-content/uploads/2025/03/1.webp":"_assets/c3aefed3f5e530302a36.webp","/wp-content/uploads/2025/03/1.webp":"_assets/c3aefed3f5e530302a36.webp","/uploads/2025/03/1.webp":"_assets/c3aefed3f5e530302a36.webp","/2025/03/1.webp":"_assets/c3aefed3f5e530302a36.webp","/03/1.webp":"_assets/c3aefed3f5e530302a36.webp","/1.webp":"_assets/c3aefed3f5e530302a36.webp","https://www.chuclone.com/wp-content/uploads/2025/03/3.webp":"_assets/602d056620c66a55d17c.webp","/wp-content/uploads/2025/03/3.webp":"_assets/602d056620c66a55d17c.webp","/uploads/2025/03/3.webp":"_assets/602d056620c66a55d17c.webp","/2025/03/3.webp":"_assets/602d056620c66a55d17c.webp","/03/3.webp":"_assets/602d056620c66a55d17c.webp","/3.webp":"_assets/602d056620c66a55d17c.webp","https://www.chuclone.com/wp-content/uploads/2025/03/2.webp":"_assets/f7bd790d7e94f868a8ea.webp","/wp-content/uploads/2025/03/2.webp":"_assets/f7bd790d7e94f868a8ea.webp","/uploads/2025/03/2.webp":"_assets/f7bd790d7e94f868a8ea.webp","/2025/03/2.webp":"_assets/f7bd790d7e94f868a8ea.webp","/03/2.webp":"_assets/f7bd790d7e94f868a8ea.webp","/2.webp":"_assets/f7bd790d7e94f868a8ea.webp","https://www.chuclone.com/wp-content/uploads/2025/03/4-1024x564.webp":"_assets/a087f4f50b241b6a6158.webp","/wp-content/uploads/2025/03/4-1024x564.webp":"_assets/a087f4f50b241b6a6158.webp","/uploads/2025/03/4-1024x564.webp":"_assets/a087f4f50b241b6a6158.webp","/2025/03/4-1024x564.webp":"_assets/a087f4f50b241b6a6158.webp","/03/4-1024x564.webp":"_assets/a087f4f50b241b6a6158.webp","/4-1024x564.webp":"_assets/a087f4f50b241b6a6158.webp"};
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
