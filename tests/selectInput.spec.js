import test, { expect } from "@playwright/test";

test("select input",async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    const inputForm= page.getByRole('link',{name:"Input Form"})
    await inputForm.click()
    const selectInputMenu= page.getByRole('link',{name:"Select Input"})
    await selectInputMenu.click()

    const selectColor=page.locator("#single-input-field")
    await selectColor.selectOption("Red")

    const selectedColorText=page.locator("#message-one")
    const message=await selectedColorText.textContent()

    await expect(message).toContain("Red")

    await expect(selectedColorText).toHaveText(message)
    

})