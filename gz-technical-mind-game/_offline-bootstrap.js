(() => {
  "use strict";
  const RUNTIME_MAP = {"https://media.geeksforgeeks.org/wp-content/uploads/20231122102834/JSImage.jpg":"_assets/d863abca82f8d9a04c4b.jpg","/wp-content/uploads/20231122102834/JSImage.jpg":"_assets/d863abca82f8d9a04c4b.jpg","/uploads/20231122102834/JSImage.jpg":"_assets/d863abca82f8d9a04c4b.jpg","/20231122102834/JSImage.jpg":"_assets/d863abca82f8d9a04c4b.jpg","/JSImage.jpg":"_assets/d863abca82f8d9a04c4b.jpg","https://media.geeksforgeeks.org/wp-content/uploads/20231122102835/html5Image.png":"_assets/97ed59494dde31dc41c2.png","/wp-content/uploads/20231122102835/html5Image.png":"_assets/97ed59494dde31dc41c2.png","/uploads/20231122102835/html5Image.png":"_assets/97ed59494dde31dc41c2.png","/20231122102835/html5Image.png":"_assets/97ed59494dde31dc41c2.png","/html5Image.png":"_assets/97ed59494dde31dc41c2.png","https://media.geeksforgeeks.org/wp-content/uploads/20231122102834/CSS3Image.png":"_assets/eba43222d45c3b19a2d5.png","/wp-content/uploads/20231122102834/CSS3Image.png":"_assets/eba43222d45c3b19a2d5.png","/uploads/20231122102834/CSS3Image.png":"_assets/eba43222d45c3b19a2d5.png","/20231122102834/CSS3Image.png":"_assets/eba43222d45c3b19a2d5.png","/CSS3Image.png":"_assets/eba43222d45c3b19a2d5.png","https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/vueImage.png":"_assets/efe68a9c18650f6f1745.png","/wp-content/uploads/20231122102833/vueImage.png":"_assets/efe68a9c18650f6f1745.png","/uploads/20231122102833/vueImage.png":"_assets/efe68a9c18650f6f1745.png","/20231122102833/vueImage.png":"_assets/efe68a9c18650f6f1745.png","/vueImage.png":"_assets/efe68a9c18650f6f1745.png","https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/reactImage.png":"_assets/9ab8bffa667a32f21a68.png","/wp-content/uploads/20231122102833/reactImage.png":"_assets/9ab8bffa667a32f21a68.png","/uploads/20231122102833/reactImage.png":"_assets/9ab8bffa667a32f21a68.png","/20231122102833/reactImage.png":"_assets/9ab8bffa667a32f21a68.png","/reactImage.png":"_assets/9ab8bffa667a32f21a68.png","https://kunjgit.github.io/GameZone/Games/Technical_Mind_Game/style.css":"_assets/03164cf897a4aa404071.css","/GameZone/Games/Technical_Mind_Game/style.css":"_assets/03164cf897a4aa404071.css","/Games/Technical_Mind_Game/style.css":"_assets/03164cf897a4aa404071.css","/Technical_Mind_Game/style.css":"_assets/03164cf897a4aa404071.css","/style.css":"_assets/03164cf897a4aa404071.css","https://media.geeksforgeeks.org/wp-content/uploads/20231122102833/AngularImage.png":"_assets/af7572644929ba0ae415.png","/wp-content/uploads/20231122102833/AngularImage.png":"_assets/af7572644929ba0ae415.png","/uploads/20231122102833/AngularImage.png":"_assets/af7572644929ba0ae415.png","/20231122102833/AngularImage.png":"_assets/af7572644929ba0ae415.png","/AngularImage.png":"_assets/af7572644929ba0ae415.png","https://kunjgit.github.io/GameZone/Games/Technical_Mind_Game/script.js":"_assets/258aded51e27c1bfb95f.js","/GameZone/Games/Technical_Mind_Game/script.js":"_assets/258aded51e27c1bfb95f.js","/Games/Technical_Mind_Game/script.js":"_assets/258aded51e27c1bfb95f.js","/Technical_Mind_Game/script.js":"_assets/258aded51e27c1bfb95f.js","/script.js":"_assets/258aded51e27c1bfb95f.js","https://kunjgit.github.io/GameZone/Games/Technical_Mind_Game/beep-07a.wav":"_assets/8b21c1906ec134d7cfde.wav","/GameZone/Games/Technical_Mind_Game/beep-07a.wav":"_assets/8b21c1906ec134d7cfde.wav","/Games/Technical_Mind_Game/beep-07a.wav":"_assets/8b21c1906ec134d7cfde.wav","/Technical_Mind_Game/beep-07a.wav":"_assets/8b21c1906ec134d7cfde.wav","/beep-07a.wav":"_assets/8b21c1906ec134d7cfde.wav"};
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
