var fazenda;
var up, up1, up2, up3;
var detetive, predio, azul, blue, it;
var vida, morte;


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
  up.scale = 0.45;

  vida = new Group();
  morte = new Group();
}

function draw() {
  background(fazenda);

  if(keyDown ("UP_ARROW")){
    up.velocityY = -15;
  }
  up.velocityY += 1.3;

  ar();
  terra();

  drawSprites();
}

function ar (){
  if(frameCount % 80 === 0){
    oxigenio = createSprite(1600, random(0, height/2), 45, 45);
    oxigenio.velocityX = -5;
    pi = Math.round(random(1,2));
    switch(pi){
      case 1: oxigenio.addImage(blue)
              oxigenio.scale = 0.15;
      break;
      case 2: oxigenio.addImage(it)
              oxigenio.scale = 0.15;
      break;
      default: break;
    }
    oxigenio.lifetime = 330;  

    vida.add(oxigenio);
  }
}

function terra (){
  if(frameCount % Math.round (random (60, 100)) === 0){
    solo = createSprite(1600, 750, 45, 45);
    solo.velocityX = -5;
    circulo = Math.round(random(1, 3));
    switch(circulo){
      case 1: solo.addImage(detetive)
              solo.scale = 0.25;
              solo.y = 590;
      break;
      case 2: solo.addImage(predio)
              solo.scale = 0.25;
              solo.y = 570;
      break;
      case 3: solo.addImage(azul)
              solo.scale = 0.15;
              solo.y = 680;
      break;
      default: break;
    }
    solo.lifetime = 370;  

    morte.add(solo);
  }
}