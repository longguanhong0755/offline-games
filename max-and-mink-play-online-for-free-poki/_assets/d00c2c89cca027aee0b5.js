DEBUG_ENABLED=false;BUILD_TIMESTAMP=1537350214017;FORCED_ORIENTATION="landscape";RENDERER="canvas";var util;
(function (util) {
    var Scale = (function () {
        function Scale() {
        }
        Scale.determineAssetType = function () {
            if (Game.config["forcedAssetType"] != null && Game.config["assetTypes"][Game.config["forcedAssetType"]] != undefined) {
                Scale.assetType = Game.config["forcedAssetType"];
            }
            else {
                var sizeTest;
                if (Game.game.device.desktop) {
                    if (Game.orientation == "portrait") {
                        sizeTest = window.innerHeight;
                    }
                    else if (Game.orientation == "landscape") {
                        sizeTest = window.innerWidth;
                    }
                }
                else {
                    if (Game.orientation == "portrait") {
                        sizeTest = document.documentElement.offsetHeight;
                    }
                    else if (Game.orientation == "landscape") {
                        sizeTest = document.documentElement.offsetWidth;
                    }
                }
                Object.keys(Game.config["assetTypes"]).forEach(function (type) {
                    if (Scale.assetType)
                        return;
                    var data = Game.config["assetTypes"][type];
                    if (data["minRes"] && data["maxRes"]) {
                        if (sizeTest > data["minRes"] && sizeTest <= data["maxRes"]) {
                            Scale.assetType = type;
                        }
                    }
                    else if (data["minRes"]) {
                        if (sizeTest > data["minRes"]) {
                            Scale.assetType = type;
                        }
                    }
                    else if (data["maxRes"]) {
                        if (sizeTest <= data["maxRes"]) {
                            Scale.assetType = type;
                        }
                    }
                    else {
                        throw "Asset type " + type + " is missing a minRes and/or maxRes in config.json";
                    }
                });
                if (!Scale.assetType) {
                    Scale.assetType = Object.keys(Game.config["assetTypes"])[0];
                }
            }
            Scale.imageScale = Game.config["assetTypes"][Scale.assetType]["scale"];
        };
        Scale.setup = function () {
            util.Scale.determineAssetType();
            var orientationSettings = this._getOrientationSettings();
            Game.game.scale.setMinMax(orientationSettings["minResolution"].width, orientationSettings["minResolution"].height);
            Game.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            Game.dimensions = util.Scale.getDimensions();
            Game.game.scale.setGameSize(Game.dimensions.width, Game.dimensions.height);
        };
        Scale.getGameRatio = function () {
            var windowRatio, gameRatio, orientationSettings = this._getOrientationSettings();
            if (Game.orientation == "portrait") {
                windowRatio = window.innerHeight / window.innerWidth;
                gameRatio = Phaser.Math.clamp(windowRatio, 1 / orientationSettings["minRatio"], 1 / orientationSettings["maxRatio"]);
            }
            else if (Game.orientation == "landscape") {
                windowRatio = window.innerWidth / window.innerHeight;
                gameRatio = Phaser.Math.clamp(windowRatio, 1 / orientationSettings["maxRatio"], 1 / orientationSettings["minRatio"]);
            }
            return gameRatio;
        };
        Scale.getDimensions = function () {
            var dimensions, orientationSettings = this._getOrientationSettings();
            if (Game.orientation == "portrait") {
                var gameWidth = orientationSettings["workingWidth"] * Scale.imageScale;
                dimensions = new util.Dimensions(gameWidth, gameWidth * Scale.getGameRatio());
            }
            else if (Game.orientation == "landscape") {
                if (orientationSettings["workingHeight"]) {
                    var gameHeight = orientationSettings["workingHeight"] * Scale.imageScale;
                    dimensions = new util.Dimensions(gameHeight * Scale.getGameRatio(), gameHeight);
                }
                else {
                    var gameWidth = orientationSettings["workingWidth"] * Scale.imageScale;
                    dimensions = new util.Dimensions(gameWidth, gameWidth / Scale.getGameRatio());
                }
            }
            return dimensions;
        };
        Scale.getCanvasScale = function () {
            return parseInt(Game.game.canvas.style.width, 10) / Game.game.canvas.width;
        };
        Scale._getOrientationSettings = function () {
            return Game.config["orientationSettings"][Game.orientation];
        };
        Scale.assetType = null;
        Scale.imageScale = null;
        return Scale;
    })();
    util.Scale = Scale;
})(util || (util = {}));
var util;
(function (util) {
    var Dimensions = (function () {
        function Dimensions(width, height) {
            this.width = width;
            this.height = height;
        }
        Dimensions.prototype.set = function (width, height) {
            this.width = width;
            this.height = height;
        };
        return Dimensions;
    })();
    util.Dimensions = Dimensions;
})(util || (util = {}));
///<reference path="util/Scale.ts" />
///<reference path="util/Dimensions.ts" />
var Game = (function () {
    function Game() {
    }
    Game.init = function () {
        var renderer;
        if (RENDERER == "canvas") {
            renderer = Phaser.CANVAS;
        }
        else if (RENDERER == "webgl") {
            renderer = Phaser.WEBGL;
        }
        else {
            if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) != null) {
                renderer = Phaser.CANVAS;
            }
            else {
                renderer = Phaser.AUTO;
            }
        }
        Game.game = new Phaser.Game(0, 0, renderer, "phaser-game", {
            preload: Game.preload,
            create: Game.create
        });
        PokiSDK.init().then(function () {
            Game.pokiSDKLoaded = true;
        }).catch(function () {
        });
        for (var stateName in Game._states) {
            Game.game.state.add(stateName, Game._states[stateName]);
        }
    };
    Game.preload = function () {
        Game.game.load.json("images", "/_assets/64828784fbf16af88047.json");
        Game.game.load.json("config", "/_assets/f1ba74f3e54d2eaba241.json");
    };
    Game.create = function () {
        Game.config = Game.game.cache.getJSON("config");
        Game.orientation = Game.config["forcedOrientation"] ? Game.config["forcedOrientation"] : (window.innerWidth > window.innerHeight ? "landscape" : "portrait");
        Game.game.canvas.oncontextmenu = function (e) { e.preventDefault(); };
        util.Scale.setup();
        if (Game.game.debug && Game.game.debug.sprite) {
            Game.game.debug.bmd = null;
            Game.game.debug.sprite.destroy();
            Game.game.debug.sprite = null;
            Game.game.debug.context = null;
            Game.game.debug.canvas = null;
            Game.game.debug.boot();
        }
        Game.game.time.advancedTiming = true;
        Game.game.stage.disableVisibilityChange = true;
        window.onfocus = null;
        window.onblur = null;
        Game.analytics = new util.Analytics(Game.config["googleAnalyticsKey"], Game.config["flurryKey"]);
        Game.analytics.pageview("GameInit");
        Game.analytics.event("VersionInfo", "BuildTimestamp", BUILD_TIMESTAMP);
        Game.analytics.event("VersionInfo", "BuildDate", util.TimeFormatter.unixToFullDate(parseInt(BUILD_TIMESTAMP) * .001));
        Game.save = new util.Save();
        Game.test = new util.Test();
        Game.effects = new util.Effects();
        Game.events = new util.Events();
        util.Debug.logScalingInfo();
        Game.game.state.start("BrandingState");
    };
    Game.addState = function (stateName, state) {
        Game._states[stateName] = state;
    };
    Game.scale = function (value) {
        if (util.Scale.imageScale == undefined)
            util.Debug.error("You cannot use Game.scale before util.Scale.setup() is ran");
        return util.Scale.imageScale * value;
    };
    Game.unScale = function (value) {
        if (util.Scale.imageScale == undefined)
            util.Debug.error("You cannot use Game.scale before util.Scale.setup() is ran");
        return value / util.Scale.imageScale;
    };
    Game.screenScale = function (value) {
        if (util.Scale.imageScale == undefined)
            util.Debug.error("You cannot use Game.screenScale before util.Scale.setup() is ran");
        return Math.round(util.Scale.imageScale * value * util.Scale.getCanvasScale());
    };
    Game.makeScreenshot = function (callback) {
        if (Game.renderer == "canvas") {
            callback(Game.game.canvas.toDataURL());
        }
        else {
            Game.state.onRender(function () {
                callback(Game.game.canvas.toDataURL());
            }, true);
        }
    };
    Game.openUrl = function (url) {
        if (Game.game.device.iOS) {
            window.location.href = url;
        }
        else {
            window.open(url);
        }
    };
    Object.defineProperty(Game, "state", {
        get: function () {
            var state = Game.game.state.getCurrentState();
            if (!(state instanceof states.BaseState))
                console.error("All states should extend the BaseState and implement IState!", state);
            return state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game, "renderer", {
        get: function () {
            if (Game.game.renderer instanceof PIXI.CanvasRenderer) {
                return "canvas";
            }
            else {
                return "webgl";
            }
        },
        enumerable: true,
        configurable: true
    });
    Game.pokiSDKLoaded = false;
    Game._states = {};
    return Game;
})();
/**
 * Bootstrap
 *
 * Handles the starting of the game, and checking of window orientation
 */
var startTime = new Date().getTime();
// ga("send", "event", "Screen", "pre-game-loader");
if (document.readyState != "loading") {
    bootstrap();
}
else {
    document.addEventListener("DOMContentLoaded", bootstrap);
}
function bootstrap() {
    // ga("send", "event", "Timing", "pre-game-loader-finished", "loadingTime", new Date().getTime() - startTime);
    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) != null, visibleCheckStarted = false, gameStarted = false;
    if (FORCED_ORIENTATION == null || DEBUG_ENABLED || !isMobile) {
        startVisibilityCheck();
    }
    else {
        var orientationDiv = document.createElement("div");
        orientationDiv.style.cssText = "position:absolute;left:0;top:0;right:0;bottom:0;background:#fff;text-align:center";
        orientationDiv.style.display = "none";
        document.body.appendChild(orientationDiv);
        var helper = document.createElement("div");
        helper.style.cssText = "display:inline-block;height:100%;vertical-align:middle;";
        orientationDiv.appendChild(helper);
        var orientationGraphic = document.createElement("img");
        orientationGraphic.src = "assets/static/orientation-" + FORCED_ORIENTATION + ".png";
        orientationGraphic.style.cssText = "max-width: 50%;max-height:50%;vertical-align:middle;";
        orientationDiv.appendChild(orientationGraphic);
        checkOrientation();
        window.addEventListener("resize", checkOrientation, false);
        window.addEventListener("focus", checkOrientation, false);
        function checkOrientation() {
            var orientation = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
            if (orientation == FORCED_ORIENTATION) {
                orientationDiv.style.display = "none";
                startVisibilityCheck();
            }
            else {
                orientationDiv.style.display = "block";
            }
        }
    }
    function startVisibilityCheck() {
        if (visibleCheckStarted)
            return;
        visibleCheckStarted = true;
        checkVisible();
    }
    function checkVisible() {
        if (window.innerWidth == 0 || window.innerHeight == 0) {
            window.setTimeout(checkVisible, 500);
        }
        else {
            startGame();
        }
    }
    function startGame() {
        if (gameStarted)
            return;
        gameStarted = true;
        Game.init();
    }
}
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var states;
(function (states) {
    var BaseState = (function (_super) {
        __extends(BaseState, _super);
        function BaseState() {
            _super.apply(this, arguments);
            this._updateCallbacks = [];
            this._renderCallbacks = [];
            this._stepLimitedCallbacks = [];
        }
        BaseState.prototype.onUpdate = function (callback, runOnce) {
            if (runOnce === void 0) { runOnce = false; }
            this._updateCallbacks.push({
                callback: callback,
                runOnce: runOnce
            });
        };
        BaseState.prototype.onRender = function (callback, runOnce) {
            if (runOnce === void 0) { runOnce = false; }
            this._renderCallbacks.push({
                callback: callback,
                runOnce: runOnce
            });
        };
        BaseState.prototype.removeOnUpdate = function (callback) {
            var _this = this;
            this._updateCallbacks.forEach(function (item, idx) {
                if (item == null)
                    return;
                if (item.callback == callback) {
                    _this._updateCallbacks[idx] = null;
                }
            });
        };
        BaseState.prototype.removeOnRender = function (callback) {
            var _this = this;
            this._renderCallbacks.forEach(function (item, idx) {
                if (item == null)
                    return;
                if (item.callback == callback) {
                    _this._renderCallbacks[idx] = null;
                }
            });
        };
        BaseState.prototype.update = function () {
            var _this = this;
            _super.prototype.update.call(this);
            util.Debug.calcAvgFPS();
            this._updateCallbacks.forEach(function (callback, idx) {
                if (callback == null)
                    return;
                callback.callback();
                if (callback.runOnce) {
                    _this._updateCallbacks.splice(idx);
                }
            });
            if (Game.config["trackFPS"] != null && Game.config["trackFPS"]) {
                this._runOncePerNSteps("TrackFPS", 500, function () {
                    util.Debug.trackFPS();
                });
            }
        };
        BaseState.prototype.render = function () {
            var _this = this;
            _super.prototype.update.call(this);
            util.Debug.renderFPS();
            this._renderCallbacks.forEach(function (callback, idx) {
                if (callback == null)
                    return;
                callback.callback();
                if (callback.runOnce) {
                    _this._renderCallbacks.splice(idx);
                }
            });
        };
        BaseState.prototype._setupLayers = function () {
            this.farBackLayer = Game.game.add.group();
            this.backLayer = Game.game.add.group();
            this.midLayer = Game.game.add.group();
            this.frontLayer = Game.game.add.group();
            this.uiLayer = Game.game.add.group();
            this.fixedUiLayer = Game.game.add.group();
            this.fixedUiLayer.fixedToCamera = true;
        };
        BaseState.prototype._resetCameraAndBounds = function () {
            var x = 0, y = 0, width = Game.game.camera.width, height = Game.game.camera.height;
            Game.game.world.bounds.setTo(x, y, width, height);
            if (Game.game.camera.bounds) {
                Game.game.camera.bounds.setTo(x, y, width, height);
            }
        };
        BaseState.prototype._setBounds = function (bounds) {
            Game.game.world.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
            Game.game.camera.bounds.setTo(bounds.x, bounds.y, bounds.width, bounds.height);
        };
        BaseState.prototype._runOncePerNSteps = function (id, steps, callback) {
            if (!this._stepLimitedCallbacks[id]) {
                this._stepLimitedCallbacks[id] = {
                    totalSteps: steps,
                    currentSteps: steps,
                    callback: callback
                };
            }
            else {
                var data = this._stepLimitedCallbacks[id];
                if (data.currentSteps == 0) {
                    callback();
                    data.currentSteps = data.totalSteps;
                }
                else {
                    data.currentSteps--;
                }
            }
        };
        BaseState.prototype._fadeOut = function (callback) {
            var overlay = util.Sprite.createSprite(Game.dimensions.width, Game.dimensions.height, { r: 0, g: 0, b: 0 });
            overlay.alpha = 0;
            Game.game.add.existing(overlay);
            var tween = Game.game.add.tween(overlay).to({
                alpha: 1
            }, 500, Phaser.Easing.Cubic.Out, true);
            if (callback != undefined) {
                tween.onComplete.add(callback, this);
            }
        };
        return BaseState;
    })(Phaser.State);
    states.BaseState = BaseState;
})(states || (states = {}));
var states;
(function (states) {
    var BrandingState = (function (_super) {
        __extends(BrandingState, _super);
        function BrandingState() {
            _super.apply(this, arguments);
        }
        BrandingState.prototype.preload = function () {
            var images = Game.game.cache.getJSON("images");
            for (var idx in images[util.Scale.assetType]["sheets"]) {
                var path = images[util.Scale.assetType]["sheets"][idx], key = path.split("/").splice(3).join("/");
                if (key != "preroll")
                    continue;
                Game.game.load.atlasJSONHash(key, path + ".png", path + ".json");
                util.Cleaner.addToCacheCleanupQueue("JSON", key);
            }
        };
        BrandingState.prototype.create = function () {
            Game.analytics.pageview("BrandingState");
            this._initBackground();
            this._fadeOut(function () {
                Game.game.state.start("PreloadState");
            });
        };
        BrandingState.prototype._initBackground = function () {
            Game.game.stage.backgroundColor = 0x39baea;
        };
        BrandingState.prototype._initLogo = function () {
            var pokiLogo = Game.game.add.sprite(Game.game.world.centerX, 0, "preroll", "poki-logo");
            pokiLogo.y = -pokiLogo.height;
            pokiLogo.anchor.set(0.5, 0.5);
            var tween = Game.game.add.tween(pokiLogo).to({
                y: Game.game.world.centerY
            }, 1000, Phaser.Easing.Bounce.Out, true);
            util.Cleaner.addToDestroyQueue(pokiLogo);
            util.Cleaner.addToDestroyQueue(tween);
        };
        BrandingState.prototype.destroy = function () {
            util.Cleaner.cleanupAll();
        };
        return BrandingState;
    })(states.BaseState);
    states.BrandingState = BrandingState;
})(states || (states = {}));
Game.addState("BrandingState", states.BrandingState);
var util;
(function (util) {
    var Analytics = (function () {
        function Analytics(gaKey, flurryKey) {
            // this._gaEnabled = false;
            // this._flurryEnabled = false;
            // if (gaKey != undefined && typeof ga != "undefined") {
            //     this._gaEnabled = true;
            //     ga("create", gaKey, "auto");
            // }
            // if (flurryKey != undefined && typeof FlurryAgent != "undefined") {
            //     this._flurryEnabled = true;
            //     FlurryAgent.startSession(flurryKey);
            // }
        }
        Analytics.prototype.pageview = function (page) {
            // if (this._gaEnabled) {
            //     ga("send", "pageview", page);
            // }
            // if (this._flurryEnabled) {
            //     FlurryAgent.logEvent("Pageview - " + page);
            // }
        };
        Analytics.prototype.event = function (category, action, label, value) {
            // if (this._gaEnabled) {
            //     if (typeof value !== "undefined") {
            //         value = value ? Math.round(value * 1) : 0;
            //     }
            //     else {
            //         value = 0;
            //     }
            //     if (typeof label !== "undefined") {
            //         label = label ? label : '';
            //     }
            //     else {
            //         label = '';
            //     }
            //     ga("send", "event", category, action, label, value);
            // }
            // if (this._flurryEnabled) {
            //     FlurryAgent.logEvent(category + " - " + action + " - " + label, {
            //         value: value ? value.toString() : undefined
            //     });
            // }
        };
        return Analytics;
    })();
    util.Analytics = Analytics;
})(util || (util = {}));
/**
 * Turns out, this adds nothing. Phaser memory management is pretty good.
 */
var util;
(function (util) {
    var Cleaner = (function () {
        function Cleaner() {
        }
        Cleaner.cleanupCache = function (type, key) {
            var methodName = "remove" + type;
            if (Phaser.Cache.prototype.hasOwnProperty(methodName)) {
                Game.game.cache[methodName](key);
            }
            else {
                util.Debug.warn("Phaser.Cache doesn't have a method called " + methodName);
            }
        };
        Cleaner.destroy = function (object) {
            if (typeof object["destroy"] == "function") {
                if (object instanceof Phaser.Group) {
                    object.children.forEach(function (child) {
                        Cleaner.destroy(child);
                    });
                    object.destroy();
                }
                else {
                    object.destroy();
                }
            }
            object = null;
        };
        Cleaner.addToDestroyQueue = function (object, queueId) {
            if (queueId === void 0) { queueId = "all"; }
            if (Cleaner._destroyQueues[queueId] == undefined) {
                Cleaner._destroyQueues[queueId] = [];
            }
            Cleaner._destroyQueues[queueId].push(object);
        };
        Cleaner.addToCacheCleanupQueue = function (type, key, queueId) {
            if (queueId === void 0) { queueId = "all"; }
            if (Cleaner._cacheCleanupQueues[queueId] == undefined) {
                Cleaner._cacheCleanupQueues[queueId] = [];
            }
            Cleaner._cacheCleanupQueues[queueId].push({ type: type, key: key });
        };
        Cleaner.cleanupQueue = function (queueId) {
            Object.keys(Cleaner._destroyQueues).forEach(function (id) {
                if (id == queueId) {
                    Cleaner._destroyQueues[id].forEach(function (object) {
                        Cleaner.destroy(object);
                    });
                    delete Cleaner._destroyQueues[id];
                }
            });
            Object.keys(Cleaner._cacheCleanupQueues).forEach(function (id) {
                if (id == queueId) {
                    Cleaner._cacheCleanupQueues[id].forEach(function (data) {
                        Cleaner.cleanupCache(data.type, data.key);
                    });
                    delete Cleaner._cacheCleanupQueues[id];
                }
            });
        };
        Cleaner.cleanupAll = function () {
            Object.keys(Cleaner._destroyQueues).forEach(function (id) {
                if (Cleaner._destroyQueues[id] == undefined)
                    return;
                Cleaner._destroyQueues[id].forEach(function (object) {
                    Cleaner.destroy(object);
                });
                delete Cleaner._destroyQueues[id];
            });
            Object.keys(Cleaner._cacheCleanupQueues).forEach(function (id) {
                if (Cleaner._cacheCleanupQueues[id] == undefined)
                    return;
                Cleaner._cacheCleanupQueues[id].forEach(function (data) {
                    Cleaner.cleanupCache(data.type, data.key);
                });
                delete Cleaner._cacheCleanupQueues[id];
            });
        };
        Cleaner._destroyQueues = {};
        Cleaner._cacheCleanupQueues = {};
        return Cleaner;
    })();
    util.Cleaner = Cleaner;
})(util || (util = {}));
/**
 * util.ColorUtil
 *
 *
 */
var util;
(function (util) {
    var Color = (function () {
        function Color() {
        }
        Color.RGBtoHEX = function (rgb) {
            function componentToHex(c) {
                var hex = Math.floor(c).toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            }
            return "#" + componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
        };
        Color.HSLtoHEX = function (hsl) {
            return Color.RGBtoHEX(Color.HSLtoRGB(hsl));
        };
        Color.HEXtoRGB = function (hex) {
            return Phaser.Color.hexToColor(hex);
        };
        Color.HSLtoRGB = function (hsl) {
            return Phaser.Color.HSLtoRGB(hsl.h, hsl.s, hsl.l);
        };
        Color.HEXtoHSL = function (value) {
            var rgb = Phaser.Color.hexToColor(value);
            return Phaser.Color.RGBtoHSL(rgb.r, rgb.g, rgb.b);
        };
        Color.HEXtoINT = function (hex) {
            return parseInt(hex.replace("#", ""), 16);
        };
        Color.getRandomHex = function () {
            return (function co(lor) {
                return (lor +=
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"][Math.floor(Math.random() * 16)])
                    && (lor.length == 6) ? lor : co(lor);
            })("");
        };
        return Color;
    })();
    util.Color = Color;
})(util || (util = {}));
var util;
(function (util) {
    var Cookie = (function () {
        function Cookie() {
        }
        Cookie.createCookie = function (name, value, days) {
            if (days === void 0) { days = 365; }
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }
            else {
                expires = "";
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        };
        Cookie.readCookie = function (name) {
            var nameEQ = name + "=", cookieArray = document.cookie.split(';');
            for (var i = 0; i < cookieArray.length; i++) {
                var cookie = cookieArray[i];
                while (cookie.charAt(0) == ' ') {
                    cookie = cookie.substring(1, cookie.length);
                }
                if (cookie.indexOf(nameEQ) == 0) {
                    return cookie.substring(nameEQ.length, cookie.length);
                }
            }
            return null;
        };
        Cookie.eraseCookie = function (name) {
            Cookie.createCookie(name, "", -1);
        };
        return Cookie;
    })();
    util.Cookie = Cookie;
})(util || (util = {}));
var util;
(function (util) {
    var Debug = (function () {
        function Debug() {
        }
        Debug.calcAvgFPS = function () {
            if (Game.game.time.fps !== null) {
                if (Debug._fps.length > 100) {
                    Debug._fps.shift();
                }
                Debug._fps.push(Game.game.time.fps);
                var totalFps = 0;
                for (var idx in Debug._fps) {
                    totalFps += Debug._fps[idx];
                }
                var decimals = 2;
                Debug._avgFPS = Math.round(totalFps / Debug._fps.length * 10 * decimals) / 10 / decimals;
            }
        };
        Debug.renderFPS = function () {
            if (!DEBUG_ENABLED)
                return;
            Game.game.debug.text("FPS: " + Game.game.time.fps + " (AVG: " + Debug._avgFPS + ")", 2, 14, "#00ff00");
        };
        Debug.trackFPS = function () {
            if (Debug._fpsTrackedPerState[Game.state.key] == undefined) {
                Debug._fpsTrackedPerState[Game.state.key] = 0;
            }
            else {
                Debug._fpsTrackedPerState[Game.state.key]++;
            }
            if (Game.state.key == "GameState") {
                if (Debug._fpsTrackedPerState[Game.state.key] > 100) {
                    return;
                }
            }
            else if (Debug._fpsTrackedPerState[Game.state.key] > 10) {
                return;
            }
            Game.analytics.event("Performance", "FPS", Game.state.key, Debug._avgFPS);
        };
        Debug.logCreationTime = function () {
            Game.analytics.event("LoadTimes", "Creation", "Time", (Date.now() - Debug._creationStartTime) / 1000);
            if (!DEBUG_ENABLED)
                return;
            Debug.log("Game was created in " + (Date.now() - Debug._creationStartTime) / 1000 + " seconds");
        };
        Debug.logScalingInfo = function () {
            Game.analytics.event("ScalingInfo", "Available dimensions", window.screen.availWidth + "x" + window.screen.availHeight);
            Game.analytics.event("ScalingInfo", "Screen dimensions", window.screen.width + "x" + window.screen.height);
            Game.analytics.event("ScalingInfo", "Game dimensions", Game.dimensions.width + "x" + Game.dimensions.height);
            Game.analytics.event("ScalingInfo", "Asset type", util.Scale.assetType);
            if (!DEBUG_ENABLED)
                return;
            Debug.log("Game orientation: " + Game.orientation);
            Debug.log("Screen available dimensions: " + window.screen.availWidth + "x" + window.screen.availHeight);
            Debug.log("Screen dimensions: " + window.screen.width + "x" + window.screen.height);
            Debug.log("Game dimensions: " + Game.dimensions.width + "x" + Game.dimensions.height);
            Debug.log("Game ratio: " + util.Scale.getGameRatio());
            Debug.log("Asset type: " + util.Scale.assetType);
        };
        Debug.warn = function (message) {
            if (!DEBUG_ENABLED)
                return;
            console.warn(message);
        };
        Debug.error = function (message) {
            if (!DEBUG_ENABLED)
                return;
            console.error(message);
        };
        Debug.log = function () {
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i - 0] = arguments[_i];
            }
            if (!DEBUG_ENABLED)
                return;
            console.log.apply(console, messages);
        };
        Debug.startTime = function (id) {
            if (!DEBUG_ENABLED)
                return;
            Debug._startTimes[id] = Date.now();
        };
        Debug.stopTime = function (id) {
            if (!DEBUG_ENABLED)
                return;
            if (!Debug._times[id]) {
                Debug._times[id] = [];
            }
            Debug._times[id].push(Date.now() - Debug._startTimes[id]);
        };
        Debug.getAverageTime = function (id) {
            if (!DEBUG_ENABLED)
                return 0;
            if (Debug._times[id] && Debug._times[id].length) {
                var total = 0;
                Debug._times[id].forEach(function (time) {
                    total += time;
                });
                return total / Debug._times[id].length;
            }
            else {
                return 0;
            }
        };
        Debug.logAverageTimes = function () {
            if (!DEBUG_ENABLED)
                return;
            Object.keys(Debug._times).forEach(function (id) {
                var avgTime = Debug.getAverageTime(id) / 1000;
                Debug.log(id + " - Average of: " + avgTime + " seconds over " + Debug._times[id].length + " iterations with a total of " + avgTime * Debug._times[id].length + " seconds");
            });
        };
        Debug._fps = [];
        Debug._creationStartTime = Date.now();
        Debug._avgFPS = 0;
        Debug._startTimes = [];
        Debug._times = [];
        Debug._fpsTrackedPerState = {};
        return Debug;
    })();
    util.Debug = Debug;
})(util || (util = {}));
var util;
(function (util) {
    var Effects = (function () {
        function Effects() {
            this._screenFlashSprite = null;
            this.cameraShakeOffset = new Phaser.Point(0, 0);
        }
        Effects.prototype.prepare = function () {
            this._prepareScreenFlash();
        };
        Effects.prototype._prepareScreenFlash = function () {
            this._screenFlashSprite = util.Sprite.createSprite(Game.dimensions.width, Game.dimensions.height, { r: 122, g: 122, b: 122 });
            this._screenFlashSprite.fixedToCamera = true;
            this._screenFlashSprite.alpha = 0;
            Game.game.add.existing(this._screenFlashSprite);
        };
        Effects.prototype.screenFlash = function (color, maxAlpha, duration) {
            if (maxAlpha === void 0) { maxAlpha = .8; }
            if (duration === void 0) { duration = 50; }
            if (!this._screenFlashSprite) {
                this._prepareScreenFlash();
            }
            Game.game.world.bringToTop(this._screenFlashSprite);
            this._screenFlashSprite.tint = color;
            var flashTween = Game.game.add.tween(this._screenFlashSprite).to({ alpha: maxAlpha }, duration, Phaser.Easing.Linear.None, true, 0, 0, true);
            flashTween.onComplete.add(function () {
                this._screenFlashSprite.alpha = 0;
            }, this);
        };
        Effects.prototype.screenShake = function (strength, frames) {
            var _this = this;
            if (strength === void 0) { strength = 5; }
            if (frames === void 0) { frames = 20; }
            if (this._screenShakes > 0)
                return;
            if (frames % 2 > 0)
                frames++;
            this._lastShakedAt = Game.game.time.now;
            this._screenShakes = frames;
            var shakeCallback = function () {
                if (_this._screenShakes > 0) {
                    _this._screenShakes--;
                    var amt = Game.scale(_this._screenShakes * 0.5 * strength);
                    if (_this._screenShakes % 2) {
                        Game.game.camera.y += amt;
                        Game.game.camera.x += amt;
                        _this.cameraShakeOffset.y = amt;
                        _this.cameraShakeOffset.x = amt;
                    }
                    else {
                        Game.game.camera.y -= amt;
                        Game.game.camera.x -= amt;
                        _this.cameraShakeOffset.y = -amt;
                        _this.cameraShakeOffset.x = -amt;
                    }
                    if (_this._screenShakes == 0) {
                        _this.cameraShakeOffset.setTo(0, 0);
                    }
                    Game.game.camera.displayObject.position.y = -Game.game.camera.view.y;
                    Game.game.camera.displayObject.position.x = -Game.game.camera.view.x;
                }
                else {
                    Game.state.removeOnUpdate(shakeCallback);
                }
            };
            Game.state.onUpdate(shakeCallback);
        };
        Effects.prototype.reset = function () {
            this._lastShakedAt = null;
            this._screenShakes = null;
            this.cameraShakeOffset = new Phaser.Point(0, 0);
            this._screenFlashSprite = null;
        };
        return Effects;
    })();
    util.Effects = Effects;
})(util || (util = {}));
var util;
(function (util) {
    var Events = (function () {
        function Events() {
            this._callbacks = {};
        }
        Events.prototype.addListener = function (eventName, callback, context) {
            if (!this._callbacks[eventName]) {
                this._callbacks[eventName] = [];
            }
            this._callbacks[eventName].push({
                callback: callback,
                context: context
            });
        };
        Events.prototype.removeListener = function (eventName, callback, context) {
            var idx = this._callbacks[eventName].indexOf({
                callback: callback,
                context: context
            });
            if (idx > -1) {
                this._callbacks[eventName][idx] = null;
            }
        };
        Events.prototype.trigger = function (eventName) {
            var parameters = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                parameters[_i - 1] = arguments[_i];
            }
            if (this._callbacks[eventName]) {
                this._callbacks[eventName].forEach(function (data) {
                    data.callback.call(data.context, parameters);
                });
            }
        };
        Events.prototype.clearByName = function (eventName) {
            this._callbacks[eventName] = [];
        };
        Events.prototype.clearAll = function () {
            this._callbacks = {};
        };
        return Events;
    })();
    util.Events = Events;
})(util || (util = {}));
var util;
(function (util) {
    var PokiGameScore = (function () {
        function PokiGameScore() {
        }
        PokiGameScore.init = function () {
            if (typeof POKI_GAME_SCORE == "undefined")
                return;
            var pokiGameScore = new POKI_GAME_SCORE(window.top);
            pokiGameScore.send(pokiGameScore.events.bridge);
            pokiGameScore.addEventListener(pokiGameScore.events.rating, function (data) {
                Game.analytics.event("Performance", "Rating", Game.state.key, data['score']);
            });
        };
        return PokiGameScore;
    })();
    util.PokiGameScore = PokiGameScore;
})(util || (util = {}));
var util;
(function (util) {
    var PositionGroupSprite = (function (_super) {
        __extends(PositionGroupSprite, _super);
        function PositionGroupSprite() {
            _super.apply(this, arguments);
        }
        PositionGroupSprite.prototype.setGroup = function (group) {
            this._parentTransform = group;
        };
        PositionGroupSprite.prototype.updateTransform = function () {
            if (!this.visible) {
                return;
            }
            this.displayObjectUpdateTransform(this._parentTransform);
        };
        return PositionGroupSprite;
    })(Phaser.Sprite);
    util.PositionGroupSprite = PositionGroupSprite;
})(util || (util = {}));
var util;
(function (util) {
    var PositionHelper = (function () {
        function PositionHelper() {
        }
        PositionHelper.centerHorizontally = function (items, betweenMargin, bounds) {
            if (betweenMargin === void 0) { betweenMargin = 0; }
            bounds = bounds || Game.game.world.bounds;
            var totalSize = betweenMargin * (items.length - 1);
            items.forEach(function (item) {
                totalSize += item.width;
            });
            var xPos = bounds.y + bounds.width / 2 - totalSize / 2;
            items.forEach(function (item) {
                var anchor = item.anchor || (item instanceof Phaser.Group ? new Phaser.Point(.5, .5) : new Phaser.Point());
                item.x = xPos - (item.width * -anchor.x);
                xPos += (item.width + betweenMargin);
            });
        };
        PositionHelper.centerVertically = function (items, betweenMargin, bounds) {
            if (betweenMargin === void 0) { betweenMargin = 0; }
            bounds = bounds || Game.game.world.bounds;
            var totalSize = betweenMargin * (items.length - 1);
            items.forEach(function (item) {
                totalSize += item.height;
            });
            var yPos = bounds.y + bounds.height / 2 - totalSize / 2;
            items.forEach(function (item) {
                var anchor = item.anchor || (item instanceof Phaser.Group ? new Phaser.Point(.5, .5) : new Phaser.Point());
                item.y = yPos - (item.height * -anchor.y);
                yPos += (item.height + betweenMargin);
            });
        };
        return PositionHelper;
    })();
    util.PositionHelper = PositionHelper;
})(util || (util = {}));
var util;
(function (util) {
    var Save = (function () {
        function Save() {
            this._data = {};
            this._localStorageSupported = undefined;
            var rawData;
            if (this.localStorageSupported()) {
                rawData = localStorage.getItem(Game.config["gameId"]);
            }
            else {
                rawData = util.Cookie.readCookie(Game.config["gameId"]);
            }
            this._data = JSON.parse(rawData) || {};
            if (Object.keys(this._data).length == 0) {
                this._data["dateCreated"] = Date.now();
            }
        }
        Save.prototype.load = function (key) {
            return this._data[key];
        };
        Save.prototype.save = function (key, value) {
            this._data[key] = value;
            this.doSave();
        };
        Save.prototype.doSave = function () {
            this._data["dateModified"] = Date.now();
            if (this.localStorageSupported()) {
                localStorage.setItem(Game.config["gameId"], JSON.stringify(this._data));
            }
            else {
                util.Cookie.createCookie(Game.config["gameId"], JSON.stringify(this._data));
            }
        };
        Save.prototype.clear = function (key) {
            if (typeof this._data[key] !== "undefined") {
                delete this._data[key];
                this.doSave();
            }
        };
        Save.prototype.localStorageSupported = function () {
            var testKey = 'test', storage = window.sessionStorage;
            if (this._localStorageSupported === undefined) {
                try {
                    storage.setItem(testKey, '1');
                    storage.removeItem(testKey);
                    this._localStorageSupported = true;
                }
                catch (error) {
                    this._localStorageSupported = false;
                }
            }
            return this._localStorageSupported;
        };
        return Save;
    })();
    util.Save = Save;
})(util || (util = {}));
var util;
(function (util) {
    var Sound = (function () {
        function Sound() {
        }
        Sound.playFx = function (id, loop) {
            if (loop === void 0) { loop = false; }
            if (Sound.muted || Sound.soundMuted)
                return;
            if (Sound._sounds[id] == undefined) {
                Sound._sounds[id] = Game.game.add.audio(id, this._soundVolume, loop);
            }
            Sound._sounds[id].play();
        };
        Sound.stopFx = function (id) {
            if (Sound._sounds[id] != undefined) {
                Sound._sounds[id].stop();
            }
        };
        Sound.playMusic = function (id, loop, onCompleteCallback) {
            if (loop === void 0) { loop = true; }
            if (onCompleteCallback === void 0) { onCompleteCallback = null; }
            if (Sound._musics[id] == undefined) {
                Sound._musics[id] = Game.game.add.audio(id, this._musicVolume, loop);
                if (!loop && onCompleteCallback !== null) {
                    Sound._musics[id].onStop.add(onCompleteCallback);
                }
            }
            var music = Sound._musics[id];
            if (Sound.muted || Sound.musicMuted) {
                var pauseOnPlay = function () {
                    music.pause();
                    music.onPlay.remove(pauseOnPlay);
                };
                music.onPlay.add(pauseOnPlay);
            }
            if (music.isPlaying)
                return;
            this.pauseAllMusic();
            music.play();
        };
        Sound.stopMusic = function (id) {
            if (Sound._musics[id] != undefined) {
                Sound._musics[id].stop();
            }
        };
        Sound.setMusicVolume = function (id, volume) {
            Sound._musics[id].volume = volume;
        };
        Sound.pauseMusic = function (id) {
            if (typeof Sound._musics[id] !== "undefined") {
                Sound._musics[id].pause();
            }
        };
        Sound.pauseAllMusic = function () {
            for (var key in Sound._musics) {
                Sound._musics[key].pause();
            }
        };
        Sound.resumeMusic = function (id) {
            if (typeof Sound._musics[id] !== "undefined") {
                Sound._musics[id].resume();
            }
        };
        Sound.pauseAll = function () {
            for (var key in Sound._sounds) {
                Sound._sounds[key].pause();
            }
            for (var key in Sound._musics) {
                Sound._musics[key].pause();
            }
        };
        Sound.resumeAll = function () {
            for (var key in Sound._sounds) {
                Sound._sounds[key].resume();
            }
            for (var key in Sound._musics) {
                Sound._musics[key].resume();
            }
        };
        Sound.resumeAllMusic = function () {
            for (var key in Sound._musics) {
                Sound._musics[key].resume();
            }
        };
        Sound.setAllMusicVolume = function (volume) {
            for (var key in Sound._musics) {
                Sound._musics[key].volume = volume;
            }
        };
        Sound.setSoundVolume = function (id, volume) {
            Sound._sounds[id].volume = volume;
        };
        Sound.pauseAllSound = function () {
            for (var key in Sound._sounds) {
                Sound._sounds[key].pause();
            }
        };
        Sound.setAllSoundVolume = function (volume) {
            for (var key in Sound._sounds) {
                Sound._sounds[key].volume = volume;
            }
        };
        Sound.mute = function () {
            this.pauseAllMusic();
            this.pauseAllSound();
            Sound.muted = true;
            Game.save.save("muted", true);
        };
        Sound.muteSounds = function () {
            this.pauseAllSound();
            Sound.soundMuted = true;
            Game.save.save("soundMuted", true);
        };
        Sound.muteMusic = function () {
            this.pauseAllMusic();
            Sound.musicMuted = true;
            Game.save.save("musicMuted", true);
        };
        Sound.unMute = function () {
            Sound.muted = false;
            Game.save.save("muted", false);
        };
        Sound.unMuteSounds = function () {
            Sound.soundMuted = false;
            Game.save.save("soundMuted", false);
        };
        Sound.unMuteMusic = function () {
            this.resumeAllMusic();
            Sound.musicMuted = false;
            Game.save.save("musicMuted", false);
        };
        Sound.muted = false;
        Sound.soundMuted = false;
        Sound.musicMuted = false;
        Sound._musics = {};
        Sound._sounds = {};
        Sound._soundVolume = 1;
        Sound._musicVolume = 1;
        return Sound;
    })();
    util.Sound = Sound;
})(util || (util = {}));
/**
 * Sprite util class
 */
var util;
(function (util) {
    var Sprite = (function () {
        function Sprite() {
        }
        Sprite.createBitmapData = function (width, height, color) {
            if (color === void 0) { color = undefined; }
            var bitmapData = Game.game.make.bitmapData(width, height);
            if (color != undefined) {
                bitmapData.fill(color.r, color.g, color.b);
            }
            return bitmapData;
        };
        Sprite.createSprite = function (width, height, color) {
            if (color === void 0) { color = undefined; }
            var bmd = Sprite.createBitmapData(width, height, color);
            return new Phaser.Sprite(Game.game, 0, 0, bmd);
        };
        Sprite.maskColor = function (mask, color) {
            var base = util.Sprite.createBitmapData(mask.width, mask.height, color), finalImage = Game.game.make.bitmapData(mask.width, mask.height);
            finalImage.alphaMask(base, mask);
            return finalImage;
        };
        return Sprite;
    })();
    util.Sprite = Sprite;
})(util || (util = {}));
var util;
(function (util) {
    var Test = (function () {
        function Test() {
            this._testGroups = Game.save.load("testGroups") || {};
        }
        Test.prototype.assignTestGroup = function (testKey, groupSize) {
            if (groupSize === void 0) { groupSize = 2; }
            if (this._testGroups[testKey] != undefined) {
                util.Debug.log("Testgroup for '" + testKey + "': " + this._testGroups[testKey]);
                Game.analytics.event("TestGroup", testKey, this._testGroups[testKey]);
                return;
            }
            var groups = ["A", "B", "C"].slice(0, groupSize), key = Math.floor(Math.random() * groups.length);
            this._testGroups[testKey] = groups[key];
            Game.save.save("testGroups", this._testGroups);
            util.Debug.log("Testgroup for '" + testKey + "': " + groups[key]);
            Game.analytics.event("TestGroup", testKey, groups[key]);
        };
        Test.prototype.getTestGroup = function (testKey) {
            if (this._testGroups[testKey] == undefined) {
                util.Debug.error("No test group assigned yet for '" + testKey + "'");
                return;
            }
            return this._testGroups[testKey];
        };
        return Test;
    })();
    util.Test = Test;
})(util || (util = {}));
var util;
(function (util) {
    var TimeFormatter = (function () {
        function TimeFormatter() {
        }
        TimeFormatter.unixToFullDate = function (time) {
            var date = new Date();
            date.setSeconds(time);
            var year = date.getFullYear() + "";
            var month = ("0" + (date.getMonth() + 1)).substr(-2);
            var day = ("0" + date.getDate()).substr(-2);
            var hour = ("0" + date.getHours()).substr(-2);
            var minutes = ("0" + date.getMinutes()).substr(-2);
            var seconds = ("0" + date.getSeconds()).substr(-2);
            return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
        };
        return TimeFormatter;
    })();
    util.TimeFormatter = TimeFormatter;
})(util || (util = {}));
var gameConfig;
(function (gameConfig) {
    (function (KeyStates) {
        KeyStates[KeyStates["Up"] = 0] = "Up";
        KeyStates[KeyStates["Down"] = 1] = "Down";
        KeyStates[KeyStates["Pressed"] = 2] = "Pressed";
    })(gameConfig.KeyStates || (gameConfig.KeyStates = {}));
    var KeyStates = gameConfig.KeyStates;
    ;
    (function (PlatformerKeys) {
        PlatformerKeys[PlatformerKeys["Left"] = 0] = "Left";
        PlatformerKeys[PlatformerKeys["Right"] = 1] = "Right";
        PlatformerKeys[PlatformerKeys["Jump"] = 2] = "Jump";
    })(gameConfig.PlatformerKeys || (gameConfig.PlatformerKeys = {}));
    var PlatformerKeys = gameConfig.PlatformerKeys;
    ;
    (function (WeaselDirections) {
        WeaselDirections[WeaselDirections["Left"] = 0] = "Left";
        WeaselDirections[WeaselDirections["Right"] = 1] = "Right";
        WeaselDirections[WeaselDirections["Up"] = 2] = "Up";
        WeaselDirections[WeaselDirections["Down"] = 3] = "Down";
    })(gameConfig.WeaselDirections || (gameConfig.WeaselDirections = {}));
    var WeaselDirections = gameConfig.WeaselDirections;
    ;
    (function (TileTypes) {
        TileTypes[TileTypes["Empty"] = 0] = "Empty";
        TileTypes[TileTypes["Block"] = 1] = "Block";
        TileTypes[TileTypes["Death"] = 2] = "Death";
        TileTypes[TileTypes["Brittle"] = 3] = "Brittle";
        TileTypes[TileTypes["Count"] = 4] = "Count";
    })(gameConfig.TileTypes || (gameConfig.TileTypes = {}));
    var TileTypes = gameConfig.TileTypes;
    ;
    (function (TriggerEvent) {
        TriggerEvent[TriggerEvent["Enter"] = 0] = "Enter";
        TriggerEvent[TriggerEvent["Exit"] = 1] = "Exit";
    })(gameConfig.TriggerEvent || (gameConfig.TriggerEvent = {}));
    var TriggerEvent = gameConfig.TriggerEvent;
    ;
    (function (CollissionEvent) {
        CollissionEvent[CollissionEvent["Enter"] = 0] = "Enter";
        CollissionEvent[CollissionEvent["Exit"] = 1] = "Exit";
    })(gameConfig.CollissionEvent || (gameConfig.CollissionEvent = {}));
    var CollissionEvent = gameConfig.CollissionEvent;
    (function (SinkblockAction) {
        SinkblockAction[SinkblockAction["Activate"] = 0] = "Activate";
        SinkblockAction[SinkblockAction["Deactivate"] = 1] = "Deactivate";
    })(gameConfig.SinkblockAction || (gameConfig.SinkblockAction = {}));
    var SinkblockAction = gameConfig.SinkblockAction;
    ;
    var GameConfig = (function () {
        function GameConfig() {
        }
        GameConfig.swapControls = function () {
            for (var i = 0; i < 4; i++) {
                var keyA = GameConfig.playerControls[GameConfig.characterNames[0] + GameConfig.directionalStrings[i]];
                var keyB = GameConfig.playerControls[GameConfig.characterNames[1] + GameConfig.directionalStrings[i]];
                GameConfig.playerControls[GameConfig.characterNames[0] + GameConfig.directionalStrings[i]] = keyB;
                GameConfig.playerControls[GameConfig.characterNames[1] + GameConfig.directionalStrings[i]] = keyA;
                Game.analytics.event('GameLogic', 'ControlsSwapped');
            }
        };
        GameConfig.screenAnalyticsEventFiredThisSession = false;
        GameConfig.booleanValues = {
            sinkBlockStartOpen: true,
            charactersCollideWithWorldBounds: true,
            weaselGravity: false,
            weaselMovement: false,
            mouseGravity: true,
            mouseMovement: true,
            levelBlockGravity: false,
            levelBlockMovement: false
        };
        GameConfig.stringValues = {
            characterNames: {
                mouse: "mouse",
                weasel: "weasel"
            },
            gameName: "snek-n-bob-phaser",
            levelPrefix: "level-",
            assetFolder: "assets",
            mouseFramesFolder: "characters/mouse/",
            weaselFramesFolder: "characters/weasel/",
            exitTriggerName: "exit",
            windZoneTriggerName: "windzone",
            deathTriggerName: "death"
        };
        GameConfig.numberValues = {
            gravity: 2000,
            mouseJumpForce: 1050,
            mouseJumpCancelFactor: 0.5,
            minMovementVelocity: 300,
            defaultBouncyness: 0,
            brittleBlockBreakDelay: 1,
            brittleBlockBreakAnimationDuration: .6,
            mouseMaxSpeed: 350,
            mouseAcceleration: 110,
            mouseGroundFrictionFactor: 0.7,
            mouseAirHorizontalFrictionFactor: 0.7,
            weaselHeadBobFactor: .25,
            weaselCheckMouseIsBlockingYScale: .8,
            weaselHeadBobForce: 400,
            weaselMoveInterval: .18,
            weaselAnimationDurationFactor: 950,
            editorToWorldFactor: 2,
            triggerSizeFactor: .95,
            tileSize: 64,
            restartDelay: 3,
            deathDelay: 1.337,
            sinkblockSpeed: 0.6,
            highFiveDelay: 0.5,
            highFiveDuration: 1,
            slapSpriteTweenDuration: 0.5,
            fadeDuration: 0.5,
            fadeDelay: 0.1,
            fadeToBlackDuration: 1,
            fadeToBlackDelay: 0.5,
            firstLevelIndex: 2,
            mouseGravityInWindzoneMultiplyer: .95,
            windZoneParticleSpeed: 400,
            windZoneParticlesPerGrid: 3,
            windZoneForce: {
                top: 2800,
                bottom: 5000
            },
            windZoneAnimationSpeed: 0.003,
            inGamePaddoOffset: 25,
            lastLevelIndex: 28,
            trickForcerLevelIndex: 6
        };
        GameConfig.pointValues = {
            gridSize: new Phaser.Point(26, 20),
            tileSize: new Phaser.Point(GameConfig.numberValues.tileSize, GameConfig.numberValues.tileSize),
            mouseColliderSize: new Phaser.Point(50, 80),
            mouseColliderAndSpriteOffset: new Phaser.Point(0, -10),
            directionUp: new Phaser.Point(0, -1),
            directionDown: new Phaser.Point(0, 1),
            directionLeft: new Phaser.Point(-1, 0),
            directionRight: new Phaser.Point(1, 0),
            zero: new Phaser.Point(0, 0),
            anchorCenter: new Phaser.Point(0.5, 0.5),
            anchorLeftCenter: new Phaser.Point(0, 0.5),
            anchorRightCenter: new Phaser.Point(1, 0.5),
            anchorCenterBottom: new Phaser.Point(0.5, 0),
            weaselPartColliderSize: new Phaser.Point(64, 64),
            defaultFriction: new Phaser.Point(0, 0),
            highFiveMaxSpawn: new Phaser.Point(0, 1600),
            highFiveMinkSpawn: new Phaser.Point(1600, 1600),
            highFiveMaxTarget: new Phaser.Point(900, 800),
            highFiveMinkTarget: new Phaser.Point(750, 600),
            highFiveStarSpawn: new Phaser.Point(800, 450),
            mouseTutorialPosition: new Phaser.Point(638, 530),
            mapMushroomOffsetTop: new Phaser.Point(0, 0),
            mapMushroomOffsetBottom: new Phaser.Point(0, 0),
            mapMushroomOffsetLeft: new Phaser.Point(0, 0),
            mapMushroomOffsetRight: new Phaser.Point(0, 0),
            tutorialKeysLevel1PositionLeft: new Phaser.Point(500, 200),
            tutorialKeysLevel1PositionRight: new Phaser.Point(825, 200),
            trickForcerHintPosition: new Phaser.Point(518, 777)
        };
        GameConfig.nextWorldIndexes = [
            14
        ];
        GameConfig.directionalStrings = [
            "Up", "Down", "Left", "Right"
        ];
        GameConfig.characterNames = [
            "weasel", "mouse"
        ];
        GameConfig.playerControls = {
            weaselUp: [new Phaser.Key(Game.game, Phaser.Keyboard.W), new Phaser.Key(Game.game, Phaser.Keyboard.Z)],
            weaselDown: [new Phaser.Key(Game.game, Phaser.Keyboard.S)],
            weaselRight: [new Phaser.Key(Game.game, Phaser.Keyboard.D)],
            weaselLeft: [new Phaser.Key(Game.game, Phaser.Keyboard.A), new Phaser.Key(Game.game, Phaser.Keyboard.Q)],
            mouseUp: [new Phaser.Key(Game.game, Phaser.Keyboard.UP)],
            mouseDown: [new Phaser.Key(Game.game, Phaser.Keyboard.DOWN)],
            mouseLeft: [new Phaser.Key(Game.game, Phaser.Keyboard.LEFT)],
            mouseRight: [new Phaser.Key(Game.game, Phaser.Keyboard.RIGHT)]
        };
        GameConfig.objectTypes = {
            sinkBlock: "sinkBlock",
            button: "button",
            mouseStart: "mouseStart",
            weaselStart: "weaselStart",
            windZone: "windZone",
            exit: "exit"
        };
        GameConfig.levelList = [
            '/_assets/79493dbf6596aad77dd7.json',
            '/_assets/e22fd9ea4c3d3dbf7e2f.json',
            '/_assets/0bdc41d1fe27085799a8.json',
            '/_assets/c24d78534524d010b9e0.json',
            '/_assets/e87ccef745e1983bafbd.json',
            '/_assets/f86d48ab3be97e218d3f.json',
            '/_assets/520b0094a8b4c3994fde.json',
            '/_assets/8809553172bf393a78fb.json',
            '/_assets/0178b79d09455564ec51.json',
            '/_assets/b5fdfb4b7f7acd12744c.json',
            '/_assets/ea9c5a5fdf270bd67122.json',
            '/_assets/57ca98184e110e5cdd16.json',
            '/_assets/4346b0eb98995262bf57.json',
            '/_assets/e1080e4b358c449879f1.json',
            '/_assets/229fce18d2a2afc2c601.json',
            '/_assets/80c0094deb51979f0a60.json',
            '/_assets/1ed7a7149cadfcf38ba4.json',
            '/_assets/566fb6ac574fb22d198c.json',
            '/_assets/026fdde6fef8b8dbb35f.json',
            '/_assets/25bf5d3093a9d99cefd1.json',
            '/_assets/6b92a191a79db17e9d23.json',
            '/_assets/41a3841f7144fd10cdc7.json',
            '/_assets/ddee20f012fc8ae87225.json',
            '/_assets/6fbafffadfd9196d4cf3.json',
            '/_assets/282c29957e6839359dd3.json',
            '/_assets/719d836d19bb71107e49.json',
            '/_assets/027fcc26d53e491f76b0.json',
            '/_assets/0b68f7ba30b61a68821b.json',
            '/_assets/d1b8b9710d403222aab6.json'
        ];
        GameConfig.buttonAnimations = {
            down: {
                name: "down",
                loop: false,
                frameRate: 1
            },
            up: {
                name: "up",
                loop: false,
                frameRate: 1
            }
        };
        GameConfig.mushroomConfig = {
            mushroom1: {
                levelIndex: 4,
                spriteFrame: "mushroom1",
                kingSpiteToRemove: 2,
                mapMushroomOffset: new Phaser.Point(0, -130)
            },
            mushroom2: {
                levelIndex: 12,
                spriteFrame: "mushroom1",
                kingSpiteToRemove: 1,
                mapMushroomOffset: new Phaser.Point(0, -130)
            },
            mushroom3: {
                levelIndex: 29,
                spriteFrame: "mushroom1",
                kingSpiteToRemove: 0,
                mapMushroomOffset: new Phaser.Point(0, -175)
            }
        };
        GameConfig.mouseAnimations = {
            run: {
                name: "run",
                frameAmount: 4,
                loop: true,
                frameRate: 10
            },
            idle: {
                name: "idle",
                frameAmount: 4,
                loop: true,
                frameRate: 1
            },
            blink: {
                name: "blink",
                frameAmount: 1,
                loop: false,
                frameRate: 1
            },
            jump: {
                name: "jump",
                frameAmount: 2,
                loop: false,
                frameRate: 8
            },
            land: {
                name: "land",
                frameAmount: 1,
                loop: false,
                frameRate: 10
            },
            fall: {
                name: "fall",
                frameAmount: 1,
                loop: false,
                frameRate: 10
            },
            death: {
                name: "death",
                frameAmount: 1,
                loop: false,
                frameRate: 10
            }
        };
        return GameConfig;
    })();
    gameConfig.GameConfig = GameConfig;
    (function (MusicIndexes) {
        MusicIndexes[MusicIndexes["MainMusic"] = 0] = "MainMusic";
    })(gameConfig.MusicIndexes || (gameConfig.MusicIndexes = {}));
    var MusicIndexes = gameConfig.MusicIndexes;
    var MusicConfig = (function () {
        function MusicConfig() {
        }
        MusicConfig.musicKeys = [
            "MainMusic"
        ];
        return MusicConfig;
    })();
    gameConfig.MusicConfig = MusicConfig;
    (function (SoundEffectIndexes) {
        SoundEffectIndexes[SoundEffectIndexes["ButtonVariant1"] = 0] = "ButtonVariant1";
        SoundEffectIndexes[SoundEffectIndexes["ButtonVariant2"] = 1] = "ButtonVariant2";
        SoundEffectIndexes[SoundEffectIndexes["ButtonVariant3"] = 2] = "ButtonVariant3";
        SoundEffectIndexes[SoundEffectIndexes["Button"] = 3] = "Button";
        SoundEffectIndexes[SoundEffectIndexes["Failed"] = 4] = "Failed";
        SoundEffectIndexes[SoundEffectIndexes["Jump"] = 5] = "Jump";
        SoundEffectIndexes[SoundEffectIndexes["WeaselBlocked"] = 6] = "WeaselBlocked";
        SoundEffectIndexes[SoundEffectIndexes["LevelComplete"] = 7] = "LevelComplete";
    })(gameConfig.SoundEffectIndexes || (gameConfig.SoundEffectIndexes = {}));
    var SoundEffectIndexes = gameConfig.SoundEffectIndexes;
    var SoundEffectConfig = (function () {
        function SoundEffectConfig() {
        }
        SoundEffectConfig.weaselMovedKeys = [
            "WeaselWalk1",
            "WeaselWalk2",
            "WeaselWalk3",
            "WeaselWalk4",
            "WeaselWalk5",
            "WeaselWalk6",
            "WeaselWalk7"
        ];
        SoundEffectConfig.mouseMovedKeys = [
            "MouseStep1",
            "MouseStep2",
            "MouseStep3",
            "MouseStep4",
            "MouseStep5",
            "MouseStep6",
        ];
        SoundEffectConfig.soundKeys = [
            "Button1",
            "Button2",
            "Button3",
            "button",
            "Failed",
            "Jump",
            "WrongMove",
            "LevelComplete"
        ];
        return SoundEffectConfig;
    })();
    gameConfig.SoundEffectConfig = SoundEffectConfig;
})(gameConfig || (gameConfig = {}));
var mapConfig;
(function (mapConfig) {
    (function (MapButton) {
        MapButton[MapButton["Locked"] = 0] = "Locked";
        MapButton[MapButton["Unlocked"] = 1] = "Unlocked";
        MapButton[MapButton["Active"] = 2] = "Active";
    })(mapConfig.MapButton || (mapConfig.MapButton = {}));
    var MapButton = mapConfig.MapButton;
    var MapConfig = (function () {
        function MapConfig() {
        }
        MapConfig.numberValues = {
            pointerOffsetScroll: 200,
            scrollstep: 3000,
            minMapY: -2134,
            maxMapY: 0,
            mapButtonScale: 0.75,
            mapActiveButtonTweenTimer: 1,
            comicHeight: 1180,
            lazyExtraDeltaX: -50,
            scrollBarXOffset: 50,
            mapScreenSicknessTweenDuration: 2,
            mapScrollIncrement: 150,
            mapScrollBarOffset: 100,
            scrollToButtonOffset: 150,
            swirlSize: 300
        };
        MapConfig.folder = "map";
        MapConfig.kingsMouth = new Phaser.Point(762, 749);
        MapConfig.checkMarkPositions = [
            new Phaser.Point(627, 204),
            new Phaser.Point(802, 204),
            new Phaser.Point(975, 204)
        ];
        MapConfig.buttonPositions = [
            new Phaser.Point(798, 1505),
            new Phaser.Point(503, 1580),
            new Phaser.Point(399, 1857),
            new Phaser.Point(603, 1967),
            new Phaser.Point(648, 1760),
            new Phaser.Point(821, 1846),
            new Phaser.Point(954, 1648),
            new Phaser.Point(1125, 1865),
            new Phaser.Point(1219, 2029),
            new Phaser.Point(1035, 2203),
            new Phaser.Point(814, 2215),
            new Phaser.Point(402, 2165),
            new Phaser.Point(382, 2388),
            new Phaser.Point(626, 2383),
            new Phaser.Point(887, 2429),
            new Phaser.Point(1240, 2427),
            new Phaser.Point(1314, 2659),
            new Phaser.Point(1303, 2873),
            new Phaser.Point(1173, 3187),
            new Phaser.Point(1086, 2925),
            new Phaser.Point(1007, 2652),
            new Phaser.Point(757, 2616),
            new Phaser.Point(602, 2733),
            new Phaser.Point(334, 2666),
            new Phaser.Point(349, 2899),
            new Phaser.Point(571, 2995),
            new Phaser.Point(553, 3210),
            new Phaser.Point(812, 3118)
        ];
        return MapConfig;
    })();
    mapConfig.MapConfig = MapConfig;
})(mapConfig || (mapConfig = {}));
var gameConfig;
(function (gameConfig) {
    (function (DetailsBackgroundIndexes) {
        DetailsBackgroundIndexes[DetailsBackgroundIndexes["Back"] = 0] = "Back";
        DetailsBackgroundIndexes[DetailsBackgroundIndexes["Mid"] = 1] = "Mid";
        DetailsBackgroundIndexes[DetailsBackgroundIndexes["Front"] = 2] = "Front";
        DetailsBackgroundIndexes[DetailsBackgroundIndexes["Count"] = 3] = "Count";
    })(gameConfig.DetailsBackgroundIndexes || (gameConfig.DetailsBackgroundIndexes = {}));
    var DetailsBackgroundIndexes = gameConfig.DetailsBackgroundIndexes;
    ;
    (function (DetailsForegroundIndexes) {
        DetailsForegroundIndexes[DetailsForegroundIndexes["Back"] = 0] = "Back";
        DetailsForegroundIndexes[DetailsForegroundIndexes["Mid"] = 1] = "Mid";
        DetailsForegroundIndexes[DetailsForegroundIndexes["Front"] = 2] = "Front";
        DetailsForegroundIndexes[DetailsForegroundIndexes["Count"] = 3] = "Count";
    })(gameConfig.DetailsForegroundIndexes || (gameConfig.DetailsForegroundIndexes = {}));
    var DetailsForegroundIndexes = gameConfig.DetailsForegroundIndexes;
    ;
    (function (KingRoeIllStagesOfSickness) {
        KingRoeIllStagesOfSickness[KingRoeIllStagesOfSickness["Sickest"] = 0] = "Sickest";
        KingRoeIllStagesOfSickness[KingRoeIllStagesOfSickness["Sicker"] = 1] = "Sicker";
        KingRoeIllStagesOfSickness[KingRoeIllStagesOfSickness["Sick"] = 2] = "Sick";
        KingRoeIllStagesOfSickness[KingRoeIllStagesOfSickness["Count"] = 3] = "Count";
    })(gameConfig.KingRoeIllStagesOfSickness || (gameConfig.KingRoeIllStagesOfSickness = {}));
    var KingRoeIllStagesOfSickness = gameConfig.KingRoeIllStagesOfSickness;
    ;
    (function (CharacterSpriteIndexes) {
        CharacterSpriteIndexes[CharacterSpriteIndexes["MouseSprite"] = 0] = "MouseSprite";
        CharacterSpriteIndexes[CharacterSpriteIndexes["WeaselFeet"] = 1] = "WeaselFeet";
        CharacterSpriteIndexes[CharacterSpriteIndexes["WeaselTail"] = 2] = "WeaselTail";
        CharacterSpriteIndexes[CharacterSpriteIndexes["WeaselPants"] = 3] = "WeaselPants";
        CharacterSpriteIndexes[CharacterSpriteIndexes["WeaselFeetTwo"] = 4] = "WeaselFeetTwo";
        CharacterSpriteIndexes[CharacterSpriteIndexes["WeaselMiddle"] = 5] = "WeaselMiddle";
        CharacterSpriteIndexes[CharacterSpriteIndexes["WeaselUpperBody"] = 6] = "WeaselUpperBody";
        CharacterSpriteIndexes[CharacterSpriteIndexes["WeaselHead"] = 7] = "WeaselHead";
        CharacterSpriteIndexes[CharacterSpriteIndexes["Count"] = 8] = "Count";
    })(gameConfig.CharacterSpriteIndexes || (gameConfig.CharacterSpriteIndexes = {}));
    var CharacterSpriteIndexes = gameConfig.CharacterSpriteIndexes;
    ;
    var CharacterSpriteConfig = (function () {
        function CharacterSpriteConfig() {
        }
        CharacterSpriteConfig.kingRoeIllSpriteConfig = [
            "sick3",
            "sick2",
            "sick1"
        ];
        CharacterSpriteConfig.spriteKeys = [
            "characters/mouse/idle1",
            "characters/weasel/weasel4c",
            "characters/weasel/weasel5",
            "characters/weasel/weasel4b",
            "characters/weasel/weasel4a",
            "characters/weasel/weasel3",
            "characters/weasel/weasel2",
            "characters/weasel/weasel1"
        ];
        return CharacterSpriteConfig;
    })();
    gameConfig.CharacterSpriteConfig = CharacterSpriteConfig;
    (function (TileSpriteIndexes) {
        TileSpriteIndexes[TileSpriteIndexes["Deathblock"] = 0] = "Deathblock";
        TileSpriteIndexes[TileSpriteIndexes["Brittleblock"] = 1] = "Brittleblock";
        TileSpriteIndexes[TileSpriteIndexes["BrittleblockCracked"] = 2] = "BrittleblockCracked";
        TileSpriteIndexes[TileSpriteIndexes["BgBlock"] = 3] = "BgBlock";
    })(gameConfig.TileSpriteIndexes || (gameConfig.TileSpriteIndexes = {}));
    var TileSpriteIndexes = gameConfig.TileSpriteIndexes;
    ;
    (function (TileCornerSpriteIndexes) {
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["AllNeighbours"] = 0] = "AllNeighbours";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["Ceiling"] = 1] = "Ceiling";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["GrassWallLeft"] = 2] = "GrassWallLeft";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["GrassTop"] = 3] = "GrassTop";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["GrassWallRight"] = 4] = "GrassWallRight";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["GrassEdgeRight"] = 5] = "GrassEdgeRight";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["GrassEdgeLeft"] = 6] = "GrassEdgeLeft";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["GrassOutsideCornerLeft"] = 7] = "GrassOutsideCornerLeft";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["GrassOutsideCornerRight"] = 8] = "GrassOutsideCornerRight";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["GrassInsideCornerLeft"] = 9] = "GrassInsideCornerLeft";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["GrassInsideCornerRight"] = 10] = "GrassInsideCornerRight";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["CeilingInsideCornerLeft"] = 11] = "CeilingInsideCornerLeft";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["CeilingInsideCornerRight"] = 12] = "CeilingInsideCornerRight";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["CeilingOutsideCornerRight"] = 13] = "CeilingOutsideCornerRight";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["CeilingOutsideCornerLeft"] = 14] = "CeilingOutsideCornerLeft";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["WallLeft"] = 15] = "WallLeft";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["WallRight"] = 16] = "WallRight";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["GrassWallTransitionLeft"] = 17] = "GrassWallTransitionLeft";
        TileCornerSpriteIndexes[TileCornerSpriteIndexes["GrassWallTransitionRight"] = 18] = "GrassWallTransitionRight";
    })(gameConfig.TileCornerSpriteIndexes || (gameConfig.TileCornerSpriteIndexes = {}));
    var TileCornerSpriteIndexes = gameConfig.TileCornerSpriteIndexes;
    (function (ObjectSpriteIndexes) {
        ObjectSpriteIndexes[ObjectSpriteIndexes["ButtonUp"] = 0] = "ButtonUp";
        ObjectSpriteIndexes[ObjectSpriteIndexes["ButtonDown"] = 1] = "ButtonDown";
        ObjectSpriteIndexes[ObjectSpriteIndexes["DoorExit"] = 2] = "DoorExit";
        ObjectSpriteIndexes[ObjectSpriteIndexes["DoorEntrance"] = 3] = "DoorEntrance";
        ObjectSpriteIndexes[ObjectSpriteIndexes["DoorClosed"] = 4] = "DoorClosed";
        ObjectSpriteIndexes[ObjectSpriteIndexes["DoorOpen"] = 5] = "DoorOpen";
        ObjectSpriteIndexes[ObjectSpriteIndexes["SinkblockClosedA"] = 6] = "SinkblockClosedA";
        ObjectSpriteIndexes[ObjectSpriteIndexes["SinkblockClosedB"] = 7] = "SinkblockClosedB";
        ObjectSpriteIndexes[ObjectSpriteIndexes["SinkblockClosedC"] = 8] = "SinkblockClosedC";
        ObjectSpriteIndexes[ObjectSpriteIndexes["SinkblockOpenA"] = 9] = "SinkblockOpenA";
        ObjectSpriteIndexes[ObjectSpriteIndexes["SinkblockOpenB"] = 10] = "SinkblockOpenB";
        ObjectSpriteIndexes[ObjectSpriteIndexes["SinkblockOpenC"] = 11] = "SinkblockOpenC";
        ObjectSpriteIndexes[ObjectSpriteIndexes["WindParticle"] = 12] = "WindParticle";
        ObjectSpriteIndexes[ObjectSpriteIndexes["WindParticleDead"] = 13] = "WindParticleDead";
        ObjectSpriteIndexes[ObjectSpriteIndexes["WindSource"] = 14] = "WindSource";
    })(gameConfig.ObjectSpriteIndexes || (gameConfig.ObjectSpriteIndexes = {}));
    var ObjectSpriteIndexes = gameConfig.ObjectSpriteIndexes;
    ;
    (function (WorldKeys) {
        WorldKeys[WorldKeys["World1"] = 0] = "World1";
        WorldKeys[WorldKeys["World2"] = 1] = "World2";
    })(gameConfig.WorldKeys || (gameConfig.WorldKeys = {}));
    var WorldKeys = gameConfig.WorldKeys;
    ;
    var LevelSpriteConfig = (function () {
        function LevelSpriteConfig() {
        }
        LevelSpriteConfig.tileSpriteKeys = [
            "objects/hazard",
            "tiles/blockbrittle",
            "tiles/blockbrittlecracked",
            "background"
        ];
        LevelSpriteConfig.lightRaySpriteKey = "misc/lightrays";
        LevelSpriteConfig.tileSpriteWorldKeys = [
            "tiles/world1/",
            "tiles/world2/"
        ];
        LevelSpriteConfig.objectSpriteWorldKeys = [
            "objects/world1/",
            "objects/world2/"
        ];
        LevelSpriteConfig.tileCornerSpriteKeys = [
            "tile-1",
            "tile-2",
            "tile-3",
            "tile-4",
            "tile-5",
            "tile-6",
            "tile-7",
            "tile-8",
            "tile-9",
            "tile-10",
            "tile-11",
            "tile-12",
            "tile-13",
            "tile-14",
            "tile-15",
            "tile-16",
            "tile-17",
            "tile-18",
            "tile-19"
        ];
        LevelSpriteConfig.tileCornerSpriteVariationAmounts = [
            2,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ];
        LevelSpriteConfig.objectSpriteKeys = [
            "shroomup",
            "shroomdown",
            "objects/doorExit",
            "doorentrance",
            "doorClosed",
            "doorOpen",
            "objects/sinkblockClosedA",
            "objects/sinkblockClosedB",
            "objects/sinkblockClosedC",
            "sinkblockOpenA",
            "sinkblockOpenB",
            "sinkblockOpenC",
            "objects/wind-particle",
            "objects/wind-particle-dead",
            "windsource"
        ];
        LevelSpriteConfig.foregroundSinkblockVariations = [
            ObjectSpriteIndexes.SinkblockClosedA,
            ObjectSpriteIndexes.SinkblockClosedB,
            ObjectSpriteIndexes.SinkblockClosedC,
        ];
        LevelSpriteConfig.backgroundSinkblockVariations = [
            ObjectSpriteIndexes.SinkblockOpenA,
            ObjectSpriteIndexes.SinkblockOpenB,
            ObjectSpriteIndexes.SinkblockOpenC,
        ];
        return LevelSpriteConfig;
    })();
    gameConfig.LevelSpriteConfig = LevelSpriteConfig;
    (function (HighFiveSpriteIndexes) {
        HighFiveSpriteIndexes[HighFiveSpriteIndexes["SlapSprite"] = 0] = "SlapSprite";
        HighFiveSpriteIndexes[HighFiveSpriteIndexes["HighFiveMax"] = 1] = "HighFiveMax";
        HighFiveSpriteIndexes[HighFiveSpriteIndexes["HighFiveMink"] = 2] = "HighFiveMink";
    })(gameConfig.HighFiveSpriteIndexes || (gameConfig.HighFiveSpriteIndexes = {}));
    var HighFiveSpriteIndexes = gameConfig.HighFiveSpriteIndexes;
    var HighFiveSpriteConfig = (function () {
        function HighFiveSpriteConfig() {
        }
        HighFiveSpriteConfig.spriteKeys = [
            "misc/highfivestar",
            "misc/highfivemink",
            "misc/highfivemax"
        ];
        return HighFiveSpriteConfig;
    })();
    gameConfig.HighFiveSpriteConfig = HighFiveSpriteConfig;
    (function (MapScreenSpriteIndexes) {
        MapScreenSpriteIndexes[MapScreenSpriteIndexes["MapButtonUnlocked"] = 0] = "MapButtonUnlocked";
        MapScreenSpriteIndexes[MapScreenSpriteIndexes["MapButtonPlayHover"] = 1] = "MapButtonPlayHover";
        MapScreenSpriteIndexes[MapScreenSpriteIndexes["MapButtonLocked"] = 2] = "MapButtonLocked";
        MapScreenSpriteIndexes[MapScreenSpriteIndexes["MapButtonPlay"] = 3] = "MapButtonPlay";
        MapScreenSpriteIndexes[MapScreenSpriteIndexes["MapButtonDown"] = 4] = "MapButtonDown";
        MapScreenSpriteIndexes[MapScreenSpriteIndexes["MapRoadDot"] = 5] = "MapRoadDot";
        MapScreenSpriteIndexes[MapScreenSpriteIndexes["ScrollSlider"] = 6] = "ScrollSlider";
        MapScreenSpriteIndexes[MapScreenSpriteIndexes["ScrollBar"] = 7] = "ScrollBar";
        MapScreenSpriteIndexes[MapScreenSpriteIndexes["CheckMark"] = 8] = "CheckMark";
    })(gameConfig.MapScreenSpriteIndexes || (gameConfig.MapScreenSpriteIndexes = {}));
    var MapScreenSpriteIndexes = gameConfig.MapScreenSpriteIndexes;
    var MapSpriteConfig = (function () {
        function MapSpriteConfig() {
        }
        MapSpriteConfig.spriteKeys = [
            "map-buttondone",
            "map-buttonhover",
            "map-buttonlocked",
            "map-buttonplay",
            "map-buttondown",
            "map-road",
            "scroll-slider",
            "scroll-bar",
            "checkmark"
        ];
        return MapSpriteConfig;
    })();
    gameConfig.MapSpriteConfig = MapSpriteConfig;
})(gameConfig || (gameConfig = {}));
var containers;
(function (containers) {
    var Game = (function () {
        function Game() {
        }
        Game.reset = function () {
            Game.fadeSprite = null;
            Game.exitDoorSprite = null;
            Game.mushroomPickupSprite = null;
            Game.sinkblockVisuals = [];
            Game.buttonVisuals = [];
            Game.levelBackgroundWithTilesRenderTexture = null;
            Game.levelBackgroundWithTilesSprite = null;
            Game.backgroundSprites = [];
            Game.foreGroundSprites = [];
            Game.characterSprites = [];
            Game.weaselSegmentPhysicsBodies = [];
            Game.mousePhysicsBody = null;
            Game.blockPhysicBodies = [];
            Game.brittleBlockPhysicsBodies = [];
            Game.deathBlockPhysicsBodies = [];
            Game.sinkblockVisuals = [];
            Game.highFiveSprites = [];
            Game.lightRaysSprite = null;
            Game.soundOnButton = null;
            Game.soundOffButton = null;
        };
        Game.windZoneVisuals = [];
        Game.sinkblockVisuals = [];
        Game.buttonVisuals = [];
        Game.levelBackgroundWithTilesRenderTexture = null;
        Game.levelBackgroundWithTilesRenderTextureSwap = null;
        Game.levelBackgroundWithTilesSprite = null;
        Game.backgroundSprites = [];
        Game.foreGroundSprites = [];
        Game.characterSprites = [];
        Game.highFiveSprites = [];
        Game.windZoneSourceVisuals = [];
        Game.fadeSprite = null;
        Game.exitDoorSprite = null;
        Game.mushroomPickupSprite = null;
        Game.lightRaysSprite = null;
        Game.soundOnButton = null;
        Game.soundOffButton = null;
        Game.weaselSegmentPhysicsBodies = [];
        Game.mousePhysicsBody = null;
        Game.blockPhysicBodies = [];
        Game.brittleBlockPhysicsBodies = [];
        Game.deathBlockPhysicsBodies = [];
        Game.sinkBlockPhysicsBodies = [];
        return Game;
    })();
    containers.Game = Game;
})(containers || (containers = {}));
var containers;
(function (containers) {
    var Map = (function () {
        function Map() {
        }
        return Map;
    })();
    containers.Map = Map;
})(containers || (containers = {}));
var data;
(function (data) {
    ;
})(data || (data = {}));
var events;
(function (events) {
    var Event = (function () {
        function Event() {
            this.debugEvents = false;
            this.subscribers = [];
        }
        Event.prototype.addListener = function (listener, context) {
            var subscriberToAdd = {
                function: listener,
                context: context
            };
            this.subscribers.push(subscriberToAdd);
            if (this.debugEvents)
                console.log('[Adding listener]\n', context, this.subscribers.length);
        };
        Event.prototype.removeListener = function (listener, context) {
            var subscriberIndex = -1;
            for (var i = 0; i < this.subscribers.length; i++) {
                if (this.subscribers[i].context == context &&
                    this.subscribers[i].function == listener) {
                    subscriberIndex = i;
                    break;
                }
            }
            if (subscriberIndex !== -1) {
                this.subscribers.splice(subscriberIndex, 1);
                if (this.debugEvents)
                    console.log('[Removing listener]\n', context, '\n[Current subscriber list]\n', this.subscribers);
            }
            else {
                console.warn("You are trying to remove a listener that is not added.");
            }
        };
        Event.prototype.fire = function (data) {
            if (this.debugEvents)
                console.log('[Fireing event]\nEventdata:\n', data);
            var eventsToBeFired = this.subscribers.slice();
            for (var i = 0; i < eventsToBeFired.length; i++) {
                if (this.debugEvents)
                    console.log('[Fireing subscriber function]\n', eventsToBeFired[i], '\n[Context]:\n', eventsToBeFired[i].context);
                eventsToBeFired[i].function.apply(eventsToBeFired[i].context, [data]);
            }
        };
        return Event;
    })();
    events.Event = Event;
    ;
    var PlatformerInput = (function (_super) {
        __extends(PlatformerInput, _super);
        function PlatformerInput() {
            _super.apply(this, arguments);
        }
        return PlatformerInput;
    })(Event);
    events.PlatformerInput = PlatformerInput;
    var WeaselInput = (function (_super) {
        __extends(WeaselInput, _super);
        function WeaselInput() {
            _super.apply(this, arguments);
        }
        return WeaselInput;
    })(Event);
    events.WeaselInput = WeaselInput;
    var WeaselMoved = (function (_super) {
        __extends(WeaselMoved, _super);
        function WeaselMoved() {
            _super.apply(this, arguments);
        }
        return WeaselMoved;
    })(Event);
    events.WeaselMoved = WeaselMoved;
    var PlatfomerJumped = (function (_super) {
        __extends(PlatfomerJumped, _super);
        function PlatfomerJumped() {
            _super.apply(this, arguments);
        }
        return PlatfomerJumped;
    })(Event);
    events.PlatfomerJumped = PlatfomerJumped;
    var PlatformerFalling = (function (_super) {
        __extends(PlatformerFalling, _super);
        function PlatformerFalling() {
            _super.apply(this, arguments);
        }
        return PlatformerFalling;
    })(Event);
    events.PlatformerFalling = PlatformerFalling;
    var PlatformerLanding = (function (_super) {
        __extends(PlatformerLanding, _super);
        function PlatformerLanding() {
            _super.apply(this, arguments);
        }
        return PlatformerLanding;
    })(Event);
    events.PlatformerLanding = PlatformerLanding;
    var PlatformerRunning = (function (_super) {
        __extends(PlatformerRunning, _super);
        function PlatformerRunning() {
            _super.apply(this, arguments);
        }
        return PlatformerRunning;
    })(Event);
    events.PlatformerRunning = PlatformerRunning;
    var PlatfomerIdle = (function (_super) {
        __extends(PlatfomerIdle, _super);
        function PlatfomerIdle() {
            _super.apply(this, arguments);
        }
        return PlatfomerIdle;
    })(Event);
    events.PlatfomerIdle = PlatfomerIdle;
    var SwapControls = (function (_super) {
        __extends(SwapControls, _super);
        function SwapControls() {
            _super.apply(this, arguments);
        }
        return SwapControls;
    })(Event);
    events.SwapControls = SwapControls;
    var Update = (function (_super) {
        __extends(Update, _super);
        function Update() {
            _super.apply(this, arguments);
        }
        return Update;
    })(Event);
    events.Update = Update;
    var Input = (function (_super) {
        __extends(Input, _super);
        function Input() {
            _super.apply(this, arguments);
        }
        return Input;
    })(Event);
    events.Input = Input;
    var LevelStarted = (function (_super) {
        __extends(LevelStarted, _super);
        function LevelStarted() {
            _super.apply(this, arguments);
        }
        return LevelStarted;
    })(Event);
    events.LevelStarted = LevelStarted;
    var SpawnWeasel = (function (_super) {
        __extends(SpawnWeasel, _super);
        function SpawnWeasel() {
            _super.apply(this, arguments);
        }
        return SpawnWeasel;
    })(Event);
    events.SpawnWeasel = SpawnWeasel;
    var ExitTrigger = (function (_super) {
        __extends(ExitTrigger, _super);
        function ExitTrigger() {
            _super.apply(this, arguments);
        }
        return ExitTrigger;
    })(Event);
    events.ExitTrigger = ExitTrigger;
    var ButtonTrigger = (function (_super) {
        __extends(ButtonTrigger, _super);
        function ButtonTrigger() {
            _super.apply(this, arguments);
        }
        return ButtonTrigger;
    })(Event);
    events.ButtonTrigger = ButtonTrigger;
    var WindzoneTrigger = (function (_super) {
        __extends(WindzoneTrigger, _super);
        function WindzoneTrigger() {
            _super.apply(this, arguments);
        }
        return WindzoneTrigger;
    })(Event);
    events.WindzoneTrigger = WindzoneTrigger;
    var SinkblockAction = (function (_super) {
        __extends(SinkblockAction, _super);
        function SinkblockAction() {
            _super.apply(this, arguments);
        }
        return SinkblockAction;
    })(Event);
    events.SinkblockAction = SinkblockAction;
    var MouseLevelCollision = (function (_super) {
        __extends(MouseLevelCollision, _super);
        function MouseLevelCollision() {
            _super.apply(this, arguments);
        }
        return MouseLevelCollision;
    })(Event);
    events.MouseLevelCollision = MouseLevelCollision;
    var MouseBrittleBlockCollision = (function (_super) {
        __extends(MouseBrittleBlockCollision, _super);
        function MouseBrittleBlockCollision() {
            _super.apply(this, arguments);
        }
        return MouseBrittleBlockCollision;
    })(Event);
    events.MouseBrittleBlockCollision = MouseBrittleBlockCollision;
    var MouseWithWeaselCollision = (function (_super) {
        __extends(MouseWithWeaselCollision, _super);
        function MouseWithWeaselCollision() {
            _super.apply(this, arguments);
        }
        return MouseWithWeaselCollision;
    })(Event);
    events.MouseWithWeaselCollision = MouseWithWeaselCollision;
    var MouseSinkBlockCollision = (function (_super) {
        __extends(MouseSinkBlockCollision, _super);
        function MouseSinkBlockCollision() {
            _super.apply(this, arguments);
        }
        return MouseSinkBlockCollision;
    })(Event);
    events.MouseSinkBlockCollision = MouseSinkBlockCollision;
    var MouseHeadbutted = (function (_super) {
        __extends(MouseHeadbutted, _super);
        function MouseHeadbutted() {
            _super.apply(this, arguments);
        }
        return MouseHeadbutted;
    })(Event);
    events.MouseHeadbutted = MouseHeadbutted;
    var BrittleBlockTouched = (function (_super) {
        __extends(BrittleBlockTouched, _super);
        function BrittleBlockTouched() {
            _super.apply(this, arguments);
        }
        return BrittleBlockTouched;
    })(Event);
    events.BrittleBlockTouched = BrittleBlockTouched;
    var LevelEnd = (function (_super) {
        __extends(LevelEnd, _super);
        function LevelEnd() {
            _super.apply(this, arguments);
        }
        return LevelEnd;
    })(Event);
    events.LevelEnd = LevelEnd;
    var PlayerDied = (function (_super) {
        __extends(PlayerDied, _super);
        function PlayerDied() {
            _super.apply(this, arguments);
        }
        return PlayerDied;
    })(Event);
    events.PlayerDied = PlayerDied;
    var UnloadState = (function (_super) {
        __extends(UnloadState, _super);
        function UnloadState() {
            _super.apply(this, arguments);
        }
        return UnloadState;
    })(Event);
    events.UnloadState = UnloadState;
    var PlaySound = (function (_super) {
        __extends(PlaySound, _super);
        function PlaySound() {
            _super.apply(this, arguments);
        }
        return PlaySound;
    })(Event);
    events.PlaySound = PlaySound;
    var PlayMusic = (function (_super) {
        __extends(PlayMusic, _super);
        function PlayMusic() {
            _super.apply(this, arguments);
        }
        return PlayMusic;
    })(Event);
    events.PlayMusic = PlayMusic;
    var MapButtonPressed = (function (_super) {
        __extends(MapButtonPressed, _super);
        function MapButtonPressed() {
            _super.apply(this, arguments);
        }
        return MapButtonPressed;
    })(Event);
    events.MapButtonPressed = MapButtonPressed;
    var ComicEvent = (function (_super) {
        __extends(ComicEvent, _super);
        function ComicEvent() {
            _super.apply(this, arguments);
        }
        return ComicEvent;
    })(Event);
    events.ComicEvent = ComicEvent;
    var MapSliderDragged = (function (_super) {
        __extends(MapSliderDragged, _super);
        function MapSliderDragged() {
            _super.apply(this, arguments);
        }
        return MapSliderDragged;
    })(Event);
    events.MapSliderDragged = MapSliderDragged;
    var CharactersCreated = (function (_super) {
        __extends(CharactersCreated, _super);
        function CharactersCreated() {
            _super.apply(this, arguments);
        }
        return CharactersCreated;
    })(Event);
    events.CharactersCreated = CharactersCreated;
    var FadeSpriteCreated = (function (_super) {
        __extends(FadeSpriteCreated, _super);
        function FadeSpriteCreated() {
            _super.apply(this, arguments);
        }
        return FadeSpriteCreated;
    })(Event);
    events.FadeSpriteCreated = FadeSpriteCreated;
    var MapScreenready = (function (_super) {
        __extends(MapScreenready, _super);
        function MapScreenready() {
            _super.apply(this, arguments);
        }
        return MapScreenready;
    })(Event);
    events.MapScreenready = MapScreenready;
    var Mute = (function (_super) {
        __extends(Mute, _super);
        function Mute() {
            _super.apply(this, arguments);
        }
        return Mute;
    })(Event);
    events.Mute = Mute;
    var UnMute = (function (_super) {
        __extends(UnMute, _super);
        function UnMute() {
            _super.apply(this, arguments);
        }
        return UnMute;
    })(Event);
    events.UnMute = UnMute;
    var ReturnToMap = (function (_super) {
        __extends(ReturnToMap, _super);
        function ReturnToMap() {
            _super.apply(this, arguments);
        }
        return ReturnToMap;
    })(Event);
    events.ReturnToMap = ReturnToMap;
    var MapScrolled = (function (_super) {
        __extends(MapScrolled, _super);
        function MapScrolled() {
            _super.apply(this, arguments);
        }
        return MapScrolled;
    })(Event);
    events.MapScrolled = MapScrolled;
    var BrittleBlockBroken = (function (_super) {
        __extends(BrittleBlockBroken, _super);
        function BrittleBlockBroken() {
            _super.apply(this, arguments);
        }
        return BrittleBlockBroken;
    })(Event);
    events.BrittleBlockBroken = BrittleBlockBroken;
    var SinkblockChanged = (function (_super) {
        __extends(SinkblockChanged, _super);
        function SinkblockChanged() {
            _super.apply(this, arguments);
        }
        return SinkblockChanged;
    })(Event);
    events.SinkblockChanged = SinkblockChanged;
    var FinalScreenShake = (function (_super) {
        __extends(FinalScreenShake, _super);
        function FinalScreenShake() {
            _super.apply(this, arguments);
        }
        return FinalScreenShake;
    })(Event);
    events.FinalScreenShake = FinalScreenShake;
    var Manager = (function () {
        function Manager() {
        }
        Manager.platformerInput = new PlatformerInput();
        Manager.platformerJumped = new PlatfomerJumped();
        Manager.platformerFalling = new PlatformerFalling();
        Manager.platformerLanding = new PlatformerLanding();
        Manager.platformerRunning = new PlatformerRunning();
        Manager.platformerIdle = new PlatfomerIdle();
        Manager.mouseLevelCollision = new MouseLevelCollision();
        Manager.mouseHeadbutted = new MouseHeadbutted();
        Manager.mouseBrittleBlockCollision = new MouseBrittleBlockCollision();
        Manager.mouseWithWeaselCollision = new MouseWithWeaselCollision();
        Manager.mouseSinkBlockCollision = new MouseSinkBlockCollision();
        Manager.weaselInput = new WeaselInput();
        Manager.spawnWeasel = new SpawnWeasel();
        Manager.weaselMoved = new WeaselMoved();
        Manager.charactersCreated = new CharactersCreated();
        Manager.fadeSpriteCreated = new FadeSpriteCreated();
        Manager.spawnControls = new SwapControls();
        Manager.input = new Input();
        Manager.update = new Update();
        Manager.levelStarted = new LevelStarted();
        Manager.levelEnd = new LevelEnd();
        Manager.unloadState = new UnloadState();
        Manager.playerDied = new PlayerDied();
        Manager.sinkBlockAction = new SinkblockAction();
        Manager.brittleBlockTouched = new BrittleBlockTouched();
        Manager.exitTrigger = new ExitTrigger();
        Manager.buttonTrigger = new ButtonTrigger();
        Manager.windzoneTrigger = new WindzoneTrigger();
        Manager.brittleBlockBroken = new BrittleBlockBroken();
        Manager.sinkBlockChanged = new SinkblockChanged();
        Manager.playSound = new PlaySound();
        Manager.playMusic = new PlayMusic();
        Manager.mute = new Mute();
        Manager.unMute = new UnMute();
        Manager.mapButtonPressed = new MapButtonPressed();
        Manager.comicEvent = new ComicEvent();
        Manager.comicEventEnd = new ComicEvent();
        Manager.noComicEvent = new ComicEvent();
        Manager.mapSliderDragged = new MapSliderDragged();
        Manager.mapScreenReady = new MapScreenready();
        Manager.returnToMap = new ReturnToMap();
        Manager.mapScrolled = new MapScrolled();
        Manager.finalScreenShake = new FinalScreenShake();
        return Manager;
    })();
    events.Manager = Manager;
})(events || (events = {}));
/**
 * GameState
 *
 *
 */
var states;
(function (states) {
    var GameState = (function (_super) {
        __extends(GameState, _super);
        function GameState() {
            _super.apply(this, arguments);
        }
        GameState.prototype.init = function (levelIdx) {
            containers.Game.currentLevelIndex = levelIdx;
            containers.Game.reset();
            if (Game.pokiSDKLoaded)
                PokiSDK.gameplayStart();
            this.mouseSystem = new systems.Mouse();
            this.inputSystem = new systems.Input();
            this.weaselInputSystem = new systems.WeaselInput();
            this.platformerInput = new systems.PlatformerInput();
            this.reactiveButtonSystem = new systems.Button();
            this.triggerSystem = new systems.TriggerSystem();
            this.windZoneSystem = new systems.WindZoneSystem();
            this.sinkblockSystem = new systems.Sinkblock();
            this.updateSystem = new systems.Update();
            this.weaselSystem = new systems.Weasel();
            this.analyticsSystem = new systems.AnalyticsSystem();
            this.brittleBlockBreakingSystem = new systems.BrittleBlockBreaking();
            this.levelManagerSystem = new systems.LevelManager();
            this.outOfBounds = new systems.OutOfBounds();
            this.exitDoorAnimation = new systems.ExitDoorAnimation();
            this.soundSystem = new systems.Sound();
            this.soundRelaySystem = new systems.SoundRelay();
            this.inGameInterFaceSystem = new systems.InGameInterface();
            this.screenShakeSystem = new systems.ScreenShake();
            new systems.ParseLevelData();
            new systems.SetCurrentWorld();
            new systems.InitLevelVisuals();
            new systems.InitTutorial();
            new systems.InitCharacterSprites();
            this.physicsSystem = new systems.PhysicsSystem();
            this.mouseAnimation = new systems.MouseAnimation();
            this.fadeSystem = new systems.Fade();
            this.highFiveSystem = new systems.HighFive();
            events.Manager.levelStarted.fire({
                levelNumber: levelIdx
            });
        };
        GameState.prototype.update = function () {
            this.updateSystem.fireUpdate();
        };
        GameState.prototype.render = function () {
        };
        return GameState;
    })(states.BaseState);
    states.GameState = GameState;
})(states || (states = {}));
Game.addState("GameState", states.GameState);
var states;
(function (states) {
    var MapScreenState = (function (_super) {
        __extends(MapScreenState, _super);
        function MapScreenState() {
            _super.apply(this, arguments);
        }
        MapScreenState.prototype.init = function () {
            this.updateSystem = new systems.Update();
            new systems.LevelManager();
            new systems.MapScroll();
            new systems.DrawSoundButtionOnly();
            new systems.Sound();
            new systems.SoundRelay();
            new systems.ScreenShake();
            new systems.InitMapScreen();
            new systems.StorySystem();
            new systems.Fade();
            if (Game.pokiSDKLoaded)
                PokiSDK.gameplayStop();
            events.Manager.mapScreenReady.fire({});
        };
        MapScreenState.prototype.update = function () {
            this.updateSystem.fireUpdate();
        };
        return MapScreenState;
    })(states.BaseState);
    states.MapScreenState = MapScreenState;
})(states || (states = {}));
Game.addState("MapScreenState", states.MapScreenState);
/**
 * PreloadState is the state in which all preloading happens
 */
var states;
(function (states) {
    var PreloadState = (function (_super) {
        __extends(PreloadState, _super);
        function PreloadState() {
            var _this = this;
            _super.apply(this, arguments);
            this._startTime = 0;
            this._loaders = [
                function () {
                    PokiSDK.gameLoadingStart();
                    var images = Game.game.cache.getJSON("images");
                    _this._loaderPercentageAllocation = 5;
                    Game.game.load.onFileComplete.add(function (progress, cacheKey, success, totalLoaded, totalFiles) {
                        if (totalLoaded == totalFiles) {
                            _this._loadNext();
                        }
                    });
                    for (var idx in images[util.Scale.assetType]["images"]) {
                        var path = images[util.Scale.assetType]["images"][idx], key = path.split("/").splice(3).join("/"), extension = key.split(".").pop();
                        key = key.replace("." + extension, "");
                        Game.game.load.image(key, path);
                    }
                    util.Cleaner.addToCacheCleanupQueue("JSON", "images");
                },
                function () {
                    _this._loaderPercentageAllocation = 90;
                    _this._ui = new ui.LoadUI();
                    util.Cleaner.addToDestroyQueue(_this._ui);
                    var loaderProgress = 0;
                    Game.game.load.onFileComplete.add(function (progress, cacheKey, success, totalLoaded, totalFiles) {
                        var percentageDone = (totalLoaded / totalFiles * this._loaderPercentageAllocation) - loaderProgress;
                        loaderProgress += percentageDone;
                        PokiSDK.gameLoadingProgress({
                            percentageDone: loaderProgress
                        });
                        this._ui.updateProgressBar(percentageDone);
                        if (totalLoaded == totalFiles) {
                            loaderProgress = 0;
                            this._loadNext();
                        }
                    }, _this);
                    var sfx = [
                        "button",
                        "WeaselWalk1",
                        "WeaselWalk2",
                        "WeaselWalk3",
                        "WeaselWalk4",
                        "WeaselWalk5",
                        "WeaselWalk6",
                        "WeaselWalk7",
                        "MouseDoubleStep1",
                        "MouseDoubleStep2",
                        "MouseDoubleStep3",
                        "MouseDoubleStep4",
                        "MouseDoubleStep5",
                        "MouseDoubleStep6",
                        "MouseStep1",
                        "MouseStep2",
                        "MouseStep3",
                        "MouseStep4",
                        "MouseStep5",
                        "MouseStep6",
                        "Button1",
                        "Button2",
                        "Button3",
                        "Failed",
                        "Jump",
                        "WrongMove",
                        "LevelComplete"
                    ];
                    for (var idx in sfx) {
                        Game.game.load.audio(sfx[idx], ["assets/audio/" + sfx[idx] + ".wav"]);
                    }
                    Game.game.load.audio("MainMusic", ["/_assets/e5877a64dcde0b719886.mp3"]);
                    var images = Game.game.cache.getJSON("images");
                    for (var idx in images[util.Scale.assetType]["sheets"]) {
                        var path = images[util.Scale.assetType]["sheets"][idx], key = path.split("/").splice(3).join("/"), extension = key.split(".").pop();
                        key = key.replace("." + extension, "");
                        if (key != "preroll") {
                            Game.game.load.atlasJSONHash(key, path + ".png", path + ".json");
                            util.Cleaner.cleanupCache("JSON", key);
                        }
                    }
                    for (var i = 0; i < gameConfig.GameConfig.levelList.length; i++) {
                        Game.game.load.json(gameConfig.GameConfig.stringValues.levelPrefix + (i + 1), gameConfig.GameConfig.levelList[i]);
                    }
                    var bitmapFonts = {};
                    Object.keys(bitmapFonts).forEach(function (fontName) {
                        Game.game.load.bitmapFont(fontName, "assets/bitmapfonts/" + util.Scale.assetType + "/" + fontName + ".png", "assets/bitmapfonts/" + util.Scale.assetType + "/" + fontName + ".fnt", null, bitmapFonts[fontName]);
                    });
                    util.Cleaner.addToCacheCleanupQueue("JSON", "images");
                }
            ];
        }
        PreloadState.prototype.preload = function () {
            Game.analytics.event("Screen", "PreloaderStart");
            this.farBackgroundLayer = Game.game.add.group();
            this.backgroundLayer = Game.game.add.group();
            this._startTime = Date.now();
            this._loadNext();
            if (Game.save.load("musicMuted")) {
                util.Sound.muteMusic();
            }
            if (Game.save.load("soundMuted")) {
                util.Sound.muteSounds();
            }
        };
        PreloadState.prototype._loadNext = function () {
            if (this._loaders.length > 0) {
                var next = this._loaders.shift();
                next();
            }
            else {
                this._done();
            }
        };
        PreloadState.prototype.shutdown = function () {
            util.Cleaner.cleanupAll();
        };
        PreloadState.prototype._done = function () {
            Game.analytics.event("Timing", "PreloaderFinished", "Miliseconds", (Date.now() - this._startTime));
            PokiSDK.gameLoadingFinished();
            util.Debug.log("Preload finished in " + (Date.now() - this._startTime) / 1000 + " seconds");
            this.startGame();
        };
        PreloadState.prototype.startGame = function () {
            Game.game.physics.startSystem(Phaser.Physics.ARCADE);
            Game.game.state.start("SplashState", true, false);
        };
        return PreloadState;
    })(states.BaseState);
    states.PreloadState = PreloadState;
})(states || (states = {}));
Game.addState("PreloadState", states.PreloadState);
var states;
(function (states) {
    var SplashState = (function (_super) {
        __extends(SplashState, _super);
        function SplashState() {
            _super.apply(this, arguments);
        }
        SplashState.prototype.init = function () {
            var _this = this;
            _super.prototype.init.call(this);
            this.spritesToRemove = [];
            this.groupsToRemove = [];
            this.tweensToStopAndRemove = [];
            this._setBounds(new Phaser.Rectangle(0, 0, Game.dimensions.width * 1.4, Game.dimensions.height * 1.4));
            this.logoPosition = new Phaser.Point(Game.dimensions.width * .5, Game.dimensions.height * .5 - Game.scale(300));
            this.createBackground();
            this.createCharactersAndAnimations();
            this.startMusicSystem();
            this.createLogo();
            this.createPlayButton();
            this.createInteractivePokiLogo();
            var soundOnIcon = new Phaser.Sprite(Game.game, 0, 0, "ui", "icons/icon-sound");
            containers.Game.soundOnButton = new ui.RoundButton(soundOnIcon, function () {
                _this.toggleSound();
            }, "blue");
            containers.Game.soundOnButton.width = Game.scale(100);
            containers.Game.soundOnButton.height = Game.scale(100);
            containers.Game.soundOnButton.x = Game.scale(75);
            containers.Game.soundOnButton.y = Game.scale(75);
            var soundOffIcon = new Phaser.Sprite(Game.game, 0, 0, "ui", "icons/icon-soundoff");
            containers.Game.soundOffButton = new ui.RoundButton(soundOffIcon, function () {
                _this.toggleSound();
            }, "blue");
            containers.Game.soundOffButton.width = Game.scale(100);
            containers.Game.soundOffButton.height = Game.scale(100);
            containers.Game.soundOffButton.x = Game.scale(75);
            containers.Game.soundOffButton.y = Game.scale(75);
            if (tools.UserSettingsHelper.currentUserSettings.soundEnabled) {
                containers.Game.soundOnButton.visible = true;
                containers.Game.soundOffButton.visible = false;
            }
            else {
                containers.Game.soundOnButton.visible = false;
                containers.Game.soundOffButton.visible = true;
            }
        };
        SplashState.prototype.toggleSound = function () {
            tools.UserSettingsHelper.setSoundEnabled(!tools.UserSettingsHelper.currentUserSettings.soundEnabled);
            if (tools.UserSettingsHelper.currentUserSettings.soundEnabled) {
                events.Manager.unMute.fire({});
                containers.Game.soundOnButton.visible = true;
                containers.Game.soundOffButton.visible = false;
            }
            else {
                events.Manager.mute.fire({});
                containers.Game.soundOnButton.visible = false;
                containers.Game.soundOffButton.visible = true;
            }
        };
        SplashState.prototype.createPlayButton = function () {
            var _this = this;
            var playButtonIcon = Game.game.add.sprite(0, 0, "ui", "icons/icon-play-small");
            this.playButton = new ui.SpriteButton(new Phaser.Point(Game.game.width / 2, (Game.game.height / 2) + Game.game.height / 3), playButtonIcon, Game.scale(10));
            this.playButton.onClick(function () {
                if (Game.pokiSDKLoaded) {
                    var enableAfter = false;
                    if (tools.UserSettingsHelper.currentUserSettings.soundEnabled) {
                        enableAfter = true;
                        events.Manager.mute.fire({});
                    }
                    PokiSDK.commercialBreak()
                        .then(function () {
                        if (enableAfter) {
                            events.Manager.unMute.fire({});
                            events.Manager.playMusic.fire({
                                clip: gameConfig.MusicConfig.musicKeys[gameConfig.MusicIndexes.MainMusic]
                            });
                        }
                        _this.startGame();
                    });
                }
                else {
                    _this.startGame();
                }
            });
        };
        SplashState.prototype.createInteractivePokiLogo = function () {
        };
        SplashState.prototype.createLogo = function () {
            var logobg = Game.game.add.sprite(this.logoPosition.x, this.logoPosition.y - Game.dimensions.height, "ui", "logobg");
            logobg.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
            var logo = Game.game.add.sprite(this.logoPosition.x, this.logoPosition.y - Game.dimensions.height, "preroll", "logo");
            logo.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
            var splashPaddo = Game.game.add.sprite(Game.dimensions.width / 2, Game.dimensions.height - Game.scale(330), "splash", "splashpaddo");
            splashPaddo.anchor.set(.5, .5);
            this.spritesToRemove.push(logobg, logo, splashPaddo);
            this.tweensToStopAndRemove.push(Game.game.add.tween(logobg).to({
                x: this.logoPosition.x,
                y: this.logoPosition.y
            }, Phaser.Timer.SECOND * .5, Phaser.Easing.Bounce.Out, true, Phaser.Timer.SECOND * .25));
            Game.game.time.events.add(Phaser.Timer.SECOND * .4, function () {
                tools.ScreenShakeHelper.doScreenShake(10, 5, 40);
            });
            this.tweensToStopAndRemove.push(Game.game.add.tween(logo).to({
                x: this.logoPosition.x,
                y: this.logoPosition.y
            }, Phaser.Timer.SECOND * .5, Phaser.Easing.Bounce.Out, true, Phaser.Timer.SECOND * 1));
            Game.game.time.events.add(Phaser.Timer.SECOND * 1.25, function () {
                tools.ScreenShakeHelper.doScreenShake(10, 8, 30);
            });
        };
        SplashState.prototype.createBackground = function () {
            var background = Game.game.add.sprite(Game.dimensions.width / 2, Game.dimensions.height / 2, "splash", "splashbg");
            background.anchor.set(.5, .5);
            this.spritesToRemove.push(background);
        };
        SplashState.prototype.createCharactersAndAnimations = function () {
            var animationAngle = 6;
            var animationHeight = Game.scale(50);
            var animationDuration = Phaser.Timer.SECOND * 1;
            var baseDelay = Phaser.Timer.SECOND / 2;
            var mouseGroup = Game.game.add.group();
            var weaselGroup = Game.game.add.group();
            var spritesToPlaceAndAnimate = [
                {
                    x: Game.scale(280),
                    y: Game.scale(1050),
                    spriteKey: "splashmaxwind",
                    anchor: new Phaser.Point(.5, .5),
                    animateHeight: true,
                    animateAmplitude: 1.2,
                    animateDelay: -300,
                    group: mouseGroup
                },
                {
                    x: Game.scale(275),
                    y: Game.scale(1076),
                    spriteKey: "splashmaxtail",
                    anchor: new Phaser.Point(.5, .5),
                    animateHeight: true,
                    animateAmplitude: 1,
                    animateDelay: 250,
                    group: mouseGroup
                },
                {
                    x: Game.scale(288),
                    y: Game.scale(918),
                    spriteKey: "splashmaxbody",
                    anchor: new Phaser.Point(.5, .5),
                    animateHeight: true,
                    animateAmplitude: 0.95,
                    animateDelay: 250,
                    group: mouseGroup
                },
                {
                    x: Game.scale(206),
                    y: Game.scale(965),
                    spriteKey: "splashmaxarmright",
                    anchor: new Phaser.Point(.5, .5),
                    animateHeight: true,
                    animateAmplitude: 1,
                    animateDelay: 300,
                    group: mouseGroup
                },
                {
                    x: Game.scale(488),
                    y: Game.scale(900),
                    spriteKey: "splashmaxarmleft",
                    anchor: new Phaser.Point(.5, .5),
                    animateHeight: true,
                    animateAmplitude: 1,
                    animateDelay: 250,
                    group: mouseGroup
                },
                {
                    x: Game.scale(292),
                    y: Game.scale(679),
                    spriteKey: "splashmaxhead",
                    anchor: new Phaser.Point(.5, .5),
                    animateHeight: true,
                    animateAmplitude: 1.1,
                    animateDelay: 100,
                    group: mouseGroup
                },
                {
                    x: Game.scale(1292),
                    y: Game.scale(1092),
                    spriteKey: "splashminkground",
                    anchor: new Phaser.Point(.5, .5),
                    animateHeight: false,
                    animateAmplitude: 1.05,
                    animateDelay: 0,
                    group: weaselGroup
                },
                {
                    x: Game.scale(970),
                    y: Game.scale(693),
                    spriteKey: "splashminkarmright",
                    anchor: new Phaser.Point(.5, .5),
                    animateHeight: true,
                    animateAmplitude: .5,
                    animateDelay: 200,
                    group: weaselGroup
                },
                {
                    x: Game.scale(1325),
                    y: Game.scale(822),
                    spriteKey: "splashminkbody",
                    anchor: new Phaser.Point(.5, .5),
                    animateHeight: true,
                    animateAmplitude: .2,
                    animateDelay: 100,
                    group: weaselGroup
                },
            ];
            var tmpSprite;
            var currentSpriteToPlaceData;
            for (var i = 0; i < spritesToPlaceAndAnimate.length; i++) {
                currentSpriteToPlaceData = spritesToPlaceAndAnimate[i];
                tmpSprite = Game.game.add.sprite(currentSpriteToPlaceData.x, currentSpriteToPlaceData.y, "splash", currentSpriteToPlaceData.spriteKey, currentSpriteToPlaceData.group);
                tmpSprite.anchor = currentSpriteToPlaceData.anchor;
                if (currentSpriteToPlaceData.animateHeight) {
                    tmpSprite.y -= animationHeight * -.5 * currentSpriteToPlaceData.animateAmplitude;
                    this.tweensToStopAndRemove.push(Game.game.add.tween(tmpSprite).to({
                        y: tmpSprite.y + animationHeight * currentSpriteToPlaceData.animateAmplitude
                    }, animationDuration, Phaser.Easing.Quadratic.InOut, true, 10 + i * 10 + currentSpriteToPlaceData.animateDelay + baseDelay + animationDuration, -1, true));
                }
            }
            weaselGroup.x += Game.dimensions.width;
            mouseGroup.x -= Game.dimensions.width;
            this.groupsToRemove.push(weaselGroup, mouseGroup);
            this.tweensToStopAndRemove.push(Game.game.add.tween(weaselGroup).to({
                x: 0
            }, animationDuration, Phaser.Easing.Circular.Out, true, baseDelay));
            this.tweensToStopAndRemove.push(Game.game.add.tween(mouseGroup).to({
                x: 0
            }, animationDuration, Phaser.Easing.Circular.Out, true, baseDelay));
        };
        SplashState.prototype.startMusicSystem = function () {
            this.soundSystem = new systems.Sound();
            this.soundRelaySystem = new systems.SoundRelay();
            events.Manager.playMusic.fire({
                clip: gameConfig.MusicConfig.musicKeys[gameConfig.MusicIndexes.MainMusic]
            });
        };
        SplashState.prototype.cleanup = function () {
            for (var i = 0; i < this.spritesToRemove.length; i++) {
                this.spritesToRemove[i].destroy();
            }
            for (var j = 0; j < this.tweensToStopAndRemove.length; j++) {
                this.tweensToStopAndRemove[j].stop();
                this.tweensToStopAndRemove[j] = null;
            }
            for (var k = 0; k < this.groupsToRemove.length; k++) {
                this.groupsToRemove[k].destroy(true);
            }
        };
        SplashState.prototype.startGame = function () {
            events.Manager.unloadState.fire({});
            this.cleanup();
            if (tools.UserSettingsHelper.getUserSettings().highestCompletedLevel > 0) {
                Game.game.state.start("MapScreenState", true, false);
            }
            else {
                Game.game.state.start("GameState", true, false, 1);
            }
        };
        SplashState.prototype.update = function () {
        };
        return SplashState;
    })(states.BaseState);
    states.SplashState = SplashState;
})(states || (states = {}));
Game.addState("SplashState", states.SplashState);
var systems;
(function (systems) {
    var AnalyticsSystem = (function () {
        function AnalyticsSystem() {
            this.bind();
        }
        AnalyticsSystem.prototype.bind = function () {
            events.Manager.playerDied.addListener(this.logPlayerDied, this);
            events.Manager.levelStarted.addListener(this.logLevelStarted, this);
            events.Manager.levelEnd.addListener(this.logLevelEnd, this);
            events.Manager.unloadState.addListener(this.unbind, this);
        };
        AnalyticsSystem.prototype.unbind = function () {
            events.Manager.playerDied.removeListener(this.logPlayerDied, this);
            events.Manager.levelStarted.removeListener(this.logLevelStarted, this);
            events.Manager.levelEnd.removeListener(this.logLevelEnd, this);
            events.Manager.unloadState.removeListener(this.unbind, this);
        };
        AnalyticsSystem.prototype.logPlayerDied = function (data) {
            Game.analytics.event('GameLogic', 'PlayerDied', data.isWeasel ? "Mink" : "Max", "level " + containers.Game.currentLevelIndex);
        };
        AnalyticsSystem.prototype.logLevelStarted = function (data) {
            if (!gameConfig.GameConfig.screenAnalyticsEventFiredThisSession) {
                Game.analytics.event('Screen', 'GameStart');
                gameConfig.GameConfig.screenAnalyticsEventFiredThisSession = true;
            }
            Game.analytics.event('GameLogic', 'LevelStarted', "level " + data.levelNumber);
        };
        AnalyticsSystem.prototype.logLevelEnd = function (data) {
            Game.analytics.event('GameLogic', 'LevelEnd', "level " + containers.Game.currentLevelIndex);
        };
        return AnalyticsSystem;
    })();
    systems.AnalyticsSystem = AnalyticsSystem;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var BrittleBlockBreaking = (function () {
        function BrittleBlockBreaking() {
            this.currentlyBrokenBlockIndexes = [];
            this.bind();
        }
        BrittleBlockBreaking.prototype.bind = function () {
            events.Manager.brittleBlockTouched.addListener(this.breakBlock, this);
            events.Manager.mouseBrittleBlockCollision.addListener(this.mouseTouch, this);
            events.Manager.levelEnd.addListener(this.unbind, this);
        };
        BrittleBlockBreaking.prototype.unbind = function () {
            events.Manager.brittleBlockTouched.removeListener(this.breakBlock, this);
            events.Manager.mouseBrittleBlockCollision.removeListener(this.mouseTouch, this);
            events.Manager.levelEnd.removeListener(this.unbind, this);
        };
        BrittleBlockBreaking.prototype.breakBlock = function (data) {
            if (this.currentlyBrokenBlockIndexes.indexOf(data.blockIndex) > -1) {
                return;
            }
            this.currentlyBrokenBlockIndexes.push(data.blockIndex);
            containers.Game.brittleBlockPhysicsBodies[data.blockIndex].frameName = gameConfig.LevelSpriteConfig.tileSpriteKeys[gameConfig.TileSpriteIndexes.BrittleblockCracked];
            Game.game.time.events.add(Phaser.Timer.SECOND * gameConfig.GameConfig.numberValues.brittleBlockBreakDelay, function () {
                containers.Game.brittleBlockPhysicsBodies[data.blockIndex].body.enable = false;
                containers.Game.currentLevel.brittleBlocks[data.blockIndex].isBroken = true;
                var tween = Game.game.add.tween(containers.Game.brittleBlockPhysicsBodies[data.blockIndex]).to({
                    x: containers.Game.brittleBlockPhysicsBodies[data.blockIndex].x,
                    y: containers.Game.brittleBlockPhysicsBodies[data.blockIndex].y + tools.GridHelper.getScaledGridTileSize() * 1.5,
                    alpha: 0
                }, gameConfig.GameConfig.numberValues.brittleBlockBreakAnimationDuration * Phaser.Timer.SECOND, Phaser.Easing.Exponential.In, true);
                events.Manager.brittleBlockBroken.fire({});
            });
        };
        BrittleBlockBreaking.prototype.mouseTouch = function (data) {
            var index = containers.Game.brittleBlockPhysicsBodies.indexOf(data.otherBody);
            this.breakBlock({
                blockIndex: index
            });
        };
        return BrittleBlockBreaking;
    })();
    systems.BrittleBlockBreaking = BrittleBlockBreaking;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var Button = (function () {
        function Button() {
            this.bind();
        }
        Button.prototype.bind = function () {
            events.Manager.buttonTrigger.addListener(this.buttonTriggered, this);
            events.Manager.levelEnd.addListener(this.unbind, this);
        };
        Button.prototype.unbind = function () {
            events.Manager.buttonTrigger.removeListener(this.buttonTriggered, this);
            events.Manager.levelEnd.removeListener(this.unbind, this);
        };
        Button.prototype.buttonTriggered = function (data) {
            var buttons = containers.Game.currentLevel.buttons;
            for (var i = 0; i < buttons.length; i++) {
                var button = buttons[i];
                if (data.name == button.target) {
                    if (data.state == gameConfig.TriggerEvent.Enter) {
                        button.triggerCount++;
                    }
                    else if (data.state == gameConfig.TriggerEvent.Exit) {
                        button.triggerCount--;
                    }
                }
            }
            var buttonVisuals = containers.Game.buttonVisuals;
            for (var i = 0; i < buttonVisuals.length; i++) {
                var buttonVisual = buttonVisuals[i];
                if (buttonVisual.data.triggerCount > 0) {
                    buttonVisual.sprite.animations.play(gameConfig.GameConfig.buttonAnimations.down.name);
                }
                else if (buttonVisual.data.triggerCount == 0) {
                    buttonVisual.sprite.animations.play(gameConfig.GameConfig.buttonAnimations.up.name);
                }
            }
        };
        return Button;
    })();
    systems.Button = Button;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var DebugClickToWorldPos = (function () {
        function DebugClickToWorldPos() {
            this.bind();
            this.lastClickedPos = new Phaser.Point(0, 0);
        }
        DebugClickToWorldPos.prototype.bind = function () {
            events.Manager.update.addListener(this.update, this);
            events.Manager.unloadState.addListener(this.unbind, this);
        };
        DebugClickToWorldPos.prototype.unbind = function () {
            events.Manager.update.removeListener(this.update, this);
            events.Manager.unloadState.removeListener(this.unbind, this);
        };
        DebugClickToWorldPos.prototype.update = function (data) {
            if (Game.game.input.activePointer.isDown) {
                if (Game.game.input.activePointer.worldX != this.lastClickedPos.x || Game.game.input.activePointer.worldY != this.lastClickedPos.y) {
                    if (typeof containers.Map.mapGroup !== "undefined" && containers.Map.mapGroup) {
                        console.info("new Phaser.Point("
                            + Math.round(Game.game.input.activePointer.worldX - containers.Map.mapGroup.x) +
                            ", " +
                            Math.round(Game.game.input.activePointer.worldY - containers.Map.mapGroup.y) +
                            "),");
                        this.lastClickedPos = new Phaser.Point(Game.game.input.activePointer.worldX, Game.game.input.activePointer.worldY);
                    }
                    else {
                        console.info("x: Game.scale(" + Math.round(Game.game.input.activePointer.worldX) + "),\ny: Game.scale(" + Math.round(Game.game.input.activePointer.worldY) + "),");
                    }
                }
            }
        };
        return DebugClickToWorldPos;
    })();
    systems.DebugClickToWorldPos = DebugClickToWorldPos;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var DrawSoundButtionOnly = (function () {
        function DrawSoundButtionOnly() {
            this.bind();
        }
        DrawSoundButtionOnly.prototype.bind = function () {
            events.Manager.mapScreenReady.addListener(this.drawSoundButton, this);
            events.Manager.unloadState.addListener(this.unbind, this);
        };
        DrawSoundButtionOnly.prototype.unbind = function () {
            events.Manager.mapScreenReady.removeListener(this.drawSoundButton, this);
            events.Manager.unloadState.removeListener(this.unbind, this);
        };
        DrawSoundButtionOnly.prototype.drawSoundButton = function () {
            var _this = this;
            var soundOnIcon = new Phaser.Sprite(Game.game, 0, 0, "ui", "icons/icon-sound");
            containers.Game.soundOnButton = new ui.RoundButton(soundOnIcon, function () {
                _this.toggleSound();
            }, "blue");
            containers.Game.soundOnButton.width = Game.scale(100);
            containers.Game.soundOnButton.height = Game.scale(100);
            containers.Game.soundOnButton.x = Game.scale(75);
            containers.Game.soundOnButton.y = Game.scale(75);
            var soundOffIcon = new Phaser.Sprite(Game.game, 0, 0, "ui", "icons/icon-soundoff");
            containers.Game.soundOffButton = new ui.RoundButton(soundOffIcon, function () {
                _this.toggleSound();
            }, "blue");
            containers.Game.soundOffButton.width = Game.scale(100);
            containers.Game.soundOffButton.height = Game.scale(100);
            containers.Game.soundOffButton.x = Game.scale(75);
            containers.Game.soundOffButton.y = Game.scale(75);
            if (tools.UserSettingsHelper.currentUserSettings.soundEnabled) {
                containers.Game.soundOnButton.visible = true;
                containers.Game.soundOffButton.visible = false;
            }
            else {
                containers.Game.soundOnButton.visible = false;
                containers.Game.soundOffButton.visible = true;
            }
        };
        DrawSoundButtionOnly.prototype.toggleSound = function () {
            tools.UserSettingsHelper.setSoundEnabled(!tools.UserSettingsHelper.currentUserSettings.soundEnabled);
            if (tools.UserSettingsHelper.currentUserSettings.soundEnabled) {
                events.Manager.unMute.fire({});
                containers.Game.soundOnButton.visible = true;
                containers.Game.soundOffButton.visible = false;
            }
            else {
                events.Manager.mute.fire({});
                containers.Game.soundOnButton.visible = false;
                containers.Game.soundOffButton.visible = true;
            }
        };
        return DrawSoundButtionOnly;
    })();
    systems.DrawSoundButtionOnly = DrawSoundButtionOnly;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var ExitDoorAnimation = (function () {
        function ExitDoorAnimation() {
            this.bind();
        }
        ExitDoorAnimation.prototype.bind = function () {
            events.Manager.exitTrigger.addListener(this.exitAnimation, this);
            events.Manager.unloadState.addListener(this.unbind, this);
        };
        ExitDoorAnimation.prototype.unbind = function () {
            events.Manager.exitTrigger.removeListener(this.exitAnimation, this);
            events.Manager.unloadState.removeListener(this.unbind, this);
        };
        ExitDoorAnimation.prototype.exitAnimation = function () {
            if (tools.MushroomHelper.isMushroomLevel(containers.Game.currentLevelIndex)) {
                PokiSDK.happyTime(1);
                Game.game.add.tween(containers.Game.lightRaysSprite).to({
                    alpha: 1
                }, 600, Phaser.Easing.Circular.In, true, 1000);
                Game.game.add.tween(containers.Game.lightRaysSprite).to({
                    rotation: 1
                }, 3000, Phaser.Easing.Linear.None, true);
                Game.game.add.tween(containers.Game.mushroomPickupSprite.position).to({
                    x: Game.game.width / 2,
                    y: Game.game.height / 2
                }, 1000, Phaser.Easing.Circular.In, true);
                Game.game.add.tween(containers.Game.mushroomPickupSprite.scale).to({
                    x: 2,
                    y: 2
                }, 1000, Phaser.Easing.Circular.In, true);
            }
            else {
                PokiSDK.happyTime(0.5);
                containers.Game.exitDoorSprite.animations.play("open");
            }
        };
        return ExitDoorAnimation;
    })();
    systems.ExitDoorAnimation = ExitDoorAnimation;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var Fade = (function () {
        function Fade() {
            this.setupFade();
            this.bind();
        }
        Fade.prototype.bind = function () {
            events.Manager.levelStarted.addListener(this.fadeOut, this);
            events.Manager.exitTrigger.addListener(this.fadeIn, this);
            events.Manager.mapScreenReady.addListener(this.fadeOut, this);
            events.Manager.levelEnd.addListener(this.unbind, this);
        };
        Fade.prototype.unbind = function () {
            events.Manager.levelStarted.removeListener(this.fadeOut, this);
            events.Manager.exitTrigger.removeListener(this.fadeIn, this);
            events.Manager.mapScreenReady.removeListener(this.fadeOut, this);
            events.Manager.levelEnd.removeListener(this.unbind, this);
        };
        Fade.prototype.setupFade = function () {
            containers.Game.fadeSprite = util.Sprite.createSprite(Game.game.width, Game.game.height, { r: 0, g: 5, b: 30 });
            containers.Game.fadeSprite.alpha = 0.6;
            Game.game.add.existing(containers.Game.fadeSprite);
            events.Manager.fadeSpriteCreated.fire({});
        };
        Fade.prototype.fadeIn = function () {
            if (!tools.MushroomHelper.isMushroomLevel(containers.Game.currentLevelIndex)) {
                var fadeInTween = Game.game.add.tween(containers.Game.fadeSprite).to({
                    alpha: 0.6
                }, gameConfig.GameConfig.numberValues.fadeDuration * Phaser.Timer.SECOND, Phaser.Easing.Exponential.In, true, gameConfig.GameConfig.numberValues.fadeDelay * Phaser.Timer.SECOND);
            }
            else {
                var fadeInTween = Game.game.add.tween(containers.Game.fadeSprite).to({
                    alpha: 0.9
                }, gameConfig.GameConfig.numberValues.fadeToBlackDuration * Phaser.Timer.SECOND, Phaser.Easing.Exponential.In, true, gameConfig.GameConfig.numberValues.fadeToBlackDelay * Phaser.Timer.SECOND);
            }
        };
        Fade.prototype.fadeOut = function () {
            var fadeOutTween = Game.game.add.tween(containers.Game.fadeSprite).to({
                alpha: 0
            }, gameConfig.GameConfig.numberValues.fadeDuration * Phaser.Timer.SECOND, Phaser.Easing.Exponential.In, true, gameConfig.GameConfig.numberValues.fadeDelay * Phaser.Timer.SECOND);
        };
        return Fade;
    })();
    systems.Fade = Fade;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var HighFive = (function () {
        function HighFive() {
            this.setupHighFive();
            this.bind();
        }
        HighFive.prototype.bind = function () {
            events.Manager.exitTrigger.addListener(this.highFive, this);
            events.Manager.unloadState.addListener(this.unbind, this);
        };
        HighFive.prototype.unbind = function () {
            events.Manager.exitTrigger.removeListener(this.highFive, this);
            events.Manager.unloadState.removeListener(this.unbind, this);
        };
        HighFive.prototype.setupHighFive = function () {
            for (var i = 0; i < gameConfig.HighFiveSpriteConfig.spriteKeys.length; i++) {
                var spriteKey = gameConfig.HighFiveSpriteConfig.spriteKeys[i];
                var tmpSprite = Game.game.add.sprite(0, 0, gameConfig.GameConfig.stringValues.assetFolder, spriteKey);
                tmpSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                containers.Game.highFiveSprites.push(tmpSprite);
            }
            containers.Game.highFiveSprites[gameConfig.HighFiveSpriteIndexes.SlapSprite].position = new Phaser.Point(Game.scale(gameConfig.GameConfig.pointValues.highFiveStarSpawn.x), Game.scale(gameConfig.GameConfig.pointValues.highFiveStarSpawn.y));
            containers.Game.highFiveSprites[gameConfig.HighFiveSpriteIndexes.SlapSprite].anchor = gameConfig.GameConfig.pointValues.anchorCenter;
            containers.Game.highFiveSprites[gameConfig.HighFiveSpriteIndexes.SlapSprite].scale.set(0, 0);
            containers.Game.highFiveSprites[gameConfig.HighFiveSpriteIndexes.HighFiveMax].position = new Phaser.Point(Game.scale(gameConfig.GameConfig.pointValues.highFiveMaxSpawn.x), Game.scale(gameConfig.GameConfig.pointValues.highFiveMaxSpawn.y));
            containers.Game.highFiveSprites[gameConfig.HighFiveSpriteIndexes.HighFiveMax].anchor = gameConfig.GameConfig.pointValues.anchorRightCenter;
            containers.Game.highFiveSprites[gameConfig.HighFiveSpriteIndexes.HighFiveMink].position = new Phaser.Point(Game.scale(gameConfig.GameConfig.pointValues.highFiveMinkSpawn.x), Game.scale(gameConfig.GameConfig.pointValues.highFiveMinkSpawn.y));
            containers.Game.highFiveSprites[gameConfig.HighFiveSpriteIndexes.HighFiveMink].anchor = gameConfig.GameConfig.pointValues.anchorLeftCenter;
        };
        HighFive.prototype.highFive = function (data) {
            if (!tools.MushroomHelper.isMushroomLevel(containers.Game.currentLevelIndex)) {
                var maxTween = Game.game.add.tween(containers.Game.highFiveSprites[gameConfig.HighFiveSpriteIndexes.HighFiveMax].position).to({
                    x: Game.scale(gameConfig.GameConfig.pointValues.highFiveMaxTarget.x),
                    y: Game.scale(gameConfig.GameConfig.pointValues.highFiveMaxTarget.y),
                }, gameConfig.GameConfig.numberValues.highFiveDuration * Phaser.Timer.SECOND, Phaser.Easing.Exponential.In, true, gameConfig.GameConfig.numberValues.highFiveDelay * Phaser.Timer.SECOND - 50);
                var minkTween = Game.game.add.tween(containers.Game.highFiveSprites[gameConfig.HighFiveSpriteIndexes.HighFiveMink].position).to({
                    x: Game.scale(gameConfig.GameConfig.pointValues.highFiveMinkTarget.x),
                    y: Game.scale(gameConfig.GameConfig.pointValues.highFiveMinkTarget.y),
                }, gameConfig.GameConfig.numberValues.highFiveDuration * Phaser.Timer.SECOND, Phaser.Easing.Exponential.In, true, gameConfig.GameConfig.numberValues.highFiveDelay * Phaser.Timer.SECOND + 50);
                var slapTween = Game.game.add.tween(containers.Game.highFiveSprites[gameConfig.HighFiveSpriteIndexes.SlapSprite].scale).to({
                    x: 1.2,
                    y: 1.2
                }, gameConfig.GameConfig.numberValues.slapSpriteTweenDuration * Phaser.Timer.SECOND, Phaser.Easing.Exponential.Out, true, gameConfig.GameConfig.numberValues.highFiveDuration * Phaser.Timer.SECOND + gameConfig.GameConfig.numberValues.highFiveDelay * Phaser.Timer.SECOND);
                var slapFadeTween = Game.game.add.tween(containers.Game.highFiveSprites[gameConfig.HighFiveSpriteIndexes.SlapSprite]).to({
                    alpha: 0
                }, gameConfig.GameConfig.numberValues.slapSpriteTweenDuration / 2 * Phaser.Timer.SECOND, Phaser.Easing.Exponential.Out, true, ((gameConfig.GameConfig.numberValues.slapSpriteTweenDuration * Phaser.Timer.SECOND) / 2) + (gameConfig.GameConfig.numberValues.highFiveDuration * Phaser.Timer.SECOND + gameConfig.GameConfig.numberValues.highFiveDelay * Phaser.Timer.SECOND));
            }
        };
        return HighFive;
    })();
    systems.HighFive = HighFive;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var InGameInterface = (function () {
        function InGameInterface() {
            this.bind();
        }
        InGameInterface.prototype.bind = function () {
            events.Manager.levelStarted.addListener(this.drawInGameInterface, this);
        };
        InGameInterface.prototype.drawInGameInterface = function () {
            var _this = this;
            var backIcon = new Phaser.Sprite(Game.game, 0, 0, "ui", "icons/icon-back");
            var backButton = new ui.RoundButton(backIcon, function () {
                events.Manager.returnToMap.fire({});
            }, "blue");
            backButton.width = Game.scale(100);
            backButton.height = Game.scale(100);
            backButton.x = Game.scale(75);
            backButton.y = Game.scale(75);
            var soundOnIcon = new Phaser.Sprite(Game.game, 0, 0, "ui", "icons/icon-sound");
            containers.Game.soundOnButton = new ui.RoundButton(soundOnIcon, function () {
                _this.toggleSound();
            }, "blue");
            containers.Game.soundOnButton.width = Game.scale(100);
            containers.Game.soundOnButton.height = Game.scale(100);
            containers.Game.soundOnButton.x = Game.scale(200);
            containers.Game.soundOnButton.y = Game.scale(75);
            var soundOffIcon = new Phaser.Sprite(Game.game, 0, 0, "ui", "icons/icon-soundoff");
            containers.Game.soundOffButton = new ui.RoundButton(soundOffIcon, function () {
                _this.toggleSound();
            }, "blue");
            containers.Game.soundOffButton.width = Game.scale(100);
            containers.Game.soundOffButton.height = Game.scale(100);
            containers.Game.soundOffButton.x = Game.scale(200);
            containers.Game.soundOffButton.y = Game.scale(75);
            if (tools.UserSettingsHelper.currentUserSettings.soundEnabled) {
                containers.Game.soundOnButton.visible = true;
                containers.Game.soundOffButton.visible = false;
            }
            else {
                containers.Game.soundOnButton.visible = false;
                containers.Game.soundOffButton.visible = true;
            }
        };
        InGameInterface.prototype.toggleSound = function () {
            tools.UserSettingsHelper.setSoundEnabled(!tools.UserSettingsHelper.currentUserSettings.soundEnabled);
            if (tools.UserSettingsHelper.currentUserSettings.soundEnabled) {
                events.Manager.unMute.fire({});
                containers.Game.soundOnButton.visible = true;
                containers.Game.soundOffButton.visible = false;
            }
            else {
                events.Manager.mute.fire({});
                containers.Game.soundOnButton.visible = false;
                containers.Game.soundOffButton.visible = true;
            }
        };
        return InGameInterface;
    })();
    systems.InGameInterface = InGameInterface;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var InitCharacterSprites = (function () {
        function InitCharacterSprites() {
            for (var i = 0; i < gameConfig.CharacterSpriteConfig.spriteKeys.length; i++) {
                var spriteKey = gameConfig.CharacterSpriteConfig.spriteKeys[i];
                var tmpSprite = Game.game.add.sprite(0, 0, gameConfig.GameConfig.stringValues.assetFolder, spriteKey);
                tmpSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                containers.Game.characterSprites.push(tmpSprite);
            }
            events.Manager.charactersCreated.fire({});
        }
        return InitCharacterSprites;
    })();
    systems.InitCharacterSprites = InitCharacterSprites;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var InitGamePokiLogo = (function () {
        function InitGamePokiLogo(xPos, yPos, baseScale, zoomScale) {
            this.logoGroup = Game.game.add.group();
            this.logoGroup.add(new ui.InteractivePokiLogo(xPos, yPos, baseScale, zoomScale));
        }
        return InitGamePokiLogo;
    })();
    systems.InitGamePokiLogo = InitGamePokiLogo;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var InitLevelVisuals = (function () {
        function InitLevelVisuals() {
            this.scaledTileSize = tools.GridHelper.getScaledGridTileSize();
            this.tempSprites = [];
            this.createBackground();
            this.createSinkBlockBackgrounds();
            this.createSimpleBlocks(containers.Game.currentLevel.deathBlocks, gameConfig.TileSpriteIndexes.Deathblock, containers.Game.deathBlockPhysicsBodies, true);
            if (containers.Game.currentLevelIndex > 1) {
                this.createLevelEntrance();
            }
            this.createLevelTiles();
            this.generateRenderTexture();
            this.destroyTempSprites();
            this.createExit();
            this.createSinkblocks();
            this.createSimpleBlocks(containers.Game.currentLevel.brittleBlocks, gameConfig.TileSpriteIndexes.Brittleblock, containers.Game.brittleBlockPhysicsBodies);
            this.createButtons();
            this.createWindzoneSources();
            this.createWindzoneParticleVisuals();
            this.bind();
        }
        InitLevelVisuals.prototype.bind = function () {
            events.Manager.charactersCreated.addListener(this.createWindZoneEndParticleVisuals, this);
            events.Manager.fadeSpriteCreated.addListener(this.createMushroomExit, this);
            events.Manager.unloadState.addListener(this.unbind, this);
        };
        InitLevelVisuals.prototype.unbind = function () {
            events.Manager.charactersCreated.removeListener(this.createWindZoneEndParticleVisuals, this);
            events.Manager.fadeSpriteCreated.removeListener(this.createMushroomExit, this);
            events.Manager.unloadState.removeListener(this.unbind, this);
            this.cleanup();
        };
        InitLevelVisuals.prototype.cleanup = function () {
            if (containers.Game.windZoneVisuals.length !== 0) {
                for (var k = 0; k < containers.Game.windZoneVisuals.length; k++) {
                    containers.Game.windZoneVisuals[k].windZoneEnd.destroy();
                    for (var l = 0; l < containers.Game.windZoneVisuals[k].aliveSprites.length; l++) {
                        containers.Game.windZoneVisuals[k].aliveSprites[l].destroy();
                    }
                }
            }
            containers.Game.windZoneVisuals.length = 0;
            if (containers.Game.windZoneSourceVisuals.length !== 0) {
                for (var k = 0; k < containers.Game.windZoneSourceVisuals.length; k++) {
                    containers.Game.windZoneSourceVisuals[k].destroy();
                }
            }
            containers.Game.windZoneSourceVisuals.length = 0;
        };
        InitLevelVisuals.prototype.destroyTempSprites = function () {
            for (var i = 0; i < this.tempSprites.length; i++) {
                this.tempSprites[i].destroy();
            }
        };
        InitLevelVisuals.prototype.generateRenderTexture = function () {
            if (containers.Game.levelBackgroundWithTilesRenderTexture !== null) {
                containers.Game.levelBackgroundWithTilesRenderTexture.destroy(true);
                containers.Game.levelBackgroundWithTilesRenderTexture = null;
            }
            if (containers.Game.levelBackgroundWithTilesSprite !== null) {
                containers.Game.levelBackgroundWithTilesSprite.destroy();
                containers.Game.levelBackgroundWithTilesSprite = null;
            }
            containers.Game.levelBackgroundWithTilesRenderTexture = Game.game.add.renderTexture(Game.dimensions.width, Game.dimensions.height);
            containers.Game.levelBackgroundWithTilesSprite = Game.game.add.sprite(0, 0, containers.Game.levelBackgroundWithTilesRenderTexture);
            containers.Game.levelBackgroundWithTilesRenderTexture.renderXY(Game.game.stage, 0, 0, false);
        };
        InitLevelVisuals.prototype.createLevelEntrance = function () {
            var doorSprite = Game.game.add.sprite(containers.Game.currentLevel.mouseSpawnPosition.x * this.scaledTileSize, containers.Game.currentLevel.mouseSpawnPosition.y * this.scaledTileSize + Game.scale(20), gameConfig.GameConfig.stringValues.assetFolder, gameConfig.LevelSpriteConfig.objectSpriteWorldKeys[containers.Game.currentWorldIndex] +
                "doorentrance");
            doorSprite.alpha = 1;
            doorSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
            this.tempSprites.push(doorSprite);
        };
        InitLevelVisuals.prototype.createBackground = function () {
            var tmpBackground = Game.game.add.tileSprite(0, 0, Game.game.width, Game.game.height, gameConfig.GameConfig.stringValues.assetFolder, gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                gameConfig.LevelSpriteConfig.tileSpriteKeys[gameConfig.TileSpriteIndexes.BgBlock]);
            this.tempSprites.push(tmpBackground);
        };
        InitLevelVisuals.prototype.createLevelTiles = function () {
            var blocks = containers.Game.currentLevel.levelBlocks;
            for (var i = 0; i < blocks.length; i++) {
                var blockData = blocks[i];
                blockData.neighbourConfig = tools.GridHelper.getNeighbourConfig(blockData.gridPosition, blocks);
                this.createTileCroners(blockData.gridPosition, blockData.neighbourConfig);
            }
        };
        InitLevelVisuals.prototype.createWindzoneSources = function () {
            var windZones = containers.Game.currentLevel.windZones;
            var tempSprite;
            var windZoneData;
            for (var i = 0; i < windZones.length; i++) {
                windZoneData = windZones[i];
                for (var j = 0; j < windZoneData.gridSize.x; j++) {
                    tempSprite = Game.game.add.sprite(Game.scale(windZoneData.position.x) + j * this.scaledTileSize, Game.scale(windZoneData.position.y + windZoneData.size.y) - this.scaledTileSize * .5, gameConfig.GameConfig.stringValues.assetFolder, gameConfig.LevelSpriteConfig.objectSpriteWorldKeys[containers.Game.currentWorldIndex] +
                        gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.ObjectSpriteIndexes.WindSource]);
                    tempSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                    Game.game.add.existing(tempSprite);
                    containers.Game.windZoneSourceVisuals.push(tempSprite);
                }
            }
        };
        InitLevelVisuals.prototype.createWindZoneEndParticleVisuals = function () {
            for (var i = 0; i < containers.Game.windZoneVisuals.length; i++) {
                var windZoneVisuals = containers.Game.windZoneVisuals[i];
                var floorPosition = Phaser.Point.parse(windZoneVisuals.belongsToWindZone.gridPosition);
                floorPosition.y += windZoneVisuals.belongsToWindZone.gridSize.y;
                floorPosition.x = windZoneVisuals.xGridPosition;
                var windZoneEndSprite;
                var ceilingGridYPosition = tools.GridHelper.findCeilingFromGridPosition(floorPosition, containers.Game.currentLevel.levelBlocks).y + 1;
                var windZoneEndSpritePosition = new Phaser.Point(Game.scale((windZoneVisuals.xGridPosition + (Math.random() - .5) * .25) *
                    gameConfig.GameConfig.numberValues.tileSize), Math.max(Game.scale(windZoneVisuals.belongsToWindZone.position.y), ceilingGridYPosition * this.scaledTileSize - .5 * this.scaledTileSize));
                windZoneEndSprite = Game.game.add.sprite(windZoneEndSpritePosition.x, windZoneEndSpritePosition.y, gameConfig.GameConfig.stringValues.assetFolder, gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.ObjectSpriteIndexes.WindParticleDead]);
                windZoneEndSprite.anchor.set(.5, 0.8);
                windZoneEndSprite.scale.set(1.6, 1.3);
                windZoneEndSprite.alpha = 0.7;
                windZoneEndSprite.animations.add("main", [gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.ObjectSpriteIndexes.WindParticle] + "1", gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.ObjectSpriteIndexes.WindParticle] + "2", gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.ObjectSpriteIndexes.WindParticle] + "3"], 10, true).play();
                Game.game.add.tween(windZoneEndSprite.scale).to({
                    x: 2.3,
                    y: 1.5
                }, Phaser.Timer.SECOND * .5, Phaser.Easing.Sinusoidal.InOut, true, 10 + Phaser.Timer.SECOND * Math.random(), -1, true);
                windZoneEndSprite.health = Game.scale(gameConfig.GameConfig.numberValues.windZoneParticleSpeed) * (1 + (Math.random() - .5) * .2);
                windZoneVisuals.windZoneEnd = windZoneEndSprite;
            }
        };
        InitLevelVisuals.prototype.createWindzoneParticleVisuals = function () {
            var windZones = containers.Game.currentLevel.windZones;
            var windZoneData;
            var tmpWindStartPosition;
            var tmpWindZoneSprite;
            var xGridPosition;
            var xAmount;
            for (var i = 0; i < windZones.length; i++) {
                windZoneData = windZones[i];
                xGridPosition = Math.round(windZoneData.position.x / gameConfig.GameConfig.numberValues.tileSize);
                xAmount = Math.floor(windZoneData.size.x / gameConfig.GameConfig.numberValues.tileSize);
                var floorPosition = Phaser.Point.parse(windZoneData.gridPosition);
                floorPosition.y += windZoneData.gridSize.y;
                var aliveWindZoneSprites;
                for (var j = 0; j < xAmount; j++) {
                    aliveWindZoneSprites = [];
                    for (var k = 0; k < gameConfig.GameConfig.numberValues.windZoneParticlesPerGrid; k++) {
                        tmpWindStartPosition = new Phaser.Point(Game.scale(windZoneData.position.x + (j - .5 + Math.random()) * gameConfig.GameConfig.numberValues.tileSize), Game.scale(windZoneData.position.y + Math.random() * windZoneData.size.y));
                        tmpWindZoneSprite = Game.game.add.sprite(tmpWindStartPosition.x, tmpWindStartPosition.y, gameConfig.GameConfig.stringValues.assetFolder, gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.ObjectSpriteIndexes.WindParticle]);
                        tmpWindZoneSprite.anchor.set(.5, 1.1);
                        aliveWindZoneSprites.push(tmpWindZoneSprite);
                    }
                    var ceilingGridYPosition = tools.GridHelper.findCeilingFromGridPosition(floorPosition, containers.Game.currentLevel.levelBlocks).y + 1;
                    containers.Game.windZoneVisuals.push({
                        thisHighToDie: Math.max(windZoneData.position.y, ceilingGridYPosition * this.scaledTileSize),
                        velocity: gameConfig.GameConfig.numberValues.windZoneParticleSpeed,
                        aliveSprites: aliveWindZoneSprites,
                        windZoneEnd: null,
                        xGridPosition: xGridPosition + j,
                        belongsToWindZone: windZoneData
                    });
                    floorPosition.x++;
                }
            }
        };
        InitLevelVisuals.prototype.createSpriteWithOffset = function (gridPosition, neighbourConfig, offset, spriteCornerHelperFunction) {
            var tmpSprite = Game.game.add.sprite(0, 0, gameConfig.GameConfig.stringValues.assetFolder, gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.AllNeighbours]);
            tmpSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
            tmpSprite.position.set(gridPosition.x * this.scaledTileSize + offset.x * this.scaledTileSize, gridPosition.y * this.scaledTileSize + offset.y * this.scaledTileSize);
            spriteCornerHelperFunction(neighbourConfig, tmpSprite);
            if (tmpSprite.frameName ===
                gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                    gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassTop]) {
                var randomizationStrings = ['a', 'b'];
                var randomAddon = randomizationStrings[Math.floor(randomizationStrings.length * Math.random())];
                tmpSprite.frameName += randomAddon;
            }
            return tmpSprite;
        };
        InitLevelVisuals.prototype.createTileCroners = function (gridPosition, neighbourConfig) {
            var offsets = [
                new Phaser.Point(-.25, -.25),
                new Phaser.Point(.25, -.25),
                new Phaser.Point(.25, .25),
                new Phaser.Point(-.25, .25)
            ];
            var functions = [
                tools.SpriteCornerHelper.setTopLeftCornerSprite,
                tools.SpriteCornerHelper.setTopRightCornerSprite,
                tools.SpriteCornerHelper.setBottomRightCornerSprite,
                tools.SpriteCornerHelper.setBottomLeftCornerSprite
            ];
            for (var i = 0; i < offsets.length; i++) {
                var tmpSprite = this.createSpriteWithOffset(gridPosition, neighbourConfig, offsets[i], functions[i]);
                this.tempSprites.push(tmpSprite);
            }
        };
        InitLevelVisuals.prototype.createSimpleBlocks = function (blocks, blockType, physicsBodyArray, addToTemp) {
            if (addToTemp === void 0) { addToTemp = false; }
            for (var i = 0; i < blocks.length; i++) {
                var blockData = blocks[i];
                var sprite = Game.game.add.sprite(blockData.gridPosition.x * this.scaledTileSize, blockData.gridPosition.y * this.scaledTileSize, gameConfig.GameConfig.stringValues.assetFolder, gameConfig.LevelSpriteConfig.tileSpriteKeys[blockType]);
                if (blockType === gameConfig.TileSpriteIndexes.Deathblock && Math.random() > .5) {
                    sprite.frameName += 'b';
                }
                sprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                if (addToTemp) {
                    this.tempSprites.push(sprite);
                }
                else {
                    physicsBodyArray.push(sprite);
                }
            }
        };
        InitLevelVisuals.prototype.createSinkBlockBackgrounds = function () {
            for (var i = 0; i < containers.Game.currentLevel.sinkBlocks.length; i++) {
                var sinkblockData = containers.Game.currentLevel.sinkBlocks[i];
                var sinkblockBackground = Game.game.add.sprite(sinkblockData.position.x, sinkblockData.position.y, gameConfig.GameConfig.stringValues.assetFolder, gameConfig.LevelSpriteConfig.objectSpriteWorldKeys[containers.Game.currentWorldIndex] +
                    gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.LevelSpriteConfig.backgroundSinkblockVariations[sinkblockData.backgroundVariationIndex]]);
                sinkblockBackground.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                this.tempSprites.push(sinkblockBackground);
            }
        };
        InitLevelVisuals.prototype.createSinkblocks = function () {
            var physicsBodyArray = containers.Game.sinkBlockPhysicsBodies;
            for (var i = 0; i < containers.Game.currentLevel.sinkBlocks.length; i++) {
                var sinkblockData = containers.Game.currentLevel.sinkBlocks[i];
                var sinkblockSprite = Game.game.add.sprite(sinkblockData.position.x, sinkblockData.position.y, gameConfig.GameConfig.stringValues.assetFolder, gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.LevelSpriteConfig.foregroundSinkblockVariations[sinkblockData.foregroundVariationIndex]]);
                sinkblockSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                if (sinkblockData.startOpen == true) {
                    sinkblockSprite.scale = gameConfig.GameConfig.pointValues.zero;
                    sinkblockSprite.alpha = 0;
                }
                var sinkBlockVisuals = sinkblockData;
                sinkBlockVisuals.sprite = sinkblockSprite;
                sinkBlockVisuals.physicsBody = null;
                containers.Game.sinkblockVisuals.push(sinkBlockVisuals);
            }
        };
        InitLevelVisuals.prototype.createButtons = function () {
            for (var i = 0; i < containers.Game.currentLevel.buttons.length; i++) {
                var buttonData = containers.Game.currentLevel.buttons[i];
                var buttonSprite = Game.game.add.sprite(buttonData.position.x, buttonData.position.y, gameConfig.GameConfig.stringValues.assetFolder, gameConfig.LevelSpriteConfig.objectSpriteWorldKeys[containers.Game.currentWorldIndex] +
                    gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.ObjectSpriteIndexes.ButtonUp]);
                buttonSprite.animations.add(gameConfig.GameConfig.buttonAnimations.up.name, [
                    gameConfig.LevelSpriteConfig.objectSpriteWorldKeys[containers.Game.currentWorldIndex] +
                        gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.ObjectSpriteIndexes.ButtonUp]
                ], gameConfig.GameConfig.buttonAnimations.up.frameRate, gameConfig.GameConfig.buttonAnimations.up.loop);
                buttonSprite.animations.add(gameConfig.GameConfig.buttonAnimations.down.name, [
                    gameConfig.LevelSpriteConfig.objectSpriteWorldKeys[containers.Game.currentWorldIndex] +
                        gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.ObjectSpriteIndexes.ButtonDown]
                ], gameConfig.GameConfig.buttonAnimations.down.frameRate, gameConfig.GameConfig.buttonAnimations.down.loop);
                buttonSprite.animations.play(gameConfig.GameConfig.buttonAnimations.up.name);
                buttonSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                containers.Game.buttonVisuals.push({
                    sprite: buttonSprite,
                    data: buttonData
                });
            }
        };
        InitLevelVisuals.prototype.createMushroomExit = function () {
            if (tools.MushroomHelper.isMushroomLevel(containers.Game.currentLevelIndex)) {
                var targetSpriteKey = gameConfig.GameConfig.mushroomConfig.mushroom1.spriteFrame;
                containers.Game.lightRaysSprite = Game.game.add.sprite(Game.game.width / 2, Game.game.height / 2, gameConfig.GameConfig.stringValues.assetFolder, gameConfig.LevelSpriteConfig.lightRaySpriteKey);
                containers.Game.lightRaysSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                containers.Game.lightRaysSprite.alpha = 0;
                switch (containers.Game.currentLevelIndex) {
                    case gameConfig.GameConfig.mushroomConfig.mushroom1.levelIndex:
                        targetSpriteKey = "objects/" + gameConfig.GameConfig.mushroomConfig.mushroom1.spriteFrame;
                        break;
                    case gameConfig.GameConfig.mushroomConfig.mushroom2.levelIndex:
                        targetSpriteKey = "objects/" + gameConfig.GameConfig.mushroomConfig.mushroom2.spriteFrame;
                        break;
                    case gameConfig.GameConfig.mushroomConfig.mushroom3.levelIndex:
                        targetSpriteKey = "objects/" + gameConfig.GameConfig.mushroomConfig.mushroom3.spriteFrame;
                        break;
                }
                var mushroomSprite = Game.game.add.sprite(containers.Game.currentLevel.exitPosition.x, containers.Game.currentLevel.exitPosition.y + Game.scale(gameConfig.GameConfig.numberValues.inGamePaddoOffset), gameConfig.GameConfig.stringValues.assetFolder, targetSpriteKey);
                mushroomSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                containers.Game.mushroomPickupSprite = mushroomSprite;
            }
        };
        InitLevelVisuals.prototype.createExit = function () {
            if (containers.Game.currentLevel.exitPosition) {
                if (tools.MushroomHelper.isMushroomLevel(containers.Game.currentLevelIndex)) {
                }
                else {
                    var exitSprite = Game.game.add.sprite(containers.Game.currentLevel.exitPosition.x, containers.Game.currentLevel.exitPosition.y, gameConfig.GameConfig.stringValues.assetFolder, gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.ObjectSpriteIndexes.DoorExit]);
                    var doorSprite = Game.game.add.sprite(containers.Game.currentLevel.exitPosition.x, containers.Game.currentLevel.exitPosition.y, gameConfig.GameConfig.stringValues.assetFolder, gameConfig.LevelSpriteConfig.objectSpriteWorldKeys[containers.Game.currentWorldIndex] +
                        gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.ObjectSpriteIndexes.DoorClosed]);
                    doorSprite.animations.add("open", [
                        gameConfig.LevelSpriteConfig.objectSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.objectSpriteKeys[gameConfig.ObjectSpriteIndexes.DoorOpen]], 1, false);
                    containers.Game.exitDoorSprite = doorSprite;
                    doorSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                    exitSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                }
            }
        };
        return InitLevelVisuals;
    })();
    systems.InitLevelVisuals = InitLevelVisuals;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var InitMapScreen = (function () {
        function InitMapScreen() {
            this.drawMapBg();
            this.initMapContainer();
            this.drawMap();
            this.drawAndAnimateWaterfalls();
            this.drawKingRoeIllSprites();
            if (containers.Map.currentLevelIndex !== gameConfig.GameConfig.numberValues.lastLevelIndex) {
                this.drawBalloon();
            }
            this.drawLevelButtons();
            this.drawScrollBar();
            this.drawGameLogo();
        }
        InitMapScreen.prototype.drawAndAnimateWaterfalls = function () {
            var waterfall = Game.game.add.sprite(Game.scale(1034), Game.scale(2259), mapConfig.MapConfig.folder, "mapscreenwater", containers.Map.mapGroup);
            var lavafall = Game.game.add.sprite(Game.scale(285), Game.scale(3020), mapConfig.MapConfig.folder, "mapscreenlava", containers.Map.mapGroup);
            Game.game.add.tween(waterfall).to({
                alpha: 0
            }, 300, Phaser.Easing.Bounce.InOut, true, 10, -1, true);
            Game.game.add.tween(lavafall).to({
                alpha: 0
            }, 300, Phaser.Easing.Bounce.InOut, true, 10, -1, true);
        };
        InitMapScreen.prototype.drawGameLogo = function () {
            var gameLogo = Game.game.add.sprite(Game.scale(135), Game.game.height - Game.scale(100), mapConfig.MapConfig.folder, "logo");
            gameLogo.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
        };
        InitMapScreen.prototype.drawBalloon = function () {
            var background = Game.game.add.sprite(Game.scale(800), Game.scale(220), mapConfig.MapConfig.folder, "balloon", containers.Map.mapGroup);
            background.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
            background.scale.set(.98, .98);
            Game.game.add.tween(background.scale).to({
                x: 1, y: 1
            }, Phaser.Timer.SECOND, Phaser.Easing.Sinusoidal.InOut, true, 10, -1, true);
            containers.Map.instructionBalloon = background;
            containers.Map.checkMarks = [];
            for (var i = 0; i < tools.MushroomHelper.getMushroomsGathered(); i++) {
                var checkmark = Game.game.add.sprite(Game.scale(mapConfig.MapConfig.checkMarkPositions[i].x), Game.scale(mapConfig.MapConfig.checkMarkPositions[i].y), mapConfig.MapConfig.folder, gameConfig.MapSpriteConfig.spriteKeys[gameConfig.MapScreenSpriteIndexes.CheckMark]);
                checkmark.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                containers.Map.mapGroup.add(checkmark);
                containers.Map.checkMarks.push(checkmark);
            }
        };
        InitMapScreen.prototype.initMapContainer = function () {
            containers.Map.mapGroup = Game.game.add.group();
            containers.Map.kingRoeIllSprites = [];
            containers.Map.userSettings = tools.UserSettingsHelper.getUserSettings();
            containers.Map.currentLevelIndex = containers.Map.userSettings.highestCompletedLevel;
            containers.Map.levelButtons = [];
        };
        InitMapScreen.prototype.drawMapBg = function () {
            Game.game.stage.backgroundColor = "#bdebf3";
        };
        InitMapScreen.prototype.drawMap = function () {
            containers.Map.mapGroup.add(Game.game.add.sprite(0, 0, mapConfig.MapConfig.folder, "mapscreen"));
        };
        InitMapScreen.prototype.drawKingRoeIllSprites = function () {
            var mushroomKeys = Object.keys(gameConfig.GameConfig.mushroomConfig);
            for (var i = gameConfig.KingRoeIllStagesOfSickness.Count - 1; i >= 0; i--) {
                if (gameConfig.GameConfig.mushroomConfig[mushroomKeys[i]].levelIndex + 1 > containers.Map.currentLevelIndex) {
                    var sprite = Game.game.add.sprite(0, 0, mapConfig.MapConfig.folder, gameConfig.CharacterSpriteConfig.kingRoeIllSpriteConfig[i]);
                    containers.Map.mapGroup.add(sprite);
                    containers.Map.kingRoeIllSprites.push(sprite);
                }
                else {
                    containers.Map.kingRoeIllSprites.push(null);
                }
            }
        };
        InitMapScreen.prototype.drawScrollBar = function () {
            containers.Map.scrollBar = Game.game.add.sprite(Game.game.width - Game.scale(mapConfig.MapConfig.numberValues.scrollBarXOffset), Game.game.height / 2, "ui", gameConfig.MapSpriteConfig.spriteKeys[gameConfig.MapScreenSpriteIndexes.ScrollBar]);
            containers.Map.scrollBar.y -= Game.scale(mapConfig.MapConfig.numberValues.mapScrollBarOffset);
            containers.Map.scrollBar.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
            containers.Map.scrollSlider = Game.game.add.sprite(containers.Map.scrollBar.x, containers.Map.scrollBar.y - (containers.Map.scrollBar.height / 2), "ui", gameConfig.MapSpriteConfig.spriteKeys[gameConfig.MapScreenSpriteIndexes.ScrollSlider]);
            containers.Map.scrollSlider.y += containers.Map.scrollSlider.height / 2;
            containers.Map.scrollSlider.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
            containers.Map.scrollSlider.inputEnabled = true;
            containers.Map.scrollSlider.input.enableDrag();
            containers.Map.scrollSlider.input.pixelPerfectClick = true;
            containers.Map.scrollSlider.input.useHandCursor = true;
            containers.Map.scrollSlider.events.onDragUpdate.add(function () {
                events.Manager.mapSliderDragged.fire({});
            });
        };
        InitMapScreen.prototype.drawLevelButtons = function () {
            var highestCompletedLevel = tools.UserSettingsHelper.getUserSettings().highestCompletedLevel;
            for (var i = 0; i < mapConfig.MapConfig.buttonPositions.length; i++) {
                var mapPoint = mapConfig.MapConfig.buttonPositions[i];
                var startPoint = mapPoint.clone();
                var nextPoint = i + 1 < mapConfig.MapConfig.buttonPositions.length ? mapConfig.MapConfig.buttonPositions[i + 1].clone() : null;
                if (nextPoint != null) {
                    var dotAmount = 3;
                    for (var j = 1; j <= dotAmount; j++) {
                        var targetX = Game.scale(startPoint.x + (nextPoint.x - startPoint.x) * (j / dotAmount));
                        var targetY = Game.scale(startPoint.y + (nextPoint.y - startPoint.y) * (j / dotAmount));
                        var dot = Game.game.add.sprite(targetX, targetY, "ui", gameConfig.MapSpriteConfig.spriteKeys[gameConfig.MapScreenSpriteIndexes.MapRoadDot], containers.Map.mapGroup);
                        dot.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                    }
                }
                var buttonState = null;
                if (i + gameConfig.GameConfig.numberValues.firstLevelIndex == highestCompletedLevel + 1) {
                    buttonState = mapConfig.MapButton.Active;
                }
                else if (i + gameConfig.GameConfig.numberValues.firstLevelIndex <= highestCompletedLevel) {
                    buttonState = mapConfig.MapButton.Unlocked;
                }
                else if (i + gameConfig.GameConfig.numberValues.firstLevelIndex > highestCompletedLevel) {
                    buttonState = mapConfig.MapButton.Locked;
                }
                var newButton = new ui.MapButton(mapPoint.x, mapPoint.y, buttonState, i + gameConfig.GameConfig.numberValues.firstLevelIndex);
                containers.Map.mapGroup.add(newButton);
                containers.Map.levelButtons.push(newButton);
                if (tools.MushroomHelper.isMushroomLevel(i + gameConfig.GameConfig.numberValues.firstLevelIndex)) {
                    var targetSpriteKey = gameConfig.GameConfig.mushroomConfig.mushroom1.spriteFrame;
                    var targetOffset = new Phaser.Point(0, 0);
                    switch (i + gameConfig.GameConfig.numberValues.firstLevelIndex) {
                        case gameConfig.GameConfig.mushroomConfig.mushroom1.levelIndex:
                            targetSpriteKey = gameConfig.GameConfig.mushroomConfig.mushroom1.spriteFrame;
                            targetOffset.set(gameConfig.GameConfig.mushroomConfig.mushroom1.mapMushroomOffset.x, gameConfig.GameConfig.mushroomConfig.mushroom1.mapMushroomOffset.y);
                            break;
                        case gameConfig.GameConfig.mushroomConfig.mushroom2.levelIndex:
                            targetSpriteKey = gameConfig.GameConfig.mushroomConfig.mushroom2.spriteFrame;
                            targetOffset.set(gameConfig.GameConfig.mushroomConfig.mushroom2.mapMushroomOffset.x, gameConfig.GameConfig.mushroomConfig.mushroom2.mapMushroomOffset.y);
                            break;
                        case gameConfig.GameConfig.mushroomConfig.mushroom3.levelIndex:
                            targetSpriteKey = gameConfig.GameConfig.mushroomConfig.mushroom3.spriteFrame;
                            targetOffset.set(gameConfig.GameConfig.mushroomConfig.mushroom3.mapMushroomOffset.x, gameConfig.GameConfig.mushroomConfig.mushroom3.mapMushroomOffset.y);
                            break;
                    }
                    var mushroomSprite = Game.game.add.sprite(Game.scale(mapPoint.x + targetOffset.x), Game.scale(mapPoint.y + targetOffset.y), mapConfig.MapConfig.folder, targetSpriteKey);
                    containers.Map.mapGroup.add(mushroomSprite);
                    mushroomSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                }
            }
        };
        return InitMapScreen;
    })();
    systems.InitMapScreen = InitMapScreen;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var InitTutorial = (function () {
        function InitTutorial() {
            if (containers.Game.currentLevelIndex === 1) {
                this.buildUI();
                this.createPlayButton();
            }
            if (containers.Game.currentLevelIndex <= gameConfig.GameConfig.numberValues.firstLevelIndex) {
                this.buildKeyInfo();
            }
            if (containers.Game.currentLevelIndex === gameConfig.GameConfig.numberValues.firstLevelIndex) {
                this.buildMouseInfo();
            }
            if (containers.Game.currentLevelIndex === gameConfig.GameConfig.numberValues.trickForcerLevelIndex) {
                this.buildTrickforcerHint();
            }
        }
        InitTutorial.prototype.buildMouseInfo = function () {
            var mouseSprite = Game.game.add.sprite(Game.scale(gameConfig.GameConfig.pointValues.mouseTutorialPosition.x), Game.scale(gameConfig.GameConfig.pointValues.mouseTutorialPosition.y), "ui", "mouse-image");
        };
        InitTutorial.prototype.createPlayButton = function () {
            var _this = this;
            var playButtonIcon = Game.game.add.sprite(0, 0, "ui", "icons/icon-play-small");
            var playButton = new ui.SpriteButton(new Phaser.Point(Game.game.width / 2, (Game.game.height / 2) + Game.game.height / 7), playButtonIcon, Game.scale(10));
            playButton.onClick(function () {
                _this.startGame();
            });
            playButton.alpha = 0;
            playButton.scale.set(.3, .3);
            Game.game.add.tween(playButton).to({
                alpha: 1
            }, 500, Phaser.Easing.Circular.InOut, true, 10);
            Game.game.add.tween(playButton.scale).to({
                x: 1,
                y: 1
            }, 500, Phaser.Easing.Circular.InOut, true, 10);
        };
        InitTutorial.prototype.buildKeyInfo = function () {
            var leftControlsPosition;
            var rightControlsPosition;
            if (containers.Game.currentLevelIndex === gameConfig.GameConfig.numberValues.firstLevelIndex) {
                leftControlsPosition = new Phaser.Point(Game.scale(gameConfig.GameConfig.pointValues.tutorialKeysLevel1PositionLeft.x), Game.scale(gameConfig.GameConfig.pointValues.tutorialKeysLevel1PositionLeft.y));
                rightControlsPosition = new Phaser.Point(Game.scale(gameConfig.GameConfig.pointValues.tutorialKeysLevel1PositionRight.x), Game.scale(gameConfig.GameConfig.pointValues.tutorialKeysLevel1PositionRight.y));
            }
            else {
                leftControlsPosition = new Phaser.Point((Game.game.width / 2) - (Game.game.width / 4), (Game.game.height / 2) + (Game.game.height / 6));
                rightControlsPosition = new Phaser.Point((Game.game.width / 2) + (Game.game.width / 4), (Game.game.height / 2) + (Game.game.height / 6));
            }
            var wasdKeys = Game.game.add.sprite(leftControlsPosition.x, leftControlsPosition.y, "ui", "keys-wasd");
            wasdKeys.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
            var arrowKeys = Game.game.add.sprite(rightControlsPosition.x, rightControlsPosition.y, "ui", "keys-arrows");
            arrowKeys.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
        };
        InitTutorial.prototype.buildUI = function () {
            var switchIcon = new Phaser.Sprite(Game.game, 0, 0, "ui", "icons/icon-switch-2");
            var weaselLeft = true;
            var switchCharacterButton = new ui.RoundButton(switchIcon, function () {
                gameConfig.GameConfig.swapControls();
                var weaselTranslation = weaselLeft ? 12 : -12;
                var mouseTranslation = weaselLeft ? -12 : 12;
                weaselLeft = !weaselLeft;
                var weaselSprites = [
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselHead],
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselUpperBody],
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselMiddle],
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselPants],
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselTail]
                ];
                var scaledGridSize = tools.GridHelper.getScaledGridTileSize();
                containers.Game.mousePhysicsBody.position.x += (mouseTranslation * scaledGridSize);
                for (var i = 0; i < weaselSprites.length; i++) {
                    containers.Game.currentLevel.weaselBlocks[i].gridPosition.x += weaselTranslation;
                    weaselSprites[i].position.set(containers.Game.currentLevel.weaselBlocks[i].gridPosition.x * scaledGridSize, containers.Game.currentLevel.weaselBlocks[i].gridPosition.y * scaledGridSize);
                }
                events.Manager.weaselMoved.fire({});
            }, "blue");
            switchCharacterButton.position = new Phaser.Point(Game.game.width / 2, (Game.game.height / 2) - (Game.game.height / 6));
        };
        InitTutorial.prototype.buildTrickforcerHint = function () {
            var spritePosition = new Phaser.Point(Game.scale(gameConfig.GameConfig.pointValues.trickForcerHintPosition.x), Game.scale(gameConfig.GameConfig.pointValues.trickForcerHintPosition.y));
            var trickforcerHint = Game.game.add.sprite(spritePosition.x, spritePosition.y, "ui", "trickforcer-hint");
            trickforcerHint.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
        };
        InitTutorial.prototype.startGame = function () {
            events.Manager.levelEnd.fire({});
            events.Manager.unloadState.fire({});
            Game.game.state.start("GameState", true, false, gameConfig.GameConfig.numberValues.firstLevelIndex);
        };
        return InitTutorial;
    })();
    systems.InitTutorial = InitTutorial;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var Input = (function () {
        function Input() {
            this.bind();
        }
        Input.prototype.bind = function () {
            Game.game.input.keyboard.addCallbacks(this, this.onKeyDown, this.onKeyUp);
            if (!DEBUG_ENABLED)
                document.onkeydown = function (e) { e.preventDefault(); };
            events.Manager.levelEnd.addListener(this.unbind, this);
        };
        Input.prototype.unbind = function () {
            Game.game.input.keyboard.addCallbacks(this, function () { });
            events.Manager.levelEnd.removeListener(this.unbind, this);
        };
        Input.prototype.onKeyDown = function (e) {
            events.Manager.input.fire({
                key: e,
                state: gameConfig.KeyStates.Down
            });
        };
        Input.prototype.onKeyUp = function (e) {
            events.Manager.input.fire({
                key: e,
                state: gameConfig.KeyStates.Up
            });
        };
        Input.prototype.onKeyPress = function (e) {
            events.Manager.input.fire({
                key: e,
                state: gameConfig.KeyStates.Pressed
            });
        };
        return Input;
    })();
    systems.Input = Input;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var LevelManager = (function () {
        function LevelManager() {
            this.bind();
        }
        LevelManager.prototype.bind = function () {
            events.Manager.playerDied.addListener(this.delayedRestart, this);
            events.Manager.exitTrigger.addListener(this.delayedNextLevel, this);
            events.Manager.returnToMap.addListener(this.returnToMap, this);
            events.Manager.mapButtonPressed.addListener(this.mapButtonPress, this);
        };
        LevelManager.prototype.unbind = function () {
            events.Manager.playerDied.removeListener(this.delayedRestart, this);
            events.Manager.exitTrigger.removeListener(this.delayedNextLevel, this);
            events.Manager.returnToMap.removeListener(this.returnToMap, this);
            events.Manager.mapButtonPressed.removeListener(this.mapButtonPress, this);
        };
        LevelManager.prototype.doLevelEnd = function () {
            this.unbind();
            events.Manager.levelEnd.fire({});
        };
        LevelManager.prototype.delayedNextLevel = function () {
            var _this = this;
            this.doLevelEnd();
            if (containers.Game.currentLevelIndex >= gameConfig.GameConfig.numberValues.firstLevelIndex) {
                Game.game.time.events.add(Phaser.Timer.SECOND * gameConfig.GameConfig.numberValues.restartDelay, function () {
                    tools.UserSettingsHelper.setHighestCompletedLevel(containers.Game.currentLevelIndex);
                    Game.game.state.start("MapScreenState", true, false);
                });
            }
            else {
                Game.game.time.events.add(Phaser.Timer.SECOND * gameConfig.GameConfig.numberValues.restartDelay, function () {
                    tools.UserSettingsHelper.setHighestCompletedLevel(containers.Game.currentLevelIndex);
                    _this.startLevel(containers.Game.currentLevelIndex + 1);
                });
            }
        };
        LevelManager.prototype.delayedRestart = function () {
            var _this = this;
            this.doLevelEnd();
            Game.game.time.events.add(Phaser.Timer.SECOND * gameConfig.GameConfig.numberValues.deathDelay, function () { _this.startLevel(containers.Game.currentLevelIndex); });
        };
        LevelManager.prototype.startLevel = function (levelIdx) {
            events.Manager.unloadState.fire({});
            if (levelIdx <= gameConfig.GameConfig.levelList.length) {
                Game.game.state.start("GameState", true, false, levelIdx);
            }
            else {
                Game.game.state.start("TemporaryEndScreenState", true, false, levelIdx);
            }
        };
        LevelManager.prototype.returnToMap = function () {
            this.doLevelEnd();
            events.Manager.unloadState.fire({});
            if (containers.Game.currentLevelIndex === 1) {
                Game.game.state.start("SplashState", true, false);
            }
            else if (containers.Game.currentLevelIndex === 2 && tools.UserSettingsHelper.getUserSettings().highestCompletedLevel <= 2) {
                Game.game.state.start("GameState", true, false, 1);
            }
            else {
                Game.game.state.start("MapScreenState", true, false);
            }
        };
        LevelManager.prototype.mapButtonPress = function (data) {
            var _this = this;
            if (Game.pokiSDKLoaded) {
                var enableAfter = false;
                if (tools.UserSettingsHelper.currentUserSettings.soundEnabled) {
                    enableAfter = true;
                    events.Manager.mute.fire({});
                }
                PokiSDK.commercialBreak()
                    .then(function () {
                    if (enableAfter) {
                        events.Manager.unMute.fire({});
                        events.Manager.playMusic.fire({
                            clip: gameConfig.MusicConfig.musicKeys[gameConfig.MusicIndexes.MainMusic]
                        });
                    }
                    _this.startLevel(data.levelNumber);
                });
            }
            else {
                this.startLevel(data.levelNumber);
            }
        };
        return LevelManager;
    })();
    systems.LevelManager = LevelManager;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var MapScroll = (function () {
        function MapScroll() {
            this.scrollTween = null;
            this.scrollAfterComic = true;
            this.currentScrollTargetY = 0;
            window.onwheel = function (e) {
                e.preventDefault();
            };
            this.bind();
        }
        MapScroll.prototype.bind = function () {
            var _this = this;
            Game.game.input.mouse.mouseWheelCallback = function () { _this._handleMouseWheel(); };
            events.Manager.unloadState.addListener(this.unbind, this);
            events.Manager.comicEvent.addListener(this.comicStarted, this);
            events.Manager.noComicEvent.addListener(this.goToCurrentButton, this);
            events.Manager.comicEventEnd.addListener(this.scrollToCurrentButton, this);
            events.Manager.mapSliderDragged.addListener(this.dragUpdate, this);
        };
        MapScroll.prototype.unbind = function () {
            Game.game.input.mouse.mouseWheelCallback = null;
            events.Manager.unloadState.removeListener(this.unbind, this);
            events.Manager.comicEvent.removeListener(this.comicStarted, this);
            events.Manager.noComicEvent.removeListener(this.goToCurrentButton, this);
            events.Manager.comicEventEnd.removeListener(this.scrollToCurrentButton, this);
            events.Manager.mapSliderDragged.removeListener(this.dragUpdate, this);
        };
        MapScroll.prototype.comicStarted = function () {
            this.scrollAfterComic = true;
        };
        MapScroll.prototype.goToCurrentButton = function () {
            var _this = this;
            if (containers.Map.currentLevelIndex < 3) {
                Game.game.time.events.add(Phaser.Timer.SECOND * 4, function () {
                    _this.scrollToCurrentButton();
                });
                return;
            }
            var button = null;
            for (var i = 0; i < containers.Map.levelButtons.length; i++) {
                button = containers.Map.levelButtons[i];
                if (button.levelIndex === containers.Map.currentLevelIndex + 1) {
                    break;
                }
            }
            if (button !== null) {
                containers.Map.mapGroup.position.y = this.clampMapY(-button.button.y + Game.game.height / 2);
                this.setSlider();
            }
        };
        MapScroll.prototype.smoothScrollBy = function (increment) {
            this.smoothScrollTo(containers.Map.mapGroup.position.y + this.currentScrollTargetY + increment);
        };
        MapScroll.prototype.smoothScrollTo = function (targetY) {
            this.scrollAfterComic = false;
            targetY = this.clampMapY(targetY);
            this.scrollTween = Game.game.add.tween(containers.Map.mapGroup.position).to({
                y: targetY
            }, 300, Phaser.Easing.Circular.Out, true, 10).onUpdateCallback(this.setSlider);
        };
        MapScroll.prototype.smoothScrollToLevelButton = function (levelIdx) {
            var button = null;
            for (var i = 0; i < containers.Map.levelButtons.length; i++) {
                button = containers.Map.levelButtons[i];
                if (button.levelIndex === levelIdx + 1) {
                    break;
                }
            }
            if (button !== null) {
                this.smoothScrollTo(this.clampMapY(-button.button.y + Game.game.height / 2));
            }
        };
        MapScroll.prototype.scrollToCurrentButton = function () {
            if (this.scrollAfterComic) {
                this.smoothScrollToLevelButton(containers.Map.currentLevelIndex);
            }
        };
        MapScroll.prototype.setSlider = function () {
            var percentage = (containers.Map.mapGroup.y / Game.scale(mapConfig.MapConfig.numberValues.minMapY)) * 100;
            var targetY = containers.Map.scrollBar.y + ((containers.Map.scrollBar.height / 100) * percentage) - (containers.Map.scrollBar.height / 2);
            containers.Map.scrollSlider.y = targetY;
        };
        MapScroll.prototype.dragUpdate = function () {
            if (this.scrollTween !== null) {
                this.scrollTween.stop();
            }
            containers.Map.scrollSlider.x = containers.Map.scrollBar.x;
            containers.Map.scrollSlider.y = this.clamp(containers.Map.scrollBar.y - (containers.Map.scrollBar.height / 2), containers.Map.scrollBar.y + (containers.Map.scrollBar.height / 2), containers.Map.scrollSlider.y);
            var percentage = (containers.Map.scrollSlider.y - containers.Map.scrollBar.y + containers.Map.scrollBar.height * 0.5) / containers.Map.scrollBar.height;
            var targetY = mapConfig.MapConfig.numberValues.minMapY * percentage;
            containers.Map.mapGroup.y = Game.scale(targetY);
        };
        MapScroll.prototype.clampMapY = function (value) {
            return this.clamp(Game.scale(mapConfig.MapConfig.numberValues.minMapY), Game.scale(mapConfig.MapConfig.numberValues.maxMapY), value);
        };
        MapScroll.prototype.clamp = function (min, max, value) {
            return Math.min(Math.max(value, min), max);
        };
        MapScroll.prototype._handleMouseWheel = function () {
            if (Game.game.input.mouse.wheelDelta === Phaser.Mouse.WHEEL_UP) {
                this.smoothScrollBy(Game.scale(mapConfig.MapConfig.numberValues.mapScrollIncrement));
            }
            else if (Game.game.input.mouse.wheelDelta === Phaser.Mouse.WHEEL_DOWN) {
                this.smoothScrollBy(-Game.scale(mapConfig.MapConfig.numberValues.mapScrollIncrement));
            }
        };
        return MapScroll;
    })();
    systems.MapScroll = MapScroll;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var Mouse = (function () {
        function Mouse() {
            this.grounded = false;
            this.isMovingLeft = false;
            this.isMovingRight = false;
            this.isDead = false;
            this.resetVariables();
            this.bind();
        }
        Mouse.prototype.bind = function () {
            events.Manager.platformerInput.addListener(this.onMouseInput, this);
            events.Manager.update.addListener(this.update, this);
            events.Manager.mouseLevelCollision.addListener(this.onPotentialLanding, this);
            events.Manager.mouseWithWeaselCollision.addListener(this.onPotentialLanding, this);
            events.Manager.mouseBrittleBlockCollision.addListener(this.onPotentialLanding, this);
            events.Manager.mouseSinkBlockCollision.addListener(this.onPotentialLanding, this);
            events.Manager.mouseHeadbutted.addListener(this.receiveHeadbutt, this);
            events.Manager.levelEnd.addListener(this.levelEnd, this);
            events.Manager.unloadState.addListener(this.unbind, this);
            events.Manager.playerDied.addListener(this.die, this);
            events.Manager.levelStarted.addListener(this.onLevelStarted, this);
        };
        Mouse.prototype.unbind = function () {
            events.Manager.platformerInput.removeListener(this.onMouseInput, this);
            events.Manager.update.removeListener(this.update, this);
            events.Manager.mouseLevelCollision.removeListener(this.onPotentialLanding, this);
            events.Manager.mouseWithWeaselCollision.removeListener(this.onPotentialLanding, this);
            events.Manager.mouseBrittleBlockCollision.removeListener(this.onPotentialLanding, this);
            events.Manager.mouseSinkBlockCollision.removeListener(this.onPotentialLanding, this);
            events.Manager.mouseHeadbutted.removeListener(this.receiveHeadbutt, this);
            events.Manager.levelEnd.removeListener(this.levelEnd, this);
            events.Manager.unloadState.removeListener(this.unbind, this);
            events.Manager.playerDied.removeListener(this.die, this);
            events.Manager.levelStarted.removeListener(this.onLevelStarted, this);
        };
        Mouse.prototype.levelEnd = function () {
            this.resetVariables();
        };
        Mouse.prototype.resetVariables = function () {
            this.grounded = false;
            this.isMovingLeft = false;
            this.isMovingRight = false;
            this.scaledTileSilze = this.scaledTileSilze = tools.GridHelper.getScaledGridTileSize();
            this.isDead = false;
        };
        Mouse.prototype.die = function (data) {
            if (!data.isWeasel && !this.isDead) {
                this.isDead = true;
                var mouseSprite = containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite];
                Game.game.add.tween(mouseSprite).to({
                    alpha: 0
                }, 300, Phaser.Easing.Circular.Out, true);
                Game.game.add.tween(mouseSprite.scale).to({
                    x: 1.5 * mouseSprite.scale.x,
                    y: 1.5
                }, 300, Phaser.Easing.Circular.Out, true);
            }
        };
        Mouse.prototype.onPotentialLanding = function (data) {
            if (!this.grounded &&
                data.state == gameConfig.CollissionEvent.Enter &&
                data.mouseBody.y < data.otherBody.y - this.scaledTileSilze) {
                this.grounded = true;
                events.Manager.platformerLanding.fire({});
            }
        };
        Mouse.prototype.onLevelStarted = function (data) {
            this.setBodyToSpawnPosition();
        };
        Mouse.prototype.onMouseInput = function (data) {
            if (data.key == gameConfig.PlatformerKeys.Jump) {
                if (data.state == gameConfig.KeyStates.Down) {
                    this.jump();
                }
                else if (!this.grounded &&
                    data.state == gameConfig.KeyStates.Up) {
                    this.cancelJump();
                }
                return;
            }
            if (data.state == gameConfig.KeyStates.Down) {
                if (data.key == gameConfig.PlatformerKeys.Left) {
                    this.isMovingLeft = true;
                }
                else if (data.key == gameConfig.PlatformerKeys.Right) {
                    this.isMovingRight = true;
                }
            }
            else if (data.state == gameConfig.KeyStates.Up) {
                if (data.key == gameConfig.PlatformerKeys.Left) {
                    this.isMovingLeft = false;
                }
                else if (data.key == gameConfig.PlatformerKeys.Right) {
                    this.isMovingRight = false;
                }
            }
        };
        Mouse.prototype.move = function (direction) {
            var maxSpeed = Game.scale(gameConfig.GameConfig.numberValues.mouseMaxSpeed);
            containers.Game.mousePhysicsBody.body.velocity.x += direction.x * Game.scale(gameConfig.GameConfig.numberValues.mouseAcceleration);
            if (this.grounded) {
                events.Manager.platformerRunning.fire({});
            }
            if (Math.abs(containers.Game.mousePhysicsBody.body.velocity.x) > maxSpeed) {
                if (containers.Game.mousePhysicsBody.body.velocity.x < 0) {
                    containers.Game.mousePhysicsBody.body.velocity.x = -maxSpeed;
                }
                else {
                    containers.Game.mousePhysicsBody.body.velocity.x = maxSpeed;
                }
            }
        };
        Mouse.prototype.jump = function () {
            if (!this.grounded)
                return;
            events.Manager.platformerJumped.fire({});
            if (containers.Game.mousePhysicsBody.body.velocity.y > 0) {
                containers.Game.mousePhysicsBody.body.velocity.y += -Game.scale(gameConfig.GameConfig.numberValues.mouseJumpForce);
            }
            else {
                containers.Game.mousePhysicsBody.body.velocity.y = -Game.scale(gameConfig.GameConfig.numberValues.mouseJumpForce);
            }
            this.grounded = false;
        };
        Mouse.prototype.cancelJump = function () {
            if (containers.Game.mousePhysicsBody.body.velocity.y < 0) {
                containers.Game.mousePhysicsBody.body.velocity.y *= gameConfig.GameConfig.numberValues.mouseJumpCancelFactor;
            }
        };
        Mouse.prototype.setBodyToSpawnPosition = function () {
            containers.Game.mousePhysicsBody.position.set(containers.Game.currentLevel.mouseSpawnPosition.x * this.scaledGridTileSize(), containers.Game.currentLevel.mouseSpawnPosition.y * this.scaledGridTileSize());
            containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].anchor = gameConfig.GameConfig.pointValues.anchorCenter;
        };
        Mouse.prototype.scaledGridTileSize = function () {
            return tools.GridHelper.getScaledGridTileSize();
        };
        Mouse.prototype.receiveHeadbutt = function (data) {
            containers.Game.mousePhysicsBody.body.velocity.x += data.direction.x * gameConfig.GameConfig.numberValues.weaselHeadBobForce;
            if (data.direction.y < 0) {
                if (containers.Game.mousePhysicsBody.body.velocity.y > 0) {
                    containers.Game.mousePhysicsBody.body.velocity.y += data.direction.y * gameConfig.GameConfig.numberValues.weaselHeadBobForce;
                }
                else {
                    containers.Game.mousePhysicsBody.body.velocity.y = data.direction.y * gameConfig.GameConfig.numberValues.weaselHeadBobForce;
                }
            }
        };
        Mouse.prototype.applyHorizontalForces = function () {
            if (this.isMovingLeft && this.isMovingRight) {
                return;
            }
            if (this.isMovingLeft) {
                this.move(gameConfig.GameConfig.pointValues.directionLeft);
            }
            else if (this.isMovingRight) {
                this.move(gameConfig.GameConfig.pointValues.directionRight);
            }
        };
        Mouse.prototype.applyFriction = function () {
            if (this.grounded) {
                containers.Game.mousePhysicsBody.body.velocity.x *= gameConfig.GameConfig.numberValues.mouseGroundFrictionFactor;
            }
            else {
                containers.Game.mousePhysicsBody.body.velocity.x *= gameConfig.GameConfig.numberValues.mouseAirHorizontalFrictionFactor;
            }
        };
        Mouse.prototype.setSpritePositions = function () {
            containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].position.set(containers.Game.mousePhysicsBody.x + Game.scale(gameConfig.GameConfig.pointValues.mouseColliderAndSpriteOffset.x), containers.Game.mousePhysicsBody.y + Game.scale(gameConfig.GameConfig.pointValues.mouseColliderAndSpriteOffset.y));
        };
        Mouse.prototype.checkIfNotGrounded = function () {
            if (Math.abs(containers.Game.mousePhysicsBody.body.velocity.y) > gameConfig.GameConfig.numberValues.minMovementVelocity) {
                this.grounded = false;
            }
        };
        Mouse.prototype.updateGridPosition = function () {
            containers.Game.currentLevel.mouseGridPosition.set(Math.round(containers.Game.mousePhysicsBody.x / this.scaledTileSilze), Math.round(containers.Game.mousePhysicsBody.y / this.scaledTileSilze));
        };
        Mouse.prototype.checkFallThroughWeasel = function () {
            if (tools.GridHelper.isOverlapping(containers.Game.currentLevel.weaselBlocks[0].gridPosition, containers.Game.mousePhysicsBody, gameConfig.GameConfig.numberValues.weaselCheckMouseIsBlockingYScale, gameConfig.GameConfig.numberValues.weaselCheckMouseIsBlockingYScale)) {
                containers.Game.mousePhysicsBody.body.velocity.y = 0;
                this.receiveHeadbutt({
                    direction: new Phaser.Point(0, -1)
                });
            }
        };
        Mouse.prototype.update = function () {
            if (containers.Game.mousePhysicsBody.body === null) {
                return;
            }
            this.checkIfNotGrounded();
            this.applyFriction();
            this.setSpritePositions();
            this.applyHorizontalForces();
            this.updateGridPosition();
            this.checkFallThroughWeasel();
        };
        return Mouse;
    })();
    systems.Mouse = Mouse;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var MouseAnimation = (function () {
        function MouseAnimation() {
            this.loadAnimations();
            this.bind();
        }
        MouseAnimation.prototype.bind = function () {
            events.Manager.update.addListener(this.onUpdate, this);
            events.Manager.levelEnd.addListener(this.onPlatformerIdle, this);
            events.Manager.platformerJumped.addListener(this.onJump, this);
            events.Manager.platformerFalling.addListener(this.onFalling, this);
            events.Manager.platformerLanding.addListener(this.onLanding, this);
            events.Manager.platformerRunning.addListener(this.onPlatformerRunning, this);
            events.Manager.platformerIdle.addListener(this.onPlatformerIdle, this);
            events.Manager.levelEnd.addListener(this.unbind, this);
        };
        MouseAnimation.prototype.unbind = function () {
            events.Manager.update.removeListener(this.onUpdate, this);
            events.Manager.levelEnd.removeListener(this.onPlatformerIdle, this);
            events.Manager.platformerJumped.removeListener(this.onJump, this);
            events.Manager.platformerFalling.removeListener(this.onFalling, this);
            events.Manager.platformerLanding.removeListener(this.onLanding, this);
            events.Manager.platformerRunning.removeListener(this.onPlatformerRunning, this);
            events.Manager.platformerIdle.removeListener(this.onPlatformerIdle, this);
            events.Manager.levelEnd.removeListener(this.unbind, this);
        };
        MouseAnimation.prototype.onUpdate = function (data) {
            if (containers.Game.mousePhysicsBody.body.velocity.y >= gameConfig.GameConfig.numberValues.minMovementVelocity && !containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].animations.getAnimation(gameConfig.GameConfig.mouseAnimations.fall.name).isPlaying) {
                events.Manager.platformerFalling.fire({});
            }
            if (containers.Game.mousePhysicsBody.body.velocity.x < 10 && containers.Game.mousePhysicsBody.body.velocity.x > -10 && containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].animations.getAnimation(gameConfig.GameConfig.mouseAnimations.run.name).isPlaying) {
                events.Manager.platformerIdle.fire({});
            }
            if (containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].animations.currentAnim.name == gameConfig.GameConfig.mouseAnimations.idle.name) {
                if (Math.random() < 0.007) {
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].animations.play(gameConfig.GameConfig.mouseAnimations.blink.name);
                    Game.game.time.events.add(200, function () {
                        if (containers.Game.mousePhysicsBody.body.velocity.x < 10 && containers.Game.mousePhysicsBody.body.velocity.x > -10) {
                            events.Manager.platformerIdle.fire({});
                        }
                    });
                }
            }
            if (containers.Game.mousePhysicsBody.body.velocity.x < 0 &&
                containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].scale.x > 0) {
                containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].scale.x *= -1;
                return;
            }
            if (containers.Game.mousePhysicsBody.body.velocity.x > 0 &&
                containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].scale.x < 0) {
                containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].scale.x *= -1;
                return;
            }
        };
        MouseAnimation.prototype.onJump = function (data) {
            containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].animations.play(gameConfig.GameConfig.mouseAnimations.jump.name);
        };
        MouseAnimation.prototype.onFalling = function (data) {
            containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].animations.play(gameConfig.GameConfig.mouseAnimations.fall.name);
        };
        MouseAnimation.prototype.onLanding = function (data) {
            containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].animations.play(gameConfig.GameConfig.mouseAnimations.land.name).onComplete.add(function () {
                events.Manager.platformerIdle.fire({});
            });
        };
        MouseAnimation.prototype.onPlatformerRunning = function (data) {
            if (!containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].animations.getAnimation(gameConfig.GameConfig.mouseAnimations.run.name).isPlaying) {
                Game.game.time.events.add(10, function () {
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].animations.play(gameConfig.GameConfig.mouseAnimations.run.name);
                });
            }
        };
        MouseAnimation.prototype.onPlatformerIdle = function (data) {
            // if(containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].animations.currentAnim.name == gameConfig.GameConfig.mouseAnimations.idle.name){
            containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].animations.play(gameConfig.GameConfig.mouseAnimations.idle.name);
        };
        MouseAnimation.prototype.loadAnimations = function () {
            for (var key in gameConfig.GameConfig.mouseAnimations) {
                if (gameConfig.GameConfig.mouseAnimations.hasOwnProperty(key)) {
                    var animationNames = [];
                    for (var i = 1; i < gameConfig.GameConfig.mouseAnimations[key].frameAmount + 1; i++) {
                        animationNames.push(gameConfig.GameConfig.stringValues.mouseFramesFolder + gameConfig.GameConfig.mouseAnimations[key].name + i);
                    }
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.MouseSprite].animations.add(gameConfig.GameConfig.mouseAnimations[key].name, animationNames, gameConfig.GameConfig.mouseAnimations[key].frameRate, gameConfig.GameConfig.mouseAnimations[key].loop);
                }
            }
        };
        return MouseAnimation;
    })();
    systems.MouseAnimation = MouseAnimation;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var OutOfBounds = (function () {
        function OutOfBounds() {
            this.check = true;
            this.bind();
        }
        OutOfBounds.prototype.bind = function () {
            events.Manager.update.addListener(this.update, this);
            events.Manager.levelEnd.addListener(this.unbind, this);
        };
        OutOfBounds.prototype.unbind = function () {
            events.Manager.update.removeListener(this.update, this);
            events.Manager.levelEnd.removeListener(this.unbind, this);
        };
        OutOfBounds.prototype.update = function () {
            if (!this.check) {
                return;
            }
            if (containers.Game.mousePhysicsBody.x < 0 ||
                containers.Game.mousePhysicsBody.x > Game.dimensions.width ||
                containers.Game.mousePhysicsBody.y < 0 ||
                containers.Game.mousePhysicsBody.y > Game.dimensions.height) {
                this.check = true;
                events.Manager.playerDied.fire({
                    isWeasel: false
                });
                return;
            }
            if (containers.Game.weaselSegmentPhysicsBodies[0].x < 0 ||
                containers.Game.weaselSegmentPhysicsBodies[0].x > Game.dimensions.width ||
                containers.Game.weaselSegmentPhysicsBodies[0].y < 0 ||
                containers.Game.weaselSegmentPhysicsBodies[0].y > Game.dimensions.height) {
                this.check = true;
                events.Manager.playerDied.fire({
                    isWeasel: true
                });
                return;
            }
        };
        return OutOfBounds;
    })();
    systems.OutOfBounds = OutOfBounds;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var ParseLevelData = (function () {
        function ParseLevelData() {
            containers.Game.currentLevel = tools.LevelParser.parseLevelFromRawData(Game.game.cache.getJSON(gameConfig.GameConfig.stringValues.levelPrefix + containers.Game.currentLevelIndex));
        }
        return ParseLevelData;
    })();
    systems.ParseLevelData = ParseLevelData;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var PhysicsSystem = (function () {
        function PhysicsSystem() {
            this.levelMouseCollisions = [];
            this.brittleMouseCollisions = [];
            this.mouseAndWeaselCollisions = [];
            this.sinkBlockMouseCollissions = [];
            this.scaledTileSize = tools.GridHelper.getScaledGridTileSize();
            this.weaselCollidersAreDirty = true;
            this.createBrittleBlockBodies();
            this.createWeaselBodies();
            this.createMouseBody();
            this.createLevelBlockBodies();
            this.createSinkBlockBodies();
            this.bind();
        }
        PhysicsSystem.prototype.bind = function () {
            events.Manager.weaselMoved.addListener(this.updateWeaselColliders, this);
            events.Manager.update.addListener(this.doMouseCollisions, this);
            events.Manager.unloadState.addListener(this.unbind, this);
        };
        PhysicsSystem.prototype.unbind = function () {
            events.Manager.weaselMoved.removeListener(this.updateWeaselColliders, this);
            events.Manager.update.removeListener(this.doMouseCollisions, this);
            events.Manager.unloadState.removeListener(this.unbind, this);
            this.destroyAllBodies();
        };
        PhysicsSystem.prototype.destroyAllBodies = function () {
            this.destroyLevelBodies();
            for (var i = 0; i < containers.Game.weaselSegmentPhysicsBodies.length; i++) {
                containers.Game.weaselSegmentPhysicsBodies[i].destroy();
            }
            containers.Game.mousePhysicsBody.destroy();
        };
        PhysicsSystem.prototype.createLevelBlockBodies = function () {
            for (var i = 0; i < containers.Game.currentLevel.levelBlocks.length; i++) {
                var blockData = containers.Game.currentLevel.levelBlocks[i];
                var sprite = util.Sprite.createSprite(this.scaledTileSize, this.scaledTileSize);
                Game.game.add.existing(sprite);
                sprite.alpha = 0;
                sprite.position.set(blockData.gridPosition.x * this.scaledTileSize, blockData.gridPosition.y * this.scaledTileSize);
                sprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                this.createDefaultLevelBody(sprite);
                this.setCollidersOfBodyByNeighbourConfig(sprite.body, blockData.neighbourConfig);
                containers.Game.blockPhysicBodies.push(sprite);
            }
        };
        PhysicsSystem.prototype.createDefaultLevelBody = function (sprite) {
            Game.game.physics.arcade.enable(sprite);
            sprite.body.allowGravity = gameConfig.GameConfig.booleanValues.levelBlockGravity;
            sprite.body.immovable = !gameConfig.GameConfig.booleanValues.levelBlockMovement;
            sprite.body.friction = gameConfig.GameConfig.pointValues.defaultFriction;
        };
        PhysicsSystem.prototype.setCollidersOfBodyByNeighbourConfig = function (body, neighbourConfig) {
            body.checkCollision.up = neighbourConfig[1] !== "1";
            body.checkCollision.down = neighbourConfig[5] !== "1";
            body.checkCollision.left = neighbourConfig[7] !== "1";
            body.checkCollision.right = neighbourConfig[3] !== "1";
        };
        PhysicsSystem.prototype.createBrittleBlockBodies = function () {
            for (var i = 0; i < containers.Game.brittleBlockPhysicsBodies.length; i++) {
                this.createDefaultLevelBody(containers.Game.brittleBlockPhysicsBodies[i]);
            }
        };
        PhysicsSystem.prototype.destroyLevelBodies = function () {
            var tmpSetsToIterate = [
                containers.Game.blockPhysicBodies,
                containers.Game.brittleBlockPhysicsBodies
            ];
            for (var i = 0; i < tmpSetsToIterate.length; i++) {
                for (var j = 0; j < tmpSetsToIterate[i].length; j++) {
                    tmpSetsToIterate[i][j].destroy();
                }
            }
        };
        PhysicsSystem.prototype.createWeaselBodies = function () {
            containers.Game.weaselSegmentPhysicsBodies = [];
            var tmpSprite;
            for (var i = 0; i < containers.Game.currentLevel.weaselBlocks.length; i++) {
                var tmpSprite = util.Sprite.createSprite(Game.scale(gameConfig.GameConfig.pointValues.weaselPartColliderSize.x), Game.scale(gameConfig.GameConfig.pointValues.weaselPartColliderSize.y), { r: 0, g: 0, b: 0 });
                tmpSprite.alpha = 0;
                tmpSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                Game.game.physics.arcade.enable(tmpSprite);
                tmpSprite.body.friction = gameConfig.GameConfig.pointValues.defaultFriction;
                tmpSprite.body.allowGravity = gameConfig.GameConfig.booleanValues.weaselGravity;
                tmpSprite.body.immovable = !gameConfig.GameConfig.booleanValues.weaselMovement;
                containers.Game.weaselSegmentPhysicsBodies.push(tmpSprite);
                Game.game.add.existing(tmpSprite);
            }
        };
        PhysicsSystem.prototype.createMouseBody = function () {
            var tmpSprite = util.Sprite.createSprite(Game.scale(gameConfig.GameConfig.pointValues.mouseColliderSize.x), Game.scale(gameConfig.GameConfig.pointValues.mouseColliderSize.y), { r: 0, g: 0, b: 0 });
            tmpSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
            tmpSprite.alpha = 0;
            Game.game.physics.enable(tmpSprite);
            tmpSprite.body.allowGravity = gameConfig.GameConfig.booleanValues.mouseGravity;
            tmpSprite.body.gravity.y = Game.scale(gameConfig.GameConfig.numberValues.gravity);
            tmpSprite.body.immovable = !gameConfig.GameConfig.booleanValues.mouseMovement;
            tmpSprite.body.friction = gameConfig.GameConfig.pointValues.defaultFriction;
            containers.Game.mousePhysicsBody = tmpSprite;
            Game.game.add.existing(tmpSprite);
        };
        PhysicsSystem.prototype.createSinkBlockBodies = function () {
            for (var i = 0; i < containers.Game.sinkblockVisuals.length; i++) {
                var sinkblockVisuals = containers.Game.sinkblockVisuals[i];
                var physicsBody = util.Sprite.createSprite(this.scaledTileSize, this.scaledTileSize);
                Game.game.add.existing(physicsBody);
                this.createDefaultLevelBody(physicsBody);
                physicsBody.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                physicsBody.position.set(sinkblockVisuals.position.x, sinkblockVisuals.position.y);
                sinkblockVisuals.physicsBody = physicsBody;
                if (sinkblockVisuals.startOpen) {
                    sinkblockVisuals.physicsBody.body.enable = false;
                }
                this.setCollidersOfBodyByNeighbourConfig(physicsBody.body, tools.GridHelper.getNeighbourConfig(sinkblockVisuals.gridPosition, containers.Game.sinkblockVisuals));
                containers.Game.sinkBlockPhysicsBodies.push(physicsBody);
            }
        };
        PhysicsSystem.prototype.doMouseCollisions = function () {
            this.doMouseCollision(this.levelMouseCollisions, containers.Game.mousePhysicsBody, containers.Game.blockPhysicBodies, events.Manager.mouseLevelCollision);
            this.doMouseCollision(this.brittleMouseCollisions, containers.Game.mousePhysicsBody, containers.Game.brittleBlockPhysicsBodies, events.Manager.mouseBrittleBlockCollision);
            this.doMouseCollision(this.mouseAndWeaselCollisions, containers.Game.mousePhysicsBody, containers.Game.weaselSegmentPhysicsBodies, events.Manager.mouseWithWeaselCollision);
            var sinkBlockSprites = [];
            for (var i = 0; i < containers.Game.sinkblockVisuals.length; i++) {
                sinkBlockSprites.push(containers.Game.sinkblockVisuals[i].physicsBody);
            }
            this.doMouseCollision(this.sinkBlockMouseCollissions, containers.Game.mousePhysicsBody, sinkBlockSprites, events.Manager.mouseSinkBlockCollision);
        };
        PhysicsSystem.prototype.doMouseCollision = function (collisionArrayToCompare, mouseBody, collisionBodiesB, eventToFire) {
            var tmpMouseLevelCollisions = [];
            var tmpCollision;
            Game.game.physics.arcade.collide(mouseBody, collisionBodiesB, function (mouseSprite, bodyB) {
                tmpMouseLevelCollisions.push({
                    bodyA: mouseSprite,
                    bodyB: bodyB
                });
            });
            for (var i = 0; i < tmpMouseLevelCollisions.length; i++) {
                tmpCollision = tmpMouseLevelCollisions[i];
                if (!this.isInCollissionArray(collisionArrayToCompare, tmpCollision)) {
                    eventToFire.fire({
                        mouseBody: tmpCollision.bodyA,
                        otherBody: tmpCollision.bodyB,
                        state: gameConfig.CollissionEvent.Enter
                    });
                }
            }
            for (var j = 0; j < collisionArrayToCompare.length; j++) {
                if (!this.isInCollissionArray(tmpMouseLevelCollisions, collisionArrayToCompare[j])) {
                    eventToFire.fire({
                        mouseBody: collisionArrayToCompare[j].bodyA,
                        otherBody: collisionArrayToCompare[j].bodyB,
                        state: gameConfig.CollissionEvent.Exit
                    });
                }
            }
            collisionArrayToCompare.length = 0;
            collisionArrayToCompare.push.apply(collisionArrayToCompare, tmpMouseLevelCollisions);
        };
        PhysicsSystem.prototype.isInCollissionArray = function (collissionArray, collision) {
            for (var i = 0; i < collissionArray.length; i++) {
                if (collissionArray[i].bodyA == collision.bodyA &&
                    collissionArray[i].bodyB == collision.bodyB) {
                    return true;
                }
            }
            return false;
        };
        PhysicsSystem.prototype.updateWeaselColliders = function () {
            var tmpInstanceOfBody;
            var tmpInstanceOfWeaselPartData;
            for (var i = 0; i < containers.Game.weaselSegmentPhysicsBodies.length; i++) {
                tmpInstanceOfBody = containers.Game.weaselSegmentPhysicsBodies[i];
                tmpInstanceOfWeaselPartData = containers.Game.currentLevel.weaselBlocks[i].gridPosition;
                tmpInstanceOfBody.position.set(tmpInstanceOfWeaselPartData.x * this.scaledTileSize, tmpInstanceOfWeaselPartData.y * this.scaledTileSize);
                this.setCollidersOfBodyByNeighbourConfig(tmpInstanceOfBody.body, tools.GridHelper.getNeighbourConfig(tmpInstanceOfWeaselPartData, containers.Game.currentLevel.weaselBlocks));
            }
        };
        return PhysicsSystem;
    })();
    systems.PhysicsSystem = PhysicsSystem;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var PlatformerInput = (function () {
        function PlatformerInput() {
            this.bind();
        }
        PlatformerInput.prototype.bind = function () {
            events.Manager.input.addListener(this.processInput, this);
            events.Manager.levelEnd.addListener(this.unbind, this);
        };
        PlatformerInput.prototype.unbind = function () {
            events.Manager.input.removeListener(this.processInput, this);
            events.Manager.levelEnd.removeListener(this.unbind, this);
        };
        PlatformerInput.prototype.processInput = function (data) {
            for (var i = 0; i < gameConfig.GameConfig.playerControls.mouseLeft.length; i++) {
                if (data.key.keyCode == gameConfig.GameConfig.playerControls.mouseLeft[i].keyCode) {
                    events.Manager.platformerInput.fire({
                        key: gameConfig.PlatformerKeys.Left,
                        state: data.state
                    });
                }
            }
            for (var i = 0; i < gameConfig.GameConfig.playerControls.mouseRight.length; i++) {
                if (data.key.keyCode == gameConfig.GameConfig.playerControls.mouseRight[i].keyCode) {
                    events.Manager.platformerInput.fire({
                        key: gameConfig.PlatformerKeys.Right,
                        state: data.state
                    });
                }
            }
            for (var i = 0; i < gameConfig.GameConfig.playerControls.mouseUp.length; i++) {
                if (data.key.keyCode == gameConfig.GameConfig.playerControls.mouseUp[i].keyCode) {
                    events.Manager.platformerInput.fire({
                        key: gameConfig.PlatformerKeys.Jump,
                        state: data.state
                    });
                }
            }
        };
        return PlatformerInput;
    })();
    systems.PlatformerInput = PlatformerInput;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var ScreenShake = (function () {
        function ScreenShake() {
            this.bind();
            this._setBounds(new Phaser.Rectangle(0, 0, Game.dimensions.width * 1.4, Game.dimensions.height * 1.4));
        }
        ScreenShake.prototype.bind = function () {
            events.Manager.playerDied.addListener(this.screenShake, this);
            events.Manager.finalScreenShake.addListener(this.finalScreenShake, this);
            events.Manager.unloadState.addListener(this.unbind, this);
        };
        ScreenShake.prototype.unbind = function () {
            events.Manager.playerDied.removeListener(this.screenShake, this);
            events.Manager.finalScreenShake.removeListener(this.finalScreenShake, this);
            events.Manager.unloadState.removeListener(this.unbind, this);
        };
        ScreenShake.prototype.screenShake = function () {
            tools.ScreenShakeHelper.doScreenShake(10, 8, 30);
        };
        ScreenShake.prototype.finalScreenShake = function () {
            tools.ScreenShakeHelper.doScreenShake(10, 16, 100);
        };
        ScreenShake.prototype._setBounds = function (bounds) {
            Game.game.world.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
            Game.game.camera.bounds.setTo(bounds.x, bounds.y, bounds.width, bounds.height);
        };
        return ScreenShake;
    })();
    systems.ScreenShake = ScreenShake;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var SetCurrentWorld = (function () {
        function SetCurrentWorld() {
            for (var j = 0; j < gameConfig.GameConfig.nextWorldIndexes.length; j++) {
                if (containers.Game.currentLevelIndex < gameConfig.GameConfig.nextWorldIndexes[j]) {
                    containers.Game.currentWorldIndex = j;
                    return;
                }
            }
            containers.Game.currentWorldIndex = j;
        }
        return SetCurrentWorld;
    })();
    systems.SetCurrentWorld = SetCurrentWorld;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var Sinkblock = (function () {
        function Sinkblock() {
            this.bind();
        }
        Sinkblock.prototype.bind = function () {
            events.Manager.buttonTrigger.addListener(this.sinkBlockTriggered, this);
            events.Manager.levelEnd.addListener(this.unbind, this);
        };
        Sinkblock.prototype.unbind = function () {
            events.Manager.buttonTrigger.removeListener(this.sinkBlockTriggered, this);
            events.Manager.levelEnd.removeListener(this.unbind, this);
        };
        Sinkblock.prototype.sinkBlockTriggered = function (data) {
            var sinkBlocks = containers.Game.currentLevel.sinkBlocks;
            for (var i = 0; i < sinkBlocks.length; i++) {
                var sinkBlock = sinkBlocks[i];
                if (sinkBlock.name == data.name) {
                    if (data.state == gameConfig.TriggerEvent.Enter) {
                        sinkBlock.triggerCount++;
                    }
                    else if (data.state == gameConfig.TriggerEvent.Exit) {
                        sinkBlock.triggerCount--;
                    }
                }
            }
            var sinkblockVisuals = containers.Game.sinkblockVisuals;
            for (var i = 0; i < sinkblockVisuals.length; i++) {
                var sinkblockVisual = sinkblockVisuals[i];
                if (sinkblockVisual.triggerCount > 0) {
                    if (!sinkblockVisual.startOpen && !sinkblockVisual.isOpen) {
                        this.sinkBlockOpen(sinkblockVisual);
                    }
                    else if (sinkblockVisual.startOpen && sinkblockVisual.isOpen) {
                        this.sinkBlockClose(sinkblockVisual);
                    }
                }
                if (sinkblockVisual.triggerCount == 0) {
                    if (!sinkblockVisual.startOpen && sinkblockVisual.isOpen) {
                        this.sinkBlockClose(sinkblockVisual);
                    }
                    else if (sinkblockVisual.startOpen && !sinkblockVisual.isOpen) {
                        this.sinkBlockOpen(sinkblockVisual);
                    }
                }
            }
        };
        Sinkblock.prototype.sinkBlockOpen = function (sinkblockVisual) {
            this.tweenOpen(sinkblockVisual.sprite);
            sinkblockVisual.isOpen = true;
            sinkblockVisual.physicsBody.body.enable = false;
            events.Manager.sinkBlockChanged.fire({});
            events.Manager.playSound.fire({ clip: gameConfig.SoundEffectConfig.soundKeys[gameConfig.SoundEffectIndexes.ButtonVariant3] });
        };
        Sinkblock.prototype.sinkBlockClose = function (sinkblockVisual) {
            events.Manager.playSound.fire({ clip: gameConfig.SoundEffectConfig.soundKeys[gameConfig.SoundEffectIndexes.ButtonVariant3] });
            this.tweenClose(sinkblockVisual.sprite, function () {
                var sinkBlockBounds = sinkblockVisual.sprite.getBounds();
                var scaleFactor = .8;
                var newX = sinkBlockBounds.x + sinkBlockBounds.width * (1 - scaleFactor) * .5;
                var newY = sinkBlockBounds.y + sinkBlockBounds.height * (1 - scaleFactor) * .5;
                sinkBlockBounds.width *= scaleFactor;
                sinkBlockBounds.height *= scaleFactor;
                sinkBlockBounds.x = newX;
                sinkBlockBounds.y = newY;
                if (Phaser.Rectangle.intersects(sinkBlockBounds, containers.Game.mousePhysicsBody.getBounds())) {
                    events.Manager.playerDied.fire({
                        isWeasel: false
                    });
                    return;
                }
                for (var i = 0; i < containers.Game.weaselSegmentPhysicsBodies.length; i++) {
                    if (Phaser.Rectangle.intersects(sinkBlockBounds, containers.Game.weaselSegmentPhysicsBodies[i].getBounds())) {
                        events.Manager.playerDied.fire({
                            isWeasel: true
                        });
                        return;
                    }
                }
            });
            sinkblockVisual.isOpen = false;
            sinkblockVisual.physicsBody.body.enable = true;
            events.Manager.sinkBlockChanged.fire({});
        };
        Sinkblock.prototype.tweenOpen = function (sprite) {
            Game.game.add.tween(sprite.scale).to({
                x: 0,
                y: 0
            }, gameConfig.GameConfig.numberValues.sinkblockSpeed * Phaser.Timer.SECOND, Phaser.Easing.Elastic.Out, true);
            Game.game.add.tween(sprite).to({
                alpha: 0
            }, gameConfig.GameConfig.numberValues.sinkblockSpeed * Phaser.Timer.SECOND, Phaser.Easing.Exponential.Out, true);
        };
        Sinkblock.prototype.tweenClose = function (sprite, onComplete) {
            var tween = Game.game.add.tween(sprite.scale).to({
                x: 1,
                y: 1
            }, gameConfig.GameConfig.numberValues.sinkblockSpeed * Phaser.Timer.SECOND, Phaser.Easing.Elastic.Out, true);
            Game.game.add.tween(sprite).to({
                alpha: 1
            }, gameConfig.GameConfig.numberValues.sinkblockSpeed * Phaser.Timer.SECOND, Phaser.Easing.Exponential.Out, true);
            tween.onComplete.add(onComplete);
        };
        return Sinkblock;
    })();
    systems.Sinkblock = Sinkblock;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var Sound = (function () {
        function Sound() {
            this.bind();
            if (tools.UserSettingsHelper.getUserSettings().soundEnabled) {
                util.Sound.unMute();
            }
            else {
                util.Sound.mute();
            }
        }
        Sound.prototype.bind = function () {
            events.Manager.playSound.addListener(this.playSound, this);
            events.Manager.playMusic.addListener(this.playMusic, this);
            events.Manager.mute.addListener(this.mute, this);
            events.Manager.unMute.addListener(this.unmute, this);
            events.Manager.unloadState.addListener(this.unbind, this);
        };
        Sound.prototype.unbind = function () {
            events.Manager.playSound.removeListener(this.playSound, this);
            events.Manager.playMusic.removeListener(this.playMusic, this);
            events.Manager.mute.removeListener(this.mute, this);
            events.Manager.unMute.removeListener(this.unmute, this);
            events.Manager.unloadState.removeListener(this.unbind, this);
        };
        Sound.prototype.playMusic = function (data) {
            util.Sound.playMusic(data.clip, true);
        };
        Sound.prototype.playSound = function (data) {
            util.Sound.playFx(data.clip);
        };
        Sound.prototype.mute = function () {
            util.Sound.mute();
        };
        Sound.prototype.unmute = function () {
            util.Sound.unMute();
        };
        return Sound;
    })();
    systems.Sound = Sound;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var SoundRelay = (function () {
        function SoundRelay() {
            this.mouseMovedTimer = 0;
            this.mouseMovedInterval = 0.3;
            this.bind();
        }
        SoundRelay.prototype.bind = function () {
            events.Manager.weaselMoved.addListener(this.weaselMoved, this);
            events.Manager.platformerJumped.addListener(this.platformerJumped, this);
            events.Manager.platformerRunning.addListener(this.platformerRunning, this);
            events.Manager.update.addListener(this.update, this);
            events.Manager.exitTrigger.addListener(this.levelEnd, this);
            events.Manager.unloadState.addListener(this.unbind, this);
        };
        SoundRelay.prototype.unbind = function () {
            events.Manager.weaselMoved.removeListener(this.weaselMoved, this);
            events.Manager.platformerJumped.removeListener(this.platformerJumped, this);
            events.Manager.platformerRunning.removeListener(this.platformerRunning, this);
            events.Manager.update.removeListener(this.update, this);
            events.Manager.exitTrigger.removeListener(this.levelEnd, this);
            events.Manager.unloadState.removeListener(this.unbind, this);
        };
        SoundRelay.prototype.update = function (data) {
            if (this.mouseMovedTimer > 0) {
                this.mouseMovedTimer -= data.deltaTime;
            }
        };
        SoundRelay.prototype.platformerRunning = function (data) {
            if (this.mouseMovedTimer <= 0) {
                this.mouseMovedTimer = this.mouseMovedInterval;
                events.Manager.playSound.fire({
                    clip: gameConfig.SoundEffectConfig.mouseMovedKeys[Math.round(Math.random() * (gameConfig.SoundEffectConfig.mouseMovedKeys.length - 1))]
                });
            }
        };
        SoundRelay.prototype.weaselMoved = function (data) {
            events.Manager.playSound.fire({
                clip: gameConfig.SoundEffectConfig.weaselMovedKeys[Math.round(Math.random() * (gameConfig.SoundEffectConfig.weaselMovedKeys.length - 1))]
            });
        };
        SoundRelay.prototype.mouseHeadbutted = function (data) {
            events.Manager.playSound.fire({
                clip: gameConfig.SoundEffectConfig.soundKeys[gameConfig.SoundEffectIndexes.WeaselBlocked]
            });
        };
        SoundRelay.prototype.levelEnd = function () {
            events.Manager.playSound.fire({
                clip: gameConfig.SoundEffectConfig.soundKeys[gameConfig.SoundEffectIndexes.LevelComplete]
            });
        };
        SoundRelay.prototype.playerDied = function (data) {
            events.Manager.playSound.fire({
                clip: gameConfig.SoundEffectConfig.soundKeys[gameConfig.SoundEffectIndexes.Failed]
            });
        };
        SoundRelay.prototype.platformerJumped = function (data) {
            events.Manager.playSound.fire({
                clip: gameConfig.SoundEffectConfig.soundKeys[gameConfig.SoundEffectIndexes.Jump]
            });
        };
        return SoundRelay;
    })();
    systems.SoundRelay = SoundRelay;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var StorySystem = (function () {
        function StorySystem() {
            var _this = this;
            this.duration = 3000;
            this.started = null;
            if (tools.UserSettingsHelper.getUserSettings().gameCompleted) {
                var sprite = Game.game.add.sprite(0, 0, mapConfig.MapConfig.folder, "endscreen");
                containers.Map.mapGroup.add(sprite);
                return;
            }
            this.bind();
            var mushroomKeys = Object.keys(gameConfig.GameConfig.mushroomConfig);
            for (var i = gameConfig.KingRoeIllStagesOfSickness.Count - 1; i >= 0; i--) {
                if (gameConfig.GameConfig.mushroomConfig[mushroomKeys[i]].levelIndex === containers.Map.currentLevelIndex) {
                    var targetSpriteKey = gameConfig.GameConfig.mushroomConfig.mushroom1.spriteFrame;
                    var mushroomSprite = Game.game.add.sprite(Game.game.width / 2, Game.game.height / 2, mapConfig.MapConfig.folder, targetSpriteKey);
                    containers.Map.mapGroup.add(mushroomSprite);
                    mushroomSprite.scale.set(2, 2);
                    mushroomSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                    if (containers.Game.mushroomPickupSprite !== null) {
                        containers.Game.mushroomPickupSprite.destroy();
                    }
                    containers.Game.mushroomPickupSprite = mushroomSprite;
                    this.startMushroomPositionAnimation();
                    Game.game.add.tween(containers.Game.mushroomPickupSprite.scale).to({
                        x: 0,
                        y: 0
                    }, 2000, Phaser.Easing.Circular.In, true, 1000).onComplete.add(function () {
                        _this.spriteBoy = Game.game.add.sprite(0, 0, mapConfig.MapConfig.folder, 'sick4');
                        containers.Map.mapGroup.add(_this.spriteBoy);
                        events.Manager.comicEvent.fire({});
                        if (i === containers.Map.kingRoeIllSprites.length - 1) {
                            Game.game.add.tween(containers.Map.instructionBalloon).to({ alpha: 0 }, Phaser.Timer.SECOND * 2, Phaser.Easing.Sinusoidal.InOut, true, 10);
                            containers.Map.checkMarks.forEach(function (element) {
                                Game.game.add.tween(element).to({ alpha: 0 }, Phaser.Timer.SECOND * 2, Phaser.Easing.Sinusoidal.InOut, true, 10);
                            });
                        }
                        Game.game.add.tween(containers.Map.kingRoeIllSprites[gameConfig.GameConfig.mushroomConfig[mushroomKeys[i]].kingSpiteToRemove]).to({ alpha: 0 }, mapConfig.MapConfig.numberValues.mapScreenSicknessTweenDuration * Phaser.Timer.SECOND * 0.3, Phaser.Easing.Circular.InOut, true, 10, 2, true).onComplete.add(function () {
                            containers.Map.kingRoeIllSprites[gameConfig.GameConfig.mushroomConfig[mushroomKeys[i]].kingSpiteToRemove].alpha = 0;
                            Game.effects.screenFlash(0xffffff, 0.8, 200);
                            Game.game.time.events.add(Phaser.Timer.SECOND * 3, function () {
                                _this.spriteBoy.visible = false;
                                if (i === containers.Map.kingRoeIllSprites.length - 1) {
                                    events.Manager.finalScreenShake.fire({});
                                }
                            });
                            Game.game.time.events.add(Phaser.Timer.SECOND * 4, function () {
                                if (i !== containers.Map.kingRoeIllSprites.length - 1) {
                                    events.Manager.comicEventEnd.fire({});
                                }
                                else {
                                    tools.UserSettingsHelper.getUserSettings().gameCompleted = true;
                                    tools.UserSettingsHelper.save();
                                    Game.effects.screenFlash(0xffffff, 0.8, 200);
                                    var sprite = Game.game.add.sprite(0, 0, mapConfig.MapConfig.folder, "endscreen");
                                    containers.Map.mapGroup.add(sprite);
                                }
                            });
                        });
                    });
                    return;
                }
            }
            events.Manager.noComicEvent.fire({});
        }
        StorySystem.prototype.bind = function () {
            events.Manager.update.addListener(this.update, this);
            events.Manager.unloadState.addListener(this.unbind, this);
        };
        StorySystem.prototype.unbind = function () {
            events.Manager.update.removeListener(this.update, this);
            events.Manager.unloadState.removeListener(this.unbind, this);
        };
        StorySystem.prototype.startMushroomPositionAnimation = function () {
            this.started = Game.game.time.now;
        };
        StorySystem.prototype.update = function (data) {
            if (this.started !== null) {
                var now = Game.game.time.now;
                var percentage = (now - this.started) / this.duration;
                if (this.started + this.duration > now) {
                    percentage *= percentage;
                    var t = percentage * 3 * Math.PI;
                    var x = Math.sin(t * Math.PI) / t;
                    var y = Math.cos(t * Math.PI) / t;
                    x *= Game.scale(mapConfig.MapConfig.numberValues.swirlSize);
                    y *= Game.scale(mapConfig.MapConfig.numberValues.swirlSize);
                    containers.Game.mushroomPickupSprite.position.set(Game.scale(mapConfig.MapConfig.kingsMouth.x) + x, Game.scale(mapConfig.MapConfig.kingsMouth.y) + y);
                }
                else if (this.started + this.duration < now) {
                    this.started = null;
                    Game.effects.screenFlash(0xffffff, 0.8, 200);
                }
            }
        };
        return StorySystem;
    })();
    systems.StorySystem = StorySystem;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var TriggerSystem = (function () {
        function TriggerSystem() {
            this.previousTriggers = [];
            this.playerHasDied = false;
            this.bind();
        }
        TriggerSystem.prototype.bind = function () {
            events.Manager.update.addListener(this.update, this);
            events.Manager.levelEnd.addListener(this.unbind, this);
        };
        TriggerSystem.prototype.unbind = function () {
            events.Manager.update.removeListener(this.update, this);
            events.Manager.levelEnd.removeListener(this.unbind, this);
        };
        TriggerSystem.prototype.debugTriggers = function () {
            for (var i = 0; i < containers.Game.currentLevel.triggers.length; i++) {
                var triggerZone = containers.Game.currentLevel.triggers[i];
                var color = (i * 100) % 255;
                var debugSprite = Game.game.add.existing(util.Sprite.createSprite(triggerZone.bounds.width, triggerZone.bounds.height, {
                    r: color,
                    g: color,
                    b: color
                }));
                debugSprite.position.set(triggerZone.bounds.x, triggerZone.bounds.y);
                debugSprite.alpha = .5;
            }
        };
        TriggerSystem.prototype.update = function () {
            var currentTriggers = [];
            var triggers = containers.Game.currentLevel.triggers;
            for (var i = 0; i < triggers.length; i++) {
                var triggerBounds = triggers[i].bounds;
                if (triggers[i].canBeTriggerByWeasel) {
                    for (var j = 0; j < containers.Game.weaselSegmentPhysicsBodies.length; j++) {
                        var weaselBody = containers.Game.weaselSegmentPhysicsBodies[j];
                        if (Phaser.Rectangle.intersects(weaselBody.getBounds(), triggerBounds) &&
                            !this.isContainedIn(triggers[i], currentTriggers)) {
                            triggers[i].triggeredByBody = weaselBody;
                            currentTriggers.push(triggers[i]);
                        }
                    }
                }
                if (triggers[i].canBeTriggeredByMouse) {
                    var mouseBody = containers.Game.mousePhysicsBody;
                    if (Phaser.Rectangle.intersects(mouseBody.getBounds(), triggerBounds) &&
                        !this.isContainedIn(triggers[i], currentTriggers)) {
                        triggers[i].triggeredByBody = mouseBody;
                        currentTriggers.push(triggers[i]);
                    }
                }
            }
            for (var i = 0; i < this.previousTriggers.length; i++) {
                if (!this.isContainedIn(this.previousTriggers[i], currentTriggers)) {
                    switch (this.previousTriggers[i].name) {
                        case gameConfig.GameConfig.stringValues.deathTriggerName:
                        case gameConfig.GameConfig.stringValues.exitTriggerName:
                            break;
                        case gameConfig.GameConfig.stringValues.windZoneTriggerName:
                            events.Manager.windzoneTrigger.fire({
                                state: gameConfig.TriggerEvent.Exit,
                                trigger: this.previousTriggers[i]
                            });
                            break;
                        default:
                            events.Manager.buttonTrigger.fire({
                                name: this.previousTriggers[i].name,
                                state: gameConfig.TriggerEvent.Exit
                            });
                            break;
                    }
                }
            }
            for (var i = 0; i < currentTriggers.length; i++) {
                if (!this.isContainedIn(currentTriggers[i], this.previousTriggers)) {
                    switch (currentTriggers[i].name) {
                        case gameConfig.GameConfig.stringValues.deathTriggerName:
                            if (!this.playerHasDied) {
                                this.playerHasDied = true;
                                events.Manager.playerDied.fire({
                                    isWeasel: currentTriggers[i].triggeredByBody !== containers.Game.mousePhysicsBody
                                });
                            }
                            break;
                        case gameConfig.GameConfig.stringValues.exitTriggerName:
                            events.Manager.exitTrigger.fire({
                                state: gameConfig.TriggerEvent.Enter
                            });
                            break;
                        case gameConfig.GameConfig.stringValues.windZoneTriggerName:
                            events.Manager.windzoneTrigger.fire({
                                state: gameConfig.TriggerEvent.Enter,
                                trigger: currentTriggers[i]
                            });
                            break;
                        default:
                            events.Manager.buttonTrigger.fire({
                                name: currentTriggers[i].name,
                                state: gameConfig.TriggerEvent.Enter
                            });
                            break;
                    }
                }
            }
            this.previousTriggers = currentTriggers;
        };
        TriggerSystem.prototype.isContainedIn = function (trigger, triggerArray) {
            for (var i = 0; i < triggerArray.length; i++) {
                if (triggerArray[i] === trigger) {
                    return true;
                }
            }
            return false;
        };
        TriggerSystem.prototype.scaledGridTileSize = function () {
            return tools.GridHelper.getScaledGridTileSize();
        };
        return TriggerSystem;
    })();
    systems.TriggerSystem = TriggerSystem;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var Update = (function () {
        function Update() {
            this.shouldUpdate = true;
        }
        Update.prototype.bind = function () {
            events.Manager.levelEnd.addListener(this.unbind, this);
        };
        Update.prototype.unbind = function () {
            this.shouldUpdate = false;
            events.Manager.levelEnd.removeListener(this.unbind, this);
        };
        Update.prototype.fireUpdate = function () {
            if (!this.shouldUpdate)
                return;
            events.Manager.update.fire({
                deltaTime: Game.game.time.physicsElapsed
            });
        };
        return Update;
    })();
    systems.Update = Update;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var Weasel = (function () {
        function Weasel() {
            this.leftDown = false;
            this.rightDown = false;
            this.upDown = false;
            this.downDown = false;
            this.isDead = false;
            this.scaledGridSize = tools.GridHelper.getScaledGridTileSize();
            this.moveInterval = gameConfig.GameConfig.numberValues.weaselMoveInterval;
            this.moveDelay = 0;
            this.bind();
        }
        Weasel.prototype.bind = function () {
            events.Manager.levelStarted.addListener(this.setCharacterSprites, this);
            events.Manager.levelStarted.addListener(this.setSpritesToSpawnPosition, this);
            events.Manager.weaselInput.addListener(this.onWeaselInput, this);
            events.Manager.update.addListener(this.update, this);
            events.Manager.levelEnd.addListener(this.unbind, this);
            events.Manager.playerDied.addListener(this.die, this);
        };
        Weasel.prototype.unbind = function () {
            events.Manager.levelStarted.removeListener(this.setCharacterSprites, this);
            events.Manager.levelStarted.removeListener(this.setSpritesToSpawnPosition, this);
            events.Manager.weaselInput.removeListener(this.onWeaselInput, this);
            events.Manager.update.removeListener(this.update, this);
            events.Manager.levelEnd.removeListener(this.unbind, this);
            events.Manager.playerDied.removeListener(this.die, this);
        };
        Weasel.prototype.die = function (data) {
            if (data.isWeasel && !this.isDead) {
                this.isDead = true;
                var spritesToIterate = [
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselTail],
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselFeet],
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselFeetTwo],
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselPants],
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselMiddle],
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselUpperBody],
                    containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselHead],
                ];
                for (var i = 0; i < spritesToIterate.length; i++) {
                    var weaselSpritePart = spritesToIterate[i];
                    Game.game.add.tween(weaselSpritePart).to({
                        alpha: 0
                    }, 300, Phaser.Easing.Circular.Out, true, i * 50);
                    Game.game.add.tween(weaselSpritePart.scale).to({
                        x: 1.5 * weaselSpritePart.scale.x,
                        y: 1.5
                    }, 300, Phaser.Easing.Circular.Out, true, i * 50);
                }
            }
        };
        Weasel.prototype.onWeaselInput = function (data) {
            var isDown = data.state == gameConfig.KeyStates.Down;
            if (isDown) {
                this.leftDown = false;
                this.rightDown = false;
                this.upDown = false;
                this.downDown = false;
            }
            switch (data.direction) {
                case gameConfig.WeaselDirections.Left:
                    this.leftDown = isDown;
                    break;
                case gameConfig.WeaselDirections.Right:
                    this.rightDown = isDown;
                    break;
                case gameConfig.WeaselDirections.Up:
                    this.upDown = isDown;
                    break;
                case gameConfig.WeaselDirections.Down:
                    this.downDown = isDown;
                    break;
            }
        };
        Weasel.prototype.moveWeasel = function (direction) {
            this.moveDelay = this.moveInterval;
            this.applyFakeGravityOnFeet();
            var potentialNewPosition = Phaser.Point.parse(containers.Game.currentLevel.weaselBlocks[0].gridPosition).add(direction.x, direction.y);
            var doHeadBob = false;
            if (tools.GridHelper.isOccupied(potentialNewPosition, containers.Game.currentLevel.levelBlocks)) {
                doHeadBob = true;
            }
            if (!tools.GridHelper.isWithinLevelBounds(potentialNewPosition, containers.Game.currentLevel.levelBlocks)) {
                doHeadBob = true;
            }
            if (!doHeadBob) {
                var returnedSinkBlock = tools.GridHelper.isOccupiedAndReturnBlock(potentialNewPosition, containers.Game.currentLevel.sinkBlocks);
                if (returnedSinkBlock !== null && !returnedSinkBlock.isOpen) {
                    doHeadBob = true;
                }
            }
            if (!doHeadBob) {
                var returnBrittleBlockIndex = tools.GridHelper.isOccupiedAndReturnIndex(potentialNewPosition, containers.Game.currentLevel.brittleBlocks);
                if (returnBrittleBlockIndex > -1 &&
                    !containers.Game.currentLevel.brittleBlocks[returnBrittleBlockIndex].isBroken) {
                    doHeadBob = true;
                    events.Manager.brittleBlockTouched.fire({
                        blockIndex: returnBrittleBlockIndex
                    });
                }
            }
            if (!doHeadBob) {
                if (tools.GridHelper.isOverlapping(potentialNewPosition, containers.Game.mousePhysicsBody, direction.y !== -1 ? gameConfig.GameConfig.numberValues.weaselCheckMouseIsBlockingYScale : 1, Math.abs(direction.x) !== 1 ? gameConfig.GameConfig.numberValues.weaselCheckMouseIsBlockingYScale : 1)) {
                    doHeadBob = true;
                    var headbobPosition = new Phaser.Point(containers.Game.currentLevel.weaselBlocks[0].gridPosition.x + direction.x * gameConfig.GameConfig.numberValues.weaselHeadBobFactor, containers.Game.currentLevel.weaselBlocks[0].gridPosition.y + direction.y * gameConfig.GameConfig.numberValues.weaselHeadBobFactor);
                    if (tools.GridHelper.isOverlapping(headbobPosition, containers.Game.mousePhysicsBody)) {
                        events.Manager.mouseHeadbutted.fire({
                            direction: direction
                        });
                    }
                }
            }
            if (doHeadBob) {
                this.moveDelay = this.moveInterval * 2.5;
                this.tweenHeadBob(direction);
                return;
            }
            this.tweenFaceToTargetAngle(this.directionToAngle(direction));
            for (var i = containers.Game.currentLevel.weaselBlocks.length - 1; i > 0; i--) {
                if (i - 1 >= 0) {
                    containers.Game.currentLevel.weaselBlocks[i].gridPosition.set(containers.Game.currentLevel.weaselBlocks[i - 1].gridPosition.x, containers.Game.currentLevel.weaselBlocks[i - 1].gridPosition.y);
                }
            }
            containers.Game.currentLevel.weaselBlocks[0].gridPosition = potentialNewPosition;
            events.Manager.weaselMoved.fire({});
            this.tweenSpritesToTargetPosition();
        };
        Weasel.prototype.setSpritesToSpawnPosition = function () {
            for (var i = 0; i < this.weaselSprites.length; i++) {
                this.weaselSprites[i].position.set(containers.Game.currentLevel.weaselBlocks[i].gridPosition.x * this.scaledGridSize, containers.Game.currentLevel.weaselBlocks[i].gridPosition.y * this.scaledGridSize);
            }
            events.Manager.weaselMoved.fire({});
        };
        Weasel.prototype.tweenFaceToTargetAngle = function (angle) {
            var rotation = angle - this.weaselSprites[0].angle;
            if (rotation > 180) {
                rotation -= 360;
            }
            else if (rotation < -180) {
                rotation += 360;
            }
            var newAngle = this.weaselSprites[0].angle + rotation;
            Game.game.add.tween(this.weaselSprites[0]).to({
                angle: newAngle
            }, this.moveInterval * gameConfig.GameConfig.numberValues.weaselAnimationDurationFactor, Phaser.Easing.Circular.InOut, true);
        };
        Weasel.prototype.tweenSpritesToTargetPosition = function () {
            for (var i = 0; i < this.weaselSprites.length; i++) {
                var tween = Game.game.add.tween(this.weaselSprites[i]).to({
                    x: containers.Game.currentLevel.weaselBlocks[i].gridPosition.x * this.scaledGridSize,
                    y: containers.Game.currentLevel.weaselBlocks[i].gridPosition.y * this.scaledGridSize
                }, this.moveInterval * gameConfig.GameConfig.numberValues.weaselAnimationDurationFactor, Phaser.Easing.Circular.InOut, true);
            }
        };
        Weasel.prototype.tweenHeadBob = function (direction) {
            containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselHead].animations.play("headbob");
            var oldPosition = this.weaselSprites[0].position;
            var tween = Game.game.add.tween(this.weaselSprites[0]).to({
                x: oldPosition.x + Game.scale(direction.x * gameConfig.GameConfig.numberValues.tileSize * gameConfig.GameConfig.numberValues.weaselHeadBobFactor),
                y: oldPosition.y + Game.scale(direction.y * gameConfig.GameConfig.numberValues.tileSize * gameConfig.GameConfig.numberValues.weaselHeadBobFactor)
            }, this.moveInterval * gameConfig.GameConfig.numberValues.weaselAnimationDurationFactor, Phaser.Easing.Circular.InOut, true, 0, 0, true);
        };
        Weasel.prototype.setCharacterSprites = function () {
            this.weaselSprites = [
                containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselHead],
                containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselUpperBody],
                containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselMiddle],
                containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselPants],
                containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselTail]
            ];
            containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselHead].animations.add("headbob", ["characters/weasel/weaselhurt", "characters/weasel/weasel1"], 3, false);
            containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselFeet].position = containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselPants].position;
            containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselFeetTwo].position = containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselPants].position;
        };
        Weasel.prototype.directionToAngle = function (direction) {
            var targetAngle = 0;
            switch (true) {
                case direction.x < 0:
                    targetAngle = -180;
                    break;
                case direction.x > 0:
                    targetAngle = 0;
                    break;
                case direction.y < 0:
                    targetAngle = -90;
                    break;
                case direction.y > 0:
                    targetAngle = 90;
                    break;
            }
            return targetAngle;
        };
        Weasel.prototype.updateWeaselVisuals = function () {
            for (var i = 1; i < this.weaselSprites.length; i++) {
                this.weaselSprites[i].rotation = Phaser.Point.angle(this.weaselSprites[i].position, this.weaselSprites[i - 1].position) + Math.PI;
            }
        };
        Weasel.prototype.applyFakeGravityOnFeet = function () {
            var feetAngle = ((containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselPants].angle - 90) * .8) + 70;
            Game.game.add.tween(containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselFeet]).to({
                angle: this.normaliseRotation((feetAngle - 90) * 1.06 + 90)
            }, 200, Phaser.Easing.Sinusoidal.Out, true, 10);
            Game.game.add.tween(containers.Game.characterSprites[gameConfig.CharacterSpriteIndexes.WeaselFeetTwo]).to({
                angle: this.normaliseRotation((feetAngle - 90) * 0.94 + 90)
            }, 200, Phaser.Easing.Sinusoidal.Out, true, 10);
        };
        Weasel.prototype.normaliseRotation = function (rotation) {
            if (rotation > 180) {
                rotation -= 360;
            }
            else if (rotation < -180) {
                rotation += 360;
            }
            return rotation;
        };
        Weasel.prototype.update = function (data) {
            this.updateWeaselVisuals();
            if (this.moveDelay > 0) {
                this.moveDelay -= data.deltaTime;
            }
            if (this.moveDelay <= 0) {
                switch (true) {
                    case this.leftDown:
                        this.moveWeasel(gameConfig.GameConfig.pointValues.directionLeft);
                        break;
                    case this.rightDown:
                        this.moveWeasel(gameConfig.GameConfig.pointValues.directionRight);
                        break;
                    case this.upDown:
                        this.moveWeasel(gameConfig.GameConfig.pointValues.directionUp);
                        break;
                    case this.downDown:
                        this.moveWeasel(gameConfig.GameConfig.pointValues.directionDown);
                        break;
                }
            }
        };
        return Weasel;
    })();
    systems.Weasel = Weasel;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var WeaselInput = (function () {
        function WeaselInput() {
            this.bind();
        }
        WeaselInput.prototype.bind = function () {
            events.Manager.input.addListener(this.processInput, this);
            events.Manager.levelEnd.addListener(this.unbind, this);
        };
        WeaselInput.prototype.unbind = function () {
            events.Manager.input.removeListener(this.processInput, this);
            events.Manager.levelEnd.removeListener(this.unbind, this);
        };
        WeaselInput.prototype.processInput = function (data) {
            for (var i = 0; i < gameConfig.GameConfig.playerControls.weaselLeft.length; i++) {
                if (data.key.keyCode == gameConfig.GameConfig.playerControls.weaselLeft[i].keyCode) {
                    events.Manager.weaselInput.fire({
                        direction: gameConfig.WeaselDirections.Left,
                        state: data.state
                    });
                }
            }
            for (var i = 0; i < gameConfig.GameConfig.playerControls.weaselRight.length; i++) {
                if (data.key.keyCode == gameConfig.GameConfig.playerControls.weaselRight[i].keyCode) {
                    events.Manager.weaselInput.fire({
                        direction: gameConfig.WeaselDirections.Right,
                        state: data.state
                    });
                }
            }
            for (var i = 0; i < gameConfig.GameConfig.playerControls.weaselUp.length; i++) {
                if (data.key.keyCode == gameConfig.GameConfig.playerControls.weaselUp[i].keyCode) {
                    events.Manager.weaselInput.fire({
                        direction: gameConfig.WeaselDirections.Up,
                        state: data.state
                    });
                }
            }
            for (var i = 0; i < gameConfig.GameConfig.playerControls.weaselDown.length; i++) {
                if (data.key.keyCode == gameConfig.GameConfig.playerControls.weaselDown[i].keyCode) {
                    events.Manager.weaselInput.fire({
                        direction: gameConfig.WeaselDirections.Down,
                        state: data.state
                    });
                }
            }
        };
        return WeaselInput;
    })();
    systems.WeaselInput = WeaselInput;
})(systems || (systems = {}));
var systems;
(function (systems) {
    var WindZoneSystem = (function () {
        function WindZoneSystem() {
            this.bind();
            this.mouseTriggeredCount = 0;
            this.resetZones();
        }
        WindZoneSystem.prototype.bind = function () {
            events.Manager.windzoneTrigger.addListener(this.triggeredWindzone, this);
            events.Manager.update.addListener(this.update, this);
            events.Manager.weaselMoved.addListener(this.doWindHeightUpdate, this);
            events.Manager.brittleBlockBroken.addListener(this.doWindHeightUpdate, this);
            events.Manager.sinkBlockChanged.addListener(this.doWindHeightUpdate, this);
            events.Manager.unloadState.addListener(this.unbind, this);
        };
        WindZoneSystem.prototype.unbind = function () {
            events.Manager.windzoneTrigger.removeListener(this.triggeredWindzone, this);
            events.Manager.update.removeListener(this.update, this);
            events.Manager.weaselMoved.removeListener(this.doWindHeightUpdate, this);
            events.Manager.brittleBlockBroken.removeListener(this.doWindHeightUpdate, this);
            events.Manager.sinkBlockChanged.removeListener(this.doWindHeightUpdate, this);
            events.Manager.unloadState.removeListener(this.unbind, this);
            this.resetZones();
        };
        WindZoneSystem.prototype.resetZones = function () {
            this.mouseTriggeredWindZone = null;
            this.weaselTriggeredWindZone = null;
        };
        WindZoneSystem.prototype.findWindZoneByTrigger = function (trigger) {
            var windZone;
            for (var i = 0; i < containers.Game.currentLevel.windZones.length; i++) {
                windZone = containers.Game.currentLevel.windZones[i];
                if (windZone.triggerZone === trigger) {
                    return windZone;
                }
            }
            return null;
        };
        WindZoneSystem.prototype.triggeredWindzone = function (data) {
            if (data.state === gameConfig.TriggerEvent.Enter) {
                this.mouseTriggeredWindZone = this.findWindZoneByTrigger(data.trigger);
                this.mouseTriggeredCount++;
            }
            else {
                this.mouseTriggeredCount--;
                if (this.mouseTriggeredCount === 0) {
                    this.mouseTriggeredWindZone = null;
                }
            }
        };
        WindZoneSystem.prototype.doWindHeightUpdate = function () {
            for (var i = 0; i < containers.Game.windZoneVisuals.length; i++) {
                var windVisual = containers.Game.windZoneVisuals[i];
                var windZoneData = windVisual.belongsToWindZone;
                var floorPosition = Phaser.Point.parse(windZoneData.gridPosition);
                floorPosition.y += windZoneData.gridSize.y;
                floorPosition.x = windVisual.xGridPosition;
                var ceilingGridYPosition = Math.max(tools.GridHelper.findCeilingFromGridPosition(floorPosition, containers.Game.currentLevel.levelBlocks).y + 1, tools.GridHelper.findCeilingFromGridPosition(floorPosition, containers.Game.currentLevel.weaselBlocks).y + 1, tools.GridHelper.findSinkblockCeilingFromGridPosition(floorPosition, containers.Game.currentLevel.sinkBlocks).y + 1, tools.GridHelper.findBrittleBlockCeilingFromGridPosition(floorPosition, containers.Game.currentLevel.brittleBlocks).y + 1);
                var preChangeThisHightToDie = windVisual.thisHighToDie;
                windVisual.thisHighToDie = Math.max(Game.scale(windZoneData.position.y), Game.scale(ceilingGridYPosition * gameConfig.GameConfig.numberValues.tileSize));
                if (windVisual.thisHighToDie == Game.scale(windZoneData.position.y)) {
                    windVisual.windZoneEnd.visible = false;
                }
                else {
                    if (preChangeThisHightToDie !== windVisual.thisHighToDie) {
                        windVisual.windZoneEnd.visible = true;
                        if (preChangeThisHightToDie > windVisual.thisHighToDie) {
                            Game.game.add.tween(windVisual.windZoneEnd).to({
                                y: windVisual.thisHighToDie - Game.scale(.5 * gameConfig.GameConfig.numberValues.tileSize)
                            }, gameConfig.GameConfig.numberValues.weaselMoveInterval * Phaser.Timer.SECOND, Phaser.Easing.Circular.InOut, true, 5, 0, false);
                        }
                        else {
                            windVisual.windZoneEnd.visible = true;
                            windVisual.windZoneEnd.y = windVisual.thisHighToDie - Game.scale(.5 * gameConfig.GameConfig.numberValues.tileSize);
                        }
                    }
                }
            }
        };
        WindZoneSystem.prototype.doMouseUpdate = function (data) {
            var windZoneVisuals;
            if (this.mouseTriggeredCount !== 0) {
                var foundGrid = false;
                for (var i = 0; i < containers.Game.windZoneVisuals.length; i++) {
                    windZoneVisuals = containers.Game.windZoneVisuals[i];
                    if (windZoneVisuals.xGridPosition === containers.Game.currentLevel.mouseGridPosition.x) {
                        if (windZoneVisuals.thisHighToDie - Game.scale(gameConfig.GameConfig.numberValues.tileSize) > containers.Game.mousePhysicsBody.y) {
                            return;
                        }
                        foundGrid = true;
                    }
                }
                if (!foundGrid) {
                    return;
                }
                var heightPercentage = ((containers.Game.mousePhysicsBody.y - Game.scale(this.mouseTriggeredWindZone.position.y)) /
                    Game.scale(this.mouseTriggeredWindZone.size.y));
                var windForce = Game.scale((1 - heightPercentage) * gameConfig.GameConfig.numberValues.windZoneForce.top +
                    heightPercentage * gameConfig.GameConfig.numberValues.windZoneForce.bottom);
                if (containers.Game.mousePhysicsBody.body.velocity.y > 0) {
                    containers.Game.mousePhysicsBody.body.velocity.y *= gameConfig.GameConfig.numberValues.mouseGravityInWindzoneMultiplyer;
                }
                containers.Game.mousePhysicsBody.body.velocity.y -= data.deltaTime * windForce;
            }
        };
        WindZoneSystem.prototype.doWindParticlesUpdate = function (data) {
            for (var i = 0; i < containers.Game.windZoneVisuals.length; i++) {
                var windVisual = containers.Game.windZoneVisuals[i];
                for (var j = 0; j < windVisual.aliveSprites.length; j++) {
                    var sprite = windVisual.aliveSprites[j];
                    if (sprite.health === 1) {
                        sprite.health = Game.scale(windVisual.velocity) * (1 + (Math.random() - .5) * .2);
                    }
                    sprite.y -= sprite.health * data.deltaTime;
                    if (sprite.y < windVisual.thisHighToDie) {
                        sprite.y = Game.scale(windVisual.belongsToWindZone.position.y +
                            windVisual.belongsToWindZone.size.y -
                            .25 * gameConfig.GameConfig.numberValues.tileSize -
                            Math.random() * .5 * gameConfig.GameConfig.numberValues.tileSize);
                        sprite.x = Game.scale((windVisual.xGridPosition + Math.random() - .5) * gameConfig.GameConfig.numberValues.tileSize);
                        sprite.health = Game.scale(windVisual.velocity) * (1 + (Math.random() - .5) * .2);
                    }
                }
            }
        };
        WindZoneSystem.prototype.doWindSourcesUpdate = function () {
            for (var i = 0; i < containers.Game.windZoneSourceVisuals.length; i++) {
                containers.Game.windZoneSourceVisuals[i].scale.set(1 + Math.sin(-Game.game.time.now * gameConfig.GameConfig.numberValues.windZoneAnimationSpeed - i) * .07, 1 + Math.cos(-Game.game.time.now * gameConfig.GameConfig.numberValues.windZoneAnimationSpeed - i) * .04);
            }
        };
        WindZoneSystem.prototype.update = function (data) {
            this.doMouseUpdate(data);
            this.doWindParticlesUpdate(data);
            this.doWindSourcesUpdate();
        };
        return WindZoneSystem;
    })();
    systems.WindZoneSystem = WindZoneSystem;
})(systems || (systems = {}));
var tools;
(function (tools) {
    var GridHelper = (function () {
        function GridHelper() {
        }
        GridHelper.getScaledGridTileSize = function () {
            return Game.scale(gameConfig.GameConfig.pointValues.tileSize.x);
        };
        GridHelper.isOccupied = function (gridPosition, blocks) {
            var index = GridHelper.isOccupiedAndReturnIndex(gridPosition, blocks);
            if (index > -1) {
                return true;
            }
            return false;
        };
        GridHelper.getNeighbourConfig = function (gridPosition, blocks, debug) {
            if (debug === void 0) { debug = false; }
            var bitString = [];
            var iterationPosition = Phaser.Point.parse(gridPosition);
            iterationPosition.x -= 1;
            iterationPosition.y -= 1;
            bitString[0] = GridHelper.isOccupied(iterationPosition, blocks) ? "1" : "0";
            iterationPosition.x += 1;
            bitString[1] = GridHelper.isOccupied(iterationPosition, blocks) ? "1" : "0";
            iterationPosition.x += 1;
            bitString[2] = GridHelper.isOccupied(iterationPosition, blocks) ? "1" : "0";
            iterationPosition.y += 1;
            bitString[3] = GridHelper.isOccupied(iterationPosition, blocks) ? "1" : "0";
            iterationPosition.y += 1;
            bitString[4] = GridHelper.isOccupied(iterationPosition, blocks) ? "1" : "0";
            iterationPosition.x -= 1;
            bitString[5] = GridHelper.isOccupied(iterationPosition, blocks) ? "1" : "0";
            iterationPosition.x -= 1;
            bitString[6] = GridHelper.isOccupied(iterationPosition, blocks) ? "1" : "0";
            iterationPosition.y -= 1;
            bitString[7] = GridHelper.isOccupied(iterationPosition, blocks) ? "1" : "0";
            if (debug) {
                console.log(bitString);
            }
            return bitString.join('');
        };
        GridHelper.isOccupiedAndReturnBlock = function (gridPosition, blocks) {
            var index = GridHelper.isOccupiedAndReturnIndex(gridPosition, blocks);
            if (index > -1) {
                return blocks[index];
            }
            return null;
        };
        GridHelper.isOccupiedAndReturnIndex = function (gridPosition, blocks) {
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i] !== null && blocks[i].gridPosition.equals(gridPosition)) {
                    return i;
                }
            }
            return -1;
        };
        GridHelper.gridPositionToWorldRect = function (gridPosition) {
            var scaledTileSize = GridHelper.getScaledGridTileSize();
            return new Phaser.Rectangle(Game.scale(gridPosition.x * gameConfig.GameConfig.numberValues.tileSize) - scaledTileSize * .5, Game.scale(gridPosition.y * gameConfig.GameConfig.numberValues.tileSize) - scaledTileSize * .5, scaledTileSize, scaledTileSize);
        };
        GridHelper.findCeilingFromGridPosition = function (gridPosition, blocks) {
            var gridPositionToReturn = new Phaser.Point(-1, -1);
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i] !== null && blocks[i].gridPosition.x === gridPosition.x) {
                    if (blocks[i].gridPosition.y > gridPositionToReturn.y && blocks[i].gridPosition.y < gridPosition.y) {
                        gridPositionToReturn = blocks[i].gridPosition;
                    }
                }
            }
            return gridPositionToReturn;
        };
        GridHelper.findSinkblockCeilingFromGridPosition = function (gridPosition, blocks) {
            var copyOfBlocks = blocks.slice();
            var indexesToSplice = [];
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i] !== null && blocks[i].isOpen) {
                    indexesToSplice.push(i);
                }
            }
            for (var j = indexesToSplice.length - 1; j > -1; j--) {
                copyOfBlocks.splice(indexesToSplice[j], 1);
            }
            return GridHelper.findCeilingFromGridPosition(gridPosition, copyOfBlocks);
        };
        GridHelper.findBrittleBlockCeilingFromGridPosition = function (gridPosition, blocks) {
            var copyOfBlocks = blocks.slice();
            var indexesToSplice = [];
            for (var i = 0; i < blocks.length; i++) {
                if (blocks[i] !== null && blocks[i].isBroken) {
                    indexesToSplice.push(i);
                }
            }
            for (var j = indexesToSplice.length - 1; j > -1; j--) {
                copyOfBlocks.splice(indexesToSplice[j], 1);
            }
            return GridHelper.findCeilingFromGridPosition(gridPosition, copyOfBlocks);
        };
        GridHelper.isWithinLevelBounds = function (gridPosition, blocks) {
            if (gridPosition.x > 0 &&
                gridPosition.x < gameConfig.GameConfig.pointValues.gridSize.x - 1 &&
                gridPosition.y > 0 &&
                gridPosition.y < gameConfig.GameConfig.pointValues.gridSize.y - 1) {
                return true;
            }
            return false;
        };
        GridHelper.isOverlapping = function (gridPosition, sprite, yScale, xScale) {
            if (yScale === void 0) { yScale = 1; }
            if (xScale === void 0) { xScale = 1; }
            var gridRect = GridHelper.gridPositionToWorldRect(gridPosition);
            if (yScale !== 1) {
                var newY = gridRect.y + (1 - yScale) * .5 * gridRect.height;
                gridRect.height *= yScale;
                gridRect.y = newY;
            }
            if (xScale !== 1) {
                var newX = gridRect.x + (1 - xScale) * .5 * gridRect.width;
                gridRect.width *= xScale;
                gridRect.x = newX;
            }
            return Phaser.Rectangle.intersects(gridRect, sprite.getBounds());
        };
        return GridHelper;
    })();
    tools.GridHelper = GridHelper;
})(tools || (tools = {}));
var tools;
(function (tools) {
    var LevelParser = (function () {
        function LevelParser(levelJson) {
            this.levelJson = null;
            this.tileLayer = null;
            this.objectLayer = null;
            this.levelJson = levelJson;
            this.setUpEmptyLevel();
            this.parseLayers();
            this.parseObjectLayer();
            this.parseTileLayer();
        }
        LevelParser.parseLevelFromRawData = function (levelJson) {
            var tmpInstance = new LevelParser(levelJson);
            return tmpInstance.returnParsedLevelData();
        };
        LevelParser.prototype.returnParsedLevelData = function () {
            return this.levelData;
        };
        LevelParser.prototype.setUpEmptyLevel = function () {
            this.levelData = {
                levelBlocks: [],
                deathBlocks: [],
                brittleBlocks: [],
                buttons: [],
                sinkBlocks: [],
                triggers: [],
                windZones: [],
                exitPosition: null,
                weaselBlocks: [],
                mouseSpawnPosition: null,
                mouseGridPosition: null
            };
        };
        LevelParser.prototype.parseLayers = function () {
            if (typeof this.levelJson.layers == "undefined") {
                console.error("Loaded level doesn't have the 'layers' property");
                return;
            }
            for (var i = 0; i < this.levelJson.layers.length; i++) {
                if (this.levelJson.layers[i].type == "tilelayer") {
                    this.tileLayer = this.levelJson.layers[i];
                }
                else if (this.levelJson.layers[i].type == "objectgroup") {
                    this.objectLayer = this.levelJson.layers[i];
                }
            }
            if (this.tileLayer == null) {
                console.error("TileLayer could not be found in the level JSON");
                return;
            }
            if (this.objectLayer == null) {
                console.error("ObjectLayer could not be found in the level JSON");
                return;
            }
        };
        LevelParser.prototype.parseTileLayer = function () {
            var scaledGridTileSize = this.scaledGridTileSize();
            if (this.tileLayer.width !== gameConfig.GameConfig.pointValues.gridSize.x) {
                console.error("Game configuration and loaded map tileLayer have a different width defined");
                return;
            }
            for (var i = 0; i < this.tileLayer.data.length; i++) {
                var x = i % this.tileLayer.width;
                var y = Math.floor(i / this.tileLayer.width);
                var currentTileType = this.tileLayer.data[i];
                if (currentTileType >= gameConfig.TileTypes.Count) {
                    console.error("This map hase more types specified then the current game version can handle.");
                    return;
                }
                var gridPosition = new Phaser.Point(x, y);
                switch (currentTileType) {
                    case gameConfig.TileTypes.Block:
                        this.levelData.levelBlocks.push({
                            gridPosition: gridPosition,
                            neighbourConfig: "00000000"
                        });
                        break;
                    case gameConfig.TileTypes.Brittle:
                        this.levelData.brittleBlocks.push({
                            gridPosition: gridPosition,
                            isBroken: false
                        });
                        break;
                    case gameConfig.TileTypes.Death:
                        this.levelData.deathBlocks.push({
                            gridPosition: gridPosition
                        });
                        this.levelData.triggers.push({
                            bounds: new Phaser.Rectangle(gridPosition.x * scaledGridTileSize - 0.5 * scaledGridTileSize + .5 * (1 - gameConfig.GameConfig.numberValues.triggerSizeFactor) * scaledGridTileSize, gridPosition.y * scaledGridTileSize - 0.5 * scaledGridTileSize + .5 * (1 - gameConfig.GameConfig.numberValues.triggerSizeFactor) * scaledGridTileSize, scaledGridTileSize * gameConfig.GameConfig.numberValues.triggerSizeFactor, scaledGridTileSize * gameConfig.GameConfig.numberValues.triggerSizeFactor),
                            name: gameConfig.GameConfig.stringValues.deathTriggerName,
                            triggeredByBody: null,
                            canBeTriggerByWeasel: true,
                            canBeTriggeredByMouse: true
                        });
                        break;
                    default:
                    case gameConfig.TileTypes.Empty:
                        break;
                }
            }
        };
        LevelParser.prototype.parseObjectLayer = function () {
            var scaledGridTileSize = this.scaledGridTileSize();
            for (var i = 0; i < this.objectLayer.objects.length; i++) {
                var object = this.objectLayer.objects[i];
                switch (object["type"]) {
                    case gameConfig.GameConfig.objectTypes.sinkBlock:
                        var sinkBlock = {
                            name: object["name"],
                            position: new Phaser.Point((Math.round(object["x"] * gameConfig.GameConfig.numberValues.editorToWorldFactor / gameConfig.GameConfig.pointValues.tileSize.x)) * scaledGridTileSize, (Math.round(object["y"] * gameConfig.GameConfig.numberValues.editorToWorldFactor / gameConfig.GameConfig.pointValues.tileSize.y)) * scaledGridTileSize),
                            gridPosition: new Phaser.Point(Math.round(object["x"] * gameConfig.GameConfig.numberValues.editorToWorldFactor / gameConfig.GameConfig.pointValues.tileSize.x), Math.round(object["y"] * gameConfig.GameConfig.numberValues.editorToWorldFactor / gameConfig.GameConfig.pointValues.tileSize.y)),
                            foregroundVariationIndex: Math.round(Math.random() * (gameConfig.LevelSpriteConfig.foregroundSinkblockVariations.length - 1)),
                            backgroundVariationIndex: Math.round(Math.random() * (gameConfig.LevelSpriteConfig.backgroundSinkblockVariations.length - 1)),
                            isOpen: typeof object["properties"] !== "undefined" ? object["properties"]["startOpen"] : gameConfig.GameConfig.booleanValues.sinkBlockStartOpen,
                            startOpen: typeof object["properties"] !== "undefined" ? object["properties"]["startOpen"] : gameConfig.GameConfig.booleanValues.sinkBlockStartOpen,
                            triggerCount: 0
                        };
                        this.levelData.sinkBlocks.push(sinkBlock);
                        break;
                    case gameConfig.GameConfig.objectTypes.button:
                        var objectPosition = new Phaser.Point((Math.round(object["x"] * gameConfig.GameConfig.numberValues.editorToWorldFactor / gameConfig.GameConfig.pointValues.tileSize.x)) * scaledGridTileSize, (Math.round(object["y"] * gameConfig.GameConfig.numberValues.editorToWorldFactor / gameConfig.GameConfig.pointValues.tileSize.x)) * scaledGridTileSize);
                        var widthInWorldUnits = (Math.round(object["width"] * gameConfig.GameConfig.numberValues.editorToWorldFactor / gameConfig.GameConfig.pointValues.tileSize.x)) * scaledGridTileSize;
                        var heightInWorldUnits = (Math.round(object["height"] * gameConfig.GameConfig.numberValues.editorToWorldFactor / gameConfig.GameConfig.pointValues.tileSize.x)) * scaledGridTileSize;
                        this.levelData.buttons.push({
                            target: object["properties"]["target"],
                            triggerCount: 0,
                            position: objectPosition
                        });
                        this.levelData.triggers.push({
                            bounds: new Phaser.Rectangle(objectPosition.x - 0.5 * scaledGridTileSize + .5 * (1 - gameConfig.GameConfig.numberValues.triggerSizeFactor) * widthInWorldUnits, objectPosition.y - 0.5 * scaledGridTileSize + .5 * (1 - gameConfig.GameConfig.numberValues.triggerSizeFactor) * heightInWorldUnits, widthInWorldUnits * gameConfig.GameConfig.numberValues.triggerSizeFactor, heightInWorldUnits * gameConfig.GameConfig.numberValues.triggerSizeFactor),
                            name: object["properties"]["target"],
                            triggeredByBody: null,
                            canBeTriggerByWeasel: true,
                            canBeTriggeredByMouse: true
                        });
                        break;
                    case gameConfig.GameConfig.objectTypes.exit:
                        var objectPosition = new Phaser.Point(Game.scale(object["x"] * gameConfig.GameConfig.numberValues.editorToWorldFactor), Game.scale(object["y"] * gameConfig.GameConfig.numberValues.editorToWorldFactor));
                        var widthInWorldUnits = Game.scale(object["width"] * gameConfig.GameConfig.numberValues.editorToWorldFactor);
                        var heightInWorldUnits = Game.scale(object["height"] * gameConfig.GameConfig.numberValues.editorToWorldFactor);
                        this.levelData.exitPosition = objectPosition;
                        this.levelData.triggers.push({
                            bounds: new Phaser.Rectangle(objectPosition.x - 0.5 * scaledGridTileSize + .5 * (1 - gameConfig.GameConfig.numberValues.triggerSizeFactor) * widthInWorldUnits, objectPosition.y - 0.5 * scaledGridTileSize + .5 * (1 - gameConfig.GameConfig.numberValues.triggerSizeFactor) * heightInWorldUnits, widthInWorldUnits * gameConfig.GameConfig.numberValues.triggerSizeFactor, heightInWorldUnits * gameConfig.GameConfig.numberValues.triggerSizeFactor),
                            name: gameConfig.GameConfig.stringValues.exitTriggerName,
                            triggeredByBody: null,
                            canBeTriggerByWeasel: false,
                            canBeTriggeredByMouse: true
                        });
                        break;
                    case gameConfig.GameConfig.objectTypes.mouseStart:
                        this.levelData.mouseSpawnPosition = new Phaser.Point(Math.round(object["x"] * gameConfig.GameConfig.numberValues.editorToWorldFactor / gameConfig.GameConfig.pointValues.tileSize.x), Math.round(object["y"] * gameConfig.GameConfig.numberValues.editorToWorldFactor / gameConfig.GameConfig.pointValues.tileSize.y));
                        this.levelData.mouseGridPosition = Phaser.Point.parse(this.levelData.mouseSpawnPosition);
                        break;
                    case gameConfig.GameConfig.objectTypes.weaselStart:
                        this.levelData.weaselBlocks[object["properties"]["index"] * 1] = {
                            gridPosition: new Phaser.Point(Math.round(object["x"] * gameConfig.GameConfig.numberValues.editorToWorldFactor / gameConfig.GameConfig.pointValues.tileSize.x), Math.round(object["y"] * gameConfig.GameConfig.numberValues.editorToWorldFactor / gameConfig.GameConfig.pointValues.tileSize.y))
                        };
                        break;
                    case gameConfig.GameConfig.objectTypes.windZone:
                        var objectPosition = new Phaser.Point(object["x"] * gameConfig.GameConfig.numberValues.editorToWorldFactor, object["y"] * gameConfig.GameConfig.numberValues.editorToWorldFactor);
                        var gridPosition = new Phaser.Point(Math.round(objectPosition.x / gameConfig.GameConfig.numberValues.tileSize), Math.round(objectPosition.y / gameConfig.GameConfig.numberValues.tileSize));
                        var widthInWorldUnits = object["width"] * gameConfig.GameConfig.numberValues.editorToWorldFactor;
                        var heightInWorldUnits = object["height"] * gameConfig.GameConfig.numberValues.editorToWorldFactor;
                        var triggerZone = {
                            bounds: new Phaser.Rectangle(Game.scale(objectPosition.x) - 0.5 * scaledGridTileSize, Game.scale(objectPosition.y) - 0.5 * scaledGridTileSize, Game.scale(widthInWorldUnits), Game.scale(heightInWorldUnits)),
                            name: gameConfig.GameConfig.stringValues.windZoneTriggerName,
                            triggeredByBody: null,
                            canBeTriggerByWeasel: false,
                            canBeTriggeredByMouse: true
                        };
                        this.levelData.windZones.push({
                            position: objectPosition,
                            gridPosition: gridPosition,
                            size: new Phaser.Point(widthInWorldUnits, heightInWorldUnits),
                            gridSize: new Phaser.Point(Math.round(widthInWorldUnits / gameConfig.GameConfig.numberValues.tileSize), Math.round(heightInWorldUnits / gameConfig.GameConfig.numberValues.tileSize)),
                            triggerZone: triggerZone
                        });
                        this.levelData.triggers.push(triggerZone);
                        break;
                }
            }
        };
        LevelParser.prototype.scaledGridTileSize = function () {
            return Game.scale(gameConfig.GameConfig.pointValues.tileSize.x);
        };
        return LevelParser;
    })();
    tools.LevelParser = LevelParser;
})(tools || (tools = {}));
var tools;
(function (tools) {
    var MushroomHelper = (function () {
        function MushroomHelper() {
        }
        MushroomHelper.getMushroomsGathered = function () {
            var highestCompletedLevelIdx = tools.UserSettingsHelper.getUserSettings().highestCompletedLevel;
            if (highestCompletedLevelIdx >= gameConfig.GameConfig.mushroomConfig.mushroom3.levelIndex) {
                return 3;
            }
            if (highestCompletedLevelIdx >= gameConfig.GameConfig.mushroomConfig.mushroom2.levelIndex) {
                return 2;
            }
            if (highestCompletedLevelIdx >= gameConfig.GameConfig.mushroomConfig.mushroom1.levelIndex) {
                return 1;
            }
            return 0;
        };
        MushroomHelper.isMushroomLevel = function (levelId, skipCompletedCheck) {
            if (skipCompletedCheck === void 0) { skipCompletedCheck = false; }
            var highestCompletedLevelIdx = tools.UserSettingsHelper.getUserSettings().highestCompletedLevel;
            if (!skipCompletedCheck && levelId <= highestCompletedLevelIdx) {
                return false;
            }
            if (gameConfig.GameConfig.mushroomConfig.mushroom1.levelIndex == levelId ||
                gameConfig.GameConfig.mushroomConfig.mushroom2.levelIndex == levelId ||
                gameConfig.GameConfig.mushroomConfig.mushroom3.levelIndex == levelId) {
                return true;
            }
            return false;
        };
        return MushroomHelper;
    })();
    tools.MushroomHelper = MushroomHelper;
})(tools || (tools = {}));
var tools;
(function (tools) {
    var ScreenShakeHelper = (function () {
        function ScreenShakeHelper() {
        }
        ScreenShakeHelper.doScreenShake = function (shakeRange, shakeCount, shakeInterval, randomShake, shakeAxis) {
            if (shakeRange === void 0) { shakeRange = 20; }
            if (shakeCount === void 0) { shakeCount = 20; }
            if (shakeInterval === void 0) { shakeInterval = 20; }
            if (randomShake === void 0) { randomShake = false; }
            if (shakeAxis === void 0) { shakeAxis = 'xy'; }
            shakeRange *= util.Scale.imageScale;
            var shakeTimer = Game.game.time.create(false);
            var cameraStartPosition = Game.game.camera.position.clone();
            shakeTimer.loop(shakeInterval, function () {
                if (shakeCount <= 0) {
                    shakeTimer.stop();
                    return;
                }
                var shift1;
                var shift2;
                if (randomShake) {
                    shift1 = Game.game.rnd.integerInRange(-shakeRange / 2, shakeRange / 2);
                    shift2 = Game.game.rnd.integerInRange(-shakeRange / 2, shakeRange / 2);
                }
                else {
                    if (shakeCount % 2) {
                        shift1 = shift2 = -shakeRange / 2;
                    }
                    else {
                        shift1 = shift2 = shakeRange / 2;
                    }
                }
                if (shakeAxis != "y")
                    Game.game.camera.x += shift1;
                if (shakeAxis != "x")
                    Game.game.camera.y += shift2;
                shakeCount--;
            });
            shakeTimer.start();
        };
        return ScreenShakeHelper;
    })();
    tools.ScreenShakeHelper = ScreenShakeHelper;
})(tools || (tools = {}));
var tools;
(function (tools) {
    var SpriteCornerHelper = (function () {
        function SpriteCornerHelper() {
        }
        SpriteCornerHelper.setTopLeftCornerSprite = function (neighbourConfig, sprite) {
            var topLeftConfig = neighbourConfig[0] + neighbourConfig[1] + neighbourConfig[6] + neighbourConfig[7];
            switch (topLeftConfig) {
                case "1000":
                case "0000":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassEdgeLeft];
                    break;
                case "0001":
                case "0011":
                case "1001":
                case "1011":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassTop];
                    break;
                case "0110":
                case "0100":
                case "1100":
                case "1110":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.WallLeft];
                    break;
                case "1010":
                case "0010":
                    if (neighbourConfig[5] === "1") {
                        sprite.frameName =
                            gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                                gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassOutsideCornerLeft];
                    }
                    else {
                        sprite.frameName =
                            gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                                gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassEdgeLeft];
                    }
                    break;
                case "0111":
                case "0101":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassInsideCornerLeft];
                    break;
                default:
                case "1101":
                case "1111":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.AllNeighbours] +
                            (Math.random() > .5 ? 'b' : '');
                    break;
            }
        };
        SpriteCornerHelper.setTopRightCornerSprite = function (neighbourConfig, sprite) {
            var topRightConfig = neighbourConfig[2] + neighbourConfig[1] + neighbourConfig[4] + neighbourConfig[3];
            switch (topRightConfig) {
                case "1000":
                case "0000":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassEdgeRight];
                    break;
                case "1011":
                case "0001":
                case "0011":
                case "1001":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassTop];
                    break;
                case "0110":
                case "0100":
                case "1100":
                case "1110":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.WallRight];
                    break;
                case "1010":
                case "0010":
                    if (neighbourConfig[5] === "1") {
                        sprite.frameName =
                            gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                                gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassOutsideCornerRight];
                    }
                    else {
                        sprite.frameName =
                            gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                                gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassEdgeRight];
                    }
                    break;
                case "0111":
                case "0101":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassInsideCornerRight];
                    break;
                default:
                case "1101":
                case "1111":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.AllNeighbours] +
                            (Math.random() > .5 ? 'b' : '');
                    break;
            }
        };
        SpriteCornerHelper.setBottomRightCornerSprite = function (neighbourConfig, sprite) {
            var bottomRightConfig = neighbourConfig[4] + neighbourConfig[5] + neighbourConfig[2] + neighbourConfig[3];
            switch (bottomRightConfig) {
                case "1010":
                case "0010":
                case "1000":
                case "0000":
                case "1010":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.CeilingOutsideCornerRight];
                    break;
                case "1011":
                case "0001":
                case "0011":
                case "1001":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.Ceiling];
                    break;
                case "0110":
                case "0100":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.WallRight];
                    break;
                case "1100":
                case "1110":
                    if (neighbourConfig[1] === "0") {
                        sprite.frameName =
                            gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                                gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassWallRight];
                    }
                    else {
                        sprite.frameName =
                            gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                                gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassWallTransitionRight];
                    }
                    break;
                case "0111":
                case "0101":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.CeilingInsideCornerRight];
                    break;
                default:
                case "1101":
                case "1111":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.AllNeighbours] +
                            (Math.random() > .5 ? 'b' : '');
                    break;
            }
        };
        SpriteCornerHelper.setBottomLeftCornerSprite = function (neighbourConfig, sprite) {
            var bottomLeftConfig = neighbourConfig[6] + neighbourConfig[5] + neighbourConfig[0] + neighbourConfig[7];
            switch (bottomLeftConfig) {
                case "1010":
                case "0010":
                case "1000":
                case "0000":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.CeilingOutsideCornerLeft];
                    break;
                case "1011":
                case "0001":
                case "0011":
                case "1001":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.Ceiling];
                    break;
                case "0110":
                case "0100":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.WallLeft];
                    break;
                case "1100":
                case "1110":
                    if (neighbourConfig[1] === "0") {
                        sprite.frameName =
                            gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                                gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassWallLeft];
                    }
                    else {
                        sprite.frameName =
                            gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                                gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.GrassWallTransitionLeft];
                    }
                    break;
                case "0111":
                case "0101":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.CeilingInsideCornerLeft];
                    break;
                default:
                case "1101":
                case "1111":
                    sprite.frameName =
                        gameConfig.LevelSpriteConfig.tileSpriteWorldKeys[containers.Game.currentWorldIndex] +
                            gameConfig.LevelSpriteConfig.tileCornerSpriteKeys[gameConfig.TileCornerSpriteIndexes.AllNeighbours] +
                            (Math.random() > .5 ? 'b' : '');
                    break;
            }
        };
        return SpriteCornerHelper;
    })();
    tools.SpriteCornerHelper = SpriteCornerHelper;
})(tools || (tools = {}));
var tools;
(function (tools) {
    var UserSettingsHelper = (function () {
        function UserSettingsHelper() {
        }
        UserSettingsHelper.getUserSettings = function () {
            UserSettingsHelper.load();
            return UserSettingsHelper.currentUserSettings;
        };
        UserSettingsHelper.setHighestCompletedLevel = function (value) {
            UserSettingsHelper.load();
            if (value > UserSettingsHelper.currentUserSettings.highestCompletedLevel) {
                UserSettingsHelper.currentUserSettings.highestCompletedLevel = value;
                UserSettingsHelper.save();
            }
        };
        UserSettingsHelper.setSoundEnabled = function (value) {
            UserSettingsHelper.load();
            UserSettingsHelper.currentUserSettings.soundEnabled = value;
            UserSettingsHelper.save();
        };
        UserSettingsHelper.save = function () {
            Game.save.save("UserSettings", UserSettingsHelper.currentUserSettings);
        };
        UserSettingsHelper.load = function () {
            UserSettingsHelper.currentUserSettings = Game.save.load("UserSettings");
            if (typeof (UserSettingsHelper.currentUserSettings) === 'undefined') {
                UserSettingsHelper.currentUserSettings = {
                    highestCompletedLevel: 0,
                    soundEnabled: true,
                    gameCompleted: false
                };
            }
        };
        return UserSettingsHelper;
    })();
    tools.UserSettingsHelper = UserSettingsHelper;
})(tools || (tools = {}));
var ui;
(function (ui) {
    var InteractivePokiLogo = (function (_super) {
        __extends(InteractivePokiLogo, _super);
        function InteractivePokiLogo(x, y, baseScale, zoomScale) {
            if (baseScale === void 0) { baseScale = 0; }
            if (zoomScale === void 0) { zoomScale = 0; }
            _super.call(this, Game.game, x, y, "ui", "poki-logo-stroked-small");
            this._baseScale = .8;
            this._zoomScale = .88;
            this._activeTween = null;
            this.anchor.set(.5, .5);
            if (baseScale != 0) {
                this._baseScale = baseScale;
            }
            if (zoomScale != 0) {
                this._zoomScale = zoomScale;
            }
            this.scale.set(this._baseScale, this._baseScale);
            this._createBalloon(x, y);
            this._bindEvents();
        }
        InteractivePokiLogo.prototype.balloonSprite = function () {
            return this._balloon;
        };
        InteractivePokiLogo.prototype._createBalloon = function (x, y) {
            this._balloon = Game.game.add.sprite(x - Game.scale(180), y + Game.scale(10), "ui", "play-more-balloon");
            this._balloon.anchor.set(0.98, .5);
            this._balloon.scale.set(.001, 0.7);
            this._balloon.visible = false;
        };
        InteractivePokiLogo.prototype._bindEvents = function () {
            var _this = this;
            this.inputEnabled = true;
            this.input.useHandCursor = true;
            this.events.onInputOver.add(function () {
                if (_this.scale.x == _this._baseScale) {
                    _this._showBalloon();
                    Game.game.add.tween(_this.scale).to({
                        x: _this._zoomScale,
                        y: _this._zoomScale
                    }, 200, Phaser.Easing.Sinusoidal.InOut, true, 0, 0, true);
                }
            });
            this.events.onInputOut.add(function () {
                _this._hideBalloon();
                _this.scale.setTo(_this._baseScale, _this._baseScale);
            });
            this.events.onInputDown.add(function () {
                Game.analytics.event("Button", "PokiMenu", "clicked");
                Game.openUrl("http://poki.com");
            }, this);
        };
        InteractivePokiLogo.prototype._showBalloon = function () {
            var _this = this;
            this._disableTween();
            this._balloon.scale.set(.001, 0.7);
            this._balloon.alpha = 1;
            this._balloon.visible = false;
            Game.game.time.events.add(200, function () {
                _this._balloon.visible = true;
            });
            this._activeTween = Game.game.add.tween(this._balloon.scale).to({
                x: 1,
                y: 1
            }, 400, Phaser.Easing.Back.Out, true, 200, 0, false);
        };
        InteractivePokiLogo.prototype._hideBalloon = function () {
            var _this = this;
            this._disableTween();
            this._activeTween = Game.game.add.tween(this._balloon).to({
                alpha: 0
            }, 300, Phaser.Easing.Linear.None, true, 0, 0, false);
            this._activeTween.onComplete.addOnce(function () {
                _this._balloon.visible = false;
                _this._balloon.scale.set(.001, 0.7);
                _this._balloon.alpha = 1;
            });
        };
        InteractivePokiLogo.prototype._disableTween = function () {
            if (this._activeTween !== null) {
                this._activeTween.stop();
            }
        };
        return InteractivePokiLogo;
    })(Phaser.Sprite);
    ui.InteractivePokiLogo = InteractivePokiLogo;
})(ui || (ui = {}));
var ui;
(function (ui) {
    var LoadUI = (function () {
        function LoadUI() {
            this._lastX = 0;
            this._percentageLoaded = 0;
            this._sliderIndex = -1;
            Game.game.stage.backgroundColor = 0x5D697E;
            this._sliderImages = [];
            this._createSlideShow();
            this._drawLoadingBar();
            this._drawLogo();
            this.updateProgressBar(1);
        }
        LoadUI.prototype._createSlideShow = function () {
            var imageAmount = 3;
            var tmpSprite;
            for (var i = 1; i <= imageAmount; i++) {
                tmpSprite = Game.game.add.sprite(0, 0, "screen-" + i);
                tmpSprite.anchor = gameConfig.GameConfig.pointValues.anchorCenter;
                tmpSprite.position.set(Game.dimensions.width * .5, Game.dimensions.height * .5);
                tmpSprite.alpha = 0;
                tmpSprite.width = Game.dimensions.width;
                tmpSprite.height = Game.dimensions.height;
                this._sliderImages.push(tmpSprite);
            }
            this._nextSlide();
            Game.game.time.events.loop(Phaser.Timer.SECOND * 3, this._nextSlide, this);
        };
        LoadUI.prototype._nextSlide = function () {
            try {
                this._sliderImages[this._sliderIndex].alpha = 0;
            }
            catch (e) {
            }
            this._sliderIndex++;
            if (this._sliderIndex === this._sliderImages.length - 1) {
                this._sliderIndex = 0;
            }
            this._sliderImages[this._sliderIndex].alpha = 1;
        };
        LoadUI.prototype._drawLogo = function () {
            this._logo = Game.game.add.sprite(0, 0, "preroll", "logo");
            this._logo.anchor.set(0, 0);
            this._logo.scale.set(.5, .5);
        };
        LoadUI.prototype._drawLoadingBar = function () {
            var barbg = Game.game.add.tileSprite(0, Game.dimensions.height, Game.dimensions.width, Game.scale(50), "preroll", "bar-progress");
            barbg.anchor.set(0, 1);
            barbg.alpha = .5;
            var bar = Game.game.add.tileSprite(0, Game.dimensions.height, 0, Game.scale(50), "preroll", "bar-progress");
            bar.anchor.set(0, 1);
            this._fullBarWidth = Game.dimensions.width;
            this._loadingBar = bar;
        };
        LoadUI.prototype.updateProgressBar = function (percentage) {
            this._percentageLoaded += percentage;
            if (this._percentageLoaded > 100) {
                this._percentageLoaded = 100;
            }
            this._loadingBar.width = this._fullBarWidth * this._percentageLoaded / 100;
        };
        LoadUI.prototype.destroy = function () {
            util.Cleaner.cleanupQueue("LoadUI");
        };
        return LoadUI;
    })();
    ui.LoadUI = LoadUI;
})(ui || (ui = {}));
var ui;
(function (ui) {
    var MapButton = (function (_super) {
        __extends(MapButton, _super);
        function MapButton(x, y, variant, levelIndex) {
            _super.call(this, Game.game);
            switch (variant) {
                case mapConfig.MapButton.Active:
                    this.button = Game.game.add.button(0, 0, "ui", this.buttonClick, this, gameConfig.MapSpriteConfig.spriteKeys[gameConfig.MapScreenSpriteIndexes.MapButtonPlayHover], gameConfig.MapSpriteConfig.spriteKeys[gameConfig.MapScreenSpriteIndexes.MapButtonPlay], gameConfig.MapSpriteConfig.spriteKeys[gameConfig.MapScreenSpriteIndexes.MapButtonDown]);
                    this.enable();
                    Game.game.add.tween(this.button.scale).to({
                        x: 0.95,
                        y: 0.95
                    }, mapConfig.MapConfig.numberValues.mapActiveButtonTweenTimer * Phaser.Timer.SECOND, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
                    break;
                case mapConfig.MapButton.Locked:
                    this.button = Game.game.add.button(0, 0, "ui", this.clickLocked, this, gameConfig.MapSpriteConfig.spriteKeys[gameConfig.MapScreenSpriteIndexes.MapButtonLocked], gameConfig.MapSpriteConfig.spriteKeys[gameConfig.MapScreenSpriteIndexes.MapButtonLocked], gameConfig.MapSpriteConfig.spriteKeys[gameConfig.MapScreenSpriteIndexes.MapButtonLocked]);
                    this.disable();
                    break;
                case mapConfig.MapButton.Unlocked:
                    this.button = Game.game.add.button(0, 0, "ui", this.buttonClick, this, gameConfig.MapSpriteConfig.spriteKeys[gameConfig.MapScreenSpriteIndexes.MapButtonPlayHover], gameConfig.MapSpriteConfig.spriteKeys[gameConfig.MapScreenSpriteIndexes.MapButtonUnlocked], gameConfig.MapSpriteConfig.spriteKeys[gameConfig.MapScreenSpriteIndexes.MapButtonDown]);
                    this.enable();
                    break;
                default:
                    break;
            }
            var targetScale = variant == mapConfig.MapButton.Active ? 1 : mapConfig.MapConfig.numberValues.mapButtonScale;
            this.button.scale.set(targetScale, targetScale);
            this.levelIndex = levelIndex;
            this.button.anchor.set(.5, .5);
            this.button.x = Game.scale(x);
            this.button.y = Game.scale(y);
            this.add(this.button);
        }
        MapButton.prototype.buttonClick = function () {
            events.Manager.mapButtonPressed.fire({
                levelNumber: this.levelIndex
            });
            events.Manager.playSound.fire({ clip: gameConfig.SoundEffectConfig.soundKeys[gameConfig.SoundEffectIndexes.Button] });
        };
        MapButton.prototype.clickLocked = function () {
        };
        MapButton.prototype.enable = function () {
            this.button.inputEnabled = true;
        };
        MapButton.prototype.disable = function () {
            this.button.inputEnabled = false;
        };
        return MapButton;
    })(Phaser.Group);
    ui.MapButton = MapButton;
})(ui || (ui = {}));
var ui;
(function (ui) {
    var RoundButton = (function (_super) {
        __extends(RoundButton, _super);
        function RoundButton(content, clickCallback, color) {
            _super.call(this, Game.game);
            this._button = Game.game.add.button(0, 0, "ui", function () {
                events.Manager.playSound.fire({ clip: gameConfig.SoundEffectConfig.soundKeys[gameConfig.SoundEffectIndexes.Button] });
                clickCallback();
            }, this, "button-highlight-" + color, "button-up-" + color, "button-down-" + color);
            this._button.anchor.set(.5, .5);
            var maxContentDimension = Math.max(content.width, content.height), scaleFactor = this._button.width * .5 / maxContentDimension;
            this.add(this._button);
            content.anchor.set(.5, .5);
            content.scale.set(scaleFactor, scaleFactor);
            this.add(content);
        }
        RoundButton.prototype.enable = function () {
            this._button.inputEnabled = true;
        };
        RoundButton.prototype.disable = function () {
            this._button.inputEnabled = false;
        };
        return RoundButton;
    })(Phaser.Group);
    ui.RoundButton = RoundButton;
})(ui || (ui = {}));
var ui;
(function (ui) {
    var SpriteButton = (function (_super) {
        __extends(SpriteButton, _super);
        function SpriteButton(position, content, size, buttonId, padding) {
            var _this = this;
            if (buttonId === void 0) { buttonId = "red"; }
            if (padding === void 0) { padding = Game.scale(10); }
            _super.call(this, Game.game);
            this._clickCallbacks = [];
            this._hoverCallbacks = [];
            this._downCallbacks = [];
            this._outCallbacks = [];
            this._padding = padding;
            this._buttonId = buttonId;
            this._buttonLeft = Game.game.add.sprite(0, 0, "ui", buttonId + "-left");
            this._buttonLeft.anchor.set(1, .5);
            this.add(this._buttonLeft);
            this._buttonCenter = Game.game.add.tileSprite(0, 0, content.width * 1.5, this._buttonLeft.height, "ui", buttonId + "-mid");
            this._buttonCenter.anchor.set(.5, .5);
            this.add(this._buttonCenter);
            this._buttonRight = Game.game.add.sprite(0, 0, "ui", buttonId + "-right");
            this._buttonRight.anchor.set(0, .5);
            this.add(this._buttonRight);
            this._button = Game.game.add.button(0, 0);
            this._button.anchor.set(.5, .5);
            content.scale.set(.6, .6);
            if (content.anchor.x === 0 && content.anchor.y === 0) {
                content.anchor.set(.5, .5);
            }
            this.add(content);
            this.add(this._button);
            this._button.onInputOver.add(function () { _this._onHover(); });
            this._button.onInputDown.add(function () { _this._onDown(); });
            this._button.onInputUp.add(function () { _this._onClick(); });
            this._button.onInputOut.add(function () { _this._onOut(); });
            this._setup();
            this.position = position.clone();
        }
        SpriteButton.prototype._setup = function () {
            this._buttonLeft.x = Math.ceil(-this._buttonCenter.width * .5) + 1;
            this._buttonRight.x = Math.ceil(this._buttonCenter.width * .5) - 1;
            this._button.width = this.width;
            this._button.height = this.height;
        };
        SpriteButton.prototype._onOut = function () {
            this._setFrame();
            for (var i = 0; i < this._outCallbacks.length; i++) {
                this._outCallbacks[i](this);
            }
        };
        SpriteButton.prototype._onClick = function (playSound) {
            if (playSound === void 0) { playSound = true; }
            if (playSound) {
                events.Manager.playSound.fire({ clip: gameConfig.SoundEffectConfig.soundKeys[gameConfig.SoundEffectIndexes.Button] });
            }
            this._setFrame();
            for (var i = 0; i < this._clickCallbacks.length; i++) {
                this._clickCallbacks[i](this);
            }
        };
        SpriteButton.prototype._onHover = function () {
            this._setFrame('highlight');
            for (var i = 0; i < this._hoverCallbacks.length; i++) {
                this._hoverCallbacks[i](this);
            }
        };
        SpriteButton.prototype._onDown = function () {
            for (var i = 0; i < this._downCallbacks.length; i++) {
                this._downCallbacks[i](this);
            }
        };
        SpriteButton.prototype._setFrame = function (string) {
            this._buttonLeft.frameName = this._buttonId + (string ? '-' + string : '') + "-left";
            this._buttonCenter.frameName = this._buttonId + (string ? '-' + string : '') + "-mid";
            this._buttonRight.frameName = this._buttonId + (string ? '-' + string : '') + "-right";
        };
        SpriteButton.prototype.clearClick = function () {
            this._clickCallbacks = [];
        };
        SpriteButton.prototype.clearHover = function () {
            this._hoverCallbacks = [];
        };
        SpriteButton.prototype.clearDown = function () {
            this._downCallbacks = [];
        };
        SpriteButton.prototype.clearOut = function () {
            this._outCallbacks = [];
        };
        SpriteButton.prototype.onClick = function (callback) {
            this._clickCallbacks.push(callback);
        };
        SpriteButton.prototype.onHover = function (callback) {
            this._hoverCallbacks.push(callback);
        };
        SpriteButton.prototype.onDown = function (callback) {
            this._downCallbacks.push(callback);
        };
        SpriteButton.prototype.onOut = function (callback) {
            this._outCallbacks.push(callback);
        };
        SpriteButton.prototype.click = function () {
            this._onClick(false);
        };
        return SpriteButton;
    })(Phaser.Group);
    ui.SpriteButton = SpriteButton;
})(ui || (ui = {}));
//# sourceMappingURL=game.compiled.js.map
