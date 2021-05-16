let btn=document.getElementById("theme");
let container=document.getElementById("container");
let head=document.getElementById("head");
let h3=document.getElementById("h3");
let center=document.getElementById("center");


function theme() {   
if( container.style.backgroundColor == 'black') {                  
        container.style.backgroundColor = 'rgb(195, 224, 222)';
        head.style.color='rgb(63, 63, 145)';
        h3.style.color='rgb(55, 55, 114)';
        center.style.color='black';
        btn.style.background=' rgb(94, 133, 201)';
        btn.style.color='white';

    }else{
       container.style.backgroundColor = 'black';
       head.style.color='white';
       h3.style.color='white';
       center.style.color='white';
       btn.style.background='rgb(182, 163, 135)';
       btn.style.color='black';
   }
}         