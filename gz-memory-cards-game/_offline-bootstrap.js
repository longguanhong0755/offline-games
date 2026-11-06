(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Memory_Cards_Game/images/que_icon.svg":"_assets/cbb82a911507bbf82fe4.svg","/GameZone/Games/Memory_Cards_Game/images/que_icon.svg":"_assets/cbb82a911507bbf82fe4.svg","/Games/Memory_Cards_Game/images/que_icon.svg":"_assets/cbb82a911507bbf82fe4.svg","/Memory_Cards_Game/images/que_icon.svg":"_assets/cbb82a911507bbf82fe4.svg","/images/que_icon.svg":"_assets/cbb82a911507bbf82fe4.svg","/que_icon.svg":"_assets/cbb82a911507bbf82fe4.svg","https://kunjgit.github.io/GameZone/Games/Memory_Cards_Game/style.css":"_assets/1a163debfd462ac78f70.css","/GameZone/Games/Memory_Cards_Game/style.css":"_assets/1a163debfd462ac78f70.css","/Games/Memory_Cards_Game/style.css":"_assets/1a163debfd462ac78f70.css","/Memory_Cards_Game/style.css":"_assets/1a163debfd462ac78f70.css","/style.css":"_assets/1a163debfd462ac78f70.css","https://kunjgit.github.io/GameZone/Games/Memory_Cards_Game/images/img-1.png":"_assets/a8e7237c6e072f672b93.png","/GameZone/Games/Memory_Cards_Game/images/img-1.png":"_assets/a8e7237c6e072f672b93.png","/Games/Memory_Cards_Game/images/img-1.png":"_assets/a8e7237c6e072f672b93.png","/Memory_Cards_Game/images/img-1.png":"_assets/a8e7237c6e072f672b93.png","/images/img-1.png":"_assets/a8e7237c6e072f672b93.png","/img-1.png":"_assets/a8e7237c6e072f672b93.png","https://kunjgit.github.io/GameZone/Games/Memory_Cards_Game/images/img-2.png":"_assets/3fe6c80fd3d159dc090b.png","/GameZone/Games/Memory_Cards_Game/images/img-2.png":"_assets/3fe6c80fd3d159dc090b.png","/Games/Memory_Cards_Game/images/img-2.png":"_assets/3fe6c80fd3d159dc090b.png","/Memory_Cards_Game/images/img-2.png":"_assets/3fe6c80fd3d159dc090b.png","/images/img-2.png":"_assets/3fe6c80fd3d159dc090b.png","/img-2.png":"_assets/3fe6c80fd3d159dc090b.png","https://kunjgit.github.io/GameZone/Games/Memory_Cards_Game/images/img-3.png":"_assets/7bbc1663613c0dd23870.png","/GameZone/Games/Memory_Cards_Game/images/img-3.png":"_assets/7bbc1663613c0dd23870.png","/Games/Memory_Cards_Game/images/img-3.png":"_assets/7bbc1663613c0dd23870.png","/Memory_Cards_Game/images/img-3.png":"_assets/7bbc1663613c0dd23870.png","/images/img-3.png":"_assets/7bbc1663613c0dd23870.png","/img-3.png":"_assets/7bbc1663613c0dd23870.png","https://kunjgit.github.io/GameZone/Games/Memory_Cards_Game/script.js":"_assets/53ca3f99e7b9e33149d8.js","/GameZone/Games/Memory_Cards_Game/script.js":"_assets/53ca3f99e7b9e33149d8.js","/Games/Memory_Cards_Game/script.js":"_assets/53ca3f99e7b9e33149d8.js","/Memory_Cards_Game/script.js":"_assets/53ca3f99e7b9e33149d8.js","/script.js":"_assets/53ca3f99e7b9e33149d8.js","https://kunjgit.github.io/GameZone/Games/Memory_Cards_Game/images/img-4.png":"_assets/ef08cac340156845cea0.png","/GameZone/Games/Memory_Cards_Game/images/img-4.png":"_assets/ef08cac340156845cea0.png","/Games/Memory_Cards_Game/images/img-4.png":"_assets/ef08cac340156845cea0.png","/Memory_Cards_Game/images/img-4.png":"_assets/ef08cac340156845cea0.png","/images/img-4.png":"_assets/ef08cac340156845cea0.png","/img-4.png":"_assets/ef08cac340156845cea0.png","https://kunjgit.github.io/GameZone/Games/Memory_Cards_Game/images/img-5.png":"_assets/2f6b0f601e415ad00b15.png","/GameZone/Games/Memory_Cards_Game/images/img-5.png":"_assets/2f6b0f601e415ad00b15.png","/Games/Memory_Cards_Game/images/img-5.png":"_assets/2f6b0f601e415ad00b15.png","/Memory_Cards_Game/images/img-5.png":"_assets/2f6b0f601e415ad00b15.png","/images/img-5.png":"_assets/2f6b0f601e415ad00b15.png","/img-5.png":"_assets/2f6b0f601e415ad00b15.png","https://kunjgit.github.io/GameZone/Games/Memory_Cards_Game/images/img-6.png":"_assets/b6e7a14cfef796543fb6.png","/GameZone/Games/Memory_Cards_Game/images/img-6.png":"_assets/b6e7a14cfef796543fb6.png","/Games/Memory_Cards_Game/images/img-6.png":"_assets/b6e7a14cfef796543fb6.png","/Memory_Cards_Game/images/img-6.png":"_assets/b6e7a14cfef796543fb6.png","/images/img-6.png":"_assets/b6e7a14cfef796543fb6.png","/img-6.png":"_assets/b6e7a14cfef796543fb6.png","https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap":"_assets/176bb1c2559a3a0ca5d6.css","/css2":"_assets/176bb1c2559a3a0ca5d6.css","/css2?family=Poppins:wght@400;500;600;700&display=swap":"_assets/176bb1c2559a3a0ca5d6.css","https://fonts.googleapis.com/css2":"_assets/176bb1c2559a3a0ca5d6.css","https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","/s/poppins/v24/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","/poppins/v24/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","/v24/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2"};
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
