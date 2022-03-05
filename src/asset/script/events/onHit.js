var onHit = {
  playerVsSlime : function(player, target){
    //console.log(target.destroy());
    //http://54.180.90.186:56662/
  },
  playerVsEnemy : function(player, target){
    console.log(target.damage);
    gameScene.this.physics.pause();
    player.setTint(0xff0000);
    gameScene.this.scene.stop();
  },
}
