const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
  createCanvas(windowWidth/2, windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;
  
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world,mConstraint);

  bob1 = new Pendulum(210, 350, "#00b0ff");
	bob2 = new Pendulum(295, 350, "#00b0ff");
	bob3 = new Pendulum(380, 350, "#00b0ff");
	bob4 = new Pendulum(465, 350, "#00b0ff");
	bob5 = new Pendulum(550, 350, "#00b0ff");
	rope1 = new Sling(bob1.body, {x:210, y:80});
	rope2 = new Sling(bob2.body, {x:295, y:80});
	rope3 = new Sling(bob3.body, {x:380, y:80});
	rope4 = new Sling(bob4.body, {x:465, y:80});
  rope5 = new Sling(bob5.body, {x:550, y:80});

  Engine.run(engine);    
}
 
function draw() {
  background(0);
  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bob5.body, {x:mouseX, y:mouseY});
}
function mouseDragged(){
  Matter.Body.setPosition(bob1.body, {x:mouseX, y:mouseY});
}