/**
 * 渲染调度。
 *
 * 性能约定（见架构规范第 8 节）：
 *   - 每秒最多 4 次全量渲染，由 core/loop.js 节流。
 *   - 每个面板自己决定要不要真的重建 DOM：用 signature() 做廉价指纹，
 *     指纹没变就直接 return，避免每帧重建几百个节点。
 *   - 只有当前激活的标签页会渲染，其余跳过。
 */

import { onRender } from '/_assets/9acfc176b073da1d211d.js';
import { state, realm, isMaxRealm } from '/_assets/3eacf2be9029acb12e69.js';
import { calcCultSpeed, calcMaxHp, calcMaxMp } from '/_assets/c20a1e9f4374ba129553.js';
import { fmt, fmtStones } from '/_assets/ef568888c34fa96b854e.js';
import { setText, barHTML } from '/_assets/69c9c5a1e322fad05f5f.js';
import { currentTab } from '/_assets/279df9603a3d3668d523.js';
import { renderLog } from '/_assets/64f70ea7c19bad33be73.js';
import { renderGuide } from '/_assets/4f76511eee99eaf043d8.js';
import { renderTabs } from '/_assets/279df9603a3d3668d523.js';

const panels = [];

/**
 * 注册一个面板。
 * @param {object} p
 * @param {string} p.id        面板标识
 * @param {string} p.pane      对应的 pane-xxx id（不填表示常驻渲染）
 * @param {Function} p.render  render(host) => void
 * @param {boolean} [p.always] 是否无论标签是否激活都渲染（左栏状态类）
 */
export function registerPanel(p) {
  panels.push(p);
}

/** 廉价指纹：把关心的字段拼成字符串，变了才重建 DOM */
export function signature(...parts) {
  return parts.map((p) => (typeof p === 'object' && p !== null ? JSON.stringify(p) : String(p))).join('|');
}

export function renderAll() {
  renderTopbar();
  renderTabs();

  const tab = currentTab();
  for (const p of panels) {
    if (!p.always && p.pane && p.pane !== tab) continue;
    const host = document.getElementById(p.pane ? 'pane-' + p.pane : p.host);
    if (!host) continue;
    try {
      p.render(host);
    } catch (e) {
      console.error(`[render] 面板 "${p.id}" 渲染失败:`, e);
    }
  }

  renderGuide();
  renderLog();
}

function renderTopbar() {
  const p = state.player;
  const r = realm();

  setText('tsRealm', r.name);
  setText('tsLifespan', fmt(r.lifespan) + ' 载');
  setText('tsStones', fmtStones(state.resources.stones));
  setText('tsSpeed', isMaxRealm() ? '圆满' : fmt(calcCultSpeed()) + '/息');

  // 气血告急时给顶栏一点颜色提示
  const hpPct = calcMaxHp() > 0 ? (p.hp / calcMaxHp()) * 100 : 0;
  const hpEl = document.getElementById('tsRealm');
  if (hpEl) hpEl.style.color = hpPct < 30 ? 'var(--accent)' : '';
}

export function initRender() {
  onRender(renderAll);
}
