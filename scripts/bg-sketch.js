//rotationX = eixo horizontal
//rotationY = eixo vertical
//rotationZ = eixo profundidade - rotação que interessa (posisitivo é topo para a esquerda)
//accelerationX = esquerda direita (positivo é direita para a esquerda)
//accelerationY = frente trás (positivo é frente para trás)
//accelerationZ = cima baixo (positivo é cima para baixo)
//ideia de completar o labirinto através do movimento com o accelerometro
//"MOVE through the labyrinth to unlock"

let canvas;
let posX = 100, posY = 100;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
}

function draw(){
    background(170);
    if(accelerationX > 1){
        posX -= abs(accelerationX);
    } else if(accelerationX < 1){
        posX += abs(accelerationX);
    }
    ellipse(posX, posY, 100, 100);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged(){
    posX = mouseX;
    posY = mouseY;
}