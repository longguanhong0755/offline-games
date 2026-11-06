// ===== CRUSH FACTORY — Clicker with Crusher Physics =====
const { Engine, Render, Runner, Bodies, Body, Composite, Events } = Matter;

// ===== MATERIALS (upgrades) =====
const MATERIALS = [
    { name: 'Stone', color: '#00ff88', cost: 15, cps: 0.1 },
    { name: 'Copper', color: '#ff6600', cost: 100, cps: 1 },
    { name: 'Iron', color: '#00ccff', cost: 1100, cps: 8 },
    { name: 'Silver', color: '#aaeeff', cost: 12000, cps: 47 },
    { name: 'Gold', color: '#ffee00', cost: 130000, cps: 260 },
    { name: 'Platinum', color: '#00ffff', cost: 1400000, cps: 1400 },
    { name: 'Mythril', color: '#dd44ff', cost: 20000000, cps: 7800 },
    { name: 'Obsidian', color: '#bb00ff', cost: 330000000, cps: 44000 },
    { name: 'Stardust', color: '#ff44ff', cost: 5100000000, cps: 260000 },
    { name: 'Dragonite', color: '#ff2200', cost: 75000000000, cps: 1500000 },
    { name: 'Void Crystal', color: '#00ffaa', cost: 1000000000000, cps: 10000000 },
    { name: 'Cosmic Ore', color: '#ff00dd', cost: 14000000000000, cps: 65000000 },
];

const UPGRADE_TEMPLATES = [
    { suffix: 'Processing', costMul: 10, desc: 'x2 efficiency', limit: 1 },
    { suffix: 'Refining', costMul: 50, desc: 'x2 efficiency', limit: 5 },
    { suffix: 'Enrichment', costMul: 500, desc: 'x2 efficiency', limit: 25 },
    { suffix: 'Mastery', costMul: 50000, desc: 'x2 efficiency', limit: 50 },
    { suffix: 'Perfection', costMul: 5000000, desc: 'x2 efficiency', limit: 100 },
    { suffix: 'Transcendence', costMul: 500000000, desc: 'x2 efficiency', limit: 150 },
    { suffix: 'Singularity', costMul: 50000000000, desc: 'x2 efficiency', limit: 200 },
];

// ===== CRUSHER THEMES (skin system) =====
const CRUSHER_THEMES = {
    default: {
        glow: '#aabbcc',
        gradStops: ['#99aabb', '#8899aa', '#778899', '#556677', '#334455', '#112233'],
        ringColor: 'rgba(160,180,200,0.2)',
        rimColor: 'rgba(140,160,180,0.4)',
        rimInner: 'rgba(160,180,200,0.2)',
        spokeColor: 'rgba(140,160,180,0.1)',
        toothFill: '#778899',
        toothGlow: '#aabbcc',
        toothHighlight: 'rgba(180,200,220,0.6)',
        toothEdge: 'rgba(120,140,160,0.35)',
        toothTip: 'rgba(210,220,230,0.5)',
        flashColor: '#99aabb',
        dustColor: '#556677',
        funnelGlow: '#445566',
        funnelStroke: 'rgba(100,120,140,0.4)',
        funnelFill: '#0a1018',
    },
    neonCrusher: {
        glow: '#00ccff',
        gradStops: ['#336688', '#2288aa', '#1177aa', '#0a5580', '#053355', '#011a2a'],
        ringColor: 'rgba(0,180,255,0.2)',
        rimColor: 'rgba(0,200,255,0.5)',
        rimInner: 'rgba(0,180,255,0.2)',
        spokeColor: 'rgba(0,150,255,0.1)',
        toothFill: '#0088cc',
        toothGlow: '#00ccff',
        toothHighlight: 'rgba(0,180,255,0.6)',
        toothEdge: 'rgba(0,200,255,0.35)',
        toothTip: 'rgba(140,220,255,0.5)',
        flashColor: '#00aaff',
        dustColor: '#2266aa',
        funnelGlow: '#0066cc',
        funnelStroke: 'rgba(0,150,255,0.4)',
        funnelFill: '#081828',
    },
    infernoSaw: {
        glow: '#ff6600',
        gradStops: ['#ffaa44', '#ee7722', '#cc5500', '#993300', '#661a00', '#330d00'],
        ringColor: 'rgba(255,150,50,0.25)',
        rimColor: 'rgba(255,120,0,0.6)',
        rimInner: 'rgba(255,150,50,0.25)',
        spokeColor: 'rgba(255,100,0,0.15)',
        toothFill: '#ee6600',
        toothGlow: '#ff8800',
        toothHighlight: 'rgba(255,180,80,0.7)',
        toothEdge: 'rgba(255,100,0,0.4)',
        toothTip: 'rgba(255,220,120,0.6)',
        flashColor: '#ff6600',
        dustColor: '#aa4400',
        funnelGlow: '#cc4400',
        funnelStroke: 'rgba(255,100,0,0.5)',
        funnelFill: '#1a0800',
        // Special visual flags
        sawBlade: true,
        extraSpokes: 16,
        doubleRim: true,
    },
    arcticGrinder: {
        glow: '#88ddff',
        gradStops: ['#cceeff', '#99ccee', '#6699bb', '#447799', '#225577', '#0a3355'],
        ringColor: 'rgba(130,210,255,0.2)',
        rimColor: 'rgba(150,220,255,0.6)',
        rimInner: 'rgba(130,210,255,0.25)',
        spokeColor: 'rgba(100,190,240,0.12)',
        toothFill: '#aaddff',
        toothGlow: '#88ddff',
        toothHighlight: 'rgba(180,230,255,0.8)',
        toothEdge: 'rgba(100,200,255,0.4)',
        toothTip: 'rgba(220,240,255,0.8)',
        flashColor: '#88ccff',
        dustColor: '#4488aa',
        funnelGlow: '#3377aa',
        funnelStroke: 'rgba(100,200,255,0.5)',
        funnelFill: '#081520',
        // Unique: octagonal body + many small spike teeth
        octoShape: true,
        manyTeeth: 16,
        extraSpokes: 8,
        doubleRim: true,
    },
    celestialGear: {
        glow: '#ffcc00',
        gradStops: ['#ffe680', '#ffcc44', '#ddaa22', '#bb8811', '#886600', '#553300'],
        ringColor: 'rgba(255,210,80,0.25)',
        rimColor: 'rgba(255,200,50,0.7)',
        rimInner: 'rgba(255,220,100,0.3)',
        spokeColor: 'rgba(255,180,30,0.15)',
        toothFill: '#ffcc33',
        toothGlow: '#ffdd55',
        toothHighlight: 'rgba(255,230,130,0.8)',
        toothEdge: 'rgba(255,180,30,0.5)',
        toothTip: 'rgba(255,240,180,0.8)',
        flashColor: '#ffcc00',
        dustColor: '#aa8800',
        funnelGlow: '#996600',
        funnelStroke: 'rgba(255,180,30,0.5)',
        funnelFill: '#1a1000',
        // Unique: gear-shaped body, no separate teeth, chromatic rainbow glow
        gearShape: true,
        gearTeeth: 12,
        gearToothDepth: 0.22,
        chromaGlow: true,
        extraSpokes: 6,
        doubleRim: true,
    },
    voidReaper: {
        glow: '#aa00ff',
        gradStops: ['#7733aa', '#6622aa', '#551199', '#440088', '#220055', '#110033'],
        ringColor: 'rgba(170,0,255,0.2)',
        rimColor: 'rgba(180,50,255,0.6)',
        rimInner: 'rgba(170,0,255,0.25)',
        spokeColor: 'rgba(140,0,220,0.12)',
        toothFill: '#9900dd',
        toothGlow: '#cc44ff',
        toothHighlight: 'rgba(200,100,255,0.7)',
        toothEdge: 'rgba(150,0,255,0.4)',
        toothTip: 'rgba(220,150,255,0.7)',
        flashColor: '#bb33ff',
        dustColor: '#6600aa',
        funnelGlow: '#7700cc',
        funnelStroke: 'rgba(150,0,255,0.5)',
        funnelFill: '#0d0018',
        // Unique visual flags
        hookTeeth: true,
        extraSpokes: 12,
        doubleRim: true,
        voidPulse: true,
    },
    rustyClassic: {
        glow: '#cc8844',
        gradStops: ['#bb8855', '#aa7744', '#886633', '#775522', '#553311', '#332200'],
        ringColor: 'rgba(180,120,60,0.2)',
        rimColor: 'rgba(200,140,70,0.5)',
        rimInner: 'rgba(180,120,60,0.2)',
        spokeColor: 'rgba(160,100,40,0.12)',
        toothFill: '#996633',
        toothGlow: '#cc8844',
        toothHighlight: 'rgba(210,160,90,0.6)',
        toothEdge: 'rgba(140,90,30,0.4)',
        toothTip: 'rgba(230,180,110,0.5)',
        flashColor: '#aa7733',
        dustColor: '#664422',
        funnelGlow: '#553311',
        funnelStroke: 'rgba(140,90,30,0.4)',
        funnelFill: '#1a0e04',
    },
    emeraldCrush: {
        glow: '#33dd77',
        gradStops: ['#55cc77', '#33bb55', '#22aa44', '#118833', '#006622', '#004411'],
        ringColor: 'rgba(50,200,100,0.2)',
        rimColor: 'rgba(60,220,110,0.5)',
        rimInner: 'rgba(50,200,100,0.2)',
        spokeColor: 'rgba(40,180,80,0.1)',
        toothFill: '#22aa55',
        toothGlow: '#33dd77',
        toothHighlight: 'rgba(80,230,140,0.7)',
        toothEdge: 'rgba(30,160,70,0.35)',
        toothTip: 'rgba(140,240,180,0.6)',
        flashColor: '#33cc66',
        dustColor: '#117733',
        funnelGlow: '#006622',
        funnelStroke: 'rgba(40,180,80,0.4)',
        funnelFill: '#041a0a',
    },
    plasmaCutter: {
        glow: '#ff44cc',
        gradStops: ['#ff77dd', '#ee44bb', '#cc2299', '#aa1177', '#770055', '#440033'],
        ringColor: 'rgba(255,80,200,0.25)',
        rimColor: 'rgba(255,100,220,0.6)',
        rimInner: 'rgba(255,80,200,0.25)',
        spokeColor: 'rgba(255,60,180,0.15)',
        toothFill: '#dd33aa',
        toothGlow: '#ff55cc',
        toothHighlight: 'rgba(255,140,220,0.7)',
        toothEdge: 'rgba(255,60,180,0.4)',
        toothTip: 'rgba(255,180,240,0.6)',
        flashColor: '#ff44bb',
        dustColor: '#aa2288',
        funnelGlow: '#882266',
        funnelStroke: 'rgba(255,60,180,0.5)',
        funnelFill: '#1a0412',
        // Unique: triangular body with vertex blades (shuriken)
        polyShape: 3,
        vertexBlades: 3,
        extraSpokes: 6,
        doubleRim: true,
        hubGrad0: '#ff99dd', hubGrad1: '#882255', hubStroke: '#661144',
        boltFill: 'rgba(255,100,200,0.8)',
    },
    bloodMoon: {
        glow: '#cc2200',
        gradStops: ['#992222', '#881818', '#771010', '#550808', '#330404', '#1a0202'],
        ringColor: 'rgba(200,30,0,0.25)',
        rimColor: 'rgba(220,40,10,0.6)',
        rimInner: 'rgba(200,30,0,0.2)',
        spokeColor: 'rgba(180,20,0,0.15)',
        toothFill: '#aa1100',
        toothGlow: '#dd3311',
        toothHighlight: 'rgba(240,80,40,0.6)',
        toothEdge: 'rgba(180,20,0,0.4)',
        toothTip: 'rgba(255,120,80,0.5)',
        flashColor: '#cc2200',
        dustColor: '#661100',
        funnelGlow: '#551000',
        funnelStroke: 'rgba(180,20,0,0.5)',
        funnelFill: '#120200',
        // Unique: pentagonal body with oversized hook claws
        polyShape: 5,
        hookTeeth: true,
        bigTeeth: true,
        extraSpokes: 10,
        doubleRim: true,
        hubGrad0: '#ff6644', hubGrad1: '#551100', hubStroke: '#440800',
        boltFill: 'rgba(220,60,30,0.8)',
    },
    toxicWaste: {
        glow: '#88ff00',
        gradStops: ['#99ee22', '#77cc00', '#55aa00', '#338800', '#226600', '#114400'],
        ringColor: 'rgba(130,255,0,0.25)',
        rimColor: 'rgba(150,255,20,0.6)',
        rimInner: 'rgba(130,255,0,0.25)',
        spokeColor: 'rgba(100,220,0,0.15)',
        toothFill: '#66cc00',
        toothGlow: '#88ff00',
        toothHighlight: 'rgba(160,255,60,0.7)',
        toothEdge: 'rgba(100,200,0,0.4)',
        toothTip: 'rgba(200,255,100,0.6)',
        flashColor: '#77ee00',
        dustColor: '#448800',
        funnelGlow: '#336600',
        funnelStroke: 'rgba(100,220,0,0.5)',
        funnelFill: '#0a1a00',
        // Unique: sea urchin — 24 tiny needle teeth + spiked rim
        manyTeeth: 24,
        spikyRim: true,
        doubleRim: true,
        extraSpokes: 16,
        hubGrad0: '#bbff44', hubGrad1: '#336600', hubStroke: '#224400',
        boltFill: 'rgba(130,220,30,0.8)',
    },
    dragonForge: {
        glow: '#ff6622',
        gradStops: ['#ffaa44', '#ee7722', '#cc5511', '#aa3300', '#882200', '#551100'],
        ringColor: 'rgba(255,150,50,0.25)',
        rimColor: 'rgba(255,180,60,0.7)',
        rimInner: 'rgba(255,160,50,0.3)',
        spokeColor: 'rgba(255,130,30,0.15)',
        toothFill: '#ffbb33',
        toothGlow: '#ffcc44',
        toothHighlight: 'rgba(255,220,100,0.8)',
        toothEdge: 'rgba(255,140,20,0.5)',
        toothTip: 'rgba(255,240,150,0.7)',
        flashColor: '#ff8833',
        dustColor: '#aa5500',
        funnelGlow: '#884400',
        funnelStroke: 'rgba(255,130,30,0.5)',
        funnelFill: '#1a0c02',
        // Unique: hexagonal body with flame-shaped teeth, triple rim
        polyShape: 6,
        flameTeeth: true,
        tripleRim: true,
        extraSpokes: 12,
        hubGrad0: '#ffcc44', hubGrad1: '#884400', hubStroke: '#663300',
        boltFill: 'rgba(255,180,50,0.9)',
    },
    chronoBreaker: {
        glow: '#aa66ff',
        gradStops: ['#9966dd', '#7744cc', '#6633bb', '#5522aa', '#331188', '#1a0055'],
        ringColor: 'rgba(160,100,255,0.25)',
        rimColor: 'rgba(180,120,255,0.6)',
        rimInner: 'rgba(160,100,255,0.25)',
        spokeColor: 'rgba(140,80,220,0.15)',
        toothFill: '#8844dd',
        toothGlow: '#aa66ff',
        toothHighlight: 'rgba(180,130,255,0.7)',
        toothEdge: 'rgba(140,80,220,0.4)',
        toothTip: 'rgba(200,160,255,0.6)',
        flashColor: '#9955ee',
        dustColor: '#5522aa',
        funnelGlow: '#441199',
        funnelStroke: 'rgba(140,80,220,0.5)',
        funnelFill: '#0d0420',
        starShape: true,
        starPoints: 6,
        starInnerRatio: 0.55,
        chromaGlow: true,
        doubleRim: true,
        extraSpokes: 12,
        hubGrad0: '#cc99ff', hubGrad1: '#441199', hubStroke: '#330088',
        boltFill: 'rgba(160,100,255,0.9)',
    },
    // ===== NEW SKINS =====
    copperMachine: {
        glow: '#dd8844',
        gradStops: ['#cc9966', '#bb7744', '#aa6633', '#884422', '#663311', '#442208'],
        ringColor: 'rgba(200,140,80,0.2)',
        rimColor: 'rgba(220,150,80,0.5)',
        rimInner: 'rgba(200,140,80,0.2)',
        spokeColor: 'rgba(180,120,60,0.12)',
        toothFill: '#bb7733',
        toothGlow: '#dd8844',
        toothHighlight: 'rgba(230,180,120,0.6)',
        toothEdge: 'rgba(180,120,60,0.35)',
        toothTip: 'rgba(240,200,140,0.5)',
        flashColor: '#cc8844',
        dustColor: '#885522',
        funnelGlow: '#664422',
        funnelStroke: 'rgba(180,120,60,0.4)',
        funnelFill: '#1a0e04',
    },
    shadowBlade: {
        glow: '#6688aa',
        gradStops: ['#556677', '#445566', '#334455', '#223344', '#112233', '#0a1520'],
        ringColor: 'rgba(80,120,160,0.2)',
        rimColor: 'rgba(100,140,180,0.4)',
        rimInner: 'rgba(80,120,160,0.2)',
        spokeColor: 'rgba(60,100,140,0.1)',
        toothFill: '#445566',
        toothGlow: '#6688aa',
        toothHighlight: 'rgba(120,160,200,0.5)',
        toothEdge: 'rgba(80,120,160,0.3)',
        toothTip: 'rgba(150,180,210,0.4)',
        flashColor: '#5577aa',
        dustColor: '#334455',
        funnelGlow: '#223355',
        funnelStroke: 'rgba(80,120,160,0.4)',
        funnelFill: '#060a10',
        hookTeeth: true,
        extraSpokes: 8,
    },
    sakuraPetal: {
        glow: '#ff88bb',
        gradStops: ['#ffaacc', '#ff88bb', '#ee6699', '#cc4477', '#992255', '#661133'],
        ringColor: 'rgba(255,140,190,0.2)',
        rimColor: 'rgba(255,120,180,0.5)',
        rimInner: 'rgba(255,140,190,0.2)',
        spokeColor: 'rgba(255,100,160,0.1)',
        toothFill: '#ee6699',
        toothGlow: '#ff88bb',
        toothHighlight: 'rgba(255,180,210,0.7)',
        toothEdge: 'rgba(240,100,160,0.35)',
        toothTip: 'rgba(255,200,220,0.5)',
        flashColor: '#ff77aa',
        dustColor: '#cc4477',
        funnelGlow: '#993366',
        funnelStroke: 'rgba(255,100,160,0.4)',
        funnelFill: '#1a0810',
        octoShape: true,
        manyTeeth: 12,
        doubleRim: true,
        extraSpokes: 6,
    },
    goldenCrown: {
        glow: '#ffdd44',
        gradStops: ['#ffee88', '#ffcc44', '#ddaa22', '#bb8811', '#886600', '#553300'],
        ringColor: 'rgba(255,220,80,0.25)',
        rimColor: 'rgba(255,200,50,0.6)',
        rimInner: 'rgba(255,220,80,0.25)',
        spokeColor: 'rgba(255,180,30,0.12)',
        toothFill: '#ddaa22',
        toothGlow: '#ffdd44',
        toothHighlight: 'rgba(255,230,130,0.7)',
        toothEdge: 'rgba(220,170,30,0.4)',
        toothTip: 'rgba(255,240,160,0.6)',
        flashColor: '#ffcc33',
        dustColor: '#aa7700',
        funnelGlow: '#886600',
        funnelStroke: 'rgba(255,180,30,0.5)',
        funnelFill: '#1a1200',
        polyShape: 5,
        extraSpokes: 10,
        doubleRim: true,
        hubGrad0: '#ffee88', hubGrad1: '#885500', hubStroke: '#664400',
        boltFill: 'rgba(255,200,50,0.8)',
    },
    crystalIce: {
        glow: '#aaeeff',
        gradStops: ['#ddeeff', '#bbddff', '#88ccee', '#55aadd', '#2288bb', '#0a5588'],
        ringColor: 'rgba(170,230,255,0.25)',
        rimColor: 'rgba(150,220,255,0.6)',
        rimInner: 'rgba(170,230,255,0.25)',
        spokeColor: 'rgba(120,200,240,0.12)',
        toothFill: '#88ccee',
        toothGlow: '#aaeeff',
        toothHighlight: 'rgba(200,240,255,0.8)',
        toothEdge: 'rgba(100,200,255,0.4)',
        toothTip: 'rgba(220,245,255,0.6)',
        flashColor: '#88ddff',
        dustColor: '#4488bb',
        funnelGlow: '#226699',
        funnelStroke: 'rgba(120,200,240,0.5)',
        funnelFill: '#061520',
        starShape: true,
        starPoints: 4,
        starInnerRatio: 0.5,
        doubleRim: true,
        extraSpokes: 8,
        hubGrad0: '#cceeFF', hubGrad1: '#225577', hubStroke: '#114466',
        boltFill: 'rgba(150,220,255,0.8)',
    },
    jungleViper: {
        glow: '#44dd44',
        gradStops: ['#66cc44', '#44aa33', '#338822', '#226611', '#114400', '#0a2800'],
        ringColor: 'rgba(80,200,80,0.2)',
        rimColor: 'rgba(60,220,60,0.5)',
        rimInner: 'rgba(80,200,80,0.2)',
        spokeColor: 'rgba(50,180,50,0.12)',
        toothFill: '#33aa22',
        toothGlow: '#44dd44',
        toothHighlight: 'rgba(100,230,100,0.7)',
        toothEdge: 'rgba(40,180,40,0.4)',
        toothTip: 'rgba(140,240,140,0.5)',
        flashColor: '#33cc33',
        dustColor: '#226611',
        funnelGlow: '#115500',
        funnelStroke: 'rgba(50,180,50,0.5)',
        funnelFill: '#041a04',
        hookTeeth: true,
        bigTeeth: true,
        doubleRim: true,
        extraSpokes: 12,
        hubGrad0: '#88dd66', hubGrad1: '#224400', hubStroke: '#113300',
        boltFill: 'rgba(60,200,60,0.8)',
    },
    // ===== SUPER PREMIUM SKINS =====
    galaxyVortex: {
        glow: '#7744ff',
        gradStops: ['#8866ff', '#6644ee', '#4422cc', '#3311aa', '#220088', '#110044'],
        ringColor: 'rgba(120,80,255,0.3)',
        rimColor: 'rgba(140,100,255,0.7)',
        rimInner: 'rgba(120,80,255,0.3)',
        spokeColor: 'rgba(100,60,220,0.15)',
        toothFill: '#6644ee',
        toothGlow: '#8866ff',
        toothHighlight: 'rgba(160,130,255,0.8)',
        toothEdge: 'rgba(120,80,255,0.45)',
        toothTip: 'rgba(190,170,255,0.7)',
        flashColor: '#7755ff',
        dustColor: '#4422cc',
        funnelGlow: '#3311aa',
        funnelStroke: 'rgba(120,80,255,0.6)',
        funnelFill: '#08002a',
        starShape: true,
        starPoints: 8,
        starInnerRatio: 0.6,
        chromaGlow: true,
        voidPulse: true,
        doubleRim: true,
        extraSpokes: 16,
        hubGrad0: '#bb99ff', hubGrad1: '#331188', hubStroke: '#220066',
        boltFill: 'rgba(140,100,255,0.9)',
    },
    phoenixRise: {
        glow: '#ff4400',
        gradStops: ['#ff8833', '#ff6622', '#ee4400', '#cc3300', '#881800', '#440a00'],
        ringColor: 'rgba(255,100,0,0.3)',
        rimColor: 'rgba(255,120,20,0.7)',
        rimInner: 'rgba(255,100,0,0.3)',
        spokeColor: 'rgba(255,80,0,0.18)',
        toothFill: '#ff6622',
        toothGlow: '#ff8833',
        toothHighlight: 'rgba(255,180,80,0.8)',
        toothEdge: 'rgba(255,100,0,0.5)',
        toothTip: 'rgba(255,220,100,0.7)',
        flashColor: '#ff5500',
        dustColor: '#cc3300',
        funnelGlow: '#aa2200',
        funnelStroke: 'rgba(255,100,0,0.6)',
        funnelFill: '#1a0600',
        flameTeeth: true,
        chromaGlow: true,
        tripleRim: true,
        extraSpokes: 14,
        hubGrad0: '#ffbb55', hubGrad1: '#772200', hubStroke: '#551100',
        boltFill: 'rgba(255,140,40,0.9)',
    },
    quantumShift: {
        glow: '#00ffaa',
        gradStops: ['#44ffbb', '#22dd99', '#11bb77', '#099955', '#056633', '#023318'],
        ringColor: 'rgba(0,255,170,0.3)',
        rimColor: 'rgba(0,255,180,0.7)',
        rimInner: 'rgba(0,255,170,0.3)',
        spokeColor: 'rgba(0,220,150,0.18)',
        toothFill: '#11bb77',
        toothGlow: '#22ffaa',
        toothHighlight: 'rgba(80,255,200,0.8)',
        toothEdge: 'rgba(0,220,150,0.5)',
        toothTip: 'rgba(140,255,220,0.7)',
        flashColor: '#11ee88',
        dustColor: '#099955',
        funnelGlow: '#067744',
        funnelStroke: 'rgba(0,220,150,0.6)',
        funnelFill: '#021a0e',
        gearShape: true,
        gearTeeth: 16,
        gearToothDepth: 0.18,
        chromaGlow: true,
        voidPulse: true,
        doubleRim: true,
        extraSpokes: 16,
        hubGrad0: '#88ffcc', hubGrad1: '#115533', hubStroke: '#0a3322',
        boltFill: 'rgba(0,255,170,0.9)',
    },
    eternityEngine: {
        glow: '#ffffff',
        gradStops: ['#ffffff', '#ddddff', '#bbbbee', '#8888cc', '#5555aa', '#222266'],
        ringColor: 'rgba(255,255,255,0.3)',
        rimColor: 'rgba(255,255,255,0.7)',
        rimInner: 'rgba(255,255,255,0.35)',
        spokeColor: 'rgba(220,220,255,0.2)',
        toothFill: '#bbbbee',
        toothGlow: '#ffffff',
        toothHighlight: 'rgba(255,255,255,0.9)',
        toothEdge: 'rgba(200,200,255,0.5)',
        toothTip: 'rgba(255,255,255,0.8)',
        flashColor: '#eeeeff',
        dustColor: '#8888cc',
        funnelGlow: '#6666aa',
        funnelStroke: 'rgba(200,200,255,0.6)',
        funnelFill: '#0a0a1a',
        starShape: true,
        starPoints: 12,
        starInnerRatio: 0.65,
        chromaGlow: true,
        voidPulse: true,
        tripleRim: true,
        extraSpokes: 24,
        hubGrad0: '#ffffff', hubGrad1: '#444488', hubStroke: '#333366',
        boltFill: 'rgba(220,220,255,0.95)',
    },
};

const SKIN_LIST = [
    { key: 'default',        name: 'Default',          price: 0 },
    { key: 'rustyClassic',   name: 'Rusty Classic',    price: 0 },
    { key: 'emeraldCrush',   name: 'Emerald Crush',    price: 0 },
    { key: 'neonCrusher',    name: 'Neon Crusher',     price: 8 },
    { key: 'copperMachine',  name: 'Copper Machine',   price: 10 },
    { key: 'infernoSaw',     name: 'Inferno Saw',      price: 18 },
    { key: 'shadowBlade',    name: 'Shadow Blade',     price: 22 },
    { key: 'arcticGrinder',  name: 'Arctic Grinder',   price: 25 },
    { key: 'sakuraPetal',    name: 'Sakura Petal',     price: 30 },
    { key: 'voidReaper',     name: 'Void Reaper',      price: 35 },
    { key: 'goldenCrown',    name: 'Golden Crown',     price: 40 },
    { key: 'plasmaCutter',   name: 'Plasma Cutter',    price: 50 },
    { key: 'bloodMoon',      name: 'Blood Moon',       price: 60 },
    { key: 'crystalIce',     name: 'Crystal Ice',      price: 70 },
    { key: 'toxicWaste',     name: 'Toxic Waste',      price: 75 },
    { key: 'jungleViper',    name: 'Jungle Viper',     price: 90 },
    { key: 'celestialGear',  name: 'Celestial Gear',   price: 100 },
    { key: 'dragonForge',    name: 'Dragon Forge',     price: 140 },
    { key: 'chronoBreaker',  name: 'Chrono Breaker',   price: 200 },
    { key: 'galaxyVortex',   name: 'Galaxy Vortex',    price: 250 },
    { key: 'phoenixRise',    name: 'Phoenix Rise',     price: 350 },
    { key: 'quantumShift',   name: 'Quantum Shift',    price: 450 },
    { key: 'eternityEngine', name: 'Eternity Engine',  price: 600 },
];

function getTheme() {
    const skin = game.prestige && game.prestige.activeSkin;
    return CRUSHER_THEMES[skin] || CRUSHER_THEMES.default;
}

// ===== ACHIEVEMENTS =====
const ACHIEVEMENTS = [
    // --- Earnings (7) ---
    { id: 'earn1k', name: 'First Coins', icon: '🪙', gem: 1, desc: 'Earn 1K coins total', check: () => game.player.cookieStats.Earned >= 1e3 },
    { id: 'earn100k', name: 'Getting Rich', icon: '💰', gem: 1, desc: 'Earn 100K coins total', check: () => game.player.cookieStats.Earned >= 1e5 },
    { id: 'earn10m', name: 'Millionaire', icon: '🤑', gem: 2, desc: 'Earn 10M coins total', check: () => game.player.cookieStats.Earned >= 1e7 },
    { id: 'earn1b', name: 'Billionaire', icon: '🏦', gem: 2, desc: 'Earn 1B coins total', check: () => game.player.cookieStats.Earned >= 1e9 },
    { id: 'earn1t', name: 'Trillionaire', icon: '👑', gem: 3, desc: 'Earn 1T coins total', check: () => game.player.cookieStats.Earned >= 1e12 },
    { id: 'earn1qua', name: 'Quadrillionaire', icon: '🌟', gem: 3, desc: 'Earn 1Qua coins total', check: () => game.player.cookieStats.Earned >= 1e15 },
    { id: 'earn1qui', name: 'Beyond Infinity', icon: '🌌', gem: 5, desc: 'Earn 1Qui coins total', check: () => game.player.cookieStats.Earned >= 1e18 },
    // --- Clicks (4) ---
    { id: 'click100', name: 'Tapper', icon: '👆', gem: 1, desc: 'Click 100 coins worth', check: () => game.player.cookieStats.Clicked >= 100 },
    { id: 'click10k', name: 'Speed Tapper', icon: '⚡', gem: 1, desc: 'Click 10K coins worth', check: () => game.player.cookieStats.Clicked >= 1e4 },
    { id: 'click1m', name: 'Mega Tapper', icon: '🔨', gem: 2, desc: 'Click 1M coins worth', check: () => game.player.cookieStats.Clicked >= 1e6 },
    { id: 'click100m', name: 'Legendary Tapper', icon: '💪', gem: 3, desc: 'Click 100M coins worth', check: () => game.player.cookieStats.Clicked >= 1e8 },
    // --- Buildings (4) ---
    { id: 'build1', name: 'First Purchase', icon: '🏗️', gem: 1, desc: 'Buy your first building', check: () => game.buildings.some(b => b.amount > 0) },
    { id: 'build50', name: 'Industrialist', icon: '🏭', gem: 2, desc: 'Own 50 buildings total', check: () => game.buildings.reduce((s, b) => s + b.amount, 0) >= 50 },
    { id: 'build200', name: 'Tycoon', icon: '🏙️', gem: 2, desc: 'Own 200 buildings total', check: () => game.buildings.reduce((s, b) => s + b.amount, 0) >= 200 },
    { id: 'build500', name: 'Empire Builder', icon: '🌆', gem: 3, desc: 'Own 500 buildings total', check: () => game.buildings.reduce((s, b) => s + b.amount, 0) >= 500 },
    // --- Materials unlocked (4) ---
    { id: 'mat3', name: 'Prospector', icon: '⛏️', gem: 1, desc: 'Unlock 3 materials', check: () => game.buildings.filter(b => !b.locked).length >= 3 },
    { id: 'mat6', name: 'Miner', icon: '🪨', gem: 2, desc: 'Unlock 6 materials', check: () => game.buildings.filter(b => !b.locked).length >= 6 },
    { id: 'mat9', name: 'Deep Digger', icon: '💎', gem: 2, desc: 'Unlock 9 materials', check: () => game.buildings.filter(b => !b.locked).length >= 9 },
    { id: 'mat12', name: 'Master Miner', icon: '🌋', gem: 3, desc: 'Unlock all 12 materials', check: () => game.buildings.filter(b => !b.locked).length >= 12 },
    // --- Upgrades (3) ---
    { id: 'upg1', name: 'Upgraded', icon: '🔧', gem: 1, desc: 'Buy your first upgrade', check: () => game.buildings.some(b => b.upgrades.some(u => u.owned)) },
    { id: 'upg10', name: 'Engineer', icon: '⚙️', gem: 2, desc: 'Buy 10 upgrades total', check: () => { let c = 0; game.buildings.forEach(b => b.upgrades.forEach(u => { if (u.owned) c++; })); return c >= 10; } },
    { id: 'upg30', name: 'Technologist', icon: '🔬', gem: 3, desc: 'Buy 30 upgrades total', check: () => { let c = 0; game.buildings.forEach(b => b.upgrades.forEach(u => { if (u.owned) c++; })); return c >= 30; } },
    // --- Prestige (4) ---
    { id: 'pres1', name: 'Rebirth', icon: '🔄', gem: 2, desc: 'Prestige once', check: () => game.prestige.count >= 1 },
    { id: 'pres3', name: 'Veteran', icon: '🎖️', gem: 2, desc: 'Prestige 3 times', check: () => game.prestige.count >= 3 },
    { id: 'pres5', name: 'Ascended', icon: '🌠', gem: 3, desc: 'Prestige 5 times', check: () => game.prestige.count >= 5 },
    { id: 'pres10', name: 'Eternal', icon: '♾️', gem: 5, desc: 'Prestige 10 times', check: () => game.prestige.count >= 10 },
    // --- Gems (3) ---
    { id: 'gem10', name: 'Gem Collector', icon: '💎', gem: 1, desc: 'Earn 10 gems total', check: () => game.prestige.totalGems >= 10 },
    { id: 'gem50', name: 'Gem Hoarder', icon: '💠', gem: 2, desc: 'Earn 50 gems total', check: () => game.prestige.totalGems >= 50 },
    { id: 'gem200', name: 'Gem Lord', icon: '👸', gem: 3, desc: 'Earn 200 gems total', check: () => game.prestige.totalGems >= 200 },
    // --- Skins (2) ---
    { id: 'skin1', name: 'Fashion', icon: '🎨', gem: 1, desc: 'Buy your first skin', check: () => Object.values(game.prestige.skins).some(s => s.owned) },
    { id: 'skin3', name: 'Collector', icon: '🖌️', gem: 2, desc: 'Own 3 skins', check: () => Object.values(game.prestige.skins).filter(s => s.owned).length >= 3 },
    { id: 'skin5', name: 'Fashionista', icon: '👗', gem: 3, desc: 'Own 5 skins', check: () => Object.values(game.prestige.skins).filter(s => s.owned).length >= 5 },
    { id: 'skin10', name: 'Skin Maniac', icon: '💅', gem: 5, desc: 'Own 10 skins', check: () => Object.values(game.prestige.skins).filter(s => s.owned).length >= 10 },
    // --- CPS milestones (4) ---
    { id: 'cps10', name: 'Automation', icon: '🤖', gem: 1, desc: 'Reach 10 CPS', check: () => game.player.aMPF * game.settings.frameRate >= 10 },
    { id: 'cps1k', name: 'Factory', icon: '🏭', gem: 1, desc: 'Reach 1K CPS', check: () => game.player.aMPF * game.settings.frameRate >= 1e3 },
    { id: 'cps1m', name: 'Megafactory', icon: '⚡', gem: 2, desc: 'Reach 1M CPS', check: () => game.player.aMPF * game.settings.frameRate >= 1e6 },
    { id: 'cps1b', name: 'Gigafactory', icon: '🚀', gem: 3, desc: 'Reach 1B CPS', check: () => game.player.aMPF * game.settings.frameRate >= 1e9 },
    // --- Spending (3) ---
    { id: 'spend10k', name: 'Shopper', icon: '🛒', gem: 1, desc: 'Spend 10K coins', check: () => game.player.cookieStats.Spent >= 1e4 },
    { id: 'spend10m', name: 'Big Spender', icon: '💸', gem: 2, desc: 'Spend 10M coins', check: () => game.player.cookieStats.Spent >= 1e7 },
    { id: 'spend10b', name: 'Whale', icon: '🐋', gem: 3, desc: 'Spend 10B coins', check: () => game.player.cookieStats.Spent >= 1e10 },
    // --- Special (2) ---
    { id: 'boost1', name: 'Boosted', icon: '🎁', gem: 1, desc: 'Activate a gift boost', check: () => giftSystem.boostActive },
    { id: 'allmat', name: 'Completionist', icon: '🏆', gem: 5, desc: 'Own every material type', check: () => game.buildings.every(b => b.amount > 0) },
];
let _achCheckFrame = 0;

// ===== CRUSHER VISUAL =====
let W, H, engine, render, runner;
let leftWheel, rightWheel;
const crusher = {
    radius: 70, gap: 45, toothCount: 8, toothSize: 20,
    spinSpeed: 0.03, y: 0, particles: [],
};

// Visual effects state
let ambientParticles = [];
let screenFlash = 0;
let screenShake = 0;

// Offscreen caches
let _starsCanvas = null;
let _starsCtx = null;
let _starsFrame = 0;
let _vignetteCanvas = null;
let _vignetteCtx = null;

// Cached DOM elements
let _domCoins = null;
let _domCps = null;
let _domCpc = null;
let _domGems = null;
function _cacheDom() {
    _domCoins = document.getElementById('coins');
    _domCps = document.getElementById('cps');
    _domCpc = document.getElementById('cpc');
    _domGems = document.getElementById('gems');
}

function initCrusher() {
    const canvas = document.getElementById('gameCanvas');
    W = Math.min(window.innerWidth, 480);
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    crusher.y = H * 0.55;

    engine = Engine.create({ gravity: { x: 0, y: 1.5 } });
    render = Render.create({
        canvas, engine,
        options: { width: W, height: H, wireframes: false, background: '#050510', pixelRatio: Math.min(window.devicePixelRatio || 1, W <= 480 ? 1.25 : 1.5) }
    });

    // Funnels (labeled) — taller to extend off-screen at top
    const funnelH = crusher.radius * 4.5;
    const fy = crusher.y - crusher.radius * 2;
    Composite.add(engine.world, [
        Bodies.rectangle(W / 2 - crusher.radius * 2.8, fy, 18, funnelH, {
            isStatic: true, angle: -0.55, label: 'funnel',
            render: { fillStyle: '#1a0a30', strokeStyle: '#6600cc', lineWidth: 1 }
        }),
        Bodies.rectangle(W / 2 + crusher.radius * 2.8, fy, 18, funnelH, {
            isStatic: true, angle: 0.55, label: 'funnel',
            render: { fillStyle: '#1a0a30', strokeStyle: '#6600cc', lineWidth: 1 }
        }),
    ]);

    // Crusher wheels (invisible to Matter.js — we draw them custom)
    leftWheel = createWheel(W / 2 - crusher.radius - crusher.gap / 2, crusher.y, 1);
    rightWheel = createWheel(W / 2 + crusher.radius + crusher.gap / 2, crusher.y, -1);

    // Collision detection
    Events.on(engine, 'collisionStart', (event) => {
        for (const pair of event.pairs) {
            const a = pair.bodyA, b = pair.bodyB;
            const block = a.label === 'block' ? a : (b.label === 'block' ? b : null);
            if (block) {
                const other = block === a ? b : a;
                if (other.label === 'tooth') shatterBlock(block);
            }
        }
    });

    Render.run(render);
    runner = Runner.create();
    Runner.run(runner, engine);

    // Center canvas on desktop
    if (window.innerWidth > 600) {
        canvas.style.left = '50%';
        canvas.style.transform = 'translateX(-50%)';
        canvas.style.maxWidth = '480px';
    }

    // Initialize ambient particles
    initAmbientParticles();

    // Enhanced afterRender — full visual pipeline
    Events.on(render, 'afterRender', () => {
        const ctx = render.context;
        drawBgStars(ctx);
        // drawCrusherGlow(ctx); // removed — transparent sphere behind crusher
        drawFunnelGlow(ctx);
        drawCrusher(ctx);
        drawNeonBlocks(ctx);
        drawParticles(ctx);
        drawFlash(ctx);
        drawAmbientDust(ctx);
        drawVignette(ctx);
        applyShake();
    });

    // Spin wheels + cleanup
    Events.on(engine, 'beforeUpdate', () => {
        spinWheels();
        cleanupDebris();
    });
}

function createWheel(x, y, spinDir) {
    const core = Bodies.circle(x, y, crusher.radius, {
        isStatic: true, label: 'crusherCore',
        render: { visible: false }
    });
    const teeth = [];
    for (let i = 0; i < crusher.toothCount; i++) {
        const ang = (Math.PI * 2 / crusher.toothCount) * i;
        const tx = x + Math.cos(ang) * (crusher.radius + crusher.toothSize * 0.4);
        const ty = y + Math.sin(ang) * (crusher.radius + crusher.toothSize * 0.4);
        teeth.push(Bodies.polygon(tx, ty, 3, crusher.toothSize, {
            isStatic: true, angle: ang + Math.PI / 2, label: 'tooth',
            render: { visible: false }
        }));
    }
    Composite.add(engine.world, [core, ...teeth]);
    return { core, teeth, x, y, spinDir, angle: 0 };
}

function spinWheels() {
    [leftWheel, rightWheel].forEach(w => {
        w.angle += crusher.spinSpeed * w.spinDir;
        Body.setAngle(w.core, w.angle);
        Body.setPosition(w.core, { x: w.x, y: w.y });
        w.teeth.forEach((tooth, i) => {
            const a = (Math.PI * 2 / crusher.toothCount) * i + w.angle;
            Body.setPosition(tooth, {
                x: w.x + Math.cos(a) * (crusher.radius + crusher.toothSize * 0.4),
                y: w.y + Math.sin(a) * (crusher.radius + crusher.toothSize * 0.4)
            });
            Body.setAngle(tooth, a + Math.PI / 2);
        });
    });
}

function makeRockVerts(radius, count) {
    var verts = [];
    for (var i = 0; i < count; i++) {
        var ang = (Math.PI * 2 / count) * i;
        var r = radius * (0.6 + Math.random() * 0.5);
        verts.push({ x: Math.cos(ang) * r, y: Math.sin(ang) * r });
    }
    return verts;
}

function spawnBlock(x, y, size, color) {
    var s = size || 30;
    var c = color || '#ffee00';
    var matIdx = MATERIALS.findIndex(m => m.color === c);
    var sides = 5 + Math.floor(Math.random() * 4); // 5–8 vertices
    var verts = makeRockVerts(s * 0.5, sides);
    var block = Bodies.fromVertices(x, y, verts, {
        restitution: 0.15, friction: 0.6, density: 0.002, label: 'block',
        angle: Math.random() * Math.PI * 2,
        render: { visible: false }
    });
    if (!block) {
        block = Bodies.polygon(x, y, 5, s * 0.5, {
            restitution: 0.15, friction: 0.6, density: 0.002, label: 'block',
            render: { visible: false }
        });
    }
    block._color = c;
    // Determine tier from material color (0=common, 1=mid, 2=premium, 3=legendary)
    block._tier = matIdx < 0 ? 0 : matIdx < 4 ? 0 : matIdx < 7 ? 1 : matIdx < 10 ? 2 : 3;
    Composite.add(engine.world, block);
}

function tryVibrate(ms) {
    try {
        if (game.vibration && window.navigator && navigator.vibrate) {
            navigator.vibrate(ms);
        }
    } catch (e) { }
}

function shatterBlock(block) {
    const pos = block.position;
    const color = block._color;
    Composite.remove(engine.world, block);
    game.player.clickCookie();
    if (giftSystem.boostActive) game.player.clickCookie();
    var frenzyBonus = frenzySystem.getTapBonus();
    if (frenzyBonus > 0) game.player.earnCookie(frenzyBonus);
    tryVibrate(12);

    for (let i = 0; i < 5 + Math.floor(Math.random() * 5); i++) {
        const sz = 3 + Math.random() * 8;
        const pc = Math.random() > 0.3 ? color : lighten(color);
        const dv = makeRockVerts(sz, 4 + Math.floor(Math.random() * 3));
        let piece = Bodies.fromVertices(
            pos.x + (Math.random() - 0.5) * 30, pos.y + (Math.random() - 0.5) * 30,
            dv, {
            restitution: 0.3, friction: 0.8, density: 0.001,
            angle: Math.random() * Math.PI * 2, label: 'debris',
            render: { visible: false }
        }
        );
        if (!piece) piece = Bodies.polygon(
            pos.x + (Math.random() - 0.5) * 30, pos.y + (Math.random() - 0.5) * 30,
            4, sz, {
                restitution: 0.3, friction: 0.8, density: 0.001, label: 'debris',
            render: { visible: false }
        }
        );
        piece._color = pc;
        Body.setVelocity(piece, { x: (Math.random() - 0.5) * 8, y: Math.random() * 4 + 2 });
        Body.setAngularVelocity(piece, (Math.random() - 0.5) * 0.3);
        Composite.add(engine.world, piece);
    }

    // Sparks with trail support
    for (let i = 0; i < 12; i++) {
        crusher.particles.push({
            x: pos.x, y: pos.y,
            vx: (Math.random() - 0.5) * 12, vy: (Math.random() - 0.5) * 12 - 2,
            life: 1, decay: 0.015 + Math.random() * 0.02,
            size: 2 + Math.random() * 4, color,
            trail: [{ x: pos.x, y: pos.y }],
        });
    }

    // Flash + shake
    screenFlash = 0.25;
    screenShake = 4;

    // Canvas particles handle the visual; CSS sparkles removed (desktop offset bug)
}

// ===== CRUSHER CENTER GLOW =====
function drawCrusherGlow(ctx) {
    var t = getTheme();
    var cx = W / 2, cy = crusher.y;
    var now = performance.now();
    var pulse = 0.7 + 0.3 * Math.sin(now * 0.002);
    ctx.save();
    ctx.globalAlpha = 0.15 * pulse;
    ctx.shadowColor = t.glow;
    ctx.shadowBlur = 30;
    ctx.fillStyle = t.glow;
    ctx.beginPath();
    ctx.arc(cx, cy, crusher.radius * 1.2, 0, Math.PI * 2);
    ctx.fill();
    // Celestial Gear: chromatic rainbow glow rings
    if (t.chromaGlow) {
        var hue = (now * 0.05) % 360;
        for (var ring = 0; ring < 3; ring++) {
            var rh = (hue + ring * 120) % 360;
            var rPulse = 0.4 + 0.6 * Math.sin(now * 0.002 + ring * 2.1);
            ctx.globalAlpha = 0.06 * rPulse;
            ctx.shadowColor = 'hsl(' + rh + ',100%,60%)';
            ctx.fillStyle = 'hsl(' + rh + ',100%,60%)';
            ctx.shadowBlur = 40;
            ctx.beginPath();
            ctx.arc(cx, cy, crusher.radius * (1.3 + ring * 0.25), 0, Math.PI * 2);
            ctx.fill();
        }
    }
    // Void Reaper: second pulsing ring out of phase
    if (t.voidPulse) {
        var pulse2 = 0.5 + 0.5 * Math.sin(now * 0.003 + Math.PI);
        ctx.globalAlpha = 0.08 * pulse2;
        ctx.shadowBlur = 50;
        ctx.beginPath();
        ctx.arc(cx, cy, crusher.radius * 1.6, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
}

// ===== BACKGROUND STARS =====
var bgStars = [];
function initBgStars() {
    bgStars = [];
    for (var i = 0; i < 60; i++) {
        bgStars.push({
            x: Math.random() * W,
            y: Math.random() * H,
            size: Math.random() * 1.5 + 0.3,
            twinkleSpeed: 0.5 + Math.random() * 2,
            phase: Math.random() * Math.PI * 2,
        });
    }
}

function drawBgStars(ctx) {
    if (bgStars.length === 0) initBgStars();
    // Render stars to offscreen canvas every 10 frames
    if (!_starsCanvas) {
        _starsCanvas = document.createElement('canvas');
        _starsCanvas.width = W;
        _starsCanvas.height = H;
        _starsCtx = _starsCanvas.getContext('2d');
    }
    _starsFrame++;
    if (_starsFrame >= 10 || _starsFrame === 1) {
        _starsFrame = 0;
        var oc = _starsCtx;
        oc.clearRect(0, 0, W, H);
        var now = performance.now() * 0.001;
        for (var i = 0; i < bgStars.length; i++) {
            var s = bgStars[i];
            var twinkle = 0.3 + 0.7 * Math.pow((1 + Math.sin(now * s.twinkleSpeed + s.phase)) * 0.5, 2);
            oc.globalAlpha = twinkle * 0.5;
            oc.fillStyle = '#ffffff';
            oc.beginPath();
            oc.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            oc.fill();
            if (s.size > 1 && twinkle > 0.8) {
                oc.globalAlpha = twinkle * 0.15;
                oc.beginPath();
                oc.arc(s.x, s.y, s.size * 3, 0, Math.PI * 2);
                oc.fill();
            }
        }
    }
    ctx.drawImage(_starsCanvas, 0, 0);
}

// ===== BACKGROUND GEARS =====
var bgGears = [];
var _gearsCanvas, _gearsCtx;
function initBgGears() {
    bgGears = [];
    var count = 7;
    for (var i = 0; i < count; i++) {
        bgGears.push({
            x: Math.random() * W,
            y: Math.random() * H,
            radius: 30 + Math.random() * 60,
            teeth: 8 + Math.floor(Math.random() * 8),
            toothDepth: 0.25 + Math.random() * 0.1,
            speed: (0.0003 + Math.random() * 0.0006) * (Math.random() < 0.5 ? 1 : -1),
            alpha: 0.04 + Math.random() * 0.06,
            phase: Math.random() * Math.PI * 2,
        });
    }
}

function drawBgGears(ctx) {
    if (bgGears.length === 0) initBgGears();
    var now = performance.now();
    var t = CRUSHER_THEMES[game.currentTheme || 'default'] || CRUSHER_THEMES.default;
    var col = t.funnelGlow;

    ctx.save();
    for (var i = 0; i < bgGears.length; i++) {
        var g = bgGears[i];
        var angle = g.phase + now * g.speed;
        var r = g.radius;
        var teeth = g.teeth;
        var td = r * g.toothDepth;

        ctx.save();
        ctx.translate(g.x, g.y);
        ctx.rotate(angle);
        ctx.globalAlpha = g.alpha;
        ctx.strokeStyle = col;
        ctx.lineWidth = 1.5;
        ctx.fillStyle = col;

        // Gear body with teeth
        ctx.beginPath();
        for (var j = 0; j < teeth; j++) {
            var a0 = (j / teeth) * Math.PI * 2;
            var a1 = ((j + 0.3) / teeth) * Math.PI * 2;
            var a2 = ((j + 0.5) / teeth) * Math.PI * 2;
            var a3 = ((j + 0.8) / teeth) * Math.PI * 2;
            if (j === 0) {
                ctx.moveTo(Math.cos(a0) * r, Math.sin(a0) * r);
            }
            ctx.lineTo(Math.cos(a1) * (r + td), Math.sin(a1) * (r + td));
            ctx.lineTo(Math.cos(a2) * (r + td), Math.sin(a2) * (r + td));
            ctx.lineTo(Math.cos(a3) * r, Math.sin(a3) * r);
            var aNext = ((j + 1) / teeth) * Math.PI * 2;
            ctx.lineTo(Math.cos(aNext) * r, Math.sin(aNext) * r);
        }
        ctx.closePath();
        ctx.globalAlpha = g.alpha * 0.3;
        ctx.fill();
        ctx.globalAlpha = g.alpha;
        ctx.stroke();

        // Inner ring
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.55, 0, Math.PI * 2);
        ctx.stroke();

        // Hub
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2);
        ctx.globalAlpha = g.alpha * 0.5;
        ctx.fill();
        ctx.globalAlpha = g.alpha;
        ctx.stroke();

        // Spokes
        for (var s = 0; s < 4; s++) {
            var sa = (s / 4) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(Math.cos(sa) * r * 0.2, Math.sin(sa) * r * 0.2);
            ctx.lineTo(Math.cos(sa) * r * 0.55, Math.sin(sa) * r * 0.55);
            ctx.globalAlpha = g.alpha * 0.6;
            ctx.stroke();
        }

        ctx.restore();
    }
    ctx.restore();
}

// ===== NEON BLOCK OVERLAY =====
function drawNeonBlocks(ctx) {
    var bodies = Composite.allBodies(engine.world);
    var now = performance.now() * 0.003;
    ctx.save();
    for (var i = 0; i < bodies.length; i++) {
        var b = bodies[i];
        if (b.label !== 'block' && b.label !== 'debris') continue;
        var c = b._color || '#ffffff';
        var v = b.vertices;
        if (!v || v.length < 3) continue;

        // Compute centroid + bounding radius
        var bx = 0, by = 0;
        for (var j = 0; j < v.length; j++) { bx += v[j].x; by += v[j].y; }
        bx /= v.length; by /= v.length;
        var maxR = 0;
        for (var j = 0; j < v.length; j++) {
            var dx = v[j].x - bx, dy = v[j].y - by;
            var d = dx * dx + dy * dy;
            if (d > maxR) maxR = d;
        }
        maxR = Math.sqrt(maxR);

        // Build path helper
        function buildPath() {
            ctx.beginPath();
            ctx.moveTo(v[0].x, v[0].y);
            for (var k = 1; k < v.length; k++) ctx.lineTo(v[k].x, v[k].y);
            ctx.closePath();
        }

        if (b.label === 'debris') {
            buildPath();
            ctx.globalAlpha = 0.85;
            ctx.shadowBlur = 0;
            ctx.fillStyle = c;
            ctx.fill();
            continue;
        }

        var tier = b._tier || 0;
        var cRgb = _hexToRgb(c);

        // === Radial gradient fill — depth effect ===
        var lightR = Math.min(255, cRgb[0] + 60 + tier * 15);
        var lightG = Math.min(255, cRgb[1] + 60 + tier * 15);
        var lightB = Math.min(255, cRgb[2] + 60 + tier * 15);
        var darkR = Math.max(0, cRgb[0] - 50);
        var darkG = Math.max(0, cRgb[1] - 50);
        var darkB = Math.max(0, cRgb[2] - 50);

        buildPath();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
        var grad = ctx.createRadialGradient(bx - maxR * 0.25, by - maxR * 0.25, 0, bx, by, maxR);
        grad.addColorStop(0, 'rgb(' + lightR + ',' + lightG + ',' + lightB + ')');
        grad.addColorStop(0.5, c);
        grad.addColorStop(1, 'rgb(' + darkR + ',' + darkG + ',' + darkB + ')');
        ctx.fillStyle = grad;
        ctx.fill();

        // === Edge bevel — lighter inner border ===
        buildPath();
        ctx.globalAlpha = 0.15;
        ctx.strokeStyle = 'rgb(' + lightR + ',' + lightG + ',' + lightB + ')';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // === Vein / crack lines ===
        ctx.globalAlpha = 0.12 + tier * 0.03;
        ctx.strokeStyle = 'rgb(' + darkR + ',' + darkG + ',' + darkB + ')';
        ctx.lineWidth = 0.8;
        // Seed veins from vertex midpoints toward center
        var veinCount = 2 + Math.min(tier, 2);
        for (var vi = 0; vi < veinCount; vi++) {
            var ei = (vi * 3 + i) % v.length;
            var ei2 = (ei + 1) % v.length;
            var mx = (v[ei].x + v[ei2].x) * 0.5;
            var my = (v[ei].y + v[ei2].y) * 0.5;
            ctx.beginPath();
            ctx.moveTo(mx, my);
            // Vein bends toward center with slight offset
            var jx = bx + (mx - bx) * 0.15 + ((i * 7 + vi * 13) % 11 - 5) * 1.2;
            var jy = by + (my - by) * 0.15 + ((i * 11 + vi * 7) % 11 - 5) * 1.2;
            ctx.quadraticCurveTo(jx, jy, bx, by);
            ctx.stroke();
        }

        // === Specular highlight spot ===
        ctx.save();
        buildPath();
        ctx.clip();
        ctx.globalAlpha = 0.2 + tier * 0.05;
        var specX = bx - maxR * 0.3;
        var specY = by - maxR * 0.3;
        var specR = maxR * 0.45;
        var specGrad = ctx.createRadialGradient(specX, specY, 0, specX, specY, specR);
        specGrad.addColorStop(0, '#ffffff');
        specGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = specGrad;
        ctx.fillRect(specX - specR, specY - specR, specR * 2, specR * 2);
        ctx.restore();

        // === Neon glow stroke ===
        buildPath();
        var glowAlpha = 0.5 + tier * 0.15;
        var glowBlur = 15 + tier * 5;
        ctx.globalAlpha = Math.min(glowAlpha, 1);
        ctx.shadowColor = c;
        ctx.shadowBlur = glowBlur;
        ctx.strokeStyle = c;
        ctx.lineWidth = 2.5 + tier * 0.5;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // === Crystal facets for tier >= 2 ===
        if (tier >= 2) {
            buildPath();
            ctx.save();
            ctx.clip();
            ctx.globalAlpha = 0.08 + (tier - 2) * 0.04;
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 0.6;
            // Draw lines from each vertex to centroid
            for (var fi = 0; fi < v.length; fi++) {
                ctx.beginPath();
                ctx.moveTo(v[fi].x, v[fi].y);
                ctx.lineTo(bx, by);
                ctx.stroke();
            }
            ctx.restore();
        }

        // === Premium glow pulse for tier >= 1 ===
        if (tier >= 1) {
            buildPath();
            var pulse = 0.5 + 0.5 * Math.sin(now + i * 1.7);
            ctx.globalAlpha = (0.08 + tier * 0.06) * pulse;
            ctx.shadowColor = c;
            ctx.shadowBlur = 10 + tier * 4;
            ctx.fillStyle = c;
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        // === Legendary shimmer + sparkle dots for tier 3 ===
        if (tier >= 3) {
            buildPath();
            var shimmer = 0.5 + 0.5 * Math.sin(now * 2 + i * 2.3);
            ctx.globalAlpha = 0.12 * shimmer;
            ctx.fillStyle = '#ffffff';
            ctx.fill();

            // Sparkle dots
            ctx.globalAlpha = 0.6;
            ctx.fillStyle = '#ffffff';
            for (var si = 0; si < 3; si++) {
                var sa = now * 1.5 + si * 2.1 + i;
                var sr = maxR * (0.3 + 0.4 * ((Math.sin(sa * 0.7 + si) + 1) * 0.5));
                var sx = bx + Math.cos(sa) * sr;
                var sy = by + Math.sin(sa) * sr;
                var sparkAlpha = 0.5 + 0.5 * Math.sin(sa * 3);
                ctx.globalAlpha = sparkAlpha * 0.5;
                ctx.beginPath();
                ctx.arc(sx, sy, 1.2, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
    ctx.restore();
}

// ===== ENHANCED DRAWING =====

function drawCrusher(ctx) {
    [leftWheel, rightWheel].forEach(w => {
        drawMetallicWheel(ctx, w);
        w.teeth.forEach(t => drawEnhancedTooth(ctx, t));
    });
}

function _octoPath(ctx, cx, cy, r, angle) {
    ctx.beginPath();
    for (var i = 0; i < 8; i++) {
        var a = (Math.PI * 2 / 8) * i + angle - Math.PI / 8;
        var px = cx + Math.cos(a) * r;
        var py = cy + Math.sin(a) * r;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
}

function _polyPath(ctx, cx, cy, r, sides, angle) {
    ctx.beginPath();
    for (var i = 0; i < sides; i++) {
        var a = (Math.PI * 2 / sides) * i + angle - Math.PI / sides;
        var px = cx + Math.cos(a) * r;
        var py = cy + Math.sin(a) * r;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
}

function _starPath(ctx, cx, cy, outerR, innerR, points, angle) {
    ctx.beginPath();
    for (var i = 0; i < points * 2; i++) {
        var a = (Math.PI / points) * i + angle - Math.PI / 2;
        var rr = (i % 2 === 0) ? outerR : innerR;
        var px = cx + Math.cos(a) * rr;
        var py = cy + Math.sin(a) * rr;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
}

function _gearPath(ctx, cx, cy, r, teeth, depth, angle) {
    var inner = r * (1 - depth);
    ctx.beginPath();
    for (var i = 0; i < teeth; i++) {
        var a0 = (Math.PI * 2 / teeth) * i + angle;
        var a1 = a0 + (Math.PI * 2 / teeth) * 0.15;
        var a2 = a0 + (Math.PI * 2 / teeth) * 0.35;
        var a3 = a0 + (Math.PI * 2 / teeth) * 0.5;
        var a4 = a0 + (Math.PI * 2 / teeth) * 0.65;
        var a5 = a0 + (Math.PI * 2 / teeth) * 0.85;
        var aNext = a0 + (Math.PI * 2 / teeth);
        // Valley
        if (i === 0) ctx.moveTo(cx + Math.cos(a0) * inner, cy + Math.sin(a0) * inner);
        else ctx.lineTo(cx + Math.cos(a0) * inner, cy + Math.sin(a0) * inner);
        // Rise to tooth
        ctx.lineTo(cx + Math.cos(a1) * inner, cy + Math.sin(a1) * inner);
        ctx.lineTo(cx + Math.cos(a2) * r, cy + Math.sin(a2) * r);
        // Tooth top (flat)
        ctx.lineTo(cx + Math.cos(a3) * r, cy + Math.sin(a3) * r);
        ctx.lineTo(cx + Math.cos(a4) * r, cy + Math.sin(a4) * r);
        // Drop back to valley
        ctx.lineTo(cx + Math.cos(a5) * inner, cy + Math.sin(a5) * inner);
        ctx.lineTo(cx + Math.cos(aNext) * inner, cy + Math.sin(aNext) * inner);
    }
    ctx.closePath();
}

function drawMetallicWheel(ctx, wheel) {
    const cx = wheel.core.position.x;
    const cy = wheel.core.position.y;
    const r = crusher.radius;
    const t = getTheme();

    ctx.save();

    // Outer glow halo
    ctx.shadowColor = t.glow;
    ctx.shadowBlur = 15;

    // Metallic radial gradient (cached per wheel)
    var skinKey = game.prestige && game.prestige.activeSkin || 'default';
    if (!wheel._gradCache || wheel._gradSkin !== skinKey || wheel._gradCx !== cx || wheel._gradCy !== cy) {
        var _g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        var gs = t.gradStops;
        _g.addColorStop(0, gs[0]);
        _g.addColorStop(0.25, gs[1]);
        _g.addColorStop(0.45, gs[2]);
        _g.addColorStop(0.65, gs[3]);
        _g.addColorStop(0.85, gs[4]);
        _g.addColorStop(1, gs[5]);
        wheel._gradCache = _g;
        wheel._gradSkin = skinKey;
        wheel._gradCx = cx;
        wheel._gradCy = cy;
    }
    var grad = wheel._gradCache;

    ctx.fillStyle = grad;
    if (t.gearShape) {
        _gearPath(ctx, cx, cy, r, t.gearTeeth, t.gearToothDepth, wheel.angle);
    } else if (t.starShape) {
        _starPath(ctx, cx, cy, r, r * t.starInnerRatio, t.starPoints, wheel.angle);
    } else if (t.polyShape) {
        _polyPath(ctx, cx, cy, r, t.polyShape, wheel.angle);
    } else if (t.octoShape) {
        _octoPath(ctx, cx, cy, r, wheel.angle);
    } else {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
    }
    ctx.fill();
    // Edge highlights for shaped skins
    if (t.gearShape) {
        ctx.shadowBlur = 0;
        ctx.strokeStyle = t.rimColor;
        ctx.lineWidth = 2;
        _gearPath(ctx, cx, cy, r, t.gearTeeth, t.gearToothDepth, wheel.angle);
        ctx.stroke();
        ctx.strokeStyle = t.toothHighlight;
        ctx.lineWidth = 1;
        _gearPath(ctx, cx, cy, r * 0.98, t.gearTeeth, t.gearToothDepth * 0.8, wheel.angle);
        ctx.stroke();
    } else if (t.starShape) {
        ctx.shadowBlur = 0;
        ctx.strokeStyle = t.rimColor;
        ctx.lineWidth = 2;
        _starPath(ctx, cx, cy, r, r * t.starInnerRatio, t.starPoints, wheel.angle);
        ctx.stroke();
        ctx.strokeStyle = t.toothHighlight;
        ctx.lineWidth = 1;
        _starPath(ctx, cx, cy, r * 0.96, r * 0.96 * t.starInnerRatio, t.starPoints, wheel.angle);
        ctx.stroke();
    } else if (t.polyShape) {
        ctx.shadowBlur = 0;
        ctx.strokeStyle = t.rimColor;
        ctx.lineWidth = 2;
        _polyPath(ctx, cx, cy, r, t.polyShape, wheel.angle);
        ctx.stroke();
        ctx.strokeStyle = t.toothHighlight;
        ctx.lineWidth = 1;
        _polyPath(ctx, cx, cy, r * 0.95, t.polyShape, wheel.angle);
        ctx.stroke();
    }

    ctx.shadowBlur = 0;

    // Concentric ring details
    ctx.strokeStyle = t.ringColor;
    ctx.lineWidth = 1.5;
    if (t.gearShape) {
        ctx.beginPath(); ctx.arc(cx, cy, r * 0.65, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, cy, r * 0.45, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, cy, r * 0.3, 0, Math.PI * 2); ctx.stroke();
    } else if (t.starShape) {
        _starPath(ctx, cx, cy, r * 0.65, r * 0.65 * t.starInnerRatio, t.starPoints, wheel.angle); ctx.stroke();
        _starPath(ctx, cx, cy, r * 0.4, r * 0.4 * t.starInnerRatio, t.starPoints, wheel.angle); ctx.stroke();
    } else if (t.polyShape) {
        _polyPath(ctx, cx, cy, r * 0.75, t.polyShape, wheel.angle); ctx.stroke();
        _polyPath(ctx, cx, cy, r * 0.5, t.polyShape, wheel.angle); ctx.stroke();
    } else if (t.octoShape) {
        _octoPath(ctx, cx, cy, r * 0.75, wheel.angle); ctx.stroke();
        _octoPath(ctx, cx, cy, r * 0.5, wheel.angle); ctx.stroke();
    } else {
        ctx.beginPath(); ctx.arc(cx, cy, r * 0.75, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, cy, r * 0.5, 0, Math.PI * 2); ctx.stroke();
    }

    // Rim highlight
    if (!t.gearShape && !t.starShape) {
        ctx.strokeStyle = t.rimColor;
        ctx.lineWidth = 2;
        if (t.polyShape) {
            _polyPath(ctx, cx, cy, r, t.polyShape, wheel.angle); ctx.stroke();
            ctx.strokeStyle = t.rimInner;
            ctx.lineWidth = 1;
            _polyPath(ctx, cx, cy, r - 3, t.polyShape, wheel.angle); ctx.stroke();
        } else if (t.octoShape) {
            _octoPath(ctx, cx, cy, r, wheel.angle); ctx.stroke();
            ctx.strokeStyle = t.rimInner;
            ctx.lineWidth = 1;
            _octoPath(ctx, cx, cy, r - 3, wheel.angle); ctx.stroke();
        } else {
            ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
            ctx.strokeStyle = t.rimInner;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.arc(cx, cy, r - 3, 0, Math.PI * 2); ctx.stroke();
        }
    }

    // Extra rim for special skins
    if (t.doubleRim) {
        ctx.strokeStyle = t.rimColor;
        ctx.lineWidth = 1;
        if (t.gearShape) {
            ctx.beginPath(); ctx.arc(cx, cy, r * 0.72, 0, Math.PI * 2); ctx.stroke();
            ctx.beginPath(); ctx.arc(cx, cy, r * 0.52, 0, Math.PI * 2); ctx.stroke();
        } else if (t.starShape) {
            _starPath(ctx, cx, cy, r * 0.85, r * 0.85 * t.starInnerRatio, t.starPoints, wheel.angle); ctx.stroke();
            _starPath(ctx, cx, cy, r * 0.55, r * 0.55 * t.starInnerRatio, t.starPoints, wheel.angle); ctx.stroke();
        } else if (t.polyShape) {
            _polyPath(ctx, cx, cy, r * 0.92, t.polyShape, wheel.angle); ctx.stroke();
            _polyPath(ctx, cx, cy, r * 0.62, t.polyShape, wheel.angle); ctx.stroke();
        } else if (t.octoShape) {
            _octoPath(ctx, cx, cy, r * 0.92, wheel.angle); ctx.stroke();
            _octoPath(ctx, cx, cy, r * 0.62, wheel.angle); ctx.stroke();
        } else {
            ctx.beginPath(); ctx.arc(cx, cy, r * 0.92, 0, Math.PI * 2); ctx.stroke();
            ctx.beginPath(); ctx.arc(cx, cy, r * 0.62, 0, Math.PI * 2); ctx.stroke();
        }
    }

    // Triple rim for dragonForge-style skins
    if (t.tripleRim) {
        ctx.strokeStyle = t.rimColor;
        ctx.lineWidth = 0.8;
        if (t.polyShape) {
            _polyPath(ctx, cx, cy, r * 0.95, t.polyShape, wheel.angle); ctx.stroke();
            _polyPath(ctx, cx, cy, r * 0.78, t.polyShape, wheel.angle); ctx.stroke();
            _polyPath(ctx, cx, cy, r * 0.58, t.polyShape, wheel.angle); ctx.stroke();
        } else {
            ctx.beginPath(); ctx.arc(cx, cy, r * 0.95, 0, Math.PI * 2); ctx.stroke();
            ctx.beginPath(); ctx.arc(cx, cy, r * 0.78, 0, Math.PI * 2); ctx.stroke();
            ctx.beginPath(); ctx.arc(cx, cy, r * 0.58, 0, Math.PI * 2); ctx.stroke();
        }
    }

    // Spokes (rotate with wheel)
    var spokeCount = t.extraSpokes || 8;
    ctx.strokeStyle = t.spokeColor;
    ctx.lineWidth = (t.sawBlade || t.hookTeeth || t.gearShape || t.polyShape || t.starShape) ? 2 : 1;
    for (let s = 0; s < spokeCount; s++) {
        const sa = (Math.PI * 2 / spokeCount) * s + wheel.angle;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(sa) * r * 0.18, cy + Math.sin(sa) * r * 0.18);
        ctx.lineTo(cx + Math.cos(sa) * r * 0.88, cy + Math.sin(sa) * r * 0.88);
        ctx.stroke();
        // Gear: ornate cross-bars between spokes
        if (t.gearShape) {
            var mid = r * 0.55;
            var perp = Math.PI / 2;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(cx + Math.cos(sa + perp) * mid * 0.18 + Math.cos(sa) * mid, cy + Math.sin(sa + perp) * mid * 0.18 + Math.sin(sa) * mid);
            ctx.lineTo(cx + Math.cos(sa - perp) * mid * 0.18 + Math.cos(sa) * mid, cy + Math.sin(sa - perp) * mid * 0.18 + Math.sin(sa) * mid);
            ctx.stroke();
            ctx.lineWidth = 2;
        }
    }

    // Extra visual teeth for manyTeeth skins (drawn between physics teeth)
    if (t.manyTeeth) {
        var mtCount = t.manyTeeth;
        var mtSize = crusher.toothSize * (t.spikyRim ? 0.32 : 0.45);
        ctx.shadowColor = t.toothGlow;
        ctx.shadowBlur = 4;
        for (let m = 0; m < mtCount; m++) {
            var ma = (Math.PI * 2 / mtCount) * m + wheel.angle;
            var mx = cx + Math.cos(ma) * (r + mtSize * 0.2);
            var my = cy + Math.sin(ma) * (r + mtSize * 0.2);
            if (t.spikyRim) {
                // Toxic needle spikes — long thin needles
                ctx.fillStyle = t.toothFill;
                ctx.beginPath();
                ctx.moveTo(mx + Math.cos(ma) * mtSize * 2.0, my + Math.sin(ma) * mtSize * 2.0);
                ctx.lineTo(mx + Math.cos(ma + Math.PI / 2) * mtSize * 0.15, my + Math.sin(ma + Math.PI / 2) * mtSize * 0.15);
                ctx.lineTo(mx + Math.cos(ma + Math.PI) * mtSize * 0.3, my + Math.sin(ma + Math.PI) * mtSize * 0.3);
                ctx.lineTo(mx + Math.cos(ma - Math.PI / 2) * mtSize * 0.15, my + Math.sin(ma - Math.PI / 2) * mtSize * 0.15);
                ctx.closePath();
                ctx.fill();
            } else {
                // Small sharp diamond spike
                ctx.fillStyle = t.toothFill;
                ctx.beginPath();
                ctx.moveTo(mx + Math.cos(ma) * mtSize * 1.2, my + Math.sin(ma) * mtSize * 1.2);
                ctx.lineTo(mx + Math.cos(ma + Math.PI / 2) * mtSize * 0.3, my + Math.sin(ma + Math.PI / 2) * mtSize * 0.3);
                ctx.lineTo(mx + Math.cos(ma + Math.PI) * mtSize * 0.2, my + Math.sin(ma + Math.PI) * mtSize * 0.2);
                ctx.lineTo(mx + Math.cos(ma - Math.PI / 2) * mtSize * 0.3, my + Math.sin(ma - Math.PI / 2) * mtSize * 0.3);
                ctx.closePath();
                ctx.fill();
            }
            // Tip highlight
            ctx.shadowBlur = 0;
            ctx.fillStyle = t.toothTip;
            var tipDist = t.spikyRim ? mtSize * 2.0 : mtSize * 1.2;
            ctx.beginPath();
            ctx.arc(mx + Math.cos(ma) * tipDist, my + Math.sin(ma) * tipDist, t.spikyRim ? 1 : 1.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 4;
        }
        ctx.shadowBlur = 0;
    }

    // Vertex blades for polyShape skins (e.g. triangle shuriken)
    if (t.vertexBlades && t.polyShape) {
        var vbCount = t.vertexBlades;
        var bladeLen = crusher.toothSize * 1.4;
        ctx.shadowColor = t.toothGlow;
        ctx.shadowBlur = 8;
        for (var vb = 0; vb < vbCount; vb++) {
            var va = (Math.PI * 2 / vbCount) * vb + wheel.angle - Math.PI / vbCount;
            var vx = cx + Math.cos(va) * r;
            var vy = cy + Math.sin(va) * r;
            // Blade tip extends outward from vertex
            var tipX = vx + Math.cos(va) * bladeLen;
            var tipY = vy + Math.sin(va) * bladeLen;
            // Blade sides — perpendicular to direction, wide base
            var perpL = va + Math.PI * 0.4;
            var perpR = va - Math.PI * 0.4;
            var baseW = bladeLen * 0.35;
            ctx.fillStyle = t.toothFill;
            ctx.beginPath();
            ctx.moveTo(vx + Math.cos(perpL) * baseW, vy + Math.sin(perpL) * baseW);
            ctx.quadraticCurveTo(vx + Math.cos(va) * bladeLen * 0.7 + Math.cos(perpL) * baseW * 0.3,
                vy + Math.sin(va) * bladeLen * 0.7 + Math.sin(perpL) * baseW * 0.3, tipX, tipY);
            ctx.quadraticCurveTo(vx + Math.cos(va) * bladeLen * 0.7 + Math.cos(perpR) * baseW * 0.3,
                vy + Math.sin(va) * bladeLen * 0.7 + Math.sin(perpR) * baseW * 0.3,
                vx + Math.cos(perpR) * baseW, vy + Math.sin(perpR) * baseW);
            ctx.closePath();
            ctx.fill();
            ctx.shadowBlur = 0;
            // Highlight edge
            ctx.strokeStyle = t.toothHighlight;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(vx + Math.cos(perpL) * baseW, vy + Math.sin(perpL) * baseW);
            ctx.quadraticCurveTo(vx + Math.cos(va) * bladeLen * 0.7 + Math.cos(perpL) * baseW * 0.3,
                vy + Math.sin(va) * bladeLen * 0.7 + Math.sin(perpL) * baseW * 0.3, tipX, tipY);
            ctx.stroke();
            // Tip glow
            ctx.fillStyle = t.toothTip;
            ctx.beginPath();
            ctx.arc(tipX, tipY, 2.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 8;
        }
        ctx.shadowBlur = 0;
    }

    // Hub bolt (center)
    var isSpecial = t.sawBlade || t.hookTeeth || t.octoShape || t.gearShape || t.polyShape || t.starShape;
    var hubSize = t.gearShape ? 10 : (isSpecial ? 8 : 7);
    var hubC0 = t.hubGrad0 || (t.gearShape ? '#ffe680' : (t.octoShape ? '#bbddff' : (t.hookTeeth ? '#cc88ff' : (t.sawBlade ? '#ffcc66' : '#cccccc'))));
    var hubC1 = t.hubGrad1 || (t.gearShape ? '#886600' : (t.octoShape ? '#335577' : (t.hookTeeth ? '#440077' : (t.sawBlade ? '#884400' : '#555555'))));
    var _hubStroke = t.hubStroke || (t.gearShape ? '#664400' : (t.octoShape ? '#224466' : (t.hookTeeth ? '#330055' : (t.sawBlade ? '#663300' : '#444'))));
    const hg = ctx.createRadialGradient(cx, cy, 0, cx, cy, hubSize);
    hg.addColorStop(0, hubC0);
    hg.addColorStop(1, hubC1);
    ctx.fillStyle = hg;
    ctx.beginPath(); ctx.arc(cx, cy, hubSize, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = _hubStroke;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(cx, cy, hubSize, 0, Math.PI * 2); ctx.stroke();

    // Small bolts around hub
    var boltCount = isSpecial ? 8 : 6;
    var boltR = isSpecial ? 15 : 12;
    var _boltFill = t.boltFill || (t.gearShape ? 'rgba(255,210,80,0.9)' : (t.octoShape ? 'rgba(130,200,255,0.8)' : (t.hookTeeth ? 'rgba(180,100,255,0.8)' : (t.sawBlade ? 'rgba(255,150,50,0.8)' : 'rgba(100,100,100,0.8)'))));
    var boltSize = isSpecial ? 2.2 : 1.8;
    for (let b = 0; b < boltCount; b++) {
        const ba = (Math.PI * 2 / boltCount) * b + wheel.angle;
        ctx.fillStyle = _boltFill;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(ba) * boltR, cy + Math.sin(ba) * boltR, boltSize, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.restore();
}

function drawEnhancedTooth(ctx, tooth) {
    const v = tooth.vertices;
    if (!v || v.length < 3) return;
    const t = getTheme();
    // Special skins draw their own teeth / have teeth as part of body shape
    if (t.manyTeeth || t.gearShape || t.starShape || t.vertexBlades) return;

    ctx.save();

    // Glow
    ctx.shadowColor = t.toothGlow;
    ctx.shadowBlur = (t.sawBlade || t.hookTeeth || t.flameTeeth) ? 8 : 5;

    if (t.flameTeeth) {
        // Dragon Forge: flame-shaped teeth
        var cx = (v[0].x + v[1].x + v[2].x) / 3;
        var cy = (v[0].y + v[1].y + v[2].y) / 3;
        var ang = Math.atan2(v[0].y - cy, v[0].x - cx);
        var sz = crusher.toothSize * 0.9;
        ctx.fillStyle = t.toothFill;
        ctx.beginPath();
        // Wide base
        ctx.moveTo(cx + Math.cos(ang - 0.8) * sz * 0.4, cy + Math.sin(ang - 0.8) * sz * 0.4);
        // Left wave up
        ctx.quadraticCurveTo(
            cx + Math.cos(ang - 0.4) * sz * 1.1, cy + Math.sin(ang - 0.4) * sz * 1.1,
            cx + Math.cos(ang - 0.15) * sz * 0.9, cy + Math.sin(ang - 0.15) * sz * 0.9
        );
        // Sharp tip
        ctx.quadraticCurveTo(
            cx + Math.cos(ang) * sz * 1.3, cy + Math.sin(ang) * sz * 1.3,
            cx + Math.cos(ang) * sz * 1.7, cy + Math.sin(ang) * sz * 1.7
        );
        // Right wave down
        ctx.quadraticCurveTo(
            cx + Math.cos(ang) * sz * 1.3, cy + Math.sin(ang) * sz * 1.3,
            cx + Math.cos(ang + 0.15) * sz * 0.9, cy + Math.sin(ang + 0.15) * sz * 0.9
        );
        ctx.quadraticCurveTo(
            cx + Math.cos(ang + 0.4) * sz * 1.1, cy + Math.sin(ang + 0.4) * sz * 1.1,
            cx + Math.cos(ang + 0.8) * sz * 0.4, cy + Math.sin(ang + 0.8) * sz * 0.4
        );
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
        // Inner flame core glow
        ctx.fillStyle = t.toothHighlight;
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(ang - 0.3) * sz * 0.3, cy + Math.sin(ang - 0.3) * sz * 0.3);
        ctx.quadraticCurveTo(cx + Math.cos(ang) * sz * 1.0, cy + Math.sin(ang) * sz * 1.0,
            cx + Math.cos(ang) * sz * 1.7, cy + Math.sin(ang) * sz * 1.7);
        ctx.quadraticCurveTo(cx + Math.cos(ang) * sz * 1.0, cy + Math.sin(ang) * sz * 1.0,
            cx + Math.cos(ang + 0.3) * sz * 0.3, cy + Math.sin(ang + 0.3) * sz * 0.3);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;
        // Flame tip
        ctx.fillStyle = t.toothTip;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(ang) * sz * 1.7, cy + Math.sin(ang) * sz * 1.7, 2.5, 0, Math.PI * 2);
        ctx.fill();
    } else if (t.hookTeeth) {
        // Hook/claw teeth (voidReaper, bloodMoon)
        var cx = (v[0].x + v[1].x + v[2].x) / 3;
        var cy = (v[0].y + v[1].y + v[2].y) / 3;
        var ang = Math.atan2(v[0].y - cy, v[0].x - cx);
        var szMul = t.bigTeeth ? 1.2 : 0.8;
        var sz = crusher.toothSize * szMul;
        // Hook base
        var baseW = t.bigTeeth ? 0.7 : 0.6;
        var bx1 = cx + Math.cos(ang - baseW) * sz * 0.5;
        var by1 = cy + Math.sin(ang - baseW) * sz * 0.5;
        var bx2 = cx + Math.cos(ang + baseW) * sz * 0.5;
        var by2 = cy + Math.sin(ang + baseW) * sz * 0.5;
        // Hook tip — extends outward
        var tipMul = t.bigTeeth ? 1.8 : 1.5;
        var tipX = cx + Math.cos(ang) * sz * tipMul;
        var tipY = cy + Math.sin(ang) * sz * tipMul;
        // Curve control — bends the hook sideways
        var curveMul = t.bigTeeth ? 1.5 : 1.3;
        var cpX = cx + Math.cos(ang + 0.7) * sz * curveMul;
        var cpY = cy + Math.sin(ang + 0.7) * sz * curveMul;
        ctx.fillStyle = t.toothFill;
        ctx.beginPath();
        ctx.moveTo(bx1, by1);
        ctx.lineTo(cx + Math.cos(ang + Math.PI) * sz * 0.25, cy + Math.sin(ang + Math.PI) * sz * 0.25);
        ctx.lineTo(bx2, by2);
        ctx.quadraticCurveTo(cpX, cpY, tipX, tipY);
        ctx.quadraticCurveTo(cx + Math.cos(ang - 0.7) * sz * curveMul, cy + Math.sin(ang - 0.7) * sz * curveMul, bx1, by1);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
        // Inner glow line along the hook
        ctx.strokeStyle = t.toothHighlight;
        ctx.lineWidth = t.bigTeeth ? 2 : 1.5;
        ctx.beginPath();
        ctx.moveTo(bx2, by2);
        ctx.quadraticCurveTo(cpX, cpY, tipX, tipY);
        ctx.stroke();
        // Tip glow
        ctx.fillStyle = t.toothTip;
        ctx.beginPath();
        ctx.arc(tipX, tipY, t.bigTeeth ? 3.5 : 2.5, 0, Math.PI * 2);
        ctx.fill();
    } else if (t.sawBlade) {
        // Saw blade: wider, flat-top teeth
        var cx = (v[0].x + v[1].x + v[2].x) / 3;
        var cy = (v[0].y + v[1].y + v[2].y) / 3;
        var ang = Math.atan2(v[0].y - cy, v[0].x - cx);
        var sz = crusher.toothSize * 0.7;
        ctx.fillStyle = t.toothFill;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(ang - 0.5) * sz, cy + Math.sin(ang - 0.5) * sz);
        ctx.lineTo(cx + Math.cos(ang) * sz * 1.4, cy + Math.sin(ang) * sz * 1.4);
        ctx.lineTo(cx + Math.cos(ang + 0.5) * sz, cy + Math.sin(ang + 0.5) * sz);
        ctx.lineTo(cx + Math.cos(ang + Math.PI) * sz * 0.3, cy + Math.sin(ang + Math.PI) * sz * 0.3);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = t.toothHighlight;
        ctx.lineWidth = 1.5;
        ctx.stroke();
    } else {
        // Default triangle teeth
        ctx.fillStyle = t.toothFill;
        ctx.beginPath();
        ctx.moveTo(v[0].x, v[0].y);
        for (let i = 1; i < v.length; i++) ctx.lineTo(v[i].x, v[i].y);
        ctx.closePath();
        ctx.fill();

        ctx.shadowBlur = 0;

        // Highlight edge
        ctx.strokeStyle = t.toothHighlight;
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(v[0].x, v[0].y); ctx.lineTo(v[1].x, v[1].y); ctx.stroke();

        // Outer edge
        ctx.strokeStyle = t.toothEdge;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(v[0].x, v[0].y);
        for (let i = 1; i < v.length; i++) ctx.lineTo(v[i].x, v[i].y);
        ctx.closePath();
        ctx.stroke();

        // Tip glow dot
        ctx.fillStyle = t.toothTip;
        ctx.beginPath(); ctx.arc(v[0].x, v[0].y, 1.5, 0, Math.PI * 2); ctx.fill();
    }

    ctx.restore();
}

function _hexToRgb(hex) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
}

function drawFunnelGlow(ctx) {
    const t = getTheme();
    // Parse theme colors once per frame
    var gRgb = _hexToRgb(t.funnelGlow);
    var fRgb = _hexToRgb(t.funnelFill);
    // Lighter version of glow for highlights
    var hR = Math.min(255, gRgb[0] + 80);
    var hG = Math.min(255, gRgb[1] + 80);
    var hB = Math.min(255, gRgb[2] + 80);
    // Mid tone between fill and glow for beam body
    var mR = Math.floor((fRgb[0] * 2 + gRgb[0]) / 3);
    var mG = Math.floor((fRgb[1] * 2 + gRgb[1]) / 3);
    var mB = Math.floor((fRgb[2] * 2 + gRgb[2]) / 3);
    // Brighter mid for center highlight
    var bR = Math.floor((fRgb[0] + gRgb[0]) / 2);
    var bG = Math.floor((fRgb[1] + gRgb[1]) / 2);
    var bB = Math.floor((fRgb[2] + gRgb[2]) / 2);

    Composite.allBodies(engine.world).forEach(b => {
        if (b.label !== 'funnel') return;
        const v = b.vertices;
        b.render.fillStyle = t.funnelFill;
        b.render.strokeStyle = t.funnelGlow;

        var cx = (v[0].x + v[1].x + v[2].x + v[3].x) / 4;
        var cy = (v[0].y + v[1].y + v[2].y + v[3].y) / 4;
        var ang = b.angle;
        var isLeft = ang < 0;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ang);

        var hw = 9;
        var hh = crusher.radius * 2.25;

        // === Main beam — themed metallic gradient ===
        var beamGrad = ctx.createLinearGradient(-hw, 0, hw, 0);
        beamGrad.addColorStop(0,   'rgba(' + fRgb[0] + ',' + fRgb[1] + ',' + fRgb[2] + ',0.95)');
        beamGrad.addColorStop(0.3, 'rgba(' + mR + ',' + mG + ',' + mB + ',0.9)');
        beamGrad.addColorStop(0.5, 'rgba(' + bR + ',' + bG + ',' + bB + ',0.85)');
        beamGrad.addColorStop(0.7, 'rgba(' + mR + ',' + mG + ',' + mB + ',0.9)');
        beamGrad.addColorStop(1,   'rgba(' + fRgb[0] + ',' + fRgb[1] + ',' + fRgb[2] + ',0.95)');
        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.roundRect(-hw, -hh, hw * 2, hh * 2, 3);
        ctx.fill();

        // === Outer edge glow ===
        ctx.shadowColor = t.funnelGlow;
        ctx.shadowBlur = 6;
        ctx.strokeStyle = t.funnelStroke;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(-hw, -hh, hw * 2, hh * 2, 3);
        ctx.stroke();
        ctx.shadowBlur = 0;

        // === Conveyor belt animation — chevrons sliding down ===
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(-hw, -hh, hw * 2, hh * 2, 3);
        ctx.clip();
        var convSpeed = performance.now() * 0.04; // pixels per ms
        var spacing = 18;
        var offset = convSpeed % spacing;
        ctx.strokeStyle = 'rgba(' + hR + ',' + hG + ',' + hB + ',0.55)';
        ctx.lineWidth = 1.5;
        for (var ci = -1; ci < Math.ceil((hh * 2) / spacing) + 1; ci++) {
            var cy2 = -hh + ci * spacing + offset;
            // Chevron: two angled lines forming a V pointing down
            ctx.beginPath();
            ctx.moveTo(-hw + 2, cy2 - 4);
            ctx.lineTo(0, cy2);
            ctx.lineTo(hw - 2, cy2 - 4);
            ctx.stroke();
        }
        // Moving dots along center
        ctx.fillStyle = 'rgba(' + hR + ',' + hG + ',' + hB + ',0.5)';
        var dotSpacing = 28;
        var dotOffset = (performance.now() * 0.03) % dotSpacing;
        for (var di = -1; di < Math.ceil((hh * 2) / dotSpacing) + 1; di++) {
            var dy = -hh + di * dotSpacing + dotOffset;
            ctx.beginPath();
            ctx.arc(0, dy, 1.5, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();

        // === Bright inner highlight (left edge reflection) ===
        ctx.strokeStyle = 'rgba(' + hR + ',' + hG + ',' + hB + ',0.12)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-hw + 2, -hh + 6);
        ctx.lineTo(-hw + 2, hh - 6);
        ctx.stroke();

        // === Center groove line ===
        ctx.strokeStyle = 'rgba(0,0,0,0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, -hh + 10);
        ctx.lineTo(0, hh - 10);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(' + hR + ',' + hG + ',' + hB + ',0.08)';
        ctx.beginPath();
        ctx.moveTo(1, -hh + 10);
        ctx.lineTo(1, hh - 10);
        ctx.stroke();

        // === Rivets along the beam ===
        var rivetCount = 7;
        for (var ri = 0; ri < rivetCount; ri++) {
            var ry = -hh + 20 + (hh * 2 - 40) * (ri / (rivetCount - 1));
            // Left rivet
            ctx.fillStyle = 'rgba(' + gRgb[0] + ',' + gRgb[1] + ',' + gRgb[2] + ',0.6)';
            ctx.beginPath();
            ctx.arc(-hw + 4.5, ry, 1.8, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = 'rgba(' + hR + ',' + hG + ',' + hB + ',0.3)';
            ctx.beginPath();
            ctx.arc(-hw + 4.5, ry - 0.5, 0.8, 0, Math.PI * 2);
            ctx.fill();
            // Right rivet
            ctx.fillStyle = 'rgba(' + gRgb[0] + ',' + gRgb[1] + ',' + gRgb[2] + ',0.6)';
            ctx.beginPath();
            ctx.arc(hw - 4.5, ry, 1.8, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = 'rgba(' + hR + ',' + hG + ',' + hB + ',0.3)';
            ctx.beginPath();
            ctx.arc(hw - 4.5, ry - 0.5, 0.8, 0, Math.PI * 2);
            ctx.fill();
        }

        // === Panel segments — horizontal dividers ===
        for (var si = 1; si < 4; si++) {
            var sy = -hh + (hh * 2 / 4) * si;
            ctx.strokeStyle = 'rgba(0,0,0,0.25)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(-hw + 2, sy);
            ctx.lineTo(hw - 2, sy);
            ctx.stroke();
            ctx.strokeStyle = 'rgba(' + hR + ',' + hG + ',' + hB + ',0.06)';
            ctx.beginPath();
            ctx.moveTo(-hw + 2, sy + 1);
            ctx.lineTo(hw - 2, sy + 1);
            ctx.stroke();
        }

        // === Bottom flange bracket ===
        ctx.fillStyle = 'rgba(' + mR + ',' + mG + ',' + mB + ',0.9)';
        ctx.beginPath();
        ctx.roundRect(-hw - 4, hh - 14, hw * 2 + 8, 14, [0, 0, 4, 4]);
        ctx.fill();
        ctx.strokeStyle = t.funnelStroke;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(-hw - 4, hh - 14, hw * 2 + 8, 14, [0, 0, 4, 4]);
        ctx.stroke();
        // Flange bolts
        ctx.fillStyle = 'rgba(' + gRgb[0] + ',' + gRgb[1] + ',' + gRgb[2] + ',0.8)';
        ctx.beginPath(); ctx.arc(-hw, hh - 7, 2.2, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(hw, hh - 7, 2.2, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(' + hR + ',' + hG + ',' + hB + ',0.35)';
        ctx.beginPath(); ctx.arc(-hw, hh - 7.5, 1, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(hw, hh - 7.5, 1, 0, Math.PI * 2); ctx.fill();

        // === Top cap ===
        ctx.fillStyle = 'rgba(' + mR + ',' + mG + ',' + mB + ',0.9)';
        ctx.beginPath();
        ctx.roundRect(-hw - 2, -hh, hw * 2 + 4, 8, [3, 3, 0, 0]);
        ctx.fill();
        ctx.strokeStyle = t.funnelStroke;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(-hw - 2, -hh, hw * 2 + 4, 8, [3, 3, 0, 0]);
        ctx.stroke();

        // === Subtle edge glow along inner side ===
        var innerX = isLeft ? hw : -hw;
        ctx.globalAlpha = 0.15;
        var glowGrad = ctx.createLinearGradient(innerX, 0, innerX + (isLeft ? -8 : 8), 0);
        glowGrad.addColorStop(0, t.funnelGlow);
        glowGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGrad;
        ctx.fillRect(isLeft ? innerX - 8 : innerX, -hh + 8, 8, hh * 2 - 16);
        ctx.globalAlpha = 1;

        ctx.restore();
    });
}

// ===== ENHANCED PARTICLES (trails + white core) =====

function drawParticles(ctx) {
    for (let i = crusher.particles.length - 1; i >= 0; i--) {
        const p = crusher.particles[i];

        // Record trail
        if (!p.trail) p.trail = [];
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 3) p.trail.shift();

        p.x += p.vx; p.y += p.vy;
        p.vy += 0.18; p.vx *= 0.99;
        p.life -= p.decay;
        if (p.life <= 0) { crusher.particles.splice(i, 1); continue; }

        ctx.save();

        // Trail line (batched)
        if (p.trail.length > 1) {
            ctx.globalAlpha = p.life * 0.3;
            ctx.strokeStyle = p.color;
            ctx.lineWidth = Math.max(0.5, p.size * p.life * 0.5);
            ctx.beginPath();
            ctx.moveTo(p.trail[0].x, p.trail[0].y);
            for (let t = 1; t < p.trail.length; t++) {
                ctx.lineTo(p.trail[t].x, p.trail[t].y);
            }
            ctx.stroke();
        }

        // Colored glow
        ctx.globalAlpha = p.life * 0.3;
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size * p.life * 1.5, 0, Math.PI * 2); ctx.fill();

        // White hot core
        ctx.globalAlpha = p.life * 0.8;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size * p.life * 0.35, 0, Math.PI * 2); ctx.fill();

        ctx.restore();
    }
}

// ===== AMBIENT PARTICLES (floating dust) =====

function initAmbientParticles() {
    ambientParticles = [];
    for (let i = 0; i < 30; i++) {
        ambientParticles.push({
            x: Math.random() * W, y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.3, vy: -Math.random() * 0.4 - 0.1,
            size: Math.random() * 2 + 0.5,
            alpha: Math.random() * 0.2 + 0.05,
            phase: Math.random() * Math.PI * 2,
            speed: 0.02 + Math.random() * 0.02,
        });
    }
}

function drawAmbientDust(ctx) {
    const now = performance.now() * 0.001;
    const dustCol = getTheme().dustColor;
    ctx.save();
    ctx.fillStyle = dustCol;
    for (const p of ambientParticles) {
        p.x += p.vx; p.y += p.vy;
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;

        const flicker = 0.5 + 0.5 * Math.sin(now * p.speed * 60 + p.phase);
        ctx.globalAlpha = p.alpha * flicker;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();

        if (p.size > 1.5) {
            ctx.globalAlpha = p.alpha * flicker * 0.25;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2); ctx.fill();
        }
    }
    ctx.restore();
}

// ===== VIGNETTE =====

function drawVignette(ctx) {
    if (!_vignetteCanvas) {
        _vignetteCanvas = document.createElement('canvas');
        _vignetteCanvas.width = W;
        _vignetteCanvas.height = H;
        _vignetteCtx = _vignetteCanvas.getContext('2d');
        const cx = W / 2, cy = crusher.y, r = Math.max(W, H) * 0.7;
        var vg = _vignetteCtx.createRadialGradient(cx, cy, r * 0.25, cx, cy, r);
        vg.addColorStop(0, 'rgba(5,5,16,0)');
        vg.addColorStop(0.5, 'rgba(5,5,16,0.15)');
        vg.addColorStop(1, 'rgba(5,5,16,0.55)');
        _vignetteCtx.fillStyle = vg;
        _vignetteCtx.fillRect(0, 0, W, H);
    }
    ctx.drawImage(_vignetteCanvas, 0, 0);
}

// ===== SCREEN FLASH + SHAKE =====

function drawFlash(ctx) {
    if (screenFlash > 0.01) {
        ctx.save();
        ctx.globalAlpha = screenFlash;
        ctx.fillStyle = getTheme().flashColor;
        ctx.fillRect(0, 0, W, H);
        ctx.restore();
        screenFlash *= 0.82;
        if (screenFlash < 0.01) screenFlash = 0;
    }
    // Boost golden pulse overlay
    if (giftSystem.boostActive) {
        ctx.save();
        const pulse = 0.04 + Math.sin(performance.now() * 0.004) * 0.025;
        ctx.globalAlpha = pulse;
        ctx.fillStyle = '#ffcc00';
        ctx.fillRect(0, 0, W, H);
        ctx.restore();
    }
}

function getCanvasBaseTransform() {
    return window.innerWidth > 600 ? 'translateX(-50%) ' : '';
}

function applyShake() {
    var base = getCanvasBaseTransform();
    if (giftSystem.boostActive) {
        var intensity = 2.5;
        var dx = (Math.random() - 0.5) * intensity;
        var dy = (Math.random() - 0.5) * intensity;
        render.canvas.style.transform = base + 'translate(' + dx + 'px,' + dy + 'px)';
        return;
    }
    if (screenShake > 0.3) {
        var dx = (Math.random() - 0.5) * screenShake;
        var dy = (Math.random() - 0.5) * screenShake;
        render.canvas.style.transform = base + 'translate(' + dx + 'px,' + dy + 'px)';
        screenShake *= 0.85;
    } else {
        screenShake = 0;
        render.canvas.style.transform = base;
    }
}

// ===== UTILS =====

function cleanupDebris() {
    Composite.allBodies(engine.world).forEach(b => {
        if ((b.label === 'debris' || b.label === 'block') &&
            (b.position.y > H + 300 || b.position.y < -500 || b.position.x < -300 || b.position.x > W + 300)) {
            Composite.remove(engine.world, b);
        }
    });
}

// ===== FLOATING TEXT (CSS animation) =====
function showFloating(wx, wy) {
    const canvas = document.getElementById('gameCanvas');
    const rect = canvas.getBoundingClientRect();
    const sx = rect.left + (wx / W) * rect.width;
    const sy = rect.top + (wy / H) * rect.height;
    const el = document.createElement('div');
    el.className = 'floatText';
    el.textContent = '+' + game.utilities.formatNumber(game.player.aMPC);
    el.style.left = sx + 'px';
    el.style.top = sy + 'px';
    document.body.appendChild(el);
    el.addEventListener('animationend', function () { el.remove(); });
}

// ===== SPARKLE PARTICLES (CSS) =====
function showSparkles(wx, wy, count) {
    const canvas = document.getElementById('gameCanvas');
    const scaleX = canvas.clientWidth / W;
    const scaleY = canvas.clientHeight / H;
    const sx = wx * scaleX;
    const sy = wy * scaleY;
    count = count || 3;
    for (var i = 0; i < count; i++) {
        var s = document.createElement('div');
        s.className = 'sparkle';
        var angle = (Math.PI * 2 / count) * i + (Math.random() - 0.5) * 0.8;
        var dist = 20 + Math.random() * 35;
        s.style.left = sx + 'px';
        s.style.top = sy + 'px';
        s.style.setProperty('--sx', (Math.cos(angle) * dist) + 'px');
        s.style.setProperty('--sy', (Math.sin(angle) * dist) + 'px');
        s.style.animationDuration = (0.35 + Math.random() * 0.3) + 's';
        document.body.appendChild(s);
        s.addEventListener('animationend', function () { this.remove(); });
    }
}

// ===== TOAST NOTIFICATIONS =====
function showToast(text, icon, color) {
    var container = document.getElementById('toast-container');
    if (!container) return;
    var toast = document.createElement('div');
    toast.className = 'toast';
    if (icon) {
        var ic = document.createElement('span');
        ic.className = 'toastIcon';
        ic.style.background = (color || '#00ffcc') + '22';
        ic.innerHTML = icon;
        toast.appendChild(ic);
    }
    var txt = document.createElement('span');
    txt.textContent = text;
    if (color) txt.style.color = color;
    toast.appendChild(txt);
    container.appendChild(toast);
    setTimeout(function () {
        toast.classList.add('out');
        toast.addEventListener('animationend', function () { toast.remove(); });
    }, 2800);
}

function lighten(hex) {
    if (!hex || hex[0] !== '#') return '#ffffff';
    let r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return '#' + [Math.min(255, r + 60), Math.min(255, g + 60), Math.min(255, b + 60)].map(c => c.toString(16).padStart(2, '0')).join('');
}

// ===== AUTO-DROP =====
let autoDropTimer = 0;
function countBlocks() {
    let n = 0;
    Composite.allBodies(engine.world).forEach(b => { if (b.label === 'block') n++; });
    return n;
}
function clearAllBlocks() {
    var toRemove = Composite.allBodies(engine.world).filter(b => b.label === 'block' || b.label === 'debris');
    Composite.remove(engine.world, toRemove);
}
function autoDropTick() {
    if (game.player.aMPF <= 0) return;
    autoDropTimer++;

    const cps = game.player.aMPF * game.settings.frameRate;
    const logCps = Math.log10(cps + 1);

    // Interval: 30 frames (~1s) at low CPS → 5 frames (~0.17s) at high CPS
    const interval = logCps < 1 ? 30 : Math.max(5, Math.round(30 / (logCps * 0.8)));

    if (autoDropTimer >= interval) {
        autoDropTimer = 0;

        // Max blocks on screen: scales fast early, caps at 35
        const maxBlocks = Math.min(35, 4 + Math.floor(logCps * 4));
        const current = countBlocks();
        if (current >= maxBlocks) return;

        const owned = game.buildings.filter(b => b.amount > 0);
        if (owned.length === 0) return;

        // Drop count: always at least 1, up to 6 at high CPS
        const dropCount = Math.min(6, Math.max(1, Math.floor(logCps)));
        const canDrop = Math.min(dropCount, maxBlocks - current);

        for (let i = 0; i < canDrop; i++) {
            const mat = owned[Math.floor(Math.random() * owned.length)];
            const idx = game.utilities.getBuildingIndexByName(mat.name);
            const xOff = (Math.random() - 0.5) * 160;
            spawnBlock(W / 2 + xOff, 10 + Math.random() * 40, 44 + Math.random() * 12, MATERIALS[idx].color);
        }
    }
}

// ===== CLICKER ECONOMY =====
class Building {
    constructor(name, color, cost, effect, upgrades, locked) {
        this.name = name; this.color = color;
        this.amount = 0; this.originalCost = cost; this.cost = cost;
        this.multiplier = 1; this.baseEffect = effect;
        this.effect = 0; this.upgrades = upgrades; this.locked = locked;
    }
    buy(n) {
        if (game.player.spendCoins(this.getCost(n))) {
            SFX.buy();
            var wasZero = this.amount === 0;
            this.amount += n;
            this.cost = Math.round(this.cost * Math.pow(1.15, n));
            game.settings.recalculateCPS = true;
            let idx = game.utilities.getBuildingIndexByName(this.name);
            if (idx + 1 < game.buildings.length && game.buildings[idx + 1].locked) {
                game.buildings[idx + 1].locked = false;
                game.renderShopTabs();
                showToast(t('toast.unlocked', {name: t('mat.' + _matKey(game.buildings[idx + 1].name))}), matIcon(game.buildings[idx + 1].name, 14, game.buildings[idx + 1].color), game.buildings[idx + 1].color);
            }
            if (wasZero) {
                showToast(t('toast.first', {name: t('mat.' + _matKey(this.name))}), matIcon(this.name, 14, this.color), this.color);
            }
        } else {
            SFX.error();
        }
    }
    setCost() { this.cost = this.originalCost; for (let i = 0; i < this.amount; i++) this.cost = Math.round(this.cost * 1.15); }
    buyUpgrade(name) {
        this.upgrades.forEach(u => {
            if (u.name === name && game.player.spendCoins(u.cost)) {
                u.owned = true;
                SFX.upgrade();
                game.settings.recalculateCPS = true;
                showToast(t('toast.acquired', {name: u.name}), iconSVG('lightning', 14, '#ff8800'), '#ff8800');
            }
        });
    }
    calcUpgrades() { let m = 1; if (this.name === 'Stone') game.player.aMPC = 1; this.upgrades.forEach(u => { if (u.owned) { m *= 2; if (this.name === 'Stone') game.player.aMPC *= 2; } }); if (this.name === 'Stone') game.player.aMPC += game.prestige.boosts.tapFlat.count; return m; }
    getCPS() { this.multiplier = this.calcUpgrades(); this.effect = (this.baseEffect * this.amount) * this.multiplier; return this.effect; }
    getCost(n) { let t = this.cost, p = this.cost; for (let i = 0; i < n - 1; i++) t += Math.round(p *= 1.15); return t; }

    // ===== PREMIUM genShop — horizontal card layout =====
    genShop() {
        const f = game.utilities.formatNumber;
        const s = this.baseEffect * this.multiplier;
        const idx = game.utilities.getBuildingIndexByName(this.name);
        const matColor = MATERIALS[idx] ? MATERIALS[idx].color : '#888';

        var matName = t('mat.' + _matKey(this.name));
        return '<div class="shopInfo" style="--mat-color:' + matColor + ';--mat-glow:' + matColor + '30">' +
            '<div class="matEmoji">' + matIcon(this.name, 44, matColor) + '</div>' +
            '<div class="matBody">' +
            '<div class="matTitle">' + matName + '</div>' +
            '<div class="matStats">' +
            '<span class="matStatGroup">' + t('shop.owned') + ': <b>' + this.amount + '</b></span>' +
            '<span class="matStatDot">·</span>' +
            '<span class="matStatGroup">' + t('shop.each') + ': ' + iconSVG('coin', 13, '#00ffcc') + '<b>' + f(s) + '</b>' + t('hud.perSec') + '</span>' +
            '<span class="matStatDot">·</span>' +
            '<span class="matStatGroup">' + t('shop.total') + ': ' + iconSVG('coin', 13, '#00ffcc') + '<b>' + f(this.effect) + '</b>' + t('hud.perSec') + '</span>' +
            '</div>' +
            '</div>' +
            '</div>' + this.genBuy() + this.genUpgrades();
    }

    // ===== PREMIUM genBuy — shine sweep + cantAfford =====
    genBuy() {
        const f = game.utilities.formatNumber;
        const c1 = this.getCost(1), c5 = this.getCost(5), c10 = this.getCost(10);
        const coins = game.player.cookies;

        var btn = function (n, cost) {
            var cant = coins < cost ? ' cantAfford' : '';
            return '<button class="' + cant + '" onclick="game.buyBuilding(\'' + this.name + '\',' + n + ')">x' + n + '<b>' + f(cost) + '</b></button>';
        }.bind(this);

        return '<div class="btnGroup">' + btn(1, c1) + btn(5, c5) + btn(10, c10) + '</div>';
    }

    // ===== PREMIUM genUpgrades — glassmorphism + bought state =====
    genUpgrades() {
        let h = '';
        let nm = false;
        const f = game.utilities.formatNumber;
        const coins = game.player.cookies;
        var mk = _matKey(this.name);
        var matName = t('mat.' + mk);

        this.upgrades.forEach(u => {
            var suffixKey = u.name.replace(this.name + ' ', '').toLowerCase();
            var upgDisplayName = t('upg.tpl', {mat: matName, matGen: t('mat.' + mk + '.gen'), suffix: t('upg.' + suffixKey)});
            if (u.owned) {
                h += '<div class="upgBought"><span class="checkMark">✓</span> <b>' + upgDisplayName + '</b> — ' + t('upg.desc') + '</div>';
            } else if (u.req(this.amount)) {
                var cant = coins < u.cost ? ' cantAfford' : '';
                h += '<button class="upgBtn' + cant + '" onclick="game.buyUpgrade(\'' + this.name + '\',\'' + u.name + '\')">' +
                    '<span class="upgIcon">' + iconSVG('lightning', 18, '#ff8800') + '</span>' +
                    '<span class="upgText"><b>' + upgDisplayName + '</b><span class="upgDesc">' + t('upg.desc') + '</span><br><span class="cost">' + iconSVG('coin', 13, '#ffe4b0') + ' ' + f(u.cost) + '</span></span>' +
                    '</button>';
            } else if (!nm) {
                nm = true;
                h += '<button class="upgNext">' + t('shop.nextAt') + ' <b>' + u.limit + '</b> ' + matName + '</button>';
            }
        });
        return h;
    }
}

class Upgrade {
    constructor(n, c, d, l) { this.name = n; this.cost = c; this.desc = d; this.limit = l; this.owned = false; }
    req(a) { return a >= this.limit; }
}

class Player {
    constructor() { this.cookies = 0; this.cookieStats = { Earned: 0, Spent: 0, Clicked: 0 }; this.aMPF = 0; this.aMPC = 1; }
    earnCookie(n) { this.cookies += n; this.cookieStats.Earned += n; }
    spendCoins(n) { if (this.cookies >= n) { this.cookies -= n; this.cookieStats.Spent += n; return true; } return false; }
    clickCookie() { this.earnCookie(this.aMPC); this.cookieStats.Clicked += this.aMPC; }
}

function createBuildings() {
    return MATERIALS.map((m, i) => {
        const ups = UPGRADE_TEMPLATES.map(t => new Upgrade(m.name + ' ' + t.suffix, Math.round(m.cost * t.costMul), t.desc, t.limit));
        return new Building(m.name, m.color, m.cost, m.cps, ups, i > 0);
    });
}

// ===== GIFT BOX SYSTEM =====
const giftSystem = {
    cooldown: 180000,
    lastShown: Date.now(),
    boostActive: false,
    boostEnd: 0,
    rainTimer: null,

    _giftVisible: false,

    tick() {
        if (!this.boostActive && !this._giftVisible && Date.now() - this.lastShown >= this.cooldown) {
            this.showGift();
        }
        if (this.boostActive) {
            if (Date.now() >= this.boostEnd) {
                this.deactivateBoost();
            } else {
                const left = Math.ceil((this.boostEnd - Date.now()) / 1000);
                const el = document.getElementById('boostTimer');
                if (el) el.textContent = left;
            }
        }
    },

    showGift() {
        this._giftVisible = true;
        document.getElementById('giftBox').classList.add('visible');
    },

    onGiftClick() {
        this.showConfirm();
    },

    showConfirm() {
        const overlay = document.createElement('div');
        overlay.className = 'adOverlay';
        overlay.innerHTML =
            '<div class="adEmoji">🎁</div>' +
            '<div class="adTitle">' + t('gift.title') + '</div>' +
            '<div class="adDesc">' + t('gift.desc') + '</div>' +
            '<div class="adButtons">' +
            '<button class="adBtn adBtnNo" id="adBtnNo">' + t('gift.no') + '</button>' +
            '<button class="adBtn adBtnYes" id="adBtnYes">' + t('gift.yes') + '</button>' +
            '</div>';
        document.body.appendChild(overlay);

        overlay.querySelector('#adBtnNo').onclick = () => {
            overlay.remove();
        };
        overlay.querySelector('#adBtnYes').onclick = () => {
            document.getElementById('giftBox').classList.remove('visible');
            this.lastShown = Date.now();
            this.playAd(overlay);
        };
    },

    playAd(overlay) {
        overlay.innerHTML = '<div class="adEmoji">📺</div><div class="adTimer">5</div><div class="adLabel">' + t('gift.adEnds') + '</div>';
        let sec = 5;
        const timer = setInterval(() => {
            sec--;
            overlay.querySelector('.adTimer').textContent = sec;
            if (sec <= 0) {
                clearInterval(timer);
                overlay.remove();
                this.activateBoost();
            }
        }, 1000);
    },

    activateBoost() {
        this.boostActive = true;
        this.lastShown = Date.now();
        this.boostEnd = Date.now() + 30000;
        document.getElementById('boostBanner').classList.add('active');
        document.getElementById('boostTimer').textContent = '30';
        this._startRain();
        this._savedSpinSpeed = crusher.spinSpeed;
        crusher.spinSpeed = 0.14;
    },

    _startRain() {
        clearInterval(this.rainTimer);
        const cps = game.player.aMPF * game.settings.frameRate;
        // interval: 1200ms at 0 CPS → 300ms at high CPS
        const interval = Math.max(300, Math.round(1200 / Math.max(1, Math.log10(cps + 1) * 1.2)));
        this.rainTimer = setInterval(() => this.rainTick(), interval);
    },

    deactivateBoost() {
        clearInterval(this.rainTimer);
        this.rainTimer = null;
        this.boostActive = false;
        this._giftVisible = false;
        document.getElementById('boostBanner').classList.remove('active');
        this.lastShown = Date.now();
        crusher.spinSpeed = this._savedSpinSpeed || 0.03;
    },

    rainTick() {
        const cps = game.player.aMPF * game.settings.frameRate;
        // count: 1 block at low CPS, up to 3 at high CPS
        const count = Math.min(3, 1 + Math.floor(Math.log10(cps + 1) * 0.5));
        const owned = game.buildings.filter(b => b.amount > 0);
        const size = count <= 1 ? 56 : 44;
        for (let i = 0; i < count; i++) {
            let color = MATERIALS[0].color;
            if (owned.length > 0) {
                const mat = owned[Math.floor(Math.random() * owned.length)];
                color = MATERIALS[game.utilities.getBuildingIndexByName(mat.name)].color;
            }
            spawnBlock(W / 2 + (Math.random() - 0.5) * 160, 15 + Math.random() * 25, size, color);
        }
    }
};

// ===== TAP FRENZY SYSTEM =====
const frenzySystem = {
    cooldown: 150000,
    lastShown: 0,
    active: false,
    frenzyEnd: 0,
    duration: 15000,
    _visible: false,
    _tapMultiplier: 0,

    tick() {
        if (!this.active && !this._visible && Date.now() - this.lastShown >= this.cooldown) {
            this.showFrenzy();
        }
        if (this.active) {
            if (Date.now() >= this.frenzyEnd) {
                this.deactivate();
            } else {
                const left = Math.ceil((this.frenzyEnd - Date.now()) / 1000);
                const el = document.getElementById('frenzyTimer');
                if (el) el.textContent = left;
            }
        }
    },

    showFrenzy() {
        this._visible = true;
        document.getElementById('frenzyBox').classList.add('visible');
    },

    onFrenzyClick() {
        document.getElementById('frenzyBox').classList.remove('visible');
        this._visible = false;
        this.activate();
    },

    _calcTapPower() {
        var cps = game.player.aMPF * game.settings.frameRate;
        return Math.max(game.player.aMPC * 10, Math.floor(cps * 5));
    },

    activate() {
        this.active = true;
        this.lastShown = Date.now();
        this._tapMultiplier = this._calcTapPower();
        this.frenzyEnd = Date.now() + this.duration;
        document.getElementById('frenzyBanner').classList.add('active');
        document.getElementById('frenzyTimer').textContent = Math.ceil(this.duration / 1000);
        SFX.upgrade();
    },

    deactivate() {
        this.active = false;
        this._tapMultiplier = 0;
        document.getElementById('frenzyBanner').classList.remove('active');
        this.lastShown = Date.now();
    },

    getTapBonus() {
        return this.active ? this._tapMultiplier : 0;
    }
};

// ===== GAME =====
let game = {
    settings: { frameRate: 30, recalculateCPS: true, key: 'crushfactory' },
    _lastSaveTime: 0,
    _saveCounter: 0,
    _saveInterval: 150, // save every 150 frames (~5 sec at 30fps)
    buildings: createBuildings(),
    prestige: {
        count: 0, gems: 0, totalGems: 0,
        skins: { neonCrusher: { owned: false, price: 8 }, copperMachine: { owned: false, price: 10 }, infernoSaw: { owned: false, price: 18 }, shadowBlade: { owned: false, price: 22 }, arcticGrinder: { owned: false, price: 25 }, sakuraPetal: { owned: false, price: 30 }, voidReaper: { owned: false, price: 35 }, goldenCrown: { owned: false, price: 40 }, plasmaCutter: { owned: false, price: 50 }, bloodMoon: { owned: false, price: 60 }, crystalIce: { owned: false, price: 70 }, toxicWaste: { owned: false, price: 75 }, jungleViper: { owned: false, price: 90 }, celestialGear: { owned: false, price: 100 }, dragonForge: { owned: false, price: 140 }, chronoBreaker: { owned: false, price: 200 }, galaxyVortex: { owned: false, price: 250 }, phoenixRise: { owned: false, price: 350 }, quantumShift: { owned: false, price: 450 }, eternityEngine: { owned: false, price: 600 } },
        activeSkin: null,
        boosts: {
            cpsPercent: { count: 0, price: 8 },
            tapFlat: { count: 0, price: 10 },
        },
    },
    achievements: {},
    vibration: true,
    sound: true,
    _premiumTab: 'skins',
    _displayedCoins: 0,
    _lastShopRender: 0,
    _shopThrottle: 500,
    utilities: {
        ShortNumbers: ['K', 'M', 'B', 'T', 'Qua', 'Qui', 'Sex', 'Sep', 'Oct', 'Non', 'Dec', 'Und', 'Duo'],
        formatNumber(n) {
            if (n >= 1000) { for (let i = game.utilities.ShortNumbers.length - 1; i >= 0; i--) { let d = Math.pow(10, (i + 1) * 3); if (n >= d) { let dec = Math.min(3 + i, 6); let m = Math.pow(10, dec); let s = (Math.trunc((n / d) * m) / m).toFixed(dec); let parts = s.split('.'); parts[1] = parts[1].replace(/(\d{3})(?=\d)/g, '$1,'); return parts[0] + '.' + parts[1] + ' ' + game.utilities.ShortNumbers[i]; } } }
            return (Math.trunc(n * 10) / 10).toFixed(1);
        },
        getBuildingByName(n) { return game.buildings.find(b => b.name === n); },
        getBuildingIndexByName(n) { return game.buildings.findIndex(b => b.name === n); },
        getBuildingCount() { return game.buildings.reduce((s, b) => s + b.amount, 0); },
        stringToBool(s) { return s === 'true'; }
    },
    saving: {
        export() {
            let s = game.player.cookies + '|' + game.player.cookieStats.Earned + '|' + game.player.cookieStats.Spent + '|' + game.player.cookieStats.Clicked + '-';
            let f = true;
            game.buildings.forEach(b => { s += (f ? '' : '#') + b.amount + '|' + b.locked + '|'; f = false; b.upgrades.forEach(u => { s += u.owned + ':'; }); s = s.slice(0, -1); });
            // Prestige data after ~
            var pr = game.prestige;
            s += '~' + pr.count + '|' + pr.gems + '|' + pr.totalGems + '|' + (pr.skins.neonCrusher.owned ? 1 : 0) + '|' + (pr.activeSkin || '') + '|' + pr.boosts.cpsPercent.count + '|' + pr.boosts.tapFlat.count + '|' + (pr.skins.infernoSaw.owned ? 1 : 0) + '|' + (game.vibration ? 1 : 0) + '|' + Date.now() + '|' + (pr.skins.voidReaper.owned ? 1 : 0) + '|' + (pr.skins.arcticGrinder.owned ? 1 : 0) + '|' + (pr.skins.celestialGear.owned ? 1 : 0) + '|' + (pr.skins.plasmaCutter.owned ? 1 : 0) + '|' + (pr.skins.bloodMoon.owned ? 1 : 0) + '|' + (pr.skins.toxicWaste.owned ? 1 : 0) + '|' + (pr.skins.dragonForge.owned ? 1 : 0) + '|' + (pr.skins.chronoBreaker.owned ? 1 : 0) + '|' + (game.sound ? 1 : 0) + '|' + (pr.skins.copperMachine.owned ? 1 : 0) + '|' + (pr.skins.shadowBlade.owned ? 1 : 0) + '|' + (pr.skins.sakuraPetal.owned ? 1 : 0) + '|' + (pr.skins.goldenCrown.owned ? 1 : 0) + '|' + (pr.skins.crystalIce.owned ? 1 : 0) + '|' + (pr.skins.jungleViper.owned ? 1 : 0) + '|' + (pr.skins.galaxyVortex.owned ? 1 : 0) + '|' + (pr.skins.phoenixRise.owned ? 1 : 0) + '|' + (pr.skins.quantumShift.owned ? 1 : 0) + '|' + (pr.skins.eternityEngine.owned ? 1 : 0);
            // Achievements data after ^
            var achIds = Object.keys(game.achievements);
            if (achIds.length > 0) s += '^' + achIds.map(id => game.achievements[id] === 'ready' ? id + '!' : id).join(',');
            else s += '^';
            try { localStorage.setItem(game.settings.key, premagic(s)); } catch (e) { }
        },
        import(raw) {
            let s = magic(raw); if (!s) return;
            // Split achievements data (after ^)
            var achRaw = '';
            if (s.indexOf('^') !== -1) {
                var caretParts = s.split('^');
                s = caretParts[0];
                achRaw = caretParts[1] || '';
            }
            // Split prestige data (after ~)
            var prestigeRaw = '';
            var mainRaw = s;
            if (s.indexOf('~') !== -1) {
                var tildeParts = s.split('~');
                mainRaw = tildeParts[0];
                prestigeRaw = tildeParts[1] || '';
            }
            let parts = mainRaw.split('-'), pd = parts[0].split('|');
            try { game.player.cookies = parseFloat(pd[0]); game.player.cookieStats.Earned = parseFloat(pd[1]); game.player.cookieStats.Spent = parseFloat(pd[2]); game.player.cookieStats.Clicked = parseFloat(pd[3]); } catch (e) { }
            let bd = parts[1].split('#');
            try { for (let i = 0; i < game.buildings.length; i++) { if (!bd[i]) continue; let p = bd[i].split('|'), b = game.buildings[i]; b.amount = parseFloat(p[0]); b.setCost(); b.locked = game.utilities.stringToBool(p[1]); if (p[2]) { let ups = p[2].split(':'); b.upgrades.forEach((u, j) => { if (ups[j] !== undefined) u.owned = game.utilities.stringToBool(ups[j]); }); } } } catch (e) { }
            // Load prestige data
            if (prestigeRaw) {
                try {
                    var pp = prestigeRaw.split('|');
                    var pr = game.prestige;
                    pr.count = parseInt(pp[0]) || 0;
                    pr.gems = parseInt(pp[1]) || 0;
                    pr.totalGems = parseInt(pp[2]) || 0;
                    pr.skins.neonCrusher.owned = pp[3] === '1';
                    pr.activeSkin = pp[4] || null;
                    pr.boosts.cpsPercent.count = parseInt(pp[5]) || 0;
                    pr.boosts.tapFlat.count = parseInt(pp[6]) || 0;
                    if (pp[7] !== undefined) pr.skins.infernoSaw.owned = pp[7] === '1';
                    if (pp[8] !== undefined) game.vibration = pp[8] !== '0';
                    if (pp[9] !== undefined) game._lastSaveTime = parseInt(pp[9]) || 0;
                    if (pp[10] !== undefined) pr.skins.voidReaper.owned = pp[10] === '1';
                    if (pp[11] !== undefined) pr.skins.arcticGrinder.owned = pp[11] === '1';
                    if (pp[12] !== undefined) pr.skins.celestialGear.owned = pp[12] === '1';
                    if (pp[13] !== undefined) pr.skins.plasmaCutter.owned = pp[13] === '1';
                    if (pp[14] !== undefined) pr.skins.bloodMoon.owned = pp[14] === '1';
                    if (pp[15] !== undefined) pr.skins.toxicWaste.owned = pp[15] === '1';
                    if (pp[16] !== undefined) pr.skins.dragonForge.owned = pp[16] === '1';
                    if (pp[17] !== undefined) pr.skins.chronoBreaker.owned = pp[17] === '1';
                    if (pp[18] !== undefined) game.sound = pp[18] !== '0';
                    if (pp[19] !== undefined) pr.skins.copperMachine.owned = pp[19] === '1';
                    if (pp[20] !== undefined) pr.skins.shadowBlade.owned = pp[20] === '1';
                    if (pp[21] !== undefined) pr.skins.sakuraPetal.owned = pp[21] === '1';
                    if (pp[22] !== undefined) pr.skins.goldenCrown.owned = pp[22] === '1';
                    if (pp[23] !== undefined) pr.skins.crystalIce.owned = pp[23] === '1';
                    if (pp[24] !== undefined) pr.skins.jungleViper.owned = pp[24] === '1';
                    if (pp[25] !== undefined) pr.skins.galaxyVortex.owned = pp[25] === '1';
                    if (pp[26] !== undefined) pr.skins.phoenixRise.owned = pp[26] === '1';
                    if (pp[27] !== undefined) pr.skins.quantumShift.owned = pp[27] === '1';
                    if (pp[28] !== undefined) pr.skins.eternityEngine.owned = pp[28] === '1';
                } catch (e) { }
            }
            // Load achievements
            game.achievements = {};
            if (achRaw) {
                achRaw.split(',').forEach(tok => {
                    if (!tok) return;
                    if (tok.endsWith('!')) game.achievements[tok.slice(0, -1)] = 'ready';
                    else game.achievements[tok] = true;
                });
            }
            game.settings.recalculateCPS = true; game.renderShopTabs(); game.updateShop(game.currentShop);
            game.updateAchBadge();
        },
        load() { try { let s = localStorage.getItem(game.settings.key); if (s) this.import(s); } catch (e) { } },
        wipeSave() { clearAllBlocks(); game.player = new Player(); game.buildings = createBuildings(); game.prestige = { count: 0, gems: 0, totalGems: 0, skins: { neonCrusher: { owned: false, price: 8 }, copperMachine: { owned: false, price: 10 }, infernoSaw: { owned: false, price: 18 }, shadowBlade: { owned: false, price: 22 }, arcticGrinder: { owned: false, price: 25 }, sakuraPetal: { owned: false, price: 30 }, voidReaper: { owned: false, price: 35 }, goldenCrown: { owned: false, price: 40 }, plasmaCutter: { owned: false, price: 50 }, bloodMoon: { owned: false, price: 60 }, crystalIce: { owned: false, price: 70 }, toxicWaste: { owned: false, price: 75 }, jungleViper: { owned: false, price: 90 }, celestialGear: { owned: false, price: 100 }, dragonForge: { owned: false, price: 140 }, chronoBreaker: { owned: false, price: 200 }, galaxyVortex: { owned: false, price: 250 }, phoenixRise: { owned: false, price: 350 }, quantumShift: { owned: false, price: 450 }, eternityEngine: { owned: false, price: 600 } }, activeSkin: null, boosts: { cpsPercent: { count: 0, price: 8 }, tapFlat: { count: 0, price: 10 } } }; game.achievements = {}; game.vibration = true; game.sound = true; game._displayedCoins = 0; game.settings.recalculateCPS = true; game.renderShopTabs(); game.updateShop('Stone'); game.saving.export(); game.updateAchBadge(); }
    },
    player: new Player(),
    currentShop: 'Stone',
    checkAchievements() {
        ACHIEVEMENTS.forEach(a => {
            if (game.achievements[a.id]) return;
            try { if (!a.check()) return; } catch (e) { return; }
            game.achievements[a.id] = 'ready';
            showToast(t('toast.achReady', {name: t('ach.' + a.id + '.name')}), a.icon, '#ffcc00');
            game.saving.export();
            game.updateAchBadge();
        });
    },
    claimAchievement(id) {
        if (game.achievements[id] !== 'ready') return;
        var a = ACHIEVEMENTS.find(x => x.id === id);
        if (!a) return;
        game.achievements[id] = true;
        game.prestige.gems += a.gem;
        game.prestige.totalGems += a.gem;
        SFX.achievement();
        showToast(t('toast.achGem', {name: t('ach.' + a.id + '.name'), n: a.gem}), a.icon, '#ffcc00');
        game.saving.export();
        game.updateAchBadge();
        game.renderAchievements();
    },
    claimAllAchievements() {
        var totalGems = 0;
        var count = 0;
        ACHIEVEMENTS.forEach(a => {
            if (game.achievements[a.id] !== 'ready') return;
            game.achievements[a.id] = true;
            game.prestige.gems += a.gem;
            game.prestige.totalGems += a.gem;
            totalGems += a.gem;
            count++;
        });
        if (count === 0) return;
        SFX.achievement();
        showToast(t('toast.achClaimAll', {n: totalGems}), '\uD83C\uDFC6', '#ffcc00');
        game.saving.export();
        game.updateAchBadge();
        game.renderAchievements();
    },
    updateAchBadge() {
        var readyCount = 0;
        Object.keys(game.achievements).forEach(id => {
            if (game.achievements[id] === 'ready') readyCount++;
        });
        var btn = document.getElementById('achievementsBtn');
        var badge = document.getElementById('achBadge');
        if (readyCount > 0) {
            btn.classList.add('achHasReady');
            if (!badge) {
                badge = document.createElement('span');
                badge.id = 'achBadge';
                badge.className = 'achBadge';
                btn.parentElement.appendChild(badge);
            }
            badge.textContent = readyCount;
            badge.style.display = '';
        } else {
            btn.classList.remove('achHasReady');
            if (badge) badge.style.display = 'none';
        }
    },
    logic() {
        game.updateDisplays();
        if (game.settings.recalculateCPS) { let c = 0; game.buildings.forEach(b => { c += b.getCPS(); }); c *= (1 + game.prestige.boosts.cpsPercent.count * 0.05); game.settings.recalculateCPS = false; game.player.aMPF = c / game.settings.frameRate; game.throttledShopUpdate(); }
        autoDropTick();
        giftSystem.tick();
        frenzySystem.tick();
        game._shopRefreshCounter = (game._shopRefreshCounter || 0) + 1;
        if (game._shopRefreshCounter >= 30) { game._shopRefreshCounter = 0; if (document.getElementById('shopOverlay').classList.contains('active')) game.throttledShopUpdate(); }
        _achCheckFrame++;
        if (_achCheckFrame >= 60) { _achCheckFrame = 0; game.checkAchievements(); }
        const earnMul = giftSystem.boostActive ? 2 : 1;
        game._saveCounter++;
        var shouldSave = game._saveCounter >= game._saveInterval;
        if (shouldSave) game._saveCounter = 0;
        if (document.hasFocus()) { game.player.earnCookie(game.player.aMPF * earnMul); if (shouldSave) game.saving.export(); setTimeout(game.logic, 1000 / game.settings.frameRate); }
        else { game.player.earnCookie(game.player.aMPF * game.settings.frameRate * earnMul); if (shouldSave) game.saving.export(); setTimeout(game.logic, 1000); }
    },
    updateDisplays() {
        const f = this.utilities.formatNumber, p = this.player;
        document.title = t('title') + ' | ' + f(p.cookies);

        // Lerp coins display
        var target = p.cookies;
        if (Math.abs(this._displayedCoins - target) < 2) {
            this._displayedCoins = target;
        } else {
            this._displayedCoins += (target - this._displayedCoins) * 0.15;
        }
        if (_domCoins) _domCoins.textContent = f(this._displayedCoins);
        const boostMul = giftSystem.boostActive ? 2 : 1;
        if (_domCps) _domCps.textContent = f(p.aMPF * this.settings.frameRate * boostMul);
        if (_domCpc) _domCpc.textContent = f(p.aMPC * boostMul + frenzySystem.getTapBonus());
        if (_domGems) _domGems.textContent = this.prestige.gems;
    },
    renderShopTabs() {
        let h = '';
        this.buildings.forEach(b => {
            if (!b.locked) {
                let a = b.name === this.currentShop ? ' active' : '';
                h += '<button class="shopTab' + a + '" onclick="game.updateShop(\'' + b.name + '\')">' + matIcon(b.name, 16, b.color) + ' ' + t('mat.' + _matKey(b.name)) + '</button>';
            }
        });
        document.getElementById('shopTabs').innerHTML = h;
    },
    updateShop(n) { this.currentShop = n; let b = this.utilities.getBuildingByName(n); if (!b) return; document.getElementById('shopContent').innerHTML = b.genShop(); var translatedName = t('mat.' + _matKey(n)); document.querySelectorAll('.shopTab').forEach(function(tab) { tab.classList.toggle('active', tab.textContent.includes(translatedName)); }); },
    throttledShopUpdate() {
        var now = Date.now();
        if (now - this._lastShopRender < this._shopThrottle) return;
        this._lastShopRender = now;
        this.updateShop(this.currentShop);
    },
    buyBuilding(n, a) { let b = this.utilities.getBuildingByName(n); if (b) b.buy(a); },
    buyUpgrade(bn, un) { let b = this.utilities.getBuildingByName(bn); if (b) b.buyUpgrade(un); },
    toggleShop() {
        var overlay = document.getElementById('shopOverlay');
        if (overlay.classList.contains('active')) {
            overlay.classList.remove('active');
        } else {
            overlay.classList.add('active');
            document.querySelector('.shopOverlay .shopTitle').innerHTML = iconSVG('cart', 20, '#ffee00') + ' ' + t('shop.materials');
            this.updateShop(this.currentShop);
        }
    },

    // ===== PRESTIGE + PREMIUM SHOP =====
    getPrestigeReward() {
        var earned = this.player.cookieStats.Earned;
        if (earned < 1e7) return 0;
        return Math.floor(Math.cbrt(earned / 1e7));
    },
    doPrestige() {
        var reward = this.getPrestigeReward();
        if (reward <= 0) { showToast(t('toast.prestigeNeed'), iconSVG('gem', 14, '#ff4444'), '#ff4444'); return; }
        var self = this;
        var overlay = document.createElement('div');
        overlay.className = 'adOverlay';
        overlay.innerHTML =
            '<div class="adEmoji">✨</div>' +
            '<div class="adTitle">' + t('prestige.title', {n: self.prestige.count + 1}) + '</div>' +
            '<div class="adDesc">' + t('prestige.reset') + '<br>' + t('prestige.reward', {n: reward}) + '</div>' +
            '<div class="adButtons">' +
            '<button class="adBtn adBtnNo" id="prestigeNo">' + t('prestige.cancel') + '</button>' +
            '<button class="adBtn adBtnYes" id="prestigeYes">' + t('prestige.continue') + '</button>' +
            '</div>';
        document.body.appendChild(overlay);
        overlay.querySelector('#prestigeNo').onclick = function() { overlay.remove(); };
        overlay.querySelector('#prestigeYes').onclick = function() {
            overlay.remove();
            SFX.prestige();
            self.prestige.gems += reward;
            self.prestige.totalGems += reward;
            self.prestige.count++;
            clearAllBlocks();
            self.player = new Player();
            self.buildings = createBuildings();
            self._displayedCoins = 0;
            self.settings.recalculateCPS = true;
            self.renderShopTabs();
            self.updateShop('Stone');
            self.saving.export();
            showToast(t('toast.prestige', {n: reward}), iconSVG('gem', 14, '#00ffcc'), '#00ffcc');
            self.renderPrestigeSection();
            self.updatePremiumShop(self._premiumTab);
        };
    },

    buyPremiumSkin(key) {
        var skin = this.prestige.skins[key];
        if (!skin || skin.owned || this.prestige.gems < skin.price) return;
        this.prestige.gems -= skin.price;
        skin.owned = true;
        this.prestige.activeSkin = key;
        this.settings.recalculateCPS = true;
        this.saving.export();
        showToast(t('toast.skinUnlocked'), iconSVG('gem', 14, '#00ccff'), '#00ccff');
        this.updatePremiumShop(this._premiumTab);
    },

    equipSkin(key) {
        if (key === 'default') {
            this.prestige.activeSkin = null;
        } else {
            var skinEntry = SKIN_LIST.find(function(s) { return s.key === key; });
            if (!skinEntry) return;
            if (skinEntry.price === 0) {
                this.prestige.activeSkin = key;
            } else {
                var skin = this.prestige.skins[key];
                if (!skin || !skin.owned) return;
                this.prestige.activeSkin = key;
            }
        }
        this.saving.export();
        this.updatePremiumShop(this._premiumTab);
    },

    buyPremiumBoost(key) {
        var boost = this.prestige.boosts[key];
        if (!boost || this.prestige.gems < boost.price) return;
        this.prestige.gems -= boost.price;
        boost.count++;
        this.settings.recalculateCPS = true;
        this.saving.export();
        showToast(t('toast.boostBought'), iconSVG('lightning', 14, '#ff8800'), '#ff8800');
        this.updatePremiumShop(this._premiumTab);
    },

    togglePremiumShop() {
        var overlay = document.getElementById('premiumOverlay');
        if (overlay.classList.contains('active')) {
            this._stopSkinPreviews();
            overlay.classList.remove('active');
        } else {
            overlay.classList.add('active');
            document.querySelector('.premiumTitle').innerHTML = '💎 ' + t('hud.premium');
            this.renderPrestigeSection();
            this.renderPremiumTabs();
            this.updatePremiumShop(this._premiumTab);
        }
    },

    renderPrestigeSection() {
        var reward = this.getPrestigeReward();
        var canPrestige = reward > 0;
        var btnClass = canPrestige ? 'prestigeBtn available' : 'prestigeBtn locked';
        var btnText = canPrestige
            ? iconSVG('gem', 16, '#00ffcc') + ' ' + t('prem.prestigeBtn', {n: reward})
            : t('prem.earnMore');

        return '<div class="prestigeSection">' +
            '<div class="prestigeTitle">' + iconSVG('gem', 18, '#00ffcc') + ' ' + t('prem.prestige') + '</div>' +
            '<div class="prestigeStats">' +
            t('prem.prestiges') + ': <b>' + this.prestige.count + '</b><br>' +
            '<span class="gemReward" style="font-size:1.2em">' + iconSVG('gem', 15, '#00ffcc') + ' ' + t('prem.youGet') + ': <b>+' + reward + ' ' + t('prem.gems') + '</b></span>' +
            '</div>' +
            '<button class="' + btnClass + '" onclick="game.doPrestige()">' +
            btnText +
            '</button>' +
            '</div>';
    },

    renderPremiumTabs() {
        return '<div class="premiumTabs">' +
            '<button class="premiumTab' + (this._premiumTab === 'skins' ? ' active' : '') + '" onclick="game.updatePremiumShop(\'skins\')">🎨 ' + t('prem.skins') + '</button>' +
            '<button class="premiumTab' + (this._premiumTab === 'boosts' ? ' active' : '') + '" onclick="game.updatePremiumShop(\'boosts\')">⚡ ' + t('prem.boosts') + '</button>' +
            '</div>';
    },

    updatePremiumShop(tab) {
        this._stopSkinPreviews();
        this._premiumTab = tab || 'skins';
        var body = document.getElementById('premiumBody');
        if (!body) return;

        var h = this.renderPrestigeSection();
        h += this.renderPremiumTabs();

        if (this._premiumTab === 'skins') {
            h += this._renderSkinsTab();
        } else {
            h += this._renderBoostsTab();
        }
        body.innerHTML = h;

        if (this._premiumTab === 'skins') {
            this._initSkinPreviews();
        }
    },

    _skinPreviewRAFs: [],

    _drawSkinPreview(canvas, themeKey) {
        var t = CRUSHER_THEMES[themeKey] || CRUSHER_THEMES.default;
        var ctx = canvas.getContext('2d');
        var cw = canvas.width;
        var ch = canvas.height;
        var cx = cw / 2;
        var cy = ch / 2;
        var r = 28 * (cw / 80);   // scale for retina
        var angle = 0;
        var self = this;

        function draw() {
            angle += 0.008;
            ctx.clearRect(0, 0, cw, ch);

            ctx.save();

            // Outer glow
            ctx.shadowColor = t.glow;
            ctx.shadowBlur = 10 * (cw / 80);

            // Metallic gradient
            var grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            var gs = t.gradStops;
            grad.addColorStop(0, gs[0]);
            grad.addColorStop(0.25, gs[1]);
            grad.addColorStop(0.45, gs[2]);
            grad.addColorStop(0.65, gs[3]);
            grad.addColorStop(0.85, gs[4]);
            grad.addColorStop(1, gs[5]);
            ctx.fillStyle = grad;
            if (t.gearShape) {
                _gearPath(ctx, cx, cy, r, t.gearTeeth, t.gearToothDepth, angle);
            } else if (t.starShape) {
                _starPath(ctx, cx, cy, r, r * t.starInnerRatio, t.starPoints, angle);
            } else if (t.polyShape) {
                _polyPath(ctx, cx, cy, r, t.polyShape, angle);
            } else if (t.octoShape) {
                _octoPath(ctx, cx, cy, r, angle);
            } else {
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
            }
            ctx.fill();
            // Edge highlights in preview
            if (t.gearShape) {
                ctx.shadowBlur = 0;
                ctx.strokeStyle = t.rimColor;
                ctx.lineWidth = 1.5 * (cw / 80);
                _gearPath(ctx, cx, cy, r, t.gearTeeth, t.gearToothDepth, angle);
                ctx.stroke();
                ctx.strokeStyle = t.toothHighlight;
                ctx.lineWidth = 0.8 * (cw / 80);
                _gearPath(ctx, cx, cy, r * 0.98, t.gearTeeth, t.gearToothDepth * 0.8, angle);
                ctx.stroke();
            } else if (t.starShape) {
                ctx.shadowBlur = 0;
                ctx.strokeStyle = t.rimColor;
                ctx.lineWidth = 1.5 * (cw / 80);
                _starPath(ctx, cx, cy, r, r * t.starInnerRatio, t.starPoints, angle);
                ctx.stroke();
                ctx.strokeStyle = t.toothHighlight;
                ctx.lineWidth = 0.8 * (cw / 80);
                _starPath(ctx, cx, cy, r * 0.96, r * 0.96 * t.starInnerRatio, t.starPoints, angle);
                ctx.stroke();
            } else if (t.polyShape) {
                ctx.shadowBlur = 0;
                ctx.strokeStyle = t.rimColor;
                ctx.lineWidth = 1.5 * (cw / 80);
                _polyPath(ctx, cx, cy, r, t.polyShape, angle);
                ctx.stroke();
                ctx.strokeStyle = t.toothHighlight;
                ctx.lineWidth = 0.8 * (cw / 80);
                _polyPath(ctx, cx, cy, r * 0.95, t.polyShape, angle);
                ctx.stroke();
            }

            ctx.shadowBlur = 0;

            // Concentric rings
            ctx.strokeStyle = t.ringColor;
            ctx.lineWidth = 1 * (cw / 80);
            if (t.gearShape) {
                ctx.beginPath(); ctx.arc(cx, cy, r * 0.65, 0, Math.PI * 2); ctx.stroke();
                ctx.beginPath(); ctx.arc(cx, cy, r * 0.45, 0, Math.PI * 2); ctx.stroke();
                ctx.beginPath(); ctx.arc(cx, cy, r * 0.3, 0, Math.PI * 2); ctx.stroke();
            } else if (t.starShape) {
                _starPath(ctx, cx, cy, r * 0.65, r * 0.65 * t.starInnerRatio, t.starPoints, angle); ctx.stroke();
                _starPath(ctx, cx, cy, r * 0.4, r * 0.4 * t.starInnerRatio, t.starPoints, angle); ctx.stroke();
            } else if (t.polyShape) {
                _polyPath(ctx, cx, cy, r * 0.75, t.polyShape, angle); ctx.stroke();
                _polyPath(ctx, cx, cy, r * 0.5, t.polyShape, angle); ctx.stroke();
            } else if (t.octoShape) {
                _octoPath(ctx, cx, cy, r * 0.75, angle); ctx.stroke();
                _octoPath(ctx, cx, cy, r * 0.5, angle); ctx.stroke();
            } else {
                ctx.beginPath(); ctx.arc(cx, cy, r * 0.75, 0, Math.PI * 2); ctx.stroke();
                ctx.beginPath(); ctx.arc(cx, cy, r * 0.5, 0, Math.PI * 2); ctx.stroke();
            }

            // Rim
            if (!t.gearShape && !t.starShape) {
                ctx.strokeStyle = t.rimColor;
                ctx.lineWidth = 1.5 * (cw / 80);
                if (t.polyShape) {
                    _polyPath(ctx, cx, cy, r, t.polyShape, angle); ctx.stroke();
                    ctx.strokeStyle = t.rimInner;
                    ctx.lineWidth = 0.8 * (cw / 80);
                    _polyPath(ctx, cx, cy, r - 2 * (cw / 80), t.polyShape, angle); ctx.stroke();
                } else if (t.octoShape) {
                    _octoPath(ctx, cx, cy, r, angle); ctx.stroke();
                    ctx.strokeStyle = t.rimInner;
                    ctx.lineWidth = 0.8 * (cw / 80);
                    _octoPath(ctx, cx, cy, r - 2 * (cw / 80), angle); ctx.stroke();
                } else {
                    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
                    ctx.strokeStyle = t.rimInner;
                    ctx.lineWidth = 0.8 * (cw / 80);
                    ctx.beginPath(); ctx.arc(cx, cy, r - 2 * (cw / 80), 0, Math.PI * 2); ctx.stroke();
                }
            }

            // Double rim for special skins
            if (t.doubleRim) {
                ctx.strokeStyle = t.rimColor;
                ctx.lineWidth = 0.8 * (cw / 80);
                if (t.gearShape) {
                    ctx.beginPath(); ctx.arc(cx, cy, r * 0.72, 0, Math.PI * 2); ctx.stroke();
                    ctx.beginPath(); ctx.arc(cx, cy, r * 0.52, 0, Math.PI * 2); ctx.stroke();
                } else if (t.starShape) {
                    _starPath(ctx, cx, cy, r * 0.85, r * 0.85 * t.starInnerRatio, t.starPoints, angle); ctx.stroke();
                    _starPath(ctx, cx, cy, r * 0.55, r * 0.55 * t.starInnerRatio, t.starPoints, angle); ctx.stroke();
                } else if (t.polyShape) {
                    _polyPath(ctx, cx, cy, r * 0.92, t.polyShape, angle); ctx.stroke();
                    _polyPath(ctx, cx, cy, r * 0.62, t.polyShape, angle); ctx.stroke();
                } else if (t.octoShape) {
                    _octoPath(ctx, cx, cy, r * 0.92, angle); ctx.stroke();
                    _octoPath(ctx, cx, cy, r * 0.62, angle); ctx.stroke();
                } else {
                    ctx.beginPath(); ctx.arc(cx, cy, r * 0.92, 0, Math.PI * 2); ctx.stroke();
                    ctx.beginPath(); ctx.arc(cx, cy, r * 0.62, 0, Math.PI * 2); ctx.stroke();
                }
            }

            // Triple rim
            if (t.tripleRim) {
                ctx.strokeStyle = t.rimColor;
                ctx.lineWidth = 0.6 * (cw / 80);
                if (t.polyShape) {
                    _polyPath(ctx, cx, cy, r * 0.95, t.polyShape, angle); ctx.stroke();
                    _polyPath(ctx, cx, cy, r * 0.78, t.polyShape, angle); ctx.stroke();
                    _polyPath(ctx, cx, cy, r * 0.58, t.polyShape, angle); ctx.stroke();
                } else {
                    ctx.beginPath(); ctx.arc(cx, cy, r * 0.95, 0, Math.PI * 2); ctx.stroke();
                    ctx.beginPath(); ctx.arc(cx, cy, r * 0.78, 0, Math.PI * 2); ctx.stroke();
                    ctx.beginPath(); ctx.arc(cx, cy, r * 0.58, 0, Math.PI * 2); ctx.stroke();
                }
            }

            // Spokes
            var spokeCount = t.extraSpokes || 8;
            ctx.strokeStyle = t.spokeColor;
            ctx.lineWidth = ((t.sawBlade || t.hookTeeth || t.octoShape || t.gearShape || t.polyShape || t.starShape) ? 1.5 : 0.8) * (cw / 80);
            for (var s = 0; s < spokeCount; s++) {
                var sa = (Math.PI * 2 / spokeCount) * s + angle;
                ctx.beginPath();
                ctx.moveTo(cx + Math.cos(sa) * r * 0.18, cy + Math.sin(sa) * r * 0.18);
                ctx.lineTo(cx + Math.cos(sa) * r * 0.88, cy + Math.sin(sa) * r * 0.88);
                ctx.stroke();
                // Gear: cross-bars in preview too
                if (t.gearShape) {
                    var mid = r * 0.55;
                    var perp = Math.PI / 2;
                    ctx.lineWidth = 1 * (cw / 80);
                    ctx.beginPath();
                    ctx.moveTo(cx + Math.cos(sa + perp) * mid * 0.18 + Math.cos(sa) * mid, cy + Math.sin(sa + perp) * mid * 0.18 + Math.sin(sa) * mid);
                    ctx.lineTo(cx + Math.cos(sa - perp) * mid * 0.18 + Math.cos(sa) * mid, cy + Math.sin(sa - perp) * mid * 0.18 + Math.sin(sa) * mid);
                    ctx.stroke();
                    ctx.lineWidth = 1.5 * (cw / 80);
                }
            }

            // Many small teeth for manyTeeth skins (preview)
            var toothSize = r * 20 / 70;
            var sc = cw / 80;
            if (t.manyTeeth) {
                var mtCount = t.manyTeeth;
                var mtSize = toothSize * (t.spikyRim ? 0.32 : 0.45);
                ctx.shadowColor = t.toothGlow;
                ctx.shadowBlur = 3 * sc;
                for (var m = 0; m < mtCount; m++) {
                    var ma = (Math.PI * 2 / mtCount) * m + angle;
                    var mx = cx + Math.cos(ma) * (r + mtSize * 0.2);
                    var my = cy + Math.sin(ma) * (r + mtSize * 0.2);
                    ctx.fillStyle = t.toothFill;
                    if (t.spikyRim) {
                        // Long thin needle spikes
                        ctx.beginPath();
                        ctx.moveTo(mx + Math.cos(ma) * mtSize * 2.0, my + Math.sin(ma) * mtSize * 2.0);
                        ctx.lineTo(mx + Math.cos(ma + Math.PI / 2) * mtSize * 0.15, my + Math.sin(ma + Math.PI / 2) * mtSize * 0.15);
                        ctx.lineTo(mx + Math.cos(ma + Math.PI) * mtSize * 0.3, my + Math.sin(ma + Math.PI) * mtSize * 0.3);
                        ctx.lineTo(mx + Math.cos(ma - Math.PI / 2) * mtSize * 0.15, my + Math.sin(ma - Math.PI / 2) * mtSize * 0.15);
                        ctx.closePath();
                        ctx.fill();
                    } else {
                        ctx.beginPath();
                        ctx.moveTo(mx + Math.cos(ma) * mtSize * 1.2, my + Math.sin(ma) * mtSize * 1.2);
                        ctx.lineTo(mx + Math.cos(ma + Math.PI / 2) * mtSize * 0.3, my + Math.sin(ma + Math.PI / 2) * mtSize * 0.3);
                        ctx.lineTo(mx + Math.cos(ma + Math.PI) * mtSize * 0.2, my + Math.sin(ma + Math.PI) * mtSize * 0.2);
                        ctx.lineTo(mx + Math.cos(ma - Math.PI / 2) * mtSize * 0.3, my + Math.sin(ma - Math.PI / 2) * mtSize * 0.3);
                        ctx.closePath();
                        ctx.fill();
                    }
                    ctx.shadowBlur = 0;
                    ctx.fillStyle = t.toothTip;
                    var tipDist = t.spikyRim ? mtSize * 2.0 : mtSize * 1.2;
                    ctx.beginPath();
                    ctx.arc(mx + Math.cos(ma) * tipDist, my + Math.sin(ma) * tipDist, (t.spikyRim ? 0.6 : 1) * sc, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.shadowBlur = 3 * sc;
                }
                ctx.shadowBlur = 0;
            }

            // Vertex blades for polyShape skins (preview)
            if (t.vertexBlades && t.polyShape) {
                var vbCount = t.vertexBlades;
                var bladeLen = toothSize * 1.4;
                ctx.shadowColor = t.toothGlow;
                ctx.shadowBlur = 6 * sc;
                for (var vb = 0; vb < vbCount; vb++) {
                    var va = (Math.PI * 2 / vbCount) * vb + angle - Math.PI / vbCount;
                    var vx = cx + Math.cos(va) * r;
                    var vy = cy + Math.sin(va) * r;
                    var vtipX = vx + Math.cos(va) * bladeLen;
                    var vtipY = vy + Math.sin(va) * bladeLen;
                    var perpL = va + Math.PI * 0.4;
                    var perpR = va - Math.PI * 0.4;
                    var baseW = bladeLen * 0.35;
                    ctx.fillStyle = t.toothFill;
                    ctx.beginPath();
                    ctx.moveTo(vx + Math.cos(perpL) * baseW, vy + Math.sin(perpL) * baseW);
                    ctx.quadraticCurveTo(vx + Math.cos(va) * bladeLen * 0.7 + Math.cos(perpL) * baseW * 0.3,
                        vy + Math.sin(va) * bladeLen * 0.7 + Math.sin(perpL) * baseW * 0.3, vtipX, vtipY);
                    ctx.quadraticCurveTo(vx + Math.cos(va) * bladeLen * 0.7 + Math.cos(perpR) * baseW * 0.3,
                        vy + Math.sin(va) * bladeLen * 0.7 + Math.sin(perpR) * baseW * 0.3,
                        vx + Math.cos(perpR) * baseW, vy + Math.sin(perpR) * baseW);
                    ctx.closePath();
                    ctx.fill();
                    ctx.shadowBlur = 0;
                    ctx.strokeStyle = t.toothHighlight;
                    ctx.lineWidth = 1.2 * sc;
                    ctx.beginPath();
                    ctx.moveTo(vx + Math.cos(perpL) * baseW, vy + Math.sin(perpL) * baseW);
                    ctx.quadraticCurveTo(vx + Math.cos(va) * bladeLen * 0.7 + Math.cos(perpL) * baseW * 0.3,
                        vy + Math.sin(va) * bladeLen * 0.7 + Math.sin(perpL) * baseW * 0.3, vtipX, vtipY);
                    ctx.stroke();
                    ctx.fillStyle = t.toothTip;
                    ctx.beginPath();
                    ctx.arc(vtipX, vtipY, 1.5 * sc, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.shadowBlur = 6 * sc;
                }
                ctx.shadowBlur = 0;
            }

            // Teeth — skip for special skins
            var toothCount = (t.manyTeeth || t.gearShape || t.starShape || t.vertexBlades) ? 0 : 8;
            for (var i = 0; i < toothCount; i++) {
                var ta = (Math.PI * 2 / toothCount) * i + angle;
                var tx = cx + Math.cos(ta) * (r + toothSize * 0.4);
                var ty = cy + Math.sin(ta) * (r + toothSize * 0.4);
                var tRot = ta + Math.PI / 2;

                ctx.save();
                ctx.shadowColor = t.toothGlow;
                ctx.shadowBlur = ((t.sawBlade || t.hookTeeth || t.flameTeeth) ? 8 : 5) * sc;

                if (t.flameTeeth) {
                    // Flame teeth preview
                    var ang = ta + 5 * Math.PI / 6;
                    var sz = toothSize * 0.9;
                    ctx.fillStyle = t.toothFill;
                    ctx.beginPath();
                    ctx.moveTo(tx + Math.cos(ang - 0.8) * sz * 0.4, ty + Math.sin(ang - 0.8) * sz * 0.4);
                    ctx.quadraticCurveTo(
                        tx + Math.cos(ang - 0.4) * sz * 1.1, ty + Math.sin(ang - 0.4) * sz * 1.1,
                        tx + Math.cos(ang - 0.15) * sz * 0.9, ty + Math.sin(ang - 0.15) * sz * 0.9);
                    ctx.quadraticCurveTo(
                        tx + Math.cos(ang) * sz * 1.3, ty + Math.sin(ang) * sz * 1.3,
                        tx + Math.cos(ang) * sz * 1.7, ty + Math.sin(ang) * sz * 1.7);
                    ctx.quadraticCurveTo(
                        tx + Math.cos(ang) * sz * 1.3, ty + Math.sin(ang) * sz * 1.3,
                        tx + Math.cos(ang + 0.15) * sz * 0.9, ty + Math.sin(ang + 0.15) * sz * 0.9);
                    ctx.quadraticCurveTo(
                        tx + Math.cos(ang + 0.4) * sz * 1.1, ty + Math.sin(ang + 0.4) * sz * 1.1,
                        tx + Math.cos(ang + 0.8) * sz * 0.4, ty + Math.sin(ang + 0.8) * sz * 0.4);
                    ctx.closePath();
                    ctx.fill();
                    ctx.shadowBlur = 0;
                    ctx.fillStyle = t.toothHighlight;
                    ctx.globalAlpha = 0.4;
                    ctx.beginPath();
                    ctx.moveTo(tx + Math.cos(ang - 0.3) * sz * 0.3, ty + Math.sin(ang - 0.3) * sz * 0.3);
                    ctx.quadraticCurveTo(tx + Math.cos(ang) * sz * 1.0, ty + Math.sin(ang) * sz * 1.0,
                        tx + Math.cos(ang) * sz * 1.7, ty + Math.sin(ang) * sz * 1.7);
                    ctx.quadraticCurveTo(tx + Math.cos(ang) * sz * 1.0, ty + Math.sin(ang) * sz * 1.0,
                        tx + Math.cos(ang + 0.3) * sz * 0.3, ty + Math.sin(ang + 0.3) * sz * 0.3);
                    ctx.closePath();
                    ctx.fill();
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = t.toothTip;
                    ctx.beginPath();
                    ctx.arc(tx + Math.cos(ang) * sz * 1.7, ty + Math.sin(ang) * sz * 1.7, 1.5 * sc, 0, Math.PI * 2);
                    ctx.fill();
                } else if (t.hookTeeth) {
                    // Hook/claw teeth in preview
                    var ang = ta + 5 * Math.PI / 6;
                    var szMul = t.bigTeeth ? 1.2 : 0.8;
                    var sz = toothSize * szMul;
                    var baseW = t.bigTeeth ? 0.7 : 0.6;
                    var bx1 = tx + Math.cos(ang - baseW) * sz * 0.5;
                    var by1 = ty + Math.sin(ang - baseW) * sz * 0.5;
                    var bx2 = tx + Math.cos(ang + baseW) * sz * 0.5;
                    var by2 = ty + Math.sin(ang + baseW) * sz * 0.5;
                    var tipMul = t.bigTeeth ? 1.8 : 1.5;
                    var tipX = tx + Math.cos(ang) * sz * tipMul;
                    var tipY = ty + Math.sin(ang) * sz * tipMul;
                    var curveMul = t.bigTeeth ? 1.5 : 1.3;
                    var cpX = tx + Math.cos(ang + 0.7) * sz * curveMul;
                    var cpY = ty + Math.sin(ang + 0.7) * sz * curveMul;
                    ctx.fillStyle = t.toothFill;
                    ctx.beginPath();
                    ctx.moveTo(bx1, by1);
                    ctx.lineTo(tx + Math.cos(ang + Math.PI) * sz * 0.25, ty + Math.sin(ang + Math.PI) * sz * 0.25);
                    ctx.lineTo(bx2, by2);
                    ctx.quadraticCurveTo(cpX, cpY, tipX, tipY);
                    ctx.quadraticCurveTo(tx + Math.cos(ang - 0.7) * sz * curveMul, ty + Math.sin(ang - 0.7) * sz * curveMul, bx1, by1);
                    ctx.closePath();
                    ctx.fill();
                    ctx.shadowBlur = 0;
                    ctx.strokeStyle = t.toothHighlight;
                    ctx.lineWidth = (t.bigTeeth ? 2 : 1.5) * sc;
                    ctx.beginPath();
                    ctx.moveTo(bx2, by2);
                    ctx.quadraticCurveTo(cpX, cpY, tipX, tipY);
                    ctx.stroke();
                    ctx.fillStyle = t.toothTip;
                    ctx.beginPath();
                    ctx.arc(tipX, tipY, (t.bigTeeth ? 2.5 : 2) * sc, 0, Math.PI * 2);
                    ctx.fill();
                } else if (t.sawBlade) {
                    // Saw blade teeth
                    var ang = ta + 5 * Math.PI / 6;
                    var sz = toothSize * 0.7;
                    ctx.fillStyle = t.toothFill;
                    ctx.beginPath();
                    ctx.moveTo(tx + Math.cos(ang - 0.5) * sz, ty + Math.sin(ang - 0.5) * sz);
                    ctx.lineTo(tx + Math.cos(ang) * sz * 1.4, ty + Math.sin(ang) * sz * 1.4);
                    ctx.lineTo(tx + Math.cos(ang + 0.5) * sz, ty + Math.sin(ang + 0.5) * sz);
                    ctx.lineTo(tx + Math.cos(ang + Math.PI) * sz * 0.3, ty + Math.sin(ang + Math.PI) * sz * 0.3);
                    ctx.closePath();
                    ctx.fill();
                    ctx.shadowBlur = 0;
                    ctx.strokeStyle = t.toothHighlight;
                    ctx.lineWidth = 1.5 * sc;
                    ctx.stroke();
                } else {
                    // Regular triangle polygon vertices
                    var v = [];
                    for (var vi = 0; vi < 3; vi++) {
                        var va = tRot + Math.PI / 3 + (Math.PI * 2 / 3) * vi;
                        v.push({ x: tx + Math.cos(va) * toothSize, y: ty + Math.sin(va) * toothSize });
                    }
                    ctx.fillStyle = t.toothFill;
                    ctx.beginPath();
                    ctx.moveTo(v[0].x, v[0].y);
                    ctx.lineTo(v[1].x, v[1].y);
                    ctx.lineTo(v[2].x, v[2].y);
                    ctx.closePath();
                    ctx.fill();
                    ctx.shadowBlur = 0;
                    ctx.strokeStyle = t.toothHighlight;
                    ctx.lineWidth = 1.5 * sc;
                    ctx.beginPath(); ctx.moveTo(v[0].x, v[0].y); ctx.lineTo(v[1].x, v[1].y); ctx.stroke();
                    ctx.strokeStyle = t.toothEdge;
                    ctx.lineWidth = 1 * sc;
                    ctx.beginPath();
                    ctx.moveTo(v[0].x, v[0].y);
                    ctx.lineTo(v[1].x, v[1].y);
                    ctx.lineTo(v[2].x, v[2].y);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.fillStyle = t.toothTip;
                    ctx.beginPath();
                    ctx.arc(v[0].x, v[0].y, 1.5 * sc, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
            }

            // Hub bolt
            var isSpecialP = t.sawBlade || t.hookTeeth || t.octoShape || t.gearShape || t.polyShape || t.starShape;
            var hubR = (t.gearShape ? 6 : (isSpecialP ? 5 : 4)) * (cw / 80);
            var hg = ctx.createRadialGradient(cx, cy, 0, cx, cy, hubR);
            hg.addColorStop(0, t.hubGrad0 || (t.gearShape ? '#ffe680' : (t.octoShape ? '#bbddff' : (t.hookTeeth ? '#cc88ff' : (t.sawBlade ? '#ffcc66' : '#cccccc')))));
            hg.addColorStop(1, t.hubGrad1 || (t.gearShape ? '#886600' : (t.octoShape ? '#335577' : (t.hookTeeth ? '#440077' : (t.sawBlade ? '#884400' : '#555555')))));
            ctx.fillStyle = hg;
            ctx.beginPath(); ctx.arc(cx, cy, hubR, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = t.hubStroke || (t.gearShape ? '#664400' : (t.octoShape ? '#224466' : (t.hookTeeth ? '#330055' : (t.sawBlade ? '#663300' : '#444'))));
            ctx.lineWidth = 0.8 * (cw / 80);
            ctx.beginPath(); ctx.arc(cx, cy, hubR, 0, Math.PI * 2); ctx.stroke();

            // Small bolts around hub
            var boltCount = isSpecialP ? 8 : 6;
            var boltR = (isSpecialP ? 8 : 7) * (cw / 80);
            for (var b = 0; b < boltCount; b++) {
                var ba = (Math.PI * 2 / boltCount) * b + angle;
                ctx.fillStyle = t.boltFill || (t.gearShape ? 'rgba(255,210,80,0.9)' : (t.octoShape ? 'rgba(130,200,255,0.8)' : (t.hookTeeth ? 'rgba(180,100,255,0.8)' : (t.sawBlade ? 'rgba(255,150,50,0.8)' : 'rgba(100,100,100,0.8)'))));
                ctx.beginPath();
                ctx.arc(cx + Math.cos(ba) * boltR, cy + Math.sin(ba) * boltR, (isSpecialP ? 1.2 : 1) * (cw / 80), 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();

            var raf = requestAnimationFrame(draw);
            // Store the latest RAF id on the canvas for cancellation
            canvas._rafId = raf;
        }

        var raf = requestAnimationFrame(draw);
        canvas._rafId = raf;
    },

    _initSkinPreviews() {
        this._stopSkinPreviews();
        var canvases = document.querySelectorAll('canvas.skinPreview[data-theme]');
        for (var i = 0; i < canvases.length; i++) {
            this._drawSkinPreview(canvases[i], canvases[i].dataset.theme);
        }
        this._skinPreviewCanvases = Array.from(canvases);
    },

    _stopSkinPreviews() {
        if (this._skinPreviewCanvases) {
            for (var i = 0; i < this._skinPreviewCanvases.length; i++) {
                if (this._skinPreviewCanvases[i]._rafId) {
                    cancelAnimationFrame(this._skinPreviewCanvases[i]._rafId);
                    this._skinPreviewCanvases[i]._rafId = null;
                }
            }
        }
        this._skinPreviewCanvases = [];
    },

    _renderSkinsTab() {
        var h = '';
        var pr = this.prestige;
        var theme = CRUSHER_THEMES;

        for (var i = 0; i < SKIN_LIST.length; i++) {
            var entry = SKIN_LIST[i];
            var key = entry.key;
            var isFree = entry.price === 0;
            var isActive = key === 'default' ? !pr.activeSkin : pr.activeSkin === key;
            var owned = isFree || (pr.skins[key] && pr.skins[key].owned);
            var th = theme[key];
            var extraStyle = '';
            var nameStyle = '';
            if (entry.price >= 200 && th) {
                extraStyle = ' style="border-color:' + th.rimColor + '"';
                nameStyle = ' style="color:' + th.glow + '"';
            }

            h += '<div class="skinCard' + (isActive ? ' equipped' : '') + '"' + extraStyle + '>' +
                '<canvas class="skinPreview" data-theme="' + key + '" width="160" height="160"></canvas>' +
                '<div class="skinInfo"><div class="skinName"' + nameStyle + '>' + entry.name + '</div></div>';

            if (owned) {
                if (isActive) {
                    h += '<button class="skinBtn equipped">' + t('prem.equipped') + '</button>';
                } else {
                    h += '<button class="skinBtn equip" onclick="game.equipSkin(\'' + key + '\')">' + t('prem.equip') + '</button>';
                }
            } else {
                if (pr.gems >= entry.price) {
                    h += '<button class="skinBtn buyable" onclick="game.buyPremiumSkin(\'' + key + '\')">' + iconSVG('gem', 12, '#00ffcc') + ' ' + entry.price + '</button>';
                } else {
                    h += '<button class="skinBtn cantBuy">' + iconSVG('gem', 12, '#555') + ' ' + entry.price + '</button>';
                }
            }
            h += '</div>';
        }

        return h;
    },

    _renderBoostsTab() {
        var h = '';
        var pr = this.prestige;
        var f = this.utilities.formatNumber;

        var cpsB = pr.boosts.cpsPercent;
        var canBuyCps = pr.gems >= cpsB.price;
        h += '<div class="boostCard">' +
            '<div class="boostIcon">⚡</div>' +
            '<div class="boostInfo">' +
            '<div class="boostName">' + t('boost.cpsName') + '</div>' +
            '<div class="boostDesc">' + t('boost.cpsDesc') + '</div>' +
            (cpsB.count > 0 ? '<div class="boostOwned">' + t('boost.cpsOwned', {n: cpsB.count, pct: cpsB.count * 5}) + '</div>' : '') +
            '</div>' +
            '<button class="boostBtn' + (canBuyCps ? '' : ' cantBuy') + '" onclick="game.buyPremiumBoost(\'cpsPercent\')">' + iconSVG('gem', 12, canBuyCps ? '#ff8800' : '#555') + ' ' + cpsB.price + '</button>' +
            '</div>';

        var tapB = pr.boosts.tapFlat;
        var canBuyTap = pr.gems >= tapB.price;
        h += '<div class="boostCard">' +
            '<div class="boostIcon">👆</div>' +
            '<div class="boostInfo">' +
            '<div class="boostName">' + t('boost.tapName') + '</div>' +
            '<div class="boostDesc">' + t('boost.tapDesc') + '</div>' +
            (tapB.count > 0 ? '<div class="boostOwned">' + t('boost.tapOwned', {n: tapB.count, total: tapB.count}) + '</div>' : '') +
            '</div>' +
            '<button class="boostBtn' + (canBuyTap ? '' : ' cantBuy') + '" onclick="game.buyPremiumBoost(\'tapFlat\')">' + iconSVG('gem', 12, canBuyTap ? '#ff8800' : '#555') + ' ' + tapB.price + '</button>' +
            '</div>';

        return h;
    },

    // ===== ACHIEVEMENTS =====
    toggleAchievements() {
        var overlay = document.getElementById('achievementsOverlay');
        if (overlay.classList.contains('active')) {
            overlay.classList.remove('active');
        } else {
            overlay.classList.add('active');
            document.querySelector('.achievementsTitle').innerHTML = '🏆 ' + t('hud.achievements');
            this.renderAchievements();
        }
    },
    renderAchievements() {
        var body = document.getElementById('achievementsBody');
        if (!body) return;
        var claimed = 0;
        var readyCount = 0;
        Object.keys(game.achievements).forEach(id => {
            if (game.achievements[id] === true) claimed++;
            if (game.achievements[id] === 'ready') readyCount++;
        });
        var unlocked = claimed + readyCount;
        var total = ACHIEVEMENTS.length;
        var h = '<div class="achCounter">' + t('ach.counter', {n: unlocked, total: total}) + '</div>';
        if (readyCount > 0) {
            h += '<button class="achClaimAllBtn" onclick="game.claimAllAchievements()">' + t('ach.claimAll', {n: readyCount}) + '</button>';
        }
        ACHIEVEMENTS.forEach(a => {
            var state = game.achievements[a.id];
            var isReady = state === 'ready';
            var isDone = state === true;
            var cls = 'achCard';
            if (isReady) cls += ' achReady';
            else if (isDone) cls += ' achDone';
            h += '<div class="' + cls + '">' +
                '<div class="achIcon">' + a.icon + '</div>' +
                '<div class="achInfo">' +
                '<div class="achName">' + t('ach.' + a.id + '.name') + '</div>' +
                '<div class="achDesc">' + (isDone ? '\u2705 ' + t('ach.completed') : isReady ? t('ach.ready') : t('ach.' + a.id + '.desc')) + '</div>' +
                '</div>' +
                (isReady ? '<button class="achClaimBtn" onclick="game.claimAchievement(\'' + a.id + '\')">' + t('ach.claim') + ' +' + a.gem + '\uD83D\uDC8E</button>' : '<div class="achGem">' + a.gem + '\uD83D\uDC8E</div>') +
                '</div>';
        });
        body.innerHTML = h;
    },

    // ===== SETTINGS =====
    toggleSettings() {
        var overlay = document.getElementById('settingsOverlay');
        if (overlay.classList.contains('active')) {
            overlay.classList.remove('active');
        } else {
            overlay.classList.add('active');
            document.querySelector('.settingsTitle').innerHTML = '⚙️ ' + t('hud.settings');
            this.renderSettings();
        }
    },

    renderSettings() {
        var body = document.getElementById('settingsBody');
        if (!body) return;
        var vibOn = this.vibration;
        var sndOn = this.sound;
        var langInfo = I18N_LANGS[getLang()] || I18N_LANGS.en;
        body.innerHTML =
            '<div class="settingsItem" onclick="game.toggleSound()">' +
            '<div class="settingsIcon" style="background:rgba(0,255,204,0.1);">🔊</div>' +
            '<div class="settingsText"><div class="settingsName">' + t('set.sound') + '</div><div class="settingsDesc">' + t('set.soundDesc') + '</div></div>' +
            '<div class="settingsToggle ' + (sndOn ? 'on' : '') + '">' + (sndOn ? t('set.on') : t('set.off')) + '</div>' +
            '</div>' +
            '<div class="settingsItem" onclick="game.toggleVibration()">' +
            '<div class="settingsIcon" style="background:rgba(204,102,255,0.1);">📳</div>' +
            '<div class="settingsText"><div class="settingsName">' + t('set.vibration') + '</div><div class="settingsDesc">' + t('set.vibrationDesc') + '</div></div>' +
            '<div class="settingsToggle ' + (vibOn ? 'on' : '') + '">' + (vibOn ? t('set.on') : t('set.off')) + '</div>' +
            '</div>' +
            '<div class="settingsItem" onclick="game.showLangPicker()">' +
            '<div class="settingsIcon" style="background:rgba(100,180,255,0.1);">🌐</div>' +
            '<div class="settingsText"><div class="settingsName">' + t('set.language') + '</div><div class="settingsDesc">' + t('set.languageDesc') + '</div></div>' +
            '<div class="settingsLang">' + langInfo.flag + ' ' + langInfo.name + '</div>' +
            '</div>' +
            '<div class="settingsDivider"></div>' +
            '<div class="settingsItem" onclick="void(0)">' +
            '<div class="settingsIcon" style="background:rgba(255,238,0,0.1);">📜</div>' +
            '<div class="settingsText"><div class="settingsName">' + t('set.privacy') + '</div><div class="settingsDesc">' + t('set.privacyDesc') + '</div></div>' +
            '</div>' +
            '<div class="settingsItem" onclick="void(0)">' +
            '<div class="settingsIcon" style="background:rgba(255,238,0,0.1);">📋</div>' +
            '<div class="settingsText"><div class="settingsName">' + t('set.terms') + '</div><div class="settingsDesc">' + t('set.termsDesc') + '</div></div>' +
            '</div>' +
            '<div class="settingsItem" onclick="void(0)">' +
            '<div class="settingsIcon" style="background:rgba(0,180,255,0.1);">💬</div>' +
            '<div class="settingsText"><div class="settingsName">' + t('set.support') + '</div><div class="settingsDesc">' + t('set.supportDesc') + '</div></div>' +
            '</div>' +
            '<div class="settingsDivider"></div>' +
            '<div class="settingsItem danger" onclick="game.confirmReset()">' +
            '<div class="settingsIcon" style="background:rgba(255,0,68,0.1);">🗑️</div>' +
            '<div class="settingsText"><div class="settingsName">' + t('set.reset') + '</div><div class="settingsDesc">' + t('set.resetDesc') + '</div></div>' +
            '</div>' +
            '<div class="settingsVersion">' + t('set.version') + '</div>';
    },

    toggleSound() {
        this.sound = !this.sound;
        this.saving.export();
        this.renderSettings();
        if (this.sound) SFX.tap();
    },

    toggleVibration() {
        this.vibration = !this.vibration;
        this.saving.export();
        this.renderSettings();
        tryVibrate(20);
    },

    confirmReset() {
        var overlay = document.createElement('div');
        overlay.className = 'adOverlay';
        overlay.innerHTML =
            '<div class="adEmoji">⚠️</div>' +
            '<div class="adTitle">' + t('reset.title') + '</div>' +
            '<div class="adDesc">' + t('reset.desc') + '</div>' +
            '<div class="adButtons">' +
            '<button class="adBtn adBtnNo" id="resetNo">' + t('reset.cancel') + '</button>' +
            '<button class="adBtn adBtnYes" id="resetYes" style="border-color:var(--accent-pink);background:rgba(255,0,68,0.12);color:var(--accent-pink);">' + t('reset.confirm') + '</button>' +
            '</div>';
        document.body.appendChild(overlay);
        overlay.querySelector('#resetNo').onclick = function () { overlay.remove(); };
        overlay.querySelector('#resetYes').onclick = function () {
            overlay.remove();
            document.getElementById('settingsOverlay').classList.remove('active');
            game.saving.wipeSave();
            showToast(t('toast.reset'), '🗑️', '#ff0044');
        };
    },

    showLangPicker() {
        var body = document.getElementById('settingsBody');
        if (!body) return;
        var currentLang = getLang();
        var h = '<div class="langBack" onclick="game.renderSettings()">← ' + t('set.language') + '</div>';
        h += '<div class="langList">';
        var codes = Object.keys(I18N_LANGS);
        for (var i = 0; i < codes.length; i++) {
            var code = codes[i];
            var info = I18N_LANGS[code];
            var isActive = code === currentLang;
            h += '<div class="langRow' + (isActive ? ' langActive' : '') + '" onclick="game.setLanguage(\'' + code + '\')">' +
                '<span class="langFlag">' + info.flag + '</span>' +
                '<span class="langName">' + info.name + '</span>' +
                (isActive ? '<span class="langCheck">✓</span>' : '') +
                '</div>';
        }
        h += '</div>';
        body.innerHTML = h;
    },

    setLanguage(code) {
        setLang(code);
        this.refreshUI();
        this.showLangPicker();
    },

    refreshUI() {
        document.getElementById('hudRate').innerHTML =
            '<span class="hudStat">' + iconSVG('lightning', 13, '#00ffcc') + ' <span id="cps">0</span>' + t('hud.perSec') + '</span>' +
            '<span class="hudDivider"></span>' +
            '<span class="hudStat">' + iconSVG('hammer', 13, '#00ffcc') + ' <span id="cpc">1</span>' + t('hud.perTap') + '</span>';
        document.getElementById('shopBtn').innerHTML = iconSVG('cart', 22, '#fff') + '<br>' + t('hud.shop');
        document.getElementById('premiumBtn').innerHTML = iconSVG('gem', 18, '#00ffcc') + '<br>' + t('hud.premium');
        document.querySelector('.shopTitle').innerHTML = iconSVG('cart', 20, '#ffee00') + ' ' + t('shop.materials');
        _cacheDom();
        this.renderShopTabs();
        if (document.getElementById('shopOverlay').classList.contains('active')) this.updateShop(this.currentShop);
        if (document.getElementById('premiumOverlay').classList.contains('active')) this.updatePremiumShop(this._premiumTab);
        if (document.getElementById('achievementsOverlay').classList.contains('active')) this.renderAchievements();
    },

    start() {
        initCrusher();

        // Set SVG icons in HUD
        document.getElementById('hudCoins').innerHTML = iconSVG('coin', 26, '#ffee00') + ' <span id="coins">0</span>';
        document.getElementById('hudGems').innerHTML = iconSVG('gem', 18, '#00ffcc') + ' <span id="gems">0</span>';
        document.getElementById('hudRate').innerHTML =
            '<span class="hudStat">' + iconSVG('lightning', 13, '#00ffcc') + ' <span id="cps">0</span>' + t('hud.perSec') + '</span>' +
            '<span class="hudDivider"></span>' +
            '<span class="hudStat">' + iconSVG('hammer', 13, '#00ffcc') + ' <span id="cpc">1</span>' + t('hud.perTap') + '</span>';
        document.getElementById('shopBtn').innerHTML = iconSVG('cart', 22, '#fff') + '<br>' + t('hud.shop');
        document.getElementById('premiumBtn').innerHTML = iconSVG('gem', 18, '#00ffcc') + '<br>' + t('hud.premium');
        document.querySelector('.shopTitle').innerHTML = iconSVG('cart', 20, '#ffee00') + ' ' + t('shop.materials');

        // Cache DOM elements for updateDisplays
        _cacheDom();

        // Click on backdrop closes shop
        document.getElementById('shopOverlay').addEventListener('click', function (e) {
            if (e.target === this) game.toggleShop();
        });

        // Click on backdrop closes premium shop
        document.getElementById('premiumOverlay').addEventListener('click', function (e) {
            if (e.target === this) game.togglePremiumShop();
        });

        // Click on backdrop closes settings
        document.getElementById('settingsOverlay').addEventListener('click', function (e) {
            if (e.target === this) game.toggleSettings();
        });

        // Click on backdrop closes achievements
        document.getElementById('achievementsOverlay').addEventListener('click', function (e) {
            if (e.target === this) game.toggleAchievements();
        });

        const canvas = document.getElementById('gameCanvas');
        const tap = (e) => {
            if (e.target.closest('.shopOverlay') || e.target.closest('.fabRow') || e.target.closest('.premiumBtnWrap') || e.target.closest('#premiumOverlay') || e.target.closest('#settingsOverlay') || e.target.closest('#achievementsOverlay') || e.target.closest('.hud')) return;
            const rect = canvas.getBoundingClientRect();
            let x, y;
            if (e.touches) { x = e.touches[0].clientX - rect.left; y = e.touches[0].clientY - rect.top; }
            else { x = e.clientX - rect.left; y = e.clientY - rect.top; }
            const owned = game.buildings.filter(b => b.amount > 0);
            let color = MATERIALS[0].color;
            if (owned.length > 0) { const mat = owned[Math.floor(Math.random() * owned.length)]; color = MATERIALS[game.utilities.getBuildingIndexByName(mat.name)].color; }
            spawnBlock(W / 2 + (Math.random() - 0.5) * 100, 30 + Math.random() * 40, 60, color);
            tryVibrate(15);
            SFX.tap();
        };
        canvas.addEventListener('touchstart', tap, { passive: true });
        canvas.addEventListener('mousedown', tap);
        window.addEventListener('keydown', (e) => { if (e.key === '0') game.player.earnCookie(100000000000000); if (e.key === '9') { game.prestige.gems += 20; game.prestige.totalGems += 20; showToast('+20 test gems', iconSVG('gem', 14, '#00ffcc'), '#00ffcc'); } if (e.keyCode === 13 || e.keyCode === 32) e.preventDefault(); });
        this.saving.load();
        this.updateAchBadge();
        this.checkOfflineEarnings();
        this.renderShopTabs();
        this.updateShop('Stone');
        this.logic();
    },

    checkOfflineEarnings() {
        if (!this._lastSaveTime) return;
        var now = Date.now();
        var elapsed = (now - this._lastSaveTime) / 1000; // seconds
        if (elapsed < 60) return; // less than 1 minute — skip

        // Calculate CPS
        var cps = 0;
        this.buildings.forEach(b => { cps += b.getCPS(); });
        cps *= (1 + this.prestige.boosts.cpsPercent.count * 0.05);
        if (cps <= 0) return;

        // Cap at 24 hours
        var cappedSecs = Math.min(elapsed, 86400);
        var baseEarnings = Math.floor(cps * cappedSecs);
        if (baseEarnings <= 0) return;

        // Format time away
        var hrs = Math.floor(cappedSecs / 3600);
        var mins = Math.floor((cappedSecs % 3600) / 60);
        var timeStr = '';
        if (hrs > 0) timeStr += hrs + 'h ';
        timeStr += mins + 'm';

        this._offlineEarnings = baseEarnings;
        this._offlineTimeStr = timeStr;
        this.showOfflinePopup();
    },

    showOfflinePopup() {
        var f = this.utilities.formatNumber;
        var earnings = this._offlineEarnings;
        var overlay = document.createElement('div');
        overlay.className = 'offlineOverlay';
        overlay.id = 'offlineOverlay';
        overlay.innerHTML =
            '<div class="offlinePopup">' +
            '<div class="offlineIcon">😴</div>' +
            '<div class="offlineTitle">' + t('offline.title') + '</div>' +
            '<div class="offlineTime">' + t('offline.away', {time: this._offlineTimeStr}) + '</div>' +
            '<div class="offlineEarned">' + t('offline.earned') + '</div>' +
            '<div class="offlineCoins">🪙 ' + f(earnings) + '</div>' +
            '<div class="offlineHint">' + t('offline.hint') + '</div>' +
            '<div class="offlineBtns">' +
            '<button class="offlineCollect" onclick="game.collectOffline(false)">' + t('offline.collect') + '</button>' +
            '<button class="offlineAd" onclick="game.collectOffline(true)">' +
            '<span class="offlineAdIcon">▶</span> ' + t('offline.watchAd', {n: f(earnings * 2)}) +
            '</button>' +
            '</div>' +
            '</div>';
        document.body.appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add('show'));
    },

    collectOffline(watchAd) {
        var base = this._offlineEarnings;
        if (watchAd) {
            var doubled = base * 2;
            var overlay = document.getElementById('offlineOverlay');
            var btns = overlay.querySelector('.offlineBtns');
            var timer = 5;
            btns.innerHTML = '<div class="offlineAdTimer">' + t('offline.adPlaying', {n: timer}) + '</div>';
            var self = this;
            var iv = setInterval(function () {
                timer--;
                var el = overlay.querySelector('.offlineAdTimer');
                if (el) el.textContent = t('offline.adPlaying', {n: timer});
                if (timer <= 0) {
                    clearInterval(iv);
                    self.player.earnCookie(doubled);
                    self.saving.export();
                    showToast(t('toast.coinsX2', {n: self.utilities.formatNumber(doubled)}), '🪙', '#ffcc00');
                    self._closeOfflinePopup();
                }
            }, 1000);
        } else {
            this.player.earnCookie(base);
            this.saving.export();
            showToast(t('toast.coins', {n: this.utilities.formatNumber(base)}), '🪙', '#ffcc00');
            this._closeOfflinePopup();
        }
    },

    _closeOfflinePopup() {
        var overlay = document.getElementById('offlineOverlay');
        if (overlay) {
            overlay.classList.remove('show');
            setTimeout(() => overlay.remove(), 400);
        }
    }
};

game.start();

// Track when page goes hidden → save timestamp; when visible again → check offline earnings
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // Page hidden (locked screen, switched tab, closed browser)
        game._lastSaveTime = Date.now();
        game.saving.export();
    } else {
        // Page visible again — check if enough time passed
        if (game._lastSaveTime) {
            var elapsed = (Date.now() - game._lastSaveTime) / 1000;
            if (elapsed >= 60 && !document.getElementById('offlineOverlay')) {
                game.settings.recalculateCPS = true;
                // Recalc CPS before checking
                var cps = 0;
                game.buildings.forEach(function (b) { cps += b.getCPS(); });
                cps *= (1 + game.prestige.boosts.cpsPercent.count * 0.05);
                if (cps > 0) {
                    var cappedSecs = Math.min(elapsed, 86400);
                    var baseEarnings = Math.floor(cps * cappedSecs);
                    if (baseEarnings > 0) {
                        var hrs = Math.floor(cappedSecs / 3600);
                        var mins = Math.floor((cappedSecs % 3600) / 60);
                        var timeStr = '';
                        if (hrs > 0) timeStr += hrs + 'h ';
                        timeStr += mins + 'm';
                        game._offlineEarnings = baseEarnings;
                        game._offlineTimeStr = timeStr;
                        game.showOfflinePopup();
                    }
                }
            }
        }
    }
});
