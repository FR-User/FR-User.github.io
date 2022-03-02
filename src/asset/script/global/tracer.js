var tracer = {
  trace : function(){
    gameReady.enemies.children.iterate(function(child){
      child.setVelocityY((gameReady.getPlayer.y - child.y)/10);
      child.setVelocityX((gameReady.getPlayer.x - child.x)/10);
    });
  },
  //traceSpeed : 100,
}
