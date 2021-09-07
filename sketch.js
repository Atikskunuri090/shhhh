const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundimg, background;

var tower, towerimg, canon, canonimg;

function preload(){
backgroundimg = loadImage("assets/background.gif");
towerimg = loadImage("assets/tower.png")
}

function setup(){
createCanvas(1200,600);
engine = Engine.create();
world = engine.world;
var hi = {isStatic : true}
tower = Bodies.rectangle(150,360,100,200,hi)
World.add(world,tower)
canon = new Canon(300,300,10,10,30)
}

function draw(){
background(0);
Engine.update(engine);
image(backgroundimg, 0, 0, 1200, 600);
push();
imageMode(CENTER);
image(towerimg,tower.position.x,tower.position.y,100,300)
pop();
canon.method()
}