(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Ball_in_Maze/maze.css":"_assets/827c23210c25207233f1.css","/GameZone/Games/Ball_in_Maze/maze.css":"_assets/827c23210c25207233f1.css","/Games/Ball_in_Maze/maze.css":"_assets/827c23210c25207233f1.css","/Ball_in_Maze/maze.css":"_assets/827c23210c25207233f1.css","/maze.css":"_assets/827c23210c25207233f1.css","https://kunjgit.github.io/GameZone/Games/Ball_in_Maze/bundle.js":"_assets/87797886b07a560834d6.js","/GameZone/Games/Ball_in_Maze/bundle.js":"_assets/87797886b07a560834d6.js","/Games/Ball_in_Maze/bundle.js":"_assets/87797886b07a560834d6.js","/Ball_in_Maze/bundle.js":"_assets/87797886b07a560834d6.js","/bundle.js":"_assets/87797886b07a560834d6.js","https://use.fontawesome.com/releases/v5.0.10/css/all.css":"_assets/cfac6241dd3aabb5f155.css","/releases/v5.0.10/css/all.css":"_assets/cfac6241dd3aabb5f155.css","/v5.0.10/css/all.css":"_assets/cfac6241dd3aabb5f155.css","/css/all.css":"_assets/cfac6241dd3aabb5f155.css","/all.css":"_assets/cfac6241dd3aabb5f155.css","https://fonts.googleapis.com/css?family=Monoton":"_assets/7db82bd4218f88346280.css","/css":"_assets/7db82bd4218f88346280.css","/css?family=Monoton":"_assets/7db82bd4218f88346280.css","https://fonts.googleapis.com/css":"_assets/7db82bd4218f88346280.css","https://use.fontawesome.com/releases/v5.0.10/webfonts/fa-brands-400.woff2":"_assets/e8562087317b34c4b2ac.woff2","/releases/v5.0.10/webfonts/fa-brands-400.woff2":"_assets/e8562087317b34c4b2ac.woff2","/v5.0.10/webfonts/fa-brands-400.woff2":"_assets/e8562087317b34c4b2ac.woff2","/webfonts/fa-brands-400.woff2":"_assets/e8562087317b34c4b2ac.woff2","/fa-brands-400.woff2":"_assets/e8562087317b34c4b2ac.woff2","https://fonts.gstatic.com/s/monoton/v22/5h1aiZUrOngCibe4TkHLQg.woff2":"_assets/54dd0ac1cf6c02e094ad.woff2","/s/monoton/v22/5h1aiZUrOngCibe4TkHLQg.woff2":"_assets/54dd0ac1cf6c02e094ad.woff2","/monoton/v22/5h1aiZUrOngCibe4TkHLQg.woff2":"_assets/54dd0ac1cf6c02e094ad.woff2","/v22/5h1aiZUrOngCibe4TkHLQg.woff2":"_assets/54dd0ac1cf6c02e094ad.woff2","/5h1aiZUrOngCibe4TkHLQg.woff2":"_assets/54dd0ac1cf6c02e094ad.woff2","https://kunjgit.github.io/GameZone/Games/Ball_in_Maze/img/rule.gif":"_assets/0e590324f2778b0b5845.gif","/GameZone/Games/Ball_in_Maze/img/rule.gif":"_assets/0e590324f2778b0b5845.gif","/Games/Ball_in_Maze/img/rule.gif":"_assets/0e590324f2778b0b5845.gif","/Ball_in_Maze/img/rule.gif":"_assets/0e590324f2778b0b5845.gif","/img/rule.gif":"_assets/0e590324f2778b0b5845.gif","/rule.gif":"_assets/0e590324f2778b0b5845.gif","https://res.cloudinary.com/dgxmjwbrc/image/upload/v1523914889/Sirex_noctilio_hole_cropped.jpg":"_assets/d2ed5c01c8d2c4c05a64.jpg","/dgxmjwbrc/image/upload/v1523914889/Sirex_noctilio_hole_cropped.jpg":"_assets/d2ed5c01c8d2c4c05a64.jpg","/image/upload/v1523914889/Sirex_noctilio_hole_cropped.jpg":"_assets/d2ed5c01c8d2c4c05a64.jpg","/upload/v1523914889/Sirex_noctilio_hole_cropped.jpg":"_assets/d2ed5c01c8d2c4c05a64.jpg","/v1523914889/Sirex_noctilio_hole_cropped.jpg":"_assets/d2ed5c01c8d2c4c05a64.jpg","/Sirex_noctilio_hole_cropped.jpg":"_assets/d2ed5c01c8d2c4c05a64.jpg","https://res.cloudinary.com/dgxmjwbrc/image/upload/v1523909588/download.jpg":"_assets/bf1226a252a277b75745.jpg","/dgxmjwbrc/image/upload/v1523909588/download.jpg":"_assets/bf1226a252a277b75745.jpg","/image/upload/v1523909588/download.jpg":"_assets/bf1226a252a277b75745.jpg","/upload/v1523909588/download.jpg":"_assets/bf1226a252a277b75745.jpg","/v1523909588/download.jpg":"_assets/bf1226a252a277b75745.jpg","/download.jpg":"_assets/bf1226a252a277b75745.jpg","https://res.cloudinary.com/dgxmjwbrc/image/upload/v1523909589/wood-1043207_1280.jpg":"_assets/dcf1eff48ca186265e20.jpg","/dgxmjwbrc/image/upload/v1523909589/wood-1043207_1280.jpg":"_assets/dcf1eff48ca186265e20.jpg","/image/upload/v1523909589/wood-1043207_1280.jpg":"_assets/dcf1eff48ca186265e20.jpg","/upload/v1523909589/wood-1043207_1280.jpg":"_assets/dcf1eff48ca186265e20.jpg","/v1523909589/wood-1043207_1280.jpg":"_assets/dcf1eff48ca186265e20.jpg","/wood-1043207_1280.jpg":"_assets/dcf1eff48ca186265e20.jpg","https://res.cloudinary.com/dgxmjwbrc/image/upload/v1523915701/wood-1043207_1280_copy.jpg":"_assets/a3ed091dca361b2ec909.jpg","/dgxmjwbrc/image/upload/v1523915701/wood-1043207_1280_copy.jpg":"_assets/a3ed091dca361b2ec909.jpg","/image/upload/v1523915701/wood-1043207_1280_copy.jpg":"_assets/a3ed091dca361b2ec909.jpg","/upload/v1523915701/wood-1043207_1280_copy.jpg":"_assets/a3ed091dca361b2ec909.jpg","/v1523915701/wood-1043207_1280_copy.jpg":"_assets/a3ed091dca361b2ec909.jpg","/wood-1043207_1280_copy.jpg":"_assets/a3ed091dca361b2ec909.jpg","https://res.cloudinary.com/dgxmjwbrc/image/upload/v1524067906/coin.jpg":"_assets/91490a8b68ee7d648233.jpg","/dgxmjwbrc/image/upload/v1524067906/coin.jpg":"_assets/91490a8b68ee7d648233.jpg","/image/upload/v1524067906/coin.jpg":"_assets/91490a8b68ee7d648233.jpg","/upload/v1524067906/coin.jpg":"_assets/91490a8b68ee7d648233.jpg","/v1524067906/coin.jpg":"_assets/91490a8b68ee7d648233.jpg","/coin.jpg":"_assets/91490a8b68ee7d648233.jpg"};
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
