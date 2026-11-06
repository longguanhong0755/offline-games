(() => {
  "use strict";
  const RUNTIME_MAP = {"http://thsoft.github.io/froggy/images.js":"_assets/60e5bcda24340fb02c4d.js","/froggy/images.js":"_assets/60e5bcda24340fb02c4d.js","/images.js":"_assets/60e5bcda24340fb02c4d.js","http://thsoft.github.io/froggy/script.js":"_assets/b167335afa1fb3d61719.js","/froggy/script.js":"_assets/b167335afa1fb3d61719.js","/script.js":"_assets/b167335afa1fb3d61719.js","http://thsoft.github.io/froggy/Froggy/Main.js":"_assets/f304fd63035aeb443a96.js","/froggy/Froggy/Main.js":"_assets/f304fd63035aeb443a96.js","/Froggy/Main.js":"_assets/f304fd63035aeb443a96.js","/Main.js":"_assets/f304fd63035aeb443a96.js","https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js":"_assets/81016ac6be850b72df5d.js","/ajax/libs/webfont/1/webfont.js":"_assets/81016ac6be850b72df5d.js","/libs/webfont/1/webfont.js":"_assets/81016ac6be850b72df5d.js","/webfont/1/webfont.js":"_assets/81016ac6be850b72df5d.js","/1/webfont.js":"_assets/81016ac6be850b72df5d.js","/webfont.js":"_assets/81016ac6be850b72df5d.js","http://thsoft.github.io/froggy/style.css":"_assets/0b1ac48176b854fe4365.css","/froggy/style.css":"_assets/0b1ac48176b854fe4365.css","/style.css":"_assets/0b1ac48176b854fe4365.css","http://fonts.googleapis.com/css?family=Boogaloo":"_assets/4ec425b4644a04db6f9c.css","/css":"_assets/4ec425b4644a04db6f9c.css","/css?family=Boogaloo":"_assets/4ec425b4644a04db6f9c.css","http://fonts.googleapis.com/css":"_assets/4ec425b4644a04db6f9c.css","http://thsoft.github.io/froggy/images/water.jpg":"_assets/9b32ee0eca0a110be081.jpg","/froggy/images/water.jpg":"_assets/9b32ee0eca0a110be081.jpg","/images/water.jpg":"_assets/9b32ee0eca0a110be081.jpg","/water.jpg":"_assets/9b32ee0eca0a110be081.jpg","http://thsoft.github.io/froggy/images/arrows/1/0.svg":"_assets/f0002e6f409c897fb8d8.svg","/froggy/images/arrows/1/0.svg":"_assets/f0002e6f409c897fb8d8.svg","/images/arrows/1/0.svg":"_assets/f0002e6f409c897fb8d8.svg","/arrows/1/0.svg":"_assets/f0002e6f409c897fb8d8.svg","/1/0.svg":"_assets/f0002e6f409c897fb8d8.svg","/0.svg":"_assets/f0002e6f409c897fb8d8.svg","http://thsoft.github.io/froggy/images/arrows/1/270.svg":"_assets/a46348f4233272f40ff0.svg","/froggy/images/arrows/1/270.svg":"_assets/a46348f4233272f40ff0.svg","/images/arrows/1/270.svg":"_assets/a46348f4233272f40ff0.svg","/arrows/1/270.svg":"_assets/a46348f4233272f40ff0.svg","/1/270.svg":"_assets/a46348f4233272f40ff0.svg","/270.svg":"_assets/a46348f4233272f40ff0.svg","http://thsoft.github.io/froggy/images/arrows/1/90.svg":"_assets/6b1aefae1540d9410340.svg","/froggy/images/arrows/1/90.svg":"_assets/6b1aefae1540d9410340.svg","/images/arrows/1/90.svg":"_assets/6b1aefae1540d9410340.svg","/arrows/1/90.svg":"_assets/6b1aefae1540d9410340.svg","/1/90.svg":"_assets/6b1aefae1540d9410340.svg","/90.svg":"_assets/6b1aefae1540d9410340.svg","http://thsoft.github.io/froggy/images/arrows/1/180.svg":"_assets/27360476c2a0c63390b5.svg","/froggy/images/arrows/1/180.svg":"_assets/27360476c2a0c63390b5.svg","/images/arrows/1/180.svg":"_assets/27360476c2a0c63390b5.svg","/arrows/1/180.svg":"_assets/27360476c2a0c63390b5.svg","/1/180.svg":"_assets/27360476c2a0c63390b5.svg","/180.svg":"_assets/27360476c2a0c63390b5.svg","http://thsoft.github.io/froggy/images/loading.gif":"_assets/2177facbb4a68594d9ee.gif","/froggy/images/loading.gif":"_assets/2177facbb4a68594d9ee.gif","/images/loading.gif":"_assets/2177facbb4a68594d9ee.gif","/loading.gif":"_assets/2177facbb4a68594d9ee.gif","http://thsoft.github.io/froggy/images/arrows/2/0.svg":"_assets/df12100e8cf206025852.svg","/froggy/images/arrows/2/0.svg":"_assets/df12100e8cf206025852.svg","/images/arrows/2/0.svg":"_assets/df12100e8cf206025852.svg","/arrows/2/0.svg":"_assets/df12100e8cf206025852.svg","/2/0.svg":"_assets/df12100e8cf206025852.svg","http://thsoft.github.io/froggy/images/completed.svg":"_assets/131328c98b9346c40c11.svg","/froggy/images/completed.svg":"_assets/131328c98b9346c40c11.svg","/images/completed.svg":"_assets/131328c98b9346c40c11.svg","/completed.svg":"_assets/131328c98b9346c40c11.svg","http://thsoft.github.io/froggy/images/arrows/2/90.svg":"_assets/b06ccee2e89271a627de.svg","/froggy/images/arrows/2/90.svg":"_assets/b06ccee2e89271a627de.svg","/images/arrows/2/90.svg":"_assets/b06ccee2e89271a627de.svg","/arrows/2/90.svg":"_assets/b06ccee2e89271a627de.svg","/2/90.svg":"_assets/b06ccee2e89271a627de.svg","http://thsoft.github.io/froggy/images/arrows/2/180.svg":"_assets/c6891f6430afde04ca4b.svg","/froggy/images/arrows/2/180.svg":"_assets/c6891f6430afde04ca4b.svg","/images/arrows/2/180.svg":"_assets/c6891f6430afde04ca4b.svg","/arrows/2/180.svg":"_assets/c6891f6430afde04ca4b.svg","/2/180.svg":"_assets/c6891f6430afde04ca4b.svg","http://fonts.gstatic.com/s/boogaloo/v25/kmK-Zq45GAvOdnaW6y1C9ys.woff2":"_assets/61ff476ab12ef621ba34.woff2","/s/boogaloo/v25/kmK-Zq45GAvOdnaW6y1C9ys.woff2":"_assets/61ff476ab12ef621ba34.woff2","/boogaloo/v25/kmK-Zq45GAvOdnaW6y1C9ys.woff2":"_assets/61ff476ab12ef621ba34.woff2","/v25/kmK-Zq45GAvOdnaW6y1C9ys.woff2":"_assets/61ff476ab12ef621ba34.woff2","/kmK-Zq45GAvOdnaW6y1C9ys.woff2":"_assets/61ff476ab12ef621ba34.woff2","http://thsoft.github.io/froggy/images/arrows/2/270.svg":"_assets/55a9d4b9f82e04e0a756.svg","/froggy/images/arrows/2/270.svg":"_assets/55a9d4b9f82e04e0a756.svg","/images/arrows/2/270.svg":"_assets/55a9d4b9f82e04e0a756.svg","/arrows/2/270.svg":"_assets/55a9d4b9f82e04e0a756.svg","/2/270.svg":"_assets/55a9d4b9f82e04e0a756.svg","http://thsoft.github.io/froggy/images/message/0.svg":"_assets/b26666816268089e09b7.svg","/froggy/images/message/0.svg":"_assets/b26666816268089e09b7.svg","/images/message/0.svg":"_assets/b26666816268089e09b7.svg","/message/0.svg":"_assets/b26666816268089e09b7.svg","http://thsoft.github.io/froggy/images/key.svg":"_assets/891ef05187a921e8f429.svg","/froggy/images/key.svg":"_assets/891ef05187a921e8f429.svg","/images/key.svg":"_assets/891ef05187a921e8f429.svg","/key.svg":"_assets/891ef05187a921e8f429.svg","http://thsoft.github.io/froggy/images/leaf.png":"_assets/ddfc1f718ad716a62ad2.png","/froggy/images/leaf.png":"_assets/ddfc1f718ad716a62ad2.png","/images/leaf.png":"_assets/ddfc1f718ad716a62ad2.png","/leaf.png":"_assets/ddfc1f718ad716a62ad2.png","http://thsoft.github.io/froggy/images/message/180.svg":"_assets/abe92eadf584210ebd93.svg","/froggy/images/message/180.svg":"_assets/abe92eadf584210ebd93.svg","/images/message/180.svg":"_assets/abe92eadf584210ebd93.svg","/message/180.svg":"_assets/abe92eadf584210ebd93.svg","http://thsoft.github.io/froggy/images/message/270.svg":"_assets/943069e48e27ab198993.svg","/froggy/images/message/270.svg":"_assets/943069e48e27ab198993.svg","/images/message/270.svg":"_assets/943069e48e27ab198993.svg","/message/270.svg":"_assets/943069e48e27ab198993.svg","http://thsoft.github.io/froggy/images/message/90.svg":"_assets/e46940dc8be4a59a8937.svg","/froggy/images/message/90.svg":"_assets/e46940dc8be4a59a8937.svg","/images/message/90.svg":"_assets/e46940dc8be4a59a8937.svg","/message/90.svg":"_assets/e46940dc8be4a59a8937.svg","http://thsoft.github.io/froggy/images/next.png":"_assets/fbdf3482aa119d71a7bc.png","/froggy/images/next.png":"_assets/fbdf3482aa119d71a7bc.png","/images/next.png":"_assets/fbdf3482aa119d71a7bc.png","/next.png":"_assets/fbdf3482aa119d71a7bc.png","http://thsoft.github.io/froggy/images/level.png":"_assets/13e718968fe4a756393b.png","/froggy/images/level.png":"_assets/13e718968fe4a756393b.png","/images/level.png":"_assets/13e718968fe4a756393b.png","/level.png":"_assets/13e718968fe4a756393b.png","http://thsoft.github.io/froggy/images/restart.png":"_assets/eddbaf904ccd728af977.png","/froggy/images/restart.png":"_assets/eddbaf904ccd728af977.png","/images/restart.png":"_assets/eddbaf904ccd728af977.png","/restart.png":"_assets/eddbaf904ccd728af977.png","http://thsoft.github.io/froggy/images/frog.png":"_assets/b690bdbc12f17230a96d.png","/froggy/images/frog.png":"_assets/b690bdbc12f17230a96d.png","/images/frog.png":"_assets/b690bdbc12f17230a96d.png","/frog.png":"_assets/b690bdbc12f17230a96d.png"};
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
