//adicionar links fazerem zoom

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let startingHeight = window.innerHeight;
document.body.style.height = startingHeight*2 + "px";

window.onscroll = function (){
    pageScroll();
};

function pageScroll(){
    if (document.documentElement.scrollTop < 400) {
        //#greet zooms in
        document.getElementById("hi").style.fontSize = "250px";
        document.getElementById("greet").style.fontSize = "70px";
        document.getElementById("greet").style.height = "100%";
        document.getElementById("socials").style.top = "100%";
        document.getElementById("socials").style.height = "0%";
        document.getElementById("contacts").style.top = "100%";
        document.getElementById("contacts").style.height = "0%";
    } else if(document.documentElement.scrollTop > 400 && document.documentElement.scrollTop < 800){
        //#socials zooms in
        document.getElementById("hi").style.fontSize = "30px";
        document.getElementById("greet").style.fontSize = "30px";
        document.getElementById("greet").style.height = "25%";
        document.getElementById("socials").style.fontSize = "50px";
        document.getElementById("gitIcon").style.width = "500px";
        document.getElementById("twitterIcon").style.width = "500px";
        document.getElementById("linkedinIcon").style.width = "500px";
        document.getElementById("socials").style.top = "25%";
        document.getElementById("socials").style.height = "75%";
        document.getElementById("socials").style.visibility = "visible";
        document.getElementById("contacts").style.top = "100%";
        document.getElementById("contacts").style.height = "0%";
    } else if(document.documentElement.scrollTop > 800){
        //#contacts zooms in
        document.getElementById("hi").style.fontSize = "30px";
        document.getElementById("greet").style.fontSize = "30px";
        document.getElementById("greet").style.height = "25%";
        document.getElementById("socials").style.fontSize = "30px";
        document.getElementById("gitIcon").style.width = "250px";
        document.getElementById("twitterIcon").style.width = "250px";
        document.getElementById("linkedinIcon").style.width = "250px";
        document.getElementById("socials").style.top = "25%";
        document.getElementById("socials").style.height = "35%";
        document.getElementById("contacts").style.fontSize = "50px";
        document.getElementById("contacts").style.top = "60%";
        document.getElementById("contacts").style.height = "40%";
        document.getElementById("contacts").style.visibility = "visible";
    }
}

/*function zoomText(element, size){
    element.style.fontSize = size;
}*/