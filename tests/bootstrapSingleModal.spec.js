import {test} from "@playwright/test";

test("Modal test",async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")

    const alertAndModalMenu =page.getByText("Alerts and Modals")
    await alertAndModalMenu.click()

    const bootstrapMEnu= page.getByRole('link',{name:"Bootstrap Modal"})
    await bootstrapMEnu.click()

    const singleLaunchmodal=page.locator("button[data-target='#exampleModalCenter']")
   //const singleLaunchmodal=page.getByRole('button',{name:"Launch modal"}).nth(0)
 // const singleLaunchmodal=page.getByRole('button',{name:"Launch modal"}).nth(0) change to xpath or something unique
    await singleLaunchmodal.click()

    const modalWin= page.getByRole('document')
    
    const saveChangesButton= modalWin.getByRole('button',{name:'Save changes'})
    await saveChangesButton.click()

   // const closeButton= modalWin.locator("//button[@class='btn btn-secondary']").first() //btn btn-secondary means two classses btn and btn-secondary
   const closeButton=modalWin.locator('button.btn.btn-secondary:visible') // to click element which is visible
   await closeButton.click()
})