(() => {
  "use strict";
  const RUNTIME_MAP = {"https://simon.lc/tetr.js/style.css":"_assets/2ad8220890f7f8e1b11f.css","/tetr.js/style.css":"_assets/2ad8220890f7f8e1b11f.css","/style.css":"_assets/2ad8220890f7f8e1b11f.css","https://simon.lc/tetr.js/tetris.js":"_assets/61b0de1593d4e34055fc.js","/tetr.js/tetris.js":"_assets/61b0de1593d4e34055fc.js","/tetris.js":"_assets/61b0de1593d4e34055fc.js","https://simon.lc/tetr.js/piece.js":"_assets/f7da62abba89e181a4fb.js","/tetr.js/piece.js":"_assets/f7da62abba89e181a4fb.js","/piece.js":"_assets/f7da62abba89e181a4fb.js","https://simon.lc/tetr.js/stack.js":"_assets/91135585220ba40a97df.js","/tetr.js/stack.js":"_assets/91135585220ba40a97df.js","/stack.js":"_assets/91135585220ba40a97df.js","https://simon.lc/tetr.js/hold.js":"_assets/36e01e30f6488e3faff1.js","/tetr.js/hold.js":"_assets/36e01e30f6488e3faff1.js","/hold.js":"_assets/36e01e30f6488e3faff1.js","https://simon.lc/tetr.js/preview.js":"_assets/10a20130266f79d9cb4c.js","/tetr.js/preview.js":"_assets/10a20130266f79d9cb4c.js","/preview.js":"_assets/10a20130266f79d9cb4c.js","https://simon.lc/tetr.js/bg.webm":"_assets/b0feb5abdb37744344cb.html","/tetr.js/bg.webm":"_assets/b0feb5abdb37744344cb.html","/bg.webm":"_assets/b0feb5abdb37744344cb.html","https://simon.lc/tetr.js/bg.js":"_assets/1eb20f1cecb687af95cd.js","/tetr.js/bg.js":"_assets/1eb20f1cecb687af95cd.js","/bg.js":"_assets/1eb20f1cecb687af95cd.js","https://simon.lc/tetr.js/menu.js":"_assets/86153163d87298468def.js","/tetr.js/menu.js":"_assets/86153163d87298468def.js","/menu.js":"_assets/86153163d87298468def.js","https://fonts.gstatic.com/s/sourcesanspro/v9/ODelI1aHBYDBqgeIAH2zlJbPFduIYtoLzwST68uhz_Y.woff2":"_assets/adbbb1570f134e34309f.woff2","/s/sourcesanspro/v9/ODelI1aHBYDBqgeIAH2zlJbPFduIYtoLzwST68uhz_Y.woff2":"_assets/adbbb1570f134e34309f.woff2","/sourcesanspro/v9/ODelI1aHBYDBqgeIAH2zlJbPFduIYtoLzwST68uhz_Y.woff2":"_assets/adbbb1570f134e34309f.woff2","/v9/ODelI1aHBYDBqgeIAH2zlJbPFduIYtoLzwST68uhz_Y.woff2":"_assets/adbbb1570f134e34309f.woff2","/ODelI1aHBYDBqgeIAH2zlJbPFduIYtoLzwST68uhz_Y.woff2":"_assets/adbbb1570f134e34309f.woff2","https://simon.lc/tetr.js/fontawesome-webfont.woff?v=3.0.1":"_assets/10a6772cf6c247b6c855.woff","/tetr.js/fontawesome-webfont.woff":"_assets/10a6772cf6c247b6c855.woff","/tetr.js/fontawesome-webfont.woff?v=3.0.1":"_assets/10a6772cf6c247b6c855.woff","/fontawesome-webfont.woff":"_assets/10a6772cf6c247b6c855.woff","https://simon.lc/tetr.js/fontawesome-webfont.woff":"_assets/10a6772cf6c247b6c855.woff"};
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
