(() => {
  "use strict";
  const RUNTIME_MAP = {"https://dogeminerce.com/play/js/parity-test-storage.js?v=70":"_assets/0ed1b902b47357fa0fbf.js","/play/js/parity-test-storage.js":"_assets/0ed1b902b47357fa0fbf.js","/play/js/parity-test-storage.js?v=70":"_assets/0ed1b902b47357fa0fbf.js","/js/parity-test-storage.js":"_assets/0ed1b902b47357fa0fbf.js","/parity-test-storage.js":"_assets/0ed1b902b47357fa0fbf.js","https://dogeminerce.com/play/js/parity-test-storage.js":"_assets/0ed1b902b47357fa0fbf.js","https://dogeminerce.com/play/assets/backgrounds/bg1.webp":"_assets/3a9d307bda4c9683e74b.webp","/play/assets/backgrounds/bg1.webp":"_assets/3a9d307bda4c9683e74b.webp","/assets/backgrounds/bg1.webp":"_assets/3a9d307bda4c9683e74b.webp","/backgrounds/bg1.webp":"_assets/3a9d307bda4c9683e74b.webp","/bg1.webp":"_assets/3a9d307bda4c9683e74b.webp","https://dogeminerce.com/play/assets/backgrounds/bg3.webp":"_assets/8f83456cec2a55681933.webp","/play/assets/backgrounds/bg3.webp":"_assets/8f83456cec2a55681933.webp","/assets/backgrounds/bg3.webp":"_assets/8f83456cec2a55681933.webp","/backgrounds/bg3.webp":"_assets/8f83456cec2a55681933.webp","/bg3.webp":"_assets/8f83456cec2a55681933.webp","https://dogeminerce.com/play/js/balance-data.js?v=2":"_assets/dad68490db1a19ca6f70.js","/play/js/balance-data.js":"_assets/dad68490db1a19ca6f70.js","/play/js/balance-data.js?v=2":"_assets/dad68490db1a19ca6f70.js","/js/balance-data.js":"_assets/dad68490db1a19ca6f70.js","/balance-data.js":"_assets/dad68490db1a19ca6f70.js","https://dogeminerce.com/play/js/balance-data.js":"_assets/dad68490db1a19ca6f70.js","https://dogeminerce.com/play/assets/backgrounds/bg6.webp":"_assets/33d0dd5c59d06914d871.webp","/play/assets/backgrounds/bg6.webp":"_assets/33d0dd5c59d06914d871.webp","/assets/backgrounds/bg6.webp":"_assets/33d0dd5c59d06914d871.webp","/backgrounds/bg6.webp":"_assets/33d0dd5c59d06914d871.webp","/bg6.webp":"_assets/33d0dd5c59d06914d871.webp","https://dogeminerce.com/play/assets/backgrounds/bg9.webp":"_assets/abc3f0241fb27aca816d.webp","/play/assets/backgrounds/bg9.webp":"_assets/abc3f0241fb27aca816d.webp","/assets/backgrounds/bg9.webp":"_assets/abc3f0241fb27aca816d.webp","/backgrounds/bg9.webp":"_assets/abc3f0241fb27aca816d.webp","/bg9.webp":"_assets/abc3f0241fb27aca816d.webp","https://dogeminerce.com/play/assets/backgrounds/bg7.webp":"_assets/6ae9f4d062992512f4e8.webp","/play/assets/backgrounds/bg7.webp":"_assets/6ae9f4d062992512f4e8.webp","/assets/backgrounds/bg7.webp":"_assets/6ae9f4d062992512f4e8.webp","/backgrounds/bg7.webp":"_assets/6ae9f4d062992512f4e8.webp","/bg7.webp":"_assets/6ae9f4d062992512f4e8.webp","https://dogeminerce.com/play/assets/backgrounds/bg-new.webp":"_assets/82ce58dae17223733c4e.webp","/play/assets/backgrounds/bg-new.webp":"_assets/82ce58dae17223733c4e.webp","/assets/backgrounds/bg-new.webp":"_assets/82ce58dae17223733c4e.webp","/backgrounds/bg-new.webp":"_assets/82ce58dae17223733c4e.webp","/bg-new.webp":"_assets/82ce58dae17223733c4e.webp","https://dogeminerce.com/assets/discord-title.webp":"_assets/0d65955255d43a02f57d.webp","/assets/discord-title.webp":"_assets/0d65955255d43a02f57d.webp","/discord-title.webp":"_assets/0d65955255d43a02f57d.webp","https://dogeminerce.com/assets/titlepagelogo.webp":"_assets/c8cfb42a20f09798b10e.webp","/assets/titlepagelogo.webp":"_assets/c8cfb42a20f09798b10e.webp","/titlepagelogo.webp":"_assets/c8cfb42a20f09798b10e.webp","https://dogeminerce.com/play/dogesans/DogeSansVF.ttf":"_assets/6436e62913263f64c155.ttf","/play/dogesans/DogeSansVF.ttf":"_assets/6436e62913263f64c155.ttf","/dogesans/DogeSansVF.ttf":"_assets/6436e62913263f64c155.ttf","/DogeSansVF.ttf":"_assets/6436e62913263f64c155.ttf","https://dogeminerce.com/play/dogesans/DogeSans-Normal.otf":"_assets/a6166ef49a7fcd3e1c52.otf","/play/dogesans/DogeSans-Normal.otf":"_assets/a6166ef49a7fcd3e1c52.otf","/dogesans/DogeSans-Normal.otf":"_assets/a6166ef49a7fcd3e1c52.otf","/DogeSans-Normal.otf":"_assets/a6166ef49a7fcd3e1c52.otf","https://dogeminerce.com/play/assets/backgrounds/bg4.webp":"_assets/d67f786a139b481213d5.webp","/play/assets/backgrounds/bg4.webp":"_assets/d67f786a139b481213d5.webp","/assets/backgrounds/bg4.webp":"_assets/d67f786a139b481213d5.webp","/backgrounds/bg4.webp":"_assets/d67f786a139b481213d5.webp","/bg4.webp":"_assets/d67f786a139b481213d5.webp","https://dogeminerce.com/play/assets/backgrounds/bg5.webp":"_assets/c56ecb50eac672164555.webp","/play/assets/backgrounds/bg5.webp":"_assets/c56ecb50eac672164555.webp","/assets/backgrounds/bg5.webp":"_assets/c56ecb50eac672164555.webp","/backgrounds/bg5.webp":"_assets/c56ecb50eac672164555.webp","/bg5.webp":"_assets/c56ecb50eac672164555.webp","https://dogeminerce.com/play/js/seasonal.js?v=2":"_assets/3633e5b390d0f9a430a6.js","/play/js/seasonal.js":"_assets/3633e5b390d0f9a430a6.js","/play/js/seasonal.js?v=2":"_assets/3633e5b390d0f9a430a6.js","/js/seasonal.js":"_assets/3633e5b390d0f9a430a6.js","/seasonal.js":"_assets/3633e5b390d0f9a430a6.js","https://dogeminerce.com/play/js/seasonal.js":"_assets/3633e5b390d0f9a430a6.js","https://dogeminerce.com/play/js/layout.js?v=3":"_assets/2d351086d3f20649185f.js","/play/js/layout.js":"_assets/2d351086d3f20649185f.js","/play/js/layout.js?v=3":"_assets/2d351086d3f20649185f.js","/js/layout.js":"_assets/2d351086d3f20649185f.js","/layout.js":"_assets/2d351086d3f20649185f.js","https://dogeminerce.com/play/js/layout.js":"_assets/2d351086d3f20649185f.js","https://dogeminerce.com/play/js/balance.js?v=4":"_assets/36d9a065ea96af2a3483.js","/play/js/balance.js":"_assets/36d9a065ea96af2a3483.js","/play/js/balance.js?v=4":"_assets/36d9a065ea96af2a3483.js","/js/balance.js":"_assets/36d9a065ea96af2a3483.js","/balance.js":"_assets/36d9a065ea96af2a3483.js","https://dogeminerce.com/play/js/balance.js":"_assets/36d9a065ea96af2a3483.js","https://dogeminerce.com/play/js/dm2-import-data.js?v=1":"_assets/ee9f196395dc84f4756a.js","/play/js/dm2-import-data.js":"_assets/ee9f196395dc84f4756a.js","/play/js/dm2-import-data.js?v=1":"_assets/ee9f196395dc84f4756a.js","/js/dm2-import-data.js":"_assets/ee9f196395dc84f4756a.js","/dm2-import-data.js":"_assets/ee9f196395dc84f4756a.js","https://dogeminerce.com/play/js/dm2-import-data.js":"_assets/ee9f196395dc84f4756a.js","https://dogeminerce.com/play/js/beta-migration.js?v=1":"_assets/0a6add65a1ed16a29b67.js","/play/js/beta-migration.js":"_assets/0a6add65a1ed16a29b67.js","/play/js/beta-migration.js?v=1":"_assets/0a6add65a1ed16a29b67.js","/js/beta-migration.js":"_assets/0a6add65a1ed16a29b67.js","/beta-migration.js":"_assets/0a6add65a1ed16a29b67.js","https://dogeminerce.com/play/js/beta-migration.js":"_assets/0a6add65a1ed16a29b67.js","https://dogeminerce.com/play/js/landing-save.js?v=1":"_assets/0ea1fd7c27c95c4363d9.js","/play/js/landing-save.js":"_assets/0ea1fd7c27c95c4363d9.js","/play/js/landing-save.js?v=1":"_assets/0ea1fd7c27c95c4363d9.js","/js/landing-save.js":"_assets/0ea1fd7c27c95c4363d9.js","/landing-save.js":"_assets/0ea1fd7c27c95c4363d9.js","https://dogeminerce.com/play/js/landing-save.js":"_assets/0ea1fd7c27c95c4363d9.js","https://dogeminerce.com/play/js/lz-string.js?v=1":"_assets/2952f84f834957576ad8.js","/play/js/lz-string.js":"_assets/2952f84f834957576ad8.js","/play/js/lz-string.js?v=1":"_assets/2952f84f834957576ad8.js","/js/lz-string.js":"_assets/2952f84f834957576ad8.js","/lz-string.js":"_assets/2952f84f834957576ad8.js","https://dogeminerce.com/play/js/lz-string.js":"_assets/2952f84f834957576ad8.js","https://dogeminerce.com/play/js/dm2-import.js?v=5":"_assets/50950c6d6405c42540b9.js","/play/js/dm2-import.js":"_assets/50950c6d6405c42540b9.js","/play/js/dm2-import.js?v=5":"_assets/50950c6d6405c42540b9.js","/js/dm2-import.js":"_assets/50950c6d6405c42540b9.js","/dm2-import.js":"_assets/50950c6d6405c42540b9.js","https://dogeminerce.com/play/js/dm2-import.js":"_assets/50950c6d6405c42540b9.js"};
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
