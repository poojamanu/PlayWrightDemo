import test from "@playwright/test"
test('iframeTest',async({page})=>{
    await page.goto("https://demoqa.com/frames")

    const frame1=page.frameLocator("#frame1")
    const heading= await frame1.locator("#sampleHeading").textContent()
    console.log(heading)

})