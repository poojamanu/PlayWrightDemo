import { Locator, Page } from "@playwright/test"

export class ProductPage {
allProductsLocator:Locator
shoppingcartLocator:Locator
inventoryItemDescription:Locator
page:Page
    constructor(page:Page) {
        this.page = page
        this.allProductsLocator = page.locator(".inventory_item_name")

        this.shoppingcartLocator = page.locator(".shopping_cart_link")

        this.inventoryItemDescription = page.locator(".inventory_item_description")

      


    }
    async selectProduct(myProduct:string) {


        const allProducts = await this.allProductsLocator.allTextContents()
        const productCount = await this.allProductsLocator.count()

        for (let i = 0; i < productCount; i++) {
            if (await this.inventoryItemDescription.nth(i).locator(".inventory_item_name").textContent() == myProduct) {
                const addTocartButton=this.inventoryItemDescription.nth(i).locator(".btn.btn_primary.btn_small.btn_inventory ")
                await addTocartButton.click()
            }
        }
    }
    async navigateToShoppingCart(){
        await this.shoppingcartLocator.click()
    }
   

}