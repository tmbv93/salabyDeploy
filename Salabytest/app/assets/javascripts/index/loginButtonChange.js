/**
 * Created by Tomas on 28.04.2015.
 */

var button, usernameField;
var loginText = "LOGG INN";
var continueText;

$( document ).ready(function(){

    button = document.getElementById('mainLoginButton');
    continueText = button.value;

    usernameField = document.getElementById('usernameEntryField');
    usernameField.setAttribute('onkeyup', 'changeLoginButton(usernameField.value)');
    usernameField.setAttribute('onchange', 'changeLoginButton(usernameField.value)');

    changeLoginButton(usernameField.value);
})

// Change button appearance
function changeLoginButton(input){

    if(button.value != undefined)

        if (input == "") {
            button.value = continueText;
            button.className = "btn btn-primary button expand";
        } else {
            button.value = loginText;
            button.className = "btn btn-primary button expand success";
        }
}