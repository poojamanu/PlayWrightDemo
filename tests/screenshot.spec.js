import {expect, test} from "@playwright/test"
test('screenshot',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.screenshot({path:'screenshot/screenshot.png',fullPage:true})

    const loginButton=page.getByRole('button',{name:'Login'})
    await loginButton.screenshot({path:'screenshot/loginButton.png'})

})

//visual comparison

test.only('visualcomparison',async({page})=>{
      await page.goto("https://www.saucedemo.com/")
      await expect(page).toHaveScreenshot('screenshot/screenshot2.png')
})