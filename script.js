// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var charaTers = "!@#$%&*()_+-=[]|,./?><";
  var numberOfCharacters = prompt("how many characters");
  console.log(numberOfCharacters);
  var garantedCharacters = ""
  var availableCharacters = ""

  var lowerCaseConfirm = confirm("include lowercase letters");
  var upperCaseConfirm = confirm("include uppercase letters");
  var numberConfirm = confirm("include numbers");
  var charatersConfirm = confirm("include charaTers");


  if (lowerCaseConfirm) {
    console.log("lowerecase");
    
    garantedCharacters += randomCharacters(lowerCase)
    availableCharacters += lowerCase
  }

  if (upperCaseConfirm) {
    console.log("uppercase");
    garantedCharacters += randomCharacters(upperCase)
    availableCharacters += upperCase
  }


if (numberConfirm) {
  console.log("numbers");
  garantedCharacters += randomCharacters(numbers)
  availableCharacters += numbers
  
}

if (charatersConfirm) {
  console.log("characters");
  garantedCharacters += randomCharacters(charaTers)
  availableCharacters += charaTers
}
console.log(garantedCharacters);

// create a password from confirmed array using the numberOfCharacters to find out how many characters are in the password
for (let index = garantedCharacters.length; index < numberOfCharacters; index++) {
  garantedCharacters += randomCharacters(availableCharacters)

}

return garantedCharacters;


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}

function randomCharacters(characterStrings) {
  var randomIndex = Math.floor(Math.random() * characterStrings.length);
  console.log(randomIndex);
  return characterStrings[randomIndex]

}

generateBtn.addEventListener("click", writePassword);
