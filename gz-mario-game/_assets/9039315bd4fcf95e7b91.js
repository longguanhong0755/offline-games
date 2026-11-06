//declaring the variables
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bg, bg_image, ground, ground_image, invisibleground;
var mario, mario_image, collided, collided_image;
var brick_image;
var obstacle, obstacle_image;
var score = 0;
var obstaclesGroup, bricksGroup;
var gameover, gameover_image, reset, reset_image;
var jumpsound, diesound, checkpoint;


function preload() {
  bg_image = loadImage("/_assets/23a3ce3b0d1d5ff931bf.png");
  ground_image = loadImage("/_assets/726fc688ef2fd6186350.png");
  mario_image = loadAnimation("/_assets/ccafb393bb636d48cd3c.png", "/_assets/4f2888d4130b15db4edd.png", "/_assets/95c83681d1722bdc16e8.png", "/_assets/406f117f3a94f230fc1f.png");
  brick_image = loadImage("/_assets/a3013a0ccf6bd1fe86fc.png");

  obstacle_image = loadAnimation("/_assets/dfa9d3b1c58937a6f06b.png", "/_assets/35097731cc551615e2bf.png",
                                "/_assets/03d8fa77e13632d256b8.png", "/_assets/96182c165f8882553a10.png");
  collided_image = loadImage("/_assets/61c6abb0ce4d644774a6.png");
  gameover_image = loadImage("/_assets/93717e304c1678382bd6.png");
  reset_image    = loadImage("/_assets/9af1e0d58ea8935a9e88.png");

  //loading sounds.
  jumpsound=loadSound("/_assets/e5349fddba83ece01443.mp3");
  diesound=loadSound("/_assets/284633fac7e26014a823.mp3");
  checkpoint=loadSound("/_assets/3325dd7d8988e67bd368.mp3")
}

function setup() {
  createCanvas(600, 400);

  //creating background sprite.  
  bg = createSprite(295, 210, 600, 200);
  bg.addImage(bg_image);
  bg.scale = 1;

  //creating ground
  ground = createSprite(1, 380, 250, 50);
  ground.addImage(ground_image);
  ground.scale = .99;
  ground.x = 1;
  ground.width = width / 2;

  //creating invisibleground
  invisibleground = createSprite(300, 368, 600, 50);
  invisibleground.visible = false
  //creating the mario
  mario = createSprite(35, 300, 20, 50);
  mario.addAnimation("mariorunning", mario_image);
  mario.scale = 1.5;
  mario.addAnimation("collided", collided_image);
  mario.setCollider("circle", 0, 0, 15);
  //mario.debug=true;

  //creating groups
  obstaclesGroup = new Group();
  bricksGroup = new Group();

  gameover = createSprite(300, 200);
  gameover.addImage(gameover_image);
  reset = createSprite(375, 275);
  reset.addImage(reset_image);
}

function draw() {
  background("white");
  //console.log(mario.y)
    console.log(gameState);
  
  if (gameState === PLAY) 
 
  {
    //score
   score = score + Math.round(getFrameRate()/60);
     if(score>0 && score%100===0)
      {
        checkpoint.play();
        
      }

    //making the ground mooving
    ground.velocityX = -(2+3*score/100);
    
    if (ground.x < 1) {
      ground.x = width / 2
    }

    //mario jump
    if (keyDown("space") && mario.y > 250)
    {
      mario.velocityY = -6;
      jumpsound.play();

    }

    //gravity
    mario.velocityY = mario.velocityY + .5

    mario.collide(invisibleground);
    
   


    bricks();
    obstacles();
    gameover.visible = false;
    reset.visible = false;

  }


  if (obstaclesGroup.isTouching(mario)) 
  {
    mario.velocityY = 0;
    gameState = END;
    diesound.play();

  } 
    else if (gameState === END) {
    gameover.visible = true;
    reset.visible = true;
    //making the ground still

    ground.velocityX = 0;
    //change mario animation
    mario.changeAnimation("collided", collided_image);
    mario.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    bricksGroup.setVelocityXEach(0);
    //never destroy the object.
    obstaclesGroup.setLifetimeEach(-1);
    bricksGroup.setLifetimeEach(-1);
      
      
      


      //restarting the game.
      if(mousePressedOver(reset))
        
        {
          
          restart();
          
        }
      

  }

  drawSprites();
  //text("x:"+mouseX+"y:"+mouseY,10,10);
  fill("red");
  textSize(20)
  text("Score" + score, 400, 50);
}

function bricks() {
  if (frameCount % 60 === 0)

  {
    var brick = createSprite(550, 150, 20, 20);

    brick.addImage(brick_image);
    brick.velocityX = -3
    brick.y = Math.round(random(100, 250));
    bricks.lifetime = 6
    brick.depth = mario.depth;
    mario.depth = mario.depth + 1;
    bricksGroup.add(brick);

  }
}

//creating obstacle

function obstacles() {
  if (frameCount % 60 === 0) {
    obstacle = createSprite(250, 330, 20, 20);
    obstacle.velocityX = -(2+score/100);
    obstacle.addAnimation("obstaclerunning", obstacle_image);
    // obstacle.lifetime= 66;
    obstaclesGroup.add(obstacle);
  }
}
function restart()
{
  gameState=PLAY;
  reset.visible=false;
  gameover.visible=false;
  obstaclesGroup.destroyEach();
  bricksGroup.destroyEach();
  mario.changeAnimation("mariorunning", mario_image);
  score = 0;

  
  
}

