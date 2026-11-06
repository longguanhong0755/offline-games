(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Doremon_Puzzle/puzzle.css":"_assets/fc26312939981bf9f14c.css","/GameZone/Games/Doremon_Puzzle/puzzle.css":"_assets/fc26312939981bf9f14c.css","/Games/Doremon_Puzzle/puzzle.css":"_assets/fc26312939981bf9f14c.css","/Doremon_Puzzle/puzzle.css":"_assets/fc26312939981bf9f14c.css","/puzzle.css":"_assets/fc26312939981bf9f14c.css","https://kunjgit.github.io/GameZone/Games/Doremon_Puzzle/puzzle.js":"_assets/cf45fb45d3f889688dd3.js","/GameZone/Games/Doremon_Puzzle/puzzle.js":"_assets/cf45fb45d3f889688dd3.js","/Games/Doremon_Puzzle/puzzle.js":"_assets/cf45fb45d3f889688dd3.js","/Doremon_Puzzle/puzzle.js":"_assets/cf45fb45d3f889688dd3.js","/puzzle.js":"_assets/cf45fb45d3f889688dd3.js","https://github-production-user-asset-6210df.s3.amazonaws.com/56786344/248532284-421f6793-f45c-4183-b0ed-28dc678ea5ac.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20261105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261105T225925Z&X-Amz-Expires=300&X-Amz-Signature=758d34cc4cb38ed44f50987134e1bdbf4868e06b72237429d61ad484d7072259&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng":"_assets/e5a23037ebd39c92f759.png","/56786344/248532284-421f6793-f45c-4183-b0ed-28dc678ea5ac.png":"_assets/e5a23037ebd39c92f759.png","/56786344/248532284-421f6793-f45c-4183-b0ed-28dc678ea5ac.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20261105%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261105T225925Z&X-Amz-Expires=300&X-Amz-Signature=758d34cc4cb38ed44f50987134e1bdbf4868e06b72237429d61ad484d7072259&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng":"_assets/e5a23037ebd39c92f759.png","/248532284-421f6793-f45c-4183-b0ed-28dc678ea5ac.png":"_assets/e5a23037ebd39c92f759.png","https://github-production-user-asset-6210df.s3.amazonaws.com/56786344/248532284-421f6793-f45c-4183-b0ed-28dc678ea5ac.png":"_assets/e5a23037ebd39c92f759.png","https://kunjgit.github.io/GameZone/Games/Doremon_Puzzle/Assets/8.jpg":"_assets/5f098ecfe95d01c3687d.jpg","/GameZone/Games/Doremon_Puzzle/Assets/8.jpg":"_assets/5f098ecfe95d01c3687d.jpg","/Games/Doremon_Puzzle/Assets/8.jpg":"_assets/5f098ecfe95d01c3687d.jpg","/Doremon_Puzzle/Assets/8.jpg":"_assets/5f098ecfe95d01c3687d.jpg","/Assets/8.jpg":"_assets/5f098ecfe95d01c3687d.jpg","/8.jpg":"_assets/5f098ecfe95d01c3687d.jpg","https://kunjgit.github.io/GameZone/Games/Doremon_Puzzle/Assets/2.jpg":"_assets/23deabad7f12e6eb8536.jpg","/GameZone/Games/Doremon_Puzzle/Assets/2.jpg":"_assets/23deabad7f12e6eb8536.jpg","/Games/Doremon_Puzzle/Assets/2.jpg":"_assets/23deabad7f12e6eb8536.jpg","/Doremon_Puzzle/Assets/2.jpg":"_assets/23deabad7f12e6eb8536.jpg","/Assets/2.jpg":"_assets/23deabad7f12e6eb8536.jpg","/2.jpg":"_assets/23deabad7f12e6eb8536.jpg","https://kunjgit.github.io/GameZone/Games/Doremon_Puzzle/Assets/5.jpg":"_assets/6fe6343920f72eaf023e.jpg","/GameZone/Games/Doremon_Puzzle/Assets/5.jpg":"_assets/6fe6343920f72eaf023e.jpg","/Games/Doremon_Puzzle/Assets/5.jpg":"_assets/6fe6343920f72eaf023e.jpg","/Doremon_Puzzle/Assets/5.jpg":"_assets/6fe6343920f72eaf023e.jpg","/Assets/5.jpg":"_assets/6fe6343920f72eaf023e.jpg","/5.jpg":"_assets/6fe6343920f72eaf023e.jpg","https://kunjgit.github.io/GameZone/Games/Doremon_Puzzle/Assets/1.jpg":"_assets/3537a98b4669542eea1e.jpg","/GameZone/Games/Doremon_Puzzle/Assets/1.jpg":"_assets/3537a98b4669542eea1e.jpg","/Games/Doremon_Puzzle/Assets/1.jpg":"_assets/3537a98b4669542eea1e.jpg","/Doremon_Puzzle/Assets/1.jpg":"_assets/3537a98b4669542eea1e.jpg","/Assets/1.jpg":"_assets/3537a98b4669542eea1e.jpg","/1.jpg":"_assets/3537a98b4669542eea1e.jpg","https://kunjgit.github.io/GameZone/Games/Doremon_Puzzle/Assets/7.jpg":"_assets/be065803542fd17c0c46.jpg","/GameZone/Games/Doremon_Puzzle/Assets/7.jpg":"_assets/be065803542fd17c0c46.jpg","/Games/Doremon_Puzzle/Assets/7.jpg":"_assets/be065803542fd17c0c46.jpg","/Doremon_Puzzle/Assets/7.jpg":"_assets/be065803542fd17c0c46.jpg","/Assets/7.jpg":"_assets/be065803542fd17c0c46.jpg","/7.jpg":"_assets/be065803542fd17c0c46.jpg","https://kunjgit.github.io/GameZone/Games/Doremon_Puzzle/Assets/6.jpg":"_assets/3c8fb384f6cc1b26d969.jpg","/GameZone/Games/Doremon_Puzzle/Assets/6.jpg":"_assets/3c8fb384f6cc1b26d969.jpg","/Games/Doremon_Puzzle/Assets/6.jpg":"_assets/3c8fb384f6cc1b26d969.jpg","/Doremon_Puzzle/Assets/6.jpg":"_assets/3c8fb384f6cc1b26d969.jpg","/Assets/6.jpg":"_assets/3c8fb384f6cc1b26d969.jpg","/6.jpg":"_assets/3c8fb384f6cc1b26d969.jpg","https://kunjgit.github.io/GameZone/Games/Doremon_Puzzle/Assets/9.jpg":"_assets/4ac580af44a9b9797905.jpg","/GameZone/Games/Doremon_Puzzle/Assets/9.jpg":"_assets/4ac580af44a9b9797905.jpg","/Games/Doremon_Puzzle/Assets/9.jpg":"_assets/4ac580af44a9b9797905.jpg","/Doremon_Puzzle/Assets/9.jpg":"_assets/4ac580af44a9b9797905.jpg","/Assets/9.jpg":"_assets/4ac580af44a9b9797905.jpg","/9.jpg":"_assets/4ac580af44a9b9797905.jpg","https://kunjgit.github.io/GameZone/Games/Doremon_Puzzle/Assets/4.jpg":"_assets/b63143a4abb3d8820f13.jpg","/GameZone/Games/Doremon_Puzzle/Assets/4.jpg":"_assets/b63143a4abb3d8820f13.jpg","/Games/Doremon_Puzzle/Assets/4.jpg":"_assets/b63143a4abb3d8820f13.jpg","/Doremon_Puzzle/Assets/4.jpg":"_assets/b63143a4abb3d8820f13.jpg","/Assets/4.jpg":"_assets/b63143a4abb3d8820f13.jpg","/4.jpg":"_assets/b63143a4abb3d8820f13.jpg","https://kunjgit.github.io/GameZone/Games/Doremon_Puzzle/Assets/3.jpg":"_assets/9ede88e05a0d76744314.jpg","/GameZone/Games/Doremon_Puzzle/Assets/3.jpg":"_assets/9ede88e05a0d76744314.jpg","/Games/Doremon_Puzzle/Assets/3.jpg":"_assets/9ede88e05a0d76744314.jpg","/Doremon_Puzzle/Assets/3.jpg":"_assets/9ede88e05a0d76744314.jpg","/Assets/3.jpg":"_assets/9ede88e05a0d76744314.jpg","/3.jpg":"_assets/9ede88e05a0d76744314.jpg"};
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
