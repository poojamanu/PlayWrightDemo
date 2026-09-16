import test, { expect } from "@playwright/test";
import { PageObjectManager } from "../PagesTS/PageObjectManager";
import InputData from "../Utils/InputData.json"
//let currentDate=new Date().toLocaleDateString()
//const jsObject=JSON.parse(JSON.stringify(InputData))//json converted to string and the converted to json object
for(let i of InputData){

test("DemoProject"+i.myProduct+","+InputData.indexOf(i), async ({ page }) => { 

  // create obj for POM class
  const pom = new PageObjectManager(page)

  //Login page 
  let loginpage = pom.getLoginPage()
  await loginpage.gotoPage()
  await loginpage.validateUser(i.username, i.pwd)


  //Product page 
  let productpage = pom.getProductPage()
  await productpage.selectProduct(i.myProduct)
  await productpage.navigateToShoppingCart()



  //Cart Page
  let cartpage = pom.getCartPage()
  await cartpage.verifyCartItem(i.myProduct)
  await cartpage.checkout()


  //checkout page
  let checkoutpage = pom.getCheckoutPage()
  await checkoutpage.completeOrder(i.fname, i.lname, i.zip)
})
}

