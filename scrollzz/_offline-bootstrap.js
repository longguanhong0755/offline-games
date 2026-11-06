(() => {
  "use strict";
  const RUNTIME_MAP = {"https://refusado.github.io/scrollzz/version.css":"_assets/0cc1d4086b6940afce53.css","/scrollzz/version.css":"_assets/0cc1d4086b6940afce53.css","/version.css":"_assets/0cc1d4086b6940afce53.css","https://refusado.github.io/scrollzz/css/setters/color.css":"_assets/c1e90ad4d336cef49c55.css","/scrollzz/css/setters/color.css":"_assets/c1e90ad4d336cef49c55.css","/css/setters/color.css":"_assets/c1e90ad4d336cef49c55.css","/setters/color.css":"_assets/c1e90ad4d336cef49c55.css","/color.css":"_assets/c1e90ad4d336cef49c55.css","https://refusado.github.io/scrollzz/css/setters/settle.css":"_assets/319d1d9312ff2a25f155.css","/scrollzz/css/setters/settle.css":"_assets/319d1d9312ff2a25f155.css","/css/setters/settle.css":"_assets/319d1d9312ff2a25f155.css","/setters/settle.css":"_assets/319d1d9312ff2a25f155.css","/settle.css":"_assets/319d1d9312ff2a25f155.css","https://refusado.github.io/scrollzz/css/menu/menu.css":"_assets/c859e58bcddcdcd21520.css","/scrollzz/css/menu/menu.css":"_assets/c859e58bcddcdcd21520.css","/css/menu/menu.css":"_assets/c859e58bcddcdcd21520.css","/menu/menu.css":"_assets/c859e58bcddcdcd21520.css","/menu.css":"_assets/c859e58bcddcdcd21520.css","https://refusado.github.io/scrollzz/css/setters/translations.css":"_assets/984d9d82ec5f9adb7dae.css","/scrollzz/css/setters/translations.css":"_assets/984d9d82ec5f9adb7dae.css","/css/setters/translations.css":"_assets/984d9d82ec5f9adb7dae.css","/setters/translations.css":"_assets/984d9d82ec5f9adb7dae.css","/translations.css":"_assets/984d9d82ec5f9adb7dae.css","https://refusado.github.io/scrollzz/css/menu/tutorial.css":"_assets/e5a770e2fe9b1da50cf0.css","/scrollzz/css/menu/tutorial.css":"_assets/e5a770e2fe9b1da50cf0.css","/css/menu/tutorial.css":"_assets/e5a770e2fe9b1da50cf0.css","/menu/tutorial.css":"_assets/e5a770e2fe9b1da50cf0.css","/tutorial.css":"_assets/e5a770e2fe9b1da50cf0.css","https://refusado.github.io/scrollzz/css/menu/about.css":"_assets/8dd6dfbfc846cdd7a5e6.css","/scrollzz/css/menu/about.css":"_assets/8dd6dfbfc846cdd7a5e6.css","/css/menu/about.css":"_assets/8dd6dfbfc846cdd7a5e6.css","/menu/about.css":"_assets/8dd6dfbfc846cdd7a5e6.css","/about.css":"_assets/8dd6dfbfc846cdd7a5e6.css","https://refusado.github.io/scrollzz/css/menu/home.css":"_assets/0eee2b2c72a235b64eee.css","/scrollzz/css/menu/home.css":"_assets/0eee2b2c72a235b64eee.css","/css/menu/home.css":"_assets/0eee2b2c72a235b64eee.css","/menu/home.css":"_assets/0eee2b2c72a235b64eee.css","/home.css":"_assets/0eee2b2c72a235b64eee.css","https://refusado.github.io/scrollzz/css/main.css":"_assets/05b0b71accab5fd08d2e.css","/scrollzz/css/main.css":"_assets/05b0b71accab5fd08d2e.css","/css/main.css":"_assets/05b0b71accab5fd08d2e.css","/main.css":"_assets/05b0b71accab5fd08d2e.css","https://refusado.github.io/scrollzz/css/menu/language.css":"_assets/ab8f111500fc3cc5ad71.css","/scrollzz/css/menu/language.css":"_assets/ab8f111500fc3cc5ad71.css","/css/menu/language.css":"_assets/ab8f111500fc3cc5ad71.css","/menu/language.css":"_assets/ab8f111500fc3cc5ad71.css","/language.css":"_assets/ab8f111500fc3cc5ad71.css","https://refusado.github.io/scrollzz/css/level/level-0.css":"_assets/1592004b2147640d945c.css","/scrollzz/css/level/level-0.css":"_assets/1592004b2147640d945c.css","/css/level/level-0.css":"_assets/1592004b2147640d945c.css","/level/level-0.css":"_assets/1592004b2147640d945c.css","/level-0.css":"_assets/1592004b2147640d945c.css","https://refusado.github.io/scrollzz/css/level/pieces.css":"_assets/28977d057f3e4849f065.css","/scrollzz/css/level/pieces.css":"_assets/28977d057f3e4849f065.css","/css/level/pieces.css":"_assets/28977d057f3e4849f065.css","/level/pieces.css":"_assets/28977d057f3e4849f065.css","/pieces.css":"_assets/28977d057f3e4849f065.css","https://refusado.github.io/scrollzz/css/block.css":"_assets/fe7ade12661ed3bd452e.css","/scrollzz/css/block.css":"_assets/fe7ade12661ed3bd452e.css","/css/block.css":"_assets/fe7ade12661ed3bd452e.css","/block.css":"_assets/fe7ade12661ed3bd452e.css","https://refusado.github.io/scrollzz/css/level/level-2.css":"_assets/e7feea73cef2bf2240e3.css","/scrollzz/css/level/level-2.css":"_assets/e7feea73cef2bf2240e3.css","/css/level/level-2.css":"_assets/e7feea73cef2bf2240e3.css","/level/level-2.css":"_assets/e7feea73cef2bf2240e3.css","/level-2.css":"_assets/e7feea73cef2bf2240e3.css","https://refusado.github.io/scrollzz/css/pagination.css":"_assets/d27cb5e4923f9090d25b.css","/scrollzz/css/pagination.css":"_assets/d27cb5e4923f9090d25b.css","/css/pagination.css":"_assets/d27cb5e4923f9090d25b.css","/pagination.css":"_assets/d27cb5e4923f9090d25b.css","https://refusado.github.io/scrollzz/css/selector.css":"_assets/0c4500c9fb9e7ac17a97.css","/scrollzz/css/selector.css":"_assets/0c4500c9fb9e7ac17a97.css","/css/selector.css":"_assets/0c4500c9fb9e7ac17a97.css","/selector.css":"_assets/0c4500c9fb9e7ac17a97.css","https://refusado.github.io/scrollzz/css/level/level-4.css":"_assets/258542563b617ac5d3d2.css","/scrollzz/css/level/level-4.css":"_assets/258542563b617ac5d3d2.css","/css/level/level-4.css":"_assets/258542563b617ac5d3d2.css","/level/level-4.css":"_assets/258542563b617ac5d3d2.css","/level-4.css":"_assets/258542563b617ac5d3d2.css","https://refusado.github.io/scrollzz/css/level/level-3.css":"_assets/e8c7d8e0685b62dad199.css","/scrollzz/css/level/level-3.css":"_assets/e8c7d8e0685b62dad199.css","/css/level/level-3.css":"_assets/e8c7d8e0685b62dad199.css","/level/level-3.css":"_assets/e8c7d8e0685b62dad199.css","/level-3.css":"_assets/e8c7d8e0685b62dad199.css","https://refusado.github.io/scrollzz/css/level/level-1.css":"_assets/6ed12a2e021eb1c53c59.css","/scrollzz/css/level/level-1.css":"_assets/6ed12a2e021eb1c53c59.css","/css/level/level-1.css":"_assets/6ed12a2e021eb1c53c59.css","/level/level-1.css":"_assets/6ed12a2e021eb1c53c59.css","/level-1.css":"_assets/6ed12a2e021eb1c53c59.css","https://refusado.github.io/scrollzz/css/level/level-5.css":"_assets/4213aa4246c2220f1b72.css","/scrollzz/css/level/level-5.css":"_assets/4213aa4246c2220f1b72.css","/css/level/level-5.css":"_assets/4213aa4246c2220f1b72.css","/level/level-5.css":"_assets/4213aa4246c2220f1b72.css","/level-5.css":"_assets/4213aa4246c2220f1b72.css","https://refusado.github.io/scrollzz/images/star/04.svg":"_assets/e43d0870ec4d7eb71097.svg","/scrollzz/images/star/04.svg":"_assets/e43d0870ec4d7eb71097.svg","/images/star/04.svg":"_assets/e43d0870ec4d7eb71097.svg","/star/04.svg":"_assets/e43d0870ec4d7eb71097.svg","/04.svg":"_assets/e43d0870ec4d7eb71097.svg","https://refusado.github.io/scrollzz/images/star/02.svg":"_assets/1b259b15344c723ef520.svg","/scrollzz/images/star/02.svg":"_assets/1b259b15344c723ef520.svg","/images/star/02.svg":"_assets/1b259b15344c723ef520.svg","/star/02.svg":"_assets/1b259b15344c723ef520.svg","/02.svg":"_assets/1b259b15344c723ef520.svg","https://refusado.github.io/scrollzz/images/star/03.svg":"_assets/442bb4a6deaa1e1f27a6.svg","/scrollzz/images/star/03.svg":"_assets/442bb4a6deaa1e1f27a6.svg","/images/star/03.svg":"_assets/442bb4a6deaa1e1f27a6.svg","/star/03.svg":"_assets/442bb4a6deaa1e1f27a6.svg","/03.svg":"_assets/442bb4a6deaa1e1f27a6.svg","https://refusado.github.io/scrollzz/images/star/01.svg":"_assets/ec92f3fe7dd49d2ad5d6.svg","/scrollzz/images/star/01.svg":"_assets/ec92f3fe7dd49d2ad5d6.svg","/images/star/01.svg":"_assets/ec92f3fe7dd49d2ad5d6.svg","/star/01.svg":"_assets/ec92f3fe7dd49d2ad5d6.svg","/01.svg":"_assets/ec92f3fe7dd49d2ad5d6.svg"};
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
