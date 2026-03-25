const { test , expect } = require("@playwright/test")



test("Handle multiple tabs" , async ({browser}) => {
    
      const context = await browser.newContext()  // Creates browser context (isolated session) in the background
      const page1 = await context.newPage()       // Open a page/window under the above browser context.

      await page1.goto("https://xqa.io/practice/browser-windows")




      const [page2] = await Promise.all   //Promise.all() returns array of results
            (
                [
                    context.waitForEvent("page"),  //this step waits for new window to open
                    page1.locator("//button[@id='tabButton']").click()   //Click element on the current window >>>> This triggers a new WINDOW
                ]
            )

   
      expect ( page2.url() === "https://xqa.io/practice").toBeTruthy()  
       
    //   page1.locator("//button[@id='tabButton']").click()
     


})


