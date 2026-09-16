import { expect } from "@playwright/test";
export class CartPage {
    constructor(page) {
        this.page = page
        this.checkoutButton = page.locator("#checkout")
        this.shopingcartItemLocator = page.locator(".inventory_item_name")
    }

    async verifyCartItem(myProduct) {
        const shopingcartItem = await this.shopingcartItemLocator.textContent()
        await expect(myProduct).toBe(shopingcartItem)

    }
    async checkout() {
        await this.checkoutButton.click()

    }

}