(() => {
  "use strict";
  const RUNTIME_MAP = {"https://aymaan-hs.github.io/crossy-road/script.js":"_assets/f4a0879104f33ec666a2.js","/crossy-road/script.js":"_assets/f4a0879104f33ec666a2.js","/script.js":"_assets/f4a0879104f33ec666a2.js","https://aymaan-hs.github.io/crossy-road/style.css":"_assets/a2908a9a02906a9af368.css","/crossy-road/style.css":"_assets/a2908a9a02906a9af368.css","/style.css":"_assets/a2908a9a02906a9af368.css","https://esm.sh/three":"_assets/8b791806e29f82dda800.js","/three":"_assets/8b791806e29f82dda800.js","https://fonts.googleapis.com/css?family=Press+Start+2P":"_assets/199b7a17da5eddf72d5d.css","/css":"_assets/199b7a17da5eddf72d5d.css","/css?family=Press+Start+2P":"_assets/199b7a17da5eddf72d5d.css","https://fonts.googleapis.com/css":"_assets/199b7a17da5eddf72d5d.css","https://esm.sh/three@0.187.0/es2022/build/three.core.mjs":"_assets/e721e22493a4a77a4594.js","/three@0.187.0/es2022/build/three.core.mjs":"_assets/e721e22493a4a77a4594.js","/es2022/build/three.core.mjs":"_assets/e721e22493a4a77a4594.js","/build/three.core.mjs":"_assets/e721e22493a4a77a4594.js","/three.core.mjs":"_assets/e721e22493a4a77a4594.js","https://esm.sh/three@0.187.0/es2022/three.mjs":"_assets/2026591f4cd93413ad09.js","/three@0.187.0/es2022/three.mjs":"_assets/2026591f4cd93413ad09.js","/es2022/three.mjs":"_assets/2026591f4cd93413ad09.js","/three.mjs":"_assets/2026591f4cd93413ad09.js"};
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
