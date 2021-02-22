function collided(object1,object2){  
    if(object1.x - object2.x < object1.width/2 + object2.width/2 && 
      object2.x - object1.x < object1.width/2 + object2.width/2 &&
      object1.y - object2.y < object1.height/2 + object2.height/2 &&
      object2.y - object1.y < object1.height/2 + object2.height/2){
      return true
        }
    else{    
      return false
    }
  
  }

  function bouncing(object1,object2){
    if(object1.y - object2.y < object1.height/2 + object2.height/2 && 
        object2.y - object1.y  < object1.height/2 + object2.height/2 
      ){
       object1.velocityY = -1 * object1.velocityY;
       object2.velocityY = -1 * object2.velocityY
    }
   if(object1.y > 374){
    object1.velocityY = 5
   }
   if(object2.y < 26){
    object2.velocityY =-5
   }
  
  }