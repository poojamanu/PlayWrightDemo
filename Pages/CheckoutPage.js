import {expect} from "@playwright/test";
export class CheckoutPage {

    constructor(page) {
        this.page = page
        this.firstName = page.getByPlaceholder("First Name")

        this.lastName = page.getByPlaceholder("Last Name")

        this.zip = page.locator("#postal-code")

        this.continue = page.locator("#continue")
        this.finishButton= page.locator("#finish")
        this.orderCompletionMsg = page.getByRole("heading", { name: "Thank you for your order!" })
    }

    async submitUserDetails(fname,lname,zip) {
        await this.firstName.fill(fname)
        await this.lastName.fill(lname)
        await this.zip.fill(zip)
        await this.continue.click()
    }
    async clickFinish(){
        await this.finishButton.click()
    }
     
  //verify thank you message
  async verifyOrderCompletion(){
    await expect(this.orderCompletionMsg).toBeVisible()

  }

  async completeOrder(fname,lname,zip){
    await this.submitUserDetails(fname,lname,zip)
    await this.clickFinish()
    await this.verifyOrderCompletion()
  }
}