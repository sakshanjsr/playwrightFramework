const{test , expect} = require('@playwright/test')

test("Handle Dropdown" , async function ({page}) {


    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.pause()
    await page.locator("//button[contains(text(),'Alert')]").click()
    
})