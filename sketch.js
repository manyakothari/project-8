
var box
function setup() {
  createCanvas(400, 400);
  box = createSprite (200,200,400,400);
  
  
}

function draw() {
  background("black");
  if (keyIsDown(RIGHT_ARROW)){
box.shapeColor = "red";
  }
 if (keyIsDown(LEFT_ARROW)){
    box.shapeColor = "yellow";
     }
     if (keyIsDown(DOWN_ARROW)){
       box.shapeColor = "green";
         }
         if (keyIsDown(UP_ARROW)){
            box.shapeColor = "blue";
             }
  drawSprites();
}


