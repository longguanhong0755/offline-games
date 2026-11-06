(() => {
  "use strict";
  const RUNTIME_MAP = {"http://andrettin.github.io/stylesheets/github-dark.css":"_assets/2756b45b23fd09cbb1a0.css","/stylesheets/github-dark.css":"_assets/2756b45b23fd09cbb1a0.css","/github-dark.css":"_assets/2756b45b23fd09cbb1a0.css","http://andrettin.github.io/javascripts/respond.js":"_assets/8956b2b57e667404fc8d.js","/javascripts/respond.js":"_assets/8956b2b57e667404fc8d.js","/respond.js":"_assets/8956b2b57e667404fc8d.js","http://andrettin.github.io/stylesheets/styles.css":"_assets/6cf9bf648972ca548c17.css","/stylesheets/styles.css":"_assets/6cf9bf648972ca548c17.css","/styles.css":"_assets/6cf9bf648972ca548c17.css","https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif":"_assets/0cbf09dc853e3b9e9618.gif","/en_US/i/btn/btn_donate_SM.gif":"_assets/0cbf09dc853e3b9e9618.gif","/i/btn/btn_donate_SM.gif":"_assets/0cbf09dc853e3b9e9618.gif","/btn/btn_donate_SM.gif":"_assets/0cbf09dc853e3b9e9618.gif","/btn_donate_SM.gif":"_assets/0cbf09dc853e3b9e9618.gif","https://andrettin.github.io/images/wyrmsun_logo_resized.png":"_assets/c9df70ba0669f767d799.png","/images/wyrmsun_logo_resized.png":"_assets/c9df70ba0669f767d799.png","/wyrmsun_logo_resized.png":"_assets/c9df70ba0669f767d799.png","https://andrettin.github.io/screenshots/screen_dwarven_settlement.png":"_assets/7c6473fcf3a0dd7cc450.png","/screenshots/screen_dwarven_settlement.png":"_assets/7c6473fcf3a0dd7cc450.png","/screen_dwarven_settlement.png":"_assets/7c6473fcf3a0dd7cc450.png","https://www.paypalobjects.com/en_US/i/scr/pixel.gif":"_assets/2dfe28cbdb83f01c940d.gif","/en_US/i/scr/pixel.gif":"_assets/2dfe28cbdb83f01c940d.gif","/i/scr/pixel.gif":"_assets/2dfe28cbdb83f01c940d.gif","/scr/pixel.gif":"_assets/2dfe28cbdb83f01c940d.gif","/pixel.gif":"_assets/2dfe28cbdb83f01c940d.gif","http://andrettin.github.io/fonts/OpenSans-Regular-webfont.woff":"_assets/3b4ae61d6e9fb6fa5d10.woff","/fonts/OpenSans-Regular-webfont.woff":"_assets/3b4ae61d6e9fb6fa5d10.woff","/OpenSans-Regular-webfont.woff":"_assets/3b4ae61d6e9fb6fa5d10.woff","http://andrettin.github.io/images/hr.gif":"_assets/ac414d4843b7d3e4d118.gif","/images/hr.gif":"_assets/ac414d4843b7d3e4d118.gif","/hr.gif":"_assets/ac414d4843b7d3e4d118.gif","http://andrettin.github.io/images/bullet.png":"_assets/7e1e6f6cb70bc5b1e434.png","/images/bullet.png":"_assets/7e1e6f6cb70bc5b1e434.png","/bullet.png":"_assets/7e1e6f6cb70bc5b1e434.png","http://andrettin.github.io/fonts/OpenSans-Light-webfont.woff":"_assets/435d060701fe0a2135a7.woff","/fonts/OpenSans-Light-webfont.woff":"_assets/435d060701fe0a2135a7.woff","/OpenSans-Light-webfont.woff":"_assets/435d060701fe0a2135a7.woff"};
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
