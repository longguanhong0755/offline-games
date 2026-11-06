import { Projectile } from '/_assets/49f7e5b0786c79c50df0.js';

export class Alien {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;

        this.markedForDeletion = false;

        // Animation
        this.bobOffset = Math.random() * Math.PI * 2;
    }

    update(speedX, speedY) {
        this.x += speedX;
        this.y += speedY;

        // Bobbing animation for "cute" effect
        // Just visual, doesn't affect hitbox usually, but we can animate local draw y
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = '#ff9fb2'; // Pastel Pink

        // Bobbing vertical offset
        const bobY = Math.sin(Date.now() / 300 + this.bobOffset) * 3;

        const drawX = this.x;
        const drawY = this.y + bobY;

        // Cute Alien Shape (Octopus-like or ghost-like)
        ctx.beginPath();

        // Head (Arc)
        ctx.arc(drawX + this.width / 2, drawY + this.height / 2 - 5, this.width / 2, Math.PI, 0);

        // Feet (Wavy line)
        ctx.lineTo(drawX + this.width, drawY + this.height);
        ctx.lineTo(drawX + this.width * 0.75, drawY + this.height - 5);
        ctx.lineTo(drawX + this.width * 0.5, drawY + this.height);
        ctx.lineTo(drawX + this.width * 0.25, drawY + this.height - 5);
        ctx.lineTo(drawX, drawY + this.height);

        ctx.closePath();

        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ff9fb2';
        ctx.fill();

        // Eyes
        ctx.fillStyle = '#2b213a'; // Dark purple eyes
        ctx.shadowBlur = 0;

        // Left Eye
        ctx.beginPath();
        ctx.arc(drawX + 12, drawY + 15, 4, 0, Math.PI * 2);
        ctx.fill();

        // Right Eye
        ctx.beginPath();
        ctx.arc(drawX + 28, drawY + 15, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }
}
