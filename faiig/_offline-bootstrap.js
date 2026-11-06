(() => {
  "use strict";
  const RUNTIME_MAP = {"https://rtxt25.github.io/FAIIG/css/components.css":"_assets/30d732eaac0b0897bb24.css","/FAIIG/css/components.css":"_assets/30d732eaac0b0897bb24.css","/css/components.css":"_assets/30d732eaac0b0897bb24.css","/components.css":"_assets/30d732eaac0b0897bb24.css","https://rtxt25.github.io/FAIIG/css/system-style.css":"_assets/ed879bfbca14d475d70a.css","/FAIIG/css/system-style.css":"_assets/ed879bfbca14d475d70a.css","/css/system-style.css":"_assets/ed879bfbca14d475d70a.css","/system-style.css":"_assets/ed879bfbca14d475d70a.css","https://fonts.googleapis.com/css?family=Inconsolata":"_assets/78c715b7a76f2181916c.css","/css":"_assets/78c715b7a76f2181916c.css","/css?family=Inconsolata":"_assets/78c715b7a76f2181916c.css","https://fonts.googleapis.com/css":"_assets/78c715b7a76f2181916c.css","https://rtxt25.github.io/FAIIG/css/misc.css":"_assets/ca2bd6d6038b9a035a49.css","/FAIIG/css/misc.css":"_assets/ca2bd6d6038b9a035a49.css","/css/misc.css":"_assets/ca2bd6d6038b9a035a49.css","/misc.css":"_assets/ca2bd6d6038b9a035a49.css","https://rtxt25.github.io/FAIIG/css/other-tabs.css":"_assets/2d16bd3a2b076f837b8e.css","/FAIIG/css/other-tabs.css":"_assets/2d16bd3a2b076f837b8e.css","/css/other-tabs.css":"_assets/2d16bd3a2b076f837b8e.css","/other-tabs.css":"_assets/2d16bd3a2b076f837b8e.css","https://rtxt25.github.io/FAIIG/css/bars.css":"_assets/7ef28e06f7bc361505a9.css","/FAIIG/css/bars.css":"_assets/7ef28e06f7bc361505a9.css","/css/bars.css":"_assets/7ef28e06f7bc361505a9.css","/bars.css":"_assets/7ef28e06f7bc361505a9.css","https://rtxt25.github.io/FAIIG/css/general-style.css":"_assets/becf56d9e9c3ca441193.css","/FAIIG/css/general-style.css":"_assets/becf56d9e9c3ca441193.css","/css/general-style.css":"_assets/becf56d9e9c3ca441193.css","/general-style.css":"_assets/becf56d9e9c3ca441193.css","https://rtxt25.github.io/FAIIG/css/tree-node.css":"_assets/815d96a27f97542843a2.css","/FAIIG/css/tree-node.css":"_assets/815d96a27f97542843a2.css","/css/tree-node.css":"_assets/815d96a27f97542843a2.css","/tree-node.css":"_assets/815d96a27f97542843a2.css","https://rtxt25.github.io/FAIIG/css/popup.css":"_assets/8b27605c29b647cede53.css","/FAIIG/css/popup.css":"_assets/8b27605c29b647cede53.css","/css/popup.css":"_assets/8b27605c29b647cede53.css","/popup.css":"_assets/8b27605c29b647cede53.css","https://rtxt25.github.io/FAIIG/js/mod.js":"_assets/e60cc76108fac24f885a.js","/FAIIG/js/mod.js":"_assets/e60cc76108fac24f885a.js","/js/mod.js":"_assets/e60cc76108fac24f885a.js","/mod.js":"_assets/e60cc76108fac24f885a.js","https://rtxt25.github.io/FAIIG/js/technical/layerSupport.js":"_assets/cb3d555eb20b7cbcb2cf.js","/FAIIG/js/technical/layerSupport.js":"_assets/cb3d555eb20b7cbcb2cf.js","/js/technical/layerSupport.js":"_assets/cb3d555eb20b7cbcb2cf.js","/technical/layerSupport.js":"_assets/cb3d555eb20b7cbcb2cf.js","/layerSupport.js":"_assets/cb3d555eb20b7cbcb2cf.js","https://rtxt25.github.io/FAIIG/js/technical/loader.js":"_assets/286ab1860f45dd2fe66f.js","/FAIIG/js/technical/loader.js":"_assets/286ab1860f45dd2fe66f.js","/js/technical/loader.js":"_assets/286ab1860f45dd2fe66f.js","/technical/loader.js":"_assets/286ab1860f45dd2fe66f.js","/loader.js":"_assets/286ab1860f45dd2fe66f.js","https://rtxt25.github.io/FAIIG/js/technical/displays.js":"_assets/a9a7db58771f1eed828f.js","/FAIIG/js/technical/displays.js":"_assets/a9a7db58771f1eed828f.js","/js/technical/displays.js":"_assets/a9a7db58771f1eed828f.js","/technical/displays.js":"_assets/a9a7db58771f1eed828f.js","/displays.js":"_assets/a9a7db58771f1eed828f.js","https://rtxt25.github.io/FAIIG/js/utils/easyAccess.js":"_assets/36b3c9cb63c566785b17.js","/FAIIG/js/utils/easyAccess.js":"_assets/36b3c9cb63c566785b17.js","/js/utils/easyAccess.js":"_assets/36b3c9cb63c566785b17.js","/utils/easyAccess.js":"_assets/36b3c9cb63c566785b17.js","/easyAccess.js":"_assets/36b3c9cb63c566785b17.js","https://rtxt25.github.io/FAIIG/js/game.js":"_assets/1418fa54b40668141420.js","/FAIIG/js/game.js":"_assets/1418fa54b40668141420.js","/js/game.js":"_assets/1418fa54b40668141420.js","/game.js":"_assets/1418fa54b40668141420.js","https://rtxt25.github.io/FAIIG/js/utils.js":"_assets/dae387255bde0f1f0f14.js","/FAIIG/js/utils.js":"_assets/dae387255bde0f1f0f14.js","/js/utils.js":"_assets/dae387255bde0f1f0f14.js","/utils.js":"_assets/dae387255bde0f1f0f14.js","https://rtxt25.github.io/FAIIG/js/technical/systemComponents.js":"_assets/8839ba5c9120788bc4fc.js","/FAIIG/js/technical/systemComponents.js":"_assets/8839ba5c9120788bc4fc.js","/js/technical/systemComponents.js":"_assets/8839ba5c9120788bc4fc.js","/technical/systemComponents.js":"_assets/8839ba5c9120788bc4fc.js","/systemComponents.js":"_assets/8839ba5c9120788bc4fc.js","https://rtxt25.github.io/FAIIG/js/technical/particleSystem.js":"_assets/afed5b42bf05a1dd85df.js","/FAIIG/js/technical/particleSystem.js":"_assets/afed5b42bf05a1dd85df.js","/js/technical/particleSystem.js":"_assets/afed5b42bf05a1dd85df.js","/technical/particleSystem.js":"_assets/afed5b42bf05a1dd85df.js","/particleSystem.js":"_assets/afed5b42bf05a1dd85df.js","https://rtxt25.github.io/FAIIG/js/technical/break_eternity.js":"_assets/6bb39f41986a1ebb7b27.js","/FAIIG/js/technical/break_eternity.js":"_assets/6bb39f41986a1ebb7b27.js","/js/technical/break_eternity.js":"_assets/6bb39f41986a1ebb7b27.js","/technical/break_eternity.js":"_assets/6bb39f41986a1ebb7b27.js","/break_eternity.js":"_assets/6bb39f41986a1ebb7b27.js","https://rtxt25.github.io/FAIIG/options_wheel.png":"_assets/47467267f025b226cf00.png","/FAIIG/options_wheel.png":"_assets/47467267f025b226cf00.png","/options_wheel.png":"_assets/47467267f025b226cf00.png","https://rtxt25.github.io/FAIIG/discord.png":"_assets/2a0f55d8172e55633bcf.png","/FAIIG/discord.png":"_assets/2a0f55d8172e55633bcf.png","/discord.png":"_assets/2a0f55d8172e55633bcf.png","https://rtxt25.github.io/FAIIG/js/components.js":"_assets/da5e1a59a94f2b453c4b.js","/FAIIG/js/components.js":"_assets/da5e1a59a94f2b453c4b.js","/js/components.js":"_assets/da5e1a59a94f2b453c4b.js","/components.js":"_assets/da5e1a59a94f2b453c4b.js","https://rtxt25.github.io/FAIIG/js/utils/NumberFormating.js":"_assets/45970292d3ea0b23c934.js","/FAIIG/js/utils/NumberFormating.js":"_assets/45970292d3ea0b23c934.js","/js/utils/NumberFormating.js":"_assets/45970292d3ea0b23c934.js","/utils/NumberFormating.js":"_assets/45970292d3ea0b23c934.js","/NumberFormating.js":"_assets/45970292d3ea0b23c934.js","https://rtxt25.github.io/FAIIG/js/technical/temp.js":"_assets/d9ec80082bd61fde57c7.js","/FAIIG/js/technical/temp.js":"_assets/d9ec80082bd61fde57c7.js","/js/technical/temp.js":"_assets/d9ec80082bd61fde57c7.js","/technical/temp.js":"_assets/d9ec80082bd61fde57c7.js","/temp.js":"_assets/d9ec80082bd61fde57c7.js","https://rtxt25.github.io/FAIIG/js/utils/options.js":"_assets/f7f50b037c28c20f339d.js","/FAIIG/js/utils/options.js":"_assets/f7f50b037c28c20f339d.js","/js/utils/options.js":"_assets/f7f50b037c28c20f339d.js","/utils/options.js":"_assets/f7f50b037c28c20f339d.js","/options.js":"_assets/f7f50b037c28c20f339d.js","https://rtxt25.github.io/FAIIG/js/technical/canvas.js":"_assets/52d63e5a5b5ee34d9ea8.js","/FAIIG/js/technical/canvas.js":"_assets/52d63e5a5b5ee34d9ea8.js","/js/technical/canvas.js":"_assets/52d63e5a5b5ee34d9ea8.js","/technical/canvas.js":"_assets/52d63e5a5b5ee34d9ea8.js","/canvas.js":"_assets/52d63e5a5b5ee34d9ea8.js","https://rtxt25.github.io/FAIIG/js/utils/save.js":"_assets/1eaf1fc6e54734b6a307.js","/FAIIG/js/utils/save.js":"_assets/1eaf1fc6e54734b6a307.js","/js/utils/save.js":"_assets/1eaf1fc6e54734b6a307.js","/utils/save.js":"_assets/1eaf1fc6e54734b6a307.js","/save.js":"_assets/1eaf1fc6e54734b6a307.js","https://rtxt25.github.io/FAIIG/js/utils/themes.js":"_assets/ce15087b9457742f3548.js","/FAIIG/js/utils/themes.js":"_assets/ce15087b9457742f3548.js","/js/utils/themes.js":"_assets/ce15087b9457742f3548.js","/utils/themes.js":"_assets/ce15087b9457742f3548.js","/themes.js":"_assets/ce15087b9457742f3548.js","https://cdn.jsdelivr.net/npm/vue@2.6.12":"_assets/29296ccacaa9ed35ed16.js","/npm/vue@2.6.12":"_assets/29296ccacaa9ed35ed16.js","/vue@2.6.12":"_assets/29296ccacaa9ed35ed16.js","https://fonts.gstatic.com/s/inconsolata/v37/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8WR32lw.woff2":"_assets/9d5a0480d2bd3e43b124.woff2","/s/inconsolata/v37/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8WR32lw.woff2":"_assets/9d5a0480d2bd3e43b124.woff2","/inconsolata/v37/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8WR32lw.woff2":"_assets/9d5a0480d2bd3e43b124.woff2","/v37/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8WR32lw.woff2":"_assets/9d5a0480d2bd3e43b124.woff2","/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8WR32lw.woff2":"_assets/9d5a0480d2bd3e43b124.woff2","https://rtxt25.github.io/FAIIG/js/tree.js":"_assets/260ee010345f7b821585.js","/FAIIG/js/tree.js":"_assets/260ee010345f7b821585.js","/js/tree.js":"_assets/260ee010345f7b821585.js","/tree.js":"_assets/260ee010345f7b821585.js","https://rtxt25.github.io/FAIIG/js/layers.js":"_assets/58f313c4d1e7b4feddd8.js","/FAIIG/js/layers.js":"_assets/58f313c4d1e7b4feddd8.js","/js/layers.js":"_assets/58f313c4d1e7b4feddd8.js","/layers.js":"_assets/58f313c4d1e7b4feddd8.js","https://rtxt25.github.io/FAIIG/js/aids.js":"_assets/df9fb164a133207126c0.js","/FAIIG/js/aids.js":"_assets/df9fb164a133207126c0.js","/js/aids.js":"_assets/df9fb164a133207126c0.js","/aids.js":"_assets/df9fb164a133207126c0.js"};
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
