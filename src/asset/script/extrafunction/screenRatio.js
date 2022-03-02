var screenRatio = {
  fitAsWindow : function(){
    try{
      gameScene.this.scale.refresh();
    }catch(e){
      console.error(e);
    }
  }
}
