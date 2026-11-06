(() => {
  "use strict";
  const RUNTIME_MAP = {"https://nhunter0.github.io/NHCoinMiningGame/styles.css":"_assets/ce1d3d7f525fc4908b78.css","/NHCoinMiningGame/styles.css":"_assets/ce1d3d7f525fc4908b78.css","/styles.css":"_assets/ce1d3d7f525fc4908b78.css","https://nhunter0.github.io/NHCoinMiningGame/style-mobile.css":"_assets/174587a06b0065b67825.css","/NHCoinMiningGame/style-mobile.css":"_assets/174587a06b0065b67825.css","/style-mobile.css":"_assets/174587a06b0065b67825.css","https://nhunter0.github.io/NHCoinMiningGame/crypto.js":"_assets/52d088ecaf2ecee6eaaa.js","/NHCoinMiningGame/crypto.js":"_assets/52d088ecaf2ecee6eaaa.js","/crypto.js":"_assets/52d088ecaf2ecee6eaaa.js","https://nhunter0.github.io/NHCoinMiningGame/blockchain.js":"_assets/ab47628f1c2d59d1bdcc.js","/NHCoinMiningGame/blockchain.js":"_assets/ab47628f1c2d59d1bdcc.js","/blockchain.js":"_assets/ab47628f1c2d59d1bdcc.js","https://nhunter0.github.io/NHCoinMiningGame/game.js":"_assets/eb8ff90ea947d0a3ffe3.js","/NHCoinMiningGame/game.js":"_assets/eb8ff90ea947d0a3ffe3.js","/game.js":"_assets/eb8ff90ea947d0a3ffe3.js","https://cdn.jsdelivr.net/npm/chart.js":"_assets/87364cc2b2a76a668492.js","/npm/chart.js":"_assets/87364cc2b2a76a668492.js","/chart.js":"_assets/87364cc2b2a76a668492.js","https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js":"_assets/5a07c69f9061eb12e39a.js","/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js":"_assets/5a07c69f9061eb12e39a.js","/@popperjs/core@2.9.2/dist/umd/popper.min.js":"_assets/5a07c69f9061eb12e39a.js","/core@2.9.2/dist/umd/popper.min.js":"_assets/5a07c69f9061eb12e39a.js","/dist/umd/popper.min.js":"_assets/5a07c69f9061eb12e39a.js","/umd/popper.min.js":"_assets/5a07c69f9061eb12e39a.js","/popper.min.js":"_assets/5a07c69f9061eb12e39a.js","https://code.jquery.com/jquery-3.5.1.slim.min.js":"_assets/e3e5f35d586c0e6a9a9d.js","/jquery-3.5.1.slim.min.js":"_assets/e3e5f35d586c0e6a9a9d.js","https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js":"_assets/79c599dd760cec0c1621.js","/bootstrap/4.5.2/js/bootstrap.min.js":"_assets/79c599dd760cec0c1621.js","/4.5.2/js/bootstrap.min.js":"_assets/79c599dd760cec0c1621.js","/js/bootstrap.min.js":"_assets/79c599dd760cec0c1621.js","/bootstrap.min.js":"_assets/79c599dd760cec0c1621.js","https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css":"_assets/5b0fbe5b7ad705f6a937.css","/bootstrap/4.5.2/css/bootstrap.min.css":"_assets/5b0fbe5b7ad705f6a937.css","/4.5.2/css/bootstrap.min.css":"_assets/5b0fbe5b7ad705f6a937.css","/css/bootstrap.min.css":"_assets/5b0fbe5b7ad705f6a937.css","/bootstrap.min.css":"_assets/5b0fbe5b7ad705f6a937.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css"};
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
