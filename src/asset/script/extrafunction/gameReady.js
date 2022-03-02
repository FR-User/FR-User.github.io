var gameReady = {
  test : function(){
    console.log(gameScene.this);
  },
  createMap : function(){
    gameScene.this.cameras.main.setBounds(0, 0, 1024, 2048);
    gameScene.this.add.image(0, 0, 'background').setOrigin(0);
  },
  createPlayer : function(){
    gameReady.getPlayer = gameScene.this.physics.add.sprite(384, 284, 'player').setScrollFactor(0);
  },
  createCamera : function(){
    gameScene.this.cameras.main.setZoom(2);
    gameScene.this.cameras.main.centerOn(0, 0);
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
    },
    move : {
      up : function(){
        if(gameScene.controller.up.isDown){
          gameReady.getPlayer.setVelocityY(-160);
        }
      },
      down : function(){
        if(gameScene.controller.down.isDown){
          gameReady.getPlayer.setVelocityY(160);
        }
      },
      left : function(){
        if(gameScene.controller.left.isDown){
          gameReady.getPlayer.setVelocityX(-160);
        }
      },
      right : function(){
        if(gameScene.controller.right.isDown){
          gameReady.getPlayer.setVelocityX(160);
        }
      },
      reset : function(){
        if(gameScene.controller.right.isUp && gameScene.controller.left.isUp){
          gameReady.getPlayer.setVelocityX(0);
        }
        if(gameScene.controller.up.isUp && gameScene.controller.down.isUp){
          gameReady.getPlayer.setVelocityY(0);
        }
      }
    }
  },
  getPlayer : null,
}
