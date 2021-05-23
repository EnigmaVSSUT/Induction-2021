var dark = document.querySelector(".logo")
var header = document.querySelector(".header")
var con2 = document.querySelector(".con2")
var c3 = document.querySelector(".c3")
var c6 = document.querySelector(".c6")
var c7 = document.querySelector(".c7")
var c10 = document.querySelector(".c10")
var c11 = document.querySelector(".c11")
var c14 = document.querySelector(".c14")

var footer = document.querySelector(".footer")

var form = document.querySelector("#mc_embed_signup")

var count = 0;

dark.onclick = function(){
    if( count == 0 || count%2 == 0 ){
        darkMode()
    } else {
        lightMode()
    }
    count += 1;
}

function darkMode(){
    document.body.style.backgroundColor = "#262335";
    form.style.backgroundColor = "#262335";
    header.style.backgroundColor = "#0F0F0F";
    footer.style.backgroundColor = "#0F0F0F";
    con2.style.backgroundColor = "#0e4d92";
    c6.style.backgroundColor = "#0e4d92";
    c10.style.backgroundColor = "#0e4d92";
    c14.style.backgroundColor = "#0e4d92";
    c3.style.backgroundColor = "#003152";
    c7.style.backgroundColor = "#003152";
    c11.style.backgroundColor = "#003152";
}

function lightMode(){
    document.body.style.backgroundColor = "white";
    form.style.backgroundColor = "white";
    header.style.backgroundColor = "#3d405b";
    footer.style.backgroundColor = "#3d405b";
    con2.style.backgroundColor = "#5C9EAD";
    c6.style.backgroundColor = "#5C9EAD";
    c10.style.backgroundColor = "#5C9EAD";
    c14.style.backgroundColor = "#5C9EAD";
    c3.style.backgroundColor = "#326273";
    c7.style.backgroundColor = "#326273";
    c11.style.backgroundColor = "#326273";
}
 
