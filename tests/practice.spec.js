import test from "@playwright/test"
test("Practice file",async({page})=>
{
    await page.goto("https://www.saucedemo.com/")

    const Username=page.getByPlaceholder("Username")
    await Username.fill("standard_user")

    const password=page.locator("input[name='password']")
    await password.fill("secret_sauce")

    const loginButton=page.getByRole('button',{name:'Login'})
    loginButton.click()

}
)