(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/HangMan/style.css":"_assets/5dcf13381fe66434e79c.css","/GameZone/Games/HangMan/style.css":"_assets/5dcf13381fe66434e79c.css","/Games/HangMan/style.css":"_assets/5dcf13381fe66434e79c.css","/HangMan/style.css":"_assets/5dcf13381fe66434e79c.css","/style.css":"_assets/5dcf13381fe66434e79c.css","https://kunjgit.github.io/GameZone/Games/HangMan/scripts/word-list.js":"_assets/22b9c541859fe68f60ad.js","/GameZone/Games/HangMan/scripts/word-list.js":"_assets/22b9c541859fe68f60ad.js","/Games/HangMan/scripts/word-list.js":"_assets/22b9c541859fe68f60ad.js","/HangMan/scripts/word-list.js":"_assets/22b9c541859fe68f60ad.js","/scripts/word-list.js":"_assets/22b9c541859fe68f60ad.js","/word-list.js":"_assets/22b9c541859fe68f60ad.js","https://kunjgit.github.io/GameZone/Games/HangMan/scripts/script.js":"_assets/57a5305a68c45753ae2a.js","/GameZone/Games/HangMan/scripts/script.js":"_assets/57a5305a68c45753ae2a.js","/Games/HangMan/scripts/script.js":"_assets/57a5305a68c45753ae2a.js","/HangMan/scripts/script.js":"_assets/57a5305a68c45753ae2a.js","/scripts/script.js":"_assets/57a5305a68c45753ae2a.js","/script.js":"_assets/57a5305a68c45753ae2a.js","https://kunjgit.github.io/GameZone/Games/HangMan/index.html":"_assets/0c86375bbbeffd8a8842.html","/GameZone/Games/HangMan/index.html":"_assets/0c86375bbbeffd8a8842.html","/Games/HangMan/index.html":"_assets/0c86375bbbeffd8a8842.html","/HangMan/index.html":"_assets/0c86375bbbeffd8a8842.html","/index.html":"_assets/0c86375bbbeffd8a8842.html","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css":"_assets/81735261671cd094376c.css","/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css":"_assets/81735261671cd094376c.css","/libs/font-awesome/6.0.0-beta2/css/all.min.css":"_assets/81735261671cd094376c.css","/font-awesome/6.0.0-beta2/css/all.min.css":"_assets/81735261671cd094376c.css","/6.0.0-beta2/css/all.min.css":"_assets/81735261671cd094376c.css","https://fonts.googleapis.com/css?family=Press+Start+2P":"_assets/199b7a17da5eddf72d5d.css","/css":"_assets/199b7a17da5eddf72d5d.css","/css?family=Press+Start+2P":"_assets/199b7a17da5eddf72d5d.css","https://fonts.googleapis.com/css":"_assets/199b7a17da5eddf72d5d.css","https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap":"_assets/80c7eb2cd4b832ca6655.css","/css2":"_assets/80c7eb2cd4b832ca6655.css","/css2?family=Open+Sans:wght@400;500;600;700&display=swap":"_assets/80c7eb2cd4b832ca6655.css","https://fonts.googleapis.com/css2":"_assets/80c7eb2cd4b832ca6655.css","https://kunjgit.github.io/GameZone/Games/HangMan/images/hangman-0.svg":"_assets/5c4709e489ac19474161.svg","/GameZone/Games/HangMan/images/hangman-0.svg":"_assets/5c4709e489ac19474161.svg","/Games/HangMan/images/hangman-0.svg":"_assets/5c4709e489ac19474161.svg","/HangMan/images/hangman-0.svg":"_assets/5c4709e489ac19474161.svg","/images/hangman-0.svg":"_assets/5c4709e489ac19474161.svg","/hangman-0.svg":"_assets/5c4709e489ac19474161.svg","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://fonts.gstatic.com/s/opensans/v44/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2":"_assets/d8e4fe0452aa2076429a.woff2","/s/opensans/v44/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2":"_assets/d8e4fe0452aa2076429a.woff2","/opensans/v44/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2":"_assets/d8e4fe0452aa2076429a.woff2","/v44/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2":"_assets/d8e4fe0452aa2076429a.woff2","/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2":"_assets/d8e4fe0452aa2076429a.woff2"};
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
