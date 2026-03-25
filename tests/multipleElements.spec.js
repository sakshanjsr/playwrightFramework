const { test, expect } = require('@playwright/test');



test('has title', async ({ page }) => {
  
  expect("Saket".includes("Sak")).toBeTruthy()

  await page.goto("https://www.amazon.in/ref=nav_logo")

  
  const WebElements = page.locator("//a[@class='nav-a  ']")
  const count = await WebElements.count()

  console.log("Count : "+count)

  for(let i = 0 ; i<count ; i++){
    const string = await WebElements.nth(i).textContent()
    console.log("textContent : "+string)
  }

  //await page.pause()

});