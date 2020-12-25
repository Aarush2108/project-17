
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score=0;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600,400);
  
  
  monkey=createSprite(30,300,20,20);
  monkey.addAnimation("monk",monkey_running);
  monkey.scale=0.1;
  
ground=createSprite(300,390,600,20);
  ground.visible=false;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
background("pink");
  
  if(keyDown("space")&&monkey.y>200){
    monkey.velocityY=-10;
    
  }
  monkey.velocityY=monkey.velocityY+1;
  
  ground.velocityX=-3;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  spawnbanana();
  spawnobstacle();
  monkey.collide(ground);
  if(monkey.isTouching(bananaGroup)){
    score=score+1;
    bananaGroup.destroyEach();
  }
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach();
    score=score-1;
  }
  drawSprites();
  fill("white");
  text("score: "+score,400,30);
  
  fill("white");
  textSize(24);
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival time: "+survivalTime,100,50);
}

function spawnbanana(){
  if(frameCount%80===0){
    banana=createSprite(600,Math.round(random(120,200)),20,20);
    banana.addImage(bananaImage);
    banana.velocityX=-3;
    banana.scale=0.1;
    bananaGroup.add(banana);
    banana.lifetime=350;
    
    
  }
}
function spawnobstacle(){
  if(frameCount%300===0){
    obstacle=createSprite(600,360,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3;
    obstacle.scale=0.2;
    obstacle.lifetime=350;
    obstacleGroup.add(obstacle);
    
  }
}



