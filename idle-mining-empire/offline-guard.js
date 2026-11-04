(() => {
  'use strict';
  const localOnly = (value) => {
    try {
      const url = new URL(value, location.href);
      return url.protocol === 'data:' || url.protocol === 'blob:' ||
        (url.hostname === location.hostname && url.port === location.port);
    } catch (_) { return false; }
  };
  const nativeFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const target = typeof input === 'string' ? input : (input && input.url) || '';
    if (!localOnly(target)) return Promise.reject(new TypeError('Offline mode'));
    return nativeFetch(input, init);
  };
  const nativeXhrOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    if (!localOnly(url)) throw new DOMException('Offline mode', 'NetworkError');
    return nativeXhrOpen.call(this, method, url, ...rest);
  };
  const nativeBeacon = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
  if (nativeBeacon) navigator.sendBeacon = (url, data) => localOnly(url) ? nativeBeacon(url, data) : false;
  const NativeWebSocket = window.WebSocket;
  window.WebSocket = function (url, protocols) {
    if (!localOnly(url)) throw new DOMException('Offline mode', 'NetworkError');
    return protocols === undefined ? new NativeWebSocket(url) : new NativeWebSocket(url, protocols);
  };
  window.WebSocket.prototype = NativeWebSocket.prototype;
  const nativeWindowOpen = window.open.bind(window);
  window.open = (url, ...args) => localOnly(url) ? nativeWindowOpen(url, ...args) : null;
})();
