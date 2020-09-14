var fixedRect, movingRect;

function setup() {
  createCanvas(1300,800);
  fixedRect = createSprite(800, 200, 80, 80);
  fixedRect.shapeColor = "blue";
 
  movingRect = createSprite(300,400,90,80);
  movingRect.shapeColor = "blue";
  
}

function draw() {
  background("rgb(10,255,51)");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  drawSprites();
}