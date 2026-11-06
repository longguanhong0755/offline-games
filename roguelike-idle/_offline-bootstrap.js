(() => {
  "use strict";
  const RUNTIME_MAP = {"https://bielwenass.com/assets/index-9pP9iiPV.css":"_assets/6e3725c7bbd22382887b.css","/assets/index-9pP9iiPV.css":"_assets/6e3725c7bbd22382887b.css","/index-9pP9iiPV.css":"_assets/6e3725c7bbd22382887b.css","https://bielwenass.com/assets/index-CYVy2uCL.js":"_assets/9222856e2dabe6ca9c2d.js","/assets/index-CYVy2uCL.js":"_assets/9222856e2dabe6ca9c2d.js","/index-CYVy2uCL.js":"_assets/9222856e2dabe6ca9c2d.js","https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital@0;1&family=DotGothic16&family=Faculty+Glyphic&family=Geist+Mono&family=IM+Fell+English:ital@0;1&family=Jacquard+12&family=Kelly+Slab&family=Manufacturing+Consent&family=Metamorphous&family=Syne+Mono&family=Texturina:ital,opsz@0,12..72;1,12..72&family=UnifrakturCook:wght@700&display=swap":"_assets/28af384bbc29a14d1b91.css","/css2":"_assets/28af384bbc29a14d1b91.css","/css2?family=Cormorant+Garamond:ital@0;1&family=DotGothic16&family=Faculty+Glyphic&family=Geist+Mono&family=IM+Fell+English:ital@0;1&family=Jacquard+12&family=Kelly+Slab&family=Manufacturing+Consent&family=Metamorphous&family=Syne+Mono&family=Texturina:ital,opsz@0,12..72;1,12..72&family=UnifrakturCook:wght@700&display=swap":"_assets/28af384bbc29a14d1b91.css","https://fonts.googleapis.com/css2":"_assets/28af384bbc29a14d1b91.css","https://bielwenass.com/assets/Palimpsestus-COAMnb-Z.js":"_assets/5d7988fb9bed5b5679c5.js","/assets/Palimpsestus-COAMnb-Z.js":"_assets/5d7988fb9bed5b5679c5.js","/Palimpsestus-COAMnb-Z.js":"_assets/5d7988fb9bed5b5679c5.js","https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KK5U5Ck.woff2":"_assets/3f98383b122fe015a485.woff2","/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KK5U5Ck.woff2":"_assets/3f98383b122fe015a485.woff2","/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KK5U5Ck.woff2":"_assets/3f98383b122fe015a485.woff2","/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KK5U5Ck.woff2":"_assets/3f98383b122fe015a485.woff2","/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KK5U5Ck.woff2":"_assets/3f98383b122fe015a485.woff2","https://fonts.gstatic.com/s/jacquard12/v8/vm8ydRLuXETEweL79J4rGf3OWHs.woff2":"_assets/41e240a6612fc4197946.woff2","/s/jacquard12/v8/vm8ydRLuXETEweL79J4rGf3OWHs.woff2":"_assets/41e240a6612fc4197946.woff2","/jacquard12/v8/vm8ydRLuXETEweL79J4rGf3OWHs.woff2":"_assets/41e240a6612fc4197946.woff2","/v8/vm8ydRLuXETEweL79J4rGf3OWHs.woff2":"_assets/41e240a6612fc4197946.woff2","/vm8ydRLuXETEweL79J4rGf3OWHs.woff2":"_assets/41e240a6612fc4197946.woff2","https://fonts.gstatic.com/s/texturina/v32/c4mx1nxpEtL3pXiAulRTkY-JLD8EXlb9NkJhGQRocw.woff2":"_assets/883c31dadbc1b29c3fdf.woff2","/s/texturina/v32/c4mx1nxpEtL3pXiAulRTkY-JLD8EXlb9NkJhGQRocw.woff2":"_assets/883c31dadbc1b29c3fdf.woff2","/texturina/v32/c4mx1nxpEtL3pXiAulRTkY-JLD8EXlb9NkJhGQRocw.woff2":"_assets/883c31dadbc1b29c3fdf.woff2","/v32/c4mx1nxpEtL3pXiAulRTkY-JLD8EXlb9NkJhGQRocw.woff2":"_assets/883c31dadbc1b29c3fdf.woff2","/c4mx1nxpEtL3pXiAulRTkY-JLD8EXlb9NkJhGQRocw.woff2":"_assets/883c31dadbc1b29c3fdf.woff2","https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KK7uxQxXAuk.woff2":"_assets/25607f13979465ac503f.woff2","/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KK7uxQxXAuk.woff2":"_assets/25607f13979465ac503f.woff2","/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KK7uxQxXAuk.woff2":"_assets/25607f13979465ac503f.woff2","/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KK7uxQxXAuk.woff2":"_assets/25607f13979465ac503f.woff2","/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KK7uxQxXAuk.woff2":"_assets/25607f13979465ac503f.woff2","https://fonts.gstatic.com/s/unifrakturcook/v25/IurA6Yli8YOdcoky-0PTTdkm56n05Xwy1oM.woff2":"_assets/3304757748716ececd1b.woff2","/s/unifrakturcook/v25/IurA6Yli8YOdcoky-0PTTdkm56n05Xwy1oM.woff2":"_assets/3304757748716ececd1b.woff2","/unifrakturcook/v25/IurA6Yli8YOdcoky-0PTTdkm56n05Xwy1oM.woff2":"_assets/3304757748716ececd1b.woff2","/v25/IurA6Yli8YOdcoky-0PTTdkm56n05Xwy1oM.woff2":"_assets/3304757748716ececd1b.woff2","/IurA6Yli8YOdcoky-0PTTdkm56n05Xwy1oM.woff2":"_assets/3304757748716ececd1b.woff2","https://fonts.gstatic.com/s/imfellenglish/v14/Ktk1ALSLW8zDe0rthJysWrnLsAzHEKOY.woff2":"_assets/248300df1647bec49155.woff2","/s/imfellenglish/v14/Ktk1ALSLW8zDe0rthJysWrnLsAzHEKOY.woff2":"_assets/248300df1647bec49155.woff2","/imfellenglish/v14/Ktk1ALSLW8zDe0rthJysWrnLsAzHEKOY.woff2":"_assets/248300df1647bec49155.woff2","/v14/Ktk1ALSLW8zDe0rthJysWrnLsAzHEKOY.woff2":"_assets/248300df1647bec49155.woff2","/Ktk1ALSLW8zDe0rthJysWrnLsAzHEKOY.woff2":"_assets/248300df1647bec49155.woff2","https://fonts.gstatic.com/s/manufacturingconsent/v1/N0bL2TVONuFkPkuHfiECSLCwuZS-D-IsakiUQK4u.woff2":"_assets/4dad22691c490f6983ae.woff2","/s/manufacturingconsent/v1/N0bL2TVONuFkPkuHfiECSLCwuZS-D-IsakiUQK4u.woff2":"_assets/4dad22691c490f6983ae.woff2","/manufacturingconsent/v1/N0bL2TVONuFkPkuHfiECSLCwuZS-D-IsakiUQK4u.woff2":"_assets/4dad22691c490f6983ae.woff2","/v1/N0bL2TVONuFkPkuHfiECSLCwuZS-D-IsakiUQK4u.woff2":"_assets/4dad22691c490f6983ae.woff2","/N0bL2TVONuFkPkuHfiECSLCwuZS-D-IsakiUQK4u.woff2":"_assets/4dad22691c490f6983ae.woff2","https://fonts.gstatic.com/s/metamorphous/v22/Wnz8HA03aAXcC39ZEX5y133EOyqs.woff2":"_assets/8254a00416dd6f08b633.woff2","/s/metamorphous/v22/Wnz8HA03aAXcC39ZEX5y133EOyqs.woff2":"_assets/8254a00416dd6f08b633.woff2","/metamorphous/v22/Wnz8HA03aAXcC39ZEX5y133EOyqs.woff2":"_assets/8254a00416dd6f08b633.woff2","/v22/Wnz8HA03aAXcC39ZEX5y133EOyqs.woff2":"_assets/8254a00416dd6f08b633.woff2","/Wnz8HA03aAXcC39ZEX5y133EOyqs.woff2":"_assets/8254a00416dd6f08b633.woff2","https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_v86KnTOig.woff2":"_assets/8048ac209bec741e1c29.woff2","/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_v86KnTOig.woff2":"_assets/8048ac209bec741e1c29.woff2","/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_v86KnTOig.woff2":"_assets/8048ac209bec741e1c29.woff2","/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_v86KnTOig.woff2":"_assets/8048ac209bec741e1c29.woff2","/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_v86KnTOig.woff2":"_assets/8048ac209bec741e1c29.woff2","https://fonts.gstatic.com/s/synemono/v16/K2FzfZNHj_FHBmRbFvHDJaql.woff2":"_assets/30ac9fd8d8768c6dc75d.woff2","/s/synemono/v16/K2FzfZNHj_FHBmRbFvHDJaql.woff2":"_assets/30ac9fd8d8768c6dc75d.woff2","/synemono/v16/K2FzfZNHj_FHBmRbFvHDJaql.woff2":"_assets/30ac9fd8d8768c6dc75d.woff2","/v16/K2FzfZNHj_FHBmRbFvHDJaql.woff2":"_assets/30ac9fd8d8768c6dc75d.woff2","/K2FzfZNHj_FHBmRbFvHDJaql.woff2":"_assets/30ac9fd8d8768c6dc75d.woff2","https://fonts.gstatic.com/s/dotgothic16/v22/v6-QGYjBJFKgyw5nSoDAGE7Oi25aLSizIM9pT7D_QAno5281PZBz6w.119.woff2":"_assets/44a422f98add70411279.woff2","/s/dotgothic16/v22/v6-QGYjBJFKgyw5nSoDAGE7Oi25aLSizIM9pT7D_QAno5281PZBz6w.119.woff2":"_assets/44a422f98add70411279.woff2","/dotgothic16/v22/v6-QGYjBJFKgyw5nSoDAGE7Oi25aLSizIM9pT7D_QAno5281PZBz6w.119.woff2":"_assets/44a422f98add70411279.woff2","/v22/v6-QGYjBJFKgyw5nSoDAGE7Oi25aLSizIM9pT7D_QAno5281PZBz6w.119.woff2":"_assets/44a422f98add70411279.woff2","/v6-QGYjBJFKgyw5nSoDAGE7Oi25aLSizIM9pT7D_QAno5281PZBz6w.119.woff2":"_assets/44a422f98add70411279.woff2","https://fonts.gstatic.com/s/dotgothic16/v22/v6-QGYjBJFKgyw5nSoDAGH7M6X8.woff2":"_assets/d29abf817463fdba7e9e.woff2","/s/dotgothic16/v22/v6-QGYjBJFKgyw5nSoDAGH7M6X8.woff2":"_assets/d29abf817463fdba7e9e.woff2","/dotgothic16/v22/v6-QGYjBJFKgyw5nSoDAGH7M6X8.woff2":"_assets/d29abf817463fdba7e9e.woff2","/v22/v6-QGYjBJFKgyw5nSoDAGH7M6X8.woff2":"_assets/d29abf817463fdba7e9e.woff2","/v6-QGYjBJFKgyw5nSoDAGH7M6X8.woff2":"_assets/d29abf817463fdba7e9e.woff2","https://fonts.gstatic.com/s/kellyslab/v18/-W_7XJX0Rz3cxUnJC5t6fkQLfg.woff2":"_assets/c3d41ebc98f4986ef2bc.woff2","/s/kellyslab/v18/-W_7XJX0Rz3cxUnJC5t6fkQLfg.woff2":"_assets/c3d41ebc98f4986ef2bc.woff2","/kellyslab/v18/-W_7XJX0Rz3cxUnJC5t6fkQLfg.woff2":"_assets/c3d41ebc98f4986ef2bc.woff2","/v18/-W_7XJX0Rz3cxUnJC5t6fkQLfg.woff2":"_assets/c3d41ebc98f4986ef2bc.woff2","/-W_7XJX0Rz3cxUnJC5t6fkQLfg.woff2":"_assets/c3d41ebc98f4986ef2bc.woff2","https://fonts.gstatic.com/s/facultyglyphic/v4/RrQIbot2-iBvI2mYSyKIrcgoBuQ4HO2E.woff2":"_assets/021b4252e5fb680143a6.woff2","/s/facultyglyphic/v4/RrQIbot2-iBvI2mYSyKIrcgoBuQ4HO2E.woff2":"_assets/021b4252e5fb680143a6.woff2","/facultyglyphic/v4/RrQIbot2-iBvI2mYSyKIrcgoBuQ4HO2E.woff2":"_assets/021b4252e5fb680143a6.woff2","/v4/RrQIbot2-iBvI2mYSyKIrcgoBuQ4HO2E.woff2":"_assets/021b4252e5fb680143a6.woff2","/RrQIbot2-iBvI2mYSyKIrcgoBuQ4HO2E.woff2":"_assets/021b4252e5fb680143a6.woff2"};
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
