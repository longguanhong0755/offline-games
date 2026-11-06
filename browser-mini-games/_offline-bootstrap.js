(() => {
  "use strict";
  const RUNTIME_MAP = {"https://nikitaboyarkin.github.io/images/games.svg":"_assets/6dd9d4ba93d73e062a8e.svg","/images/games.svg":"_assets/6dd9d4ba93d73e062a8e.svg","/games.svg":"_assets/6dd9d4ba93d73e062a8e.svg","https://nikitaboyarkin.github.io/fonts/inter-cyrillic.woff2":"_assets/aebf2ab4a4ce6810d73c.woff2","/fonts/inter-cyrillic.woff2":"_assets/aebf2ab4a4ce6810d73c.woff2","/inter-cyrillic.woff2":"_assets/aebf2ab4a4ce6810d73c.woff2","https://nikitaboyarkin.github.io/fonts/inter-latin.woff2":"_assets/c940764593d0fe5d596b.woff2","/fonts/inter-latin.woff2":"_assets/c940764593d0fe5d596b.woff2","/inter-latin.woff2":"_assets/c940764593d0fe5d596b.woff2","https://nikitaboyarkin.github.io/_astro/Analytics.astro_astro_type_script_index_0_lang.GncLMz36.js":"_assets/d88cc7207e1ed0fff4a6.js","/_astro/Analytics.astro_astro_type_script_index_0_lang.GncLMz36.js":"_assets/d88cc7207e1ed0fff4a6.js","/Analytics.astro_astro_type_script_index_0_lang.GncLMz36.js":"_assets/d88cc7207e1ed0fff4a6.js","https://nikitaboyarkin.github.io/_astro/Base.CnTYZYgc.css":"_assets/3109a32eb5c8c81abd57.css","/_astro/Base.CnTYZYgc.css":"_assets/3109a32eb5c8c81abd57.css","/Base.CnTYZYgc.css":"_assets/3109a32eb5c8c81abd57.css","https://nikitaboyarkin.github.io/_astro/prose.CewluQq2.css":"_assets/9618785ac3ae01188378.css","/_astro/prose.CewluQq2.css":"_assets/9618785ac3ae01188378.css","/prose.CewluQq2.css":"_assets/9618785ac3ae01188378.css","https://nikitaboyarkin.github.io/_astro/ChartCard.D9u7yNp7.css":"_assets/ca171664b29c640c97a7.css","/_astro/ChartCard.D9u7yNp7.css":"_assets/ca171664b29c640c97a7.css","/ChartCard.D9u7yNp7.css":"_assets/ca171664b29c640c97a7.css","https://nikitaboyarkin.github.io/_astro/SearchBox.astro_astro_type_script_index_0_lang.BIEDmiSW.js":"_assets/fd42dbf720839df2479a.js","/_astro/SearchBox.astro_astro_type_script_index_0_lang.BIEDmiSW.js":"_assets/fd42dbf720839df2479a.js","/SearchBox.astro_astro_type_script_index_0_lang.BIEDmiSW.js":"_assets/fd42dbf720839df2479a.js","https://nikitaboyarkin.github.io/_astro/Base.astro_astro_type_script_index_0_lang.D1bWkRTA.js":"_assets/166f42ee5ea9539b4c4f.js","/_astro/Base.astro_astro_type_script_index_0_lang.D1bWkRTA.js":"_assets/166f42ee5ea9539b4c4f.js","/Base.astro_astro_type_script_index_0_lang.D1bWkRTA.js":"_assets/166f42ee5ea9539b4c4f.js","https://nikitaboyarkin.github.io/_astro/NavRoles.astro_astro_type_script_index_0_lang.DD7XSl_8.js":"_assets/7644bff29fe4582fc18d.js","/_astro/NavRoles.astro_astro_type_script_index_0_lang.DD7XSl_8.js":"_assets/7644bff29fe4582fc18d.js","/NavRoles.astro_astro_type_script_index_0_lang.DD7XSl_8.js":"_assets/7644bff29fe4582fc18d.js","https://nikitaboyarkin.github.io/_astro/ProjectGraph.astro_astro_type_script_index_0_lang.BOrQFpBn.js":"_assets/451b1e637e5b33cca3b2.js","/_astro/ProjectGraph.astro_astro_type_script_index_0_lang.BOrQFpBn.js":"_assets/451b1e637e5b33cca3b2.js","/ProjectGraph.astro_astro_type_script_index_0_lang.BOrQFpBn.js":"_assets/451b1e637e5b33cca3b2.js","https://nikitaboyarkin.github.io/_astro/page.BDh2vuYI.js":"_assets/fce9ccf60de44254eba9.js","/_astro/page.BDh2vuYI.js":"_assets/fce9ccf60de44254eba9.js","/page.BDh2vuYI.js":"_assets/fce9ccf60de44254eba9.js","https://nikitaboyarkin.github.io/_astro/vite-preload.CxFQXtKk.js":"_assets/b39ea8a0a9ff7dd6b08f.js","/_astro/vite-preload.CxFQXtKk.js":"_assets/b39ea8a0a9ff7dd6b08f.js","/vite-preload.CxFQXtKk.js":"_assets/b39ea8a0a9ff7dd6b08f.js","https://nikitaboyarkin.github.io/fonts/cormorant-latin.woff2":"_assets/c27d01380ad1595adba8.woff2","/fonts/cormorant-latin.woff2":"_assets/c27d01380ad1595adba8.woff2","/cormorant-latin.woff2":"_assets/c27d01380ad1595adba8.woff2","https://nikitaboyarkin.github.io/_astro/fuzzy.SMNeYIvj.js":"_assets/4be8cf40e711e254fb9b.js","/_astro/fuzzy.SMNeYIvj.js":"_assets/4be8cf40e711e254fb9b.js","/fuzzy.SMNeYIvj.js":"_assets/4be8cf40e711e254fb9b.js","https://nikitaboyarkin.github.io/_astro/rolldown-runtime.BpQH8Ho1.js":"_assets/f42a7e25f42fd00b0935.js","/_astro/rolldown-runtime.BpQH8Ho1.js":"_assets/f42a7e25f42fd00b0935.js","/rolldown-runtime.BpQH8Ho1.js":"_assets/f42a7e25f42fd00b0935.js","https://nikitaboyarkin.github.io/_astro/scroll-depth.BOG9e7CL.js":"_assets/7c8e8b33ba2ec82a1778.js","/_astro/scroll-depth.BOG9e7CL.js":"_assets/7c8e8b33ba2ec82a1778.js","/scroll-depth.BOG9e7CL.js":"_assets/7c8e8b33ba2ec82a1778.js","https://nikitaboyarkin.github.io/_astro/analytics.xmTxvE2w.js":"_assets/fe565d48933416cd3328.js","/_astro/analytics.xmTxvE2w.js":"_assets/fe565d48933416cd3328.js","/analytics.xmTxvE2w.js":"_assets/fe565d48933416cd3328.js","https://nikitaboyarkin.github.io/_astro/graph.CzS6hJrH.js":"_assets/664f834ed934e52b72e5.js","/_astro/graph.CzS6hJrH.js":"_assets/664f834ed934e52b72e5.js","/graph.CzS6hJrH.js":"_assets/664f834ed934e52b72e5.js","https://nikitaboyarkin.github.io/_astro/module.DnUaar8y.js":"_assets/9efe3296b593e648309f.js","/_astro/module.DnUaar8y.js":"_assets/9efe3296b593e648309f.js","/module.DnUaar8y.js":"_assets/9efe3296b593e648309f.js","https://us-assets.i.posthog.com/static/1.422.5/exception-autocapture.js":"_assets/e1ed9d27f904383f408b.js","/static/1.422.5/exception-autocapture.js":"_assets/e1ed9d27f904383f408b.js","/1.422.5/exception-autocapture.js":"_assets/e1ed9d27f904383f408b.js","/exception-autocapture.js":"_assets/e1ed9d27f904383f408b.js","https://us-assets.i.posthog.com/array/phc_tdju2w288PnkFE2e96efWKpoCvBPHPtveSztZK9NnGrv/config.js":"_assets/a6cf61205113035d15c8.js","/array/phc_tdju2w288PnkFE2e96efWKpoCvBPHPtveSztZK9NnGrv/config.js":"_assets/a6cf61205113035d15c8.js","/phc_tdju2w288PnkFE2e96efWKpoCvBPHPtveSztZK9NnGrv/config.js":"_assets/a6cf61205113035d15c8.js","/config.js":"_assets/a6cf61205113035d15c8.js","https://us-assets.i.posthog.com/static/1.422.5/web-vitals-with-attribution.js":"_assets/92088043648c51b3cfed.js","/static/1.422.5/web-vitals-with-attribution.js":"_assets/92088043648c51b3cfed.js","/1.422.5/web-vitals-with-attribution.js":"_assets/92088043648c51b3cfed.js","/web-vitals-with-attribution.js":"_assets/92088043648c51b3cfed.js","https://us-assets.i.posthog.com/static/1.422.5/posthog-recorder.js":"_assets/17f6ed19ba98af2dc01c.js","/static/1.422.5/posthog-recorder.js":"_assets/17f6ed19ba98af2dc01c.js","/1.422.5/posthog-recorder.js":"_assets/17f6ed19ba98af2dc01c.js","/posthog-recorder.js":"_assets/17f6ed19ba98af2dc01c.js","https://us-assets.i.posthog.com/static/1.422.5/dead-clicks-autocapture.js":"_assets/b026e10074b6eb57f38a.js","/static/1.422.5/dead-clicks-autocapture.js":"_assets/b026e10074b6eb57f38a.js","/1.422.5/dead-clicks-autocapture.js":"_assets/b026e10074b6eb57f38a.js","/dead-clicks-autocapture.js":"_assets/b026e10074b6eb57f38a.js","https://us-assets.i.posthog.com/static/1.422.5/surveys.js":"_assets/6104731912d3951f5dd2.js","/static/1.422.5/surveys.js":"_assets/6104731912d3951f5dd2.js","/1.422.5/surveys.js":"_assets/6104731912d3951f5dd2.js","/surveys.js":"_assets/6104731912d3951f5dd2.js"};
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
