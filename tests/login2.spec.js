const {test, expect } = require("@playwright/test")

test.use({storageState : './test/auth.json'})

test("Login", async function ({page}) {
    
    await page.goto("https://practice.expandtesting.com/secure")
    await page.pause()
    //await page.locator(" //i[@class='icon-2x icon-signout']")


    

})