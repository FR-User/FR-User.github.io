var animation = {
  createAnimations : function(){
    gameScene.this.anims.create({
      key: 'playerWalk',
      frames: gameScene.this.anims.generateFrameNumbers('player', {start:0, end:5}),
      frameRate: 10,
      repeat: -1
    });
    gameScene.this.anims.create({
      key: 'playerStop',
      frames: [{key:'player', frame:0}],
      frameRate:20
    });
    gameScene.this.anims.create({
      key: 'enemySlimeMoving',
      frames: gameScene.this.anims.generateFrameNumbers('enemySlime', {start:0, end:4}),
      frameRate: 3,
      repeat: -1,
    });
    gameScene.this.anims.create({
      key: 'enemySnakeMoving',
      frames: gameScene.this.anims.generateFrameNumbers('enemySnake', {start:0, end:5}),
      frameRate: 5,
      repeat: -1,
    })
  },
}
