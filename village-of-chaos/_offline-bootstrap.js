(() => {
  "use strict";
  const RUNTIME_MAP = {"https://tearnote.github.io/village-of-chaos/assets/images/tent.webp":"_assets/89876c21c888d7ed6b2a.webp","/village-of-chaos/assets/images/tent.webp":"_assets/89876c21c888d7ed6b2a.webp","/assets/images/tent.webp":"_assets/89876c21c888d7ed6b2a.webp","/images/tent.webp":"_assets/89876c21c888d7ed6b2a.webp","/tent.webp":"_assets/89876c21c888d7ed6b2a.webp","https://tearnote.github.io/village-of-chaos/assets/images/villager.gif":"_assets/65369b8145d0009c1528.gif","/village-of-chaos/assets/images/villager.gif":"_assets/65369b8145d0009c1528.gif","/assets/images/villager.gif":"_assets/65369b8145d0009c1528.gif","/images/villager.gif":"_assets/65369b8145d0009c1528.gif","/villager.gif":"_assets/65369b8145d0009c1528.gif","https://tearnote.github.io/village-of-chaos/assets/images/fisherman.gif":"_assets/d4d7b18538f29af1323f.gif","/village-of-chaos/assets/images/fisherman.gif":"_assets/d4d7b18538f29af1323f.gif","/assets/images/fisherman.gif":"_assets/d4d7b18538f29af1323f.gif","/images/fisherman.gif":"_assets/d4d7b18538f29af1323f.gif","/fisherman.gif":"_assets/d4d7b18538f29af1323f.gif","https://tearnote.github.io/village-of-chaos/assets/images/pier.webp":"_assets/74c604ed7d52933a8d23.webp","/village-of-chaos/assets/images/pier.webp":"_assets/74c604ed7d52933a8d23.webp","/assets/images/pier.webp":"_assets/74c604ed7d52933a8d23.webp","/images/pier.webp":"_assets/74c604ed7d52933a8d23.webp","/pier.webp":"_assets/74c604ed7d52933a8d23.webp","https://tearnote.github.io/village-of-chaos/assets/js/util.js":"_assets/ef3ac8ae2d6bb2f1f869.js","/village-of-chaos/assets/js/util.js":"_assets/ef3ac8ae2d6bb2f1f869.js","/assets/js/util.js":"_assets/ef3ac8ae2d6bb2f1f869.js","/js/util.js":"_assets/ef3ac8ae2d6bb2f1f869.js","/util.js":"_assets/ef3ac8ae2d6bb2f1f869.js","https://tearnote.github.io/village-of-chaos/assets/css/style.css":"_assets/f851aaf33f64b06b852d.css","/village-of-chaos/assets/css/style.css":"_assets/f851aaf33f64b06b852d.css","/assets/css/style.css":"_assets/f851aaf33f64b06b852d.css","/css/style.css":"_assets/f851aaf33f64b06b852d.css","/style.css":"_assets/f851aaf33f64b06b852d.css","https://tearnote.github.io/village-of-chaos/assets/js/dom.js":"_assets/377a43b91397542fc24d.js","/village-of-chaos/assets/js/dom.js":"_assets/377a43b91397542fc24d.js","/assets/js/dom.js":"_assets/377a43b91397542fc24d.js","/js/dom.js":"_assets/377a43b91397542fc24d.js","/dom.js":"_assets/377a43b91397542fc24d.js","https://tearnote.github.io/village-of-chaos/assets/images/world.webp":"_assets/83947d6e46e4abe766ca.webp","/village-of-chaos/assets/images/world.webp":"_assets/83947d6e46e4abe766ca.webp","/assets/images/world.webp":"_assets/83947d6e46e4abe766ca.webp","/images/world.webp":"_assets/83947d6e46e4abe766ca.webp","/world.webp":"_assets/83947d6e46e4abe766ca.webp","https://tearnote.github.io/village-of-chaos/assets/js/main.js":"_assets/2044ffdd08c7698952ca.js","/village-of-chaos/assets/js/main.js":"_assets/2044ffdd08c7698952ca.js","/assets/js/main.js":"_assets/2044ffdd08c7698952ca.js","/js/main.js":"_assets/2044ffdd08c7698952ca.js","/main.js":"_assets/2044ffdd08c7698952ca.js","https://tearnote.github.io/village-of-chaos/assets/js/game.js":"_assets/f6379f45d9dd197e893a.js","/village-of-chaos/assets/js/game.js":"_assets/f6379f45d9dd197e893a.js","/assets/js/game.js":"_assets/f6379f45d9dd197e893a.js","/js/game.js":"_assets/f6379f45d9dd197e893a.js","/game.js":"_assets/f6379f45d9dd197e893a.js","https://tearnote.github.io/village-of-chaos/assets/images/miner.gif":"_assets/5a22227d17b5f9704885.gif","/village-of-chaos/assets/images/miner.gif":"_assets/5a22227d17b5f9704885.gif","/assets/images/miner.gif":"_assets/5a22227d17b5f9704885.gif","/images/miner.gif":"_assets/5a22227d17b5f9704885.gif","/miner.gif":"_assets/5a22227d17b5f9704885.gif","https://tearnote.github.io/village-of-chaos/assets/js/upgradeList.js":"_assets/065725117ba9dbac70ab.js","/village-of-chaos/assets/js/upgradeList.js":"_assets/065725117ba9dbac70ab.js","/assets/js/upgradeList.js":"_assets/065725117ba9dbac70ab.js","/js/upgradeList.js":"_assets/065725117ba9dbac70ab.js","/upgradeList.js":"_assets/065725117ba9dbac70ab.js","https://tearnote.github.io/village-of-chaos/assets/images/academy.webp":"_assets/7d5154d6748accf38816.webp","/village-of-chaos/assets/images/academy.webp":"_assets/7d5154d6748accf38816.webp","/assets/images/academy.webp":"_assets/7d5154d6748accf38816.webp","/images/academy.webp":"_assets/7d5154d6748accf38816.webp","/academy.webp":"_assets/7d5154d6748accf38816.webp","https://tearnote.github.io/village-of-chaos/assets/js/tutorial.js":"_assets/3cb49d7265e75f38b952.js","/village-of-chaos/assets/js/tutorial.js":"_assets/3cb49d7265e75f38b952.js","/assets/js/tutorial.js":"_assets/3cb49d7265e75f38b952.js","/js/tutorial.js":"_assets/3cb49d7265e75f38b952.js","/tutorial.js":"_assets/3cb49d7265e75f38b952.js","https://tearnote.github.io/village-of-chaos/assets/images/professor2.gif":"_assets/cb63dc98a1d6c39340e1.gif","/village-of-chaos/assets/images/professor2.gif":"_assets/cb63dc98a1d6c39340e1.gif","/assets/images/professor2.gif":"_assets/cb63dc98a1d6c39340e1.gif","/images/professor2.gif":"_assets/cb63dc98a1d6c39340e1.gif","/professor2.gif":"_assets/cb63dc98a1d6c39340e1.gif","https://tearnote.github.io/village-of-chaos/assets/images/quarry.webp":"_assets/c25d5f640a8d23c7df7c.webp","/village-of-chaos/assets/images/quarry.webp":"_assets/c25d5f640a8d23c7df7c.webp","/assets/images/quarry.webp":"_assets/c25d5f640a8d23c7df7c.webp","/images/quarry.webp":"_assets/c25d5f640a8d23c7df7c.webp","/quarry.webp":"_assets/c25d5f640a8d23c7df7c.webp","https://tearnote.github.io/village-of-chaos/assets/images/smithy.webp":"_assets/53a66eccdeba204f2b85.webp","/village-of-chaos/assets/images/smithy.webp":"_assets/53a66eccdeba204f2b85.webp","/assets/images/smithy.webp":"_assets/53a66eccdeba204f2b85.webp","/images/smithy.webp":"_assets/53a66eccdeba204f2b85.webp","/smithy.webp":"_assets/53a66eccdeba204f2b85.webp","https://tearnote.github.io/village-of-chaos/assets/js/vendor/gameloop.js":"_assets/4cdf9779d261e4c8637c.js","/village-of-chaos/assets/js/vendor/gameloop.js":"_assets/4cdf9779d261e4c8637c.js","/assets/js/vendor/gameloop.js":"_assets/4cdf9779d261e4c8637c.js","/js/vendor/gameloop.js":"_assets/4cdf9779d261e4c8637c.js","/vendor/gameloop.js":"_assets/4cdf9779d261e4c8637c.js","/gameloop.js":"_assets/4cdf9779d261e4c8637c.js","https://tearnote.github.io/village-of-chaos/assets/images/professor1.gif":"_assets/8a2864a3f2a55f4003a2.gif","/village-of-chaos/assets/images/professor1.gif":"_assets/8a2864a3f2a55f4003a2.gif","/assets/images/professor1.gif":"_assets/8a2864a3f2a55f4003a2.gif","/images/professor1.gif":"_assets/8a2864a3f2a55f4003a2.gif","/professor1.gif":"_assets/8a2864a3f2a55f4003a2.gif","https://tearnote.github.io/village-of-chaos/assets/images/blacksmith.gif":"_assets/eb5f79ec1fb6a70fda21.gif","/village-of-chaos/assets/images/blacksmith.gif":"_assets/eb5f79ec1fb6a70fda21.gif","/assets/images/blacksmith.gif":"_assets/eb5f79ec1fb6a70fda21.gif","/images/blacksmith.gif":"_assets/eb5f79ec1fb6a70fda21.gif","/blacksmith.gif":"_assets/eb5f79ec1fb6a70fda21.gif","https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Fira+Mono&family=Milonga&display=swap":"_assets/afa2ec6722247a6028a3.css","/css2":"_assets/afa2ec6722247a6028a3.css","/css2?family=Alegreya:wght@400;700&family=Fira+Mono&family=Milonga&display=swap":"_assets/afa2ec6722247a6028a3.css","https://fonts.googleapis.com/css2":"_assets/afa2ec6722247a6028a3.css","https://fonts.gstatic.com/s/alegreya/v41/4UaBrEBBsBhlBjvfkSLhx6g.woff2":"_assets/2431eca3ed8ed66e713c.woff2","/s/alegreya/v41/4UaBrEBBsBhlBjvfkSLhx6g.woff2":"_assets/2431eca3ed8ed66e713c.woff2","/alegreya/v41/4UaBrEBBsBhlBjvfkSLhx6g.woff2":"_assets/2431eca3ed8ed66e713c.woff2","/v41/4UaBrEBBsBhlBjvfkSLhx6g.woff2":"_assets/2431eca3ed8ed66e713c.woff2","/4UaBrEBBsBhlBjvfkSLhx6g.woff2":"_assets/2431eca3ed8ed66e713c.woff2","https://fonts.gstatic.com/s/firamono/v16/N0bX2SlFPv1weGeLZDtgJv7S.woff2":"_assets/8d1e753569ea7964a3be.woff2","/s/firamono/v16/N0bX2SlFPv1weGeLZDtgJv7S.woff2":"_assets/8d1e753569ea7964a3be.woff2","/firamono/v16/N0bX2SlFPv1weGeLZDtgJv7S.woff2":"_assets/8d1e753569ea7964a3be.woff2","/v16/N0bX2SlFPv1weGeLZDtgJv7S.woff2":"_assets/8d1e753569ea7964a3be.woff2","/N0bX2SlFPv1weGeLZDtgJv7S.woff2":"_assets/8d1e753569ea7964a3be.woff2","https://fonts.gstatic.com/s/milonga/v24/SZc53FHnIaK9W5kfTzrMkA.woff2":"_assets/99105f951709facb2e3a.woff2","/s/milonga/v24/SZc53FHnIaK9W5kfTzrMkA.woff2":"_assets/99105f951709facb2e3a.woff2","/milonga/v24/SZc53FHnIaK9W5kfTzrMkA.woff2":"_assets/99105f951709facb2e3a.woff2","/v24/SZc53FHnIaK9W5kfTzrMkA.woff2":"_assets/99105f951709facb2e3a.woff2","/SZc53FHnIaK9W5kfTzrMkA.woff2":"_assets/99105f951709facb2e3a.woff2"};
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
