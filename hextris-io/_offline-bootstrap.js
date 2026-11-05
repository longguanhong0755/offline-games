(() => {
  "use strict";
  const RUNTIME_MAP = {"/js/save-state.js":"_assets/22ab1cb924fc3e7be062.js","/js/Text.js":"_assets/7eb73bf9f10b97f2fb00.js","/vendor/js.cookie.js":"_assets/dd972387609461c36da7.js","/vendor/keypress.min.js":"_assets/e3a60e96762936ce21bd.js","/style/fa/css/font-awesome.min.css":"_assets/05540f351581e28f2423.css","/js/Block.js":"_assets/8dc16633cf4443126d66.js","/js/view.js":"_assets/02ab0e8c634b21306a44.js","/js/main.js":"_assets/1ad07186e9d76379f97f.js","/style/style.css":"_assets/766e0d988ec3b1343d91.css","/js/render.js":"_assets/bcf83391093e3980abd1.js","/js/input.js":"_assets/ec27fdd24caf206db1cc.js","/js/math.js":"_assets/032789a4e1b7f509dd0d.js","/vendor/jsonfn.min.js":"_assets/5f0502c3c48812393a14.js","/js/initialization.js":"_assets/6db0722340b9f7955810.js","/js/comboTimer.js":"_assets/90c9df8009abb46fd92d.js","/vendor/hammer.min.js":"_assets/f9109484836871798948.js","/vendor/jquery.js":"_assets/ee120ee3cca09a6e2132.js","/images/btn_help.svg":"_assets/b5b8db43c79f434c505c.svg","/images/btn_pause.svg":"_assets/bd1212415523d4102060.svg","/js/update.js":"_assets/f6983acf1cee3e09d1f7.js","/js/checking.js":"_assets/9f8761f25c184013fbba.js","/js/wavegen.js":"_assets/05c9b4f996ea32f0aabf.js","/vendor/sweet-alert.min.js":"_assets/ac46ed6a8364a5004cfc.js","/js/Hex.js":"_assets/021ac309917508afea58.js","/images/btn_restart.svg":"_assets/40c88cd8d0b9488243df.svg","/style/fonts/Exo2-Regular.otf":"_assets/ebfec5f5c1598340e242.otf","/style/fonts/Exo2-SemiBold.otf":"_assets/b40e64b126fd0c400c61.otf","/style/fa/fonts/fontawesome-webfont.woff":"_assets/66db52b456efe7e29cec.woff"};
  const ROOT = new URL(".", document.currentScript.src);
  const nativeFetch = window.fetch.bind(window);
  const nativeOpen = XMLHttpRequest.prototype.open;

  function resolveUrl(input) {
    try {
      const raw = typeof input === "string" ? input : input.url;
      const absolute = new URL(raw, document.baseURI).href.split("#")[0];
      const parts = new URL(absolute);
      const local = RUNTIME_MAP[absolute] || RUNTIME_MAP[parts.pathname + parts.search] || RUNTIME_MAP[parts.pathname];
      return local ? new URL(local, ROOT).href : null;
    } catch (_) {
      return null;
    }
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
