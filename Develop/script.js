// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  prompts();
  funArray = [];

}

function upper(){

}

function lower(){

}

function special(){

}
function prompts(){
  charLength = window.prompt("How many characters would you like your password?[between 8 and 128 characters]: ");
  if(charLength < 8 || charLength > 128){
    window.alert("please enter a valid option: ")
    prompts()
  }else{
    continue;
  }
  wantUpper = window.confirm("Do you want upper case letters?");
  wantLower = window.confirm("Do you want lower cases letters?");
  wantSpecial = window.confirm("Do you want special characters?");  
  return wantUpper, wantLower, wantSpecial;
}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
