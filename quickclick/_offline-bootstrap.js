(() => {
  "use strict";
  const RUNTIME_MAP = {"https://bazzerdv.github.io/quickclick/scripts/animations.js":"_assets/239b1c75942903c14f63.js","/quickclick/scripts/animations.js":"_assets/239b1c75942903c14f63.js","/scripts/animations.js":"_assets/239b1c75942903c14f63.js","/animations.js":"_assets/239b1c75942903c14f63.js","https://bazzerdv.github.io/quickclick/scripts/prestige.js":"_assets/77dba69318d3e2db9b45.js","/quickclick/scripts/prestige.js":"_assets/77dba69318d3e2db9b45.js","/scripts/prestige.js":"_assets/77dba69318d3e2db9b45.js","/prestige.js":"_assets/77dba69318d3e2db9b45.js","https://bazzerdv.github.io/quickclick/scripts/runtime.js":"_assets/62e10250c6212f48ccb1.js","/quickclick/scripts/runtime.js":"_assets/62e10250c6212f48ccb1.js","/scripts/runtime.js":"_assets/62e10250c6212f48ccb1.js","/runtime.js":"_assets/62e10250c6212f48ccb1.js","https://bazzerdv.github.io/quickclick/scripts/shown.js":"_assets/b69edbb1abe2a6a44afd.js","/quickclick/scripts/shown.js":"_assets/b69edbb1abe2a6a44afd.js","/scripts/shown.js":"_assets/b69edbb1abe2a6a44afd.js","/shown.js":"_assets/b69edbb1abe2a6a44afd.js","https://bazzerdv.github.io/quickclick/scripts/autoclickers.js":"_assets/bcd2857d8c27a0df2d38.js","/quickclick/scripts/autoclickers.js":"_assets/bcd2857d8c27a0df2d38.js","/scripts/autoclickers.js":"_assets/bcd2857d8c27a0df2d38.js","/autoclickers.js":"_assets/bcd2857d8c27a0df2d38.js","https://bazzerdv.github.io/quickclick/scripts/abbreviate.js":"_assets/8701c0be0ba7cb8e88ad.js","/quickclick/scripts/abbreviate.js":"_assets/8701c0be0ba7cb8e88ad.js","/scripts/abbreviate.js":"_assets/8701c0be0ba7cb8e88ad.js","/abbreviate.js":"_assets/8701c0be0ba7cb8e88ad.js","https://bazzerdv.github.io/quickclick/scripts/clicks.js":"_assets/742e3e21039194081ea2.js","/quickclick/scripts/clicks.js":"_assets/742e3e21039194081ea2.js","/scripts/clicks.js":"_assets/742e3e21039194081ea2.js","/clicks.js":"_assets/742e3e21039194081ea2.js","https://bazzerdv.github.io/quickclick/styles.css":"_assets/4d6e6b339f1e651e98ec.css","/quickclick/styles.css":"_assets/4d6e6b339f1e651e98ec.css","/styles.css":"_assets/4d6e6b339f1e651e98ec.css","https://bazzerdv.github.io/quickclick/scripts/main.js":"_assets/7894d2cbe77be9abdc32.js","/quickclick/scripts/main.js":"_assets/7894d2cbe77be9abdc32.js","/scripts/main.js":"_assets/7894d2cbe77be9abdc32.js","/main.js":"_assets/7894d2cbe77be9abdc32.js","https://bazzerdv.github.io/quickclick/scripts/load.js":"_assets/a74e23c5b1fca4ed8720.js","/quickclick/scripts/load.js":"_assets/a74e23c5b1fca4ed8720.js","/scripts/load.js":"_assets/a74e23c5b1fca4ed8720.js","/load.js":"_assets/a74e23c5b1fca4ed8720.js","https://bazzerdv.github.io/quickclick/scripts/reset.js":"_assets/4a69d3f3b9290bb59536.js","/quickclick/scripts/reset.js":"_assets/4a69d3f3b9290bb59536.js","/scripts/reset.js":"_assets/4a69d3f3b9290bb59536.js","/reset.js":"_assets/4a69d3f3b9290bb59536.js","https://bazzerdv.github.io/quickclick/scripts/redirect.js":"_assets/4d506a799a9ba4e82a79.js","/quickclick/scripts/redirect.js":"_assets/4d506a799a9ba4e82a79.js","/scripts/redirect.js":"_assets/4d506a799a9ba4e82a79.js","/redirect.js":"_assets/4d506a799a9ba4e82a79.js","https://bazzerdv.github.io/quickclick/scripts/save.js":"_assets/8ad8c3c337f1c95092f9.js","/quickclick/scripts/save.js":"_assets/8ad8c3c337f1c95092f9.js","/scripts/save.js":"_assets/8ad8c3c337f1c95092f9.js","/save.js":"_assets/8ad8c3c337f1c95092f9.js"};
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
