// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var userLength = window.prompt("How long should the password be? Min 8, Max 128.");
  var userCharChoice = window.prompt("What type of characters would you like? 'L' for lower case, 'U' for upper case,'N' for numbers, and 'S' for symbols. Multiple can be selected.");
  window.confirm("Selection complete! Generating password.");
  var choices = {
    lowerCase: "abcdefghijklmnopqrstuvxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVXYZ",
    numbers: "0123456789",
    symbols: "!#$%&()*+,-./:;<=>?@[]^_`{|}~", 
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  var computerSelectionAll = [choices.lowerCase[Math.floor(Math.random() * choices.lowerCase.length)], choices.upperCase[Math.floor(Math.random() * choices.upperCase.length)], choices.numbers[Math.floor(Math.random() * choices.numbers.length)], choices.symbols[Math.floor(Math.random() * choices.symbols.length)]];
  var computerSelectionLc = choices.lowerCase[Math.floor(Math.random() * choices.lowerCase.length)];
  var computerSelectionUc = choices.upperCase[Math.floor(Math.random() * choices.upperCase.length)];
  var computerSelectionNum = choices.numbers[Math.floor(Math.random() * choices.numbers.length)];
  var computerSelectionSym = choices.symbols[Math.floor(Math.random() * choices.symbols.length)];

  if ((userLength <= 128 && userLength >= 8) && (userCharChoice == "LUNS")) {
    alert(computerSelectionAll);
    append(password, passwordText);
  }
  
  
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

