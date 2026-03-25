const{test , expect} = require('@playwright/test')

test("Handle frames @smoke",async function ({page}) {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    const frame = page.frameLocator("//iframe[@id='courses-iframe']")
    const str = await frame.locator("(//a[contains(text() , 'Courses')])[2]").textContent()
    console.log("STR : "+str)
})