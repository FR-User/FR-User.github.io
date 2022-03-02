class Example extends Phaser.Scene
{
  setGameTools(){
    gameScene.this = this;
  }
    constructor ()
    {
        super();
    }

    preload ()
    {
      this.load.image('background', './asset/image/background/earthbound-scarab.png');
      this.load.image('player', './asset/image/particle/wo.png');
    }
    update(){
      gameReady.player.calcMove();
    }
    create ()
    {
      this.setGameTools();


      screenRatio.fitAsWindow();

      gameReady.createMap();
      gameReady.createCamera();
      gameReady.createPlayer();

      gameReady.keyboard.setReady();

    }


}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-game',
    width: 800,
    height: 600,
    pixelArt: true,
    scale: {
      mode: Phaser.Scale.RESIZE,
    },
    physics: {
        default: 'arcade',
    },
    scene: [ Example ]
};

const game = new Phaser.Game(config);

var gameScene = {
  this : null,
  controller : null,
}
