(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Guess_The_Weapon/style.css":"_assets/5b8a79eef6c9457925bb.css","/GameZone/Games/Guess_The_Weapon/style.css":"_assets/5b8a79eef6c9457925bb.css","/Games/Guess_The_Weapon/style.css":"_assets/5b8a79eef6c9457925bb.css","/Guess_The_Weapon/style.css":"_assets/5b8a79eef6c9457925bb.css","/style.css":"_assets/5b8a79eef6c9457925bb.css","https://kunjgit.github.io/GameZone/Games/Guess_The_Weapon/info.js":"_assets/c34403a997f3951587ca.js","/GameZone/Games/Guess_The_Weapon/info.js":"_assets/c34403a997f3951587ca.js","/Games/Guess_The_Weapon/info.js":"_assets/c34403a997f3951587ca.js","/Guess_The_Weapon/info.js":"_assets/c34403a997f3951587ca.js","/info.js":"_assets/c34403a997f3951587ca.js","https://kunjgit.github.io/GameZone/Games/Guess_The_Weapon/script.js":"_assets/1bbf9e77172e314f247a.js","/GameZone/Games/Guess_The_Weapon/script.js":"_assets/1bbf9e77172e314f247a.js","/Games/Guess_The_Weapon/script.js":"_assets/1bbf9e77172e314f247a.js","/Guess_The_Weapon/script.js":"_assets/1bbf9e77172e314f247a.js","/script.js":"_assets/1bbf9e77172e314f247a.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css":"_assets/0934b1fc0d3a766d41d3.css","/ajax/libs/font-awesome/6.4.2/css/all.min.css":"_assets/0934b1fc0d3a766d41d3.css","/libs/font-awesome/6.4.2/css/all.min.css":"_assets/0934b1fc0d3a766d41d3.css","/font-awesome/6.4.2/css/all.min.css":"_assets/0934b1fc0d3a766d41d3.css","/6.4.2/css/all.min.css":"_assets/0934b1fc0d3a766d41d3.css","/css/all.min.css":"_assets/0934b1fc0d3a766d41d3.css","/all.min.css":"_assets/0934b1fc0d3a766d41d3.css","https://fonts.googleapis.com/css2?family=Lora&family=Oswald&family=Pacifico&family=Poppins&family=Satisfy&display=swap":"_assets/d45f6fd86ce1431bed3b.css","/css2":"_assets/d45f6fd86ce1431bed3b.css","/css2?family=Lora&family=Oswald&family=Pacifico&family=Poppins&family=Satisfy&display=swap":"_assets/d45f6fd86ce1431bed3b.css","https://fonts.googleapis.com/css2":"_assets/d45f6fd86ce1431bed3b.css","https://fonts.gstatic.com/s/satisfy/v22/rP2Hp2yn6lkG50LoCZOIHQ.woff2":"_assets/efed75fb59ebfac3006c.woff2","/s/satisfy/v22/rP2Hp2yn6lkG50LoCZOIHQ.woff2":"_assets/efed75fb59ebfac3006c.woff2","/satisfy/v22/rP2Hp2yn6lkG50LoCZOIHQ.woff2":"_assets/efed75fb59ebfac3006c.woff2","/v22/rP2Hp2yn6lkG50LoCZOIHQ.woff2":"_assets/efed75fb59ebfac3006c.woff2","/rP2Hp2yn6lkG50LoCZOIHQ.woff2":"_assets/efed75fb59ebfac3006c.woff2","https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/webfonts/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2","/ajax/libs/font-awesome/6.4.2/webfonts/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2","/libs/font-awesome/6.4.2/webfonts/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2","/font-awesome/6.4.2/webfonts/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2","/6.4.2/webfonts/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2","/webfonts/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2","/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/webfonts/fa-regular-400.woff2":"_assets/9169d8be7a8177e5a92a.woff2","/ajax/libs/font-awesome/6.4.2/webfonts/fa-regular-400.woff2":"_assets/9169d8be7a8177e5a92a.woff2","/libs/font-awesome/6.4.2/webfonts/fa-regular-400.woff2":"_assets/9169d8be7a8177e5a92a.woff2","/font-awesome/6.4.2/webfonts/fa-regular-400.woff2":"_assets/9169d8be7a8177e5a92a.woff2","/6.4.2/webfonts/fa-regular-400.woff2":"_assets/9169d8be7a8177e5a92a.woff2","/webfonts/fa-regular-400.woff2":"_assets/9169d8be7a8177e5a92a.woff2","/fa-regular-400.woff2":"_assets/9169d8be7a8177e5a92a.woff2"};
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
