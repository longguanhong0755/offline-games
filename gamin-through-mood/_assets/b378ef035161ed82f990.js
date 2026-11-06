// --- 1. CORE CANVAS & CONTEXT SETUP ---
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
function handleWindowResize() {
    resizeCanvas();
    if (gameActive) updatePlayerSize();
}
window.addEventListener("resize", handleWindowResize);
resizeCanvas();

// --- 2. AUDIO ENGINE & LOOP CONTROLLER ---
const music = document.getElementById("gameMusic");

const clipStartTime = 10;
const clipDuration = 30;
const clipEndTime = clipStartTime + clipDuration;

music.addEventListener("timeupdate", () => {
    if (music.currentTime >= clipEndTime) {
        music.currentTime = clipStartTime;
    }
});

music.addEventListener("ended", () => {
    music.currentTime = clipStartTime;
    music.play().catch(() => {});
});

function playGameMusic() {
    if (!currentTheme.musicSrc) return;
    music.src = currentTheme.musicSrc;
    music.load();
    music.currentTime = clipStartTime;
    music.play().catch(error => {
        console.warn("Audio playback delayed until user interaction.", error);
    });
}

function stopGameMusic() {
    music.pause();
}

// Procedural sound effects (Web Audio API)
let audioCtx = null;
function ensureAudioCtx() {
    if (!audioCtx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        audioCtx = new AC();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
}
function playTone(freq, duration, type, startGain) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(startGain, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}
function playJumpSFX() { playTone(520, 0.12, "square", 0.15); }
function playCoinSFX() {
    playTone(880, 0.09, "triangle", 0.12);
    setTimeout(() => playTone(1180, 0.08, "triangle", 0.1), 40);
}
function playHitSFX() { playTone(120, 0.25, "sawtooth", 0.18); }

// --- 3. INTRO OVERLAY TRANSLATIONS ---
let introTimer = 0;
const introFadeFrames = 30;
const introHoldFrames = 90;
const introFadeOutFrames = 30;
const introTotalFrames = introFadeFrames + introHoldFrames + introFadeOutFrames;

const introLines = {
  fantasy: "Leap over what stands in her way.",
  horror: "Jump over the pile of skulls.",
  lofi: "Hop over the cravings. Keep going.",
  scifi: "Dodge the debris. Get him home."
};

function drawIntroLine() {
  if (introTimer >= introTotalFrames) return;

  let alpha = 1;
  if (introTimer < introFadeFrames) {
    alpha = introTimer / introFadeFrames;
  } else if (introTimer > introFadeFrames + introHoldFrames) {
    const fadeOutProgress = introTimer - (introFadeFrames + introHoldFrames);
    alpha = 1 - (fadeOutProgress / introFadeOutFrames);
  }

  ctx.save();
  ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
  ctx.fillStyle = "#ffffff";
  ctx.font = "20px 'Press Start 2P', 'Segoe UI', sans-serif";
  ctx.textAlign = "center";
  ctx.shadowColor = "rgba(0,0,0,0.5)";
  ctx.shadowBlur = 8;
  ctx.fillText(introLines[selectedTheme], canvas.width / 2, canvas.height * 0.25);
  ctx.restore();

  introTimer++;
}

// --- 4. THEME CONFIGURATIONS ---
// Speeds have been tuned down to ensure reactable, comfortable gameplay
const gameConfig = {
  fantasy: {
    gravity: 0.65,
    jumpForce: -15,
    speed: 7.5,
    bgColor: "#2d1b4e",
    obstacleSrc: "assets/fantasyhurdle.png",
    goalSrc: "assets/fantasygoal.png",
    coinSrc: "assets/coinsprite.png",
    spriteSrc: "assets/princessrun.png",
    musicSrc: "assets/fantasymusic.mp3",
    totalFrames: 6,
    animSpeed: 6,
    widthRatio: 0.09,
    minWidth: 80,
    maxWidth: 150
  },
  horror: {
    gravity: 0.7,
    jumpForce: -15.5,
    speed: 8.5,
    bgColor: "#131313",
    obstacleSrc: "assets/ghosthurdle.png",
    goalSrc: "assets/ghostgoal.png",
    coinSrc: "assets/coinsprite.png",
    spriteSrc: "assets/ghostrun.png",
    musicSrc: "assets/horrormusic.mp3",
    totalFrames: 7,
    animSpeed: 5,
    widthRatio: 0.095,
    minWidth: 85,
    maxWidth: 160
  },
  lofi: {
    gravity: 0.55,
    jumpForce: -13.5,
    speed: 6.5,
    bgColor: "#3d2a25",
    obstacleSrc: "assets/lofihurdle.png",
    goalSrc: "assets/lofigoal.png",
    coinSrc: "assets/coinsprite.png",
    spriteSrc: "assets/catrun.png",
    musicSrc: "assets/lofimusic.mp3",
    totalFrames: 6,
    animSpeed: 6,
    widthRatio: 0.11,
    minWidth: 90,
    maxWidth: 170
  },
  scifi: {
    gravity: 0.5,
    jumpForce: -13,
    speed: 8.5,
    bgColor: "#0d1b2a",
    obstacleSrc: "assets/spacehurdle.png",
    goalSrc: "assets/spacegoal.png",
    coinSrc: "assets/coinsprite.png",
    spriteSrc: "assets/astrorun.png",
    musicSrc: "assets/scifimusic.mp3",
    totalFrames: 8,
    animSpeed: 5,
    widthRatio: 0.095,
    minWidth: 85,
    maxWidth: 160
  }
};

// --- 5. GAME STATE TRACKING VARIABLES ---
let selectedTheme = "fantasy";
let currentTheme = gameConfig.fantasy;
let gameActive = false;
let obstaclesAvoided = 0;
const totalHurdlesToWin = 12;
let gameWon = false;
let obstacles = [];
let coins = [];
let coinsCollected = 0;
let distanceScore = 0;
let gameState = "playing";

let distanceSinceLastSpawn = 0;

// Spacing adapts dynamically to the screen resolution & speed
let nextGapPixels = 850;
function rollNextGap() {
    const progress = Math.min(obstaclesAvoided / totalHurdlesToWin, 1);
    const baseGap = canvas.width * 0.45;
    const randomVariation = Math.random() * 250;
    const difficultyTightening = progress * 100;
    return Math.max(500, baseGap + randomVariation - difficultyTightening);
}

function getSpeedMultiplier() {
    const rampProgress = Math.min(obstaclesAvoided / totalHurdlesToWin, 1);
    return 1 + rampProgress * 0.20; // Gradual 20% max acceleration
}

let goalTarget = {
    x: 0,
    y: 0,
    width: 120,
    height: 120,
    spawned: false,
    reached: false
};

let hitFlashTimer = 0;
const hitFlashDuration = 14;

function drawHitFlash() {
    if (hitFlashTimer > 0) {
        ctx.save();
        ctx.globalAlpha = (hitFlashTimer / hitFlashDuration) * 0.45;
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
        hitFlashTimer--;
    }
}

// Screen Shake
let screenShakeTimer = 0;
let screenShakeMagnitude = 0;
function triggerScreenShake(duration, magnitude) {
    screenShakeTimer = duration;
    screenShakeMagnitude = magnitude;
}

// Coin Particles
let coinParticles = [];
function spawnCoinBurst(x, y) {
    for (let i = 0; i < 6; i++) {
        coinParticles.push({
            x, y,
            vx: (Math.random() - 0.5) * 4,
            vy: -Math.random() * 3 - 1,
            life: 20,
            maxLife: 20
        });
    }
}
function updateAndDrawCoinParticles() {
    for (let i = coinParticles.length - 1; i >= 0; i--) {
        const p = coinParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15;
        p.life--;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
        ctx.fillStyle = "#FFD700";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        if (p.life <= 0) coinParticles.splice(i, 1);
    }
}

// Pause Toggle
let paused = false;
function togglePause() {
    if (!gameActive || gameState === "won") return;
    paused = !paused;
    if (paused) music.pause();
    else music.play().catch(() => {});
}

// Scrolling Ground + Parallax
let groundScrollOffset = 0;
function drawGroundLine(effectiveSpeed) {
    const groundY = canvas.height * 0.8;
    groundScrollOffset = (groundScrollOffset - effectiveSpeed) % 40;
    ctx.save();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
    ctx.lineWidth = 3;
    ctx.setLineDash([24, 16]);
    ctx.lineDashOffset = groundScrollOffset;
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(canvas.width, groundY);
    ctx.stroke();
    ctx.restore();
}

let parallaxOffset = 0;
function drawParallaxLayer(effectiveSpeed) {
    parallaxOffset -= effectiveSpeed * 0.3;
    const spacing = 220;
    const y = canvas.height * 0.8;
    ctx.save();
    ctx.globalAlpha = 0.16;
    ctx.fillStyle = "#ffffff";
    const wrapped = ((parallaxOffset % spacing) + spacing) % spacing;
    for (let x = -wrapped - spacing; x < canvas.width + spacing; x += spacing) {
        ctx.beginPath();
        ctx.arc(x, y, 40, Math.PI, 0);
        ctx.fill();
    }
    ctx.restore();
}

// --- 6. ADVANCED PARTICLES & ATMOSPHERE ---
let atmoFrame = 0;

const starField = [];
for (let i = 0; i < 60; i++) {
  starField.push({
    x: Math.random() * 1920,
    y: Math.random() * 600,
    radius: Math.random() * 1.5 + 0.5,
    phase: Math.random() * Math.PI * 2,
    speed: 0.02 + Math.random() * 0.02
  });
}
function drawStars() {
  ctx.save();
  starField.forEach(star => {
    const twinkle = (Math.sin(atmoFrame * star.speed + star.phase) + 1) / 2;
    ctx.globalAlpha = 0.3 + twinkle * 0.7;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(star.x % canvas.width, star.y % canvas.height, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

const fireflyField = [];
for (let i = 0; i < 40; i++) {
  fireflyField.push({
    x: Math.random() * 1920,
    y: Math.random() * 700,
    driftX: (Math.random() - 0.5) * 0.4,
    driftY: (Math.random() - 0.5) * 0.4,
    phase: Math.random() * Math.PI * 2,
    color: Math.random() > 0.5 ? "230,190,255" : "255,220,150"
  });
}
function drawFireflies() {
  ctx.save();
  fireflyField.forEach(f => {
    f.x += f.driftX;
    f.y += f.driftY;
    if (f.x < 0) f.x = canvas.width; if (f.x > canvas.width) f.x = 0;
    if (f.y < 0) f.y = canvas.height * 0.8; if (f.y > canvas.height * 0.8) f.y = 0;
    const pulse = (Math.sin(atmoFrame * 0.03 + f.phase) + 1) / 2;
    const alpha = 0.4 + pulse * 0.6;
    ctx.fillStyle = `rgba(${f.color}, ${alpha})`;
    ctx.shadowColor = `rgba(${f.color}, 0.8)`;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(f.x, f.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

let flickerActive = false;
let flickerTimer = 0;
function drawFlicker() {
  if (!flickerActive && Math.random() < 0.004) {
    flickerActive = true;
    flickerTimer = 4 + Math.floor(Math.random() * 4);
  }
  if (flickerActive) {
    ctx.save();
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    flickerTimer--;
    if (flickerTimer <= 0) flickerActive = false;
  }
}

const dustField = [];
for (let i = 0; i < 12; i++) {
  dustField.push({
    x: Math.random() * 1920,
    y: Math.random() * 700,
    radius: Math.random() * 4 + 3,
    driftX: (Math.random() - 0.5) * 0.15,
    driftY: -0.1 - Math.random() * 0.1,
    phase: Math.random() * Math.PI * 2
  });
}
function drawDust() {
  ctx.save();
  ctx.filter = "blur(2px)";
  dustField.forEach(d => {
    d.x += d.driftX;
    d.y += d.driftY;
    if (d.y < 0) d.y = canvas.height * 0.8;
    if (d.x < 0) d.x = canvas.width; if (d.x > canvas.width) d.x = 0;
    const pulse = (Math.sin(atmoFrame * 0.02 + d.phase) + 1) / 2;
    ctx.globalAlpha = 0.25 + pulse * 0.25;
    ctx.fillStyle = "#ffd6a5";
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}
// --- HORROR: COHESIVE ASH & GHOST EMBERS ---
const horrorWispsField = [];
for (let i = 0; i < 35; i++) {
  horrorWispsField.push({
    x: Math.random() * 1920,
    y: Math.random() * 700,
    radius: Math.random() * 2.5 + 1.0, // Smaller, subtle specks
    speedY: -0.2 - Math.random() * 0.3,
    swaySpeed: 0.015 + Math.random() * 0.02,
    phase: Math.random() * Math.PI * 2,
    // Cohesive dark palette: Pale Ghostly Grey, Deep Wine Red, Ash Charcoal
    color: Math.random() > 0.5 
      ? "210, 200, 215"  // Pale ghost dust
      : Math.random() > 0.5 
        ? "140, 40, 50"   // Dark muted wine/blood
        : "180, 160, 170"  // Soft ash
  });
}

function drawHorrorWisps() {
  ctx.save();
  horrorWispsField.forEach(w => {
    w.y += w.speedY;
    w.x += Math.sin(atmoFrame * w.swaySpeed + w.phase) * 0.4;
    
    if (w.y < -10) {
      w.y = canvas.height * 0.8;
      w.x = Math.random() * canvas.width;
    }

    const pulse = (Math.sin(atmoFrame * 0.03 + w.phase) + 1) / 2;
    // Soft, subtle transparency so it layers smoothly over the background
    const alpha = 0.15 + pulse * 0.35; 

    ctx.fillStyle = `rgba(${w.color}, ${alpha})`;
    ctx.shadowColor = `rgba(${w.color}, 0.3)`;
    ctx.shadowBlur = 4; // Softer, lower glow to keep it clean
    ctx.beginPath();
    ctx.arc((w.x % canvas.width + canvas.width) % canvas.width, w.y, w.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

function drawAtmosphereBackground() {
  atmoFrame++;
  if (selectedTheme === "scifi") drawStars();
  else if (selectedTheme === "fantasy") drawFireflies();
  else if (selectedTheme === "lofi") drawDust();
  
}

function drawAtmosphereOverlay() {
  if (selectedTheme === "horror") drawFlicker();
}

// --- 7. IMAGE LOADER PIPELINE ---
// Note: no bgImage/bgLoaded pipeline here — themes render via bgColor only.
// If you add background art per theme later, add a `bgSrc` field to gameConfig
// and reintroduce an Image-loading pair the same way obs/goal/coin do below.

const obsImage = new Image();
let obsLoaded = false;
obsImage.onload = () => { obsLoaded = true; };

const goalImage = new Image();
let goalLoaded = false;
goalImage.onload = () => { goalLoaded = true; };

const coinImage = new Image();
let coinLoaded = false;
coinImage.onload = () => { coinLoaded = true; };

// --- 8. THE PLAYER TARGET SYSTEM ---
function computePlayerWidth(theme) {
    return Math.max(theme.minWidth, Math.min(theme.maxWidth, canvas.width * theme.widthRatio));
}

function computePlayerX() {
    return Math.max(40, Math.min(150, canvas.width * 0.08));
}

function updatePlayerSize() {
    player.width = computePlayerWidth(currentTheme);
    if (player.spriteLoaded) {
        player.height = player.width * (player.frameHeight / player.frameWidth);
    }
}

let coyoteTimer = 0;
const coyoteFrames = 8;
let jumpBufferTimer = 0;
const jumpBufferFrames = 8;
function requestJump() {
    jumpBufferTimer = jumpBufferFrames;
}

const player = {
  x: 100,
  y: 0,
  width: 128,
  height: 128,
  velocityY: 0,
  isGrounded: false,
  sprite: new Image(),
  frameWidth: 128,
  frameHeight: 128,
  totalFrames: 8,
  currentFrame: 0,
  animTimer: 0,
  animSpeed: 5,
  spriteLoaded: false,
  squashTimer: 0,
  squashDuration: 8,

  init() {
      this.spriteLoaded = false;
      this.sprite.onload = () => {
          this.spriteLoaded = true;
          this.frameWidth = this.sprite.width / this.totalFrames;
          this.frameHeight = this.sprite.height;
          this.height = this.width * (this.frameHeight / this.frameWidth);
      };
      this.sprite.src = currentTheme.spriteSrc;
      this.totalFrames = currentTheme.totalFrames;
      this.animSpeed = currentTheme.animSpeed;
      this.width = computePlayerWidth(currentTheme);
      this.x = computePlayerX();
      this.currentFrame = 0;
      this.animTimer = 0;
      this.squashTimer = 0;
  },

  getHitbox() {
      return { x: this.x + (this.width * 0.3), y: this.y + (this.height * 0.15), width: this.width * 0.4, height: this.height * 0.75 };
  },

  update() {
    const wasGrounded = this.isGrounded;

    this.velocityY += currentTheme.gravity;
    this.y += this.velocityY;

    const groundY = canvas.height * 0.8;
    const floorY = groundY - this.height;

    if (this.y >= floorY) {
      this.y = floorY;
      if (!wasGrounded) {
          this.squashTimer = this.squashDuration;
      }
      this.velocityY = 0;
      this.isGrounded = true;
    }

    if (this.isGrounded) {
        coyoteTimer = coyoteFrames;
    } else if (coyoteTimer > 0) {
        coyoteTimer--;
    }

    if (this.squashTimer > 0) this.squashTimer--;

    if (goalTarget.reached) {
        this.currentFrame = 0;
        return;
    }

    if (this.isGrounded) {
      this.animTimer++;
      if (this.animTimer >= this.animSpeed) {
        this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
        this.animTimer = 0;
      }
    } else {
      this.currentFrame = Math.floor(this.totalFrames / 2);
    }
  },

  draw() {
    ctx.save();
    if (this.squashTimer > 0) {
      const t = this.squashTimer / this.squashDuration;
      const squashY = 1 - 0.15 * t;
      const squashX = 1 + 0.12 * t;
      const originX = this.x + this.width / 2;
      const originY = this.y + this.height;
      ctx.translate(originX, originY);
      ctx.scale(squashX, squashY);
      ctx.translate(-originX, -originY);
    }

    if (this.spriteLoaded) {
      const sx = this.currentFrame * this.frameWidth;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(this.sprite, sx, 0, this.frameWidth, this.frameHeight, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    ctx.restore();
  }
};

// --- 9. ENTITY DESIGN ENGINE ---
class Obstacle {
  constructor(type) {
    this.type = type || "normal";

    // 1. Calculate size as a percentage of screen width (5.5% of canvas width)
    // Clamp between 32px (mobile minimum) and 65px (desktop maximum)
    let responsiveBaseWidth = Math.max(32, Math.min(65, canvas.width * 0.055));

    if (this.type === "wide") responsiveBaseWidth *= 1.4;

    this.width = responsiveBaseWidth + (Math.random() * 6 - 3);

    // 2. Keep height proportional to width
    this.height = (this.type === "tall") ? this.width * 1.25 : this.width;

    this.x = canvas.width;
    this.y = (canvas.height * 0.8) - this.height;
  }

  update(effectiveSpeed) {
    if (!goalTarget.reached) this.x -= effectiveSpeed;
  }
  draw() {
    if (obsLoaded) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(obsImage, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = "#ff5555";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}

function rollObstacleType(progress) {
    if (progress < 0.25) return "normal";
    const r = Math.random();
    if (r < 0.55) return "normal";
    if (r < 0.82) return "wide";
    return "tall";
}

class Coin {
  constructor(startX, index, totalInGroup, archPeakHeight) {
    this.width = 36;
    this.height = 36;
    this.x = startX + (index * 60);
    const groundY = canvas.height * 0.8;
    const baseFloorY = groundY - this.height - 40;
    const angle = (index / (totalInGroup - 1)) * Math.PI;
    this.y = baseFloorY - (Math.sin(angle) * archPeakHeight);

    this.totalFrames = 6;
    this.currentFrame = 0;
    this.animTimer = 0;
    this.animSpeed = 5;
  }

  // Magnetic expanded hitbox makes collection effortless during jump arcs
  getHitbox() {
    return {
      x: this.x - 25,
      y: this.y - 25,
      width: this.width + 50,
      height: this.height + 50
    };
  }

  update(effectiveSpeed) {
    if (!goalTarget.reached) {
        this.x -= effectiveSpeed;
        if (coinLoaded) {
          this.animTimer++;
          if (this.animTimer >= this.animSpeed) {
            this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
            this.animTimer = 0;
          }
        }
    }
  }

  draw() {
    if (coinLoaded) {
      ctx.imageSmoothingEnabled = false;
      const fw = coinImage.width / this.totalFrames;
      const sx = this.currentFrame * fw;
      ctx.drawImage(coinImage, sx, 0, fw, coinImage.height, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = "#FFD700";
      ctx.beginPath();
      ctx.arc(this.x + this.width/2, this.y + this.height/2, this.width/2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

// --- 10. COLLISION MAPS AND RESET UTILS ---
function checkCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

function resetGame() {
  obstacles = [];
  coins = [];
  coinParticles = [];
  coinsCollected = 0;
  distanceScore = 0;
  obstaclesAvoided = 0;
  distanceSinceLastSpawn = 0;
  nextGapPixels = rollNextGap();
  gameWon = false;

  goalTarget.spawned = false;
  goalTarget.reached = false;

  player.y = (canvas.height * 0.8) - player.height;
  player.velocityY = 0;
  player.isGrounded = false;
  player.squashTimer = 0;

  screenShakeTimer = 0;
  jumpBufferTimer = 0;
  coyoteTimer = 0;
}

// --- HIT HANDLING: instant full reset on hit ---
function loseLife() {
  hitFlashTimer = hitFlashDuration;
  triggerScreenShake(14, 6);
  playHitSFX();

  // Instant full reset on hit: wipe score, coins, and hurdle progress
  resetGame();
}


// --- 11. MAIN ENGINE RENDERING LOOP ---
function gameLoop() {
  if (!gameActive) return;

  if (paused) {
      ctx.save();
      ctx.fillStyle = "rgba(0,0,0,0.55)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 22px 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("PAUSED — press P to resume", canvas.width / 2, canvas.height / 2);
      ctx.restore();
      requestAnimationFrame(gameLoop);
      return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  if (screenShakeTimer > 0) {
      const dx = (Math.random() - 0.5) * screenShakeMagnitude;
      const dy = (Math.random() - 0.5) * screenShakeMagnitude;
      ctx.translate(dx, dy);
      screenShakeTimer--;
  }

  ctx.fillStyle = currentTheme.bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawAtmosphereBackground();

  const effectiveSpeed = currentTheme.speed * (canvas.width / 1280) * getSpeedMultiplier();

  drawParallaxLayer(effectiveSpeed);
  drawGroundLine(effectiveSpeed);

  player.update();

  if (jumpBufferTimer > 0) {
    jumpBufferTimer--;
    if (!goalTarget.reached && (player.isGrounded || coyoteTimer > 0)) {
      player.velocityY = currentTheme.jumpForce;
      player.isGrounded = false;
      coyoteTimer = 0;
      jumpBufferTimer = 0;
      playJumpSFX();
    }
  }

  player.draw();
  drawIntroLine();

  // Score increments based on distance survived
  if (!goalTarget.reached) {
      distanceScore += effectiveSpeed * 0.1;
  }

  // Spawning logic
  if (obstaclesAvoided < totalHurdlesToWin) {
    distanceSinceLastSpawn += effectiveSpeed;
    if (distanceSinceLastSpawn >= nextGapPixels) {
      const progress = Math.min(obstaclesAvoided / totalHurdlesToWin, 1);
      const type = rollObstacleType(progress);
      const first = new Obstacle(type);
      obstacles.push(first);

      let extraOffset = 0;

      const useDouble = progress > 0.4 && Math.random() < 0.20;
      if (useDouble) {
          const second = new Obstacle("normal");
          const gapBetweenDoubles = 320 + Math.random() * 40;
          second.x = first.x + first.width + gapBetweenDoubles;
          obstacles.push(second);
          extraOffset = first.width + gapBetweenDoubles + second.width;
      }

      const coinGroupSize = 5;
      const archStartX = first.x + (first.width / 2) - 120;
      const archPeakHeight = 65 + Math.random() * 15;
      for (let i = 0; i < coinGroupSize; i++) {
          coins.push(new Coin(archStartX, i, coinGroupSize, archPeakHeight));
      }

      distanceSinceLastSpawn = -extraOffset;
      nextGapPixels = rollNextGap();
    }
  }
  else if (obstacles.length === 0 && !gameWon) {
      gameWon = true;
      // Goal dimensions scale dynamically with screen width
      const responsiveGoalWidth = Math.max(60, Math.min(120, canvas.width * 0.10));
      goalTarget.width = responsiveGoalWidth;
      goalTarget.height = responsiveGoalWidth * 1.1;
      goalTarget.x = canvas.width;
      goalTarget.y = (canvas.height * 0.8) - goalTarget.height;
      goalTarget.spawned = true;
  }
  // Goal logic: Guaranteed win detection even if jumping over the goal line
  if (goalTarget.spawned) {
      if (!goalTarget.reached) {
          goalTarget.x -= effectiveSpeed;
          if (checkCollision(player.getHitbox(), goalTarget) || player.x + player.width >= goalTarget.x + 20) {
              goalTarget.reached = true;
              enterWinState();
          }
      }

      if (goalLoaded) {
          ctx.imageSmoothingEnabled = false;
          ctx.drawImage(goalImage, goalTarget.x, goalTarget.y, goalTarget.width, goalTarget.height);
      } else {
          ctx.fillStyle = "#FFD700";
          ctx.fillRect(goalTarget.x, goalTarget.y, goalTarget.width, goalTarget.height);
      }

      if (goalTarget.reached) {
          handleGameWin();
      }
  }

  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].update(effectiveSpeed);
    obstacles[i].draw();
    if (checkCollision(player.getHitbox(), obstacles[i])) {
        loseLife();
    }
    if (obstacles[i] && obstacles[i].x + obstacles[i].width < 0) {
      obstacles.splice(i, 1);
      obstaclesAvoided++;
    }
  }

  for (let i = coins.length - 1; i >= 0; i--) {
    coins[i].update(effectiveSpeed);
    coins[i].draw();
    if (checkCollision(player.getHitbox(), coins[i].getHitbox())) {
      coinsCollected++;
      spawnCoinBurst(coins[i].x + coins[i].width / 2, coins[i].y + coins[i].height / 2);
      playCoinSFX();
      coins.splice(i, 1);
      continue;
    }
    if (coins[i] && coins[i].x + coins[i].width < 0) coins.splice(i, 1);
  }
  updateAndDrawCoinParticles();

  drawAtmosphereOverlay();
  drawHitFlash();

  // HUD: Distance Score + Coin Count
  if (gameState !== "won") {
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 20px 'Segoe UI', sans-serif";

    ctx.textAlign = "right";
    const formattedScore = String(Math.floor(distanceScore + coinsCollected * 50)).padStart(5, '0');
    ctx.fillText(`SCORE: ${formattedScore}  |  ✨ x${coinsCollected}`, canvas.width - 40, 50);
  }
  ctx.restore();

  requestAnimationFrame(gameLoop);
}

// --- 12. DYNAMIC ARCADE VICTORY SCREEN RENDERING ---
const winMessages = {
    fantasy: { title: "SHE WANT HER KINGDOM!!!", sub: "The princess returned to the throne safely.", confettiHueRange: [280, 340] },
    horror: { title: "BESTIES REUNITE!!!", sub: "Let's give them alone time to gossip", confettiHueRange: [90, 140] },
    lofi: { title: "CAT AND CAPY DUO!!", sub: "Cat and Capy equals to happy nappy!", confettiHueRange: [25, 45] },
    scifi: { title: "HOME, SWEET HOME", sub: "The astronaut reached here safely", confettiHueRange: [180, 220] }
};

let winAnimFrame = 0;
let winButtons = { restart: null, menu: null };

function enterWinState() {
    winAnimFrame = 0;
    gameState = "won";
}

function handleGameWin() {
    winAnimFrame++;
    const currentWinText = winMessages[selectedTheme] || { title: "🎉 LEVEL COMPLETED!", sub: "GOAL REACHED!", confettiHueRange: [0, 360] };

    const baseW = 480;
    const scale = Math.min(canvas.width / baseW, 1.4);
    const titleSize = Math.max(12, Math.round(20 * scale));
    const subSize = Math.max(8, Math.round(10 * scale));
    const scoreSize = Math.max(9, Math.round(12 * scale));

    const hue = (winAnimFrame * 3) % 360;
    const neonColor = `hsl(${hue}, 100%, 65%)`;

    ctx.textAlign = "center";
    let fittedTitleSize = titleSize;
    ctx.font = `normal ${fittedTitleSize}px 'Press Start 2P', monospace`;
    while (ctx.measureText(currentWinText.title).width > canvas.width * 0.9 && fittedTitleSize > 8) {
        fittedTitleSize -= 1;
        ctx.font = `normal ${fittedTitleSize}px 'Press Start 2P', monospace`;
    }

    const titleY = canvas.height / 3;
    const shadowOffset = Math.max(2, Math.round(4 * scale));

    ctx.fillStyle = "#2b1c19";
    ctx.fillText(currentWinText.title, canvas.width / 2 + shadowOffset, titleY + shadowOffset);
    ctx.fillStyle = neonColor;
    ctx.fillText(currentWinText.title, canvas.width / 2, titleY);

    const bounceOffset = Math.sin(winAnimFrame * 0.08) * (6 * scale);
    const subTextY = titleY + (50 * scale) + bounceOffset;

    ctx.font = `normal ${subSize}px 'Press Start 2P', monospace`;
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.fillText(currentWinText.sub, canvas.width / 2 + 2, subTextY + 2);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(currentWinText.sub, canvas.width / 2, subTextY);

    const scoreY = subTextY + (40 * scale);
    const totalScoreValue = Math.floor(distanceScore + coinsCollected * 50);
    ctx.font = `normal ${scoreSize}px 'Press Start 2P', monospace`;
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.fillText(`TOTAL SCORE: ${totalScoreValue}`, canvas.width / 2 + 2, scoreY + 2);
    ctx.fillStyle = "#eedfa2";
    ctx.fillText(`TOTAL SCORE: ${totalScoreValue}`, canvas.width / 2, scoreY);

    const [hueMin, hueMax] = currentWinText.confettiHueRange;
    const confettiY = titleY - (40 * scale);
    const confettiSpread = 100 * scale;

    for (let i = 0; i < 6; i++) {
        const seedX = Math.sin(winAnimFrame * 0.05 + i) * confettiSpread;
        const seedY = Math.cos(winAnimFrame * 0.03 + i) * (25 * scale);
        const pieceHue = hueMin + ((winAnimFrame * 2 + i * 40) % (hueMax - hueMin));
        ctx.fillStyle = `hsl(${pieceHue}, 90%, 60%)`;
        const size = Math.max(4, Math.round(6 * scale));
        ctx.fillRect(canvas.width / 2 + seedX - size / 2, confettiY + seedY, size, size);
    }

    drawWinButtons(scoreY, scale);
}

function drawWinButtons(scoreY, scale) {
    const btnW = 140 * scale;
    const btnH = 32 * scale;
    const gap = 16 * scale;
    const btnY = scoreY + (30 * scale);

    const restartX = canvas.width / 2 - btnW - gap / 2;
    const menuX = canvas.width / 2 + gap / 2;

    winButtons.restart = { x: restartX, y: btnY, w: btnW, h: btnH };
    winButtons.menu = { x: menuX, y: btnY, w: btnW, h: btnH };

    ctx.font = `normal ${Math.max(9, Math.round(10 * scale))}px 'Press Start 2P', monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    drawButton(winButtons.restart, "RESTART", "#4caf50");
    drawButton(winButtons.menu, "MENU", "#5c7cfa");
    ctx.textBaseline = "alphabetic";
}

function drawButton(box, label, color) {
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(box.x + 2, box.y + 2, box.w, box.h);
    ctx.fillStyle = color;
    ctx.fillRect(box.x, box.y, box.w, box.h);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.strokeRect(box.x, box.y, box.w, box.h);
    ctx.fillStyle = "#fff";
    ctx.fillText(label, box.x + box.w / 2, box.y + box.h / 2);
}

function checkWinButtonHit(x, y) {
    if (gameState !== "won") return;
    if (isInsideBox(x, y, winButtons.restart)) {
        restartGame();
    } else if (isInsideBox(x, y, winButtons.menu)) {
        goToMenu();
    }
}

function isInsideBox(x, y, box) {
    if (!box) return false;
    return x >= box.x && x <= box.x + box.w && y >= box.y && y <= box.y + box.h;
}

function restartGame() {
    gameState = "playing";
    paused = false;
    canvas.style.cursor = "none";

    music.volume = 1.0;
    playGameMusic();

    resetGame();
    introTimer = 0;
}

function goToMenu() {
    gameState = "playing";
    gameActive = false;
    paused = false;
    canvas.style.cursor = "default";

    // Hide the in-game button when back on the main menu screen
    const menuBtn = document.getElementById("in-game-menu-btn");
    if (menuBtn) menuBtn.style.display = "none";

    stopGameMusic();
    resetGame();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    menuScreen.classList.remove("hidden");
}


// --- 13. INTERACTION DETECTORS & MOUSE HOVER CONTROLLERS ---
canvas.addEventListener("click", handleWinClick);
function handleWinClick(e) {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    checkWinButtonHit(x, y);
}

canvas.addEventListener("mousemove", (e) => {
    if (gameState !== "won") return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    if (isInsideBox(x, y, winButtons.restart) || isInsideBox(x, y, winButtons.menu)) {
        canvas.style.cursor = "pointer";
    } else {
        canvas.style.cursor = "default";
    }
});

const menuScreen = document.getElementById("menu-screen");
const startBtn = document.getElementById("start-btn");
const themeButtons = document.querySelectorAll(".theme-btn");

function updateDynamicBackground(theme) {
    menuScreen.classList.remove("bg-fantasy-dynamic", "bg-horror-dynamic", "bg-lofi-dynamic", "bg-scifi-dynamic");
    document.body.classList.remove("bg-fantasy-dynamic", "bg-horror-dynamic", "bg-lofi-dynamic", "bg-scifi-dynamic");

    menuScreen.classList.add(`bg-${theme}-dynamic`);
    document.body.classList.add(`bg-${theme}-dynamic`);
}

updateDynamicBackground(selectedTheme);

themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        themeButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        if (button.id === "btn-fantasy") selectedTheme = "fantasy";
        if (button.id === "btn-horror") selectedTheme = "horror";
        if (button.id === "btn-lofi") selectedTheme = "lofi";
        if (button.id === "btn-scifi") selectedTheme = "scifi";

        currentTheme = gameConfig[selectedTheme];
        updateDynamicBackground(selectedTheme);
    });
});
startBtn.addEventListener("click", () => {
    ensureAudioCtx();
    menuScreen.classList.add("hidden");

    // Show the in-game menu button safely
    const inGameMenuBtn = document.getElementById("in-game-menu-btn");
    if (inGameMenuBtn) {
        inGameMenuBtn.style.display = "flex";
    }

    currentTheme = gameConfig[selectedTheme];
    gameActive = true;
    gameState = "playing";
    paused = false;
    canvas.style.cursor = "none";

    player.init();

    obsLoaded = false;
    if (currentTheme.obstacleSrc !== "") obsImage.src = currentTheme.obstacleSrc;

    goalLoaded = false;
    if (currentTheme.goalSrc !== "") goalImage.src = currentTheme.goalSrc;

    coinLoaded = false;
    if (currentTheme.coinSrc !== "") coinImage.src = currentTheme.coinSrc;

    music.volume = 1.0;
    playGameMusic();

    resizeCanvas();
    resetGame();
    introTimer = 0;
    gameLoop();
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowUp") {
      ensureAudioCtx();
      if (!paused) requestJump();
  }
  if (e.code === "KeyP" || e.code === "Escape") {
      togglePause();
  }
});

canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    ensureAudioCtx();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * (canvas.width / rect.width);
    const y = (touch.clientY - rect.top) * (canvas.height / rect.height);

    if (gameState === "won") {
        checkWinButtonHit(x, y);
    } else if (!paused) {
        requestJump();
    }
});

canvas.addEventListener("mousedown", () => {
    ensureAudioCtx();
    if (gameState !== "won" && !paused) requestJump();
});

// --- HOVER DESCRIPTION & AUDIO PREVIEW ENGINE ---
const hoverStory = document.getElementById("hover-story");
const storyLines = {
    fantasy: "A princess lost her way home, the path scattered with magical clusters. Will she find her kingdom?",
    horror: "Ghosts have friends too. Help her find hers",
    lofi: "Capy is waiting. Don't get tempted by the cat food that'll slow you down",
    scifi: "Help him to get back to Earth"
};

function showStory(theme) {
    if (hoverStory) {
        hoverStory.textContent = storyLines[theme];
        hoverStory.classList.add("visible");
    }
}

showStory(selectedTheme);

themeButtons.forEach(button => {
    const theme = button.id.replace("btn-", "");

    button.addEventListener("mouseenter", () => {
        showStory(theme);

        if (gameActive) return;

        updateDynamicBackground(theme);

        const previewTrack = gameConfig[theme].musicSrc;
        if (previewTrack) {
            music.src = previewTrack;
            music.load();
            music.currentTime = clipStartTime;
            music.volume = 0.4;
            music.play().catch(() => console.log("Audio waiting for first click overlay interaction"));
        }
    });

    button.addEventListener("mouseleave", () => {
        showStory(selectedTheme);

        if (gameActive) return;

        updateDynamicBackground(selectedTheme);

        music.pause();
        music.currentTime = clipStartTime;
    });

    button.addEventListener("focus", () => showStory(theme));
    button.addEventListener("blur", () => showStory(selectedTheme));
});

const inGameMenuBtn = document.getElementById("in-game-menu-btn");
if (inGameMenuBtn) {
    inGameMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Stops character from jumping when clicking menu
        goToMenu();
    });
}