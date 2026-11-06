(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/keySymphony/style1.css":"_assets/09685299d1d51809e863.css","/GameZone/Games/keySymphony/style1.css":"_assets/09685299d1d51809e863.css","/Games/keySymphony/style1.css":"_assets/09685299d1d51809e863.css","/keySymphony/style1.css":"_assets/09685299d1d51809e863.css","/style1.css":"_assets/09685299d1d51809e863.css","https://kunjgit.github.io/GameZone/Games/keySymphony/index1.js":"_assets/e9aa00c2fbcdda7a7d99.js","/GameZone/Games/keySymphony/index1.js":"_assets/e9aa00c2fbcdda7a7d99.js","/Games/keySymphony/index1.js":"_assets/e9aa00c2fbcdda7a7d99.js","/keySymphony/index1.js":"_assets/e9aa00c2fbcdda7a7d99.js","/index1.js":"_assets/e9aa00c2fbcdda7a7d99.js","https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap":"_assets/e4fb0f6358ab16ff3aad.css","/css2":"_assets/e4fb0f6358ab16ff3aad.css","/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap":"_assets/e4fb0f6358ab16ff3aad.css","https://fonts.googleapis.com/css2":"_assets/e4fb0f6358ab16ff3aad.css","https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","/s/poppins/v24/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","/poppins/v24/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","/v24/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2","/s/poppins/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2","/poppins/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2","/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2","/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2"};
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
