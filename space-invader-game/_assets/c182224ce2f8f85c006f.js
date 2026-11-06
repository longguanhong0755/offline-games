import { Projectile } from '/_assets/49f7e5b0786c79c50df0.js';

export class Player {
    constructor(game) {
        this.game = game;
        this.width = 60;
        this.height = 40;
        this.x = this.game.width / 2 - this.width / 2;
        this.y = this.game.height - this.height - 20;
        this.speed = 7;

        this.lastShotTime = 0;
        this.shotInterval = 500; // ms
    }

    update(keys) {
        // Horizontal Movement
        if (keys.ArrowLeft || keys.KeyA) {
            this.x -= this.speed;
        }
        if (keys.ArrowRight || keys.KeyD) {
            this.x += this.speed;
        }

        // Boundaries
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;
    }

    draw(ctx) {
        ctx.save();

        // Cute spaceship body
        ctx.fillStyle = '#a3d9ff'; // Soft Blue
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#a3d9ff';

        // Main body (rounded triangle-ish)
        ctx.beginPath();
        ctx.moveTo(this.x + this.width / 2, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        ctx.lineTo(this.x, this.y + this.height);
        ctx.closePath();
        ctx.fill();

        // Cockpit window
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y + this.height / 2, 10, 0, Math.PI * 2);
        ctx.fill();

        // Engine glow
        ctx.fillStyle = '#ff9fb2'; // Pink glow
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#ff9fb2';
        ctx.beginPath();
        ctx.moveTo(this.x + 15, this.y + this.height);
        ctx.lineTo(this.x + 25, this.y + this.height + 10);
        ctx.lineTo(this.x + 35, this.y + this.height);
        ctx.fill();

        ctx.restore();
    }

    shoot() {
        const now = Date.now();
        if (now - this.lastShotTime > this.shotInterval) {
            this.game.bullets.push(new Projectile(this.game, this.x + this.width / 2, this.y));
            this.lastShotTime = now;
            // Play sound (to be implemented)
            if (this.game.playSound) this.game.playSound('shoot');
        }
    }
}
