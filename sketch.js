var trex, obstacle;

function setup() {
  createCanvas(800, 800);


  trex = createSprite(200, 200);
  obstacle = createSprite(300, 300);
  nishita = createSprite(300, 500);
  manuja = createSprite(300, 100);
}

function draw() {
  background(255, 255, 255);
  nishita.x = mouseX;
  nishita.y = mouseY;
  trex.x = mouseX;
  trex.y = mouseY;

  // calling isTouching with specific values/arguments
  if (isTouching(nishita, manuja)) {
    nishita.shapeColor = "#e88ced";
    manuja.shapeColor = "#e88ced";
  } else {
    nishita.shapeColor = "pink";
    manuja.shapeColor = "pink";
  }
  if (isTouching(trex, obstacle)) {
    trex.shapeColor = "#e88ced";
    obstacle.shapeColor = "#e88ced";
  } else {
    trex.shapeColor = "pink";
    obstacle.shapeColor = "pink";
  }

  drawSprites();
}
