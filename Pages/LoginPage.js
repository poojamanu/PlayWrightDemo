export class LoginPage{
    constructor(page){
         this.page=page
         this.Username=page.getByPlaceholder("Username")
    
         this.password=page.locator("input[name='password']")
    
         this.loginButton=page.getByRole('button',{name:'Login'})

    }

    //actions

   async gotoPage(){
        await this.page.goto("https://www.saucedemo.com")
    }
    
    async validateUser(uname,pwd){
        await this.Username.fill(uname)

        await this.password.fill(pwd)

        await this.loginButton.click()
    }
    
}