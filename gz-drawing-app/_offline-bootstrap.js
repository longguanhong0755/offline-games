(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Drawing_app/style.css":"_assets/40862fa2ce6778fa1072.css","/GameZone/Games/Drawing_app/style.css":"_assets/40862fa2ce6778fa1072.css","/Games/Drawing_app/style.css":"_assets/40862fa2ce6778fa1072.css","/Drawing_app/style.css":"_assets/40862fa2ce6778fa1072.css","/style.css":"_assets/40862fa2ce6778fa1072.css","https://kunjgit.github.io/GameZone/Games/Drawing_app/script.js":"_assets/bbde6e118776fcefc80e.js","/GameZone/Games/Drawing_app/script.js":"_assets/bbde6e118776fcefc80e.js","/Games/Drawing_app/script.js":"_assets/bbde6e118776fcefc80e.js","/Drawing_app/script.js":"_assets/bbde6e118776fcefc80e.js","/script.js":"_assets/bbde6e118776fcefc80e.js","https://kunjgit.github.io/GameZone/Games/Drawing_app/icons/rectangle.svg":"_assets/32ae6c8bbe78d4083743.svg","/GameZone/Games/Drawing_app/icons/rectangle.svg":"_assets/32ae6c8bbe78d4083743.svg","/Games/Drawing_app/icons/rectangle.svg":"_assets/32ae6c8bbe78d4083743.svg","/Drawing_app/icons/rectangle.svg":"_assets/32ae6c8bbe78d4083743.svg","/icons/rectangle.svg":"_assets/32ae6c8bbe78d4083743.svg","/rectangle.svg":"_assets/32ae6c8bbe78d4083743.svg","https://kunjgit.github.io/GameZone/Games/Drawing_app/icons/circle.svg":"_assets/4a5ea069f2d89291fb65.svg","/GameZone/Games/Drawing_app/icons/circle.svg":"_assets/4a5ea069f2d89291fb65.svg","/Games/Drawing_app/icons/circle.svg":"_assets/4a5ea069f2d89291fb65.svg","/Drawing_app/icons/circle.svg":"_assets/4a5ea069f2d89291fb65.svg","/icons/circle.svg":"_assets/4a5ea069f2d89291fb65.svg","/circle.svg":"_assets/4a5ea069f2d89291fb65.svg","https://kunjgit.github.io/GameZone/Games/Drawing_app/icons/triangle.svg":"_assets/2103d314b40879af55c7.svg","/GameZone/Games/Drawing_app/icons/triangle.svg":"_assets/2103d314b40879af55c7.svg","/Games/Drawing_app/icons/triangle.svg":"_assets/2103d314b40879af55c7.svg","/Drawing_app/icons/triangle.svg":"_assets/2103d314b40879af55c7.svg","/icons/triangle.svg":"_assets/2103d314b40879af55c7.svg","/triangle.svg":"_assets/2103d314b40879af55c7.svg","https://kunjgit.github.io/GameZone/Games/Drawing_app/icons/brush.svg":"_assets/f51e4322b1932f833d21.svg","/GameZone/Games/Drawing_app/icons/brush.svg":"_assets/f51e4322b1932f833d21.svg","/Games/Drawing_app/icons/brush.svg":"_assets/f51e4322b1932f833d21.svg","/Drawing_app/icons/brush.svg":"_assets/f51e4322b1932f833d21.svg","/icons/brush.svg":"_assets/f51e4322b1932f833d21.svg","/brush.svg":"_assets/f51e4322b1932f833d21.svg","https://kunjgit.github.io/GameZone/Games/Drawing_app/icons/eraser.svg":"_assets/0b951f690ab33a82ea1b.svg","/GameZone/Games/Drawing_app/icons/eraser.svg":"_assets/0b951f690ab33a82ea1b.svg","/Games/Drawing_app/icons/eraser.svg":"_assets/0b951f690ab33a82ea1b.svg","/Drawing_app/icons/eraser.svg":"_assets/0b951f690ab33a82ea1b.svg","/icons/eraser.svg":"_assets/0b951f690ab33a82ea1b.svg","/eraser.svg":"_assets/0b951f690ab33a82ea1b.svg","https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap":"_assets/7bf21c44d0aae76eae4a.css","/css2":"_assets/7bf21c44d0aae76eae4a.css","/css2?family=Poppins:wght@400;500;600&display=swap":"_assets/7bf21c44d0aae76eae4a.css","https://fonts.googleapis.com/css2":"_assets/7bf21c44d0aae76eae4a.css","https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2"};
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
