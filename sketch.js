var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orange,orangeImg;
var red,redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  bunnyHop();
  dropsGravity();
}

//movimento do cueio
function bunnyHop(){
  rabbit.x=World.mouseX;

  if(bunnyHop.x<50){
    rabbit.x=50;
  }
  if (rabbit.x>350){
    rabbit.x=350;
  }
}

//crie objetos
function dropsGravity(){
  if (frameCount%150===0){
  apple = createSprite(50,0,30,30);
  apple.x=Math.round(random(50,350));
  apple.scale=0.05
  apple.velocityY=+4;
  apple.addImage(appleImg);
  apple.depth=rabbit.depth;
  rabbit.depth++;
 }
  if (frameCount%60===0){
  orange = createSprite(50,0,30,30);
  orange.x=Math.round(random(50,350));
  orange.scale=0.05
  orange.velocityY=+4;
  orange.addImage(orangeImg);
  orange.depth=rabbit.depth;
  rabbit.depth++;
}
  if (frameCount%90===0){
  red = createSprite(50,0,30,30);
  red.x=Math.round(random(50,350));
  red.scale=0.05
  red.velocityY=+4;
  red.addImage(redImg);
  red.depth=rabbit.depth;
  rabbit.depth++;
}

}