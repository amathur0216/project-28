
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var ground1;
var stone;
var tree;
var mango1, mango2, mango3, mango4;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(400, 690, 800,20);
stone = new Stone(100, 300, 20, 20);
tree = new Tree(600, 400, 400, 600);
mango1 = new Mango(600, 400);
mango2 = new Mango(620, 420);
mango3 = new Mango(640, 410);
mango4 = new Mango(590, 430);
boy = new Boy(150, 600, 150, 400);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  boy.display();
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  keyPressed();


  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  stone.fly();
}


function detectCollision(Lstone, Lmango){
  mangoBodyPosition = Lmango.body.position;
stoneBodyPosition = Lstone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<= Lmango.r + Lstone.r){
  Matter.Body.setStatic(Lmango.body, false);
}

}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(stone.body, {x: 100, y: 300});
  }
}
