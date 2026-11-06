(() => {
  "use strict";
  const RUNTIME_MAP = {"https://alisoglu.com/tools/_assets/experience-PzfTIuCR.js":"_assets/b3751b3cb83e3c678290.js","/tools/_assets/experience-PzfTIuCR.js":"_assets/b3751b3cb83e3c678290.js","/_assets/experience-PzfTIuCR.js":"_assets/b3751b3cb83e3c678290.js","/experience-PzfTIuCR.js":"_assets/b3751b3cb83e3c678290.js","https://alisoglu.com/tools/_assets/modulepreload-polyfill-P2Xu9kJm.js":"_assets/418c206484b89b68ef5f.js","/tools/_assets/modulepreload-polyfill-P2Xu9kJm.js":"_assets/418c206484b89b68ef5f.js","/_assets/modulepreload-polyfill-P2Xu9kJm.js":"_assets/418c206484b89b68ef5f.js","/modulepreload-polyfill-P2Xu9kJm.js":"_assets/418c206484b89b68ef5f.js","https://alisoglu.com/tools/_assets/experience-DONyxrBn.css":"_assets/5e2a05f0d20b2b08a98f.css","/tools/_assets/experience-DONyxrBn.css":"_assets/5e2a05f0d20b2b08a98f.css","/_assets/experience-DONyxrBn.css":"_assets/5e2a05f0d20b2b08a98f.css","/experience-DONyxrBn.css":"_assets/5e2a05f0d20b2b08a98f.css","https://alisoglu.com/tools/_assets/fileforge-DskdPXNy.jpg":"_assets/aef007381565144997f1.jpg","/tools/_assets/fileforge-DskdPXNy.jpg":"_assets/aef007381565144997f1.jpg","/_assets/fileforge-DskdPXNy.jpg":"_assets/aef007381565144997f1.jpg","/fileforge-DskdPXNy.jpg":"_assets/aef007381565144997f1.jpg","https://alisoglu.com/tools/_assets/repodock-dashboard-C20oltJ6.png":"_assets/0043952737527a9397ab.png","/tools/_assets/repodock-dashboard-C20oltJ6.png":"_assets/0043952737527a9397ab.png","/_assets/repodock-dashboard-C20oltJ6.png":"_assets/0043952737527a9397ab.png","/repodock-dashboard-C20oltJ6.png":"_assets/0043952737527a9397ab.png"};
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
