//adicionar links fazerem zoom

let startingHeight = window.innerHeight;
//document.getElementById("contacts").style.marginTop = startingHeight;
document.body.style.height = startingHeight*3 + "px";

window.onscroll = function (){
    pageScroll();
};

function pageScroll(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("greet").style.fontSize = "30px";
        document.getElementById("greet").style.height = "25%";
        document.getElementById("contacts").style.top = "30%";
        document.getElementById("contacts").style.height = "100%";
        document.getElementById("contacts").style.visibility = "visible";
    } else {
        document.getElementById("greet").style.fontSize = "70px";
        document.getElementById("greet").style.height = "100%";
        document.getElementById("contacts").style.top = "100%";
        document.getElementById("contacts").style.height = "0%";
    }
}

/*function zoomText(element, size){
    element.style.fontSize = size;
}*/