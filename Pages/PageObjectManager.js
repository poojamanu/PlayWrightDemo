import { LoginPage } from "./LoginPage"
import { ProductPage } from "./ProductPage"
import { CartPage } from "./CartPage"
import { CheckoutPage } from "./CheckoutPage"
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