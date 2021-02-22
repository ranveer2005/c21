var  fr,mr,gameobject1,gameobject2;
var o1,o2;

function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 50);
  fr.shapeColor = "blue";

  gameobject1 = createSprite(700,300,60,60)
  gameobject1.shapeColor = "yellow"

  gameobject2 = createSprite(100,100,60,60)
  gameobject2.shapeColor = "purple"

  o1= createSprite(200,10,50,50);
  o1.shapeColor = "orange"
  o1.velocityY = 5
  o2= createSprite(200,390,50,50);
  o2.velocityY = -5;
  o2.shapeColor = "green"

  mr = createSprite(400,200,50,50)
  mr.shapeColor = "red";
}

function draw() { 
  background(255,255,255);
  
  mr.x = World.mouseX
  mr.y = World.mouseY

  if(collided(mr,gameobject2)){
    mr.shapeColor = "blue";
    gameobject2.shapeColor = "red";
  }
  else{
    mr.shapeColor = "red";
    gameobject2.shapeColor = "purple";
  }
  
  bouncing(o1,o2);

  drawSprites();
}
