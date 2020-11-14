Password Generator Upgrades/Functionality added Jeff Woda Nov 14 2020 Assignment

Program first confirms user selection to proceed with password generation - if selected in error nothing is enacted and porgram is terminated with message

User then chooses password length = choice is confirmed

This number needs to be between 8 and 128 = initial wrong input will result in second chance via data validation - if the users makes a second eror - message prompts to try and start over paying attention to reuqired parameteres for passowrd length selection -program terminates.

Upon vetted password length input - User then selects password criteria - note a choice must be made or the choices will continue to loop until at least one choice is selected - else error message will be displayed - there is no way to exit from this choice

The same user choice loop is used to assign value to the selection choices with value y

This value is then used in a logical .1111 selector operation under switch in order to  combine the appropriate string from which to randomly generate the password

I may next try to write a function for the 0/1 selector to reduce the heavy switch load coding prone to potential error and inflexibility.

Using the user number choice we can now auto generate a password and display