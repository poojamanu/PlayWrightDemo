import test, { expect } from "@playwright/test";
import {customTest} from "../Utils/customData.js"
import {mytest} from "../Utils/sampleCustom.js"
import {customLocators} from "../Utils/baseTest.js"
test.skip("DemoProject",async({page})=>{
    await page.goto("https://www.saucedemo.com")
    
    const Username=page.getByPlaceholder("Username")
    await Username.fill("standard_user")

    const password=page.locator("input[name='password']")
    await password.fill("secret_sauce")

    const loginButton=page.getByRole('button',{name:'Login'})
    await loginButton.click()

    const allProducts=await page.locator(".inventory_item_name" ).allTextContents()
    console.log(allProducts)

    const productCount= await page.locator(".inventory_item_name" ).count()
    console.log(productCount)

    const myProduct = "Sauce Labs Onesie"
    for(let i=0;i<productCount;i++){
      if(  await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name").textContent() ==myProduct){
        await page.locator(".inventory_item_description").nth(i).locator(".btn.btn_primary.btn_small.btn_inventory ").click()
      }
    }
    const cart= page.locator(".shopping_cart_link")
    await cart.click()

    const shopingcartItem= await page.locator(".inventory_item_name").textContent()
    await expect(myProduct).toBe(shopingcartItem)

    await page.locator("#checkout").click()

    //checkout page

    const firstName= page.getByPlaceholder("First Name")
    await firstName.fill("Alex")

    const lastName=page.getByPlaceholder("Last Name")
    await lastName.fill("phil")

    const zip=page.locator("#postal-code")
    await zip.fill("8983")
     
    await page.locator("#continue").click()

    //finish

    await page.locator("#finish").click()
//verify thank you message
    const orderCompletion= await page.getByRole("heading",{name:"Thank you for your order!"})
await expect(orderCompletion).toBeVisible()
})

const users=["loginData","loginData2"]

/*customTest.skip("Sample custom test",async({page,loginData})=>{
  for(let user of users){
  await page.goto("https://www.saucedemo.com")
    
  const Username=page.getByPlaceholder("Username")
    await Username.fill(user.username)

    const password=page.locator("input[name='password']")
    await password.fill(user.password)

    const loginButton=page.getByRole('button',{name:'Login'})
    await loginButton.click()
  }
})*/
mytest.skip("my test",async({page,userDetail})=>{
  for(const user of userDetail){
  await page.goto("https://www.saucedemo.com")
    
  const Username=page.getByPlaceholder("Username")
    await Username.fill(user.username)

    const password=page.locator("input[name='password']")
    await password.fill(user.password)

    const loginButton=page.getByRole('button',{name:'Login'})
    await loginButton.click()
  }
})

customLocators('baseTest',async({page,loginFunction})=>{
  await loginFunction("standard_user","secret_sauce")
})
