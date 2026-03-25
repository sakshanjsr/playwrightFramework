const { test , expect } = require("@playwright/test")



test("Handle multiple windows" , async ({browser}) => {
    
      const context = await browser.newContext()  
      const page1 = await context.newPage()       

      await page1.goto("https://rahulshettyacademy.com/AutomationPractice/")
    
      const [page2] = await Promise.all
      (
            [
                   context.waitForEvent('page'),
                   page1.locator("//a[@id='opentab']").click()
            ]
      )
            await page2.waitForLoadState();
           


         const [page3] = await Promise.all
      (
            [
                   context.waitForEvent('page'),
                   page1.locator("//a[@id='opentab']").click()
            ]
      )


      await page3.waitForLoadState();

       await page2.goto("https://www.linkedin.com/")
      await page3.goto("https://www.msn.com/")
      
      await page1.pause()

      await page2.close()
      await page3.close()


      


})


