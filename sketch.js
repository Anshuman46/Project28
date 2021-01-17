
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg;
var nground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var stones;
var tree,treeImg;


function preload()
{
	boyImg = loadImage("images/boy.png");
	treeImg = loadImage("images/tree.png");	
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	nground = new Ground();

	stones = new Stone(100,460,150);
	mango1 = new Mango(600,290,100);
	mango2 = new Mango(855,325,35);
	mango3 = new Mango(670,260,35);
	mango4 = new Mango(730,200,35);
	mango5 = new Mango(710,320,36);
	mango6 = new Mango(780,250,35);
	mango7 = new Mango(825,170,33);

	attach = new Launcher(stones.body,{x:100,y:465});

	tree=createSprite(775,368);
	tree.addImage(treeImg);
	tree.scale=0.42;

	boy=createSprite(160,550);
	boy.addImage(boyImg);
	boy.scale=0.125;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black");
  textSize(18);

  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  
  drawSprites();

  nground.display();

  stones.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

 
}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}



