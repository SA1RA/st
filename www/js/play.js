// state: st.play

'use strict'
var st = {};
st.Play = function () {};

st.Play.prototype = {

  init: function () {
    console.log("%c~~~ Booting the st ~~~\n Compliments of Alucard and others",
                "color:#fdf6e3; background:#07364");
  },

  preload: function () {
    this.load.image('background','assets/sprites/os.png');
    this.load.spritesheet('obj','assets/sprites/bb.png',31,64,4);
    this.load.spritesheet('player','assets/sprites/ac.png',96,64,23);
  },

  create: function () {

    //background
    this.background = this.add.tileSprite(0,0,320,568,'background');
    this.background.autoScroll(50,0);
    this.background.scale.set(1);

    //obj
    this.obj = this.add.sprite(31,64,'obj');
    this.obj.anchor.setTo(0.5, 0.5);
    this.obj.animations.add('blink');
    this.obj.animations.play('blink',2,true);

    //player
    this.player = this.add.sprite(100,400,'player');
    this.player.anchor.setTo(0.5, 0.5);
    this.player.animations.add('blink');
    this.player.animations.play('blink',2,true);

    //movment keys
    this.cursors = game.input.keyboard.createCursorKeys();
  },

  update: function () {
    if (this.obj.y =< 400) {
      this.obj.y += 400;
    }

    if (this.cursors.left.isDown) {
      this.player.x -= 4;
    }
    if (this.cursors.right.isDown) {
      this.player.x += 2;
    }
  }
}
