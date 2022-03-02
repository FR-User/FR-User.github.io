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
      this.load.spritesheet('player', './asset/image/particle/movingPlayer.png', {
        frameWidth: 32, frameHeight: 32
      });
      this.load.spritesheet('enemySlime', './asset/image/particle/enemySlime.png', {
        frameWidth: 16, frameHeight: 16
      });
      this.load.spritesheet('enemySnake', './asset/image/particle/enemySnake.png', {
        frameWidth: 16, frameHeight: 16
      })

      this.load.spritesheet('enemy', './asset/image/particle/en.png', {
        frameWidth: 24, frameHeight: 24
      });
      this.load.image('ga', './asset/image/particle/ga.png');

      this.load.image('test', './asset/image/particle/aa.png');
    }
    update(){
      gameReady.player.calcMove();
      tracer.trace();

    }
    create ()
    {
      this.setGameTools();
      randomSpawn();

      screenRatio.fitAsWindow(); //게임 크기 조절

      gameReady.createMap(); //맵 생성
      gameReady.createCamera(); //카메라 생성
      gameReady.createPlayer(); //플레이어 캐릭터 생성

      gameReady.keyboard.setReady(); //키보드 입력 로드

      animation.createAnimations(); //애니메이션 추가

      gameReady.enemies = gameScene.this.physics.add.group(); //"적들" 그룹 추가

      //mobSpawner.slime(100, 100);
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
  mapWidth : 1024,
  mapHeight : 2048,
}

function randomSpawn(){
  setTimeout(()=>{
    gameReady.spawnEnemy();
    randomSpawn();
  }, Math.round(Math.random()*2)*200);
}
