(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/PianoTiles_Game/js/pt1.js":"_assets/f0c60073a511a2e5b62e.js","/GameZone/Games/PianoTiles_Game/js/pt1.js":"_assets/f0c60073a511a2e5b62e.js","/Games/PianoTiles_Game/js/pt1.js":"_assets/f0c60073a511a2e5b62e.js","/PianoTiles_Game/js/pt1.js":"_assets/f0c60073a511a2e5b62e.js","/js/pt1.js":"_assets/f0c60073a511a2e5b62e.js","/pt1.js":"_assets/f0c60073a511a2e5b62e.js","https://kunjgit.github.io/GameZone/Games/PianoTiles_Game/js/jquery.js":"_assets/66d90e5e13ae94c17031.js","/GameZone/Games/PianoTiles_Game/js/jquery.js":"_assets/66d90e5e13ae94c17031.js","/Games/PianoTiles_Game/js/jquery.js":"_assets/66d90e5e13ae94c17031.js","/PianoTiles_Game/js/jquery.js":"_assets/66d90e5e13ae94c17031.js","/js/jquery.js":"_assets/66d90e5e13ae94c17031.js","/jquery.js":"_assets/66d90e5e13ae94c17031.js","https://kunjgit.github.io/GameZone/Games/PianoTiles_Game/js/pt2.js":"_assets/b8201cb21154f6fb7058.js","/GameZone/Games/PianoTiles_Game/js/pt2.js":"_assets/b8201cb21154f6fb7058.js","/Games/PianoTiles_Game/js/pt2.js":"_assets/b8201cb21154f6fb7058.js","/PianoTiles_Game/js/pt2.js":"_assets/b8201cb21154f6fb7058.js","/js/pt2.js":"_assets/b8201cb21154f6fb7058.js","/pt2.js":"_assets/b8201cb21154f6fb7058.js","https://kunjgit.github.io/GameZone/Games/PianoTiles_Game/js/script.js":"_assets/26cef402fa0d07ab2e5f.js","/GameZone/Games/PianoTiles_Game/js/script.js":"_assets/26cef402fa0d07ab2e5f.js","/Games/PianoTiles_Game/js/script.js":"_assets/26cef402fa0d07ab2e5f.js","/PianoTiles_Game/js/script.js":"_assets/26cef402fa0d07ab2e5f.js","/js/script.js":"_assets/26cef402fa0d07ab2e5f.js","/script.js":"_assets/26cef402fa0d07ab2e5f.js","https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css":"_assets/6d92dfc1700fd38cd130.css","/bootstrap/3.4.1/css/bootstrap.min.css":"_assets/6d92dfc1700fd38cd130.css","/3.4.1/css/bootstrap.min.css":"_assets/6d92dfc1700fd38cd130.css","/css/bootstrap.min.css":"_assets/6d92dfc1700fd38cd130.css","/bootstrap.min.css":"_assets/6d92dfc1700fd38cd130.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js":"_assets/9ee2fcff6709e4d0d24b.js","/bootstrap/3.4.1/js/bootstrap.min.js":"_assets/9ee2fcff6709e4d0d24b.js","/3.4.1/js/bootstrap.min.js":"_assets/9ee2fcff6709e4d0d24b.js","/js/bootstrap.min.js":"_assets/9ee2fcff6709e4d0d24b.js","/bootstrap.min.js":"_assets/9ee2fcff6709e4d0d24b.js","https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css":"_assets/f75e846cc83bd11432f4.css","/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css":"_assets/f75e846cc83bd11432f4.css","/bootstrap@3.3.7/dist/css/bootstrap.min.css":"_assets/f75e846cc83bd11432f4.css","/dist/css/bootstrap.min.css":"_assets/f75e846cc83bd11432f4.css","https://cdnjs.cloudflare.com/ajax/libs/jstree/3.3.15/jstree.min.js":"_assets/70e9dbcbc6d27831a1e2.js","/ajax/libs/jstree/3.3.15/jstree.min.js":"_assets/70e9dbcbc6d27831a1e2.js","/libs/jstree/3.3.15/jstree.min.js":"_assets/70e9dbcbc6d27831a1e2.js","/jstree/3.3.15/jstree.min.js":"_assets/70e9dbcbc6d27831a1e2.js","/3.3.15/jstree.min.js":"_assets/70e9dbcbc6d27831a1e2.js","/jstree.min.js":"_assets/70e9dbcbc6d27831a1e2.js","https://cdnjs.cloudflare.com/ajax/libs/jquery.hotkeys/list/jquery.hotkeys.min.js":"_assets/1f063069f3a7608901b1.js","/ajax/libs/jquery.hotkeys/list/jquery.hotkeys.min.js":"_assets/1f063069f3a7608901b1.js","/libs/jquery.hotkeys/list/jquery.hotkeys.min.js":"_assets/1f063069f3a7608901b1.js","/jquery.hotkeys/list/jquery.hotkeys.min.js":"_assets/1f063069f3a7608901b1.js","/list/jquery.hotkeys.min.js":"_assets/1f063069f3a7608901b1.js","/jquery.hotkeys.min.js":"_assets/1f063069f3a7608901b1.js","https://cdnjs.cloudflare.com/ajax/libs/jquery.hotkeys/list/jquery.hotkeys.js":"_assets/75b0ba6b46f13c8aa430.js","/ajax/libs/jquery.hotkeys/list/jquery.hotkeys.js":"_assets/75b0ba6b46f13c8aa430.js","/libs/jquery.hotkeys/list/jquery.hotkeys.js":"_assets/75b0ba6b46f13c8aa430.js","/jquery.hotkeys/list/jquery.hotkeys.js":"_assets/75b0ba6b46f13c8aa430.js","/list/jquery.hotkeys.js":"_assets/75b0ba6b46f13c8aa430.js","/jquery.hotkeys.js":"_assets/75b0ba6b46f13c8aa430.js","https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js":"_assets/a0fe8723dcf55da64d06.js","/ajax/libs/jquery/3.6.4/jquery.min.js":"_assets/a0fe8723dcf55da64d06.js","/libs/jquery/3.6.4/jquery.min.js":"_assets/a0fe8723dcf55da64d06.js","/jquery/3.6.4/jquery.min.js":"_assets/a0fe8723dcf55da64d06.js","/3.6.4/jquery.min.js":"_assets/a0fe8723dcf55da64d06.js","/jquery.min.js":"_assets/a0fe8723dcf55da64d06.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://kunjgit.github.io/GameZone/Games/PianoTiles_Game/resources/furelise.mp3":"_assets/2131a21e936cad273074.mp3","/GameZone/Games/PianoTiles_Game/resources/furelise.mp3":"_assets/2131a21e936cad273074.mp3","/Games/PianoTiles_Game/resources/furelise.mp3":"_assets/2131a21e936cad273074.mp3","/PianoTiles_Game/resources/furelise.mp3":"_assets/2131a21e936cad273074.mp3","/resources/furelise.mp3":"_assets/2131a21e936cad273074.mp3","/furelise.mp3":"_assets/2131a21e936cad273074.mp3"};
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
