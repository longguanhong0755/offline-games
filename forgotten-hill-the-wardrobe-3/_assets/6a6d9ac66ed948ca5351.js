/* Shared window.mockLoc shim - one file, one place to tune.
 *
 * The JS patcher rewrote location.hostname/origin/href inside game bundles to
 * window.mockLoc.*, so the sitelock reads a mock host instead of ours. Pages
 * that never received the matching definition load patched JS against unpatched
 * HTML and die on the first line that touches it:
 *   TypeError: Cannot read properties of undefined (reading "origin")
 * That was 33 of 56 games in the "loads, draws nothing" pile.
 *
 * Loaded as <script src="/_assets/6a6d9ac66ed948ca5351.js"> from the top of each game head, so
 * there is one copy to fix rather than 868 inline ones. Self-guarding, so a page
 * that also loads portal-sdk.js is unaffected.
 *
 * A plain object, deliberately, not a Proxy over the real location. A Proxy has
 * to hand back the target's own value for a non-configurable, non-writable
 * property, and location's methods are exactly that:
 *
 *   bind them   -> TypeError: 'get' on proxy: property 'reload' is a read-only
 *                  and non-configurable data property on the proxy target
 *   don't bind  -> TypeError: Illegal invocation  (this is the proxy, not Location)
 *
 * There is no third option, and both kill the game as dead as the missing shim
 * did. A plain object carries no invariants, and assigning to its href is
 * inert - which is also the cleanest possible answer to the sitelock, on top of
 * the W3-SITELOCK-KILLER tag injected into each page.
 *
 * origin, href and the path parts stay TRUTHFUL: Construct-3 builds its worker
 * URL from them, and lying produced
 *   SecurityError: Failed to construct 'Worker': Script at
 *   'https://poki.com/games/<slug>/scripts/dispatchworker.js' cannot be accessed
 * Only hostname/host/ancestorOrigins lie, which is all the sitelock reads.
 */
(function () {
  if (window.mockLoc) return;
  var L = window.location;
  var fake = {
    href: L.href,
    origin: L.origin,
    protocol: L.protocol,
    host: 'poki.com',
    hostname: 'poki.com',
    port: L.port,
    pathname: L.pathname,
    search: L.search,
    hash: L.hash,
    ancestorOrigins: {
      length: 1, 0: 'https://poki.com',
      item: function (i) { return i === 0 ? 'https://poki.com' : null; },
      contains: function (s) { return String(s).indexOf('poki') !== -1; }
    },
    // Navigation through the mock is swallowed on purpose; a game that wants a
    // real reload can still reach window.location.
    assign: function () {},
    replace: function () {},
    reload: function () { try { L.reload(); } catch (e) {} },
    toString: function () { return L.href; }
  };
  try {
    Object.defineProperty(window, 'mockLoc', { value: fake, writable: true, configurable: true });
  } catch (e) {
    window.mockLoc = fake;
  }
})();
