// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  prompts();
  funArray = [];
  n = 0;
  password = ""
  if(wantUpper = true){
    funArray.push(upper());
  }else{
    continue;
  }
  if(wantLower == true){
    funArray.push(lower());
  }else{
    continue;
  }
  if(wantSpecial == true){
    funArray.push(lower());
  }else{
    continue;
  }

  while(n != charLength){
    n += 1;
    funArray[Math.floor(Math.random() * funArray.length)];
    password.concat(character);
  }
  return password
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
  return wantUpper, wantLower, wantSpecial,charLength;
}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
