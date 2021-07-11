
function preload(){
seaImage = loadImage("sea.png");
shipImage1 = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png")
} (215,251,100,200)
var sea = createSprite (215,251,100,200);
function setup(){
  createCanvas(400,400);
  spriteName.addImage(seaImage)
}

function draw() {
  background("blue");
 if(sea.x< 2){
   sea.x = sea.width/2;
   
 }
}