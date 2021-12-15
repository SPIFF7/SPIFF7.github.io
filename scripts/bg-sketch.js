let canvas;
let posX = 100, posY = 100;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);   //mudar para displayWidth e height?
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
}

function draw(){
    background(170);
    ellipse(posX, posY, 100, 100);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged(){
    posX = mouseX;
    posY = mouseY;
}