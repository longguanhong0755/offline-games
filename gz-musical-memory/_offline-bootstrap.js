(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Musical_Memory/style.css":"_assets/aa12fafc2b315db96673.css","/GameZone/Games/Musical_Memory/style.css":"_assets/aa12fafc2b315db96673.css","/Games/Musical_Memory/style.css":"_assets/aa12fafc2b315db96673.css","/Musical_Memory/style.css":"_assets/aa12fafc2b315db96673.css","/style.css":"_assets/aa12fafc2b315db96673.css","https://kunjgit.github.io/GameZone/Games/Musical_Memory/script.js":"_assets/c6b5796702d430a365ab.js","/GameZone/Games/Musical_Memory/script.js":"_assets/c6b5796702d430a365ab.js","/Games/Musical_Memory/script.js":"_assets/c6b5796702d430a365ab.js","/Musical_Memory/script.js":"_assets/c6b5796702d430a365ab.js","/script.js":"_assets/c6b5796702d430a365ab.js","https://kunjgit.github.io/GameZone/Games/Musical_Memory/soundsC.wav":"_assets/3e9d9a590a57992f85f5.wav","/GameZone/Games/Musical_Memory/soundsC.wav":"_assets/3e9d9a590a57992f85f5.wav","/Games/Musical_Memory/soundsC.wav":"_assets/3e9d9a590a57992f85f5.wav","/Musical_Memory/soundsC.wav":"_assets/3e9d9a590a57992f85f5.wav","/soundsC.wav":"_assets/3e9d9a590a57992f85f5.wav","https://kunjgit.github.io/GameZone/Games/Musical_Memory/soundsD.wav":"_assets/33d7181de596b9a17546.wav","/GameZone/Games/Musical_Memory/soundsD.wav":"_assets/33d7181de596b9a17546.wav","/Games/Musical_Memory/soundsD.wav":"_assets/33d7181de596b9a17546.wav","/Musical_Memory/soundsD.wav":"_assets/33d7181de596b9a17546.wav","/soundsD.wav":"_assets/33d7181de596b9a17546.wav","https://kunjgit.github.io/GameZone/Games/Musical_Memory/soundsE.wav":"_assets/a5c6c372bba2ebf9fec9.wav","/GameZone/Games/Musical_Memory/soundsE.wav":"_assets/a5c6c372bba2ebf9fec9.wav","/Games/Musical_Memory/soundsE.wav":"_assets/a5c6c372bba2ebf9fec9.wav","/Musical_Memory/soundsE.wav":"_assets/a5c6c372bba2ebf9fec9.wav","/soundsE.wav":"_assets/a5c6c372bba2ebf9fec9.wav","https://kunjgit.github.io/GameZone/Games/Musical_Memory/soundsF.wav":"_assets/0c7088dfac61d128f9cd.wav","/GameZone/Games/Musical_Memory/soundsF.wav":"_assets/0c7088dfac61d128f9cd.wav","/Games/Musical_Memory/soundsF.wav":"_assets/0c7088dfac61d128f9cd.wav","/Musical_Memory/soundsF.wav":"_assets/0c7088dfac61d128f9cd.wav","/soundsF.wav":"_assets/0c7088dfac61d128f9cd.wav","https://kunjgit.github.io/GameZone/Games/Musical_Memory/soundsG.wav":"_assets/bee3bb434f3ed4971f51.wav","/GameZone/Games/Musical_Memory/soundsG.wav":"_assets/bee3bb434f3ed4971f51.wav","/Games/Musical_Memory/soundsG.wav":"_assets/bee3bb434f3ed4971f51.wav","/Musical_Memory/soundsG.wav":"_assets/bee3bb434f3ed4971f51.wav","/soundsG.wav":"_assets/bee3bb434f3ed4971f51.wav","https://kunjgit.github.io/GameZone/Games/Musical_Memory/soundsA.wav":"_assets/6203ad0a7382ad00ed32.wav","/GameZone/Games/Musical_Memory/soundsA.wav":"_assets/6203ad0a7382ad00ed32.wav","/Games/Musical_Memory/soundsA.wav":"_assets/6203ad0a7382ad00ed32.wav","/Musical_Memory/soundsA.wav":"_assets/6203ad0a7382ad00ed32.wav","/soundsA.wav":"_assets/6203ad0a7382ad00ed32.wav","https://kunjgit.github.io/GameZone/Games/Musical_Memory/soundsB.wav":"_assets/7acb6d9895f10923dfc6.wav","/GameZone/Games/Musical_Memory/soundsB.wav":"_assets/7acb6d9895f10923dfc6.wav","/Games/Musical_Memory/soundsB.wav":"_assets/7acb6d9895f10923dfc6.wav","/Musical_Memory/soundsB.wav":"_assets/7acb6d9895f10923dfc6.wav","/soundsB.wav":"_assets/7acb6d9895f10923dfc6.wav"};
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
