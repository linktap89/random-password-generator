
var generateBtn = document.querySelector("#generate");
// addEventListener to button
generateBtn.addEventListener("click", writePassword);

const arrayFromLowtoHighNum = (low, high) => {
    const array = [];
    for (let i = low; i <= high; i++){
        array.push(i);
    }
    return array;
};

const UPPERCASE_CODES = arrayFromLowtoHighNum(65,90);
const LOWERCASE_CODES = arrayFromLowtoHighNum(97,122);
const NUMBER_CODES = arrayFromLowtoHighNum(48,57);
const SYMBOLS_CODES = arrayFromLowtoHighNum(33,47)
.concat(arrayFromLowToHighNum(58,64))
.concat(arrayFromLowToHighNum(91,96))
.concat(arrayFromLowToHighNum(123,126));

// Choose character length
function generatePassword() {
    var passwordLength = window.prompt("Choose a password length between 8 & 218")
    if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128 {} else {
        // window alert
        window.alert("You did not enter a valid number, Click OK to try again.");
        return
    }
}
// Password response
var lowerCaseAnswer = 0;
if(lowerCase === true){
    lowerCaseAnswer = true
} else {
    lowerCaseAnswer = false
}
var upperCaseAnswer = 0;
if (upperCase === true){
    upperCaseAnswer = true
} else { 
    upperCaseAnswer = false
}
var nummberAnswer = 0;
if(number === true){
    nummberAnswer = true
} else { 
    nummberAnswer = false
}
var specialCharactersAnswer = 0;
if (specialCharacters === true){
    specialCharactersAnswer = true
} else {
    specialCharactersAnswer = false
}
let charCode = [];
if (lowerCaseAnswer == true) {
    charCodes = charCode.concat(LOWERCASE_CODES);
}
if (upperCase == true) {
    charCodes = charCode.concat(UPPERCASE_CODES);
}
if (specialCharacters == true) {
    charCodes = charCode.concat(SYMBOLS_CODES);
}
if (nummberAnswer == true) {
    charCodes = charCode.concat(NUMBER_CODES);
}

