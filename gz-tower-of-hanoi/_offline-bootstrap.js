(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap":"_assets/a40de2785872cf41cbd2.css","/css2":"_assets/a40de2785872cf41cbd2.css","/css2?family=Poetsen+One&display=swap":"_assets/a40de2785872cf41cbd2.css","https://fonts.googleapis.com/css2":"_assets/a40de2785872cf41cbd2.css","https://kunjgit.github.io/GameZone/Games/Tower_Of_Hanoi/style.css":"_assets/4cb912d0af170d6d0648.css","/GameZone/Games/Tower_Of_Hanoi/style.css":"_assets/4cb912d0af170d6d0648.css","/Games/Tower_Of_Hanoi/style.css":"_assets/4cb912d0af170d6d0648.css","/Tower_Of_Hanoi/style.css":"_assets/4cb912d0af170d6d0648.css","/style.css":"_assets/4cb912d0af170d6d0648.css","https://kunjgit.github.io/GameZone/Games/Tower_Of_Hanoi/script.js":"_assets/bff2fb2fb64bdd3f2278.js","/GameZone/Games/Tower_Of_Hanoi/script.js":"_assets/bff2fb2fb64bdd3f2278.js","/Games/Tower_Of_Hanoi/script.js":"_assets/bff2fb2fb64bdd3f2278.js","/Tower_Of_Hanoi/script.js":"_assets/bff2fb2fb64bdd3f2278.js","/script.js":"_assets/bff2fb2fb64bdd3f2278.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js":"_assets/87083882cc6015984eb0.js","/ajax/libs/jquery/3.2.1/jquery.min.js":"_assets/87083882cc6015984eb0.js","/libs/jquery/3.2.1/jquery.min.js":"_assets/87083882cc6015984eb0.js","/jquery/3.2.1/jquery.min.js":"_assets/87083882cc6015984eb0.js","/3.2.1/jquery.min.js":"_assets/87083882cc6015984eb0.js","/jquery.min.js":"_assets/87083882cc6015984eb0.js","https://fonts.gstatic.com/s/poetsenone/v3/ke8hOgIaMUB37xCgvCntWuIoofM.woff2":"_assets/67615be3277b2bf831ca.woff2","/s/poetsenone/v3/ke8hOgIaMUB37xCgvCntWuIoofM.woff2":"_assets/67615be3277b2bf831ca.woff2","/poetsenone/v3/ke8hOgIaMUB37xCgvCntWuIoofM.woff2":"_assets/67615be3277b2bf831ca.woff2","/v3/ke8hOgIaMUB37xCgvCntWuIoofM.woff2":"_assets/67615be3277b2bf831ca.woff2","/ke8hOgIaMUB37xCgvCntWuIoofM.woff2":"_assets/67615be3277b2bf831ca.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2","/libs/font-awesome/5.15.3/webfonts/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2","/font-awesome/5.15.3/webfonts/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2","/5.15.3/webfonts/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2","/webfonts/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2","/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2"};
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
