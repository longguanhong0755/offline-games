
(() => {
  'use strict';
  const F = {"status":{"maintenance":false,"reason":null,"multiplayerMaintenance":false,"multiplayerMaintenanceReason":null,"announcements":{"mainMenu":"","singleplayer":"","multiplayer":""}},"schema":{"schema":"N4IgbgpgTgzglgewHYgFwEYAMn0BoQAO0A1jGqAC5QCGSMBCUF0A+gMYIA2nEbFLAcxqQyqUG2rMBjAJ5oQ8JAJ4FO1GdBD44AE3lVa9RsyjsuPPoOEQy2pCaTVOAST0Yc+AlDhsIadACsdmycAK46EDrOSADKFLQ6Tsh+qFShEPgUCALKENQARjxoAGZOMBmEoVBsABbU5QVFqVDpAL74TpwIAO4s5RQUcEosXojeFHJiIBJSsvKKuarqmtpuIJ09fRADQwIj3oxwE1ogQw5Orv6YAEye3r5oAMxBp0gh4ZHRcQlJSClpFSyOR4jRSpU45U8VVq9TyhX+LQg7XWOjAtF8Oj6MjeNSgyDgAC9JIgUFMZhBpFBJgpdio1BooCddPJqKj0ZEsTi8UhCcTkEz7NBHC43FhHncfClnsEwhEorF4khEl0-mgAZlsrlQSUyhUCNC6g14WrEciALbUAgsCLlJjkaaSClzVAgC0EJlrN3WmzQCgC84itDXDyEe4pAAsLyG7zlX0VyuSJvSGuBcKa4MhlWqhrTCLa+C9kvt5Mp1LdHvkhYedgDl1QwduoaLqEjMo+8u+St+ecBmpBxtQGb1Bth2ua+ZAOjgxWKPlCnAmLDNkTgoTNxcdpfkU5nc4XclW2+ns7Y88Xy6na-9QoubkeIdGD1Q97bsYVPxVPZTWoHQ6h2dHAcAWRHcTzPGQWDqKA3HETdnUnY892OQ8XVApCIKgvQaxvQNnxuCUn1bV4Y0+d8u0-JNe1TMc-yzGEjSaYD8DQ099z6BJ8gQAAPDdZipI9d1Y5DTjWFjwPYpVOJ47CoGFOt73FJsnwAdijN5ZVIzsE1VccqJ-dNdX-ejc0o5EYGIIYWCgCA1C4jl8nqHwWAJBAzXyOAUlgvjqXMoYKxdXykCsmzqDszEHPgNhnNc9y-BkuS3ACB8wzQVTX00+Nux1CE9P7RjESMnMxyYhQLKCrwfXsFgIC41QECnYYXLcjzeKdfiArK-zSssiryiqmq6oavYmti69ZNvNAksbR8UgADjUkiO0yijB0MkAgX0r86KKoDTXwQKrIQdykBqBB6pYahs1YEaWrJOD2u6lAUMew7jtO87Ltqa6Ypa+KJtQJLFJmq4Fo0paP0TVacu-PKtv1ACGJ7Myyr6UICAYJhWCWBkIs8h1vPmTrnoOmA0YxkwRnpaBcbGhLJswcMCKlbB0vB8jIdojbYcowrAPyicDukHgzQuuzouavGS3gwKusFrgIBF0KIHF0a-twpKXmB1BMFZuMIZ09V1r7EzdN5xHsvKZHLJqediAuqAzUYDklZV26vLanyiZEwnrdt+3HeszEXZuuLXlrRLMAANiZ-wkt1sjtLBNauZNw34eM4q9pAJAEAunRRHdrcXVZYprND5kXRzvPbDDnC6wATkbmPUFmnXiLBvX2YNgqjeo381vTnb+aRZFqFqDzIGXewC5ATghjthXqDgTh7Qr2f5+qi1l9p-7rmj-GPfkfIKSGP5GW0DgkAAFRkIhKzgGA2BOKdqEdpUYAAJQgbpLrvfbeGsn6KGlt8AWW4CwJKrsbCrzWGAzgEDMBQJrmcOuop8BSwesfAQp8VinEvjfO+LoQ4sDgTXF+b985fx-tBfw-82CAItkifA1kx41GtOoCBMD5AsNqOwiCAQd64UbBg6kWCcHnzwcgAhKRJzqGfnAV+yBKHf1-rQhQADtiMORNjFggQlxDFCMwGea8dF6LNAYoxgj5LoPuqIk+SAz5MnwbfGR2NBjLnkYo9+VDVEYDoQw4BTDCBqF8BAlg+RQjLyGsYtYSxQkBHCZEzg0SrFuEZgfIuIAxEONwT4KRLij5JJScxBRFDP4qJoX49R9DNGBORDwthPBIDwIEVMNeDSWBNJspwtWdYXgiKPvYxxF98mENnhAZpniyk+MqXgapAShzIggCddknSJndOuK00Aa9ll1DeMrLp8DNmpLQOGOZAyXTZOGZI6+BSXSHKmUo8p1C0HzNqYs0By8WnYCQVwl0cCEGIJDsgwU41cL7wuSAPIMADw3OkfIYhpDHneIqX-N5QCPkgA6YkCCwY-lYryLwnFLA8W9LcMpGxBMXTQthXk25YycXIuUS8p4-j3m6m0fSXRkEEBVHxaYnlfKyVoFmpSw+1L6i0ucWMtxcAPElK8cy3xilyg1IxRyzwITlaQIiVE3YMT5BxO1Yg3VyT9UnNQPXMVmSaVONGTI01xSEKKuecqtl6qcr1MJY09Z8DAj4o6Yc3RAjhXuGtfBW1Iz6UyIeQq6ZqLWXoq0fgXZqyg1JXxam-ZazmkIItdcClGSI2SrtdG+QsbnXxpZc+d1yaslFN0YggwdBybQANZchtWAWDNqMJjWAFrHjnNsfISNcK7mugfk-ONTyZlotVQsjVIA6iQEbXbehMgYDxAhPi5dyssBrqpJusoA7hHDolTC0t8KXTmMfky11lSVUaI9SA4JY892IJgFwS6BBaA2RgCwSyNpfT8q1Y2voX6oA-r+BCADQUgN2lDY8CFZ6oUlqjVe+teqlBkNKTOhNNak11M+eA54PzgX4oBaRoFP1oGhvQEOqlKI0T7KwmOsZiKvk4ZdbOyataiMEtYXwxtmAA3eqE1gETdHT2MdZMxjEl7x2MunSi6tLx53ss9ZqjhCTTpVHba+-hgr+10cUpC2T7JWN0ow7K+Vla8Oqb45io1gLElYYEPp5zSUTVFPNXR9JZm2QsYU2Mx1vm7Mqd8Wpp9dbA2+pJVs72LpYu5uOXR-pKHzNBfQ+Oit5D7ORcc4urNoSg2qUzSs7NpWQ21zBXWa4oqi0PUy-J7LYzcu4Yi5UqLaq627t0eY3O66j3braWsPr6ABvsEPVukF4cnimYy4FlrbGZE3qneFpVXXCuaYE0Sjh4ZEFVx-twfT2L9uHdzsd7doaDvhqa0tyIwWHU+ew3enjANtsvvWVSVzZrhimqAdstY32IKhf+0kv0iH0syYe5Z6Vz23NcarQVwjmKAWBDtuR0b8h0cBExzR2bqD-DIcY5hJ7CKaMkM429-DWBPtBLO7i7AonBPEuDJJmrdMMCFshWT1rMilMbfvaKNu6nn1BJ0dccMRmPNcqlzLi16AGu89Ufzw19J3Ghzy51kX9POVvpYFR37KTscumc0bsH7nFdWsa9SPnK3CmI5p9WunqPF3Je6Rm03u2fW5ozaG4Md27eq4d-c31zvfGu7F3W4rBy4sSfK3skr8fmcB5tyrmhauw+TOU5t3XbudvjfcvAobM2d3UBXegYvU2N1l8Q-5lD9urPjrWxH2Zovov8YGl0ayLBuinR4AB0J5Zvfd6dn3gfytJRLktAOnnjeQ-N7Ga33Pwurh6+YWJ4l952C0BznQFgyBOCTCB9wrfHCd8SAccgf9R-aWgq548dPC-M+h4nbe1f72o+d7R184T+OJZ9N0dsAADYpCdas3BrgGNxVXgYBf1yciFKckVP9adusAkSpGdDdmdvdMD7wOcUEICgxpMYChg4DVQs9ZFYVtc89Y4+MSpnN91jdzVvcGDMA7ZLdwCucpcg95BSD4CKCOC29RQ0DakMCxMqsWdeEJCA9ocSC6B+C392tuNUC6Cs5Y8c1ul0BjlR8Ktk9c0tDqsCDH825IU+DyDFDw8UCXcRCgESpQgkAug2BiBnZwFWEJ4FZlkKB9N7DHDnCg5XDx51kp4vCB1lcUMzDy54d74P8hd3sXxCNgJWhWggA"},"register":{"authKey":"offline-auth-local-only-0000000000000000"},"login":{"sessionKey":"offline-session-local-only","serverTime":0,"playerStats":{"singleplayer":0,"multiplayer":0}},"profile":{"profile":"KYRgJgnMYGYQTAZgAwEMxgCwFYAcIB2ANkxAiMlXgCNgZgIwD5dFEwBvAIjAEtUAtgHsAdmADOXAFzIANF2AAPAA7AATr2AiAxsGlyu4gC6ojAfQGpFZsKgCeZtcFTaAFtGkh5x02YDmgsDiZj5qRh4y3ibmRkImADYhwNqiEmbK8fYRBj7mAF5CAtSawQDWvPHx2VG+1ACuFXwifsEZLtVcdSLxQtql0GYurpoAbsACWkaSUgDaALryXT19A6pqpdPz8lqo1FVg6eob0ltcbXbqIoHSXACyvBriQpmIJEQQXPIwTslCvCLBPjiFJqA4Bf4RGCoeLiYBfH4pf7BIwAd14RnCan8qAhYGkUJhcK432AvyRZihumoQiEpWxuPx0Nh8NJiIBjmgfHM4JEkKZRJJZPZdiEdSMdVo9N5eKkBOZXD8PWo0McqBEpU88ni-36B3GOPi0hEdUqWp1AxSIhgDwEZiMvAmRpN8QAvkA"},"savegames":{"experience":0,"savegames":[]}};
  const originalFetch = window.fetch.bind(window);
  const jsonResponse = (value, status = 200) => Promise.resolve(new Response(JSON.stringify(value), {
    status,
    headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-store'}
  }));
  const emptyResponse = () => Promise.resolve(new Response('', {status: 200}));
  const getStored = () => {
    try { return JSON.parse(localStorage.getItem('yorg3-offline-saves') || '{}'); }
    catch (_) { return {}; }
  };
  const setStored = (value) => {
    try { localStorage.setItem('yorg3-offline-saves', JSON.stringify(value)); } catch (_) {}
  };
  window.fetch = function(input, init) {
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    try {
      if (url.startsWith('https://status.yorg3.io')) {
        return jsonResponse(F.status);
      }
      if (url.startsWith('https://api.yorg3.io/v1/')) {
        const path = new URL(url).pathname.replace(/^\/v1/, '');
        if (path === '/noauth/schema') return jsonResponse(F.schema);
        if (path === '/noauth/register') return jsonResponse(F.register);
        if (path === '/noauth/login') {
          const response = Object.assign({}, F.login);
          response.serverTime = Date.now();
          return jsonResponse(response);
        }
        if (path === '/user/profile') return jsonResponse(F.profile);
        if (path === '/user/savegames') {
          // The game keeps the authoritative offline save list in IndexedDB.
          return jsonResponse({experience: 0, savegames: []});
        }
        if (path === '/savegame/update') {
          let data = {};
          try { data = JSON.parse((init && init.body) || '{}'); } catch (_) {}
          const meta = data.meta || {};
          const key = meta.syncKey || ('offline-' + Date.now().toString(36));
          meta.syncKey = key;
          const stored = getStored();
          stored[key] = {meta, savegame: data.savegame, last_update: Date.now()};
          setStored(stored);
          return jsonResponse({key});
        }
        if (path.startsWith('/user/savegame/')) {
          const key = decodeURIComponent(path.slice('/user/savegame/'.length));
          const entry = getStored()[key];
          return jsonResponse(entry ? {savegame: entry.savegame} : {savegame: null});
        }
        if (path.startsWith('/savegame/delete/') || path === '/savegame/gameover') {
          const key = path.startsWith('/savegame/delete/') ? decodeURIComponent(path.slice('/savegame/delete/'.length)) : ((JSON.parse((init && init.body) || '{}') || {}).key);
          if (key) { const stored = getStored(); delete stored[key]; setStored(stored); }
          return jsonResponse({success: true});
        }
        if (path.includes('leaderboard')) return jsonResponse({entries: []});
        if (path === '/iap/items') return jsonResponse([]);
        if (path.includes('/mp/lobbyservers/')) return jsonResponse({servers: []});
        return jsonResponse({success: true});
      }
      if (/sentry\.io|sentry-cdn\.com|adinplay\.com|xsolla\.com|googletagmanager\.com|google-analytics\.com|vntsm\.com|atmtd\.com|affec\.tv|cdn\.yorg3\.io/.test(url)) {
        return emptyResponse();
      }
    } catch (err) {
      console.warn('[offline] Request shim error:', err);
    }
    return originalFetch(input, init);
  };
  window.Sentry = window.Sentry || {init(){}, configureScope(){}, captureException(){}, captureMessage(){}};
  window.aipDisplayTag = window.aipDisplayTag || {display(){}, destroy(){}, refresh(){}};
  window.XPayStationWidget = window.XPayStationWidget || null;
})();
