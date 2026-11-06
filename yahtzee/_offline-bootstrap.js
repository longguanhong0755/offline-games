(() => {
  "use strict";
  const RUNTIME_MAP = {"https://mahmudnibir.github.io/Yahtzee/styles.css":"_assets/9736fab39652d3b5acf5.css","/Yahtzee/styles.css":"_assets/9736fab39652d3b5acf5.css","/styles.css":"_assets/9736fab39652d3b5acf5.css","https://mahmudnibir.github.io/Yahtzee/js/hammer.min.js":"_assets/55ffe374e08045960134.js","/Yahtzee/js/hammer.min.js":"_assets/55ffe374e08045960134.js","/js/hammer.min.js":"_assets/55ffe374e08045960134.js","/hammer.min.js":"_assets/55ffe374e08045960134.js","https://mahmudnibir.github.io/Yahtzee/js/scoring.js":"_assets/62ebf94368f61be8b7a3.js","/Yahtzee/js/scoring.js":"_assets/62ebf94368f61be8b7a3.js","/js/scoring.js":"_assets/62ebf94368f61be8b7a3.js","/scoring.js":"_assets/62ebf94368f61be8b7a3.js","https://mahmudnibir.github.io/Yahtzee/js/yahtzee.js":"_assets/df94afb4c1b6892de2e8.js","/Yahtzee/js/yahtzee.js":"_assets/df94afb4c1b6892de2e8.js","/js/yahtzee.js":"_assets/df94afb4c1b6892de2e8.js","/yahtzee.js":"_assets/df94afb4c1b6892de2e8.js","https://mahmudnibir.github.io/Yahtzee/js/hammer-time.min.js":"_assets/55bd04adbac13f9906b1.js","/Yahtzee/js/hammer-time.min.js":"_assets/55bd04adbac13f9906b1.js","/js/hammer-time.min.js":"_assets/55bd04adbac13f9906b1.js","/hammer-time.min.js":"_assets/55bd04adbac13f9906b1.js","https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css":"_assets/ddd92f10ad162c7449ef.css","/font-awesome/4.5.0/css/font-awesome.min.css":"_assets/ddd92f10ad162c7449ef.css","/4.5.0/css/font-awesome.min.css":"_assets/ddd92f10ad162c7449ef.css","/css/font-awesome.min.css":"_assets/ddd92f10ad162c7449ef.css","/font-awesome.min.css":"_assets/ddd92f10ad162c7449ef.css","https://fonts.googleapis.com/css?family=Lato:400,700|Patrick+Hand|Fredoka+One":"_assets/2652700f1872a124e433.css","/css":"_assets/2652700f1872a124e433.css","/css?family=Lato:400,700|Patrick+Hand|Fredoka+One":"_assets/2652700f1872a124e433.css","https://fonts.googleapis.com/css":"_assets/2652700f1872a124e433.css","https://mahmudnibir.github.io/Yahtzee/images/green-dust-and-scratches.png":"_assets/4d9c0b05c4c248afef3a.png","/Yahtzee/images/green-dust-and-scratches.png":"_assets/4d9c0b05c4c248afef3a.png","/images/green-dust-and-scratches.png":"_assets/4d9c0b05c4c248afef3a.png","/green-dust-and-scratches.png":"_assets/4d9c0b05c4c248afef3a.png","https://mahmudnibir.github.io/Yahtzee/images/wood-bg.jpg":"_assets/86861f4afa4dbf40e821.jpg","/Yahtzee/images/wood-bg.jpg":"_assets/86861f4afa4dbf40e821.jpg","/images/wood-bg.jpg":"_assets/86861f4afa4dbf40e821.jpg","/wood-bg.jpg":"_assets/86861f4afa4dbf40e821.jpg","https://fonts.gstatic.com/s/lato/v25/S6u9w4BMUTPHh6UVSwiPGQ.woff2":"_assets/c447dd7677b419db7b21.woff2","/s/lato/v25/S6u9w4BMUTPHh6UVSwiPGQ.woff2":"_assets/c447dd7677b419db7b21.woff2","/lato/v25/S6u9w4BMUTPHh6UVSwiPGQ.woff2":"_assets/c447dd7677b419db7b21.woff2","/v25/S6u9w4BMUTPHh6UVSwiPGQ.woff2":"_assets/c447dd7677b419db7b21.woff2","/S6u9w4BMUTPHh6UVSwiPGQ.woff2":"_assets/c447dd7677b419db7b21.woff2","https://mahmudnibir.github.io/Yahtzee/images/table-logo.png":"_assets/7514a2ec8059f3a69527.png","/Yahtzee/images/table-logo.png":"_assets/7514a2ec8059f3a69527.png","/images/table-logo.png":"_assets/7514a2ec8059f3a69527.png","/table-logo.png":"_assets/7514a2ec8059f3a69527.png","https://mahmudnibir.github.io/Yahtzee/images/velvet-bg.jpg":"_assets/a45f4fcbe7b0fd5a3472.jpg","/Yahtzee/images/velvet-bg.jpg":"_assets/a45f4fcbe7b0fd5a3472.jpg","/images/velvet-bg.jpg":"_assets/a45f4fcbe7b0fd5a3472.jpg","/velvet-bg.jpg":"_assets/a45f4fcbe7b0fd5a3472.jpg","https://mahmudnibir.github.io/Yahtzee/images/black-felt.png":"_assets/96ea9e54c5e14af27f41.png","/Yahtzee/images/black-felt.png":"_assets/96ea9e54c5e14af27f41.png","/images/black-felt.png":"_assets/96ea9e54c5e14af27f41.png","/black-felt.png":"_assets/96ea9e54c5e14af27f41.png","https://fonts.gstatic.com/s/lato/v25/S6uyw4BMUTPHjx4wXg.woff2":"_assets/918b7dc3e2e2d015c16c.woff2","/s/lato/v25/S6uyw4BMUTPHjx4wXg.woff2":"_assets/918b7dc3e2e2d015c16c.woff2","/lato/v25/S6uyw4BMUTPHjx4wXg.woff2":"_assets/918b7dc3e2e2d015c16c.woff2","/v25/S6uyw4BMUTPHjx4wXg.woff2":"_assets/918b7dc3e2e2d015c16c.woff2","/S6uyw4BMUTPHjx4wXg.woff2":"_assets/918b7dc3e2e2d015c16c.woff2","https://fonts.gstatic.com/s/fredokaone/v15/k3kUo8kEI-tA1RRcTZGmTlHGCac.woff2":"_assets/e9986c62b19bce3791c4.woff2","/s/fredokaone/v15/k3kUo8kEI-tA1RRcTZGmTlHGCac.woff2":"_assets/e9986c62b19bce3791c4.woff2","/fredokaone/v15/k3kUo8kEI-tA1RRcTZGmTlHGCac.woff2":"_assets/e9986c62b19bce3791c4.woff2","/v15/k3kUo8kEI-tA1RRcTZGmTlHGCac.woff2":"_assets/e9986c62b19bce3791c4.woff2","/k3kUo8kEI-tA1RRcTZGmTlHGCac.woff2":"_assets/e9986c62b19bce3791c4.woff2","https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/fonts/fontawesome-webfont.woff2?v=4.5.0":"_assets/ff82aeed6b9bb6701696.woff2","/font-awesome/4.5.0/fonts/fontawesome-webfont.woff2":"_assets/ff82aeed6b9bb6701696.woff2","/font-awesome/4.5.0/fonts/fontawesome-webfont.woff2?v=4.5.0":"_assets/ff82aeed6b9bb6701696.woff2","/4.5.0/fonts/fontawesome-webfont.woff2":"_assets/ff82aeed6b9bb6701696.woff2","/fonts/fontawesome-webfont.woff2":"_assets/ff82aeed6b9bb6701696.woff2","/fontawesome-webfont.woff2":"_assets/ff82aeed6b9bb6701696.woff2","https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/fonts/fontawesome-webfont.woff2":"_assets/ff82aeed6b9bb6701696.woff2"};
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
