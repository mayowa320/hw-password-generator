// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// this variable contains all of the possible uppercase characters
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// this variable contains all possible lowercase characters
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// variables for all possible special characters and all possible numbers
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// prompts for password parameters
function generatePassword() {
  var length = prompt("password length?");
  var hasSpecial = confirm("would you like to include special characters?");
  var hasNumber = confirm("got numbers?");
  var hasUpper = confirm("any uppercase characters?");
  var hasLower = confirm("any lowercase characters?");

  var isValid = validate(length, hasSpecial, hasNumber, hasUpper, hasLower);

  if (isValid) {
    passwordArray;
  }
}
// determining if criteria is met
function validate(length, hasSpecial, hasNumber, hasUpper, hasLower) {
  var isValid = true;
  if (length < 8 || length > 128) {
    isValid = false;
  }
  if (!hasSpecial && !hasNumber && !hasUpper && !hasLower) {
    isValid = false;
  }
  return isValid;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
