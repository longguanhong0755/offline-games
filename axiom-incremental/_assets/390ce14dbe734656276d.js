// offline.js — Offline production modal.

import { ENGINE } from '/_assets/c24c79b6b7c44a0481ad.js';
import { fmt } from '/_assets/6448d0556ec80157a1ac.js';

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls)                e.className   = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function fmtElapsed(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
  if (m > 0) return `${m}m ${String(s).padStart(2, '0')}s`;
  return `${s}s`;
}

function fmtTau(n) {
  if (n < 1e3)  return n.toFixed(2);
  if (n < 1e6)  return (n / 1e3).toFixed(2)  + 'K';
  if (n < 1e9)  return (n / 1e6).toFixed(2)  + 'M';
  if (n < 1e12) return (n / 1e9).toFixed(2)  + 'B';
  return n.toExponential(2);
}

// ── Row builders ──────────────────────────────────────────────────────────────

function mathRow(sym, val, unit, delay, extra) {
  const row = el('div', 'offline-row');
  row.style.animationDelay = delay + 'ms';
  row.appendChild(el('span', 'offline-sym', sym));
  row.appendChild(el('span', 'offline-eq', '='));
  row.appendChild(el('span', 'offline-val' + (extra || ''), val));
  row.appendChild(el('span', 'offline-unit', unit));
  return row;
}

function sectionDivider(delay) {
  const d = el('div', 'offline-divider offline-fade');
  d.style.animationDelay = delay + 'ms';
  return d;
}

// ── Main export ───────────────────────────────────────────────────────────────

export function showOfflineModal(elapsed, gainN, production, gainTau, sigmaGains) {
  const overlay = el('div', 'offline-overlay');
  const card    = el('div', 'offline-card');
  const capped  = elapsed >= ENGINE.OFFLINE_CAP_SECONDS;

  // ── Icon ──────────────────────────────────────────────────────────────────
  const iconWrap = el('div', 'offline-icon-wrap');
  iconWrap.innerHTML = `<svg class="offline-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" stroke="#161616" stroke-width="1.2"/>
    <circle cx="32" cy="32" r="18" stroke="#111" stroke-width="1"/>
    <g class="offline-poly-wrap-hex">
      <polygon points="54,32 43,51.1 21,51.1 10,32 21,12.9 43,12.9"
        stroke="#2a2a40" stroke-width="1.1" fill="none" class="offline-poly-hex"/>
    </g>
    <g class="offline-poly-wrap-sq">
      <polygon points="44.73,19.27 44.73,44.73 19.27,44.73 19.27,19.27"
        stroke="#252535" stroke-width="0.9" fill="none" class="offline-poly-sq"/>
    </g>
    <g class="offline-poly-wrap-tri">
      <polygon points="32,18 44.12,39 19.88,39"
        stroke="#21212e" stroke-width="0.8" fill="none" class="offline-poly-tri"/>
    </g>
    <g transform="rotate(-90 32 32)">
      <circle cx="32" cy="32" r="28" stroke="#2e2e2e" stroke-width="1.8"
        stroke-dasharray="176 200" stroke-dashoffset="176"
        class="offline-icon-arc-outer" stroke-linecap="round"/>
      <circle cx="32" cy="32" r="18" stroke="#222" stroke-width="1.2"
        stroke-dasharray="113 200" stroke-dashoffset="113"
        class="offline-icon-arc-inner" stroke-linecap="round"/>
    </g>
    <line x1="32" y1="4"  x2="32" y2="9"  stroke="#1c1c1c" stroke-width="1.2"/>
    <line x1="60" y1="32" x2="55" y2="32" stroke="#1c1c1c" stroke-width="1.2"/>
    <line x1="32" y1="60" x2="32" y2="55" stroke="#1c1c1c" stroke-width="1.2"/>
    <line x1="4"  y1="32" x2="9"  y2="32" stroke="#1c1c1c" stroke-width="1.2"/>
    <circle cx="32" cy="4"  r="3"   fill="#252525" stroke="none"/>
    <circle cx="32" cy="14" r="1.8" fill="#1c1c1c" stroke="none"/>
    <circle cx="32" cy="32" r="2.5" fill="#202020" stroke="none"/>
  </svg>`;
  card.appendChild(iconWrap);

  // ── Header ────────────────────────────────────────────────────────────────
  card.appendChild(el('div', 'offline-header', 'OFFLINE PRODUCTION'));
  card.appendChild(el('div', 'offline-divider'));

  let delay = 0;

  // ── Time + N formula ──────────────────────────────────────────────────────
  const math = el('div', 'offline-math');

  math.appendChild(mathRow('Δt', fmtElapsed(elapsed), capped ? 'capped' : '', delay));
  delay += 100;

  math.appendChild(mathRow('P', fmt(production), 'N/s', delay));
  delay += 100;

  math.appendChild(el('div', 'offline-math-gap'));

  math.appendChild(mathRow('ΔN', 'P  ×  Δt', '', delay));
  delay += 100;
  math.appendChild(mathRow('', fmt(gainN), 'N', delay, ' offline-val-result'));
  delay += 120;

  // ── τ row ─────────────────────────────────────────────────────────────────
  if (gainTau > 0) {
    math.appendChild(el('div', 'offline-math-gap'));
    math.appendChild(mathRow('Δτ', fmtTau(gainTau), 'τ', delay));
    delay += 100;
  }

  card.appendChild(math);

  // ── Sigma upgrades ────────────────────────────────────────────────────────
  if (sigmaGains.length > 0) {
    card.appendChild(sectionDivider(delay));
    delay += 60;

    const sigmaBlock = el('div', 'offline-sigma-block offline-fade');
    sigmaBlock.style.animationDelay = delay + 'ms';

    sigmaBlock.appendChild(el('div', 'offline-sigma-label', 'sigma automation'));

    for (const g of sigmaGains) {
      const row = el('div', 'offline-sigma-row');
      row.appendChild(el('span', 'offline-sigma-name', g.name));
      row.appendChild(el('span', 'offline-sigma-delta', '+' + g.delta));
      sigmaBlock.appendChild(row);
    }

    card.appendChild(sigmaBlock);
    delay += 80;
  }

  // ── Efficiency bar ────────────────────────────────────────────────────────
  const capH   = ENGINE.OFFLINE_CAP_SECONDS / 3600;
  const effPct = Math.min(elapsed / ENGINE.OFFLINE_CAP_SECONDS, 1);

  card.appendChild(sectionDivider(delay));
  delay += 40;

  const effRow = el('div', 'offline-eff-row offline-fade');
  effRow.style.animationDelay = delay + 'ms';
  effRow.appendChild(el('span', 'offline-eff-label', 'cap  ' + capH + 'h'));
  const barWrap = el('div', 'offline-eff-bar');
  const barFill = el('div', 'offline-eff-fill' + (capped ? ' offline-eff-fill-capped' : ''));
  barFill.style.width = (effPct * 100).toFixed(1) + '%';
  barWrap.appendChild(barFill);
  effRow.appendChild(barWrap);
  effRow.appendChild(el('span', 'offline-eff-pct' + (capped ? ' offline-eff-pct-warn' : ''),
    Math.round(effPct * 100) + '%'));
  card.appendChild(effRow);
  delay += 80;

  // ── Collect ────────────────────────────────────────────────────────────────
  card.appendChild(sectionDivider(delay));
  delay += 40;

  const btn = el('button', 'offline-collect-btn offline-fade');
  btn.textContent = '[ collect ]';
  btn.style.animationDelay = delay + 'ms';
  btn.addEventListener('click', () => overlay.remove());
  card.appendChild(btn);

  overlay.appendChild(card);
  document.body.appendChild(overlay);
}
