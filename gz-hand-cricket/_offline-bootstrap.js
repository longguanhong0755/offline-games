(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Hand_Cricket/style.css":"_assets/792ddb51e453607dd447.css","/GameZone/Games/Hand_Cricket/style.css":"_assets/792ddb51e453607dd447.css","/Games/Hand_Cricket/style.css":"_assets/792ddb51e453607dd447.css","/Hand_Cricket/style.css":"_assets/792ddb51e453607dd447.css","/style.css":"_assets/792ddb51e453607dd447.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://fonts.googleapis.com/css2?family=Eater&display=swap":"_assets/56cc405df0984eed982d.css","/css2":"_assets/d4e2f9895ba61b2b80fa.css","/css2?family=Eater&display=swap":"_assets/56cc405df0984eed982d.css","https://fonts.googleapis.com/css2":"_assets/d4e2f9895ba61b2b80fa.css","https://fonts.googleapis.com/css2?family=Lemon&display=swap":"_assets/5a0732a7bb2f8829a9e0.css","/css2?family=Lemon&display=swap":"_assets/5a0732a7bb2f8829a9e0.css","https://fonts.googleapis.com/css2?family=Krona+One&display=swap":"_assets/3cc3c99b2583a640c96c.css","/css2?family=Krona+One&display=swap":"_assets/3cc3c99b2583a640c96c.css","https://fonts.googleapis.com/css2?family=Marcellus&display=swap":"_assets/82db3f11e7689433612b.css","/css2?family=Marcellus&display=swap":"_assets/82db3f11e7689433612b.css","https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap":"_assets/d31a601a4b0acc53dde3.css","/css2?family=Poppins:wght@600&display=swap":"_assets/d31a601a4b0acc53dde3.css","https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap":"_assets/d4e2f9895ba61b2b80fa.css","/css2?family=Black+Ops+One&display=swap":"_assets/d4e2f9895ba61b2b80fa.css","https://kunjgit.github.io/GameZone/Games/Hand_Cricket/images/one.png":"_assets/d838b1e7e7aeb8881f0d.png","/GameZone/Games/Hand_Cricket/images/one.png":"_assets/d838b1e7e7aeb8881f0d.png","/Games/Hand_Cricket/images/one.png":"_assets/d838b1e7e7aeb8881f0d.png","/Hand_Cricket/images/one.png":"_assets/d838b1e7e7aeb8881f0d.png","/images/one.png":"_assets/d838b1e7e7aeb8881f0d.png","/one.png":"_assets/d838b1e7e7aeb8881f0d.png","https://kunjgit.github.io/GameZone/Games/Hand_Cricket/images/two.png":"_assets/a0c475737ada1d428ebd.png","/GameZone/Games/Hand_Cricket/images/two.png":"_assets/a0c475737ada1d428ebd.png","/Games/Hand_Cricket/images/two.png":"_assets/a0c475737ada1d428ebd.png","/Hand_Cricket/images/two.png":"_assets/a0c475737ada1d428ebd.png","/images/two.png":"_assets/a0c475737ada1d428ebd.png","/two.png":"_assets/a0c475737ada1d428ebd.png","https://kunjgit.github.io/GameZone/Games/Hand_Cricket/images/three.png":"_assets/4744580ed05a840a7802.png","/GameZone/Games/Hand_Cricket/images/three.png":"_assets/4744580ed05a840a7802.png","/Games/Hand_Cricket/images/three.png":"_assets/4744580ed05a840a7802.png","/Hand_Cricket/images/three.png":"_assets/4744580ed05a840a7802.png","/images/three.png":"_assets/4744580ed05a840a7802.png","/three.png":"_assets/4744580ed05a840a7802.png","https://kunjgit.github.io/GameZone/Games/Hand_Cricket/images/four.png":"_assets/9d4fcd36d12a7ed20f43.png","/GameZone/Games/Hand_Cricket/images/four.png":"_assets/9d4fcd36d12a7ed20f43.png","/Games/Hand_Cricket/images/four.png":"_assets/9d4fcd36d12a7ed20f43.png","/Hand_Cricket/images/four.png":"_assets/9d4fcd36d12a7ed20f43.png","/images/four.png":"_assets/9d4fcd36d12a7ed20f43.png","/four.png":"_assets/9d4fcd36d12a7ed20f43.png","https://kunjgit.github.io/GameZone/Games/Hand_Cricket/images/five.png":"_assets/6d3b9662074c33a7af6f.png","/GameZone/Games/Hand_Cricket/images/five.png":"_assets/6d3b9662074c33a7af6f.png","/Games/Hand_Cricket/images/five.png":"_assets/6d3b9662074c33a7af6f.png","/Hand_Cricket/images/five.png":"_assets/6d3b9662074c33a7af6f.png","/images/five.png":"_assets/6d3b9662074c33a7af6f.png","/five.png":"_assets/6d3b9662074c33a7af6f.png","https://kunjgit.github.io/GameZone/Games/Hand_Cricket/images/six.png":"_assets/d40ea2b347389a111a8e.png","/GameZone/Games/Hand_Cricket/images/six.png":"_assets/d40ea2b347389a111a8e.png","/Games/Hand_Cricket/images/six.png":"_assets/d40ea2b347389a111a8e.png","/Hand_Cricket/images/six.png":"_assets/d40ea2b347389a111a8e.png","/images/six.png":"_assets/d40ea2b347389a111a8e.png","/six.png":"_assets/d40ea2b347389a111a8e.png","https://kunjgit.github.io/GameZone/Games/Hand_Cricket/script.js":"_assets/26dea9bae3d299ac66b1.js","/GameZone/Games/Hand_Cricket/script.js":"_assets/26dea9bae3d299ac66b1.js","/Games/Hand_Cricket/script.js":"_assets/26dea9bae3d299ac66b1.js","/Hand_Cricket/script.js":"_assets/26dea9bae3d299ac66b1.js","/script.js":"_assets/26dea9bae3d299ac66b1.js","https://fonts.gstatic.com/s/kronaone/v15/jAnEgHdjHcjgfIb1ZcUyNoWg.woff2":"_assets/e9d1d62518ebf3f92580.woff2","/s/kronaone/v15/jAnEgHdjHcjgfIb1ZcUyNoWg.woff2":"_assets/e9d1d62518ebf3f92580.woff2","/kronaone/v15/jAnEgHdjHcjgfIb1ZcUyNoWg.woff2":"_assets/e9d1d62518ebf3f92580.woff2","/v15/jAnEgHdjHcjgfIb1ZcUyNoWg.woff2":"_assets/e9d1d62518ebf3f92580.woff2","/jAnEgHdjHcjgfIb1ZcUyNoWg.woff2":"_assets/e9d1d62518ebf3f92580.woff2","https://fonts.gstatic.com/s/marcellus/v14/wEO_EBrOk8hQLDvIAF81VvoK.woff2":"_assets/8a539799d12e3a144273.woff2","/s/marcellus/v14/wEO_EBrOk8hQLDvIAF81VvoK.woff2":"_assets/8a539799d12e3a144273.woff2","/marcellus/v14/wEO_EBrOk8hQLDvIAF81VvoK.woff2":"_assets/8a539799d12e3a144273.woff2","/v14/wEO_EBrOk8hQLDvIAF81VvoK.woff2":"_assets/8a539799d12e3a144273.woff2","/wEO_EBrOk8hQLDvIAF81VvoK.woff2":"_assets/8a539799d12e3a144273.woff2","https://fonts.gstatic.com/s/lemon/v19/HI_EiYEVKqRMq3jGQ5Q.woff2":"_assets/a82e274e84ca104c906a.woff2","/s/lemon/v19/HI_EiYEVKqRMq3jGQ5Q.woff2":"_assets/a82e274e84ca104c906a.woff2","/lemon/v19/HI_EiYEVKqRMq3jGQ5Q.woff2":"_assets/a82e274e84ca104c906a.woff2","/v19/HI_EiYEVKqRMq3jGQ5Q.woff2":"_assets/a82e274e84ca104c906a.woff2","/HI_EiYEVKqRMq3jGQ5Q.woff2":"_assets/a82e274e84ca104c906a.woff2","https://fonts.gstatic.com/s/eater/v27/mtG04_FCK7bOvquxsXA.woff2":"_assets/5abca7691eeab50a51b3.woff2","/s/eater/v27/mtG04_FCK7bOvquxsXA.woff2":"_assets/5abca7691eeab50a51b3.woff2","/eater/v27/mtG04_FCK7bOvquxsXA.woff2":"_assets/5abca7691eeab50a51b3.woff2","/v27/mtG04_FCK7bOvquxsXA.woff2":"_assets/5abca7691eeab50a51b3.woff2","/mtG04_FCK7bOvquxsXA.woff2":"_assets/5abca7691eeab50a51b3.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2"};
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
