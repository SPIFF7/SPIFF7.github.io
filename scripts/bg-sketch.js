let canvas;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
}

function draw(){
    background(170);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged(){
    ellipse(mouseX, mouseY, 100, 100);
}

function touchMoved(){
    ellipse(mouseX, mouseY, 100, 100);
}