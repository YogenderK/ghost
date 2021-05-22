const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var backgroundN;
var PlayB

var gameState=0;
var ghost;
var Iclimber,climber;

function preload(){
    
     backgroundNImg=loadImage("Background.jpg")
     PlayBImg=loadImage("PlayB.jpg")
     HelpBImg=loadImage("HelpB.jpg")
     OnImg=loadImage("SoundOn.png")
     OffImg=loadImage("SoundOff.png")

     gS=loadImage("ghost-standing.png")
}
 



function setup() {

  createCanvas(displayWidth,displayHeight);

  
  engine=Engine.create()
  world=engine.world

  

  bg=createSprite(displayWidth/2,displayHeight/2)
  bg.addImage(backgroundNImg)

  
  ghost=createSprite(displayWidth-1200,displayHeight/2);
  //  ghost.addImage(gS);
    ghost.scale=0.5;
    
    

  PlayB = createSprite(displayWidth/2,displayHeight/2,50,20);

  soundB=createSprite(displayWidth-100,displayHeight-100)
  helpB=createSprite(displayWidth/2, displayHeight/2+30,50,10)  
}

function draw() {

  
  background(backgroundNImg);
  
   var edges = createEdgeSprites();

  if(ghost.collide(edges)){
    ghost.velocityY=0
  }

  Engine.update(engine)

  


if(mousePressedOver(PlayB)){
   
    gameState=1;

  }

 
 

 

  if(gameState===1){

    PlayB.visible =false;
    helpB.visible =false;
    soundB.visible =false;

    ghost.visible=true;
  
    

    bg.velocityX=-5

    if(bg.x < 400){
      bg.x=displayWidth/2
      
    }

    if(keyDown("space") && touches){
      ghost.velocityY=-3;
    } else {
  
    ghost.velocityY+=0.8;
    }


    

    if (frameCount % 60 === 5) {
     
     var   climber=createSprite(1800,Math.round(random(displayHeight/2,displayHeight/2-100)),150,20)
     var  Iclimber=createSprite(climber.x,climber.y-10,150,20)
     // Iclimber.visible=false;

      

      climber.velocityX=-5;
     Iclimber.velocityX=-5;


    Iclimber.depth = ghost.depth;
    ghost.depth = ghost.depth+1;

   
     

    }

   

    console.log(ghost.velocityY)
    
   

    

    

  
  
  
    
  }

  drawSprites();

  

  if(gameState===0){
  
    textSize(48);
   text("ᴡᴇʟᴄᴏᴍᴇ",displayWidth/2-150,displayHeight-600)
  text("𝔾𝕙𝕠𝕤𝕥 ℍ𝕦𝕟𝕥𝕖𝕣",displayWidth/2-150,displayHeight-550)

  ghost.visible=false;
  
  }
}