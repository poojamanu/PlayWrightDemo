import test, { expect } from "@playwright/test"
test("radio button demo",async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    const inputForm= page.getByRole('link',{name:"Input Form"})
    await inputForm.click()

    
   //click radio button select male and verify text using tocontain

   const radioButtonMenu=page.getByRole('link',{name:'Radio Buttons Demo'})
   await radioButtonMenu.click()

   //const maleButton=page.getByLabel("Male") //not unique

   const maleButton=page.locator("label[for='inlineRadio1']")
   await maleButton.click()

   const showSelectedValueButton= page.locator("#button-one")
   await showSelectedValueButton.click()

   const message=page.locator("#message-one")
    const messageText=await message.textContent()
   await expect(messageText).toContain("Male")
})