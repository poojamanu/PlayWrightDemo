import { LoginPage } from "../PagesTS/LoginPage.ts"
import { ProductPage } from "../PagesTS/ProductPage.ts"
import { CartPage } from "../PagesTS/CartPage"
import { CheckoutPage } from "../PagesTS/CheckoutPage"
import { Page } from "@playwright/test"
export class PageObjectManager {
    loginpage:LoginPage
    productpage:ProductPage
    cartpage:CartPage
    checkoutpage:CheckoutPage
    constructor(page:Page) {
        //this.page=page
        this.loginpage = new LoginPage(page)
        this.productpage = new ProductPage(page)
        this.cartpage = new CartPage(page)
        this.checkoutpage = new CheckoutPage(page)


    }
    getLoginPage(){
        return this.loginpage
    }

    getProductPage(){
        return this.productpage
    }

    getCartPage(){
        return this.cartpage
    }

    getCheckoutPage(){
        return this.checkoutpage
    }
}