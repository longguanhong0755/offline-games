(() => {
  "use strict";
  const RUNTIME_MAP = {"https://nathan-hellinga.github.io/idle-space/static/css/main.f52769ba.chunk.css":"_assets/fb61382ca1109565c33b.css","/idle-space/static/css/main.f52769ba.chunk.css":"_assets/fb61382ca1109565c33b.css","/static/css/main.f52769ba.chunk.css":"_assets/fb61382ca1109565c33b.css","/css/main.f52769ba.chunk.css":"_assets/fb61382ca1109565c33b.css","/main.f52769ba.chunk.css":"_assets/fb61382ca1109565c33b.css","https://fonts.googleapis.com/css?family=Open+Sans+Condensed:200,300,400,500,700":"_assets/9a09a55ab5239c2685ef.css","/css":"_assets/79c397815f9500983fc6.css","/css?family=Open+Sans+Condensed:200,300,400,500,700":"_assets/9a09a55ab5239c2685ef.css","https://fonts.googleapis.com/css":"_assets/79c397815f9500983fc6.css","https://fonts.googleapis.com/icon?family=Material+Icons":"_assets/e8c6cdaa1c533d3f6770.css","/icon":"_assets/e8c6cdaa1c533d3f6770.css","/icon?family=Material+Icons":"_assets/e8c6cdaa1c533d3f6770.css","https://fonts.googleapis.com/icon":"_assets/e8c6cdaa1c533d3f6770.css","https://fonts.googleapis.com/css?family=IBM+Plex+Mono:200,300,400,500,700":"_assets/0897dc7d2217f3e467ac.css","/css?family=IBM+Plex+Mono:200,300,400,500,700":"_assets/0897dc7d2217f3e467ac.css","https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap":"_assets/99a2365e5f1792a0d43f.css","/css?family=Roboto:300,400,500,700&display=swap":"_assets/99a2365e5f1792a0d43f.css","https://fonts.googleapis.com/css?family=Cabin+Sketch:200,300,400,500,700":"_assets/79c397815f9500983fc6.css","/css?family=Cabin+Sketch:200,300,400,500,700":"_assets/79c397815f9500983fc6.css","https://nathan-hellinga.github.io/idle-space/static/js/main.e103b986.chunk.js":"_assets/e8fe0c6bab5c6db07b27.js","/idle-space/static/js/main.e103b986.chunk.js":"_assets/e8fe0c6bab5c6db07b27.js","/static/js/main.e103b986.chunk.js":"_assets/e8fe0c6bab5c6db07b27.js","/js/main.e103b986.chunk.js":"_assets/e8fe0c6bab5c6db07b27.js","/main.e103b986.chunk.js":"_assets/e8fe0c6bab5c6db07b27.js","https://nathan-hellinga.github.io/idle-space/static/js/2.88307370.chunk.js":"_assets/f694dad9b3eec5558efa.js","/idle-space/static/js/2.88307370.chunk.js":"_assets/f694dad9b3eec5558efa.js","/static/js/2.88307370.chunk.js":"_assets/f694dad9b3eec5558efa.js","/js/2.88307370.chunk.js":"_assets/f694dad9b3eec5558efa.js","/2.88307370.chunk.js":"_assets/f694dad9b3eec5558efa.js","https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","https://fonts.gstatic.com/s/ibmplexmono/v20/-F63fjptAgt5VM-kVkqdyU8n1i8q1w.woff2":"_assets/08949f728dc52d528e69.woff2","/s/ibmplexmono/v20/-F63fjptAgt5VM-kVkqdyU8n1i8q1w.woff2":"_assets/08949f728dc52d528e69.woff2","/ibmplexmono/v20/-F63fjptAgt5VM-kVkqdyU8n1i8q1w.woff2":"_assets/08949f728dc52d528e69.woff2","/v20/-F63fjptAgt5VM-kVkqdyU8n1i8q1w.woff2":"_assets/08949f728dc52d528e69.woff2","/-F63fjptAgt5VM-kVkqdyU8n1i8q1w.woff2":"_assets/08949f728dc52d528e69.woff2","https://fonts.gstatic.com/s/ibmplexmono/v20/-F6qfjptAgt5VM-kVkqdyU8n3pQPwlBFgg.woff2":"_assets/4f84d86cfd060f4ded33.woff2","/s/ibmplexmono/v20/-F6qfjptAgt5VM-kVkqdyU8n3pQPwlBFgg.woff2":"_assets/4f84d86cfd060f4ded33.woff2","/ibmplexmono/v20/-F6qfjptAgt5VM-kVkqdyU8n3pQPwlBFgg.woff2":"_assets/4f84d86cfd060f4ded33.woff2","/v20/-F6qfjptAgt5VM-kVkqdyU8n3pQPwlBFgg.woff2":"_assets/4f84d86cfd060f4ded33.woff2","/-F6qfjptAgt5VM-kVkqdyU8n3pQPwlBFgg.woff2":"_assets/4f84d86cfd060f4ded33.woff2","https://fonts.gstatic.com/s/opensanscondensed/v24/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuXMRw.woff2":"_assets/b2e4004f49194467b12f.woff2","/s/opensanscondensed/v24/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuXMRw.woff2":"_assets/b2e4004f49194467b12f.woff2","/opensanscondensed/v24/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuXMRw.woff2":"_assets/b2e4004f49194467b12f.woff2","/v24/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuXMRw.woff2":"_assets/b2e4004f49194467b12f.woff2","/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuXMRw.woff2":"_assets/b2e4004f49194467b12f.woff2"};
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
