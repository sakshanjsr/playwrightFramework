const { test , expect } = require("@playwright/test")



test("Handle multiple windows" , async ({browser}) => {
    
      const context = await browser.newContext()  
      const page = await context.newPage()       

      await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    
      const [page2] = await Promise.all
      (
            [
                   context.waitForEvent('page'),
                   page.locator("//button[@id='openwindow']").click()
            ]
      )
            
      
      await page2.waitForLoadState();
      await page2.goto("https://google.com/")
           
      await page.pause()



      


})


