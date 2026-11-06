const STORAGE_KEY = 'generated-games-io:state:v1';
const GAME_KEY_PREFIX = 'generated-games-io:game:';

export const PROFILE_COLORS = ['#8b5cf6', '#22d3ee', '#34d399', '#f59e0b', '#fb7185', '#60a5fa'];

export const ACHIEVEMENTS = [
  { id: 'first-run', icon: '✦', title: 'Первый импульс', description: 'Завершить первый забег' },
  { id: 'all-rounder', icon: '◈', title: 'Всеядный игрок', description: 'Попробовать все игры' },
  { id: 'score-hunter', icon: '⌁', title: 'Охотник за цифрами', description: 'Набрать 25 000 очков суммарно' },
  { id: 'offline-pilot', icon: '↓', title: 'Офлайн-пилот', description: 'Установить игру на устройство' },
  { id: 'veteran', icon: '◎', title: 'Аркадный ветеран', description: 'Завершить 20 забегов' },
  { id: 'level-five', icon: '⬡', title: 'Пятый контур', description: 'Достичь 5 уровня' },
];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function read() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (_) {
    return null;
  }
}

function write(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_) {
    // Private browsing can deny storage; the in-memory state still works.
  }
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function hashDay(date) {
  let hash = 0;
  for (const char of date) hash = ((hash << 5) - hash + char.charCodeAt(0)) | 0;
  return Math.abs(hash);
}

export function levelInfo(xp) {
  const level = Math.floor(Math.sqrt(Math.max(0, xp) / 400)) + 1;
  const floor = (level - 1) ** 2 * 400;
  const ceiling = level ** 2 * 400;
  return {
    level,
    current: xp - floor,
    needed: ceiling - floor,
    progress: Math.min(1, (xp - floor) / Math.max(1, ceiling - floor)),
  };
}

function freshState(games) {
  const day = today();
  const dailyGame = games[hashDay(day) % games.length];
  return {
    version: 1,
    profile: { name: 'Игрок', color: PROFILE_COLORS[0] },
    xp: 0,
    coins: 0,
    totalScore: 0,
    totalRuns: 0,
    lastPlayed: null,
    games: {},
    leaderboards: {},
    installed: [],
    favorites: [],
    achievements: [],
    daily: {
      date: day,
      gameId: dailyGame.id,
      target: 2,
      progress: 0,
      claimed: false,
    },
    settings: { sound: true, haptics: true },
  };
}

function normalizeState(raw, games) {
  const base = freshState(games);
  if (!raw || raw.version !== 1) return base;
  const state = {
    ...base,
    ...raw,
    profile: { ...base.profile, ...(raw.profile || {}) },
    games: raw.games || {},
    leaderboards: raw.leaderboards || {},
    settings: { ...base.settings, ...(raw.settings || {}) },
  };
  if (!state.daily || state.daily.date !== today()) {
    state.daily = base.daily;
  }
  return state;
}

export function createStore(catalog) {
  let state = normalizeState(read(), catalog);
  const events = new EventTarget();

  function emit(detail) {
    write(state);
    events.dispatchEvent(new CustomEvent('change', { detail }));
  }

  function gameStats(gameId) {
    return state.games[gameId] || { best: 0, runs: 0, totalScore: 0, lastScore: 0, lastPlayed: null };
  }

  function unlockAchievements() {
    const played = catalog.filter((game) => gameStats(game.id).runs > 0).length;
    const rules = {
      'first-run': state.totalRuns >= 1,
      'all-rounder': played === catalog.length,
      'score-hunter': state.totalScore >= 25000,
      'offline-pilot': state.installed.length >= 1,
      veteran: state.totalRuns >= 20,
      'level-five': levelInfo(state.xp).level >= 5,
    };
    const unlocked = [];
    for (const achievement of ACHIEVEMENTS) {
      if (rules[achievement.id] && !state.achievements.includes(achievement.id)) {
        state.achievements.push(achievement.id);
        state.xp += 120;
        state.coins += 40;
        unlocked.push(achievement);
      }
    }
    return unlocked;
  }

  const api = {
    events,
    get() {
      return clone(state);
    },
    stats(gameId) {
      return clone(gameStats(gameId));
    },
    leaderboard(gameId) {
      return clone(state.leaderboards[gameId] || []);
    },
    updateProfile(profile) {
      state.profile = {
        name: String(profile.name || 'Игрок').trim().slice(0, 18) || 'Игрок',
        color: PROFILE_COLORS.includes(profile.color) ? profile.color : state.profile.color,
      };
      emit({ type: 'profile' });
    },
    updateSetting(key, value) {
      if (!(key in state.settings)) return;
      state.settings[key] = Boolean(value);
      emit({ type: 'settings', key });
    },
    toggleFavorite(gameId) {
      state.favorites = state.favorites.includes(gameId)
        ? state.favorites.filter((id) => id !== gameId)
        : [...state.favorites, gameId];
      emit({ type: 'favorite', gameId });
    },
    markInstalled(gameId) {
      if (!state.installed.includes(gameId)) state.installed.push(gameId);
      const achievements = unlockAchievements();
      emit({ type: 'installed', gameId, achievements });
      return achievements;
    },
    recordRun(gameId, result = {}) {
      const score = Math.max(0, Math.round(result.score || 0));
      const current = gameStats(gameId);
      const isRecord = score > current.best;
      const updated = {
        best: Math.max(current.best, score),
        runs: current.runs + 1,
        totalScore: current.totalScore + score,
        lastScore: score,
        lastPlayed: new Date().toISOString(),
      };
      state.games[gameId] = updated;
      state.totalRuns += 1;
      state.totalScore += score;
      state.lastPlayed = gameId;

      const xp = Math.max(35, Math.min(900, Math.round(35 + score * 0.07 + (result.bonusXp || 0))));
      const coins = Math.max(5, Math.min(300, Math.round(result.coins || 8 + score / 240)));
      state.xp += xp;
      state.coins += coins;

      const list = state.leaderboards[gameId] || [];
      list.push({ score, name: state.profile.name, at: new Date().toISOString().slice(0, 10) });
      list.sort((a, b) => b.score - a.score);
      state.leaderboards[gameId] = list.slice(0, 10);

      let dailyCompleted = false;
      if (state.daily.gameId === gameId && !state.daily.claimed) {
        state.daily.progress = Math.min(state.daily.target, state.daily.progress + 1);
        if (state.daily.progress >= state.daily.target) {
          state.daily.claimed = true;
          state.xp += 250;
          state.coins += 100;
          dailyCompleted = true;
        }
      }

      const achievements = unlockAchievements();
      emit({ type: 'run', gameId, isRecord, dailyCompleted, achievements });
      return { score, xp, coins, isRecord, dailyCompleted, achievements, best: updated.best };
    },
    gameSave(gameId, fallback = {}) {
      try {
        return JSON.parse(localStorage.getItem(GAME_KEY_PREFIX + gameId)) || clone(fallback);
      } catch (_) {
        return clone(fallback);
      }
    },
    saveGame(gameId, data) {
      try {
        localStorage.setItem(GAME_KEY_PREFIX + gameId, JSON.stringify(data));
      } catch (_) {}
    },
  };

  write(state);
  return api;
}

