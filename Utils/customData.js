import test from "@playwright/test"
/*extend() means:

Take Playwright's existing test and add my own custom fixture to it.*/

exports.customTest=test.extend({
    loginData:{                   //custom fixture
        username:"standard_user",
        password:"secret_sauce"
    }
   
  
})