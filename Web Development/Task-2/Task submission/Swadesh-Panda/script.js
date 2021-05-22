var upbutton = document.getElementById("upBtnUp");

var logoimg = document.getElementById("logo");

var Lghtmode = document.getElementById("sun");
var Drkmode = document.getElementById("moon");

var pLight = document.getElementsByTagName("p");

var lLight = document.getElementsByTagName("li");

var h2Light = document.getElementsByTagName("h2");
var h1Light = document.getElementsByTagName("h1");
var bgLight = document.getElementsByClassName("aboutme");



window.onscroll = function(){
  if (document.body.scrollTop > 20) {
    upbutton.style.display = "block";
    
    if (document.body.scrollTop > 100) {
      logoimg.classList.add("logo");
    }else{
      logoimg.classList.remove("logo");
    }

  }else{
    upbutton.style.display = "none";
    
    if (document.body.scrollTop > 100) {
      logoimg.classList.add("logo");
    }else{
      logoimg.classList.remove("logo");
    }
  }
}

upbutton.onclick = function(){
  document.body.scrollTop = 0;
  document.body.style.transition = "0.3s";
}

Lghtmode.onclick = function(){                 // light mode
  document.body.classList.add("bodylght");

  Lghtmode.style.display = "none";
  Drkmode.style.display = "block";

  for (var i = 0; i < pLight.length; i++){
    pLight[i].style.color = "black";
    pLight[i].style.transition = "0.3s";
  }

  for (var i = 0; i < lLight.length; i ++){
    lLight[i].style.color = "black";
    lLight[i].style.transition = "0.3s";
  }

  for (var i = 0; i < h2Light.length; i ++){
    h2Light[i].style.transition = "0.3s";
    h2Light[i].style.color = "black";
  }

  for (var i = 0; i < h1Light.length; i ++){
    h1Light[i].style.transition = "0.3s";
    h1Light[i].style.color = "black";
  }
}

Drkmode.onclick = function(){                         // dark mode
  document.body.classList.remove("bodylght");

  Drkmode.style.display = "none";
  Lghtmode.style.display = "block";

  for (var i = 0; i < pLight.length; i++){
    pLight[i].style.color = "white";
    pLight[i].style.transition = "0.3s";
  }

  for (var i = 0; i < lLight.length; i ++){
    lLight[i].style.color = "white";
    lLight[i].style.transition = "0.3s";
  }

  for (var i = 0; i < h2Light.length; i ++){
    h2Light[i].style.transition = "0.3s";
    h2Light[i].style.color = "rgba(255, 255, 255, 0.562)";
  }

  for (var i = 0; i < h1Light.length; i ++){
    h1Light[i].style.transition = "0.3s";
    h1Light[i].style.color = "rgba(255, 255, 255, 0.61)";
  }
}