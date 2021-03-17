
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
