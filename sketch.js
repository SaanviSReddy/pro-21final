

var speed,weight;
var bullet,thickness;

var wall;

var deformation;
function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50,200,20,20);
  bullet.shapeColor="white";
  
  wall=createSprite(1000,200,thickness,height/2);
  speed= Math.round(random(223,321));
  bullet.velocityX=speed;
  bullet.velocityY=0;
 weight=Math.round(random(30,52));
 thickness=Math.round(random(22,83));
}

function draw() {
  background(0); 

if((bullet.x+bullet.width)>=wall.x)
{
  bullet.velocityX=0;
  console.log("bullet xposition "+bullet.x);
  console.log(wall.x+wall.width);
  var damage=(0.5*speed*speed*weight)/Math.pow(thickness,3);

if(damage>10){
  
  wall.shapeColor=color(255,0,0);
}
if(damage<10){
wall.shapeColor=color(0,255,0);

}


}
   
  drawSprites();
}