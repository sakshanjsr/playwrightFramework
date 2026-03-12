

//test > where actual test is written
//expect > used for assertion

const { test, expect } = require('@playwright/test');



test('has title', async ({ page }) => {
  
  expect("Saket".includes("Sak")).toBeTruthy()

});