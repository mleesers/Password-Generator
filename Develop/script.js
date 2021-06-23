// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  prompts();
  funArray = [];
  n = 0;
  password = "";

  console.log(funArray)
  while(n != charLength){
    if(wantUpper == true){
      funArray.push(upper());
    }
    if(wantLower == true){
      funArray.push(lower());
    }
    if(wantSpecial == true){
      funArray.push(special());
    }
    character = funArray[Math.floor(Math.random() * funArray.length)];
    password += character;
    n += 1;
  }
  
  return password;
}

function upper(){
  character = "";
  list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (i=0;i<1;i++){
    character += list.charAt(Math.floor(Math.random() *list.length));
  }
  return character;
}

function lower(){
  character = "";
  list = "abcdefghijklmnopqrstuvwxyz";
  for (i=0;i<1;i++){
    character += list.charAt(Math.floor(Math.random() *list.length));
  }
  return character;
}

function special(){
  character = "";
  list = "!@#$%^&*()_-+=:;?/><,.~`{}[]|";
  for (i=0;i<1;i++){
    character += list.charAt(Math.floor(Math.random() *list.length));
  }
  return character;
}

function prompts(){
  charLength = window.prompt("How many characters would you like your password?[between 8 and 128 characters]: ");
  if(charLength < 8 || charLength > 128){
    window.alert("please enter a valid option: ")
    prompts()
  }
  wantUpper = window.confirm("Do you want upper case letters?");
  wantLower = window.confirm("Do you want lower cases letters?");
  wantSpecial = window.confirm("Do you want special characters?");  
  return wantUpper, wantLower, wantSpecial,charLength;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
