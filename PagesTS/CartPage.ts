import { expect, Locator, Page } from "@playwright/test";
export class CartPage {
    page:Page
    checkoutButton:Locator
    shopingcartItemLocator:Locator
    constructor(page:Page) {
        this.page = page
        this.checkoutButton = page.locator("#checkout")
        this.shopingcartItemLocator = page.locator(".inventory_item_name")
    }

    async verifyCartItem(myProduct:string) {
        const shopingcartItem = await this.shopingcartItemLocator.textContent()
        await expect(myProduct).toBe(shopingcartItem)

    }
    async checkout() {
        await this.checkoutButton.click()

    }

}