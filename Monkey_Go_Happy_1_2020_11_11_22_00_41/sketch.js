var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var obstacles, food
var r, p

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2
  console.log(ground.x);

  FoodGroup = createGroup();
  obstacleGroup = createGroup();

  score = 0;
}


function draw() {
  background(180);

  food();
  obstacles();

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }


  monkey.collide(ground);

  monkey.velocityY = monkey.velocityY + 0.8

  if (keyDown("space")) {  
    monkey.velocityY = -12;
  }
  
  drawSprites();
}

function food() {

  if (World.frameCount % 80 === 0) {
    banana = createSprite(400, 200, 20, 20);
    banana.scale = 0.1
    banana.addAnimation("banana.png", bananaImage);
    banana.velocityX = -7;
    banana.lifetime = 100;

    r = Math.round(random(1, 4));
    if (r == 1) {
      banana.y = 140;
    } else if (r == 2) {
      banana.y = 160;
    } else if (r == 3) {
      banana.y = 180;
    } else if (r == 4) {
      banana.y = 200;
    }

    FoodGroup.add(banana);
  }
}

function obstacles() {
  if (World.frameCount % 300 === 0) {
    obstacle = createSprite(20, 20, 20, 20);
    obstacle.scale = 0.1
    obstacle.addAnimation("obstacle.png", obstacleImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
    var survivalTime = 0;

    stroke("white");
    textSize(20);
    fill("white");
    text("Score" + score, 500, 500);

    stroke("black");
    textSize(20);
    fill("black");
    survivalTime = Math.ceil(frameCount / frameRate());
    text("Survival Time" + survivalTime, 100, 50)

    p = Math.round(random(1, 4));
    if (p == 1) {
      obstacle.y = 140;
    } else if (p == 2) {
      obstacle.y = 160;
    } else if (p == 3) {
      obstacle.y = 180;
    } else if (p == 4) {
      obstacle.y = 200;
    }


    obstacleGroup.add(obstacle);
  }
}