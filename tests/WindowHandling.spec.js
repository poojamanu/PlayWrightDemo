import test from "@playwright/test";

test("multiple window",async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")

    const alertMEnu= page.locator("#alert-modal")
    await alertMEnu.click()
    
    const windowPopup= page.getByRole('link',{name:"Window Popup"})
    await windowPopup.click()

    const facebookClick= page.locator("a[class='btn btn-primary windowSingle']")
    console.log(await page.title())
    const [newPage]=await Promise.all([
        page.waitForEvent('popup'), //wait for new page

        facebookClick.click()

    ])
    await page.waitForLoadState()
   console.log( await newPage.title())

   await newPage.getByLabel('Email address or phone number').fill("xyz");
   await newPage.close()
})