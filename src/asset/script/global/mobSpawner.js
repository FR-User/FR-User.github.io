var mobSpawner = {
  slime : function(x, y){
    var localSlime = gameReady.enemies.create(x, y, 'enemySlime').setScale(1.7);
    localSlime.setCollideWorldBounds(true);
    localSlime.setBounce(1);
    localSlime.damage = 100;
    localSlime.anims.play('enemySlimeMoving', true);
    gameScene.this.physics.add.collider(gameReady.getPlayer, localSlime, onHit.playerVsEnemy, null, gameScene.this);
  },
  snake : function(x, y){
    var localSnake = gameReady.enemies.create(x, y, 'enemySnake').setScale(1.5);
    localSnake.setCollideWorldBounds(true);
    localSnake.setBounce(1);
    localSnake.damage = 50;
    localSnake.anims.play('enemySnakeMoving', true);
    gameScene.this.physics.add.collider(gameReady.getPlayer, localSnake, onHit.playerVsEnemy, null, gameScene.this);
  },
}
