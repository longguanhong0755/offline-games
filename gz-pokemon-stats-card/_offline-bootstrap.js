(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Pokemon_Stats_Card/style.css":"_assets/bcc6c6ea0e8077dea561.css","/GameZone/Games/Pokemon_Stats_Card/style.css":"_assets/bcc6c6ea0e8077dea561.css","/Games/Pokemon_Stats_Card/style.css":"_assets/bcc6c6ea0e8077dea561.css","/Pokemon_Stats_Card/style.css":"_assets/bcc6c6ea0e8077dea561.css","/style.css":"_assets/bcc6c6ea0e8077dea561.css","https://kunjgit.github.io/GameZone/Games/Pokemon_Stats_Card/responsive.css":"_assets/173501cc7dc192d1eb50.css","/GameZone/Games/Pokemon_Stats_Card/responsive.css":"_assets/173501cc7dc192d1eb50.css","/Games/Pokemon_Stats_Card/responsive.css":"_assets/173501cc7dc192d1eb50.css","/Pokemon_Stats_Card/responsive.css":"_assets/173501cc7dc192d1eb50.css","/responsive.css":"_assets/173501cc7dc192d1eb50.css","https://kunjgit.github.io/GameZone/Games/Pokemon_Stats_Card/pokeball.svg":"_assets/78e97957b5ee2d007fe6.svg","/GameZone/Games/Pokemon_Stats_Card/pokeball.svg":"_assets/78e97957b5ee2d007fe6.svg","/Games/Pokemon_Stats_Card/pokeball.svg":"_assets/78e97957b5ee2d007fe6.svg","/Pokemon_Stats_Card/pokeball.svg":"_assets/78e97957b5ee2d007fe6.svg","/pokeball.svg":"_assets/78e97957b5ee2d007fe6.svg","https://kunjgit.github.io/GameZone/Games/Pokemon_Stats_Card/script.js":"_assets/f0891a426ff6bd7f9614.js","/GameZone/Games/Pokemon_Stats_Card/script.js":"_assets/f0891a426ff6bd7f9614.js","/Games/Pokemon_Stats_Card/script.js":"_assets/f0891a426ff6bd7f9614.js","/Pokemon_Stats_Card/script.js":"_assets/f0891a426ff6bd7f9614.js","/script.js":"_assets/f0891a426ff6bd7f9614.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css":"_assets/c22cfb6520a7fdbb7386.css","/ajax/libs/font-awesome/6.5.1/css/all.min.css":"_assets/c22cfb6520a7fdbb7386.css","/libs/font-awesome/6.5.1/css/all.min.css":"_assets/c22cfb6520a7fdbb7386.css","/font-awesome/6.5.1/css/all.min.css":"_assets/c22cfb6520a7fdbb7386.css","/6.5.1/css/all.min.css":"_assets/c22cfb6520a7fdbb7386.css","/css/all.min.css":"_assets/c22cfb6520a7fdbb7386.css","/all.min.css":"_assets/c22cfb6520a7fdbb7386.css","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png":"_assets/7233d8d8b03b5fa91d83.png","/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png":"_assets/7233d8d8b03b5fa91d83.png","/sprites/master/sprites/pokemon/other/official-artwork/1.png":"_assets/7233d8d8b03b5fa91d83.png","/master/sprites/pokemon/other/official-artwork/1.png":"_assets/7233d8d8b03b5fa91d83.png","/sprites/pokemon/other/official-artwork/1.png":"_assets/7233d8d8b03b5fa91d83.png","/pokemon/other/official-artwork/1.png":"_assets/7233d8d8b03b5fa91d83.png","/other/official-artwork/1.png":"_assets/7233d8d8b03b5fa91d83.png","/official-artwork/1.png":"_assets/7233d8d8b03b5fa91d83.png","/1.png":"_assets/7233d8d8b03b5fa91d83.png","https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;800;900&display=swap":"_assets/b837622b98335f6577dc.css","/css2":"_assets/b837622b98335f6577dc.css","/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;800;900&display=swap":"_assets/b837622b98335f6577dc.css","https://fonts.googleapis.com/css2":"_assets/b837622b98335f6577dc.css","https://pokeapi.co/api/v2/pokemon/1":"_assets/bb86eb538386e767d6f6.json","/api/v2/pokemon/1":"_assets/bb86eb538386e767d6f6.json","/v2/pokemon/1":"_assets/bb86eb538386e767d6f6.json","/pokemon/1":"_assets/bb86eb538386e767d6f6.json","/1":"_assets/bb86eb538386e767d6f6.json","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-solid-900.woff2":"_assets/9fc85f3a4544ab0d570c.woff2","/ajax/libs/font-awesome/6.5.1/webfonts/fa-solid-900.woff2":"_assets/9fc85f3a4544ab0d570c.woff2","/libs/font-awesome/6.5.1/webfonts/fa-solid-900.woff2":"_assets/9fc85f3a4544ab0d570c.woff2","/font-awesome/6.5.1/webfonts/fa-solid-900.woff2":"_assets/9fc85f3a4544ab0d570c.woff2","/6.5.1/webfonts/fa-solid-900.woff2":"_assets/9fc85f3a4544ab0d570c.woff2","/webfonts/fa-solid-900.woff2":"_assets/9fc85f3a4544ab0d570c.woff2","/fa-solid-900.woff2":"_assets/9fc85f3a4544ab0d570c.woff2","https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2":"_assets/f4e80d9dfd374d02989b.woff2","/s/poppins/v24/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2":"_assets/f4e80d9dfd374d02989b.woff2","/poppins/v24/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2":"_assets/f4e80d9dfd374d02989b.woff2","/v24/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2":"_assets/f4e80d9dfd374d02989b.woff2","/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2":"_assets/f4e80d9dfd374d02989b.woff2","https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2","/s/poppins/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2","/poppins/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2","/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2","/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2"};
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
