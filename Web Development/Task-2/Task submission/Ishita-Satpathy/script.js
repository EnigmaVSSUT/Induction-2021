var button1 = document.getElementById("darkmode");
var button2 = document.getElementById("lightmode");
button1.onclick = function(){
    document.getElementById("theme").classList.add("bu1");
    button1.style.opacity = "0";
    button2.style.opacity = "1";
}
button2.onclick = function(){
    document.getElementById("theme").classList.remove("bu1");
    button1.style.opacity = "1";
    button2.style.opacity = "0";
}
