(() => {
  const originalFetch = window.fetch.bind(window);
  window.fetch = function(input, init) {
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    if (/ads\.txt/i.test(url)) return Promise.resolve(new Response('', {status: 200}));
    return originalFetch(input, init);
  };
  window.gtag = window.gtag || function() {};
  window.dataLayer = window.dataLayer || [];
})();
