(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Random_Advice_Generator/style.css":"_assets/07cee46569dc9a2c4c37.css","/GameZone/Games/Random_Advice_Generator/style.css":"_assets/07cee46569dc9a2c4c37.css","/Games/Random_Advice_Generator/style.css":"_assets/07cee46569dc9a2c4c37.css","/Random_Advice_Generator/style.css":"_assets/07cee46569dc9a2c4c37.css","/style.css":"_assets/07cee46569dc9a2c4c37.css","https://kunjgit.github.io/GameZone/Games/Random_Advice_Generator/images/pattern-divider-desktop.svg":"_assets/7d83d59a8346e0c623cf.svg","/GameZone/Games/Random_Advice_Generator/images/pattern-divider-desktop.svg":"_assets/7d83d59a8346e0c623cf.svg","/Games/Random_Advice_Generator/images/pattern-divider-desktop.svg":"_assets/7d83d59a8346e0c623cf.svg","/Random_Advice_Generator/images/pattern-divider-desktop.svg":"_assets/7d83d59a8346e0c623cf.svg","/images/pattern-divider-desktop.svg":"_assets/7d83d59a8346e0c623cf.svg","/pattern-divider-desktop.svg":"_assets/7d83d59a8346e0c623cf.svg","https://kunjgit.github.io/GameZone/Games/Random_Advice_Generator/images/icon-dice.svg":"_assets/60cce3a89162e382d55b.svg","/GameZone/Games/Random_Advice_Generator/images/icon-dice.svg":"_assets/60cce3a89162e382d55b.svg","/Games/Random_Advice_Generator/images/icon-dice.svg":"_assets/60cce3a89162e382d55b.svg","/Random_Advice_Generator/images/icon-dice.svg":"_assets/60cce3a89162e382d55b.svg","/images/icon-dice.svg":"_assets/60cce3a89162e382d55b.svg","/icon-dice.svg":"_assets/60cce3a89162e382d55b.svg","https://kunjgit.github.io/GameZone/Games/Random_Advice_Generator/index.js":"_assets/f47976a6d06e636db6a5.js","/GameZone/Games/Random_Advice_Generator/index.js":"_assets/f47976a6d06e636db6a5.js","/Games/Random_Advice_Generator/index.js":"_assets/f47976a6d06e636db6a5.js","/Random_Advice_Generator/index.js":"_assets/f47976a6d06e636db6a5.js","/index.js":"_assets/f47976a6d06e636db6a5.js","https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap":"_assets/81fa6031b3087ce953e9.css","/css2":"_assets/81fa6031b3087ce953e9.css","/css2?family=Manrope:wght@200..800&display=swap":"_assets/81fa6031b3087ce953e9.css","https://fonts.googleapis.com/css2":"_assets/81fa6031b3087ce953e9.css","https://fonts.gstatic.com/s/manrope/v23/xn7gYHE41ni1AdIRggexSg.woff2":"_assets/8c2def024c1bf31aacf3.woff2","/s/manrope/v23/xn7gYHE41ni1AdIRggexSg.woff2":"_assets/8c2def024c1bf31aacf3.woff2","/manrope/v23/xn7gYHE41ni1AdIRggexSg.woff2":"_assets/8c2def024c1bf31aacf3.woff2","/v23/xn7gYHE41ni1AdIRggexSg.woff2":"_assets/8c2def024c1bf31aacf3.woff2","/xn7gYHE41ni1AdIRggexSg.woff2":"_assets/8c2def024c1bf31aacf3.woff2"};
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
