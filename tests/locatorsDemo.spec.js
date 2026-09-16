import test,{ expect } from "@playwright/test";


test("locator",async({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    //css locators
    const firstName= page.locator("#validationCustom01") //css locator id
    await firstName.fill("ann")
    //await page.pause()
    const lastName =page.locator(".form-control").nth(1) //selects element in index1, or else use first if its first element
    await lastName.fill("mary")

    const userName=page.locator("input[placeholder='Username']")
    await userName.fill("user")

    const cityName=page.locator("//input[@id='validationCustom03']")  //xpath locator
    await cityName.fill("mumbai")

    //special locators

    const state=page.getByPlaceholder("State")
    await state.fill("maharashtra")

   //const zip=page.locator("#validationCustom05")
   // zip.fill("23445")

    const zip=page.getByPlaceholder("Zip")
    await zip.fill("23456")

    const checkbox=page.getByLabel("Agree to terms and conditions")
    await checkbox.click()
    //await page.pause()

    //const submit=page.locator('button[type="submit"]')
    //await submit.click()

    //special locator to click button
    const button =page.getByRole('button',{name:"Submit form"})
    await button.click()
    
    const message=page.locator("#message-one")
    //await expect(message).not.toBeVisible()  //to assert a locator is not present
    await expect(message).toBeVisible()//to assert a locator is visible
    

    const isVisible=await message.isVisible()
    console.log(isVisible)

    await expect (isVisible).toBeTruthy() //asserts value is true

    const msg= await message.textContent() // retrieves data from single loacator
    console.log(msg)

    //to assert use expect : expect(received).toContain(expected)
    await expect(msg).toContain("successfully!")  //toConatin for substring check

        //await expect(msg).toContain("successlly!") this will fail 



})