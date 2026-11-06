(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Riddle_Room/style.css":"_assets/87cac3867ec22afcc921.css","/GameZone/Games/Riddle_Room/style.css":"_assets/87cac3867ec22afcc921.css","/Games/Riddle_Room/style.css":"_assets/87cac3867ec22afcc921.css","/Riddle_Room/style.css":"_assets/87cac3867ec22afcc921.css","/style.css":"_assets/87cac3867ec22afcc921.css","https://kunjgit.github.io/GameZone/Games/Riddle_Room/script.js":"_assets/d000fe50b11146ff665d.js","/GameZone/Games/Riddle_Room/script.js":"_assets/d000fe50b11146ff665d.js","/Games/Riddle_Room/script.js":"_assets/d000fe50b11146ff665d.js","/Riddle_Room/script.js":"_assets/d000fe50b11146ff665d.js","/script.js":"_assets/d000fe50b11146ff665d.js","https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js":"_assets/0925e8ad7bd971391a8b.js","/ajax/libs/jquery/3.4.1/jquery.min.js":"_assets/0925e8ad7bd971391a8b.js","/libs/jquery/3.4.1/jquery.min.js":"_assets/0925e8ad7bd971391a8b.js","/jquery/3.4.1/jquery.min.js":"_assets/0925e8ad7bd971391a8b.js","/3.4.1/jquery.min.js":"_assets/0925e8ad7bd971391a8b.js","/jquery.min.js":"_assets/0925e8ad7bd971391a8b.js","https://fonts.googleapis.com/css?family=Bangers|Cutive+Mono&display=swap":"_assets/550d171a4d136f539318.css","/css":"_assets/550d171a4d136f539318.css","/css?family=Bangers|Cutive+Mono&display=swap":"_assets/550d171a4d136f539318.css","https://fonts.googleapis.com/css":"_assets/550d171a4d136f539318.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css":"_assets/eeb17a45a48aca1d7adb.css","/ajax/libs/font-awesome/5.8.1/css/all.min.css":"_assets/eeb17a45a48aca1d7adb.css","/libs/font-awesome/5.8.1/css/all.min.css":"_assets/eeb17a45a48aca1d7adb.css","/font-awesome/5.8.1/css/all.min.css":"_assets/eeb17a45a48aca1d7adb.css","/5.8.1/css/all.min.css":"_assets/eeb17a45a48aca1d7adb.css","https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js":"_assets/28ce75d953678c4942df.js","/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js":"_assets/28ce75d953678c4942df.js","/libs/jqueryui/1.12.1/jquery-ui.min.js":"_assets/28ce75d953678c4942df.js","/jqueryui/1.12.1/jquery-ui.min.js":"_assets/28ce75d953678c4942df.js","/1.12.1/jquery-ui.min.js":"_assets/28ce75d953678c4942df.js","/jquery-ui.min.js":"_assets/28ce75d953678c4942df.js","https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js":"_assets/72194d152571dd375c43.js","/ajax/libs/vue/2.6.10/vue.min.js":"_assets/72194d152571dd375c43.js","/libs/vue/2.6.10/vue.min.js":"_assets/72194d152571dd375c43.js","/vue/2.6.10/vue.min.js":"_assets/72194d152571dd375c43.js","/2.6.10/vue.min.js":"_assets/72194d152571dd375c43.js","/vue.min.js":"_assets/72194d152571dd375c43.js","https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js":"_assets/effca8652df9e3c7d749.js","/ajax/libs/lodash.js/4.17.11/lodash.min.js":"_assets/effca8652df9e3c7d749.js","/libs/lodash.js/4.17.11/lodash.min.js":"_assets/effca8652df9e3c7d749.js","/lodash.js/4.17.11/lodash.min.js":"_assets/effca8652df9e3c7d749.js","/4.17.11/lodash.min.js":"_assets/effca8652df9e3c7d749.js","/lodash.min.js":"_assets/effca8652df9e3c7d749.js","https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js":"_assets/4ba1b9960f6bcc2d4908.js","/ajax/libs/gsap/1.20.4/TweenMax.min.js":"_assets/4ba1b9960f6bcc2d4908.js","/libs/gsap/1.20.4/TweenMax.min.js":"_assets/4ba1b9960f6bcc2d4908.js","/gsap/1.20.4/TweenMax.min.js":"_assets/4ba1b9960f6bcc2d4908.js","/1.20.4/TweenMax.min.js":"_assets/4ba1b9960f6bcc2d4908.js","/TweenMax.min.js":"_assets/4ba1b9960f6bcc2d4908.js","https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/utils/Draggable.min.js":"_assets/756199ae996c5c89ce2e.js","/ajax/libs/gsap/1.20.4/utils/Draggable.min.js":"_assets/756199ae996c5c89ce2e.js","/libs/gsap/1.20.4/utils/Draggable.min.js":"_assets/756199ae996c5c89ce2e.js","/gsap/1.20.4/utils/Draggable.min.js":"_assets/756199ae996c5c89ce2e.js","/1.20.4/utils/Draggable.min.js":"_assets/756199ae996c5c89ce2e.js","/utils/Draggable.min.js":"_assets/756199ae996c5c89ce2e.js","/Draggable.min.js":"_assets/756199ae996c5c89ce2e.js","https://fonts.gstatic.com/s/bangers/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/s/bangers/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/bangers/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://fonts.gstatic.com/s/cutivemono/v23/m8JWjfRfY7WVjVi2E-K9H6RCTm4.woff2":"_assets/86bac2b356efacde8dbb.woff2","/s/cutivemono/v23/m8JWjfRfY7WVjVi2E-K9H6RCTm4.woff2":"_assets/86bac2b356efacde8dbb.woff2","/cutivemono/v23/m8JWjfRfY7WVjVi2E-K9H6RCTm4.woff2":"_assets/86bac2b356efacde8dbb.woff2","/v23/m8JWjfRfY7WVjVi2E-K9H6RCTm4.woff2":"_assets/86bac2b356efacde8dbb.woff2","/m8JWjfRfY7WVjVi2E-K9H6RCTm4.woff2":"_assets/86bac2b356efacde8dbb.woff2"};
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
