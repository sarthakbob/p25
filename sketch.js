
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var dustbin,paper,ground;
var engine,world;

function preload()
{	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Trashcan(1000,650)
	paper = new Paper(150,450,40)
	ground = new Ground(700,670,1800,20);

	var render = Render.create(
		{ element: document.body, engine: engine, options:
		 { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#ADD8E6");
  
  dustbin.display();
  paper.display();
  ground.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

