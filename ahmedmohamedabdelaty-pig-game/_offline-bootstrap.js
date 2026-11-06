(() => {
  "use strict";
  const RUNTIME_MAP = {"https://ahmedmohamedabdelaty.github.io/Pig-Game/script.js":"_assets/f0f49d9ec16d86e2e55a.js","/Pig-Game/script.js":"_assets/f0f49d9ec16d86e2e55a.js","/script.js":"_assets/f0f49d9ec16d86e2e55a.js","https://ahmedmohamedabdelaty.github.io/Pig-Game/dice-5.png":"_assets/6f42a6a39a5ac0b31560.png","/Pig-Game/dice-5.png":"_assets/6f42a6a39a5ac0b31560.png","/dice-5.png":"_assets/6f42a6a39a5ac0b31560.png","https://ahmedmohamedabdelaty.github.io/Pig-Game/style.css":"_assets/9f24755a48fd08790520.css","/Pig-Game/style.css":"_assets/9f24755a48fd08790520.css","/style.css":"_assets/9f24755a48fd08790520.css","https://fonts.googleapis.com/css2?family=Nunito&display=swap":"_assets/9fae38b834b0a19a388f.css","/css2":"_assets/9fae38b834b0a19a388f.css","/css2?family=Nunito&display=swap":"_assets/9fae38b834b0a19a388f.css","https://fonts.googleapis.com/css2":"_assets/9fae38b834b0a19a388f.css","https://fonts.gstatic.com/s/nunito/v32/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTQ3jw.woff2":"_assets/a5906e15ceb68f73d3b2.woff2","/s/nunito/v32/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTQ3jw.woff2":"_assets/a5906e15ceb68f73d3b2.woff2","/nunito/v32/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTQ3jw.woff2":"_assets/a5906e15ceb68f73d3b2.woff2","/v32/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTQ3jw.woff2":"_assets/a5906e15ceb68f73d3b2.woff2","/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTQ3jw.woff2":"_assets/a5906e15ceb68f73d3b2.woff2"};
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
