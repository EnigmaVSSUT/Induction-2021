var big = document.getElementsByTagName("span");
var ptitle= document.getElementsByTagName("h3");
var para = document.getElementsByTagName("p");
var button = document.getElementsByClassName("button");
var loc = document.getElementsByClassName("fa-map-marker-alt");
var moon = document.getElementsByClassName("fa-moon");
var sun = document.getElementsByClassName("fa-sun");
var myBody = document.getElementsByTagName("body");
var i;

function theme(){
    if(myBody[0].getAttribute("class") == "light"){
        myBody[0].setAttribute("class","dark");
        loc[0].style.color = "#fff";
        button[0].style.backgroundColor = "#f5f5f5";
        moon[0].style.opacity = 0;
        sun[0].style.opacity = 1;
        for(i=0;i<big.length;i++){
            big[i].style.color = "#e9ecef";
        }
        for(i=0;i<ptitle.length;i++){
            ptitle[i].style.color = "#f5f5f5";
            ptitle[i].style.backgroundColor = "#000";
        }
        for(i=0; i<para.length;i++){
            para[i].style.color = "#fff";
        }
    }
    else{
        myBody[0].setAttribute("class","light");
        loc[0].style.color = "#000";
        button[0].style.backgroundColor = "#000";
        moon[0].style.opacity = 1;
        sun[0].style.opacity = 0;
        for(i=0;i<big.length;i++){
            big[i].style.color = "#6c757d";
        }
        for(i=0;i<ptitle.length;i++){
            ptitle[i].style.color = "#000";
            ptitle[i].style.backgroundColor = "#f5f5f5";
        }
        for(i=0; i<para.length;i++){
            para[i].style.color = "#100c08";
        }
    }
}