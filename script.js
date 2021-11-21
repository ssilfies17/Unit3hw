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
    numbers: "0123456789012345678901234",
    symbols: "!#$%&()*+,-./:;<=>?@[]^_`", 
  }
  
  
  var computerSelectionAll = [choices.lowerCase[Math.floor(Math.random() * choices.lowerCase.length)], choices.upperCase[Math.floor(Math.random() * choices.upperCase.length)], choices.numbers[Math.floor(Math.random() * choices.numbers.length)], choices.symbols[Math.floor(Math.random() * choices.symbols.length)]];
  var computerSelectionLc = choices.lowerCase[Math.floor(Math.random() * choices.lowerCase.length)];
  var computerSelectionUc = choices.upperCase[Math.floor(Math.random() * choices.upperCase.length)];
  var computerSelectionNum = choices.numbers[Math.floor(Math.random() * choices.numbers.length)];
  var computerSelectionSym = choices.symbols[Math.floor(Math.random() * choices.symbols.length)];
  

  for (let i = 0; i < userLength; i++) {
    var randomSelection1 = choices.lowerCase[Math.floor(Math.random() * choices.lowerCase.length)];
    var randomSelction2 = choices.upperCase[Math.floor(Math.random() * choices.upperCase.length)];
    var randomSelection3 = choices.numbers[Math.floor(Math.random() * choices.numbers.length)];
    var randomSelection4 = choices.symbols[Math.floor(Math.random() * choices.symbols.length)];
    password += [randomSelection1 + randomSelction2 + randomSelection3 + randomSelection4].join("");
    if (userCharChoice == "LUNS", "luns") {
      pushPass();
    } 
  }
}

var password = "";
function pushPass () {
   document.getElementById("password").textContent = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
