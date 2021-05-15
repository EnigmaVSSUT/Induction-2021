var a;
function clickme()
{
    if(a==1)
    {
        console.log('I Ws clices2');
    document.getElementsByTagName("body")[0].style.background = "aqua";
    document.getElementsByTagName("header")[0].style.color="rgb(238, 42, 42)";
    document.getElementsByClassName("container2")[0].style.color="rgb(163,81,81)";
    document.getElementsByClassName("container2")[1].style.color="rgb(163,81,81)";
    document.getElementsByClassName("container2")[2].style.color="rgb(163,81,81)";
    document.getElementsByClassName("container2")[3].style.color="rgb(163,81,81)";    
    document.getElementsByClassName("container4")[0].style.color="rgb(81, 163, 122)";
    document.getElementsByClassName("container4")[1].style.color="rgb(81, 163, 122)";
    return a=0;
    
    }
    else 
{
    console.log('I Ws clices');
    document.getElementsByTagName("body")[0].style.background = "yellow";
    document.getElementsByTagName("header")[0].style.color="blue";
    document.getElementsByClassName("container2")[0].style.color="rgb(81, 163, 122)";
    document.getElementsByClassName("container2")[1].style.color="rgb(81, 163, 122)";
    document.getElementsByClassName("container2")[2].style.color="rgb(81, 163, 122)";
    document.getElementsByClassName("container2")[3].style.color="rgb(81, 163, 122)";    
    document.getElementsByClassName("container4")[0].style.color="rgb(163,81,81)";
    document.getElementsByClassName("container4")[1].style.color="rgb(163,81,81)";
    return a=1;
}
}
