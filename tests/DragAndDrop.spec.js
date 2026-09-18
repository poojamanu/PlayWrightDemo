import test from "@playwright/test";

test("drag and drop",async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    await page.locator("#others").click()
    const draganddropMenu=page.getByRole('link',{name:'Drag and Drop'})
    await draganddropMenu.click()

   // const drag1= page.getByText("Draggable n°1")
   const dropElements=await page.locator("#todrag span[draggable='true']")
    const drop=page.locator("#mydropzone")
    //await drag1.dragTo(drop)

const count=await dropElements.count()
   for(let i=0;i<count;i++){
        await dropElements.first().dragTo(drop)
        await page.waitForTimeout(3000)
   }
    
})


/*click options

click()
locator.dblClick()
triple click -locator.click({clickCount:3})
right click- locator.click({button:"right"})*/

/* move hover
locator.hover() */

//test("checkbox ")