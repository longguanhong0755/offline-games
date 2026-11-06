(() => {
  "use strict";
  const RUNTIME_MAP = {"https://mustafadalga.github.io/Front-End-Developments/Tactix/assets/css/jquery-confirm.min.css":"_assets/9809a9d6fe844649e678.css","/Front-End-Developments/Tactix/assets/css/jquery-confirm.min.css":"_assets/9809a9d6fe844649e678.css","/Tactix/assets/css/jquery-confirm.min.css":"_assets/9809a9d6fe844649e678.css","/assets/css/jquery-confirm.min.css":"_assets/9809a9d6fe844649e678.css","/css/jquery-confirm.min.css":"_assets/9809a9d6fe844649e678.css","/jquery-confirm.min.css":"_assets/9809a9d6fe844649e678.css","https://mustafadalga.github.io/Front-End-Developments/Tactix/assets/css/animate.css":"_assets/6b6b686ecaa56e02ec5a.css","/Front-End-Developments/Tactix/assets/css/animate.css":"_assets/6b6b686ecaa56e02ec5a.css","/Tactix/assets/css/animate.css":"_assets/6b6b686ecaa56e02ec5a.css","/assets/css/animate.css":"_assets/6b6b686ecaa56e02ec5a.css","/css/animate.css":"_assets/6b6b686ecaa56e02ec5a.css","/animate.css":"_assets/6b6b686ecaa56e02ec5a.css","https://mustafadalga.github.io/Front-End-Developments/Tactix/assets/css/tactix.css":"_assets/07e5fd8b9d116dfd6069.css","/Front-End-Developments/Tactix/assets/css/tactix.css":"_assets/07e5fd8b9d116dfd6069.css","/Tactix/assets/css/tactix.css":"_assets/07e5fd8b9d116dfd6069.css","/assets/css/tactix.css":"_assets/07e5fd8b9d116dfd6069.css","/css/tactix.css":"_assets/07e5fd8b9d116dfd6069.css","/tactix.css":"_assets/07e5fd8b9d116dfd6069.css","https://mustafadalga.github.io/Front-End-Developments/Tactix/assets/img/repeat.png":"_assets/13c8180f6d766b8c164d.png","/Front-End-Developments/Tactix/assets/img/repeat.png":"_assets/13c8180f6d766b8c164d.png","/Tactix/assets/img/repeat.png":"_assets/13c8180f6d766b8c164d.png","/assets/img/repeat.png":"_assets/13c8180f6d766b8c164d.png","/img/repeat.png":"_assets/13c8180f6d766b8c164d.png","/repeat.png":"_assets/13c8180f6d766b8c164d.png","https://mustafadalga.github.io/Front-End-Developments/Tactix/assets/img/active-user.png":"_assets/aeb8f96e1e121c6f5748.png","/Front-End-Developments/Tactix/assets/img/active-user.png":"_assets/aeb8f96e1e121c6f5748.png","/Tactix/assets/img/active-user.png":"_assets/aeb8f96e1e121c6f5748.png","/assets/img/active-user.png":"_assets/aeb8f96e1e121c6f5748.png","/img/active-user.png":"_assets/aeb8f96e1e121c6f5748.png","/active-user.png":"_assets/aeb8f96e1e121c6f5748.png","https://mustafadalga.github.io/Front-End-Developments/Tactix/assets/img/hand.png":"_assets/89ff0c3b01b6c7393848.png","/Front-End-Developments/Tactix/assets/img/hand.png":"_assets/89ff0c3b01b6c7393848.png","/Tactix/assets/img/hand.png":"_assets/89ff0c3b01b6c7393848.png","/assets/img/hand.png":"_assets/89ff0c3b01b6c7393848.png","/img/hand.png":"_assets/89ff0c3b01b6c7393848.png","/hand.png":"_assets/89ff0c3b01b6c7393848.png","https://mustafadalga.github.io/Front-End-Developments/Tactix/assets/js/jquery-confirm.min.js":"_assets/d14cf552496ba4036ec2.js","/Front-End-Developments/Tactix/assets/js/jquery-confirm.min.js":"_assets/d14cf552496ba4036ec2.js","/Tactix/assets/js/jquery-confirm.min.js":"_assets/d14cf552496ba4036ec2.js","/assets/js/jquery-confirm.min.js":"_assets/d14cf552496ba4036ec2.js","/js/jquery-confirm.min.js":"_assets/d14cf552496ba4036ec2.js","/jquery-confirm.min.js":"_assets/d14cf552496ba4036ec2.js","https://mustafadalga.github.io/Front-End-Developments/Tactix/assets/img/user.png":"_assets/e6a5a98264495cb9f3eb.png","/Front-End-Developments/Tactix/assets/img/user.png":"_assets/e6a5a98264495cb9f3eb.png","/Tactix/assets/img/user.png":"_assets/e6a5a98264495cb9f3eb.png","/assets/img/user.png":"_assets/e6a5a98264495cb9f3eb.png","/img/user.png":"_assets/e6a5a98264495cb9f3eb.png","/user.png":"_assets/e6a5a98264495cb9f3eb.png","https://mustafadalga.github.io/Front-End-Developments/Tactix/assets/js/jquery-3.4.1.min.js":"_assets/0925e8ad7bd971391a8b.js","/Front-End-Developments/Tactix/assets/js/jquery-3.4.1.min.js":"_assets/0925e8ad7bd971391a8b.js","/Tactix/assets/js/jquery-3.4.1.min.js":"_assets/0925e8ad7bd971391a8b.js","/assets/js/jquery-3.4.1.min.js":"_assets/0925e8ad7bd971391a8b.js","/js/jquery-3.4.1.min.js":"_assets/0925e8ad7bd971391a8b.js","/jquery-3.4.1.min.js":"_assets/0925e8ad7bd971391a8b.js","https://mustafadalga.github.io/Front-End-Developments/Tactix/assets/js/notify.min.js":"_assets/23efbfd67a8f05a7e077.js","/Front-End-Developments/Tactix/assets/js/notify.min.js":"_assets/23efbfd67a8f05a7e077.js","/Tactix/assets/js/notify.min.js":"_assets/23efbfd67a8f05a7e077.js","/assets/js/notify.min.js":"_assets/23efbfd67a8f05a7e077.js","/js/notify.min.js":"_assets/23efbfd67a8f05a7e077.js","/notify.min.js":"_assets/23efbfd67a8f05a7e077.js","https://mustafadalga.github.io/Front-End-Developments/Tactix/assets/js/tactix.js":"_assets/6b55505567e183018b08.js","/Front-End-Developments/Tactix/assets/js/tactix.js":"_assets/6b55505567e183018b08.js","/Tactix/assets/js/tactix.js":"_assets/6b55505567e183018b08.js","/assets/js/tactix.js":"_assets/6b55505567e183018b08.js","/js/tactix.js":"_assets/6b55505567e183018b08.js","/tactix.js":"_assets/6b55505567e183018b08.js","https://fonts.googleapis.com/css?family=Miniver&display=swap":"_assets/4ef839fbd0111a605b72.css","/css":"_assets/4ef839fbd0111a605b72.css","/css?family=Miniver&display=swap":"_assets/4ef839fbd0111a605b72.css","https://fonts.googleapis.com/css":"_assets/4ef839fbd0111a605b72.css","https://fonts.gstatic.com/s/miniver/v27/eLGcP-PxIg-5H0vC37oIyg.woff2":"_assets/7f83abed6b8fb4374809.woff2","/s/miniver/v27/eLGcP-PxIg-5H0vC37oIyg.woff2":"_assets/7f83abed6b8fb4374809.woff2","/miniver/v27/eLGcP-PxIg-5H0vC37oIyg.woff2":"_assets/7f83abed6b8fb4374809.woff2","/v27/eLGcP-PxIg-5H0vC37oIyg.woff2":"_assets/7f83abed6b8fb4374809.woff2","/eLGcP-PxIg-5H0vC37oIyg.woff2":"_assets/7f83abed6b8fb4374809.woff2","https://mustafadalga.github.io/Front-End-Developments/Tactix/assets/img/zemin.png":"_assets/66ef8c5e2501cf908a2d.png","/Front-End-Developments/Tactix/assets/img/zemin.png":"_assets/66ef8c5e2501cf908a2d.png","/Tactix/assets/img/zemin.png":"_assets/66ef8c5e2501cf908a2d.png","/assets/img/zemin.png":"_assets/66ef8c5e2501cf908a2d.png","/img/zemin.png":"_assets/66ef8c5e2501cf908a2d.png","/zemin.png":"_assets/66ef8c5e2501cf908a2d.png"};
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
