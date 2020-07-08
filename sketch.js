var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground 
var boxSprite1, boxSprite2, boxSprite3; 
var box1Body, box2Body, box3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxSprite1=createSprite(300,height-85,20,100);  
	boxSprite1.shapeColor = color(255,0,0);  

	boxSprite2=createSprite(500,height-85,20,100); 
	boxSprite2.shapeColor = color(255,0,0);  

	boxSprite3 = createSprite(400,height-45,200,20); 
	boxSprite3.shapeColor = color(255,0,0);  



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	
	box1Body = Bodies.rectangle(300,height-85,20,100, {isStatic:true});
	World.add(world, box1Body);  

	box2Body = Bodies.rectangle(500,height-85,20,100, {isStatic:true});
	World.add(world, box2Body); 

	box3Body = Bodies.rectangle(400,height-45,200,20, {isStatic:true});
	World.add(world, box3Body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



