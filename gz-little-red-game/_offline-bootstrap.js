(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Little_Red_Game/style.css":"_assets/3cbdd664f1618c7cfada.css","/GameZone/Games/Little_Red_Game/style.css":"_assets/3cbdd664f1618c7cfada.css","/Games/Little_Red_Game/style.css":"_assets/3cbdd664f1618c7cfada.css","/Little_Red_Game/style.css":"_assets/3cbdd664f1618c7cfada.css","/style.css":"_assets/3cbdd664f1618c7cfada.css","https://kunjgit.github.io/GameZone/Games/Little_Red_Game/script.js":"_assets/f529a8f5a8ba54d25408.js","/GameZone/Games/Little_Red_Game/script.js":"_assets/f529a8f5a8ba54d25408.js","/Games/Little_Red_Game/script.js":"_assets/f529a8f5a8ba54d25408.js","/Little_Red_Game/script.js":"_assets/f529a8f5a8ba54d25408.js","/script.js":"_assets/f529a8f5a8ba54d25408.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://contentservice.mc.reyrey.net/image_v1.0.0/?id=82ce74de-2ee9-538a-8d46-847baabc0bb9&637841816771503502":"_assets/c4a13ac00313fbdaf61a.gif","/image_v1.0.0/":"_assets/a2ef47909de2a93fe2ea.gif","/image_v1.0.0/?id=82ce74de-2ee9-538a-8d46-847baabc0bb9&637841816771503502":"_assets/c4a13ac00313fbdaf61a.gif","https://contentservice.mc.reyrey.net/image_v1.0.0/":"_assets/a2ef47909de2a93fe2ea.gif","https://contentservice.mc.reyrey.net/image_v1.0.0/?id=b16e4a8c-50f2-5a37-9160-440e06930231&637842505143316679":"_assets/1dd0cac5ef6770b1dee2.gif","/image_v1.0.0/?id=b16e4a8c-50f2-5a37-9160-440e06930231&637842505143316679":"_assets/1dd0cac5ef6770b1dee2.gif","https://contentservice.mc.reyrey.net/image_v1.0.0/?id=31443f5d-f35d-58f9-88c7-bcf62204c12d&637841683951382692":"_assets/cd1772ee14b8952d156f.gif","/image_v1.0.0/?id=31443f5d-f35d-58f9-88c7-bcf62204c12d&637841683951382692":"_assets/cd1772ee14b8952d156f.gif","https://contentservice.mc.reyrey.net/image_v1.0.0/?id=062fe994-9ec5-5e69-971f-5513398c4c94&637842577058095458":"_assets/854a775c545334260349.gif","/image_v1.0.0/?id=062fe994-9ec5-5e69-971f-5513398c4c94&637842577058095458":"_assets/854a775c545334260349.gif","https://contentservice.mc.reyrey.net/image_v1.0.0/?id=c8970346-1486-500b-87e3-48eebe85d658&637841862844818412":"_assets/af5f56b856ce14a8b61c.gif","/image_v1.0.0/?id=c8970346-1486-500b-87e3-48eebe85d658&637841862844818412":"_assets/af5f56b856ce14a8b61c.gif","https://contentservice.mc.reyrey.net/image_v1.0.0/?id=612564dc-bd2a-5259-bc30-b96859c91e7c&637842481669797365":"_assets/a2ef47909de2a93fe2ea.gif","/image_v1.0.0/?id=612564dc-bd2a-5259-bc30-b96859c91e7c&637842481669797365":"_assets/a2ef47909de2a93fe2ea.gif"};
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
