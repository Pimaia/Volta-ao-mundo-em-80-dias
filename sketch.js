var fazenda;
var up, up1, up2, up3;
var detetive, predio, azul, blue, it;


function preload(){
  fazenda = loadImage ("./assets/bg.png");
  up1 = loadAnimation("./assets/balloon1.png", "./assets/balloon2.png", "./assets/balloon3.png");
  detetive = loadImage("./assets/obsBottom1.png");
  azul = loadImage ("./assets/obsBottom2.png");
  predio  = loadImage ("./assets/obsBottom3.png");
  it = loadImage ("./assets/obsTop1.png");
  blue = loadImage ("./assets/obsTop2.png");
}

function setup() {
  createCanvas(1570, 805);

  up = createSprite(90, 150, 50, 50);
  up.addAnimation("altasaventuras", up1);
  up.scale = 0.5;


}

function draw() {
  background(fazenda);

  if(keyDown ("UP_ARROW")){
    up.velocityY = -15;
  }
  up.velocityY += 1.3;

  drawSprites();
}