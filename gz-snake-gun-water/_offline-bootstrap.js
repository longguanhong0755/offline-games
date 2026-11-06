(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Snake_Gun_Water/static/css/swg.css":"_assets/acf149057dbe271655e6.css","/GameZone/Games/Snake_Gun_Water/static/css/swg.css":"_assets/acf149057dbe271655e6.css","/Games/Snake_Gun_Water/static/css/swg.css":"_assets/acf149057dbe271655e6.css","/Snake_Gun_Water/static/css/swg.css":"_assets/acf149057dbe271655e6.css","/static/css/swg.css":"_assets/acf149057dbe271655e6.css","/css/swg.css":"_assets/acf149057dbe271655e6.css","/swg.css":"_assets/acf149057dbe271655e6.css","https://kunjgit.github.io/GameZone/Games/Snake_Gun_Water/static/images/snake.jpg":"_assets/6ccd4e0d1bbe0fc4d015.jpg","/GameZone/Games/Snake_Gun_Water/static/images/snake.jpg":"_assets/6ccd4e0d1bbe0fc4d015.jpg","/Games/Snake_Gun_Water/static/images/snake.jpg":"_assets/6ccd4e0d1bbe0fc4d015.jpg","/Snake_Gun_Water/static/images/snake.jpg":"_assets/6ccd4e0d1bbe0fc4d015.jpg","/static/images/snake.jpg":"_assets/6ccd4e0d1bbe0fc4d015.jpg","/images/snake.jpg":"_assets/6ccd4e0d1bbe0fc4d015.jpg","/snake.jpg":"_assets/6ccd4e0d1bbe0fc4d015.jpg","https://kunjgit.github.io/GameZone/Games/Snake_Gun_Water/static/images/gun.jpg":"_assets/45c84df5b5451b8fc0c8.jpg","/GameZone/Games/Snake_Gun_Water/static/images/gun.jpg":"_assets/45c84df5b5451b8fc0c8.jpg","/Games/Snake_Gun_Water/static/images/gun.jpg":"_assets/45c84df5b5451b8fc0c8.jpg","/Snake_Gun_Water/static/images/gun.jpg":"_assets/45c84df5b5451b8fc0c8.jpg","/static/images/gun.jpg":"_assets/45c84df5b5451b8fc0c8.jpg","/images/gun.jpg":"_assets/45c84df5b5451b8fc0c8.jpg","/gun.jpg":"_assets/45c84df5b5451b8fc0c8.jpg","https://kunjgit.github.io/GameZone/Games/Snake_Gun_Water/static/images/water.jpg":"_assets/23856a964ab3233d36a5.jpg","/GameZone/Games/Snake_Gun_Water/static/images/water.jpg":"_assets/23856a964ab3233d36a5.jpg","/Games/Snake_Gun_Water/static/images/water.jpg":"_assets/23856a964ab3233d36a5.jpg","/Snake_Gun_Water/static/images/water.jpg":"_assets/23856a964ab3233d36a5.jpg","/static/images/water.jpg":"_assets/23856a964ab3233d36a5.jpg","/images/water.jpg":"_assets/23856a964ab3233d36a5.jpg","/water.jpg":"_assets/23856a964ab3233d36a5.jpg","https://kunjgit.github.io/GameZone/Games/Snake_Gun_Water/static/js/swg.js":"_assets/feec844b6b25fc05e3ad.js","/GameZone/Games/Snake_Gun_Water/static/js/swg.js":"_assets/feec844b6b25fc05e3ad.js","/Games/Snake_Gun_Water/static/js/swg.js":"_assets/feec844b6b25fc05e3ad.js","/Snake_Gun_Water/static/js/swg.js":"_assets/feec844b6b25fc05e3ad.js","/static/js/swg.js":"_assets/feec844b6b25fc05e3ad.js","/js/swg.js":"_assets/feec844b6b25fc05e3ad.js","/swg.js":"_assets/feec844b6b25fc05e3ad.js","https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap":"_assets/e73984f860d7c91d060d.css","/css2":"_assets/fc3540e49246301121c7.css","/css2?family=Fredoka+One&display=swap":"_assets/e73984f860d7c91d060d.css","https://fonts.googleapis.com/css2":"_assets/fc3540e49246301121c7.css","https://fonts.googleapis.com/css2?family=Baloo+2:wght@700&display=swap":"_assets/c349ae0a1ee9227d52b2.css","/css2?family=Baloo+2:wght@700&display=swap":"_assets/c349ae0a1ee9227d52b2.css","https://fonts.googleapis.com/css2?family=Acme&display=swap":"_assets/09791618809a196e4ee7.css","/css2?family=Acme&display=swap":"_assets/09791618809a196e4ee7.css","https://fonts.googleapis.com/css2?family=Lobster&display=swap":"_assets/34ae3835cb3e9eb7356e.css","/css2?family=Lobster&display=swap":"_assets/34ae3835cb3e9eb7356e.css","https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@800&display=swap":"_assets/fc3540e49246301121c7.css","/css2?family=Roboto+Slab:wght@800&display=swap":"_assets/fc3540e49246301121c7.css","https://fonts.gstatic.com/s/fredokaone/v15/k3kUo8kEI-tA1RRcTZGmTlHGCac.woff2":"_assets/e9986c62b19bce3791c4.woff2","/s/fredokaone/v15/k3kUo8kEI-tA1RRcTZGmTlHGCac.woff2":"_assets/e9986c62b19bce3791c4.woff2","/fredokaone/v15/k3kUo8kEI-tA1RRcTZGmTlHGCac.woff2":"_assets/e9986c62b19bce3791c4.woff2","/v15/k3kUo8kEI-tA1RRcTZGmTlHGCac.woff2":"_assets/e9986c62b19bce3791c4.woff2","/k3kUo8kEI-tA1RRcTZGmTlHGCac.woff2":"_assets/e9986c62b19bce3791c4.woff2"};
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
