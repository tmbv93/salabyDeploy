$(function () {

    var typedText = $("#userField").val();
    var loginBtn = $("#loginBtn");
    var isTyped = true;


    function settEvents() {
        $("#userField").keypress(function () {
            loginBtn
                .css("background-color", "green")
                .attr("value", "Logg inn");
            isTyped = true;
             alert("sads");
        });

        $("userField").keyup(function () {
            if (typedText == "") {
                loginBtn
                    .css("background-color", "red")
                    .attr("value", "Fortsett uten å logge inn");
                isTyped = false;
            } else {}
        });

        if (isTyped) {
            loginBtn
                .css("background-color", "red")
                .attr("value", "Fortsett uten å logge inn");
            isTyped = false;

        } else {
            loginBtn
                .css("background-color", "green")
                .attr("value", "Logg inn");
        };
    };
    var init = function () {
        settEvents();
    }();



});