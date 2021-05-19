var c=0;
function colorchange()
{
  c++;
  if (c % 2 != 0){
    document.getElementById('main').style.background = "#000000" ;
    document.getElementsByTagName('div')[12].style.color = "#FFFFFF";
    document.getElementsByTagName('h6')[0].style.color = "#FFFFFF";
    } 
  else{
    document.getElementById('main').style.background = "#40D4D4" ;
    }
} 
  