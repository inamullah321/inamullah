var shipImg,ship,seaImage,sea;
function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage= loadAnimation("sea.png");
}

function setup(){
  createCanvas(600,400);

ship = createSprite(120,200,20,20);
ship.addAnimation("ship", shipImg);
ship.scale=0.18;

sea = createSprite(10,350,600,250);
sea.shapeColor="blue";
sea.x=sea.width/2
sea.velocityX=-5;
sea.visible=false

}

function draw() {
  background("skyblue");
if(keyDown("space")){
  ship.velocityY = -10;
}
if (keyDown("Right")) {
  ship.velocityX = 2;
}
ship.velocityY = ship.velocityY+0.8
if(sea.x < 0){
  sea.x = sea.width/2;
}
ship.collide(sea)
drawSprites()
}