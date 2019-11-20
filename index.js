// Generate Password button functionality 
document.getElementById("btnGenerate").addEventListener("click", function () {

    //Setting password length variable prompt
    var pwdLength = prompt("Choose password length (must be between 8 and 128 characters)");

    //Setting lower/upper character, number, and special character variables
    var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
    var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var num = '0123456789';
    var sym = '!@#$%^&*=-_';
    //Setting generated password variable to the html id password-text
    var generatedPassword = document.getElementById("password-text");
    //Setting empty string password variable
    var password = "";

    //If password is less than 8 or more than 128 user will get an invalid length alert
    if (pwdLength >= 8 && pwdLength <= 128) {
        var characters = "";

        //Created a password requirements object to hold all of the user prompts
        var pwdRequirements = {
            pwdSpecialChar: confirm("Would you like a special character?"),
            pwdNumeric: confirm("Would you like a numeric character?"),
            pwdLowerCase: confirm("Would you like a lowercase character?"),
            pwdUpperCase: confirm("Would you like a uppercase character?"),
        }

        //Ternary operator used to capture if user prompts are equal to true, if true add the possible characters to the characters variable
        pwdRequirements.pwdSpecialChar == true ? characters += sym : '';
        pwdRequirements.pwdNumeric == true ? characters += num : '';
        pwdRequirements.pwdLowerCase == true ? characters += lowerChar : '';
        pwdRequirements.pwdUpperCase == true ? characters += upperChar : '';


        //Password function takes the length and characters
        function password(l, newCharacters) {
            var pwd = '';
            for (var i = 0; i < l; i++) {
                pwd += newCharacters.charAt(Math.floor(Math.random() * newCharacters.length));
            }
            return pwd;
        }

        generatedPassword.innerHTML = password(pwdLength, characters);

    }
    else {
        alert("Your password does not meet the length requirement!");
    }

});
//----------------------------------------------------------------------------------------------------------------
// Copy button functionality
document.getElementById("btnCopy").addEventListener("click", function () {
    var passwordText = document.getElementById("password-text").innerText;

    if (passwordText === "") {
        alert("You don't have anything to copy!");
    }
    else {
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = passwordText;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);

        alert("Copied password to clipboard: " + passwordText);
    }
});
