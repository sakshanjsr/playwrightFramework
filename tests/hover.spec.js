const {test, expect } = require("@playwright/test")

test("Mouse Hover", async function ({page}) {
    
    await page.goto("https://www.ebay.com/")
    await page.locator("//span[contains(text(),'Motor')]").hover()


    await page.waitForTimeout(5000)

})