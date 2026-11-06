(() => {
  "use strict";
  const RUNTIME_MAP = {"https://vulos.org/projects/wibbly/fonts/archivo.woff2":"_assets/4c98b9d490d1698ec95f.woff2","/projects/wibbly/fonts/archivo.woff2":"_assets/4c98b9d490d1698ec95f.woff2","/wibbly/fonts/archivo.woff2":"_assets/4c98b9d490d1698ec95f.woff2","/fonts/archivo.woff2":"_assets/4c98b9d490d1698ec95f.woff2","/archivo.woff2":"_assets/4c98b9d490d1698ec95f.woff2","https://vulos.org/projects/wibbly/assets/vulos-logo.png":"_assets/b49f3b304bceb893e25b.png","/projects/wibbly/assets/vulos-logo.png":"_assets/b49f3b304bceb893e25b.png","/wibbly/assets/vulos-logo.png":"_assets/b49f3b304bceb893e25b.png","/assets/vulos-logo.png":"_assets/b49f3b304bceb893e25b.png","/vulos-logo.png":"_assets/b49f3b304bceb893e25b.png","https://vulos.org/projects/wibbly/fonts/jetbrains-mono.woff2":"_assets/18be452724bfdc236c07.woff2","/projects/wibbly/fonts/jetbrains-mono.woff2":"_assets/18be452724bfdc236c07.woff2","/wibbly/fonts/jetbrains-mono.woff2":"_assets/18be452724bfdc236c07.woff2","/fonts/jetbrains-mono.woff2":"_assets/18be452724bfdc236c07.woff2","/jetbrains-mono.woff2":"_assets/18be452724bfdc236c07.woff2","https://vulos.org/projects/wibbly/fonts/instrument-sans.woff2":"_assets/19f8ec3200550a11859c.woff2","/projects/wibbly/fonts/instrument-sans.woff2":"_assets/19f8ec3200550a11859c.woff2","/wibbly/fonts/instrument-sans.woff2":"_assets/19f8ec3200550a11859c.woff2","/fonts/instrument-sans.woff2":"_assets/19f8ec3200550a11859c.woff2","/instrument-sans.woff2":"_assets/19f8ec3200550a11859c.woff2","https://vulos.org/projects/wibbly/shots/tennis.png":"_assets/3d0e37878e1769167739.png","/projects/wibbly/shots/tennis.png":"_assets/3d0e37878e1769167739.png","/wibbly/shots/tennis.png":"_assets/3d0e37878e1769167739.png","/shots/tennis.png":"_assets/3d0e37878e1769167739.png","/tennis.png":"_assets/3d0e37878e1769167739.png","https://vulos.org/projects/wibbly/shots/setup-framing.png":"_assets/ef29841a28f5210e0b8a.png","/projects/wibbly/shots/setup-framing.png":"_assets/ef29841a28f5210e0b8a.png","/wibbly/shots/setup-framing.png":"_assets/ef29841a28f5210e0b8a.png","/shots/setup-framing.png":"_assets/ef29841a28f5210e0b8a.png","/setup-framing.png":"_assets/ef29841a28f5210e0b8a.png","https://vulos.org/projects/wibbly/shots/in-game-menu-camera.png":"_assets/78881da565f5264eb970.png","/projects/wibbly/shots/in-game-menu-camera.png":"_assets/78881da565f5264eb970.png","/wibbly/shots/in-game-menu-camera.png":"_assets/78881da565f5264eb970.png","/shots/in-game-menu-camera.png":"_assets/78881da565f5264eb970.png","/in-game-menu-camera.png":"_assets/78881da565f5264eb970.png","https://vulos.org/projects/wibbly/shots/setup-handedness.png":"_assets/c032fd206d6b9f259e72.png","/projects/wibbly/shots/setup-handedness.png":"_assets/c032fd206d6b9f259e72.png","/wibbly/shots/setup-handedness.png":"_assets/c032fd206d6b9f259e72.png","/shots/setup-handedness.png":"_assets/c032fd206d6b9f259e72.png","/setup-handedness.png":"_assets/c032fd206d6b9f259e72.png","https://vulos.org/projects/wibbly/shots/setup-intro.png":"_assets/4d0830d4dfd15c792c24.png","/projects/wibbly/shots/setup-intro.png":"_assets/4d0830d4dfd15c792c24.png","/wibbly/shots/setup-intro.png":"_assets/4d0830d4dfd15c792c24.png","/shots/setup-intro.png":"_assets/4d0830d4dfd15c792c24.png","/setup-intro.png":"_assets/4d0830d4dfd15c792c24.png","https://vulos.org/projects/wibbly/shots/play.png":"_assets/a920c14d8e48877bc50b.png","/projects/wibbly/shots/play.png":"_assets/a920c14d8e48877bc50b.png","/wibbly/shots/play.png":"_assets/a920c14d8e48877bc50b.png","/shots/play.png":"_assets/a920c14d8e48877bc50b.png","/play.png":"_assets/a920c14d8e48877bc50b.png","https://vulos.org/projects/wibbly/shots/title.png":"_assets/6d1574e909888c7f5832.png","/projects/wibbly/shots/title.png":"_assets/6d1574e909888c7f5832.png","/wibbly/shots/title.png":"_assets/6d1574e909888c7f5832.png","/shots/title.png":"_assets/6d1574e909888c7f5832.png","/title.png":"_assets/6d1574e909888c7f5832.png"};
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
