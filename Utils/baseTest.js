import { test } from "@playwright/test"
//same as export const customLocators=
exports.customLocators = test.extend({
    commonLocators: async ({ page }, use) => {     //use is used to give fixture value to anpther test/fixture
        //passing loators as fixtures
        const locators = {
            Username: page.getByPlaceholder("Username"),
            password: page.locator("input[name='password']"),
            loginButton: page.getByRole('button', { name: 'Login' })
        }
        await use(locators)
    },
    
    loginFunction: async ({ page, commonLocators }, use) => {
        //pssing function as fixture
        const login = async (uname, pwd) => {
            await page.goto("https://www.saucedemo.com")
            await commonLocators.Username.fill(uname)
            await commonLocators.password.fill(pwd)
            await commonLocators.loginButton.click()
        }
         await use(login)

         
    }

})