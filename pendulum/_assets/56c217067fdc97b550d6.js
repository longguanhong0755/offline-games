
BasicGame.Preloader = function (game) {
};

BasicGame.Preloader.prototype = {

	preload: function () {
		this.load.bitmapFont('carrier_command', '/_assets/58ca5397008daf08f603.png', '/_assets/bee4ac0d058ec3e3eb0f.xml');

		this.load.spritesheet('player', '/_assets/ef118f0559ff929e6055.png', 52, 72);
        this.load.spritesheet('kaboom', '/_assets/c786682fb7a68e4d94e3.png', 128, 128);

		this.load.image('cloud', '/_assets/6383d648c9312cdc9f14.png');
		this.load.image('cloud_finish', '/_assets/ab1e7281d0e7930178e7.png');
		this.load.image('gem', '/_assets/406e5c840d792a8574c8.png');
		this.load.image('bullet', '/_assets/26a1d8f65ec5def868b4.png');
        this.load.image('hud_gem', '/_assets/bf6e3d4143d59093acc8.png');
		this.load.image('indicator', '/_assets/d6801e9244d20dd43cc4.png');
	},

	create: function () {
	},

	update: function () {
        this.state.start('MainMenu');
	}

};
