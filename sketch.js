var garden,rabbit;
var gardenImg,rabbitImg;
var select_sprites;
var frameCount;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
function createRabbit(){rabbit = createSprite(180,340,30,30);
  rabbit = World.mouseX;
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);}
}



function draw() {
  background(0);
  
  edges= createEdgeSprites();

  drawSprites();
}
function createApples(){
  apple = createSprite(random(50,350,),40,10,10);
  apple.scale =0.05;
  apple.addImage(appleImg);

}
function createLeaf(){
  leaf = createSprite(random(50,350,),40,10,10);
  leaf.scale =0.05;
  leaf.addImage(leafImg);
}




if(frameCount%80 == 0 )
  if(select_sprites==1){
createApples();}

  else{
    createLeaf();

  }
