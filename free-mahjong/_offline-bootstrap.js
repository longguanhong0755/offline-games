(() => {
  "use strict";
  const RUNTIME_MAP = {"https://g.w3technic.com/games/free-mahjong/runtime.js":"_assets/842dae3916c2dca7c58a.js","/games/free-mahjong/runtime.js":"_assets/842dae3916c2dca7c58a.js","/free-mahjong/runtime.js":"_assets/842dae3916c2dca7c58a.js","/runtime.js":"_assets/842dae3916c2dca7c58a.js","https://g.w3technic.com/games/free-mahjong/polyfills.js":"_assets/0d78d05bcbebb6b308f8.js","/games/free-mahjong/polyfills.js":"_assets/0d78d05bcbebb6b308f8.js","/free-mahjong/polyfills.js":"_assets/0d78d05bcbebb6b308f8.js","/polyfills.js":"_assets/0d78d05bcbebb6b308f8.js","https://g.w3technic.com/games/free-mahjong/styles.css":"_assets/8d1159cd1f2c372a279d.css","/games/free-mahjong/styles.css":"_assets/8d1159cd1f2c372a279d.css","/free-mahjong/styles.css":"_assets/8d1159cd1f2c372a279d.css","/styles.css":"_assets/8d1159cd1f2c372a279d.css","https://g.w3technic.com/games/free-mahjong/mah.woff2?89414241":"_assets/05920ef704a42be356d7.woff2","/games/free-mahjong/mah.woff2":"_assets/05920ef704a42be356d7.woff2","/games/free-mahjong/mah.woff2?89414241":"_assets/05920ef704a42be356d7.woff2","/free-mahjong/mah.woff2":"_assets/05920ef704a42be356d7.woff2","/mah.woff2":"_assets/05920ef704a42be356d7.woff2","https://g.w3technic.com/games/free-mahjong/mah.woff2":"_assets/05920ef704a42be356d7.woff2","https://g.w3technic.com/games/free-mahjong/kulim-park-v4-latin-ext_latin-regular.woff2":"_assets/bd4d57151e9351a5cf40.woff2","/games/free-mahjong/kulim-park-v4-latin-ext_latin-regular.woff2":"_assets/bd4d57151e9351a5cf40.woff2","/free-mahjong/kulim-park-v4-latin-ext_latin-regular.woff2":"_assets/bd4d57151e9351a5cf40.woff2","/kulim-park-v4-latin-ext_latin-regular.woff2":"_assets/bd4d57151e9351a5cf40.woff2","https://g.w3technic.com/games/free-mahjong/main.js":"_assets/08e4974db45a5678747d.js","/games/free-mahjong/main.js":"_assets/08e4974db45a5678747d.js","/free-mahjong/main.js":"_assets/08e4974db45a5678747d.js","/main.js":"_assets/08e4974db45a5678747d.js","https://g.w3technic.com/games/free-mahjong/assets/data/boards.json":"_assets/bee645bb1b45bb59b871.json","/games/free-mahjong/assets/data/boards.json":"_assets/bee645bb1b45bb59b871.json","/free-mahjong/assets/data/boards.json":"_assets/bee645bb1b45bb59b871.json","/assets/data/boards.json":"_assets/bee645bb1b45bb59b871.json","/data/boards.json":"_assets/bee645bb1b45bb59b871.json","/boards.json":"_assets/bee645bb1b45bb59b871.json","https://g.w3technic.com/games/free-mahjong/assets/svg/riichi.svg":"_assets/df0bf779eeed9052978f.svg","/games/free-mahjong/assets/svg/riichi.svg":"_assets/df0bf779eeed9052978f.svg","/free-mahjong/assets/svg/riichi.svg":"_assets/df0bf779eeed9052978f.svg","/assets/svg/riichi.svg":"_assets/df0bf779eeed9052978f.svg","/svg/riichi.svg":"_assets/df0bf779eeed9052978f.svg","/riichi.svg":"_assets/df0bf779eeed9052978f.svg"};
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

  // Neutralize every external link, including links created by the game at runtime.
  function offlineNeutralizeLink(anchor) {
    if (!anchor || !anchor.getAttribute) return;
    const raw = anchor.getAttribute("href");
    if (!raw) return;
    try {
      const target = new URL(raw, document.baseURI);
      if (target.origin !== location.origin) {
        anchor.removeAttribute("href");
        anchor.removeAttribute("target");
        anchor.style.pointerEvents = "none";
      }
    } catch (_) {}
  }
  function offlineScanLinks(root) {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll("a[href]").forEach(offlineNeutralizeLink);
    if (root.matches && root.matches("a[href]")) offlineNeutralizeLink(root);
  }
  document.addEventListener("DOMContentLoaded", () => offlineScanLinks(document), { once: true });
  new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === "attributes") offlineNeutralizeLink(record.target);
      for (const node of record.addedNodes || []) offlineScanLinks(node);
    }
  }).observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ["href"] });

})();
