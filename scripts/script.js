window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let startingHeight = window.innerHeight;
document.body.style.height = startingHeight*2 + "px";

window.onscroll = function (){
    if(window.innerWidth <= 768 || window.innerHeight < 885){
        pageScrollMobile();
    } else if((window.innerWidth > 768 && window.innerWidth <= 992) || (window.innerHeight >= 885 && window.innerHeight < 925)){
        pageScrollTablet();
    } else if(window.innerWidth > 992 && window.innerWidth <= 1279){
        pageScrollSmallComputer();
    } else {
        pageScrollDesktop();
    }
};

function pageScrollDesktop(){
    if (document.documentElement.scrollTop < startingHeight/3) {
        //#greet zooms in
        document.getElementById("hi").style.fontSize = "250px";
        document.getElementById("greet").style.fontSize = "70px";
        document.getElementById("greet").style.height = "100%";
        document.getElementById("socials").style.top = "100%";
        document.getElementById("socials").style.height = "0%";
        document.getElementById("contacts").style.top = "100%";
        document.getElementById("contacts").style.height = "0%";
    } else if(document.documentElement.scrollTop > startingHeight/3 && document.documentElement.scrollTop < (startingHeight/3)*2){
        //#socials zooms in
        document.getElementById("hi").style.fontSize = "30px";
        document.getElementById("greet").style.fontSize = "30px";
        document.getElementById("greet").style.height = "25%";
        document.getElementById("socials").style.fontSize = "50px";
        document.getElementById("gitIcon").style.width = "380px";
        document.getElementById("twitterIcon").style.width = "380px";
        document.getElementById("linkedinIcon").style.width = "380px";
        document.getElementById("socials").style.top = "25%";
        document.getElementById("socials").style.height = "75%";
        document.getElementById("socials").style.visibility = "visible";
        document.getElementById("contacts").style.top = "100%";
        document.getElementById("contacts").style.height = "0%";
    } else if(document.documentElement.scrollTop > (startingHeight/3)*2){
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

function pageScrollMobile(){
    if (document.documentElement.scrollTop < startingHeight/3) {
        //#greet zooms in
        document.getElementById("hi").style.fontSize = "150px";
        document.getElementById("greet").style.fontSize = "40px";
        document.getElementById("greet").style.height = "100%";
        document.getElementById("socials").style.top = "100%";
        document.getElementById("socials").style.height = "0%";
        document.getElementById("contacts").style.top = "100%";
        document.getElementById("contacts").style.height = "0%";
    } else if(document.documentElement.scrollTop > startingHeight/3){
        //#socials and #contacts zoom in
        document.getElementById("hi").style.fontSize = "16px";
        document.getElementById("greet").style.fontSize = "16px";
        document.getElementById("greet").style.height = "25%";
        document.getElementById("socials").style.fontSize = "30px";
        document.getElementById("gitIcon").style.width = "100px";
        document.getElementById("twitterIcon").style.width = "100px";
        document.getElementById("linkedinIcon").style.width = "100px";
        document.getElementById("socials").style.top = "25%";
        document.getElementById("socials").style.height = "35%";
        document.getElementById("socials").style.visibility = "visible";
        document.getElementById("contacts").style.fontSize = "30px";
        document.getElementById("contacts").style.top = "60%";
        document.getElementById("contacts").style.height = "40%";
        document.getElementById("contacts").style.visibility = "visible";
    }
}

function pageScrollTablet(){
    if (document.documentElement.scrollTop < startingHeight/3) {
        //#greet zooms in
        document.getElementById("hi").style.fontSize = "200px";
        document.getElementById("greet").style.fontSize = "55px";
        document.getElementById("greet").style.height = "100%";
        document.getElementById("socials").style.top = "100%";
        document.getElementById("socials").style.height = "0%";
        document.getElementById("contacts").style.top = "100%";
        document.getElementById("contacts").style.height = "0%";
    } else if(document.documentElement.scrollTop > startingHeight/3 && document.documentElement.scrollTop < (startingHeight/3)*2){
        //#socials zooms in
        document.getElementById("hi").style.fontSize = "30px";
        document.getElementById("greet").style.fontSize = "30px";
        document.getElementById("greet").style.height = "25%";
        document.getElementById("socials").style.fontSize = "45px";
        document.getElementById("gitIcon").style.width = "225px";
        document.getElementById("twitterIcon").style.width = "225px";
        document.getElementById("linkedinIcon").style.width = "225px";
        document.getElementById("socials").style.top = "25%";
        document.getElementById("socials").style.height = "75%";
        document.getElementById("socials").style.visibility = "visible";
        document.getElementById("contacts").style.top = "100%";
        document.getElementById("contacts").style.height = "0%";
    } else if(document.documentElement.scrollTop > (startingHeight/3)*2){
        //#contacts zooms in
        document.getElementById("hi").style.fontSize = "30px";
        document.getElementById("greet").style.fontSize = "30px";
        document.getElementById("greet").style.height = "25%";
        document.getElementById("socials").style.fontSize = "30px";
        document.getElementById("gitIcon").style.width = "200px";
        document.getElementById("twitterIcon").style.width = "200px";
        document.getElementById("linkedinIcon").style.width = "200px";
        document.getElementById("socials").style.top = "25%";
        document.getElementById("socials").style.height = "35%";
        document.getElementById("contacts").style.fontSize = "45px";
        document.getElementById("contacts").style.top = "60%";
        document.getElementById("contacts").style.height = "40%";
        document.getElementById("contacts").style.visibility = "visible";
    }
}

function pageScrollSmallComputer(){
    if (document.documentElement.scrollTop < startingHeight/3) {
        //#greet zooms in
        document.getElementById("hi").style.fontSize = "225px";
        document.getElementById("greet").style.fontSize = "60px";
        document.getElementById("greet").style.height = "100%";
        document.getElementById("socials").style.top = "100%";
        document.getElementById("socials").style.height = "0%";
        document.getElementById("contacts").style.top = "100%";
        document.getElementById("contacts").style.height = "0%";
    } else if(document.documentElement.scrollTop > startingHeight/3 && document.documentElement.scrollTop < (startingHeight/3)*2){
        //#socials zooms in
        document.getElementById("hi").style.fontSize = "38px";
        document.getElementById("greet").style.fontSize = "38px";
        document.getElementById("greet").style.height = "25%";
        document.getElementById("socials").style.fontSize = "53px";
        document.getElementById("gitIcon").style.width = "275px";
        document.getElementById("twitterIcon").style.width = "275px";
        document.getElementById("linkedinIcon").style.width = "275px";
        document.getElementById("socials").style.top = "25%";
        document.getElementById("socials").style.height = "75%";
        document.getElementById("socials").style.visibility = "visible";
        document.getElementById("contacts").style.top = "100%";
        document.getElementById("contacts").style.height = "0%";
    } else if(document.documentElement.scrollTop > (startingHeight/3)*2){
        //#contacts zooms in
        document.getElementById("hi").style.fontSize = "38px";
        document.getElementById("greet").style.fontSize = "38px";
        document.getElementById("greet").style.height = "25%";
        document.getElementById("socials").style.fontSize = "38px";
        document.getElementById("gitIcon").style.width = "250px";
        document.getElementById("twitterIcon").style.width = "250px";
        document.getElementById("linkedinIcon").style.width = "250px";
        document.getElementById("socials").style.top = "25%";
        document.getElementById("socials").style.height = "35%";
        document.getElementById("contacts").style.fontSize = "45px";
        document.getElementById("contacts").style.top = "60%";
        document.getElementById("contacts").style.height = "40%";
        document.getElementById("contacts").style.visibility = "visible";
    }
}