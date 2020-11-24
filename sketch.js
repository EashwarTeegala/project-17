
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80, 315, 20, 20)
  monkey.addAnimation("moving",monkey_running );
  monkey.scale=0.1
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(monkey.x)
  
    fruitGroup= new Group();
  rockGroup= new Group();
  score = 0

  
}


function draw() {
  background("white")
  
  if (keyDown("space")) {
    monkey.velocityY = -8                                      
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
    ground.x =  ground.width/2;
  
  
 fruits();
  rocks();
  
if (fruitGroup.isTouching(monkey)) {
  fruitGroup.destroyEach();
  score=score+1;
  
}
text("Score "+ score, 300,50);
 drawSprites(); 
  
}



 function fruits(){
 if(World.frameCount%80===0) {
   fruit=createSprite(400, 200, 20, 20)
   fruit.scale=0.1
  fruit.addImage(bananaImage)
   
   fruit.y = Math.round(random(100, 200))
   
   fruit.velocityX = -7
   fruit.setLifetime = 100
   
   fruitGroup.add(fruit)
 }
}

function rocks(){
 if(World.frameCount%100===0) {
   rock=createSprite(400, 330, 20, 20)
   rock.scale=0.1
  rock.addImage(obstaceImage)
   
   rock.velocityX = -7
   rock.setLifetime = 100
   
   rockGroup.add(rock)
 }
}