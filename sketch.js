var bullet,wall ; 
var speed,weight ; 
var thickness;

function setup() {
 var canvas =  createCanvas(1200,400);
 canvas.shapeColor = color(80,80,80);


  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
 bullet =  createSprite(50,200,50,50);
 fill("white");
 wall = createSprite(800,200,thickness,height/2);
 fill("red");
 bullet.velocityX = speed
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge) 
  {
return true 
  }
return false;

}

function draw() {
  background(80,80,80);  
  if (hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

if (damage>10)
 {
wall.shapeColor = color (0,255,0);
}
if (damage<10)
 {
  wall.shapeColor = color(255,0,0);
}
}

  drawSprites();
}