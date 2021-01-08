//Renaming
const Engine = Matter.Engine 
const World = Matter.World 
const Bodies = Matter.Bodies

function setup(){
  createCanvas(400,400);
  //creating our engine
  engine = Engine.create()
  //creating our world inside engine
  world = engine.world

  var option = {
    isStatic: true
  }
  //creating own Bodies
  ground = Bodies.rectangle(200,390,400,20,option)
  //adding object in world
  World.add(world,ground)

  var boption = {
    //bounce
    restitution : 1
  }
  ball = Bodies.circle(200,100,20,boption)
  World.add(world,ball)

  console.log(ground)
}

function draw(){
  background(0);

  Engine.update(engine)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,20)
}
