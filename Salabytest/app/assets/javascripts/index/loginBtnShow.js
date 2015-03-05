$(function(){
    
        var typedText = $(".session_username").val();
        var loginBtn = $("#loginBtn");
        var beenTyped = false;
    
    $("#loginBtn")
    .css("background-color", "red")
    .attr("value", "Fortsett uten å logge inn")
    
    
    function settEvents(){
        

        
        $(".form-control").keypress(function(){
            loginBtn
            .css("background-color", "green")
            .attr("value", "Logg inn");
            beenTyped = true;
            
            isFieldEmpty();
            console.log(beenTyped);
        });


        
    };
    
    function isFieldEmpty(){
        if(beenTyped == "" && beenTyped == false){
            alert("bah");
            
            beenTyped = false;
            console.log(beenTyped);
            
            
        }else if(!beenTyped) {
            alert("BEEEH");
        }
    }
    
    var init = function(){
        settEvents();
    }();
    
    
    
});