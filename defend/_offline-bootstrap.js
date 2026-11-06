(() => {
  "use strict";
  const RUNTIME_MAP = {"https://xtreemze.github.io/defend/assets/site-CW_q9Uiq.js":"_assets/4e0380f4de7e3163ddb9.js","/defend/assets/site-CW_q9Uiq.js":"_assets/4e0380f4de7e3163ddb9.js","/assets/site-CW_q9Uiq.js":"_assets/4e0380f4de7e3163ddb9.js","/site-CW_q9Uiq.js":"_assets/4e0380f4de7e3163ddb9.js","https://xtreemze.github.io/defend/assets/preload-helper-hpglN2L9.js":"_assets/b6e6ff953c8075b77809.js","/defend/assets/preload-helper-hpglN2L9.js":"_assets/b6e6ff953c8075b77809.js","/assets/preload-helper-hpglN2L9.js":"_assets/b6e6ff953c8075b77809.js","/preload-helper-hpglN2L9.js":"_assets/b6e6ff953c8075b77809.js","https://xtreemze.github.io/timeline/project-site/project-site.css":"_assets/8cdc4701034314295eef.css","/timeline/project-site/project-site.css":"_assets/8cdc4701034314295eef.css","/project-site/project-site.css":"_assets/8cdc4701034314295eef.css","/project-site.css":"_assets/8cdc4701034314295eef.css","https://xtreemze.github.io/defend/assets/site-Ci0320Hy.css":"_assets/a43cfb9555940be6a507.css","/defend/assets/site-Ci0320Hy.css":"_assets/a43cfb9555940be6a507.css","/assets/site-Ci0320Hy.css":"_assets/a43cfb9555940be6a507.css","/site-Ci0320Hy.css":"_assets/a43cfb9555940be6a507.css","https://xtreemze.github.io/defend/showcase/desktop/05-towers-and-terrain.avif":"_assets/9d50bcb274552df15f43.avif","/defend/showcase/desktop/05-towers-and-terrain.avif":"_assets/9d50bcb274552df15f43.avif","/showcase/desktop/05-towers-and-terrain.avif":"_assets/9d50bcb274552df15f43.avif","/desktop/05-towers-and-terrain.avif":"_assets/9d50bcb274552df15f43.avif","/05-towers-and-terrain.avif":"_assets/9d50bcb274552df15f43.avif","https://xtreemze.github.io/defend/showcase/desktop/01-deterministic-arena.avif":"_assets/3d731ae34366ad5a76e0.avif","/defend/showcase/desktop/01-deterministic-arena.avif":"_assets/3d731ae34366ad5a76e0.avif","/showcase/desktop/01-deterministic-arena.avif":"_assets/3d731ae34366ad5a76e0.avif","/desktop/01-deterministic-arena.avif":"_assets/3d731ae34366ad5a76e0.avif","/01-deterministic-arena.avif":"_assets/3d731ae34366ad5a76e0.avif","https://xtreemze.github.io/defend/showcase/desktop/05-towers-and-terrain.webm":"_assets/21fb70fe3b7fe1f0d127.webm","/defend/showcase/desktop/05-towers-and-terrain.webm":"_assets/21fb70fe3b7fe1f0d127.webm","/showcase/desktop/05-towers-and-terrain.webm":"_assets/21fb70fe3b7fe1f0d127.webm","/desktop/05-towers-and-terrain.webm":"_assets/21fb70fe3b7fe1f0d127.webm","/05-towers-and-terrain.webm":"_assets/21fb70fe3b7fe1f0d127.webm","https://xtreemze.github.io/timeline/project-site/xtreemze-project-site.js":"_assets/61c5a9efbcf7bf0b9a85.js","/timeline/project-site/xtreemze-project-site.js":"_assets/61c5a9efbcf7bf0b9a85.js","/project-site/xtreemze-project-site.js":"_assets/61c5a9efbcf7bf0b9a85.js","/xtreemze-project-site.js":"_assets/61c5a9efbcf7bf0b9a85.js","https://xtreemze.github.io/defend/showcase/desktop/01-deterministic-arena.webm":"_assets/64433916be010c2c25cb.webm","/defend/showcase/desktop/01-deterministic-arena.webm":"_assets/64433916be010c2c25cb.webm","/showcase/desktop/01-deterministic-arena.webm":"_assets/64433916be010c2c25cb.webm","/desktop/01-deterministic-arena.webm":"_assets/64433916be010c2c25cb.webm","/01-deterministic-arena.webm":"_assets/64433916be010c2c25cb.webm"};
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
