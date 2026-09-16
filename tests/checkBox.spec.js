import test, { expect } from "@playwright/test"
test("check box demo",async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    const inputForm= page.getByRole('link',{name:"Input Form"})
    await inputForm.click()

    const checkBoxMenu= page.getByRole('link',{name:"Checkbox Demo"})
   await checkBoxMenu.click()

   const checkBoxText= page.getByRole('checkbox',{name:"Click on this check box"})
   await checkBoxText.click()  //check() also work

   const isChecked= await checkBoxText.isChecked()
   console.log(isChecked)

   //await checkBoxText.uncheck()

   await expect(checkBoxText).toBeChecked()

   //click radio button select male and verify text using tocontain

   
})