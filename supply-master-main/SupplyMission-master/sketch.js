var helicopterIMG, helicopterSprite, packageSprite,packageIMG, box1,box2,box3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10, 40);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	box1Sprite=createSprite(300, 630, 10, 70)
	box2Sprite=createSprite(400, 660, 200, 10)
	box3Sprite=createSprite(500, 630, 10, 70)

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1 = Bodies.rectangle(300, 630, 10, 70, {isStatic:true});
	 World.add(world,box1);
	 box2 = Bodies.rectangle(400, 660, 200, 10, {isStatic:true});
	 World.add(world,box2);
	 box3 = Bodies.rectangle(500, 630, 10, 70, {isStatic:true});
	 World.add(world,box3);



	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	if (keyCode === DOWN_ARROW){
    Matter.Body.setStatic(packageBody, false);
	}
  }
}



