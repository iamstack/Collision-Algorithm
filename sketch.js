var fixedRect, movingRect,gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200, 400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green"
  fixedRect.velocityX = 2
  fixedRect.velocityY = -2
  movingRect = createSprite(400, 200, 90, 90)
  movingRect.shapeColor = "black"
  gameObject1 = createSprite(400,200,50,50)
  gameObject1.shapeColor = "green"
  gameObject2 = createSprite(600,200,50,50)
  gameObject2.shapeColor = "green"
  gameObject3 = createSprite(800,200,50,50)
  gameObject3.shapeColor = "green"
  gameObject4 = createSprite(1000,200,50,50)
  gameObject4.shapeColor = "green"

}

function draw() {
  background("lightBlue");
  edges = createEdgeSprites();

  fixedRect.bounceOff(edges)
  movingRect.x = mouseX
  movingRect.y = mouseY
  if(isTouching(gameObject4,movingRect)){
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"

  }
  else{
    movingRect.shapeColor = "black"
    fixedRect.shapeColor = "green"
  }
  bounceOff(fixedRect,movingRect)
  drawSprites();
}

