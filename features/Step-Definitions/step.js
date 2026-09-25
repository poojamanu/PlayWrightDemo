 import { Given,When,Then } from "@cucumber/cucumber";
 import { PageObjectManager } from "../../Pages/PageObjectManager";
import { chromium } from "@playwright/test";
 let pom 
 let browser
 let context
 let page
 Given('login application with {string} and {string}',async function (uname, pwd) {
           
             // create obj for POM class
            browser =await chromium.launch({headless:false}) 
            context = await browser.newContext()
            page= await context.newPage()
            pom = new PageObjectManager(page)
             //Login page 
             let loginpage = pom.getLoginPage()
             await loginpage.gotoPage()
             await loginpage.validateUser(uname, pwd)
    });
When('choose {string}', async function (myProduct) {
let productpage = pom.getProductPage()
  await productpage.selectProduct(myProduct)
  await productpage.navigateToShoppingCart() 
});
Then('validate {string} and add to cart', async function (myProduct) {
           let cartpage = pom.getCartPage()
  await cartpage.verifyCartItem(myProduct)
  await cartpage.checkout()

    }); 

When('enter valid details {string} and {string} and {string}',async function (fname, lname, zip) {
           let checkoutpage = pom.getCheckoutPage()
  await checkoutpage.completeOrder(fname, lname, zip)
         });
       

 

