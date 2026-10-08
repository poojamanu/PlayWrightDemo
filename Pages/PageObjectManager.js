import { LoginPage } from "./LoginPage.js"
import { ProductPage } from "./ProductPage.js"
import { CartPage } from "./CartPage.js"
import { CheckoutPage } from "./CheckoutPage.js"
export class PageObjectManager {
    constructor(page) {
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