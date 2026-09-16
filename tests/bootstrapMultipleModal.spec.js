import test from "@playwright/test";

test("multiple modal",async({page})=>
{
    await page.goto("https://selenium.qabible.in/index.php")

    const alertAndModalMenu =page.getByText("Alerts and Modals")
    await alertAndModalMenu.click()
     const bootstrapMEnu= page.getByRole('link',{name:"Bootstrap Modal"})
    await bootstrapMEnu.click()

    const multipleLaunchModal= page.locator("button[data-target='#exampleModalCenter1']")
    await multipleLaunchModal.click()

    const ModalWin=page.locator("//div[@class='modal-dialog modal-dialog-centered modal-lg']")
    const launchAnotherButton= ModalWin.locator("button[data-target='#exampleModalCenter2']")
    await launchAnotherButton.click()

    const ModalWin2=page.locator("//div[@class='modal-dialog modal-dialog-centered']")

    const saveChangesButton=ModalWin2.locator("button.btn.btn-primary:visible")
    await saveChangesButton.click()

    const closeButton=ModalWin2.locator("button.btn.btn-secondary:visible")
    await closeButton.click()
})