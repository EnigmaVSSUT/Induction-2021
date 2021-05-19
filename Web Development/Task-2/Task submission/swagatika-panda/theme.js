var button = document.getElementById("btn");
var body = document.body;
var color=["#000000","#0040ff"]
var i=0;
document.querySelector(".backg").addEventListener("click",function(){
    i==0 ? i=1 : i=0;
    document.querySelector("body").style.background=color[i];
})