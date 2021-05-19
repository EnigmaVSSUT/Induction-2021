$(document).ready(function(){
   $("#switch").click(function(){
    if($("#switch").val()=="light")
    {$("body").css("background","white");
    $("body").css("color","black");
    $("a").css("color","black");
    $("#switch").val("dark");
   }
    else
    {
    $("body").css("background","black");
    $("body").css("color","white");
    $("a").css("color","white");
    $("#switch").val("light");
    }

   })

});