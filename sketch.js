const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Myworld,Myengine;
var b1,b2;
var ground;

function setup() {
  createCanvas(400,400);

  Myengine = Engine.create();
  Myworld = Myengine.world;

  b1=new Box(200,300,50,50);
  console.log(b1);
  b2=new Box(230,100,50,100);

  ground= new Ground(200,390,400,30)


}

function draw() {
  background("green"); 
  Engine.update(Myengine);

  b1.print();
  b2.print();

  ground.print();



  drawSprites();
}