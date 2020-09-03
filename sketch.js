
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gamestate = "firstStage";
var  ball,img,paddle;
 var score = 0;
 var database;

function preload()
{
  backgroundimg = loadImage("co_background.jpg");
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png");
  resetimg = loadImage('reset_button_final.png');
  larrowimg = loadImage("leftArrow.png");
  rarrowimg = loadImage("rightArrow.png");
  gamebac  = loadImage("Game.jpg");
}

function setup() {
	canvas = createCanvas(320,500);
    /*engine = Engine.create();
  world = engine.world;*/
  
  database = firebase.database();
  codesubmit = createButton('Submit');
  codeinput = createInput();
firstPage = new FirstPage();
secondPage = new Register1();
thirdPageyes = new Yes(); 
thirdPageno = new No();
checkPage = new Check();
ball=createSprite(160,250,20,20);
ball.addImage (ballimg); 
ball.velocityY = 10; 
ball.visible = false ;
paddle=createSprite(160,400,20,100);
paddle.addImage(paddleimg);
paddle.scale = 2;
paddle.visible = false ;
reset = createSprite(160,300,10,10);
reset.addImage(resetimg);
reset.scale = 0.2;
reset.visible = false;
larrow = createSprite(100,480,10,10);
larrow.addImage(larrowimg);
larrow.visible = false;
rarrow = createSprite(220,480,10,10);
rarrow.addImage(rarrowimg);
rarrow.visible = false;
//vaccine = new Vaccine();
//novaccine = new NotVaccine();

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundimg);

  if(gamestate === "firstStage"){
    textSize(50);
    fill(0);
    text("Check It!",50,100);
    firstPage.display();
    //secondPage.hide();
  }
  if(gamestate === "secondStage"){
    secondPage.display();
  }
  if(gamestate === "text"){
    fill(255);
    textSize(15);
    strokeWeight(4);
    text("Did you take the Covid-19 Vaccine?",40,355);
  }
  if(gamestate === "thirdStageyes"){
    thirdPageyes.display();
  }
  if(gamestate === "text2"){
    fill(255);
    textSize(20);
    strokeWeight(4);
    text("Registered Succesfully !",50,175);
    /*text("B4u3C",140,200);
    text("Take this code to unlock the game",10,225);*/
    //gamestate = "serve";
  }
if(gamestate === "thirdStageno"){
  fill(255);
    textSize(20);
    strokeWeight(4);
    text("Ok but when you will we vaccined",10,50);
    text("then please complete your",40,75);
    text("REGISTERING part here👇🏻",40,100);
    /*text("B4u3C",140,300);
    text("Take this code to unlock the game",10,325);*/
    thirdPageno.display();
}
if(gamestate === "text3"){
  fill(255);
    textSize(20);
    strokeWeight(4);
    text("Registered Succesfully !",50,175);
    /*text("B4u3C",140,300);
    text("Take this code to unlock the game",10,325);*/
    thirdPageno.input.position(100,45);
    thirdPageno.button.position(200,110);
    //gamestate = "serve";
}
if(gamestate === "serve"){
  //createCanvas(400,400);
  background(gamebac);
  ball.velocityX = 0;
  ball.velocityY = 0;
  ball.visible = true;
  paddle.visible = true;       
  textSize(20);
  fill(0);
  text("Press Space to Start",75,200);
  text("Can you score more than 100",30,100);
  reset.visible = false;
  ball.x = 160;
  ball.y = 250;
  paddle.x = 160;
  paddle.y = 400;
  score = 0;
  text("Score : "+score,30,50);
  if(keyDown("space")){
    gamestate = "play"; 
    ball.velocityY = 5;  
  }
}
if(gamestate === "play"){
  background(gamebac);
  larrow.visible = true;
  rarrow.visible = true;
  //createCanvas(400,400);
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(paddle,explosion);
  textSize(20);
  fill(0);
  text("Score : "+score,30,50);
  paddle.collide(edges);
  
  if(keyDown(LEFT_ARROW)||mousePressedOver(larrow))
  {
    paddle.x=paddle.x-20;
  }
  
  if(keyDown(RIGHT_ARROW)|| mousePressedOver(rarrow))
  {
    paddle.x=paddle.x+20;
  }
  if(ball.y>500){
    gamestate = "over";
  }
  if(frameCount%60 === 0){
    ball.velocityY = ball.velocityY+10;
  }
  if(ball.isTouching(paddle)){
    score = score+1;
  }
}

if(gamestate === "over"){
  background(gamebac);
  textSize(20);
  fill(0);
  text("Score : "+score,30,50);
  //createCanvas(400,400);
  textSize(20);
  fill(0);
  text("Game Over !",100,200);
  if(score<100){
    text("OOPs Better Luck Next Time",50,100);
  }
  if(score>=100){
    text("Good Now try to break your score",10,100);
  }
  reset.visible = true;
  larrow.visible = false;
  rarrow.visible = false;
  if(mousePressedOver(reset)){
    gamestate = "serve";
  }
}

if(gamestate === "checkStage1"){
checkPage.display();
}
/*if(gamestate === "pstage"){
  vaccine.getPositive();
  vaccine.updatePositive();
  vaccine.update();
  vaccine.name = secondPage.input;
}
if(gamestate === "nestage"){
  novaccine.getPositive();
  novaccine.updatePositive();
  novaccine.update();
  novaccine.name = secondPage.input;
}*/
  drawSprites();
 
}


function explosion()
{
  ball.velocityX=random(-8,8);
}
/*function mouseClicked(){
  ball.velocityY = 5;
  gamestate = "play";
}
function hide(){
  codesubmit.position(0,0);
  codeinput.position(0,0);
}*/