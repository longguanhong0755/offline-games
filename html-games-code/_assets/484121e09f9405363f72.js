/* HTML Games Code — lively bits: floating game items, scroll reveals, card
   tilt, mobile menu, live demo modal, inline demos and order confetti. */
(() => {
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // floating game items in the sky
  const fl = $(".floaties");
  if (fl && !calm) {
    const items = ["🍓", "🧩", "🐍", "🔪", "🍋", "💎", "⭐", "🪙", "🔴", "🎈", "🍩", "🎮", "❓", "🏗️"];
    for (let i = 0; i < 16; i++) {
      const s = document.createElement("span");
      s.textContent = items[i % items.length];
      s.style.left = (i * 6.3 + Math.random() * 4) % 100 + "%";
      s.style.animationDuration = 16 + Math.random() * 18 + "s";
      s.style.animationDelay = -Math.random() * 30 + "s";
      s.style.fontSize = 18 + Math.random() * 22 + "px";
      fl.appendChild(s);
    }
  }

  // scroll reveals
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" }) : null;
  $$(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + "ms"; io ? io.observe(el) : el.classList.add("in"); });

  // 3D tilt on game cards (pointer devices only)
  if (!calm && matchMedia("(hover: hover)").matches) {
    $$(".gcard").forEach(c => {
      c.addEventListener("pointermove", e => {
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        c.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
      });
      c.addEventListener("pointerleave", () => { c.style.transform = ""; });
    });
  }

  // mobile menu
  const burger = $(".burger");
  if (burger) burger.addEventListener("click", () => { const o = document.body.classList.toggle("nav-open"); burger.setAttribute("aria-expanded", o); });
  $$(".nav-links a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("nav-open")));

  // confetti burst
  function confetti(x, y, n = 36) {
    if (calm) return;
    const cols = ["#ff5fb1", "#ffcf33", "#36d35a", "#3fa6ff", "#9b5cff", "#ff9a2e"];
    for (let i = 0; i < n; i++) {
      const b = document.createElement("i"); b.className = "confetti-bit";
      b.style.background = cols[i % cols.length]; b.style.left = x + "px"; b.style.top = y + "px";
      document.body.appendChild(b);
      const a = Math.random() * Math.PI * 2, v = 120 + Math.random() * 220;
      b.animate([{ transform: "translate(0,0) rotate(0)", opacity: 1 }, { transform: `translate(${Math.cos(a) * v}px, ${Math.sin(a) * v - 160}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }],
        { duration: 900 + Math.random() * 500, easing: "cubic-bezier(.2,.8,.4,1)" }).onfinish = () => b.remove();
    }
  }
  document.addEventListener("click", e => {
    const o = e.target.closest("[data-order]");
    if (o) { const r = o.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top + r.height / 2); track("order_click", o.dataset.order); }
  });

  // analytics events (GA4, if configured)
  function track(name, label) { if (window.gtag) gtag("event", name, { item: label }); }

  // live demo modal
  const G = window.SITE_GAMES || {}, P = window.PRICES || {};
  const modal = $("#demo");
  function openDemo(slug) {
    const g = G[slug]; if (!g || !modal) return;
    modal.querySelector("iframe").src = `/play/${slug}/`;
    modal.querySelector(".demo-title").textContent = g.name;
    modal.querySelector(".demo-tag").textContent = g.tag;
    modal.querySelector(".demo-more").href = `/games/${slug}/`;
    modal.querySelector(".demo-buy").innerHTML =
      `<a class="btn btn-green btn-buy" href="${g.buy}" data-order="${slug}:buy" rel="nofollow"><span class="b-ico">🎁</span><span><small>Source code + Android APK</small><b>Get it for $${P.price}</b></span></a>` +
      `<a class="btn btn-ghost btn-buy" href="${g.rebuild}" data-order="${slug}:rebuild" rel="nofollow"><span class="b-ico">🔁</span><span><small>After ${P.freeDays} free days</small><b>APK build · $${P.rebuild}</b></span></a>`;
    modal.hidden = false; document.body.style.overflow = "hidden"; track("demo_open", slug);
    modal.querySelector(".demo-x").focus();
  }
  function closeDemo() { if (!modal || modal.hidden) return; modal.hidden = true; modal.querySelector("iframe").src = "about:blank"; document.body.style.overflow = ""; }
  document.addEventListener("click", e => {
    const d = e.target.closest("[data-demo]"); if (d) { e.preventDefault(); openDemo(d.dataset.demo); }
    if (e.target.closest("[data-close]")) closeDemo();
    // inline demo on product pages
    const inl = e.target.closest("[data-inline]");
    if (inl) {
      const box = inl.closest(".demo-inline");
      const f = document.createElement("iframe");
      f.title = "Live game demo"; f.allow = "autoplay; fullscreen"; f.src = `/play/${inl.dataset.inline}/`;
      box.querySelector("img").replaceWith(f); inl.remove(); track("demo_open", inl.dataset.inline); box.style.animation = "none";
    }
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeDemo(); });

  // free games: copy the code block
  document.addEventListener("click", async e => {
    const b = e.target.closest("[data-copy]"); if (!b) return;
    const el = $(b.dataset.copy); if (!el) return;
    try { await navigator.clipboard.writeText(el.textContent); }
    catch { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); document.execCommand("copy"); }
    const t = b.textContent; b.textContent = "✓ Copied!"; setTimeout(() => { b.textContent = t; }, 1600);
  });

  // free games hub: category filter chips
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-filter]"); if (!b) return;
    document.querySelectorAll("[data-filter]").forEach(x => x.classList.toggle("on", x === b));
    document.querySelectorAll(".fg-card").forEach(c => { c.hidden = b.dataset.filter !== "all" && c.dataset.cat !== b.dataset.filter; });
  });

  // links ending in #play (e.g. from htmltoapk.com's games strip) open the page with the demo running
  if (location.hash === "#play") {
    const inl = $("[data-inline]");
    if (inl) { inl.click(); const box = $(".demo-inline"); if (box) box.scrollIntoView({ block: "center" }); }
  }
})();
