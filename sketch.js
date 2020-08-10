var bgIMG,paperIMG,packageBody,dustbinBottomBody;
var dustbinLeftBody,dustbinRightBody,dustbinIMG;
var dustbin,paperObjectBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
    //bgIMG=loadImage("house.png")
	
	//dustbinIMG=loadImage("dustbingreen.png")
	
	//paperIMG=loadImage("paper.png")
	
}

function setup() {
	createCanvas(800, 600);

	ground=createSprite(400,600,800,30);
	ground.shapeColor=color(0,255,0);

   // bg=createSprite(400,300,800,700)
	//bg.addImage(bgIMG)
   // bg.scale=3.2

   dustbinLeftSprite = createSprite(630, 530, 30, 150)
   dustbinLeftSprite.shapeColor = 'yellow'
   dustbinRightSprite = createSprite(770, 530, 30, 150)
   dustbinRightSprite.shapeColor = 'yellow'
   dustbinBottomSprite = createSprite(680, 590, 150, 20) 
   dustbinBottomSprite.shapeColor = 'yellow'
	//dustbin.addImage(dustbinIMG)
	//dustbin.scale=0.3

	paper=createSprite(50,520,50,50);
	paper.shapeColor=color(255,0,255); 
	//paper.addImage(paperIMG)
	//paper.scale=0.2
	


	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(50,520,50,50, {restitution:0.5, isStatic:true});
	World.add(world, paperBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);

  dustbinBottomBody = Bodies.rectangle(410, 345, 150, 20 , {isStatic:true});
  World.add(world, dustbinBottomBody); 
  dustbinLeftBody = Bodies.rectangle(370, height-70, 30, 100 , {isStatic:true});
   World.add(world, dustbinLeftBody); 
   dustbinRightBody = Bodies.rectangle(500, height-70, 30, 100 , {isStatic:true});
	World.add(world, dustbinRightBody);

	

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  Matter.Body.applyForce(paperObjectBody,paperObjectBody.position,{x:85,y:-85});
	 }
   }
