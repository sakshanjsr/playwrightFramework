const{test , expect} = require('@playwright/test')

test("Handle Alerts @regression" , async function ({page}) {


    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
   

    page.on('dialog' , async (alertWindow) => {
       
        expect(alertWindow.type()).toContain("alert")
    })
     await page.locator("//button[contains(text(),'Alert')]").click()
    
})