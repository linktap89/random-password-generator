
var generateBtn = document.querySelector("#generate");
// addEventListener to button
generateBtn.addEventListener("click", writePassword);

const arrayFromLowtoHighNum = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

const UPPERCASE_CODES = arrayFromLowToHighNum(65, 90);
const LOWERCASE_CODES = arrayFromLowToHighNum(97, 122);
const NUMBER_CODES = arrayFromLowToHighNum(48, 57);
const SYMBOLS_CODES = arrayFromLowToHighNum(33, 47)
  .concat(arrayFromLowToHighNum(58, 64))
  .concat(arrayFromLowToHighNum(91, 96))
  .concat(arrayFromLowToHighNum(123, 126));

// Choose character length
function generatePassword() {
  var passwordLength = window.prompt("Choose a password length between 8 & 128")
  if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) { } else {
    // window alert
    window.alert("You did not enter a valid number, Click OK to try again.");
    return
  }
  // Password variables
  var lowerCase = window.confirm("Would you like to use lower case characters?");
  var upperCase = window.confirm("Would you like to use upper case characters?");
  var numbers = window.confirm("Would you like to use numbers?");
  var specialCharacters = window.confirm("Would you like to use special characters?");

  let charCodes = [];
  if (lowerCase) {
    charCodes = charCodes.concat(LOWERCASE_CODES);
  }
  if (upperCase) = charCodes.concat(UPPERCASE_CODES);
}
if (numbers) = charCodes.concat(NUMBER_CODES);
}
if (charCodes.length === 0) {
  alert("Please choose at least one set of characters");
  return ""
}
const passwordCharacters = Array.from({ length: passwordLength }, () => {
  const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
  return String.fromCharCode(characterCode);
})
return passwordCharacters.join('');
}

// Parse password to #password input
function writePassword () {
  const password = generatePassword ();
  document.getElementById("password").value = password;
}
document.getElementById("generate").addEventListener("click", writePassword);
