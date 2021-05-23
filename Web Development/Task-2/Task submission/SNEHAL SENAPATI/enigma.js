
let colors = ['orange', 'green'];
let button = document.getElementById('button');
button.addEventListener('click', function(){
//console.log('test');
var randomcolor = colors[Math.floor(Math.random() * colors.length)]
let container = document.getElementById('container');
container.style.background = randomcolor;
})