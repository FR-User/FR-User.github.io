var onHit = {
  playerVsSlime : function(player, target){
    //console.log(target.destroy());
  },
  playerVsEnemy : function(player, target){
    console.log(target.damage);
    gameScene.this.physics.pause();
    player.setTint(0xff0000);
  },
}
