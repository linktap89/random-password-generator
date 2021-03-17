// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let arrayFromLowToHigh = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

  


function generatePassword() {
  var passwordLength = window.prompt("choose a password length between 8 & 128")
  if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128 ){
    var passwordLengthvalue = parseInt(passwordLength);
  } else {
    window.alert("read the instructions loser, press 'ok' and try again");
    return
  }
  var lowerCase = window.confirm("would you like lower case characters?");
  var upperCase = window.confirm("would you like upper case characters?");
  var numbers = window.confirm("would you like numbers?");
  var specialCharacters = window.confirm("would you like special characters?");


  var lowerCaseanswer = 0;
  if (lowerCase === true){
   lowerCaseanswer = true 
  } else {
    lowerCaseanswer =false
  }
  var upperCaseanswer= 0;
    if (upperCase === true){
      upperCaseanswer = true
    } else {
      upperCaseanswer = false
    }
    var  numberAnswer = 0;
    if (numbers === true){
      numberAnswer = true
    } else {
      numberAnswer = false
    }
  var specialCharactersanswer = 0;
  if (specialCharacters === true){
    specialCharactersanswer = true
  } else {
    specialCharactersanswer = false
  }
  let charCodes = [];
    if (lowerCaseanswer == true) {
      charCodes = charCodes.concat(LOWERCASE_CODES);
    }
    if (upperCaseanswer == true) {
     charCodes = charCodes.concat(UPPERCASE_CODES);
    }
    if (specialCharactersanswer == true) {
      charCodes = charCodes.concat(SYMBOL_CODES);
    }
    if (numberAnswer == true) {
      charCodes = charCodes.concat(NUMBER_CODES);
    }
    const passwordCharacters = [];
    for (let i = 0; i < passwordLengthvalue; i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
      console.log(characterCode);
    }
    return passwordCharacters.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}



