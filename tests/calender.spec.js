import test, { expect } from "@playwright/test";

test("date picker",async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    const datepickerMEnu= page.getByRole('link',{name:'Date Pickers'})
    await datepickerMEnu.click()
    const selectCalender=page.locator(".form-control.datepicker")
    await selectCalender.click()

    await page.locator(".datepicker-days th.datepicker-switch").click()
    await page.locator(".datepicker-months th.datepicker-switch").click()
     const targetYear=2026
     const targetMonth=3
     const targetDate=12
   while(true){
    const yearRange=await page.locator(".datepicker-years th.datepicker-switch").textContent()
    console.log(yearRange)
    const startYear= yearRange.split('-')[0]
    const endYear= yearRange.split('-')[1]
    console.log(startYear)
    console.log(endYear)

   if(targetYear>=startYear && targetYear<=endYear){
      break
    }
    if(targetYear<startYear){
       await page.locator(".datepicker-years .prev").click()
    }
    else{
      await page.locator(".datepicker-years .next").click()
        
    }
    
   }
    //await page.getByText(targetYear.toString(),{exact:true}).click()
    await page.locator('.datepicker-years .year').filter({hasText:new RegExp(`^${targetYear}$`)}).click()
    await page.locator(".month").nth(targetMonth-1).click()
    await page.getByText(targetDate.toString(),{exact:true}).click()


    //show date and verify text
    const enteredDate=await page.locator("#single-input-field").textContent()
    await page.locator("#button-one").click()

    const dateMsg=await page.locator("#button-one").textContent()

    await expect(dateMsg).toContain(enteredDate)


})

