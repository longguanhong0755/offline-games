(() => {
  "use strict";
  const RUNTIME_MAP = {"https://corehtml5games.com/wp-content/plugins/widget-options/assets/css/widget-options.css?ver=4.1.1":"_assets/abb0f964c9209344eba8.css","/wp-content/plugins/widget-options/assets/css/widget-options.css":"_assets/abb0f964c9209344eba8.css","/wp-content/plugins/widget-options/assets/css/widget-options.css?ver=4.1.1":"_assets/abb0f964c9209344eba8.css","/plugins/widget-options/assets/css/widget-options.css":"_assets/abb0f964c9209344eba8.css","/widget-options/assets/css/widget-options.css":"_assets/abb0f964c9209344eba8.css","/assets/css/widget-options.css":"_assets/abb0f964c9209344eba8.css","/css/widget-options.css":"_assets/abb0f964c9209344eba8.css","/widget-options.css":"_assets/abb0f964c9209344eba8.css","https://corehtml5games.com/wp-content/plugins/widget-options/assets/css/widget-options.css":"_assets/abb0f964c9209344eba8.css","https://corehtml5games.com/wp-content/plugins/complianz-gdpr/assets/css/cookieblocker.min.css?ver=1791722028":"_assets/afe6634c4de97ea6dd08.css","/wp-content/plugins/complianz-gdpr/assets/css/cookieblocker.min.css":"_assets/afe6634c4de97ea6dd08.css","/wp-content/plugins/complianz-gdpr/assets/css/cookieblocker.min.css?ver=1791722028":"_assets/afe6634c4de97ea6dd08.css","/plugins/complianz-gdpr/assets/css/cookieblocker.min.css":"_assets/afe6634c4de97ea6dd08.css","/complianz-gdpr/assets/css/cookieblocker.min.css":"_assets/afe6634c4de97ea6dd08.css","/assets/css/cookieblocker.min.css":"_assets/afe6634c4de97ea6dd08.css","/css/cookieblocker.min.css":"_assets/afe6634c4de97ea6dd08.css","/cookieblocker.min.css":"_assets/afe6634c4de97ea6dd08.css","https://corehtml5games.com/wp-content/plugins/complianz-gdpr/assets/css/cookieblocker.min.css":"_assets/afe6634c4de97ea6dd08.css","https://corehtml5games.com/wp-content/plugins/beautiful-and-responsive-cookie-consent/public/cookieNSCconsent.min.css?ver=4.5.4":"_assets/9d1da496fa17ea2e01b1.css","/wp-content/plugins/beautiful-and-responsive-cookie-consent/public/cookieNSCconsent.min.css":"_assets/9d1da496fa17ea2e01b1.css","/wp-content/plugins/beautiful-and-responsive-cookie-consent/public/cookieNSCconsent.min.css?ver=4.5.4":"_assets/9d1da496fa17ea2e01b1.css","/plugins/beautiful-and-responsive-cookie-consent/public/cookieNSCconsent.min.css":"_assets/9d1da496fa17ea2e01b1.css","/beautiful-and-responsive-cookie-consent/public/cookieNSCconsent.min.css":"_assets/9d1da496fa17ea2e01b1.css","/public/cookieNSCconsent.min.css":"_assets/9d1da496fa17ea2e01b1.css","/cookieNSCconsent.min.css":"_assets/9d1da496fa17ea2e01b1.css","https://corehtml5games.com/wp-content/plugins/beautiful-and-responsive-cookie-consent/public/cookieNSCconsent.min.css":"_assets/9d1da496fa17ea2e01b1.css","https://corehtml5games.com/wp-content/themes/link-news/assets/css/slick.min.css?ver=1.8.1":"_assets/fb3ed351cd5c0f1f30f8.css","/wp-content/themes/link-news/assets/css/slick.min.css":"_assets/fb3ed351cd5c0f1f30f8.css","/wp-content/themes/link-news/assets/css/slick.min.css?ver=1.8.1":"_assets/fb3ed351cd5c0f1f30f8.css","/themes/link-news/assets/css/slick.min.css":"_assets/fb3ed351cd5c0f1f30f8.css","/link-news/assets/css/slick.min.css":"_assets/fb3ed351cd5c0f1f30f8.css","/assets/css/slick.min.css":"_assets/fb3ed351cd5c0f1f30f8.css","/css/slick.min.css":"_assets/fb3ed351cd5c0f1f30f8.css","/slick.min.css":"_assets/fb3ed351cd5c0f1f30f8.css","https://corehtml5games.com/wp-content/themes/link-news/assets/css/slick.min.css":"_assets/fb3ed351cd5c0f1f30f8.css","https://corehtml5games.com/wp-content/themes/link-news/assets/css/fontawesome.min.css?ver=6.4.2":"_assets/12d50f3f2c0011179b49.css","/wp-content/themes/link-news/assets/css/fontawesome.min.css":"_assets/12d50f3f2c0011179b49.css","/wp-content/themes/link-news/assets/css/fontawesome.min.css?ver=6.4.2":"_assets/12d50f3f2c0011179b49.css","/themes/link-news/assets/css/fontawesome.min.css":"_assets/12d50f3f2c0011179b49.css","/link-news/assets/css/fontawesome.min.css":"_assets/12d50f3f2c0011179b49.css","/assets/css/fontawesome.min.css":"_assets/12d50f3f2c0011179b49.css","/css/fontawesome.min.css":"_assets/12d50f3f2c0011179b49.css","/fontawesome.min.css":"_assets/12d50f3f2c0011179b49.css","https://corehtml5games.com/wp-content/themes/link-news/assets/css/fontawesome.min.css":"_assets/12d50f3f2c0011179b49.css","https://corehtml5games.com/wp-content/themes/link-news/style.css?ver=1.0.0":"_assets/5df1a0cf2b6526aecf50.css","/wp-content/themes/link-news/style.css":"_assets/5df1a0cf2b6526aecf50.css","/wp-content/themes/link-news/style.css?ver=1.0.0":"_assets/5df1a0cf2b6526aecf50.css","/themes/link-news/style.css":"_assets/5df1a0cf2b6526aecf50.css","/link-news/style.css":"_assets/5df1a0cf2b6526aecf50.css","/style.css":"_assets/5df1a0cf2b6526aecf50.css","https://corehtml5games.com/wp-content/themes/link-news/style.css":"_assets/5df1a0cf2b6526aecf50.css","https://corehtml5games.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1":"_assets/5274f11e6fb32ae0cf2d.js","/wp-includes/js/jquery/jquery-migrate.min.js":"_assets/5274f11e6fb32ae0cf2d.js","/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1":"_assets/5274f11e6fb32ae0cf2d.js","/js/jquery/jquery-migrate.min.js":"_assets/5274f11e6fb32ae0cf2d.js","/jquery/jquery-migrate.min.js":"_assets/5274f11e6fb32ae0cf2d.js","/jquery-migrate.min.js":"_assets/5274f11e6fb32ae0cf2d.js","https://corehtml5games.com/wp-includes/js/jquery/jquery-migrate.min.js":"_assets/5274f11e6fb32ae0cf2d.js","https://corehtml5games.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1":"_assets/cb6f2d32c49d1c2b25e9.js","/wp-includes/js/jquery/jquery.min.js":"_assets/cb6f2d32c49d1c2b25e9.js","/wp-includes/js/jquery/jquery.min.js?ver=3.7.1":"_assets/cb6f2d32c49d1c2b25e9.js","/js/jquery/jquery.min.js":"_assets/cb6f2d32c49d1c2b25e9.js","/jquery/jquery.min.js":"_assets/cb6f2d32c49d1c2b25e9.js","/jquery.min.js":"_assets/cb6f2d32c49d1c2b25e9.js","https://corehtml5games.com/wp-includes/js/jquery/jquery.min.js":"_assets/cb6f2d32c49d1c2b25e9.js","https://corehtml5games.com/wp-content/uploads/fax-cover-20261104-065.jpg":"_assets/dbd33c6d6cff8cccb3c8.jpg","/wp-content/uploads/fax-cover-20261104-065.jpg":"_assets/dbd33c6d6cff8cccb3c8.jpg","/uploads/fax-cover-20261104-065.jpg":"_assets/dbd33c6d6cff8cccb3c8.jpg","/fax-cover-20261104-065.jpg":"_assets/dbd33c6d6cff8cccb3c8.jpg","https://corehtml5games.com/wp-content/uploads/fax-cover-20261104-077.jpg":"_assets/c4ca15be73a7589231b6.jpg","/wp-content/uploads/fax-cover-20261104-077.jpg":"_assets/c4ca15be73a7589231b6.jpg","/uploads/fax-cover-20261104-077.jpg":"_assets/c4ca15be73a7589231b6.jpg","/fax-cover-20261104-077.jpg":"_assets/c4ca15be73a7589231b6.jpg","https://corehtml5games.com/wp-content/uploads/fax-cover-20261104-070.jpg":"_assets/52e593c59d9b860e1b72.jpg","/wp-content/uploads/fax-cover-20261104-070.jpg":"_assets/52e593c59d9b860e1b72.jpg","/uploads/fax-cover-20261104-070.jpg":"_assets/52e593c59d9b860e1b72.jpg","/fax-cover-20261104-070.jpg":"_assets/52e593c59d9b860e1b72.jpg","https://corehtml5games.com/wp-content/uploads/fax-cover-20261104-081.jpg":"_assets/39286a9ba916bf0634d8.jpg","/wp-content/uploads/fax-cover-20261104-081.jpg":"_assets/39286a9ba916bf0634d8.jpg","/uploads/fax-cover-20261104-081.jpg":"_assets/39286a9ba916bf0634d8.jpg","/fax-cover-20261104-081.jpg":"_assets/39286a9ba916bf0634d8.jpg","https://corehtml5games.com/wp-content/uploads/fax-cover-20261104-061.jpg":"_assets/dfd918c8a012723f88d7.jpg","/wp-content/uploads/fax-cover-20261104-061.jpg":"_assets/dfd918c8a012723f88d7.jpg","/uploads/fax-cover-20261104-061.jpg":"_assets/dfd918c8a012723f88d7.jpg","/fax-cover-20261104-061.jpg":"_assets/dfd918c8a012723f88d7.jpg","https://corehtml5games.com/wp-content/plugins/beautiful-and-responsive-cookie-consent/public/cookieNSCconsent.min.js?ver=4.5.4":"_assets/c573b64c327b5b355134.js","/wp-content/plugins/beautiful-and-responsive-cookie-consent/public/cookieNSCconsent.min.js":"_assets/c573b64c327b5b355134.js","/wp-content/plugins/beautiful-and-responsive-cookie-consent/public/cookieNSCconsent.min.js?ver=4.5.4":"_assets/c573b64c327b5b355134.js","/plugins/beautiful-and-responsive-cookie-consent/public/cookieNSCconsent.min.js":"_assets/c573b64c327b5b355134.js","/beautiful-and-responsive-cookie-consent/public/cookieNSCconsent.min.js":"_assets/c573b64c327b5b355134.js","/public/cookieNSCconsent.min.js":"_assets/c573b64c327b5b355134.js","/cookieNSCconsent.min.js":"_assets/c573b64c327b5b355134.js","https://corehtml5games.com/wp-content/plugins/beautiful-and-responsive-cookie-consent/public/cookieNSCconsent.min.js":"_assets/c573b64c327b5b355134.js","https://corehtml5games.com/wp-content/themes/link-news/assets/js/navigation.min.js?ver=1.0.0":"_assets/bd7e9705573e01d301ef.js","/wp-content/themes/link-news/assets/js/navigation.min.js":"_assets/bd7e9705573e01d301ef.js","/wp-content/themes/link-news/assets/js/navigation.min.js?ver=1.0.0":"_assets/bd7e9705573e01d301ef.js","/themes/link-news/assets/js/navigation.min.js":"_assets/bd7e9705573e01d301ef.js","/link-news/assets/js/navigation.min.js":"_assets/bd7e9705573e01d301ef.js","/assets/js/navigation.min.js":"_assets/bd7e9705573e01d301ef.js","/js/navigation.min.js":"_assets/bd7e9705573e01d301ef.js","/navigation.min.js":"_assets/bd7e9705573e01d301ef.js","https://corehtml5games.com/wp-content/themes/link-news/assets/js/navigation.min.js":"_assets/bd7e9705573e01d301ef.js","https://corehtml5games.com/wp-content/themes/link-news/assets/js/slick.min.js?ver=1.8.1":"_assets/4e55b451621a060d376f.js","/wp-content/themes/link-news/assets/js/slick.min.js":"_assets/4e55b451621a060d376f.js","/wp-content/themes/link-news/assets/js/slick.min.js?ver=1.8.1":"_assets/4e55b451621a060d376f.js","/themes/link-news/assets/js/slick.min.js":"_assets/4e55b451621a060d376f.js","/link-news/assets/js/slick.min.js":"_assets/4e55b451621a060d376f.js","/assets/js/slick.min.js":"_assets/4e55b451621a060d376f.js","/js/slick.min.js":"_assets/4e55b451621a060d376f.js","/slick.min.js":"_assets/4e55b451621a060d376f.js","https://corehtml5games.com/wp-content/themes/link-news/assets/js/slick.min.js":"_assets/4e55b451621a060d376f.js","https://corehtml5games.com/wp-content/themes/link-news/assets/js/jquery.marquee.min.js?ver=1.6.0":"_assets/feade23a47f6041e6d10.js","/wp-content/themes/link-news/assets/js/jquery.marquee.min.js":"_assets/feade23a47f6041e6d10.js","/wp-content/themes/link-news/assets/js/jquery.marquee.min.js?ver=1.6.0":"_assets/feade23a47f6041e6d10.js","/themes/link-news/assets/js/jquery.marquee.min.js":"_assets/feade23a47f6041e6d10.js","/link-news/assets/js/jquery.marquee.min.js":"_assets/feade23a47f6041e6d10.js","/assets/js/jquery.marquee.min.js":"_assets/feade23a47f6041e6d10.js","/js/jquery.marquee.min.js":"_assets/feade23a47f6041e6d10.js","/jquery.marquee.min.js":"_assets/feade23a47f6041e6d10.js","https://corehtml5games.com/wp-content/themes/link-news/assets/js/jquery.marquee.min.js":"_assets/feade23a47f6041e6d10.js","https://corehtml5games.com/wp-content/themes/link-news/assets/js/custom.min.js?ver=1.0.0":"_assets/5560f6c8ea9c7adbe92b.js","/wp-content/themes/link-news/assets/js/custom.min.js":"_assets/5560f6c8ea9c7adbe92b.js","/wp-content/themes/link-news/assets/js/custom.min.js?ver=1.0.0":"_assets/5560f6c8ea9c7adbe92b.js","/themes/link-news/assets/js/custom.min.js":"_assets/5560f6c8ea9c7adbe92b.js","/link-news/assets/js/custom.min.js":"_assets/5560f6c8ea9c7adbe92b.js","/assets/js/custom.min.js":"_assets/5560f6c8ea9c7adbe92b.js","/js/custom.min.js":"_assets/5560f6c8ea9c7adbe92b.js","/custom.min.js":"_assets/5560f6c8ea9c7adbe92b.js","https://corehtml5games.com/wp-content/themes/link-news/assets/js/custom.min.js":"_assets/5560f6c8ea9c7adbe92b.js","https://corehtml5games.com/wp-content/uploads/2025/04/logo-2.png":"_assets/c153d510aefe65b1a5bc.png","/wp-content/uploads/2025/04/logo-2.png":"_assets/c153d510aefe65b1a5bc.png","/uploads/2025/04/logo-2.png":"_assets/c153d510aefe65b1a5bc.png","/2025/04/logo-2.png":"_assets/c153d510aefe65b1a5bc.png","/04/logo-2.png":"_assets/c153d510aefe65b1a5bc.png","/logo-2.png":"_assets/c153d510aefe65b1a5bc.png","https://corehtml5games.com/wp-content/uploads/fax-cover-20261104-065-150x150.jpg":"_assets/279672f9afba884b1270.jpg","/wp-content/uploads/fax-cover-20261104-065-150x150.jpg":"_assets/279672f9afba884b1270.jpg","/uploads/fax-cover-20261104-065-150x150.jpg":"_assets/279672f9afba884b1270.jpg","/fax-cover-20261104-065-150x150.jpg":"_assets/279672f9afba884b1270.jpg","https://corehtml5games.com/wp-content/uploads/fax-cover-20261104-077-150x150.jpg":"_assets/4b82d25063ef101c9ef0.jpg","/wp-content/uploads/fax-cover-20261104-077-150x150.jpg":"_assets/4b82d25063ef101c9ef0.jpg","/uploads/fax-cover-20261104-077-150x150.jpg":"_assets/4b82d25063ef101c9ef0.jpg","/fax-cover-20261104-077-150x150.jpg":"_assets/4b82d25063ef101c9ef0.jpg","https://corehtml5games.com/wp-content/uploads/fax-cover-20261104-070-150x150.jpg":"_assets/6cd124f0b7326c036298.jpg","/wp-content/uploads/fax-cover-20261104-070-150x150.jpg":"_assets/6cd124f0b7326c036298.jpg","/uploads/fax-cover-20261104-070-150x150.jpg":"_assets/6cd124f0b7326c036298.jpg","/fax-cover-20261104-070-150x150.jpg":"_assets/6cd124f0b7326c036298.jpg","https://corehtml5games.com/wp-content/uploads/fax-cover-20261104-081-150x150.jpg":"_assets/5352619be5dac9ae3799.jpg","/wp-content/uploads/fax-cover-20261104-081-150x150.jpg":"_assets/5352619be5dac9ae3799.jpg","/uploads/fax-cover-20261104-081-150x150.jpg":"_assets/5352619be5dac9ae3799.jpg","/fax-cover-20261104-081-150x150.jpg":"_assets/5352619be5dac9ae3799.jpg","https://corehtml5games.com/wp-content/uploads/fax-cover-20261104-061-150x150.jpg":"_assets/b65a29e52e9464514b0e.jpg","/wp-content/uploads/fax-cover-20261104-061-150x150.jpg":"_assets/b65a29e52e9464514b0e.jpg","/uploads/fax-cover-20261104-061-150x150.jpg":"_assets/b65a29e52e9464514b0e.jpg","/fax-cover-20261104-061-150x150.jpg":"_assets/b65a29e52e9464514b0e.jpg","https://corehtml5games.com/wp-content/themes/link-news/assets/webfonts/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2","/wp-content/themes/link-news/assets/webfonts/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2","/themes/link-news/assets/webfonts/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2","/link-news/assets/webfonts/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2","/assets/webfonts/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2","/webfonts/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2","/fa-solid-900.woff2":"_assets/886c86112a804ef1ddd1.woff2"};
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
