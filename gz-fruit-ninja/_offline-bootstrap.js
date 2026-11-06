(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;700&display=swap":"_assets/45449b9d147c6f46c675.css","/css2":"_assets/45449b9d147c6f46c675.css","/css2?family=Montserrat:wght@100;700&display=swap":"_assets/45449b9d147c6f46c675.css","https://fonts.googleapis.com/css2":"_assets/45449b9d147c6f46c675.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://kunjgit.github.io/GameZone/Games/Fruit_Ninja/assets/home_page_assets/temple.jpeg":"_assets/1b0a94aa2c4b3c1d074d.jpg","/GameZone/Games/Fruit_Ninja/assets/home_page_assets/temple.jpeg":"_assets/1b0a94aa2c4b3c1d074d.jpg","/Games/Fruit_Ninja/assets/home_page_assets/temple.jpeg":"_assets/1b0a94aa2c4b3c1d074d.jpg","/Fruit_Ninja/assets/home_page_assets/temple.jpeg":"_assets/1b0a94aa2c4b3c1d074d.jpg","/assets/home_page_assets/temple.jpeg":"_assets/1b0a94aa2c4b3c1d074d.jpg","/home_page_assets/temple.jpeg":"_assets/1b0a94aa2c4b3c1d074d.jpg","/temple.jpeg":"_assets/1b0a94aa2c4b3c1d074d.jpg","https://kunjgit.github.io/GameZone/Games/Fruit_Ninja/assets/home_page_assets/Fruit-Ninja-Katsuro.png":"_assets/e91cc280628d472ea940.png","/GameZone/Games/Fruit_Ninja/assets/home_page_assets/Fruit-Ninja-Katsuro.png":"_assets/e91cc280628d472ea940.png","/Games/Fruit_Ninja/assets/home_page_assets/Fruit-Ninja-Katsuro.png":"_assets/e91cc280628d472ea940.png","/Fruit_Ninja/assets/home_page_assets/Fruit-Ninja-Katsuro.png":"_assets/e91cc280628d472ea940.png","/assets/home_page_assets/Fruit-Ninja-Katsuro.png":"_assets/e91cc280628d472ea940.png","/home_page_assets/Fruit-Ninja-Katsuro.png":"_assets/e91cc280628d472ea940.png","/Fruit-Ninja-Katsuro.png":"_assets/e91cc280628d472ea940.png","https://kunjgit.github.io/GameZone/Games/Fruit_Ninja/style.css":"_assets/76aeab09e1f5e9aadd26.css","/GameZone/Games/Fruit_Ninja/style.css":"_assets/76aeab09e1f5e9aadd26.css","/Games/Fruit_Ninja/style.css":"_assets/76aeab09e1f5e9aadd26.css","/Fruit_Ninja/style.css":"_assets/76aeab09e1f5e9aadd26.css","/style.css":"_assets/76aeab09e1f5e9aadd26.css","https://kunjgit.github.io/GameZone/Games/Fruit_Ninja/assets/home_page_assets/logo.png":"_assets/b82d580d74678c962d52.png","/GameZone/Games/Fruit_Ninja/assets/home_page_assets/logo.png":"_assets/b82d580d74678c962d52.png","/Games/Fruit_Ninja/assets/home_page_assets/logo.png":"_assets/b82d580d74678c962d52.png","/Fruit_Ninja/assets/home_page_assets/logo.png":"_assets/b82d580d74678c962d52.png","/assets/home_page_assets/logo.png":"_assets/b82d580d74678c962d52.png","/home_page_assets/logo.png":"_assets/b82d580d74678c962d52.png","/logo.png":"_assets/b82d580d74678c962d52.png","https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2":"_assets/06b16db7a969135d48d3.woff2","/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2":"_assets/06b16db7a969135d48d3.woff2","/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2":"_assets/06b16db7a969135d48d3.woff2","/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2":"_assets/06b16db7a969135d48d3.woff2","/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2":"_assets/06b16db7a969135d48d3.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2"};
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
