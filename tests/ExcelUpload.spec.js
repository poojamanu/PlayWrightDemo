import test from "@playwright/test"
test("excelUpload",async({page})=>{
    await page.goto("https://demo.automationtesting.in/FileUpload.html")
    const browseButton= page.locator("#input-4")
    await browseButton.setInputFiles("C:\\Users\\manua\\development\\Projects\\PlayWrightProject\\Utils\\PlaywrightDemoExcel.xlsx")
})

test.only("fileDownload",async({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    const downloadButton=page.locator("#downloadButton")
    const downloadPromise=page.waitForEvent("download") // tells to wait for browser to satrt a downlaod
    await downloadButton.click()
    const download=await downloadPromise //downlaod actaully happens and return downlaod object
    const fileName=download.suggestedFilename()
    await download.saveAs(`C:\\Users\\manua\\development\\Projects\\PlayWrightProject\\Utils\\${fileName}`)

})