var passwordLength = "";
var specialCharacters = "`~!@#$%^&*()_+-=[]\{}|;':\",./<>?";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var pass = "";

optionPass = [];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var Password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = Password;
} 

// function to prompt user for password options. 
// received assistance from tutor with w3schools
// Got function line 28 from instructor. 
function getPasswordOptions(){
  passwordLength = prompt("How many characters will your password be?");
 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length has to be 8 - 128 digits. Please try again.")
    return false;
  }

  if(confirm("Would you like special Characters?")) {
    optionPass = optionPass.concat(specialCharacters);
  } else ()
  
  if(confirm("Would you like lowercase letters?")) {
    optionPass = optionPass.concat(lowerCase);
  }
  if(confirm("Would you like uppercase letters?")) {
    optionPass = optionPass.concat(upperCase);
  }
  if(confirm("Would you like numbers in your password?")) {
    optionPass = optionPass.concat(numeric);
  }
  return true;
  
}

// function for getting a random element from an array
// Got function line 57 from instructor, however kept getting undefined due to the (arr) added so I took it out. 
// referenced from https://forum.freecodecamp.org/t/im-getting-really-discouraged-with-loops/535211
function getRandom(){
  var password = "";
  var arr = "`~!@#$%^&*()_+-=[]\{}|;':\,./<>?abcdefghijklmnopqrstuvwxyz23456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  for(var i = 0; i < passwordLength; i++) {
  var index = Math.floor(Math.random() * arr.length);
  password = password + arr[index];
  }
  return password

}

// Function to generate password with user imput
// Got function line 71 from instructor. 
function generatePassword() {
  getPasswordOptions();
  var pass = getRandom();
  // if () {

  // }
  passwordLength = ""; 
  return pass
}

// the amount of characters will require a for loop within the function array. 
// Got var line 79 from instructor
// var generatePassword = function() {

// }
