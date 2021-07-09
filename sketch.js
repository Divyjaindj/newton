
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var log
 var diameter 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Log(100,100,40,10)
ball1=new Ball(60,120,20);
ball2=new Ball(80,120,20);
ball3=new Ball(100,120,20);
ball4=new Ball(120,120,20);
rope1 = new sligshot(ball1.body,roof.body,-diameter*2,0)
rope2 = new sligshot(ball2.body,roof.body,-diameter*1,0);
rope3 = new sligshot(ball3.body,roof.body,diameter*1,0);
rope4 = new sligshot(ball4.body,roof.body,diameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
ball1.display();
ball2.display();
ball3.display();
ball4.display();


  drawSprites();
 }



