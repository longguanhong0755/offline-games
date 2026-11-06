(() => {
  "use strict";
  const RUNTIME_MAP = {"https://snakeball.jiejoe.com/css/app.e11ca6d3.css":"_assets/4c26a1dc7105b508bb21.css","/css/app.e11ca6d3.css":"_assets/4c26a1dc7105b508bb21.css","/app.e11ca6d3.css":"_assets/4c26a1dc7105b508bb21.css","https://snakeball.jiejoe.com/js/app.718c33da.js":"_assets/49308235360932005a04.js","/js/app.718c33da.js":"_assets/49308235360932005a04.js","/app.718c33da.js":"_assets/49308235360932005a04.js","https://hm.baidu.com/hm.js?a99cd933edb176fea9a98119f5a18c8d":"_assets/231fcd94c26775c450f1.js","/hm.js":"_assets/231fcd94c26775c450f1.js","/hm.js?a99cd933edb176fea9a98119f5a18c8d":"_assets/231fcd94c26775c450f1.js","https://hm.baidu.com/hm.js":"_assets/231fcd94c26775c450f1.js","https://snakeball.jiejoe.com/js/chunk-vendors.e1317373.js":"_assets/5f701e97e7a15c18ab7a.js","/js/chunk-vendors.e1317373.js":"_assets/5f701e97e7a15c18ab7a.js","/chunk-vendors.e1317373.js":"_assets/5f701e97e7a15c18ab7a.js","https://hm.baidu.com/hm.gif?hca=996FC946F4517B4A&cc=1&ck=1&cl=24-bit&ds=1440x900&vl=900&et=0&ja=0&ln=zh-cn&lo=0&rnd=2004663450&si=a99cd933edb176fea9a98119f5a18c8d&v=1.3.2&lv=1&sn=37068&r=0&ww=1440&u=https%3A%2F%2Fsnakeball.jiejoe.com%2F&tt=SNAKEBALL":"_assets/cf4724b2f736ed1a0ae6.gif","/hm.gif":"_assets/cf4724b2f736ed1a0ae6.gif","/hm.gif?hca=996FC946F4517B4A&cc=1&ck=1&cl=24-bit&ds=1440x900&vl=900&et=0&ja=0&ln=zh-cn&lo=0&rnd=2004663450&si=a99cd933edb176fea9a98119f5a18c8d&v=1.3.2&lv=1&sn=37068&r=0&ww=1440&u=https%3A%2F%2Fsnakeball.jiejoe.com%2F&tt=SNAKEBALL":"_assets/cf4724b2f736ed1a0ae6.gif","https://hm.baidu.com/hm.gif":"_assets/cf4724b2f736ed1a0ae6.gif","https://snakeball.jiejoe.com/media/win.abae314b.mp3":"_assets/32605d37b77d69e3786f.mp3","/media/win.abae314b.mp3":"_assets/32605d37b77d69e3786f.mp3","/win.abae314b.mp3":"_assets/32605d37b77d69e3786f.mp3","https://snakeball.jiejoe.com/media/hall.034048ba.mp3":"_assets/5ca0d44cedde76cc1a6d.mp3","/media/hall.034048ba.mp3":"_assets/5ca0d44cedde76cc1a6d.mp3","/hall.034048ba.mp3":"_assets/5ca0d44cedde76cc1a6d.mp3","https://snakeball.jiejoe.com/fonts/EricaOne-Regular.e69fbb4f.ttf":"_assets/db1d89e80e33a8a01bea.ttf","/fonts/EricaOne-Regular.e69fbb4f.ttf":"_assets/db1d89e80e33a8a01bea.ttf","/EricaOne-Regular.e69fbb4f.ttf":"_assets/db1d89e80e33a8a01bea.ttf","https://snakeball.jiejoe.com/media/button.9b04f007.mp3":"_assets/4221c0b3d173836303fc.mp3","/media/button.9b04f007.mp3":"_assets/4221c0b3d173836303fc.mp3","/button.9b04f007.mp3":"_assets/4221c0b3d173836303fc.mp3","https://snakeball.jiejoe.com/media/reset.d37cf357.mp3":"_assets/4e446d12d4f6955e232e.mp3","/media/reset.d37cf357.mp3":"_assets/4e446d12d4f6955e232e.mp3","/reset.d37cf357.mp3":"_assets/4e446d12d4f6955e232e.mp3","https://snakeball.jiejoe.com/media/buff.c399af4d.mp3":"_assets/068eb802a60e69d98e1a.mp3","/media/buff.c399af4d.mp3":"_assets/068eb802a60e69d98e1a.mp3","/buff.c399af4d.mp3":"_assets/068eb802a60e69d98e1a.mp3","https://snakeball.jiejoe.com/media/warn.f4a25a43.mp3":"_assets/798c86818755a9c0012e.mp3","/media/warn.f4a25a43.mp3":"_assets/798c86818755a9c0012e.mp3","/warn.f4a25a43.mp3":"_assets/798c86818755a9c0012e.mp3","https://snakeball.jiejoe.com/media/blast1.71b7be04.mp3":"_assets/c8c32bbc3018320015b6.mp3","/media/blast1.71b7be04.mp3":"_assets/c8c32bbc3018320015b6.mp3","/blast1.71b7be04.mp3":"_assets/c8c32bbc3018320015b6.mp3","https://snakeball.jiejoe.com/media/blast2.8999545f.mp3":"_assets/984437bc05d1bba37a34.mp3","/media/blast2.8999545f.mp3":"_assets/984437bc05d1bba37a34.mp3","/blast2.8999545f.mp3":"_assets/984437bc05d1bba37a34.mp3","https://snakeball.jiejoe.com/media/blast3.f8d920b1.mp3":"_assets/e5098c9372a842ae48cb.mp3","/media/blast3.f8d920b1.mp3":"_assets/e5098c9372a842ae48cb.mp3","/blast3.f8d920b1.mp3":"_assets/e5098c9372a842ae48cb.mp3","https://snakeball.jiejoe.com/media/blast4.9393a48a.mp3":"_assets/acb7957d13effd1d4b1f.mp3","/media/blast4.9393a48a.mp3":"_assets/acb7957d13effd1d4b1f.mp3","/blast4.9393a48a.mp3":"_assets/acb7957d13effd1d4b1f.mp3","https://snakeball.jiejoe.com/media/blast5.73afdb27.mp3":"_assets/bc05da958d19256bf24d.mp3","/media/blast5.73afdb27.mp3":"_assets/bc05da958d19256bf24d.mp3","/blast5.73afdb27.mp3":"_assets/bc05da958d19256bf24d.mp3","https://snakeball.jiejoe.com/fonts/RammettoOne-Regular.3b27ea68.ttf":"_assets/6f509d818a9583df7129.ttf","/fonts/RammettoOne-Regular.3b27ea68.ttf":"_assets/6f509d818a9583df7129.ttf","/RammettoOne-Regular.3b27ea68.ttf":"_assets/6f509d818a9583df7129.ttf","https://snakeball.jiejoe.com/media/fail.036348d6.mp3":"_assets/a099bcac692ff7d0f851.mp3","/media/fail.036348d6.mp3":"_assets/a099bcac692ff7d0f851.mp3","/fail.036348d6.mp3":"_assets/a099bcac692ff7d0f851.mp3","https://snakeball.jiejoe.com/media/ready.53c0b4ab.mp3":"_assets/f287c5a46f4160e10bb4.mp3","/media/ready.53c0b4ab.mp3":"_assets/f287c5a46f4160e10bb4.mp3","/ready.53c0b4ab.mp3":"_assets/f287c5a46f4160e10bb4.mp3","https://snakeball.jiejoe.com/img/blurball.7a02ba16.png":"_assets/d7da4ac58b3ca0fffa90.png","/img/blurball.7a02ba16.png":"_assets/d7da4ac58b3ca0fffa90.png","/blurball.7a02ba16.png":"_assets/d7da4ac58b3ca0fffa90.png","https://snakeball.jiejoe.com/media/gameing.6689c2a7.mp3":"_assets/a67b5259186a0cad4af1.mp3","/media/gameing.6689c2a7.mp3":"_assets/a67b5259186a0cad4af1.mp3","/gameing.6689c2a7.mp3":"_assets/a67b5259186a0cad4af1.mp3"};
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
