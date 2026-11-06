(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fonts.googleapis.com/css2?family=Roboto&display=swap":"_assets/74e17cb85465ff1a5e27.css","/css2":"_assets/74e17cb85465ff1a5e27.css","/css2?family=Roboto&display=swap":"_assets/74e17cb85465ff1a5e27.css","https://fonts.googleapis.com/css2":"_assets/74e17cb85465ff1a5e27.css","https://thundersmotch.github.io/RotU/js/lib/popper.min.js":"_assets/153fcba241c03b7bba60.js","/RotU/js/lib/popper.min.js":"_assets/153fcba241c03b7bba60.js","/js/lib/popper.min.js":"_assets/153fcba241c03b7bba60.js","/lib/popper.min.js":"_assets/153fcba241c03b7bba60.js","/popper.min.js":"_assets/153fcba241c03b7bba60.js","https://thundersmotch.github.io/RotU/js/lib/tippy-bundle.umd.min.js":"_assets/2981c56aafe767f515fc.js","/RotU/js/lib/tippy-bundle.umd.min.js":"_assets/2981c56aafe767f515fc.js","/js/lib/tippy-bundle.umd.min.js":"_assets/2981c56aafe767f515fc.js","/lib/tippy-bundle.umd.min.js":"_assets/2981c56aafe767f515fc.js","/tippy-bundle.umd.min.js":"_assets/2981c56aafe767f515fc.js","https://thundersmotch.github.io/RotU/js/lib/jquery-3.5.1.min.js":"_assets/f7f6a5894f1d19ddad6f.js","/RotU/js/lib/jquery-3.5.1.min.js":"_assets/f7f6a5894f1d19ddad6f.js","/js/lib/jquery-3.5.1.min.js":"_assets/f7f6a5894f1d19ddad6f.js","/lib/jquery-3.5.1.min.js":"_assets/f7f6a5894f1d19ddad6f.js","/jquery-3.5.1.min.js":"_assets/f7f6a5894f1d19ddad6f.js","https://thundersmotch.github.io/RotU/style/main.css":"_assets/22df2239ac6804098325.css","/RotU/style/main.css":"_assets/22df2239ac6804098325.css","/style/main.css":"_assets/22df2239ac6804098325.css","/main.css":"_assets/22df2239ac6804098325.css","https://thundersmotch.github.io/RotU/style/loader.css":"_assets/fbbc0e6204c00ee8d5c7.css","/RotU/style/loader.css":"_assets/fbbc0e6204c00ee8d5c7.css","/style/loader.css":"_assets/fbbc0e6204c00ee8d5c7.css","/loader.css":"_assets/fbbc0e6204c00ee8d5c7.css","https://thundersmotch.github.io/RotU/js/game.js":"_assets/1c6f151166b252740d0c.js","/RotU/js/game.js":"_assets/1c6f151166b252740d0c.js","/js/game.js":"_assets/1c6f151166b252740d0c.js","/game.js":"_assets/1c6f151166b252740d0c.js","https://thundersmotch.github.io/RotU/js/lang.js":"_assets/8d9b1851a7fc5d37256b.js","/RotU/js/lang.js":"_assets/8d9b1851a7fc5d37256b.js","/js/lang.js":"_assets/8d9b1851a7fc5d37256b.js","/lang.js":"_assets/8d9b1851a7fc5d37256b.js","https://thundersmotch.github.io/RotU/js/stateManager.js":"_assets/10ed7c3a41d6b5b55388.js","/RotU/js/stateManager.js":"_assets/10ed7c3a41d6b5b55388.js","/js/stateManager.js":"_assets/10ed7c3a41d6b5b55388.js","/stateManager.js":"_assets/10ed7c3a41d6b5b55388.js","https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAo.woff2":"_assets/425c0713a8176f92273d.woff2","/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAo.woff2":"_assets/425c0713a8176f92273d.woff2","/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAo.woff2":"_assets/425c0713a8176f92273d.woff2","/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAo.woff2":"_assets/425c0713a8176f92273d.woff2","/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAo.woff2":"_assets/425c0713a8176f92273d.woff2","https://thundersmotch.github.io/RotU/js/elements/footer.js":"_assets/d136ea42aa1b1a9323ec.js","/RotU/js/elements/footer.js":"_assets/d136ea42aa1b1a9323ec.js","/js/elements/footer.js":"_assets/d136ea42aa1b1a9323ec.js","/elements/footer.js":"_assets/d136ea42aa1b1a9323ec.js","/footer.js":"_assets/d136ea42aa1b1a9323ec.js","https://thundersmotch.github.io/RotU/js/elements/achievements.js":"_assets/3248d3fd88b18ab782f3.js","/RotU/js/elements/achievements.js":"_assets/3248d3fd88b18ab782f3.js","/js/elements/achievements.js":"_assets/3248d3fd88b18ab782f3.js","/elements/achievements.js":"_assets/3248d3fd88b18ab782f3.js","/achievements.js":"_assets/3248d3fd88b18ab782f3.js","https://thundersmotch.github.io/RotU/js/elements/header.js":"_assets/c28225314430605cb187.js","/RotU/js/elements/header.js":"_assets/c28225314430605cb187.js","/js/elements/header.js":"_assets/c28225314430605cb187.js","/elements/header.js":"_assets/c28225314430605cb187.js","/header.js":"_assets/c28225314430605cb187.js","https://thundersmotch.github.io/RotU/js/elements/settings.js":"_assets/eba4acda7cb6dab5b170.js","/RotU/js/elements/settings.js":"_assets/eba4acda7cb6dab5b170.js","/js/elements/settings.js":"_assets/eba4acda7cb6dab5b170.js","/elements/settings.js":"_assets/eba4acda7cb6dab5b170.js","/settings.js":"_assets/eba4acda7cb6dab5b170.js","https://thundersmotch.github.io/RotU/js/elements/tooltip.js":"_assets/7f47c4ce0ff198fcebce.js","/RotU/js/elements/tooltip.js":"_assets/7f47c4ce0ff198fcebce.js","/js/elements/tooltip.js":"_assets/7f47c4ce0ff198fcebce.js","/elements/tooltip.js":"_assets/7f47c4ce0ff198fcebce.js","/tooltip.js":"_assets/7f47c4ce0ff198fcebce.js","https://thundersmotch.github.io/RotU/js/elements/chat.js":"_assets/1ec46e33ece654b08154.js","/RotU/js/elements/chat.js":"_assets/1ec46e33ece654b08154.js","/js/elements/chat.js":"_assets/1ec46e33ece654b08154.js","/elements/chat.js":"_assets/1ec46e33ece654b08154.js","/chat.js":"_assets/1ec46e33ece654b08154.js","https://thundersmotch.github.io/RotU/js/elements/storage.js":"_assets/0c205ce5c8dc94e9cd45.js","/RotU/js/elements/storage.js":"_assets/0c205ce5c8dc94e9cd45.js","/js/elements/storage.js":"_assets/0c205ce5c8dc94e9cd45.js","/elements/storage.js":"_assets/0c205ce5c8dc94e9cd45.js","/storage.js":"_assets/0c205ce5c8dc94e9cd45.js","https://thundersmotch.github.io/RotU/js/stageManager.js":"_assets/43b1accf1fff3aad7ed5.js","/RotU/js/stageManager.js":"_assets/43b1accf1fff3aad7ed5.js","/js/stageManager.js":"_assets/43b1accf1fff3aad7ed5.js","/stageManager.js":"_assets/43b1accf1fff3aad7ed5.js","https://thundersmotch.github.io/RotU/js/buttons.js":"_assets/7365214cedc7e864c863.js","/RotU/js/buttons.js":"_assets/7365214cedc7e864c863.js","/js/buttons.js":"_assets/7365214cedc7e864c863.js","/buttons.js":"_assets/7365214cedc7e864c863.js","https://thundersmotch.github.io/RotU/js/windowManager.js":"_assets/f27fff2f851791138c2b.js","/RotU/js/windowManager.js":"_assets/f27fff2f851791138c2b.js","/js/windowManager.js":"_assets/f27fff2f851791138c2b.js","/windowManager.js":"_assets/f27fff2f851791138c2b.js","https://thundersmotch.github.io/RotU/js/elements/keybinds.js":"_assets/c7d8b04c59f0a5cb6754.js","/RotU/js/elements/keybinds.js":"_assets/c7d8b04c59f0a5cb6754.js","/js/elements/keybinds.js":"_assets/c7d8b04c59f0a5cb6754.js","/elements/keybinds.js":"_assets/c7d8b04c59f0a5cb6754.js","/keybinds.js":"_assets/c7d8b04c59f0a5cb6754.js","https://thundersmotch.github.io/RotU/js/elements/popup.js":"_assets/0943e8376005497c6928.js","/RotU/js/elements/popup.js":"_assets/0943e8376005497c6928.js","/js/elements/popup.js":"_assets/0943e8376005497c6928.js","/elements/popup.js":"_assets/0943e8376005497c6928.js","/popup.js":"_assets/0943e8376005497c6928.js","https://thundersmotch.github.io/RotU/js/stage/stage0.js":"_assets/1af847ea65c5f3c25cc0.js","/RotU/js/stage/stage0.js":"_assets/1af847ea65c5f3c25cc0.js","/js/stage/stage0.js":"_assets/1af847ea65c5f3c25cc0.js","/stage/stage0.js":"_assets/1af847ea65c5f3c25cc0.js","/stage0.js":"_assets/1af847ea65c5f3c25cc0.js","https://thundersmotch.github.io/RotU/js/stage/stage1.js":"_assets/62f3bfa3fe2554e641af.js","/RotU/js/stage/stage1.js":"_assets/62f3bfa3fe2554e641af.js","/js/stage/stage1.js":"_assets/62f3bfa3fe2554e641af.js","/stage/stage1.js":"_assets/62f3bfa3fe2554e641af.js","/stage1.js":"_assets/62f3bfa3fe2554e641af.js","https://thundersmotch.github.io/RotU/js/elements/button.js":"_assets/aadcb3da184710e0990c.js","/RotU/js/elements/button.js":"_assets/aadcb3da184710e0990c.js","/js/elements/button.js":"_assets/aadcb3da184710e0990c.js","/elements/button.js":"_assets/aadcb3da184710e0990c.js","/button.js":"_assets/aadcb3da184710e0990c.js","https://thundersmotch.github.io/RotU/lang/en.lang":"_assets/b85991e91230ed7737ad.lang","/RotU/lang/en.lang":"_assets/b85991e91230ed7737ad.lang","/lang/en.lang":"_assets/b85991e91230ed7737ad.lang","/en.lang":"_assets/b85991e91230ed7737ad.lang"};
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
