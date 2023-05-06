var passwordLength = "";
var specialCharacters = "`, ~, !, @, #, $, %, ^, &, *, (, ), _, +, -, =, [, ], \, {, }, |, \, <, >, ?";
var lowerCase = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
var upperCase = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var password = "";
optionPass = [];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
} 

// function to prompt user for password options. 
// received assistance from tutor with concat and promt on w3schools
// Got function line 28 from instructor.
// removed else/concat and got assistance from student Emily, however code still did not generate. 
function getPasswordOptions() {
  optionPass = [];
  
  passwordLength = prompt("Enter Password between 8 and 128 characters.");
   
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length has to be 8 - 128 digits. Please try again.");
    
    return null;
  }
  // removed (else /concat and got assistance from student Emily, however code still did not generate.
  if(confirm("Would you like special Characters?")) {
    optionPass = optionPass.concat(specialCharacters);
  }
  
  if(confirm("Would you like lowercase letters?")) {
    optionPass = optionPass.concat(lowerCase);
  }
  if(confirm("Would you like uppercase letters?")) {
    optionPass = optionPass.concat(upperCase);
  }
  if(confirm("Would you like numbers in your password?")) {
    optionPass = optionPass.concat(numeric);
  }
   
   if(optionPass.length === 0) {
    alert("Pick at least one option!");
    return "Try again!";
  }
  
  else {
    return optionPass;
  }
    
}


// function for getting a random element from an array
// Got function line 57 from instructor, however kept getting undefined due to the (arr) added so I took it out. 
function getRandom(){
  var password = "";
  passwordLength = "";
  optionPass = [];
 
  for(var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * optionPass.length);
    password += optionPass[index];
  }
  
  return password;

}

// Function to generate password with user imput
// Got function line 71 from instructor. 
// 
function generatePassword() {
  getPasswordOptions();
  var password = getRandom();
  passwordLength = "";
    
  return password;

}

