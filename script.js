// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array's for randomly designed password
var lowerChar = 'abcdefghijklmnopqrstuvwxyz'.split('')
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var specialChar = '~!@#$%^&*()_+'.split('')
var numChar = ['0','1','2','3','4','5','6','7','8','9']

// Write password to the #password input
  function writePassword() {
  var initialChoice = confirm("Are you looking to generate a random secure password? ")  

  // User Choice to continue with password generator
  if (initialChoice) {

  var lengthPass = prompt("Enter desired length in numbers between 8 and 128")
  alert("Your password will be " + lengthPass + " Characters long - Nice choice!" )

  alert("Next you will need to chose as at least one option for Upper, lower case, numbers and special characters to construct your password")

  //This will confirm user choices and circle back if non are selected
  
  for ( var x = 0; x < 1; x=x)  {

  var lowerCharChoice   = confirm("Would you like to enclose Lower Case Characters ?")
  if (lowerCharChoice){
      x=x+1
   }
  var upperCharChoice   = confirm("Would you like to include Upper Case Characters ?")
   if (upperCharChoice){
     x=x+1
   }
  var specialCharChoice = confirm("Would you like Special Characters Included ?")
   if (specialCharChoice){
      x=x+1
   }
  var numCharChoice     = confirm("Would you like numbers included ?")
    if (numCharChoice){
      x=x+1
   } 
   if (x < 1)  {
     alert("Error = You must select at least one Character set to continue! Please try again")
   }
  }




    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


  }

  alert("No Password was generated as per request")
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* Assuming that window.crypto.getRandomValues is available */

