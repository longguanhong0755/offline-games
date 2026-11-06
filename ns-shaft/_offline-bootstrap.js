(() => {
  "use strict";
  const RUNTIME_MAP = {"https://ipel.github.io/NS-SHAFT/main.js":"_assets/f9db74e1582ab9a956c2.js","/NS-SHAFT/main.js":"_assets/f9db74e1582ab9a956c2.js","/main.js":"_assets/f9db74e1582ab9a956c2.js","https://ipel.github.io/NS-SHAFT/sns.js":"_assets/2ec3bc721a547b33c53d.js","/NS-SHAFT/sns.js":"_assets/2ec3bc721a547b33c53d.js","/sns.js":"_assets/2ec3bc721a547b33c53d.js","https://ipel.github.io/NS-SHAFT/bg.png":"_assets/7008b7687743a91541cd.png","/NS-SHAFT/bg.png":"_assets/7008b7687743a91541cd.png","/bg.png":"_assets/7008b7687743a91541cd.png","https://ipel.github.io/NS-SHAFT/led.png":"_assets/2a6208526c18bbac226d.png","/NS-SHAFT/led.png":"_assets/2a6208526c18bbac226d.png","/led.png":"_assets/2a6208526c18bbac226d.png","https://static.fouryes.com/smile.gif":"_assets/508d348a2727480eb0f7.gif","/smile.gif":"_assets/508d348a2727480eb0f7.gif","https://hm.baidu.com/hm.js?6998d97ddc26a42b1795408af4d9d9cc":"_assets/aae8a06b404fbd029f64.js","/hm.js":"_assets/aae8a06b404fbd029f64.js","/hm.js?6998d97ddc26a42b1795408af4d9d9cc":"_assets/aae8a06b404fbd029f64.js","https://hm.baidu.com/hm.js":"_assets/aae8a06b404fbd029f64.js","https://hm.baidu.com/hm.gif?hca=514A8AA139D3DF61&cc=1&ck=1&cl=24-bit&ds=1440x900&vl=900&et=0&ja=0&ln=zh-cn&lo=0&rnd=1863151681&si=6998d97ddc26a42b1795408af4d9d9cc&v=1.3.2&lv=1&sn=26022&r=0&ww=1440&u=https%3A%2F%2Fipel.github.io%2FNS-SHAFT%2F&tt=%E6%98%AF%E7%94%B7%E4%BA%BA%E5%B0%B1%E4%B8%8B100%E5%B1%82":"_assets/cf4724b2f736ed1a0ae6.gif","/hm.gif":"_assets/cf4724b2f736ed1a0ae6.gif","/hm.gif?hca=514A8AA139D3DF61&cc=1&ck=1&cl=24-bit&ds=1440x900&vl=900&et=0&ja=0&ln=zh-cn&lo=0&rnd=1863151681&si=6998d97ddc26a42b1795408af4d9d9cc&v=1.3.2&lv=1&sn=26022&r=0&ww=1440&u=https%3A%2F%2Fipel.github.io%2FNS-SHAFT%2F&tt=%E6%98%AF%E7%94%B7%E4%BA%BA%E5%B0%B1%E4%B8%8B100%E5%B1%82":"_assets/cf4724b2f736ed1a0ae6.gif","https://hm.baidu.com/hm.gif":"_assets/cf4724b2f736ed1a0ae6.gif","https://hm.baidu.com/hm.gif?hca=514A8AA139D3DF61&cc=1&ck=1&cl=24-bit&ds=1440x900&vl=900&ep=main*start*all*1&et=4&ja=0&ln=zh-cn&lo=0&rnd=1036220593&si=6998d97ddc26a42b1795408af4d9d9cc&v=1.3.2&lv=1&api=8_0&sn=26022&r=0&ww=1440&u=https%3A%2F%2Fipel.github.io%2FNS-SHAFT%2F":"_assets/cf4724b2f736ed1a0ae6.gif","/hm.gif?hca=514A8AA139D3DF61&cc=1&ck=1&cl=24-bit&ds=1440x900&vl=900&ep=main*start*all*1&et=4&ja=0&ln=zh-cn&lo=0&rnd=1036220593&si=6998d97ddc26a42b1795408af4d9d9cc&v=1.3.2&lv=1&api=8_0&sn=26022&r=0&ww=1440&u=https%3A%2F%2Fipel.github.io%2FNS-SHAFT%2F":"_assets/cf4724b2f736ed1a0ae6.gif","https://hm.baidu.com/hm.gif?hca=514A8AA139D3DF61&cc=1&ck=1&cl=24-bit&ds=1440x900&vl=900&ep=main*duration*all*5321&et=4&ja=0&ln=zh-cn&lo=0&rnd=21264877&si=6998d97ddc26a42b1795408af4d9d9cc&v=1.3.2&lv=1&api=8_0&sn=26022&r=0&ww=1440&u=https%3A%2F%2Fipel.github.io%2FNS-SHAFT%2F":"_assets/cf4724b2f736ed1a0ae6.gif","/hm.gif?hca=514A8AA139D3DF61&cc=1&ck=1&cl=24-bit&ds=1440x900&vl=900&ep=main*duration*all*5321&et=4&ja=0&ln=zh-cn&lo=0&rnd=21264877&si=6998d97ddc26a42b1795408af4d9d9cc&v=1.3.2&lv=1&api=8_0&sn=26022&r=0&ww=1440&u=https%3A%2F%2Fipel.github.io%2FNS-SHAFT%2F":"_assets/cf4724b2f736ed1a0ae6.gif","https://hm.baidu.com/hm.gif?hca=514A8AA139D3DF61&cc=1&ck=1&cl=24-bit&ds=1440x900&vl=900&ep=main*score*all&et=4&ja=0&ln=zh-cn&lo=0&rnd=1922781190&si=6998d97ddc26a42b1795408af4d9d9cc&v=1.3.2&lv=1&api=8_0&sn=26022&r=0&ww=1440&u=https%3A%2F%2Fipel.github.io%2FNS-SHAFT%2F":"_assets/cf4724b2f736ed1a0ae6.gif","/hm.gif?hca=514A8AA139D3DF61&cc=1&ck=1&cl=24-bit&ds=1440x900&vl=900&ep=main*score*all&et=4&ja=0&ln=zh-cn&lo=0&rnd=1922781190&si=6998d97ddc26a42b1795408af4d9d9cc&v=1.3.2&lv=1&api=8_0&sn=26022&r=0&ww=1440&u=https%3A%2F%2Fipel.github.io%2FNS-SHAFT%2F":"_assets/cf4724b2f736ed1a0ae6.gif"};
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
