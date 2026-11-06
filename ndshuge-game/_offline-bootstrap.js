(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fontsapi.zeoseven.com/570/main/result.css":"_assets/79d8b9088c5846d4b3db.css","/570/main/result.css":"_assets/79d8b9088c5846d4b3db.css","/main/result.css":"_assets/79d8b9088c5846d4b3db.css","/result.css":"_assets/79d8b9088c5846d4b3db.css","https://fontsapi.zeoseven.com/570/main/b99e4f7bbc7a6f3d.woff2":"_assets/da55b6516396105a3499.woff2","/570/main/b99e4f7bbc7a6f3d.woff2":"_assets/da55b6516396105a3499.woff2","/main/b99e4f7bbc7a6f3d.woff2":"_assets/da55b6516396105a3499.woff2","/b99e4f7bbc7a6f3d.woff2":"_assets/da55b6516396105a3499.woff2","https://fontsapi.zeoseven.com/570/main/de74e73659ad9ba9.woff2":"_assets/3ad9b355bba1eca4766f.woff2","/570/main/de74e73659ad9ba9.woff2":"_assets/3ad9b355bba1eca4766f.woff2","/main/de74e73659ad9ba9.woff2":"_assets/3ad9b355bba1eca4766f.woff2","/de74e73659ad9ba9.woff2":"_assets/3ad9b355bba1eca4766f.woff2","https://fontsapi.zeoseven.com/570/main/26a59b6483cd422d.woff2":"_assets/3d5acbd9c7b41e69cf7b.woff2","/570/main/26a59b6483cd422d.woff2":"_assets/3d5acbd9c7b41e69cf7b.woff2","/main/26a59b6483cd422d.woff2":"_assets/3d5acbd9c7b41e69cf7b.woff2","/26a59b6483cd422d.woff2":"_assets/3d5acbd9c7b41e69cf7b.woff2","https://fontsapi.zeoseven.com/570/main/cbf56e609122dade.woff2":"_assets/f3762122682a371c086f.woff2","/570/main/cbf56e609122dade.woff2":"_assets/f3762122682a371c086f.woff2","/main/cbf56e609122dade.woff2":"_assets/f3762122682a371c086f.woff2","/cbf56e609122dade.woff2":"_assets/f3762122682a371c086f.woff2","https://fontsapi.zeoseven.com/570/main/a7cfd960fed4f039.woff2":"_assets/39d9242955929d64c016.woff2","/570/main/a7cfd960fed4f039.woff2":"_assets/39d9242955929d64c016.woff2","/main/a7cfd960fed4f039.woff2":"_assets/39d9242955929d64c016.woff2","/a7cfd960fed4f039.woff2":"_assets/39d9242955929d64c016.woff2","https://fontsapi.zeoseven.com/570/main/b81195c44dc9d92c.woff2":"_assets/e7bd386c649fb621aa79.woff2","/570/main/b81195c44dc9d92c.woff2":"_assets/e7bd386c649fb621aa79.woff2","/main/b81195c44dc9d92c.woff2":"_assets/e7bd386c649fb621aa79.woff2","/b81195c44dc9d92c.woff2":"_assets/e7bd386c649fb621aa79.woff2","https://fontsapi.zeoseven.com/570/main/6ed2b0d2ae38233b.woff2":"_assets/0b9a806a27610076c08d.woff2","/570/main/6ed2b0d2ae38233b.woff2":"_assets/0b9a806a27610076c08d.woff2","/main/6ed2b0d2ae38233b.woff2":"_assets/0b9a806a27610076c08d.woff2","/6ed2b0d2ae38233b.woff2":"_assets/0b9a806a27610076c08d.woff2","https://fontsapi.zeoseven.com/570/main/6b522f3e4dc97247.woff2":"_assets/d17231d29cd0458f25ce.woff2","/570/main/6b522f3e4dc97247.woff2":"_assets/d17231d29cd0458f25ce.woff2","/main/6b522f3e4dc97247.woff2":"_assets/d17231d29cd0458f25ce.woff2","/6b522f3e4dc97247.woff2":"_assets/d17231d29cd0458f25ce.woff2","https://fontsapi.zeoseven.com/570/main/504aafb949a480fe.woff2":"_assets/197b8ee0ebdde2188614.woff2","/570/main/504aafb949a480fe.woff2":"_assets/197b8ee0ebdde2188614.woff2","/main/504aafb949a480fe.woff2":"_assets/197b8ee0ebdde2188614.woff2","/504aafb949a480fe.woff2":"_assets/197b8ee0ebdde2188614.woff2","https://fontsapi.zeoseven.com/570/main/56cbe1f4ea2507ed.woff2":"_assets/0bd881009909f3c595a6.woff2","/570/main/56cbe1f4ea2507ed.woff2":"_assets/0bd881009909f3c595a6.woff2","/main/56cbe1f4ea2507ed.woff2":"_assets/0bd881009909f3c595a6.woff2","/56cbe1f4ea2507ed.woff2":"_assets/0bd881009909f3c595a6.woff2","https://abacus.jasoncameron.dev/get/ndshuge-game/ww2-frontline":"_assets/49c987621f206f09e5fb.json","/get/ndshuge-game/ww2-frontline":"_assets/49c987621f206f09e5fb.json","/ndshuge-game/ww2-frontline":"_assets/49c987621f206f09e5fb.json","/ww2-frontline":"_assets/49c987621f206f09e5fb.json"};
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
