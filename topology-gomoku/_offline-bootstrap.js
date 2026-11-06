(() => {
  "use strict";
  const RUNTIME_MAP = {"https://www.yykspace.com/show/topology-gomoku/assets/host-layout.js":"_assets/8ffd4e2ba197e6d37aef.js","/show/topology-gomoku/assets/host-layout.js":"_assets/8ffd4e2ba197e6d37aef.js","/topology-gomoku/assets/host-layout.js":"_assets/8ffd4e2ba197e6d37aef.js","/assets/host-layout.js":"_assets/8ffd4e2ba197e6d37aef.js","/host-layout.js":"_assets/8ffd4e2ba197e6d37aef.js","https://www.yykspace.com/show/topology-gomoku/assets/style.css":"_assets/49aefd3f0b5cacf49874.css","/show/topology-gomoku/assets/style.css":"_assets/49aefd3f0b5cacf49874.css","/topology-gomoku/assets/style.css":"_assets/49aefd3f0b5cacf49874.css","/assets/style.css":"_assets/49aefd3f0b5cacf49874.css","/style.css":"_assets/49aefd3f0b5cacf49874.css","https://www.yykspace.com/show/topology-gomoku/assets/topologies/plane.svg":"_assets/89b30b302e5ae8e00cc5.svg","/show/topology-gomoku/assets/topologies/plane.svg":"_assets/89b30b302e5ae8e00cc5.svg","/topology-gomoku/assets/topologies/plane.svg":"_assets/89b30b302e5ae8e00cc5.svg","/assets/topologies/plane.svg":"_assets/89b30b302e5ae8e00cc5.svg","/topologies/plane.svg":"_assets/89b30b302e5ae8e00cc5.svg","/plane.svg":"_assets/89b30b302e5ae8e00cc5.svg","https://www.yykspace.com/show/topology-gomoku/assets/brand-icon.png":"_assets/f41f91e2fdfc0cb69442.png","/show/topology-gomoku/assets/brand-icon.png":"_assets/f41f91e2fdfc0cb69442.png","/topology-gomoku/assets/brand-icon.png":"_assets/f41f91e2fdfc0cb69442.png","/assets/brand-icon.png":"_assets/f41f91e2fdfc0cb69442.png","/brand-icon.png":"_assets/f41f91e2fdfc0cb69442.png","https://www.yykspace.com/show/topology-gomoku/assets/topologies/cylinder.svg":"_assets/9a24f1308430b5c5cd12.svg","/show/topology-gomoku/assets/topologies/cylinder.svg":"_assets/9a24f1308430b5c5cd12.svg","/topology-gomoku/assets/topologies/cylinder.svg":"_assets/9a24f1308430b5c5cd12.svg","/assets/topologies/cylinder.svg":"_assets/9a24f1308430b5c5cd12.svg","/topologies/cylinder.svg":"_assets/9a24f1308430b5c5cd12.svg","/cylinder.svg":"_assets/9a24f1308430b5c5cd12.svg","https://www.yykspace.com/show/topology-gomoku/assets/silhouettes/cylinder.svg":"_assets/fcd28f2a839bca9fd280.svg","/show/topology-gomoku/assets/silhouettes/cylinder.svg":"_assets/fcd28f2a839bca9fd280.svg","/topology-gomoku/assets/silhouettes/cylinder.svg":"_assets/fcd28f2a839bca9fd280.svg","/assets/silhouettes/cylinder.svg":"_assets/fcd28f2a839bca9fd280.svg","/silhouettes/cylinder.svg":"_assets/fcd28f2a839bca9fd280.svg","https://www.yykspace.com/show/topology-gomoku/assets/topology.js":"_assets/b41b99bef6f966d54f4a.js","/show/topology-gomoku/assets/topology.js":"_assets/b41b99bef6f966d54f4a.js","/topology-gomoku/assets/topology.js":"_assets/b41b99bef6f966d54f4a.js","/assets/topology.js":"_assets/b41b99bef6f966d54f4a.js","/topology.js":"_assets/b41b99bef6f966d54f4a.js","https://www.yykspace.com/show/topology-gomoku/assets/silhouettes/klein.svg":"_assets/b9d1d970a741961dd539.svg","/show/topology-gomoku/assets/silhouettes/klein.svg":"_assets/b9d1d970a741961dd539.svg","/topology-gomoku/assets/silhouettes/klein.svg":"_assets/b9d1d970a741961dd539.svg","/assets/silhouettes/klein.svg":"_assets/b9d1d970a741961dd539.svg","/silhouettes/klein.svg":"_assets/b9d1d970a741961dd539.svg","/klein.svg":"_assets/b9d1d970a741961dd539.svg","https://www.yykspace.com/show/topology-gomoku/assets/silhouettes/projective.svg":"_assets/aa3052760dbf542b9fe0.svg","/show/topology-gomoku/assets/silhouettes/projective.svg":"_assets/aa3052760dbf542b9fe0.svg","/topology-gomoku/assets/silhouettes/projective.svg":"_assets/aa3052760dbf542b9fe0.svg","/assets/silhouettes/projective.svg":"_assets/aa3052760dbf542b9fe0.svg","/silhouettes/projective.svg":"_assets/aa3052760dbf542b9fe0.svg","/projective.svg":"_assets/aa3052760dbf542b9fe0.svg","https://www.yykspace.com/show/topology-gomoku/assets/silhouettes/sphere.svg":"_assets/9d1747ecd328ecabb5ce.svg","/show/topology-gomoku/assets/silhouettes/sphere.svg":"_assets/9d1747ecd328ecabb5ce.svg","/topology-gomoku/assets/silhouettes/sphere.svg":"_assets/9d1747ecd328ecabb5ce.svg","/assets/silhouettes/sphere.svg":"_assets/9d1747ecd328ecabb5ce.svg","/silhouettes/sphere.svg":"_assets/9d1747ecd328ecabb5ce.svg","/sphere.svg":"_assets/9d1747ecd328ecabb5ce.svg","https://www.yykspace.com/show/topology-gomoku/assets/silhouettes/torus.svg":"_assets/d26b448686290ad316bf.svg","/show/topology-gomoku/assets/silhouettes/torus.svg":"_assets/d26b448686290ad316bf.svg","/topology-gomoku/assets/silhouettes/torus.svg":"_assets/d26b448686290ad316bf.svg","/assets/silhouettes/torus.svg":"_assets/d26b448686290ad316bf.svg","/silhouettes/torus.svg":"_assets/d26b448686290ad316bf.svg","/torus.svg":"_assets/d26b448686290ad316bf.svg","https://www.yykspace.com/show/topology-gomoku/assets/silhouettes/mobius.svg":"_assets/a8ddc908ee236f8b4643.svg","/show/topology-gomoku/assets/silhouettes/mobius.svg":"_assets/a8ddc908ee236f8b4643.svg","/topology-gomoku/assets/silhouettes/mobius.svg":"_assets/a8ddc908ee236f8b4643.svg","/assets/silhouettes/mobius.svg":"_assets/a8ddc908ee236f8b4643.svg","/silhouettes/mobius.svg":"_assets/a8ddc908ee236f8b4643.svg","/mobius.svg":"_assets/a8ddc908ee236f8b4643.svg","https://www.yykspace.com/show/topology-gomoku/assets/topologies/mobius.svg":"_assets/aa47532d9061a2f4de2f.svg","/show/topology-gomoku/assets/topologies/mobius.svg":"_assets/aa47532d9061a2f4de2f.svg","/topology-gomoku/assets/topologies/mobius.svg":"_assets/aa47532d9061a2f4de2f.svg","/assets/topologies/mobius.svg":"_assets/aa47532d9061a2f4de2f.svg","/topologies/mobius.svg":"_assets/aa47532d9061a2f4de2f.svg","https://www.yykspace.com/show/topology-gomoku/assets/topologies/klein.svg":"_assets/560e5e45ec535518c00c.svg","/show/topology-gomoku/assets/topologies/klein.svg":"_assets/560e5e45ec535518c00c.svg","/topology-gomoku/assets/topologies/klein.svg":"_assets/560e5e45ec535518c00c.svg","/assets/topologies/klein.svg":"_assets/560e5e45ec535518c00c.svg","/topologies/klein.svg":"_assets/560e5e45ec535518c00c.svg","https://www.yykspace.com/show/topology-gomoku/assets/topologies/sphere.svg":"_assets/99ed02c6132d5e8fb08e.svg","/show/topology-gomoku/assets/topologies/sphere.svg":"_assets/99ed02c6132d5e8fb08e.svg","/topology-gomoku/assets/topologies/sphere.svg":"_assets/99ed02c6132d5e8fb08e.svg","/assets/topologies/sphere.svg":"_assets/99ed02c6132d5e8fb08e.svg","/topologies/sphere.svg":"_assets/99ed02c6132d5e8fb08e.svg","https://www.yykspace.com/show/topology-gomoku/assets/topologies/projective.svg":"_assets/7129d8e1ccca88b026af.svg","/show/topology-gomoku/assets/topologies/projective.svg":"_assets/7129d8e1ccca88b026af.svg","/topology-gomoku/assets/topologies/projective.svg":"_assets/7129d8e1ccca88b026af.svg","/assets/topologies/projective.svg":"_assets/7129d8e1ccca88b026af.svg","/topologies/projective.svg":"_assets/7129d8e1ccca88b026af.svg","https://www.yykspace.com/show/topology-gomoku/assets/topologies/torus.svg":"_assets/bc0d0de4be0a6bc3a947.svg","/show/topology-gomoku/assets/topologies/torus.svg":"_assets/bc0d0de4be0a6bc3a947.svg","/topology-gomoku/assets/topologies/torus.svg":"_assets/bc0d0de4be0a6bc3a947.svg","/assets/topologies/torus.svg":"_assets/bc0d0de4be0a6bc3a947.svg","/topologies/torus.svg":"_assets/bc0d0de4be0a6bc3a947.svg","https://www.yykspace.com/show/topology-gomoku/assets/fonts/noto-serif-sc-400.woff2":"_assets/45d62d78fb9d2b03fd8a.woff2","/show/topology-gomoku/assets/fonts/noto-serif-sc-400.woff2":"_assets/45d62d78fb9d2b03fd8a.woff2","/topology-gomoku/assets/fonts/noto-serif-sc-400.woff2":"_assets/45d62d78fb9d2b03fd8a.woff2","/assets/fonts/noto-serif-sc-400.woff2":"_assets/45d62d78fb9d2b03fd8a.woff2","/fonts/noto-serif-sc-400.woff2":"_assets/45d62d78fb9d2b03fd8a.woff2","/noto-serif-sc-400.woff2":"_assets/45d62d78fb9d2b03fd8a.woff2","https://www.yykspace.com/show/topology-gomoku/assets/fonts/noto-serif-sc-600.woff2":"_assets/402640282590253da77c.woff2","/show/topology-gomoku/assets/fonts/noto-serif-sc-600.woff2":"_assets/402640282590253da77c.woff2","/topology-gomoku/assets/fonts/noto-serif-sc-600.woff2":"_assets/402640282590253da77c.woff2","/assets/fonts/noto-serif-sc-600.woff2":"_assets/402640282590253da77c.woff2","/fonts/noto-serif-sc-600.woff2":"_assets/402640282590253da77c.woff2","/noto-serif-sc-600.woff2":"_assets/402640282590253da77c.woff2","https://www.yykspace.com/show/topology-gomoku/assets/level-config.js":"_assets/25af6c24758b53ae24c5.js","/show/topology-gomoku/assets/level-config.js":"_assets/25af6c24758b53ae24c5.js","/topology-gomoku/assets/level-config.js":"_assets/25af6c24758b53ae24c5.js","/assets/level-config.js":"_assets/25af6c24758b53ae24c5.js","/level-config.js":"_assets/25af6c24758b53ae24c5.js","https://www.yykspace.com/show/topology-gomoku/assets/liquid-range.js":"_assets/a268376e759ef0c8536e.js","/show/topology-gomoku/assets/liquid-range.js":"_assets/a268376e759ef0c8536e.js","/topology-gomoku/assets/liquid-range.js":"_assets/a268376e759ef0c8536e.js","/assets/liquid-range.js":"_assets/a268376e759ef0c8536e.js","/liquid-range.js":"_assets/a268376e759ef0c8536e.js","https://www.yykspace.com/show/topology-gomoku/assets/topology-morph.js":"_assets/eaae7651051e0d017d0e.js","/show/topology-gomoku/assets/topology-morph.js":"_assets/eaae7651051e0d017d0e.js","/topology-gomoku/assets/topology-morph.js":"_assets/eaae7651051e0d017d0e.js","/assets/topology-morph.js":"_assets/eaae7651051e0d017d0e.js","/topology-morph.js":"_assets/eaae7651051e0d017d0e.js","https://www.yykspace.com/show/topology-gomoku/assets/fonts/noto-serif-sc-700.woff2":"_assets/72d5fea5394836e5fd2c.woff2","/show/topology-gomoku/assets/fonts/noto-serif-sc-700.woff2":"_assets/72d5fea5394836e5fd2c.woff2","/topology-gomoku/assets/fonts/noto-serif-sc-700.woff2":"_assets/72d5fea5394836e5fd2c.woff2","/assets/fonts/noto-serif-sc-700.woff2":"_assets/72d5fea5394836e5fd2c.woff2","/fonts/noto-serif-sc-700.woff2":"_assets/72d5fea5394836e5fd2c.woff2","/noto-serif-sc-700.woff2":"_assets/72d5fea5394836e5fd2c.woff2","https://www.yykspace.com/show/topology-gomoku/assets/board-view-logic.js":"_assets/7e5a50265b715f36d183.js","/show/topology-gomoku/assets/board-view-logic.js":"_assets/7e5a50265b715f36d183.js","/topology-gomoku/assets/board-view-logic.js":"_assets/7e5a50265b715f36d183.js","/assets/board-view-logic.js":"_assets/7e5a50265b715f36d183.js","/board-view-logic.js":"_assets/7e5a50265b715f36d183.js","https://www.yykspace.com/show/topology-gomoku/assets/board-art.js":"_assets/bc2b9d06c2f8f10cb73f.js","/show/topology-gomoku/assets/board-art.js":"_assets/bc2b9d06c2f8f10cb73f.js","/topology-gomoku/assets/board-art.js":"_assets/bc2b9d06c2f8f10cb73f.js","/assets/board-art.js":"_assets/bc2b9d06c2f8f10cb73f.js","/board-art.js":"_assets/bc2b9d06c2f8f10cb73f.js","https://www.yykspace.com/show/topology-gomoku/assets/game-replay.js":"_assets/f3a99a8c9e331daf5c9c.js","/show/topology-gomoku/assets/game-replay.js":"_assets/f3a99a8c9e331daf5c9c.js","/topology-gomoku/assets/game-replay.js":"_assets/f3a99a8c9e331daf5c9c.js","/assets/game-replay.js":"_assets/f3a99a8c9e331daf5c9c.js","/game-replay.js":"_assets/f3a99a8c9e331daf5c9c.js","https://www.yykspace.com/show/topology-gomoku/assets/game.js":"_assets/cb24ab7ba6b7ba721658.js","/show/topology-gomoku/assets/game.js":"_assets/cb24ab7ba6b7ba721658.js","/topology-gomoku/assets/game.js":"_assets/cb24ab7ba6b7ba721658.js","/assets/game.js":"_assets/cb24ab7ba6b7ba721658.js","/game.js":"_assets/cb24ab7ba6b7ba721658.js"};
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
