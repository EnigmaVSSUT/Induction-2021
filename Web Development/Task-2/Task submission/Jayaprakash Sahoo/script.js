var body1 = document.getElementsByTagName('body')[0];
var icon = document.getElementById("icon");
var card = document.getElementById("card");
var para0 = document.getElementsByClassName("para")[0];
var para1 = document.getElementsByClassName("para")[1];
var para2 = document.getElementsByClassName("para")[2];
var para3 = document.getElementsByClassName("para")[3];
icon.addEventListener('click',function(){
            icon.classList.toggle("night0");
            body1.classList.toggle("night1");
            card.classList.toggle("night2");
            para0.classList.toggle("night3");
            para1.classList.toggle("night3");
            para2.classList.toggle("night3");
            para3.classList.toggle("night3");
 })