$(function(){
    
        var typedText = $("#userField").val();
        var loginBtn = $("#loginBtn");
        var isTyped = false;
    
    
    function settEvents(){
        $("#userField").keypress(function(){
            loginBtn
            .css("background-color", "green")
            .attr("value", "Logg inn");
        });
    
        if(typedText == ""){
            loginBtn
            .css("background-color", "red")
            .attr("value", "Fortsett uten å logge inn");
        }else {
            loginBtn
            .css("background-color", "green")
            .attr("value", "Logg inn");
        };
    };
    var init = function(){
        settEvents();
    }();
    
    
    
});