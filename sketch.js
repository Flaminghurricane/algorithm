var fixedRect,movingRect;
function setup() {
  createCanvas(1600,800);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect = createSprite(900,200,50,80);
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && 
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  }

  if(movingRect.x-rect.x<rect.width/2+movingRect.width/2 && 
    rect.x-movingRect.x<rect.width/2+movingRect.width/2 && 
    movingRect.y-rect.y<rect.height/2+movingRect.height/2 && 
    rect.y-movingRect.y<rect.height/2+movingRect.height/2)
    {movingRect.shapeColor="blue";
    rect.shapeColor="blue";
    }






else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";
rect.shapeColor="green";
} 














  drawSprites();
}
