import test from "@playwright/test";

test("keybaordActions",async({page})=>{
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")

    const enterMsg=page.locator("#single-input-field")
    await enterMsg.focus()
    await page.keyboard.type("Hello")

    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")

    const valueA=page.locator("#value-a")
    await valueA.focus()
    await page.keyboard.press("Control+V")

    //mouse actions:hovering,click,double click
    const showMessage=page.locator("#button-one")
    await showMessage.hover()

    //right click, chnage to left for left click
    await showMessage.click({button:'right'})
    await page.waitForTimeout(3000)

    await showMessage.dblclick()

    //tripleclick

    await showMessage.click({clickCount:3})

})