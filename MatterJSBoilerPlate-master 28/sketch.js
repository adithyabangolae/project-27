
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var sling;
var slingRock;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,700,1600,30);
	boy = new Boy(450,600,350,350)
	tree = new Tree(1350,470,450,450)
	rock = new Rock(145,505,50,50)
	mango1 = new Mango(1370,310,70,70)
	mango2 = new Mango(1250,400,70,70)
	mango3 = new Mango(1500,400,70,70)
	mango4 = new Mango(1350,380,70,70)
	mango5 = new Mango(1400,430,70,70)
	slingRock = new Sling(rock.body,{x:345,y:505});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

  boy.display();
  rock.display();
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingRock.display();
  detectionCollision(rock,mango1)
  detectionCollision(rock,mango2)
  detectionCollision(rock,mango3)
  detectionCollision(rock,mango4)
  detectionCollision(rock,mango5)
  drawSprites();
 
}

function mouseDragged() {

    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}


function mouseReleased() {

    slingRock.fly();
}

function detectionCollision(lstone,lmango) {

    mangoBodyPosition = lmango.body.Position
    stoneBodyPosition = lstone.body.Position

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if (distance<=lmango.r+lstone.r) {

      Matter.Body.setStatic(lmango.body,false)
    }

}





