
const {test, expect} = require('@playwright/test')


test("Verify Error Messages" , async function({page}){

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("//input[@id='username']").type("student", {delay:100})
    await page.locator("//input[@id='password']").type("Password121" , {delay:100})

    await page.locator("//button[@id='submit']").click()
    
    

    const errorMessage = await page.locator("//div[@id='error' and contains(text(),'invalid')]").textContent()

    expect (errorMessage==="Your username is invalid").toBeTruthy()
})