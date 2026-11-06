const KEYMAP = {
  ArrowLeft: 'left', KeyA: 'left',
  ArrowRight: 'right', KeyD: 'right',
  ArrowUp: 'up', KeyW: 'up',
  ArrowDown: 'down', KeyS: 'down',
  Space: 'action', Enter: 'action',
  ShiftLeft: 'boost', ShiftRight: 'boost',
  Escape: 'pause', KeyP: 'pause',
};

export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
export const random = (min, max) => min + Math.random() * (max - min);

class Particles {
  constructor() {
    this.items = [];
  }

  burst(x, y, options = {}) {
    const count = options.count || 10;
    const spread = options.spread ?? Math.PI * 2;
    const direction = options.direction || 0;
    for (let index = 0; index < count; index += 1) {
      const angle = direction + (Math.random() - 0.5) * spread;
      const speed = (options.speed || 110) * random(0.45, 1.2);
      this.items.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        age: 0,
        life: (options.life || 0.5) * random(0.65, 1.3),
        size: (options.size || 3) * random(0.7, 1.35),
        gravity: options.gravity || 0,
        color: Array.isArray(options.color)
          ? options.color[Math.floor(Math.random() * options.color.length)]
          : options.color || '#fff',
      });
    }
  }

  update(dt) {
    for (let index = this.items.length - 1; index >= 0; index -= 1) {
      const particle = this.items[index];
      particle.age += dt;
      if (particle.age >= particle.life) {
        this.items.splice(index, 1);
        continue;
      }
      particle.vy += particle.gravity * dt;
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.vx *= Math.max(0, 1 - 1.8 * dt);
      particle.vy *= Math.max(0, 1 - 1.8 * dt);
    }
  }

  draw(ctx) {
    for (const particle of this.items) {
      const alpha = 1 - particle.age / particle.life;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = particle.color;
      const size = particle.size * (0.4 + alpha * 0.6);
      ctx.fillRect(particle.x - size / 2, particle.y - size / 2, size, size);
    }
    ctx.globalAlpha = 1;
  }

  clear() {
    this.items.length = 0;
  }
}

class SoundRack {
  constructor(isEnabled) {
    this.isEnabled = isEnabled;
    this.context = null;
  }

  unlock() {
    if (!this.isEnabled()) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.context ||= new AudioContext();
    if (this.context.state === 'suspended') this.context.resume();
  }

  tone({ from, to = from, duration = 0.08, volume = 0.05, type = 'sine', delay = 0 }) {
    if (!this.isEnabled()) return;
    this.unlock();
    if (!this.context) return;
    const start = this.context.currentTime + delay;
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(from, start);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(35, to), start + duration);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain).connect(this.context.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.03);
  }

  play(name) {
    const sounds = {
      tap: () => this.tone({ from: 360, to: 520, duration: 0.04, volume: 0.035 }),
      hit: () => this.tone({ from: 240, to: 480, duration: 0.055, volume: 0.045, type: 'square' }),
      shot: () => this.tone({ from: 720, to: 420, duration: 0.045, volume: 0.03, type: 'square' }),
      collect: () => this.tone({ from: 520, to: 1180, duration: 0.1, volume: 0.055, type: 'triangle' }),
      power: () => {
        this.tone({ from: 420, to: 880, duration: 0.13, volume: 0.06, type: 'triangle' });
        this.tone({ from: 690, to: 1380, duration: 0.16, volume: 0.045, type: 'triangle', delay: 0.08 });
      },
      crash: () => this.tone({ from: 180, to: 42, duration: 0.42, volume: 0.08, type: 'sawtooth' }),
      fail: () => this.tone({ from: 260, to: 70, duration: 0.5, volume: 0.075, type: 'sawtooth' }),
      win: () => [523, 659, 784, 1046].forEach((from, index) => this.tone({ from, duration: 0.11 + index * 0.02, volume: 0.05, type: 'triangle', delay: index * 0.075 })),
    };
    sounds[name]?.();
  }
}

export class GameHost {
  constructor(options) {
    this.gameId = options.gameId;
    this.module = options.module;
    this.canvas = options.canvas;
    this.controlsRoot = options.controlsRoot;
    this.statusElement = options.statusElement;
    this.store = options.store;
    this.onHud = options.onHud || (() => {});
    this.onState = options.onState || (() => {});
    this.onFinish = options.onFinish || (() => {});
    this.width = options.width || 390;
    this.height = options.height || 694;
    this.context = this.canvas.getContext('2d', { alpha: false });
    this.score = 0;
    this.status = {};
    this.state = 'idle';
    this.heldActions = new Set();
    this.justPressed = new Set();
    this.swipes = [];
    this.pointer = { x: this.width / 2, y: this.height / 2, down: false, active: false };
    this.fx = new Particles();
    this.sound = new SoundRack(() => this.store.get().settings.sound);
    this.shakePower = 0;
    this.lastFrame = 0;
    this.frameId = 0;
    this.wakeLock = null;
    this.game = null;
    this.listeners = [];
    this.bindMethods();
  }

  bindMethods() {
    this.tick = this.tick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handlePointerDown = this.handlePointerDown.bind(this);
    this.handlePointerMove = this.handlePointerMove.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
  }

  mount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    this.canvas.addEventListener('pointerdown', this.handlePointerDown);
    this.canvas.addEventListener('pointermove', this.handlePointerMove);
    this.canvas.addEventListener('pointerup', this.handlePointerUp);
    this.canvas.addEventListener('pointercancel', this.handlePointerUp);
    document.addEventListener('visibilitychange', this.handleVisibility);
    this.canvas.style.touchAction = 'none';
    this.resizeObserver = new ResizeObserver(() => this.fit());
    this.resizeObserver.observe(this.canvas);
    this.bindControlButtons();
    this.fit();
    this.createGame();
    this.frameId = requestAnimationFrame(this.tick);
  }

  bindControlButtons() {
    for (const button of this.controlsRoot.querySelectorAll('[data-action]')) {
      const action = button.dataset.action;
      const press = (event) => {
        event.preventDefault();
        button.setPointerCapture?.(event.pointerId);
        if (!this.heldActions.has(action)) this.justPressed.add(action);
        this.heldActions.add(action);
        this.sound.unlock();
      };
      const release = (event) => {
        event.preventDefault();
        this.heldActions.delete(action);
      };
      button.addEventListener('pointerdown', press);
      button.addEventListener('pointerup', release);
      button.addEventListener('pointercancel', release);
      button.addEventListener('lostpointercapture', release);
      this.listeners.push(() => {
        button.removeEventListener('pointerdown', press);
        button.removeEventListener('pointerup', release);
        button.removeEventListener('pointercancel', release);
        button.removeEventListener('lostpointercapture', release);
      });
    }
  }

  createGame() {
    this.score = 0;
    this.status = {};
    this.fx.clear();
    this.state = 'playing';
    this.game = this.module.createGame(this.api());
    this.sound.unlock();
    this.acquireWakeLock();
    this.pushHud();
    this.onState(this.state);
  }

  api() {
    const host = this;
    return {
      width: this.width,
      height: this.height,
      pointer: this.pointer,
      fx: this.fx,
      clamp,
      random,
      get score() { return host.score; },
      held: (action) => this.heldActions.has(action),
      pressed: (action) => this.justPressed.has(action),
      getSwipes: () => this.swipes.slice(),
      addScore: (amount) => {
        this.score = Math.max(0, Math.round(this.score + amount));
        this.pushHud();
      },
      setScore: (score) => {
        this.score = Math.max(0, Math.round(score));
        this.pushHud();
      },
      setStatus: (status) => {
        this.status = { ...this.status, ...status };
        this.pushHud();
      },
      announce: (message) => {
        if (this.statusElement) this.statusElement.textContent = message;
      },
      sfx: (name) => this.sound.play(name),
      haptic: (pattern = 18) => this.haptic(pattern),
      shake: (amount = 5) => { this.shakePower = Math.max(this.shakePower, amount); },
      finish: (result) => this.finish(result),
      loadSave: (fallback) => this.store.gameSave(this.gameId, fallback),
      save: (data) => this.store.saveGame(this.gameId, data),
    };
  }

  pushHud() {
    const snapshot = JSON.stringify([this.score, this.status]);
    if (snapshot === this.lastHudSnapshot) return;
    this.lastHudSnapshot = snapshot;
    this.onHud({ score: this.score, status: { ...this.status } });
  }

  restart() {
    this.game?.destroy?.();
    this.heldActions.clear();
    this.justPressed.clear();
    this.swipes.length = 0;
    this.createGame();
  }

  pause(reason = 'manual') {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.releaseWakeLock();
    this.onState(this.state, reason);
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.lastFrame = 0;
    this.sound.unlock();
    this.acquireWakeLock();
    this.onState(this.state);
  }

  togglePause() {
    if (this.state === 'playing') this.pause();
    else if (this.state === 'paused') this.resume();
  }

  finish(result = {}) {
    if (this.state === 'finished') return;
    this.state = 'finished';
    this.releaseWakeLock();
    this.sound.play(result.won ? 'win' : 'fail');
    this.haptic(result.won ? [30, 40, 60] : [60, 30, 90]);
    this.onState(this.state);
    this.onFinish({ ...result, score: this.score });
  }

  fit() {
    const rect = this.canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.round(rect.width * dpr);
    const height = Math.round(rect.height * dpr);
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
    this.scaleX = width / this.width;
    this.scaleY = height / this.height;
  }

  tick(timestamp) {
    this.frameId = requestAnimationFrame(this.tick);
    if (!this.lastFrame) this.lastFrame = timestamp;
    const dt = Math.min(0.05, (timestamp - this.lastFrame) / 1000);
    this.lastFrame = timestamp;

    if (this.state === 'playing') {
      this.game?.update?.(dt);
      this.fx.update(dt);
      this.shakePower *= Math.max(0, 1 - 7 * dt);
    }
    this.draw();
    this.justPressed.clear();
    this.swipes.length = 0;
  }

  draw() {
    const ctx = this.context;
    ctx.setTransform(this.scaleX || 1, 0, 0, this.scaleY || 1, 0, 0);
    ctx.fillStyle = '#070711';
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.save();
    if (this.shakePower > 0.2) {
      ctx.translate(random(-this.shakePower, this.shakePower), random(-this.shakePower, this.shakePower));
    }
    this.game?.draw?.(ctx);
    this.fx.draw(ctx);
    ctx.restore();
  }

  localPoint(event) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: clamp(((event.clientX - rect.left) / rect.width) * this.width, 0, this.width),
      y: clamp(((event.clientY - rect.top) / rect.height) * this.height, 0, this.height),
    };
  }

  handlePointerDown(event) {
    event.preventDefault();
    this.canvas.setPointerCapture?.(event.pointerId);
    const point = this.localPoint(event);
    Object.assign(this.pointer, point, { down: true, active: true });
    this.pointerStart = { ...point, at: performance.now() };
    this.justPressed.add('tap');
    this.sound.unlock();
  }

  handlePointerMove(event) {
    if (!this.pointer.down && event.pointerType === 'touch') return;
    Object.assign(this.pointer, this.localPoint(event), { active: true });
  }

  handlePointerUp(event) {
    const point = this.localPoint(event);
    Object.assign(this.pointer, point, { down: false, active: true });
    const start = this.pointerStart;
    if (start) {
      const dx = point.x - start.x;
      const dy = point.y - start.y;
      const distance = Math.hypot(dx, dy);
      if (distance > 26 && performance.now() - start.at < 700) {
        this.swipes.push(Math.abs(dx) > Math.abs(dy)
          ? (dx > 0 ? 'right' : 'left')
          : (dy > 0 ? 'down' : 'up'));
      }
    }
    this.pointerStart = null;
  }

  handleKeyDown(event) {
    const action = KEYMAP[event.code];
    if (!action) return;
    if (['left', 'right', 'up', 'down', 'action', 'boost'].includes(action)) event.preventDefault();
    if (action === 'pause') {
      if (!event.repeat) this.togglePause();
      return;
    }
    if (!this.heldActions.has(action)) this.justPressed.add(action);
    this.heldActions.add(action);
  }

  handleKeyUp(event) {
    const action = KEYMAP[event.code];
    if (action) this.heldActions.delete(action);
  }

  handleVisibility() {
    if (document.hidden) this.pause('hidden');
    else if (this.state === 'playing') this.acquireWakeLock();
  }

  haptic(pattern) {
    if (!this.store.get().settings.haptics || !navigator.vibrate) return;
    navigator.vibrate(pattern);
  }

  async acquireWakeLock() {
    if (!('wakeLock' in navigator) || document.hidden) return;
    try {
      this.wakeLock = await navigator.wakeLock.request('screen');
    } catch (_) {}
  }

  async releaseWakeLock() {
    try { await this.wakeLock?.release(); } catch (_) {}
    this.wakeLock = null;
  }

  destroy() {
    cancelAnimationFrame(this.frameId);
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    this.canvas.removeEventListener('pointerdown', this.handlePointerDown);
    this.canvas.removeEventListener('pointermove', this.handlePointerMove);
    this.canvas.removeEventListener('pointerup', this.handlePointerUp);
    this.canvas.removeEventListener('pointercancel', this.handlePointerUp);
    document.removeEventListener('visibilitychange', this.handleVisibility);
    this.resizeObserver?.disconnect();
    for (const dispose of this.listeners) dispose();
    this.game?.destroy?.();
    this.releaseWakeLock();
    this.game = null;
  }
}
