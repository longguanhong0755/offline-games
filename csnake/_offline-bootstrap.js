(() => {
  "use strict";
  const RUNTIME_MAP = {"https://michelebucelli.github.io/csnake/ifvisible.min.js":"_assets/da87c0f1e49af529768f.js","/csnake/ifvisible.min.js":"_assets/da87c0f1e49af529768f.js","/ifvisible.min.js":"_assets/da87c0f1e49af529768f.js","https://michelebucelli.github.io/csnake/github.png":"_assets/2495121b685778bd251e.png","/csnake/github.png":"_assets/2495121b685778bd251e.png","/github.png":"_assets/2495121b685778bd251e.png","https://fonts.googleapis.com/css?family=Varela+Round":"_assets/7cc1603a99bfee28a414.css","/css":"_assets/7cc1603a99bfee28a414.css","/css?family=Varela+Round":"_assets/7cc1603a99bfee28a414.css","https://fonts.googleapis.com/css":"_assets/7cc1603a99bfee28a414.css","https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js":"_assets/8af93bd675e1cfd9ecc8.js","/ajax/libs/jquery/2.1.3/jquery.min.js":"_assets/8af93bd675e1cfd9ecc8.js","/libs/jquery/2.1.3/jquery.min.js":"_assets/8af93bd675e1cfd9ecc8.js","/jquery/2.1.3/jquery.min.js":"_assets/8af93bd675e1cfd9ecc8.js","/2.1.3/jquery.min.js":"_assets/8af93bd675e1cfd9ecc8.js","/jquery.min.js":"_assets/8af93bd675e1cfd9ecc8.js","https://fonts.gstatic.com/s/varelaround/v21/w8gdH283Tvk__Lua32TysjIfp8uP.woff2":"_assets/03871f86c86fc776f89d.woff2","/s/varelaround/v21/w8gdH283Tvk__Lua32TysjIfp8uP.woff2":"_assets/03871f86c86fc776f89d.woff2","/varelaround/v21/w8gdH283Tvk__Lua32TysjIfp8uP.woff2":"_assets/03871f86c86fc776f89d.woff2","/v21/w8gdH283Tvk__Lua32TysjIfp8uP.woff2":"_assets/03871f86c86fc776f89d.woff2","/w8gdH283Tvk__Lua32TysjIfp8uP.woff2":"_assets/03871f86c86fc776f89d.woff2"};
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
