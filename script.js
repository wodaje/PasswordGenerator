// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array's for randomly designed password
var lowerChar = 'abcdefghijklmnopqrstuvwxyz'.split('')
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var specialChar = '~!@#$%^&*()_+'.split('')
var numChar = ['0','1','2','3','4','5','6','7','8','9']

// Write password to the #password input
  function writePassword() {

// User Choice to continue with password generator
  var initialChoice = confirm("Are you looking to generate a random secure password? ")  

  if(!initialChoice){
    
   alert("No Password was generated as per request")
   
   }

  if (initialChoice) {

  var lengthPass = 8

  var lengthPass = prompt("Enter desired length in numbers between 8 and 128")
  alert("Your password will be " + lengthPass + " Characters long - Nice choice!" )

  alert("Next you will need to chose as at least one option for Upper, lower case, numbers and special characters to construct your password")

  //This will confirm user choices and circle back if non are selected
  
  for ( var x = 0; x < 1; x=x)  {
   
    //y is to identify user combo for password selection
    var y = 0

  var lowerCharChoice   = confirm("Would you like to enclose Lower Case Characters ?")
  if (lowerCharChoice){
      x=x+1
      y = y + .0001
   }
 
   var upperCharChoice   = confirm("Would you like to include Upper Case Characters ?")
   if (upperCharChoice){
     x=x+1
     y = y + .001 
   }
 
   var specialCharChoice = confirm("Would you like Special Characters Included ?")
   if (specialCharChoice){
      x=x+1
      y = y + .01
   }
  
   var numCharChoice     = confirm("Would you like numbers included ?")
    if (numCharChoice){
      x=x+1
      y = y + .1
   } 
   if (x < 1)  {
     alert("Error = You must select at least one Character set to continue! Please try again")
   }
  }

  // match string combo for random password generation
  var stringSelector = ""

switch(y){
    case .0001:
        var stringSelector = lowerChar;
        break;
    case .0010:
        var stringSelector =  upperChar;
        break;
    case .0011:
        var stringSelector =  lowerChar.concat(upperChar);
        break;
    case .0100:
        var stringSelector =  specialChar;
        break;
    case .0101:
        var stringSelector =  lowerChar.concat(specialChar);
        break;
    case .0110:
        var stringSelector =  upperChar.concat(specialChar);
        break;
    case .0111:
        var stringSelector =  lowerChar.concat(upperChar,specialChar);
        break;
    case .1000:
        var stringSelector =  numChar;
        break;
    case .1001:
        var stringSelector =  lowerChar.concat(numChar);
        break;
    case .1010:
        var stringSelector =  upperChar.concat(numChar);
        break;    
    case .1011:
        var stringSelector =  lowerChar.concat(upperChar,numChar); 
        break; 
    case .1100:
        var stringSelector =  specialChar.concat(numChar); 
        break;    
    case .1101:
        var stringSelector =  lowerChar.concat(specialChar,numChar);
        break; 
    case .1110:
        var stringSelector =  upperChar.concat(specialChar,numChar);
        break;
    case .1111:
        var stringSelector =  lowerChar.concat(upperChar,specialChar,numChar);
    }  

 //Selecting combined array to generate password 

// syntax for picking a random item from an array
//var randomItem = arr[Math.floor(Math.random() * arr.length)]

var generator   = ""
var password    = ""

for (x = 0; x < lengthPass; x++) {
    var generator = stringSelector[Math.floor(Math.random() * stringSelector.length)]
    console.log(generateBtn)
    var password = password + generator
    console.log(password)
} 
 

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* Assuming that window.crypto.getRandomValues is available */

