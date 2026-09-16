import test, { expect } from "@playwright/test";

test("prompt alert",async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")

    const alertMEnu= page.locator("#alert-modal")
    await alertMEnu.click()
    const javascriptMenu=page.getByRole('link',{name:"Javascript Alert"})
    await javascriptMenu.click()

    const promptButton= page.locator("button[class='btn btn-danger']")
    //handle javascript alert
    page.on('dialog',async(dialog)=>{
        await page.waitForTimeout(5000)
        console.log(dialog.message())
        await dialog.accept("Obsqura")
        
    })
    await promptButton.click()
    
    const promptText=page.locator("#prompt-demo")
    await expect(promptText).toContainText("Obsqura")

})