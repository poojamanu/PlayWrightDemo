import { Locator, Page } from "@playwright/test"
import strict from "node:assert/strict"

export class LoginPage{
    Username:Locator
    password:Locator
    loginButton:Locator
    page:Page
    constructor(page:Page){
         this.page=page
         this.Username=page.getByPlaceholder("Username")
    
         this.password=page.locator("input[name='password']")
    
         this.loginButton=page.getByRole('button',{name:'Login'})

    }

    //actions

   async gotoPage(){
        await this.page.goto("https://www.saucedemo.com")
    }
    
    async validateUser(uname:string,pwd:string){
        await this.Username.fill(uname)

        await this.password.fill(pwd)

        await this.loginButton.click()
    }
    
}