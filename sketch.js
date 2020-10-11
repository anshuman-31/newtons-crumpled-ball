
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;

var bobobject1,bobObject2,bobObject3,bobObject4,bobObject5;
var constraintLog;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,50,500,5)

	//Create the Bodies Here.
	this.body=bodies.Rectangle(200,50,200,5);

	Engine.run(engine);

	var options = {
		bodyA: Bob.body,
		bodyB:constraintLog.body,
		stiffness: 0.04,
		length: 10,


	}
	var chain = constraint.create(options);
	World.add(world.chain);

}


function draw() {
  rectMode(CENTER);
  background(0);
  constraintLog.display();

  rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
  
  drawSprites();
 
}



