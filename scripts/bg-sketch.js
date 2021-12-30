let canvas;
let posX = 100, posY = 100;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
}

function draw(){
    background(170);
    ellipse(posX, posY, 100, 100);
    text(String(rotationX), 100, 500);
    text(String(rotationY), 100, 550);
    text(String(rotationZ), 100, 600);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged(){
    posX = mouseX;
    posY = mouseY;
}