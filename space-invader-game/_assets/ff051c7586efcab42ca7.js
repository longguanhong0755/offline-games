import { Player } from '/_assets/c182224ce2f8f85c006f.js';
import { Alien } from '/_assets/8a2d4f08e664994b694d.js';
import { Projectile } from '/_assets/49f7e5b0786c79c50df0.js';
import { Particle } from '/_assets/53ec330631ee74db14fb.js';
import { SoundManager } from '/_assets/79195de7586d38293740.js';

class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.state = 'MENU'; // MENU, PLAYING, GAMEOVER, VICTORY
        this.score = 0;
        this.lives = 3;

        this.keys = {
            ArrowLeft: false,
            ArrowRight: false,
            KeyA: false,
            KeyD: false,
            Space: false
        };

        // Entities
        this.player = null;
        this.aliens = [];
        this.bullets = [];
        this.particles = [];
        this.alienDirection = 1;
        this.alienMoveDown = false;

        // Audio
        this.soundManager = new SoundManager();

        // Binding methods
        this.loop = this.loop.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.startGame = this.startGame.bind(this);
        this.restartGame = this.restartGame.bind(this);

        this.init();
    }

    init() {
        this.addEventListeners();
        this.showStartScreen();
        requestAnimationFrame(this.loop);
    }

    addEventListeners() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);

        document.getElementById('start-btn').addEventListener('click', this.startGame);
        document.getElementById('restart-btn').addEventListener('click', this.restartGame);
        document.getElementById('play-again-btn').addEventListener('click', this.restartGame);
    }

    handleKeyDown(e) {
        if (e.code === 'Space') e.preventDefault();
        this.keys[e.code] = true;

        if (this.state === 'PLAYING' && e.code === 'Space') {
            if (this.player) this.player.shoot();
        }
    }

    handleKeyUp(e) {
        this.keys[e.code] = false;
    }

    showStartScreen() {
        this.state = 'MENU';
        document.getElementById('start-screen').classList.add('active');
        document.getElementById('start-screen').classList.remove('hidden');
        document.getElementById('game-over-screen').classList.add('hidden');
        document.getElementById('victory-screen').classList.add('hidden');
        document.getElementById('game-over-screen').classList.remove('active');
        document.getElementById('victory-screen').classList.remove('active');
    }

    startGame() {
        this.state = 'PLAYING';
        this.score = 0;
        this.lives = 3;
        this.updateUI();

        document.querySelectorAll('.overlay').forEach(el => {
            el.classList.add('hidden');
            el.classList.remove('active');
        });

        this.initEntities();
    }

    restartGame() {
        this.startGame();
    }

    initEntities() {
        this.player = new Player(this);
        this.aliens = [];
        this.bullets = [];
        this.particles = [];
        this.createAlienGrid();
    }

    createAlienGrid() {
        const rows = 4;
        const cols = 8;
        const alienWidth = 40;
        const alienHeight = 40;
        const padding = 20;
        const offsetX = (this.width - (cols * (alienWidth + padding))) / 2;
        const offsetY = 50;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const x = offsetX + c * (alienWidth + padding);
                const y = offsetY + r * (alienHeight + padding);
                this.aliens.push(new Alien(this, x, y));
            }
        }
    }

    update() {
        if (this.state !== 'PLAYING') return;

        // Player
        if (this.player) this.player.update(this.keys);

        // Particles
        this.particles.forEach((p, index) => {
            p.update();
            if (p.markedForDeletion) this.particles.splice(index, 1);
        });

        // Bullets
        this.bullets.forEach((bullet, index) => {
            bullet.update();
            if (bullet.markedForDeletion) this.bullets.splice(index, 1);
        });

        // Aliens Movement logic
        let moveDown = false;
        this.aliens.forEach(alien => {
            alien.update(this.alienDirection, 0); // Move horizontally
            // Check boundaries
            if (alien.x + alien.width >= this.width || alien.x <= 0) {
                moveDown = true;
            }
        });

        if (moveDown) {
            this.alienDirection *= -1;
            this.aliens.forEach(alien => {
                alien.update(this.alienDirection * 5, 20); // Move down
            });
        }

        // Collision Detection
        this.detectCollisions();

        // Alien Shooting (Random)
        if (Math.random() < 0.02 && this.aliens.length > 0) {
            const shooter = this.aliens[Math.floor(Math.random() * this.aliens.length)];
            this.bullets.push(new Projectile(this, shooter.x + shooter.width / 2, shooter.y + shooter.height, true));
        }

        // Win Condition
        if (this.aliens.length === 0) {
            this.state = 'VICTORY';
            this.showVictoryScreen();
        }
    }

    detectCollisions() {
        this.bullets.forEach(bullet => {
            if (!bullet.markedForDeletion) {
                // Bullet vs Alien
                if (!bullet.isEnemy) {
                    this.aliens.forEach((alien, index) => {
                        if (this.checkCollision(bullet, alien)) {
                            bullet.markedForDeletion = true;
                            // Create Explosion
                            this.createExplosion(alien.x + alien.width / 2, alien.y + alien.height / 2, '#ff9fb2');
                            // Remove Alien
                            this.aliens.splice(index, 1);
                            this.score += 100;
                            this.updateUI();
                        }
                    });
                }

                // Bullet vs Player
                if (bullet.isEnemy && this.player) {
                    if (this.checkCollision(bullet, this.player)) {
                        bullet.markedForDeletion = true;
                        this.createExplosion(this.player.x + this.player.width / 2, this.player.y + this.player.height / 2, '#a3d9ff');
                        this.lives--;
                        this.updateUI();
                        if (this.lives <= 0) {
                            this.state = 'GAMEOVER';
                            this.showGameOverScreen();
                        }
                    }
                }
            }
        });

        // Alien vs Player (Body collision)
        this.aliens.forEach(alien => {
            if (this.player && this.checkCollision(alien, this.player)) {
                this.lives = 0;
                this.updateUI();
                this.state = 'GAMEOVER';
                this.showGameOverScreen();
            }
            // Alien reaches bottom
            if (alien.y + alien.height >= this.height) {
                this.state = 'GAMEOVER';
                this.showGameOverScreen();
            }
        });
    }

    checkCollision(rect1, rect2) {
        return (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y);
    }

    createExplosion(x, y, color) {
        for (let i = 0; i < 10; i++) {
            this.particles.push(new Particle(this, x, y, color));
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        if (this.state === 'PLAYING') {
            if (this.player) this.player.draw(this.ctx);
            this.aliens.forEach(alien => alien.draw(this.ctx));
            this.bullets.forEach(bullet => bullet.draw(this.ctx));
            this.particles.forEach(p => p.draw(this.ctx));
        }
    }

    loop() {
        this.update();
        this.draw();
        requestAnimationFrame(this.loop);
    }

    updateUI() {
        document.getElementById('score-value').textContent = this.score;
        const hearts = '❤️'.repeat(this.lives);
        document.getElementById('lives-container').innerHTML = '';
        for (let i = 0; i < this.lives; i++) {
            const span = document.createElement('span');
            span.textContent = '❤️';
            span.className = 'heart';
            document.getElementById('lives-container').appendChild(span);
        }
    }

    showGameOverScreen() {
        document.getElementById('game-over-screen').classList.remove('hidden');
        document.getElementById('game-over-screen').classList.add('active');
        document.getElementById('final-score').textContent = `Score: ${this.score}`;
    }

    showVictoryScreen() {
        document.getElementById('victory-screen').classList.remove('hidden');
        document.getElementById('victory-screen').classList.add('active');
        document.getElementById('victory-score').textContent = `Score: ${this.score}`;
    }

    // Placeholder for sound
    playSound(key) {
        this.soundManager.play(key);
    }
}

// Start
window.addEventListener('load', () => {
    const game = new Game('game-canvas');
});
