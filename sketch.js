const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
var engine,world

function setup(){
  engine = Engine.create();
  world = engine.world;
  createCanvas(1600,800);
  arrow = new Arrow(100,200,80,10);
  shooter = new Shooter(arrow.body,{x:100,y:200});
}

function draw(){
  background(0,0,0);
  Engine.update(engine);
  arrow.display();
  shooter.display();
}

function mouseDragged(){
  Matter.Body.setPosition(arrow.body,{x: mouseX, y: mouseY});
}