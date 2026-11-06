(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Space_War/js/classes/Player.js":"_assets/def916bd132d078f4525.js","/GameZone/Games/Space_War/js/classes/Player.js":"_assets/def916bd132d078f4525.js","/Games/Space_War/js/classes/Player.js":"_assets/def916bd132d078f4525.js","/Space_War/js/classes/Player.js":"_assets/def916bd132d078f4525.js","/js/classes/Player.js":"_assets/def916bd132d078f4525.js","/classes/Player.js":"_assets/def916bd132d078f4525.js","/Player.js":"_assets/def916bd132d078f4525.js","https://kunjgit.github.io/GameZone/Games/Space_War/js/classes/Particle.js":"_assets/5424d5b4f8213400c3ba.js","/GameZone/Games/Space_War/js/classes/Particle.js":"_assets/5424d5b4f8213400c3ba.js","/Games/Space_War/js/classes/Particle.js":"_assets/5424d5b4f8213400c3ba.js","/Space_War/js/classes/Particle.js":"_assets/5424d5b4f8213400c3ba.js","/js/classes/Particle.js":"_assets/5424d5b4f8213400c3ba.js","/classes/Particle.js":"_assets/5424d5b4f8213400c3ba.js","/Particle.js":"_assets/5424d5b4f8213400c3ba.js","https://kunjgit.github.io/GameZone/Games/Space_War/js/classes/Enemy.js":"_assets/02d015ecf2edbf2dc690.js","/GameZone/Games/Space_War/js/classes/Enemy.js":"_assets/02d015ecf2edbf2dc690.js","/Games/Space_War/js/classes/Enemy.js":"_assets/02d015ecf2edbf2dc690.js","/Space_War/js/classes/Enemy.js":"_assets/02d015ecf2edbf2dc690.js","/js/classes/Enemy.js":"_assets/02d015ecf2edbf2dc690.js","/classes/Enemy.js":"_assets/02d015ecf2edbf2dc690.js","/Enemy.js":"_assets/02d015ecf2edbf2dc690.js","https://kunjgit.github.io/GameZone/Games/Space_War/js/classes/Projectile.js":"_assets/45f04415a4cacac51563.js","/GameZone/Games/Space_War/js/classes/Projectile.js":"_assets/45f04415a4cacac51563.js","/Games/Space_War/js/classes/Projectile.js":"_assets/45f04415a4cacac51563.js","/Space_War/js/classes/Projectile.js":"_assets/45f04415a4cacac51563.js","/js/classes/Projectile.js":"_assets/45f04415a4cacac51563.js","/classes/Projectile.js":"_assets/45f04415a4cacac51563.js","/Projectile.js":"_assets/45f04415a4cacac51563.js","https://kunjgit.github.io/GameZone/Games/Space_War/js/eventListeners.js":"_assets/0802d9ca3b3cf67ab343.js","/GameZone/Games/Space_War/js/eventListeners.js":"_assets/0802d9ca3b3cf67ab343.js","/Games/Space_War/js/eventListeners.js":"_assets/0802d9ca3b3cf67ab343.js","/Space_War/js/eventListeners.js":"_assets/0802d9ca3b3cf67ab343.js","/js/eventListeners.js":"_assets/0802d9ca3b3cf67ab343.js","/eventListeners.js":"_assets/0802d9ca3b3cf67ab343.js","https://kunjgit.github.io/GameZone/Games/Space_War/js/index.js":"_assets/8e037305fe1993fd680b.js","/GameZone/Games/Space_War/js/index.js":"_assets/8e037305fe1993fd680b.js","/Games/Space_War/js/index.js":"_assets/8e037305fe1993fd680b.js","/Space_War/js/index.js":"_assets/8e037305fe1993fd680b.js","/js/index.js":"_assets/8e037305fe1993fd680b.js","/index.js":"_assets/8e037305fe1993fd680b.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.2/gsap.min.js":"_assets/785135182c79ee5b2c6d.js","/ajax/libs/gsap/3.10.2/gsap.min.js":"_assets/785135182c79ee5b2c6d.js","/libs/gsap/3.10.2/gsap.min.js":"_assets/785135182c79ee5b2c6d.js","/gsap/3.10.2/gsap.min.js":"_assets/785135182c79ee5b2c6d.js","/3.10.2/gsap.min.js":"_assets/785135182c79ee5b2c6d.js","/gsap.min.js":"_assets/785135182c79ee5b2c6d.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2"};
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
