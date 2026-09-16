import test from "@playwright/test";

test("demo test",async({browser})=>{
    //browser fixture
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.amazon.in/")
    //await page.pause()
})
//page fixture
test.skip("demo test2",async({page})=>{
    await page.goto("https://www.google.com/")

    await page.pause()

})