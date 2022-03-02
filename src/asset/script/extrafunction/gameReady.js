var gameReady = {
  createMap : function(){
    gameScene.this.cameras.main.setBounds(0, 0, gameScene.mapWidth, gameScene.mapHeight);
    gameScene.this.physics.world.setBounds(0, 0, gameScene.mapWidth, gameScene.mapHeight);
    gameScene.this.add.image(0, 0, 'background').setOrigin(0);
  },
  createPlayer : function(){
    gameReady.getPlayer = gameScene.this.physics.add.sprite(0, 0, 'player').setScale(1);
    gameReady.getPlayer.setCollideWorldBounds(true);


    gameScene.this.cameras.main.startFollow(gameReady.getPlayer);
    gameScene.this.physics.add.image(500, 500, 'test').setScale(1.1);
    gameScene.this.physics.add.image(550, 500, 'ga').setScale(1.3);
  },
  createCamera : function(){
    gameScene.this.cameras.main.setZoom(1.5);
  },
  keyboard : {
    setReady : function(){
      gameScene.controller = gameScene.this.input.keyboard.createCursorKeys();
    }
  },
  player : {
    calcMove : function(){
      this.move.up();
      this.move.down();
      this.move.left();
      this.move.right();

      this.move.reset();

      //gameScene.this.cameras.main.centerOn(gameReady.camera.x, gameReady.camera.y);
    },
    move : {
      up : function(){
        if(gameScene.controller.up.isDown){
          gameReady.getPlayer.setVelocityY((0 - gameReady.camera.speedVector));
          gameReady.getPlayer.anims.play('playerWalk', true);
          //gameReady.getPlayer.y -= gameReady.camera.speed;
          //gameReady.camera.y -= gameReady.camera.speed;
        }
      },
      down : function(){
        if(gameScene.controller.down.isDown){
          gameReady.getPlayer.setVelocityY(gameReady.camera.speedVector);
          gameReady.getPlayer.anims.play('playerWalk', true);
          //gameReady.getPlayer.y += gameReady.camera.speed;
          //gameReady.camera.y += gameReady.camera.speed;
        }
      },
      left : function(){
        if(gameScene.controller.left.isDown){
          gameReady.getPlayer.setVelocityX((0 - gameReady.camera.speedVector));
          gameReady.getPlayer.anims.play('playerWalk', true);
          //gameReady.getPlayer.x -= gameReady.camera.speed;
          //gameReady.camera.x -= gameReady.camera.speed;
        }
      },
      right : function(){
        if(gameScene.controller.right.isDown){
          gameReady.getPlayer.setVelocityX(gameReady.camera.speedVector);
          gameReady.getPlayer.anims.play('playerWalk', true);
          //gameReady.getPlayer.x += gameReady.camera.speed;
          //gameReady.camera.x += gameReady.camera.speed;
        }
      },
      reset : function(){
        if(gameScene.controller.right.isUp && gameScene.controller.left.isUp){
          gameReady.getPlayer.setVelocityX(0);
          //gameReady.getPlayer.anims.play('playerStop', true);
        }
        if(gameScene.controller.up.isUp && gameScene.controller.down.isUp){
          gameReady.getPlayer.setVelocityY(0);
          //
        }
        if(gameScene.controller.right.isUp && gameScene.controller.left.isUp && gameScene.controller.up.isUp && gameScene.controller.down.isUp){
          gameReady.getPlayer.anims.play('playerStop', true);
        }
      }
    },
  },
  enemies : null,
  getPlayer : null,
  camera : {
    x : 400,
    y : 300,
    speed : 5,
    speedVector : 160,
  },
  spawnEnemy : function(){
    mobSpawner.slime(Math.round(Math.random()*gameScene.mapWidth), Math.round(Math.random()*gameScene.mapHeight));
    mobSpawner.snake(Math.round(Math.random()*gameScene.mapWidth), Math.round(Math.random()*gameScene.mapHeight));

  }
}
