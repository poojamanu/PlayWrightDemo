//logine ith uname pwd emtpy
// login with uname correct pwd incorrect
// unmae empty pwd fill
// uname fill pwd empty
//incorrect unmae pwd correct

import test from "@playwright/test";

test("invalid password",async({page})=>{
    await page.goto("https://www.saucedemo.com")
    const Username=page.getByPlaceholder("Username")
    await Username.fill("standard_user")

    const password=page.locator("input[name='password']")
    await password.fill("123")

    const loginButton=page.getByRole('button',{name:'Login'})
    await loginButton.click()
})
test("empty username password",async({page})=>{
    await page.goto("https://www.saucedemo.com")
    const Username=page.getByPlaceholder("Username")
    await Username.fill("")

    const password=page.locator("input[name='password']")
    await password.fill("")

    const loginButton=page.getByRole('button',{name:'Login'})
    await loginButton.click()
})
test("invalid username",async({page})=>{
    await page.goto("https://www.saucedemo.com")
    const Username=page.getByPlaceholder("Username")
    await Username.fill("xxx")

    const password=page.locator("input[name='password']")
    await password.fill("secret_sauce")

    const loginButton=page.getByRole('button',{name:'Login'})
    await loginButton.click()
})