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
    //if they want lower case you will push lowerCase to the confirm array
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

// var chosenPassword = "user password"



return garantedCharacters;








  // passCriteria.push(lowerCase,upperCase,numbers,charaTers);

  // console.log(numChar);
  // console.log(password);

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




//   var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
//     'abcdefghijklmnopqrstuvwxyz0123456789@#$';

//   var charNum = document.getElementById("charNum");
//   var numBox = document.getElementById("num");
//   var symBox = document.getElementById("sym");
//   var submit = document.getElementById("submit");
//   var yourPw = document.getElementById("yourPw");
//   submit.addEventListener("click", function (e) {
//     var characters = char;
//     (numBox.checked) ? characters += num : " ";
//     (symBox.checked) ? characters += sym : " ";
//     yourPw.value = password(charNum.value, characters);
//   });

// }
// passwordText.value = password;
// function password(l.characters) {

//   var pwd = " ";
//   for (var i = 0; i < l; i++0)

//   pwd += characters.charAt(Math.floor(Math.random() * characters.length));
// }
// return.pwd;





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
