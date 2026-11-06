// ===== SFX — Web Audio API Sound Effects =====
var SFX = {
    ctx: null,
    _lastTap: 0,

    _init: function() {
        if (this.ctx) return;
        try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); }
        catch(e) { this.ctx = null; }
    },

    _play: function(freq, type, dur, vol) {
        if (typeof game !== 'undefined' && !game.sound) return;
        this._init();
        if (!this.ctx) return;
        var c = this.ctx;
        if (c.state === 'suspended') c.resume();
        var o = c.createOscillator();
        var g = c.createGain();
        o.type = type || 'sine';
        o.frequency.value = freq;
        g.gain.value = vol || 0.15;
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
        o.connect(g);
        g.connect(c.destination);
        o.start(c.currentTime);
        o.stop(c.currentTime + dur);
    },

    tap: function() {
        if (typeof game !== 'undefined' && !game.sound) return;
        var now = Date.now();
        if (now - this._lastTap < 30) return;
        this._lastTap = now;
        this._play(800, 'square', 0.05, 0.08);
    },

    buy: function() {
        if (typeof game !== 'undefined' && !game.sound) return;
        this._init();
        if (!this.ctx) return;
        var c = this.ctx;
        if (c.state === 'suspended') c.resume();
        var o1 = c.createOscillator(), g1 = c.createGain();
        o1.type = 'sine'; o1.frequency.value = 600;
        g1.gain.value = 0.12;
        g1.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.15);
        o1.connect(g1); g1.connect(c.destination);
        o1.start(c.currentTime); o1.stop(c.currentTime + 0.15);
        var o2 = c.createOscillator(), g2 = c.createGain();
        o2.type = 'sine'; o2.frequency.value = 900;
        g2.gain.value = 0.12;
        g2.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.2);
        o2.connect(g2); g2.connect(c.destination);
        o2.start(c.currentTime + 0.07); o2.stop(c.currentTime + 0.2);
    },

    upgrade: function() {
        if (typeof game !== 'undefined' && !game.sound) return;
        this._init();
        if (!this.ctx) return;
        var c = this.ctx;
        if (c.state === 'suspended') c.resume();
        var o = c.createOscillator(), g = c.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(400, c.currentTime);
        o.frequency.exponentialRampToValueAtTime(1200, c.currentTime + 0.2);
        g.gain.value = 0.12;
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.25);
        o.connect(g); g.connect(c.destination);
        o.start(c.currentTime); o.stop(c.currentTime + 0.25);
    },

    achievement: function() {
        if (typeof game !== 'undefined' && !game.sound) return;
        this._init();
        if (!this.ctx) return;
        var c = this.ctx;
        if (c.state === 'suspended') c.resume();
        var freqs = [523, 659, 784]; // C5-E5-G5
        freqs.forEach(function(f, i) {
            var o = c.createOscillator(), g = c.createGain();
            o.type = 'sine'; o.frequency.value = f;
            g.gain.value = 0.1;
            g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.4 + i * 0.05);
            o.connect(g); g.connect(c.destination);
            o.start(c.currentTime + i * 0.08);
            o.stop(c.currentTime + 0.4 + i * 0.05);
        });
    },

    prestige: function() {
        if (typeof game !== 'undefined' && !game.sound) return;
        this._init();
        if (!this.ctx) return;
        var c = this.ctx;
        if (c.state === 'suspended') c.resume();
        var freqs = [392, 523, 659, 784, 1047]; // G4-C5-E5-G5-C6
        freqs.forEach(function(f, i) {
            var o = c.createOscillator(), g = c.createGain();
            o.type = 'sine'; o.frequency.value = f;
            g.gain.value = 0.1;
            g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.6);
            o.connect(g); g.connect(c.destination);
            o.start(c.currentTime + i * 0.1);
            o.stop(c.currentTime + 0.6);
        });
    },

    error: function() {
        if (typeof game !== 'undefined' && !game.sound) return;
        this._play(150, 'sawtooth', 0.1, 0.1);
    }
};
