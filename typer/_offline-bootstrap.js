(() => {
  "use strict";
  const RUNTIME_MAP = {"https://berkerol.github.io/typer/assets/css/style.css?v=19ddc6035d695c089fc834bff2fea0605e30c39f":"_assets/5ed32f243f8539d47762.css","/typer/assets/css/style.css":"_assets/5ed32f243f8539d47762.css","/typer/assets/css/style.css?v=19ddc6035d695c089fc834bff2fea0605e30c39f":"_assets/5ed32f243f8539d47762.css","/assets/css/style.css":"_assets/5ed32f243f8539d47762.css","/css/style.css":"_assets/5ed32f243f8539d47762.css","/style.css":"_assets/5ed32f243f8539d47762.css","https://berkerol.github.io/typer/assets/css/style.css":"_assets/5ed32f243f8539d47762.css","https://berkerol.github.io/typer/play.png":"_assets/1a22ff295dce4e39ecfa.png","/typer/play.png":"_assets/1a22ff295dce4e39ecfa.png","/play.png":"_assets/1a22ff295dce4e39ecfa.png","https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap":"_assets/5a2d91326957458b4771.css","/css":"_assets/5a2d91326957458b4771.css","/css?family=Open+Sans:400,700&display=swap":"_assets/5a2d91326957458b4771.css","https://fonts.googleapis.com/css":"_assets/5a2d91326957458b4771.css","https://fonts.gstatic.com/l/font?kit=memFYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0EwsQaPuWBIXazFHt1kuGaju&skey=62c1cbfccc78b4b2&v=v44":"_assets/23e3f37805b4185f2735.html","/l/font":"_assets/23e3f37805b4185f2735.html","/l/font?kit=memFYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0EwsQaPuWBIXazFHt1kuGaju&skey=62c1cbfccc78b4b2&v=v44":"_assets/23e3f37805b4185f2735.html","/font":"_assets/23e3f37805b4185f2735.html","https://fonts.gstatic.com/l/font":"_assets/23e3f37805b4185f2735.html"};
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
