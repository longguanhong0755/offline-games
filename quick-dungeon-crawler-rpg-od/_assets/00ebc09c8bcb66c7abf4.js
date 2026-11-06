// Volume settings
let volume;
if (JSON.parse(localStorage.getItem("volumeData")) == undefined) {
    volume = {
        master: 1,
        bgm: 0.4,
        sfx: 1
    }
} else {
    volume = JSON.parse(localStorage.getItem("volumeData"));
}

// Font size & family settings
const DEFAULT_FONT_KEY = 'germania';
const FONT_FAMILY_OPTIONS = [
    { key: 'germania', label: 'Germania One', stack: '"Germania One", Georgia, "Times New Roman", serif' },
    { key: 'futura', label: 'Futura', stack: 'Futura, Trebuchet MS, Arial, sans-serif' },
];

const FONT_FAMILY_MAP = FONT_FAMILY_OPTIONS.reduce((map, option) => {
    map[option.key] = option.stack;
    return map;
}, {});

// expose options for other scripts (settings modal)
window.fontFamilyOptions = FONT_FAMILY_OPTIONS;
window.defaultFontFamilyKey = DEFAULT_FONT_KEY;

let fontSize = JSON.parse(localStorage.getItem("fontSizeData"));
if (!fontSize || typeof fontSize !== 'object') {
    fontSize = {
        scale: 1.0,
        family: DEFAULT_FONT_KEY
    };
} else {
    if (typeof fontSize.scale !== 'number') {
        fontSize.scale = 1.0;
    }
    if (!fontSize.family || !FONT_FAMILY_MAP[fontSize.family]) {
        fontSize.family = DEFAULT_FONT_KEY;
    }
}

// Apply font size settings on load
const applyFontSize = () => {
    const selectedStack = FONT_FAMILY_MAP[fontSize.family] || FONT_FAMILY_MAP[DEFAULT_FONT_KEY];
    document.documentElement.style.setProperty('--font-scale', fontSize.scale);
    document.documentElement.style.setProperty('--font-family-base', selectedStack);
    if (fontSize.family && fontSize.family !== DEFAULT_FONT_KEY) {
        document.body.style.fontFamily = selectedStack;
    } else {
        document.body.style.removeProperty('font-family');
    }
}


// BGM
let bgmDungeon;
let bgmBattleMain;
let bgmBattleBoss;

// SFX
let sfxEncounter;
let sfxCombatEnd;
let sfxAttack;
let sfxLvlUp;
let sfxConfirm;
let sfxDecline;
let sfxDeny;
let sfxEquip;
let sfxUnequip;
let sfxOpen;
let sfxPause;
let sfxUnpause;
let sfxSell;
let sfxItem;
let sfxBuff;

const setVolume = () => {
    // ===== BGM =====
    bgmDungeon = new Howl({
        src: ['./_assets/37a54f10f2a3ae7c0ece.webm'],
        volume: volume.bgm * volume.master,
        loop: true
    });

    bgmBattleMain = new Howl({
        src: ['./_assets/11c5d413a7d57d4332b3.webm'],
        volume: volume.bgm * volume.master,
        loop: true
    });

    bgmBattleBoss = new Howl({
        src: ['./_assets/5dd4b1ca74268d5bba84.webm'],
        volume: volume.bgm * volume.master,
        loop: true
    });

    // ===== SFX =====
    sfxEncounter = new Howl({
        src: ['./_assets/49085650d20e007e70c2.webm'],
        volume: volume.sfx * volume.master
    });

    sfxCombatEnd = new Howl({
        src: ['./_assets/8036a99276cda5556aac.webm'],
        volume: volume.sfx * volume.master
    });

    sfxAttack = new Howl({
        src: ['./_assets/0bbf6675caac0a19c863.webm'],
        volume: volume.sfx * volume.master
    });

    sfxLvlUp = new Howl({
        src: ['./_assets/5b6ef818c3c2df0073b4.webm'],
        volume: volume.sfx * volume.master
    });

    sfxConfirm = new Howl({
        src: ['./_assets/78a836b2f31b0e9e42bf.webm'],
        volume: volume.sfx * volume.master
    });

    sfxDecline = new Howl({
        src: ['./_assets/fcc92488683662011e4d.webm'],
        volume: volume.sfx * volume.master
    });

    sfxDeny = new Howl({
        src: ['./_assets/898bf4cc7261ef0dd325.webm'],
        volume: volume.sfx * volume.master
    });

    sfxEquip = new Howl({
        src: ['./_assets/c99cb7bc318da028d27e.webm'],
        volume: volume.sfx * volume.master
    });

    sfxUnequip = new Howl({
        src: ['./_assets/9b35cba42537da0d4e57.webm'],
        volume: volume.sfx * volume.master
    });

    sfxOpen = new Howl({
        src: ['./_assets/b00e88bba7334186df0c.webm'],
        volume: volume.sfx * volume.master
    });

    sfxPause = new Howl({
        src: ['./_assets/8e24e20d63cecdcfe240.webm'],
        volume: volume.sfx * volume.master
    });

    sfxUnpause = new Howl({
        src: ['./_assets/1565aa9bee8c05fbc04b.webm'],
        volume: volume.sfx * volume.master
    });

    sfxSell = new Howl({
        src: ['./_assets/9d66267f37a6d30a2238.webm'],
        volume: volume.sfx * volume.master
    });

    sfxItem = new Howl({
        src: ['./_assets/19d82229708655ce5a0f.webm'],
        volume: volume.sfx * volume.master
    });

    sfxBuff = new Howl({
        src: ['./_assets/451052e385ed949b69d1.webm'],
        volume: volume.sfx * volume.master
    });
}

document.querySelector("#title-screen").addEventListener("click", function () {
    setVolume();
    sfxOpen.play();
});

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        Howler.mute(true);
    } else {
        Howler.mute(false);
    }
});
