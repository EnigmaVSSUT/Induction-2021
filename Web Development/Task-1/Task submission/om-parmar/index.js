document.getElementById("switchTheme").addEventListener("click",handleClick);

function handleClick(){
    var status = document.querySelector("body").classList.contains("darkBody");
    if(status){
        document.querySelector("body").classList.remove("darkBody");
    }
    else{
        document.querySelector("body").classList.add("darkBody");
    }
    

}