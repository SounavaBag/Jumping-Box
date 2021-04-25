var box;
var block1, block2,block3, block4;
var edges;


function setup () {
 createCanvas(800,600);

    block1 = createSprite(100,595,180,30);
    block1.shapeColor = "pink";

    block2 = createSprite(300,595,180,30);
    block2.shapeColor = "blue";

    block3 = createSprite(500,595,180,30);
    block3.shapeColor = "red";

    block4 = createSprite(700,595,180,30);
    block4.shapeColor = "yellow";

    box = createSprite(Math.round(random(20,784), 50, 10, 10));
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 4;
    box.scale = 0.5;

}

function draw () {
    background("grey");

    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(box.isTouching(block1) || box.bounceOff(block1)) {
        box.shapeColor = "pink";
        box.bounceOff(block1);
        
    }

    if(box.isTouching(block2) || box.bounceOff(block2)) {
        box.shapeColor = "blue";
        box.bounceOff(block2);
        
    }

    if(box.isTouching(block4) || box.bounceOff(block4)) {
        box.shapeColor = "yellow";
        box.bounceOff(block4);
        
    }

    if(box.isTouching(block3)) {
        box.shapeColor = "red";
        box.velocityX = 0;
        box.velocityY = 0;
    }
    drawSprites();
}