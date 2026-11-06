(() => {
  "use strict";
  const RUNTIME_MAP = {"https://0thernes.github.io/glidiebirdie/style.css":"_assets/166be9b3ea7d03a7c599.css","/glidiebirdie/style.css":"_assets/166be9b3ea7d03a7c599.css","/style.css":"_assets/166be9b3ea7d03a7c599.css","https://0thernes.github.io/glidiebirdie/game.js":"_assets/e7a2865bc3aa83464148.js","/glidiebirdie/game.js":"_assets/e7a2865bc3aa83464148.js","/game.js":"_assets/e7a2865bc3aa83464148.js","https://0thernes.github.io/glidiebirdie/src/main.js":"_assets/1f5147815ba1aa47e442.js","/glidiebirdie/src/main.js":"_assets/1f5147815ba1aa47e442.js","/src/main.js":"_assets/1f5147815ba1aa47e442.js","/main.js":"_assets/1f5147815ba1aa47e442.js","https://0thernes.github.io/glidiebirdie/src/dom.js":"_assets/6adc6b69e9420e721f09.js","/glidiebirdie/src/dom.js":"_assets/6adc6b69e9420e721f09.js","/src/dom.js":"_assets/6adc6b69e9420e721f09.js","/dom.js":"_assets/6adc6b69e9420e721f09.js","https://0thernes.github.io/glidiebirdie/src/ui.js":"_assets/6daf50f2f66a04b83a23.js","/glidiebirdie/src/ui.js":"_assets/6daf50f2f66a04b83a23.js","/src/ui.js":"_assets/6daf50f2f66a04b83a23.js","/ui.js":"_assets/6daf50f2f66a04b83a23.js","https://0thernes.github.io/glidiebirdie/src/render.js":"_assets/8c784dab5f336c04dbda.js","/glidiebirdie/src/render.js":"_assets/8c784dab5f336c04dbda.js","/src/render.js":"_assets/8c784dab5f336c04dbda.js","/render.js":"_assets/8c784dab5f336c04dbda.js","https://0thernes.github.io/glidiebirdie/src/input.js":"_assets/883dd893301093eab196.js","/glidiebirdie/src/input.js":"_assets/883dd893301093eab196.js","/src/input.js":"_assets/883dd893301093eab196.js","/input.js":"_assets/883dd893301093eab196.js","https://0thernes.github.io/glidiebirdie/src/session.js":"_assets/cd288c8220574856ffe8.js","/glidiebirdie/src/session.js":"_assets/cd288c8220574856ffe8.js","/src/session.js":"_assets/cd288c8220574856ffe8.js","/session.js":"_assets/cd288c8220574856ffe8.js","https://0thernes.github.io/glidiebirdie/src/state.js":"_assets/12b4556c94b046c827ee.js","/glidiebirdie/src/state.js":"_assets/12b4556c94b046c827ee.js","/src/state.js":"_assets/12b4556c94b046c827ee.js","/state.js":"_assets/12b4556c94b046c827ee.js","https://0thernes.github.io/glidiebirdie/src/config.js":"_assets/13006d1ab286b4de06ec.js","/glidiebirdie/src/config.js":"_assets/13006d1ab286b4de06ec.js","/src/config.js":"_assets/13006d1ab286b4de06ec.js","/config.js":"_assets/13006d1ab286b4de06ec.js","https://0thernes.github.io/glidiebirdie/src/loop.js":"_assets/9503f59eeef48d825d3e.js","/glidiebirdie/src/loop.js":"_assets/9503f59eeef48d825d3e.js","/src/loop.js":"_assets/9503f59eeef48d825d3e.js","/loop.js":"_assets/9503f59eeef48d825d3e.js","https://0thernes.github.io/glidiebirdie/src/rng.js":"_assets/3f389738b73af979ae95.js","/glidiebirdie/src/rng.js":"_assets/3f389738b73af979ae95.js","/src/rng.js":"_assets/3f389738b73af979ae95.js","/rng.js":"_assets/3f389738b73af979ae95.js","https://0thernes.github.io/glidiebirdie/src/storage.js":"_assets/8ae9dfae6c6ab24b7a43.js","/glidiebirdie/src/storage.js":"_assets/8ae9dfae6c6ab24b7a43.js","/src/storage.js":"_assets/8ae9dfae6c6ab24b7a43.js","/storage.js":"_assets/8ae9dfae6c6ab24b7a43.js","https://0thernes.github.io/glidiebirdie/src/audio.js":"_assets/e52e4f25af07897d3f20.js","/glidiebirdie/src/audio.js":"_assets/e52e4f25af07897d3f20.js","/src/audio.js":"_assets/e52e4f25af07897d3f20.js","/audio.js":"_assets/e52e4f25af07897d3f20.js","https://0thernes.github.io/glidiebirdie/src/haptics.js":"_assets/9a1d283ffa0f77fdf051.js","/glidiebirdie/src/haptics.js":"_assets/9a1d283ffa0f77fdf051.js","/src/haptics.js":"_assets/9a1d283ffa0f77fdf051.js","/haptics.js":"_assets/9a1d283ffa0f77fdf051.js","https://0thernes.github.io/glidiebirdie/src/achievements.js":"_assets/882de9e11895f0f3781b.js","/glidiebirdie/src/achievements.js":"_assets/882de9e11895f0f3781b.js","/src/achievements.js":"_assets/882de9e11895f0f3781b.js","/achievements.js":"_assets/882de9e11895f0f3781b.js","https://0thernes.github.io/glidiebirdie/src/input-queue.js":"_assets/22ba7ea8b8dc81504bb0.js","/glidiebirdie/src/input-queue.js":"_assets/22ba7ea8b8dc81504bb0.js","/src/input-queue.js":"_assets/22ba7ea8b8dc81504bb0.js","/input-queue.js":"_assets/22ba7ea8b8dc81504bb0.js","https://0thernes.github.io/glidiebirdie/src/timestep.js":"_assets/c53df585faff14b31cd1.js","/glidiebirdie/src/timestep.js":"_assets/c53df585faff14b31cd1.js","/src/timestep.js":"_assets/c53df585faff14b31cd1.js","/timestep.js":"_assets/c53df585faff14b31cd1.js","https://0thernes.github.io/glidiebirdie/src/physics.js":"_assets/c377373df3cb7b15758d.js","/glidiebirdie/src/physics.js":"_assets/c377373df3cb7b15758d.js","/src/physics.js":"_assets/c377373df3cb7b15758d.js","/physics.js":"_assets/c377373df3cb7b15758d.js","https://0thernes.github.io/glidiebirdie/src/hooks.js":"_assets/3c1d7dc7b3d13d4eda45.js","/glidiebirdie/src/hooks.js":"_assets/3c1d7dc7b3d13d4eda45.js","/src/hooks.js":"_assets/3c1d7dc7b3d13d4eda45.js","/hooks.js":"_assets/3c1d7dc7b3d13d4eda45.js","https://0thernes.github.io/glidiebirdie/src/collision.js":"_assets/e68ba5b04c24b65ffb5e.js","/glidiebirdie/src/collision.js":"_assets/e68ba5b04c24b65ffb5e.js","/src/collision.js":"_assets/e68ba5b04c24b65ffb5e.js","/collision.js":"_assets/e68ba5b04c24b65ffb5e.js"};
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
