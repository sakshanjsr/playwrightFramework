

//test > where actual test is written
//expect > used for assertion

const { test, expect } = require('@playwright/test');
const { assert } = require('node:console');



test('has title', async ({ page }) => {
  
  expect("Saket".includes("Sak")).toBeTruthy()

  await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

  await page.locator(`//input[@id="autocomplete"]`).fill("Helli")
  

  //await page.pause()

  const context = page.context()
  const newPage = await context.newPage()
  await newPage.goto("https://google.com/")



  //await page.bringToFront()
  await page.locator(`//input[@id="autocomplete"]`).fill("xxxxxxx")
  await expect.soft(page).toHaveTitle("Practice Pagee")
  console.log("I am Here")
  //await newPage.bringToFront()


});