
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
    var bobObject1=new bob(200,200,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  bobObject1.display();
  
  drawSprites();
 
}



