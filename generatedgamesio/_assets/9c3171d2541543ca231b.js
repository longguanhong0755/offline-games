import { GameHost } from '/_assets/f46f26912de5474b400a.js';
import { ACHIEVEMENTS, PROFILE_COLORS, createStore, levelInfo } from '/_assets/4406bedbab24474ad0dc.js';
import { createPWA } from '/_assets/2e52fcc58ff07c546afe.js';

const GAMES = [
  {
    id: 'orbital-breaker',
    title: 'Orbital Breaker',
    category: 'Аркада',
    tags: ['Аркада', 'Реакция'],
    icon: '◫',
    accent: '#8b5cf6',
    accent2: '#22d3ee',
    description: 'Арканоид следующего поколения: заряжай реактор, выпускай мультимячи и пробивай броню импульсом.',
    features: ['Реакторный суперудар', '5 видов бонусов', 'Бесконечные уровни'],
    difficulty: 'Средняя',
    moduleUrl: new URL('./games/orbital-breaker.js', import.meta.url).href,
  },
  {
    id: 'neon-serpent',
    title: 'Neon Serpent',
    category: 'Стратегия',
    tags: ['Стратегия', 'Реакция'],
    icon: '⌁',
    accent: '#34d399',
    accent2: '#22d3ee',
    description: 'Змейка с порталами, препятствиями, золотыми сферами, комбо и ускорением на энергии.',
    features: ['Свайпы и D-pad', 'Порталы по краям', 'Комбо до ×8'],
    difficulty: 'Нарастающая',
    moduleUrl: new URL('./games/neon-serpent.js', import.meta.url).href,
  },
  {
    id: 'sky-vanguard',
    title: 'Sky Vanguard',
    category: 'Шутер',
    tags: ['Шутер', 'Экшен'],
    icon: '▲',
    accent: '#22d3ee',
    accent2: '#f0abfc',
    description: 'Вертикальный шутер для одного пальца: волны, боссы, овердрайв и постоянные улучшения корабля.',
    features: ['Автоматический огонь', 'Босс каждые 4 волны', 'Постоянный апгрейд'],
    difficulty: 'Динамическая',
    moduleUrl: new URL('./games/sky-vanguard.js', import.meta.url).href,
  },
  {
    id: 'pulse-rider',
    title: 'Pulse Rider',
    category: 'Гонки',
    tags: ['Гонки', 'Экшен'],
    icon: '◇',
    accent: '#fb7185',
    accent2: '#f59e0b',
    description: 'Псевдо‑3D гонка с трафиком, нитро, сменой погоды и контрольными точками без щедрых бесконечных таймеров.',
    features: ['Нитро и опасные обгоны', 'Три погодные зоны', 'Честные чекпоинты'],
    difficulty: 'Высокая',
    moduleUrl: new URL('./games/pulse-rider.js', import.meta.url).href,
  },
  {
    id: 'quantum-blocks',
    title: 'Quantum Blocks',
    category: 'Пазл',
    tags: ['Пазл', 'Стратегия'],
    icon: '▦',
    accent: '#a78bfa',
    accent2: '#22d3ee',
    description: 'Тактический пазл с честной 7-фигурной очередью, ghost-проекцией, комбо линий и ускорением жестами.',
    features: ['7-фигурная очередь', 'Ghost-проекция', 'Комбо и нарастающая скорость'],
    difficulty: 'Тактическая',
    moduleUrl: new URL('./games/quantum-blocks.js', import.meta.url).href,
  },
  {
    id: 'rift-runner',
    title: 'Rift Runner',
    category: 'Раннер',
    tags: ['Раннер', 'Экшен'],
    icon: '⇥',
    accent: '#22d3ee',
    accent2: '#a78bfa',
    description: 'One-touch раннер с двойным прыжком, фазовым проходом сквозь угрозы и процедурными разломами.',
    features: ['Двойной прыжок', 'Фазовая энергия', 'Три динамические зоны'],
    difficulty: 'Нарастающая',
    moduleUrl: new URL('./games/rift-runner.js', import.meta.url).href,
  },
  {
    id: 'mech-defense',
    title: 'Mech Defense',
    category: 'Тактика',
    tags: ['Стратегия', 'Экшен'],
    icon: '⬡',
    accent: '#fbbf24',
    accent2: '#22d3ee',
    description: 'Карманная lane-defense: распределяй энергию, усиливай турели и держи три линии против титанов.',
    features: ['Три линии обороны', '4 уровня турелей', 'Титаны и восстановление ядра'],
    difficulty: 'Стратегическая',
    moduleUrl: new URL('./games/mech-defense.js', import.meta.url).href,
  },
  {
    id: 'arena-survivor',
    title: 'Arena Survivor',
    category: 'Survival',
    tags: ['Экшен', 'Шутер'],
    icon: '✣',
    accent: '#fb7185',
    accent2: '#a78bfa',
    description: 'Auto-shooter survival с рывком, магнитом опыта, орбитальными модулями и эволюцией сборки.',
    features: ['Автоматический прицел', 'Рывок с неуязвимостью', 'Эволюция оружия и орбит'],
    difficulty: 'Интенсивная',
    moduleUrl: new URL('./games/arena-survivor.js', import.meta.url).href,
  },
];

const store = createStore(GAMES);
const pwa = createPWA(store);
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const byId = (id) => document.getElementById(id);
const gameById = (id) => GAMES.find((game) => game.id === id);

let currentView = 'home';
let activeGame = null;
let activeModule = null;
let host = null;
let selectedProfileColor = store.get().profile.color;
let searchQuery = '';
let activeFilter = 'Все';

function formatNumber(value) {
  return new Intl.NumberFormat('ru-RU').format(Math.round(value || 0));
}

function initials(name) {
  return String(name || 'И').trim().slice(0, 1).toUpperCase();
}

function showToast(message, tone = 'default') {
  const toast = document.createElement('div');
  toast.className = `toast toast--${tone}`;
  toast.textContent = message;
  byId('toast-region').appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('is-visible'));
  window.setTimeout(() => {
    toast.classList.remove('is-visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 3300);
}

function gameCard(game, compact = false) {
  const state = store.get();
  const stats = store.stats(game.id);
  const installed = state.installed.includes(game.id);
  const favorite = state.favorites.includes(game.id);
  return `
    <article class="game-card${compact ? ' game-card--compact' : ''}" style="--game-accent:${game.accent};--game-accent-2:${game.accent2}">
      <button class="game-card-main" type="button" data-play-game="${game.id}" aria-label="Играть в ${game.title}">
        <span class="game-poster" aria-hidden="true">
          <i class="poster-grid"></i><i class="poster-orbit poster-orbit--one"></i><i class="poster-orbit poster-orbit--two"></i>
          <strong>${game.icon}</strong><small>${game.category}</small>
        </span>
        <span class="game-card-copy">
          <span class="game-card-meta"><i>${installed ? 'OFFLINE' : 'ONLINE'}</i><b>${game.difficulty}</b></span>
          <strong>${game.title}</strong>
          <span>${game.description}</span>
          <span class="game-card-stats"><b>Рекорд ${formatNumber(stats.best)}</b><b>${stats.runs} запусков</b></span>
        </span>
      </button>
      <div class="game-card-actions">
        <button type="button" data-favorite="${game.id}" aria-label="${favorite ? 'Убрать из избранного' : 'Добавить в избранное'}" aria-pressed="${favorite}">${favorite ? '♥' : '♡'}</button>
        <button type="button" data-install-game="${game.id}" ${installed ? 'disabled' : ''}>${installed ? '✓ На устройстве' : '↓ Офлайн'}</button>
      </div>
    </article>`;
}

function renderLibrary() {
  const categories = ['Все', ...new Set(GAMES.flatMap((game) => game.tags))];
  byId('filter-chips').innerHTML = categories
    .map((category) => `<button class="filter-chip${category === activeFilter ? ' is-active' : ''}" type="button" data-filter="${category}" aria-pressed="${category === activeFilter}">${category}</button>`)
    .join('');
  const query = searchQuery.trim().toLocaleLowerCase('ru');
  const filtered = GAMES.filter((game) => {
    const matchesCategory = activeFilter === 'Все' || game.tags.includes(activeFilter);
    const haystack = `${game.title} ${game.category} ${game.tags.join(' ')} ${game.description}`.toLocaleLowerCase('ru');
    return matchesCategory && (!query || haystack.includes(query));
  });
  byId('game-grid').innerHTML = filtered.map((game) => gameCard(game)).join('');
  byId('empty-state').hidden = filtered.length > 0;
}

function renderHome() {
  const state = store.get();
  const level = levelInfo(state.xp);
  byId('hero-level').textContent = level.level;
  byId('level-number').textContent = level.level;
  byId('level-ring').style.setProperty('--progress', `${level.progress * 360}deg`);
  byId('profile-name-home').textContent = state.profile.name;
  byId('xp-current').textContent = `${formatNumber(level.current)} / ${formatNumber(level.needed)}`;
  byId('coin-count').textContent = formatNumber(state.coins);

  const dailyGame = gameById(state.daily.gameId) || GAMES[0];
  byId('daily-title').textContent = `Сыграй в ${dailyGame.title}`;
  byId('daily-description').textContent = state.daily.claimed
    ? 'Награда получена. Новая миссия появится завтра.'
    : `Заверши ${state.daily.target} забега и получи 250 XP + 100 ⬡`;
  byId('daily-current').textContent = state.daily.progress;
  byId('daily-target').textContent = state.daily.target;
  byId('daily-bar').style.width = `${Math.min(100, state.daily.progress / state.daily.target * 100)}%`;
  byId('daily-action').textContent = state.daily.claimed ? 'Выполнено ✓' : 'Выполнить';
  byId('daily-action').disabled = state.daily.claimed;

  const order = [state.lastPlayed, ...state.favorites, ...GAMES.map((game) => game.id)]
    .filter(Boolean)
    .filter((id, index, list) => list.indexOf(id) === index)
    .slice(0, 3);
  byId('quick-games').innerHTML = order.map((id) => gameCard(gameById(id), true)).join('');
}

function renderProfile() {
  const state = store.get();
  const level = levelInfo(state.xp);
  const color = state.profile.color;
  const avatar = initials(state.profile.name);
  byId('header-avatar').textContent = avatar;
  byId('open-profile').style.setProperty('--profile-color', color);
  byId('profile-avatar-large').textContent = avatar;
  byId('profile-avatar-large').style.setProperty('--profile-color', color);
  byId('profile-title').textContent = state.profile.name;
  byId('profile-subtitle').textContent = `Уровень ${level.level} · ${level.level < 3 ? 'начинающий пилот' : level.level < 6 ? 'неоновый ветеран' : 'легенда аркады'}`;
  byId('profile-stats').innerHTML = [
    ['Лучший счёт', Math.max(0, ...GAMES.map((game) => store.stats(game.id).best)), '⌁'],
    ['Забегов', state.totalRuns, '▶'],
    ['Суммарно', state.totalScore, '✦'],
    ['На устройстве', `${state.installed.length}/${GAMES.length}`, '↓'],
  ].map(([label, value, icon]) => `<article><span aria-hidden="true">${icon}</span><b>${typeof value === 'number' ? formatNumber(value) : value}</b><small>${label}</small></article>`).join('');

  byId('achievement-grid').innerHTML = ACHIEVEMENTS.map((achievement) => {
    const unlocked = state.achievements.includes(achievement.id);
    return `<article class="achievement${unlocked ? ' is-unlocked' : ''}"><span aria-hidden="true">${achievement.icon}</span><div><b>${achievement.title}</b><small>${achievement.description}</small></div><i>${unlocked ? '✓' : '·'}</i></article>`;
  }).join('');

  const installed = GAMES.filter((game) => state.installed.includes(game.id));
  byId('installed-list').innerHTML = installed.length
    ? installed.map((game) => `<button type="button" data-play-game="${game.id}" style="--game-accent:${game.accent}"><span>${game.icon}</span><b>${game.title}</b><small>Готово офлайн</small><i>→</i></button>`).join('')
    : '<div class="installed-empty"><span>↓</span><p><b>Пока пусто</b><small>Нажми «Офлайн» на карточке игры — и она останется на устройстве.</small></p></div>';
  byId('sound-setting').checked = state.settings.sound;
  byId('haptic-setting').checked = state.settings.haptics;
}

function renderAll() {
  renderHome();
  renderLibrary();
  renderProfile();
}

function showView(view, { history = true } = {}) {
  if (!['home', 'library', 'profile'].includes(view)) view = 'home';
  currentView = view;
  for (const panel of $$('.view')) {
    const active = panel.dataset.view === view;
    panel.hidden = !active;
    panel.classList.toggle('is-active', active);
  }
  for (const button of $$('.nav-item')) {
    const active = button.dataset.route === view;
    button.classList.toggle('is-active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (history) {
    const url = new URL(location.href);
    if (view === 'home') url.searchParams.delete('view');
    else url.searchParams.set('view', view);
    url.searchParams.delete('game');
    window.history.pushState({ view }, '', url);
  }
}

function setGameMetadata(game) {
  const dialog = byId('game-dialog');
  dialog.style.setProperty('--game-accent', game.accent);
  dialog.style.setProperty('--game-accent-2', game.accent2);
  byId('game-category').textContent = game.category;
  byId('game-title').textContent = game.title;
  byId('game-intro-title').textContent = game.title;
  byId('game-intro-text').textContent = game.description;
  byId('game-icon').textContent = game.icon;
  byId('game-canvas').setAttribute('aria-label', `Игровое поле ${game.title}`);
  byId('game-features').innerHTML = game.features.map((feature) => `<li><span>✓</span>${feature}</li>`).join('');
  const stats = store.stats(game.id);
  byId('hud-score').textContent = '0';
  byId('hud-best').textContent = formatNumber(stats.best);
  byId('hud-middle').innerHTML = '<small>Режим</small><b>готов</b>';
  byId('game-live-status').textContent = `${game.title}. ${game.description}`;
  byId('game-intro').hidden = false;
  byId('pause-overlay').hidden = true;
  byId('result-overlay').hidden = true;
  byId('touch-controls').replaceChildren();
  byId('start-game').disabled = false;
  byId('start-game').textContent = 'Запустить';
  const installed = store.get().installed.includes(game.id);
  byId('cache-game').disabled = installed;
  byId('cache-game').textContent = installed ? '✓ Доступно офлайн' : '↓ Установить офлайн';
}

function openGame(gameId, { history = true } = {}) {
  const game = gameById(gameId);
  if (!game) return;
  closeHost();
  activeGame = game;
  activeModule = null;
  setGameMetadata(game);
  const dialog = byId('game-dialog');
  if (!dialog.open) dialog.showModal();
  document.documentElement.classList.add('game-is-open');
  if (history) {
    const url = new URL(location.href);
    url.searchParams.set('game', game.id);
    window.history.pushState({ view: currentView, game: game.id }, '', url);
  }
}

function buildControls(gameModule) {
  const root = byId('touch-controls');
  root.replaceChildren();
  const definitions = gameModule.controls || [];
  root.className = `touch-controls touch-controls--${definitions.length}`;
  for (const control of definitions) {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.action = control.action;
    button.className = `touch-control${control.primary ? ' touch-control--primary' : ''}`;
    button.setAttribute('aria-label', control.label);
    button.innerHTML = `<span aria-hidden="true">${control.icon}</span><small>${control.label}</small>`;
    root.appendChild(button);
  }
}

async function startActiveGame() {
  if (!activeGame) return;
  const button = byId('start-game');
  button.disabled = true;
  button.textContent = 'Загрузка…';
  try {
    pwa.cacheGame(activeGame).catch(() => null);
    activeModule ||= await import(activeGame.moduleUrl);
    buildControls(activeModule);
    byId('game-intro').hidden = true;
    byId('result-overlay').hidden = true;
    byId('pause-overlay').hidden = true;
    host = new GameHost({
      gameId: activeGame.id,
      module: activeModule,
      canvas: byId('game-canvas'),
      controlsRoot: byId('touch-controls'),
      statusElement: byId('game-live-status'),
      store,
      onHud: ({ score, status }) => {
        const scoreText = formatNumber(score);
        if (byId('hud-score').textContent !== scoreText) byId('hud-score').textContent = scoreText;
        const stats = store.stats(activeGame.id);
        byId('hud-best').textContent = formatNumber(Math.max(stats.best, score));
        if (status.label || status.value) {
          byId('hud-middle').innerHTML = `<small>${status.label || 'Статус'}</small><b>${status.value || '—'}</b>`;
        }
      },
      onState: (state) => {
        byId('pause-overlay').hidden = state !== 'paused';
        byId('pause-game').textContent = state === 'paused' ? '▶' : 'Ⅱ';
      },
      onFinish: handleGameFinish,
    });
    host.mount();
  } catch (error) {
    console.error(error);
    button.disabled = false;
    button.textContent = 'Повторить загрузку';
    showToast('Игра не загрузилась. Проверь соединение или офлайн-установку.', 'error');
  }
}

function handleGameFinish(result) {
  if (!activeGame) return;
  const reward = store.recordRun(activeGame.id, result);
  byId('result-badge').textContent = reward.isRecord ? 'НОВЫЙ РЕКОРД' : 'ЗАБЕГ ЗАВЕРШЁН';
  byId('result-title').textContent = reward.isRecord ? 'Ты поднял планку' : 'Хороший заход';
  byId('result-score').textContent = formatNumber(reward.score);
  byId('result-xp').textContent = formatNumber(reward.xp);
  byId('result-coins').textContent = formatNumber(reward.coins);
  byId('result-detail').textContent = result.detail || `Лучший результат: ${formatNumber(reward.best)}`;
  byId('result-overlay').hidden = false;
  if (reward.dailyCompleted) showToast('Ежедневная миссия выполнена: +250 XP и +100 ⬡', 'success');
  for (const achievement of reward.achievements) showToast(`Достижение: ${achievement.title}`, 'success');
}

function closeHost() {
  host?.destroy();
  host = null;
}

function closeGame({ history = true } = {}) {
  closeHost();
  const dialog = byId('game-dialog');
  if (dialog.open) dialog.close();
  document.documentElement.classList.remove('game-is-open');
  activeGame = null;
  activeModule = null;
  if (document.fullscreenElement) document.exitFullscreen().catch(() => null);
  if (history && window.history.state?.game) {
    window.history.back();
  } else if (history) {
    const url = new URL(location.href);
    url.searchParams.delete('game');
    window.history.replaceState({ view: currentView }, '', url);
  }
}

async function installGame(gameId, button) {
  const game = gameById(gameId);
  if (!game) return;
  button?.setAttribute('disabled', '');
  if (button) button.textContent = 'Установка…';
  try {
    await pwa.cacheGame(game);
    showToast(`${game.title} теперь доступна офлайн`, 'success');
    renderAll();
    if (activeGame?.id === game.id) {
      byId('cache-game').disabled = true;
      byId('cache-game').textContent = '✓ Доступно офлайн';
    }
  } catch (error) {
    console.error(error);
    showToast('Не удалось сохранить игру. Нужен HTTPS или локальный сервер.', 'error');
    if (button) button.disabled = false;
  }
}

function openProfileEditor() {
  const state = store.get();
  selectedProfileColor = state.profile.color;
  byId('profile-name-input').value = state.profile.name;
  byId('profile-colors').innerHTML = PROFILE_COLORS.map((color) => `<button type="button" data-profile-color="${color}" style="--swatch:${color}" aria-label="Цвет ${color}" aria-pressed="${color === selectedProfileColor}"></button>`).join('');
  byId('profile-dialog').showModal();
}

function updateConnection() {
  const online = navigator.onLine;
  const pill = byId('connection-pill');
  pill.classList.toggle('is-offline', !online);
  $('span', pill).textContent = online ? 'В сети' : 'Офлайн';
  byId('connection-pill').setAttribute('aria-label', online ? 'Соединение с сетью активно' : 'Нет соединения с сетью');
  byId('offline-banner').hidden = online;
}

function bindEvents() {
  document.addEventListener('click', (event) => {
    const route = event.target.closest('[data-route]');
    if (route) {
      showView(route.dataset.route);
      return;
    }
    const play = event.target.closest('[data-play-game]');
    if (play) {
      openGame(play.dataset.playGame);
      return;
    }
    const favorite = event.target.closest('[data-favorite]');
    if (favorite) {
      store.toggleFavorite(favorite.dataset.favorite);
      return;
    }
    const install = event.target.closest('[data-install-game]');
    if (install) {
      installGame(install.dataset.installGame, install);
      return;
    }
    if (event.target.closest('[data-edit-profile]')) openProfileEditor();
    if (event.target.closest('[data-exit-game]')) closeGame();
  });

  byId('play-featured').addEventListener('click', () => openGame('sky-vanguard'));
  byId('daily-action').addEventListener('click', () => openGame(store.get().daily.gameId));
  byId('game-search').addEventListener('input', (event) => {
    searchQuery = event.target.value;
    renderLibrary();
  });
  byId('filter-chips').addEventListener('click', (event) => {
    const chip = event.target.closest('[data-filter]');
    if (!chip) return;
    activeFilter = chip.dataset.filter;
    renderLibrary();
  });

  byId('start-game').addEventListener('click', startActiveGame);
  byId('retry-game').addEventListener('click', () => {
    byId('result-overlay').hidden = true;
    host?.restart();
  });
  byId('pause-game').addEventListener('click', () => host?.togglePause());
  byId('resume-game').addEventListener('click', () => host?.resume());
  byId('close-game').addEventListener('click', () => closeGame());
  byId('game-dialog').addEventListener('cancel', (event) => {
    event.preventDefault();
    closeGame();
  });
  byId('cache-game').addEventListener('click', (event) => activeGame && installGame(activeGame.id, event.currentTarget));

  byId('toggle-fullscreen').addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await byId('game-shell').requestFullscreen();
    } catch (_) {
      showToast('Полноэкранный режим недоступен в этом браузере.');
    }
  });
  byId('toggle-game-sound').addEventListener('click', () => {
    const state = store.get();
    const enabled = !state.settings.sound;
    store.updateSetting('sound', enabled);
    byId('toggle-game-sound').textContent = enabled ? '♪' : '♩';
    byId('toggle-game-sound').setAttribute('aria-label', enabled ? 'Выключить звук' : 'Включить звук');
  });

  byId('open-profile').addEventListener('click', openProfileEditor);
  byId('profile-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.submitter?.value === 'cancel') {
      byId('profile-dialog').close();
      return;
    }
    if (!event.currentTarget.reportValidity()) return;
    store.updateProfile({ name: byId('profile-name-input').value, color: selectedProfileColor });
    byId('profile-dialog').close();
  });
  byId('profile-colors').addEventListener('click', (event) => {
    const color = event.target.closest('[data-profile-color]');
    if (!color) return;
    selectedProfileColor = color.dataset.profileColor;
    $$('[data-profile-color]', byId('profile-colors')).forEach((button) => button.setAttribute('aria-pressed', String(button === color)));
  });

  byId('sound-setting').addEventListener('change', (event) => store.updateSetting('sound', event.target.checked));
  byId('haptic-setting').addEventListener('change', (event) => store.updateSetting('haptics', event.target.checked));
  byId('persist-storage').addEventListener('click', async () => {
    const granted = await pwa.persistStorage();
    showToast(granted ? 'Сохранения защищены системой' : 'Браузер не предоставил постоянное хранилище', granted ? 'success' : 'default');
  });

  byId('install-app').addEventListener('click', async () => {
    if (pwa.state.deferredPrompt) {
      await pwa.installApp();
    } else if (pwa.isIOS()) {
      byId('install-dialog').showModal();
    } else {
      showToast('Открой меню браузера и выбери «Установить приложение».');
    }
  });
  $$('[data-close-install]').forEach((button) => button.addEventListener('click', () => byId('install-dialog').close()));

  window.addEventListener('online', updateConnection);
  window.addEventListener('offline', updateConnection);
  window.addEventListener('popstate', (event) => {
    const state = event.state || {};
    if (state.game) {
      if (activeGame?.id !== state.game) openGame(state.game, { history: false });
      return;
    }
    if (byId('game-dialog').open) closeGame({ history: false });
    showView(state.view || new URL(location.href).searchParams.get('view') || 'home', { history: false });
  });
}

store.events.addEventListener('change', (event) => {
  renderAll();
  const achievements = event.detail?.achievements || [];
  for (const achievement of achievements) showToast(`Достижение: ${achievement.title}`, 'success');
});

pwa.events.addEventListener('installable', () => { byId('install-app').hidden = false; });
pwa.events.addEventListener('installed', () => { byId('install-app').hidden = true; showToast('GeneratedGamesIO установлено', 'success'); });

function init() {
  renderAll();
  bindEvents();
  updateConnection();
  if (!pwa.state.standalone && (pwa.isIOS() || pwa.state.deferredPrompt)) byId('install-app').hidden = false;
  const url = new URL(location.href);
  const view = url.searchParams.get('view') || 'home';
  currentView = view;
  window.history.replaceState({ view }, '', url);
  showView(view, { history: false });
  const deepGame = url.searchParams.get('game');
  if (deepGame) {
    window.history.replaceState({ view, game: deepGame }, '', url);
    openGame(deepGame, { history: false });
  }
}

init();
