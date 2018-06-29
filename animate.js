$('#rb1').click(function(){
    console.log("button clicked");
        $('#movable1').animate({"flex":"right"});
        $('#movable2').animate({"flex":"left"});
        $('#movable3').animate({"flex":"left"});
        $('#movable4').animate({"flex":"right"});
});  
    