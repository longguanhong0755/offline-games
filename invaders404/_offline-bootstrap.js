(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fernetjs.com/css/style2.css":"_assets/fc23cdc400a2189c107d.css","/css/style2.css":"_assets/fc23cdc400a2189c107d.css","/style2.css":"_assets/fc23cdc400a2189c107d.css","https://fonts.googleapis.com/css2?family=Palanquin&display=swap":"_assets/2f15fb7fd2c340f48b81.css","/css2":"_assets/8cf752e4102881a10e20.css","/css2?family=Palanquin&display=swap":"_assets/2f15fb7fd2c340f48b81.css","https://fonts.googleapis.com/css2":"_assets/8cf752e4102881a10e20.css","https://fonts.googleapis.com/css2?family=Raleway&display=swap":"_assets/a46989ad0ded22356ed6.css","/css2?family=Raleway&display=swap":"_assets/a46989ad0ded22356ed6.css","https://fonts.googleapis.com/css2?family=Arvo&display=swap":"_assets/8cf752e4102881a10e20.css","/css2?family=Arvo&display=swap":"_assets/8cf752e4102881a10e20.css","https://fernetjs.com/favicon.png":"_assets/a55267ea50efb549385f.png","/favicon.png":"_assets/a55267ea50efb549385f.png","https://fernetjs.com/images/la-inteligencia-artificial-y-su-influencia-en-los-mercados-financieros.jpeg":"_assets/ccf0d93f79c5b21810ad.jpg","/images/la-inteligencia-artificial-y-su-influencia-en-los-mercados-financieros.jpeg":"_assets/ccf0d93f79c5b21810ad.jpg","/la-inteligencia-artificial-y-su-influencia-en-los-mercados-financieros.jpeg":"_assets/ccf0d93f79c5b21810ad.jpg","https://fernetjs.com/images/el-nuevo-rostro-de-la-moda-tecnologia-portatil.jpg":"_assets/ea68419436da0d4d7e95.jpg","/images/el-nuevo-rostro-de-la-moda-tecnologia-portatil.jpg":"_assets/ea68419436da0d4d7e95.jpg","/el-nuevo-rostro-de-la-moda-tecnologia-portatil.jpg":"_assets/ea68419436da0d4d7e95.jpg","https://fernetjs.com/images/streamers-y-el-exito-en-twitch-el-poder-de-las-transmisiones-en-vivo.jpg":"_assets/04b4558d8550317e16d5.jpg","/images/streamers-y-el-exito-en-twitch-el-poder-de-las-transmisiones-en-vivo.jpg":"_assets/04b4558d8550317e16d5.jpg","/streamers-y-el-exito-en-twitch-el-poder-de-las-transmisiones-en-vivo.jpg":"_assets/04b4558d8550317e16d5.jpg","https://fernetjs.com/images/imagenes-generadas-por-ia-una-nueva-era-para-el-contenido-visual-de-blogs.jpeg":"_assets/1abb8cd1b0d66bac9856.jpg","/images/imagenes-generadas-por-ia-una-nueva-era-para-el-contenido-visual-de-blogs.jpeg":"_assets/1abb8cd1b0d66bac9856.jpg","/imagenes-generadas-por-ia-una-nueva-era-para-el-contenido-visual-de-blogs.jpeg":"_assets/1abb8cd1b0d66bac9856.jpg","https://fernetjs.com/images/los-juegos-de-mesa-online-con-las-mejores-probabilidades-de-ganar.jpg":"_assets/f6e29e97af23850cc58f.jpg","/images/los-juegos-de-mesa-online-con-las-mejores-probabilidades-de-ganar.jpg":"_assets/f6e29e97af23850cc58f.jpg","/los-juegos-de-mesa-online-con-las-mejores-probabilidades-de-ganar.jpg":"_assets/f6e29e97af23850cc58f.jpg","https://fernetjs.com/images/explorando-la-generacion-de-imagenes-con-inteligencia-artificial.jpeg":"_assets/44e16355bc97ce67f437.jpg","/images/explorando-la-generacion-de-imagenes-con-inteligencia-artificial.jpeg":"_assets/44e16355bc97ce67f437.jpg","/explorando-la-generacion-de-imagenes-con-inteligencia-artificial.jpeg":"_assets/44e16355bc97ce67f437.jpg","https://fernetjs.com/images/los-secretos-detras-de-los-algoritmos-de-tiktok.jpeg":"_assets/b531cc50666978977c83.jpg","/images/los-secretos-detras-de-los-algoritmos-de-tiktok.jpeg":"_assets/b531cc50666978977c83.jpg","/los-secretos-detras-de-los-algoritmos-de-tiktok.jpeg":"_assets/b531cc50666978977c83.jpg","https://fernetjs.com/images/samsung-galaxy-s21-el-futuro-de-la-fotografia-movil.jpg":"_assets/abf566503f375b8b1ac9.jpg","/images/samsung-galaxy-s21-el-futuro-de-la-fotografia-movil.jpg":"_assets/abf566503f375b8b1ac9.jpg","/samsung-galaxy-s21-el-futuro-de-la-fotografia-movil.jpg":"_assets/abf566503f375b8b1ac9.jpg","https://fernetjs.com/images/los-drones-y-la-revolucion-de-la-entrega-a-domicilio.jpeg":"_assets/708a643d8f4417bfb7d3.jpg","/images/los-drones-y-la-revolucion-de-la-entrega-a-domicilio.jpeg":"_assets/708a643d8f4417bfb7d3.jpg","/los-drones-y-la-revolucion-de-la-entrega-a-domicilio.jpeg":"_assets/708a643d8f4417bfb7d3.jpg","https://fernetjs.com/images/smartphones-plegables-moda-pasajera-o-el-futuro-de-los-moviles.jpg":"_assets/903c01ddffb70ca00627.jpg","/images/smartphones-plegables-moda-pasajera-o-el-futuro-de-los-moviles.jpg":"_assets/903c01ddffb70ca00627.jpg","/smartphones-plegables-moda-pasajera-o-el-futuro-de-los-moviles.jpg":"_assets/903c01ddffb70ca00627.jpg","https://fernetjs.com/images/explorando-el-futuro-de-la-comunicacion-con-chatbots-inteligentes.jpeg":"_assets/dfa2cccde54cbfaeee31.jpg","/images/explorando-el-futuro-de-la-comunicacion-con-chatbots-inteligentes.jpeg":"_assets/dfa2cccde54cbfaeee31.jpg","/explorando-el-futuro-de-la-comunicacion-con-chatbots-inteligentes.jpeg":"_assets/dfa2cccde54cbfaeee31.jpg","https://fernetjs.com/images/impacto-de-la-inteligencia-artificial-en-la-mejora-de-la-experiencia-del-cliente.jpg":"_assets/8cb01c69f80b05892a77.jpg","/images/impacto-de-la-inteligencia-artificial-en-la-mejora-de-la-experiencia-del-cliente.jpg":"_assets/8cb01c69f80b05892a77.jpg","/impacto-de-la-inteligencia-artificial-en-la-mejora-de-la-experiencia-del-cliente.jpg":"_assets/8cb01c69f80b05892a77.jpg","https://fernetjs.com/images/la-realidad-virtual-y-su-papel-en-la-medicina-del-futuro.jpg":"_assets/95dde4a1598ecd14153f.jpg","/images/la-realidad-virtual-y-su-papel-en-la-medicina-del-futuro.jpg":"_assets/95dde4a1598ecd14153f.jpg","/la-realidad-virtual-y-su-papel-en-la-medicina-del-futuro.jpg":"_assets/95dde4a1598ecd14153f.jpg","https://fonts.gstatic.com/s/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2":"_assets/2318962e7930f55b4590.woff2","/s/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2":"_assets/2318962e7930f55b4590.woff2","/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2":"_assets/2318962e7930f55b4590.woff2","/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2":"_assets/2318962e7930f55b4590.woff2","/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2":"_assets/2318962e7930f55b4590.woff2","https://fernetjs.com/images/explorando-las-capacidades-y-beneficios-de-los-chatbots-de-inteligencia-artificial-avanzada.jpeg":"_assets/9a9cc2c782832a2a618d.jpg","/images/explorando-las-capacidades-y-beneficios-de-los-chatbots-de-inteligencia-artificial-avanzada.jpeg":"_assets/9a9cc2c782832a2a618d.jpg","/explorando-las-capacidades-y-beneficios-de-los-chatbots-de-inteligencia-artificial-avanzada.jpeg":"_assets/9a9cc2c782832a2a618d.jpg","https://fernetjs.com/images/explorando-el-cosmos-virtualmente-la-nueva-era-de-la-astronomia.jpeg":"_assets/02c752b4d812b902b58d.jpg","/images/explorando-el-cosmos-virtualmente-la-nueva-era-de-la-astronomia.jpeg":"_assets/02c752b4d812b902b58d.jpg","/explorando-el-cosmos-virtualmente-la-nueva-era-de-la-astronomia.jpeg":"_assets/02c752b4d812b902b58d.jpg","https://fernetjs.com/images/explorando-los-beneficios-de-los-chatbots-de-inteligencia-artificial-en-la-interaccion-online.jpg":"_assets/56c443d830270ab93ade.jpg","/images/explorando-los-beneficios-de-los-chatbots-de-inteligencia-artificial-en-la-interaccion-online.jpg":"_assets/56c443d830270ab93ade.jpg","/explorando-los-beneficios-de-los-chatbots-de-inteligencia-artificial-en-la-interaccion-online.jpg":"_assets/56c443d830270ab93ade.jpg","https://fernetjs.com/images/como-los-chatbots-transforman-el-servicio-al-cliente-en-diversas-industrias.jpeg":"_assets/8e2f31aeb0dd8c517436.jpg","/images/como-los-chatbots-transforman-el-servicio-al-cliente-en-diversas-industrias.jpeg":"_assets/8e2f31aeb0dd8c517436.jpg","/como-los-chatbots-transforman-el-servicio-al-cliente-en-diversas-industrias.jpeg":"_assets/8e2f31aeb0dd8c517436.jpg","https://fernetjs.com/images/guia-completa-para-optimizar-configuraciones-graficas-en-juegos-de-pc.jpeg":"_assets/b981fea903cae1919376.jpg","/images/guia-completa-para-optimizar-configuraciones-graficas-en-juegos-de-pc.jpeg":"_assets/b981fea903cae1919376.jpg","/guia-completa-para-optimizar-configuraciones-graficas-en-juegos-de-pc.jpeg":"_assets/b981fea903cae1919376.jpg","https://fernetjs.com/images/el-impacto-de-la-tecnologia-hibrida-en-la-industria-automovilistica.jpg":"_assets/95aa6c244244a454c469.jpg","/images/el-impacto-de-la-tecnologia-hibrida-en-la-industria-automovilistica.jpg":"_assets/95aa6c244244a454c469.jpg","/el-impacto-de-la-tecnologia-hibrida-en-la-industria-automovilistica.jpg":"_assets/95aa6c244244a454c469.jpg"};
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
