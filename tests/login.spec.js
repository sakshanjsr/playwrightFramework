const {test, expect } = require("@playwright/test")

test("Login", async function ({page}) {
    
    await page.goto("https://practice.expandtesting.com/login")
    await page.locator("//input[@id='username']").fill("practice")
    await page.locator("//input[@id='password']").fill("SuperSecretPassword!")

    //await page.getByRole("button", {name : "submit-login"}).click();
    const submitButton =  page.locator("//button[@name='submit-login']")
    const color = submitButton.evaluate(e1=> window.getComputedStyle(e1).borderColor)
    console.log("Color : "+color)
    //await submitButton.screenshot({path : './test/button.png'})
    await submitButton.click()
    //await page.getByRole("insertion", {name : "username"}).fill("practice")

   // await page.context().storageState({path : './test/auth.json'})
    

})