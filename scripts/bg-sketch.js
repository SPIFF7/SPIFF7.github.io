//rotationX = eixo horizontal
//rotationY = eixo vertical
//rotationZ = eixo profundidade - rotação que interessa

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
    text(String(accelerationX), 100, 500);
    text(String(accelerationY), 100, 550);
    text(String(accelerationZ), 100, 600);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged(){
    posX = mouseX;
    posY = mouseY;
}