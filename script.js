
var generateBtn = document.querySelector("#generate");
// addEventListener to button
generateBtn.addEventListener("click", writePassword);

let arrayFromLowtoHighNum = (low, high) => {
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

// Password variables 
var lowerCase = window.confirm("Would you like to use lower case characters?");
var upperCase = window.confirm("Would you like to use upper case characters?");
var numbers = window.confirm("Would you like to use numbers?");
var specialCharacters = window.confirm("Would you like special characters?");

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

