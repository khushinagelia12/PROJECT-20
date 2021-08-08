function isTouching(cat,mouse){
    if(cat.x - mouse.x <mouse.width/2 + cat.width/2 
    && mouse.x - cat.x<object2.width/2 + cat.width/2
    && cat.y - mouse.y <mouse.height/2 + cat.height/2 
    && mouse.y - cat.y<mouse.height/2 + cat.height/2){
    return true;
  }
  else{
    return false;
  }
}