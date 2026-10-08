import {After, AfterStep, Before, BeforeStep, Status} from "@cucumber/cucumber"
import { PageObjectManager } from "../../Pages/PageObjectManager.js";
import { chromium } from "@playwright/test";
Before(async function(){
    console.log("Before each scenario once")
    this.browser = await chromium.launch({ headless: false })
      this.context = await this.browser.newContext()
      this.page = await this.context.newPage()
      this.pom = new PageObjectManager(this.page)
})

BeforeStep(async function(){
    console.log("before hook executed before each step")
})

After(async function() {
    console.log("after hook executed aftr once each scenario")
    if(this.browser){
        await this.browser.close()
    }
    if(this.context){
        await this.context.close()
    }
    if(this.page){
        await this.page.close()
    }
})

AfterStep(async function({result}){
    console.log("After hook executed after each step")
if(result.status===Status.FAILED){
    await this.page.screenshot({path:`./screenshot/${Date.now()}.png`,fullPage:true})
}
})