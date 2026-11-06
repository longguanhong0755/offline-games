(() => {
  "use strict";
  const RUNTIME_MAP = {"https://afska.github.io/emudevz/assets/index-07G-gnit.css":"_assets/e63a574e5633804f237a.css","/emudevz/assets/index-07G-gnit.css":"_assets/e63a574e5633804f237a.css","/assets/index-07G-gnit.css":"_assets/e63a574e5633804f237a.css","/index-07G-gnit.css":"_assets/e63a574e5633804f237a.css","https://afska.github.io/emudevz/imgui_impl.umd.js":"_assets/b8773e0083ffa1f1caf5.js","/emudevz/imgui_impl.umd.js":"_assets/b8773e0083ffa1f1caf5.js","/imgui_impl.umd.js":"_assets/b8773e0083ffa1f1caf5.js","https://afska.github.io/emudevz/xterm-addon-image.js":"_assets/62f17a2cd801e6f2e4df.js","/emudevz/xterm-addon-image.js":"_assets/62f17a2cd801e6f2e4df.js","/xterm-addon-image.js":"_assets/62f17a2cd801e6f2e4df.js","https://afska.github.io/emudevz/fonts/css.css":"_assets/59bb9e171c3fc68d209b.css","/emudevz/fonts/css.css":"_assets/59bb9e171c3fc68d209b.css","/fonts/css.css":"_assets/59bb9e171c3fc68d209b.css","/css.css":"_assets/59bb9e171c3fc68d209b.css","https://afska.github.io/emudevz/imgui_memory_editor.umd.js":"_assets/b9d289fc9e0553f41358.js","/emudevz/imgui_memory_editor.umd.js":"_assets/b9d289fc9e0553f41358.js","/imgui_memory_editor.umd.js":"_assets/b9d289fc9e0553f41358.js","https://afska.github.io/emudevz/imgui.umd.js":"_assets/c1f0a3dcac7ef8663443.js","/emudevz/imgui.umd.js":"_assets/c1f0a3dcac7ef8663443.js","/imgui.umd.js":"_assets/c1f0a3dcac7ef8663443.js","https://afska.github.io/emudevz/assets/index-C4ouXXIU.js":"_assets/9d3bed542606f06cb454.js","/emudevz/assets/index-C4ouXXIU.js":"_assets/9d3bed542606f06cb454.js","/assets/index-C4ouXXIU.js":"_assets/9d3bed542606f06cb454.js","/index-C4ouXXIU.js":"_assets/9d3bed542606f06cb454.js","https://afska.github.io/emudevz/assets/browserfs-Cqi7exy4.js":"_assets/b3f2f9c39dbe6546bb76.js","/emudevz/assets/browserfs-Cqi7exy4.js":"_assets/b3f2f9c39dbe6546bb76.js","/assets/browserfs-Cqi7exy4.js":"_assets/b3f2f9c39dbe6546bb76.js","/browserfs-Cqi7exy4.js":"_assets/b3f2f9c39dbe6546bb76.js","https://afska.github.io/emudevz/fonts/mem8YaGs126MiZpBA-UFVZ0b.woff2":"_assets/3b98b0dc3bed9d40f43e.woff2","/emudevz/fonts/mem8YaGs126MiZpBA-UFVZ0b.woff2":"_assets/3b98b0dc3bed9d40f43e.woff2","/fonts/mem8YaGs126MiZpBA-UFVZ0b.woff2":"_assets/3b98b0dc3bed9d40f43e.woff2","/mem8YaGs126MiZpBA-UFVZ0b.woff2":"_assets/3b98b0dc3bed9d40f43e.woff2","https://afska.github.io/emudevz/levels/book.json":"_assets/732c10c12e9b33168ccb.json","/emudevz/levels/book.json":"_assets/732c10c12e9b33168ccb.json","/levels/book.json":"_assets/732c10c12e9b33168ccb.json","/book.json":"_assets/732c10c12e9b33168ccb.json","https://afska.github.io/emudevz/assets/logo.png":"_assets/0a67c5c1ba82a87da676.png","/emudevz/assets/logo.png":"_assets/0a67c5c1ba82a87da676.png","/assets/logo.png":"_assets/0a67c5c1ba82a87da676.png","/logo.png":"_assets/0a67c5c1ba82a87da676.png","https://afska.github.io/emudevz/assets/tiling-background.png":"_assets/f9062af7fcd015f0b9fe.png","/emudevz/assets/tiling-background.png":"_assets/f9062af7fcd015f0b9fe.png","/assets/tiling-background.png":"_assets/f9062af7fcd015f0b9fe.png","/tiling-background.png":"_assets/f9062af7fcd015f0b9fe.png"};
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
