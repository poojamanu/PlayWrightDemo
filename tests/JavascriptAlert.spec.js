import test, { expect } from "@playwright/test";

test("javascript alert",async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")

    const alertMEnu= page.locator("#alert-modal")
    await alertMEnu.click()
    const javascriptMenu=page.getByRole('link',{name:"Javascript Alert"})
    await javascriptMenu.click()

    const clickMeButton= page.locator("button[class='btn btn-warning']")
    //handle javascript alert
    page.on('dialog',async(dialog)=>{
        await page.waitForTimeout(5000)
        //await dialog.accept()
        await dialog.dismiss()
    })
    await clickMeButton.click()
   // await page.pause()

   const cancelMsg= page.locator("#confirm-demo")
   const msgText=await cancelMsg.textContent()
   console.log(msgText)
   await expect(msgText).toContain("Cancel")

})