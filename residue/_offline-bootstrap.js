(() => {
  "use strict";
  const RUNTIME_MAP = {"https://marwinburesch.github.io/residue/styles.css":"_assets/fdc0e57e0e6b2e05d997.css","/residue/styles.css":"_assets/fdc0e57e0e6b2e05d997.css","/styles.css":"_assets/fdc0e57e0e6b2e05d997.css","https://marwinburesch.github.io/residue/main.js":"_assets/adfd091d885ad12c9432.js","/residue/main.js":"_assets/adfd091d885ad12c9432.js","/main.js":"_assets/adfd091d885ad12c9432.js","https://marwinburesch.github.io/residue/global.css":"_assets/7ea4629165b56758c3c3.css","/residue/global.css":"_assets/7ea4629165b56758c3c3.css","/global.css":"_assets/7ea4629165b56758c3c3.css","https://marwinburesch.github.io/residue/layout.css":"_assets/ae44e752bccc8aa15571.css","/residue/layout.css":"_assets/ae44e752bccc8aa15571.css","/layout.css":"_assets/ae44e752bccc8aa15571.css","https://marwinburesch.github.io/residue/button.css":"_assets/7e2e8161135f4017552a.css","/residue/button.css":"_assets/7e2e8161135f4017552a.css","/button.css":"_assets/7e2e8161135f4017552a.css","https://marwinburesch.github.io/residue/log.css":"_assets/a4842f1dbab639664945.css","/residue/log.css":"_assets/a4842f1dbab639664945.css","/log.css":"_assets/a4842f1dbab639664945.css","https://marwinburesch.github.io/residue/resourceBar.css":"_assets/2a07131ca02a1c9b5594.css","/residue/resourceBar.css":"_assets/2a07131ca02a1c9b5594.css","/resourceBar.css":"_assets/2a07131ca02a1c9b5594.css","https://marwinburesch.github.io/residue/automationsPanel.css":"_assets/ee3436bd1e44b4ef4423.css","/residue/automationsPanel.css":"_assets/ee3436bd1e44b4ef4423.css","/automationsPanel.css":"_assets/ee3436bd1e44b4ef4423.css","https://marwinburesch.github.io/residue/bootScreen.css":"_assets/bf93b49b7c4e7382844f.css","/residue/bootScreen.css":"_assets/bf93b49b7c4e7382844f.css","/bootScreen.css":"_assets/bf93b49b7c4e7382844f.css","https://marwinburesch.github.io/residue/fragmentBrowser.css":"_assets/a3f31784bbf399a52ed6.css","/residue/fragmentBrowser.css":"_assets/a3f31784bbf399a52ed6.css","/fragmentBrowser.css":"_assets/a3f31784bbf399a52ed6.css","https://marwinburesch.github.io/residue/upgradePanel.css":"_assets/2688f284003c8a665d43.css","/residue/upgradePanel.css":"_assets/2688f284003c8a665d43.css","/upgradePanel.css":"_assets/2688f284003c8a665d43.css","https://marwinburesch.github.io/residue/profileRegistry.css":"_assets/75c3c290ad9f44a8f2e7.css","/residue/profileRegistry.css":"_assets/75c3c290ad9f44a8f2e7.css","/profileRegistry.css":"_assets/75c3c290ad9f44a8f2e7.css","https://marwinburesch.github.io/residue/overflowMenu.css":"_assets/ffd8aacb88d0cc1605a1.css","/residue/overflowMenu.css":"_assets/ffd8aacb88d0cc1605a1.css","/overflowMenu.css":"_assets/ffd8aacb88d0cc1605a1.css","https://marwinburesch.github.io/residue/stageTransition.css":"_assets/e2c690130bbaca247b90.css","/residue/stageTransition.css":"_assets/e2c690130bbaca247b90.css","/stageTransition.css":"_assets/e2c690130bbaca247b90.css","https://marwinburesch.github.io/residue/auditModal.css":"_assets/a5cc2107c14be5bfa39b.css","/residue/auditModal.css":"_assets/a5cc2107c14be5bfa39b.css","/auditModal.css":"_assets/a5cc2107c14be5bfa39b.css"};
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
