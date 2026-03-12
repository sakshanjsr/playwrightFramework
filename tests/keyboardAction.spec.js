const{test , expect} = require('@playwright/test')

test("Handle Dropdown" , async function ({page}) {

  
  await page.goto('https://www.google.com/?zx=1773137209388&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).focus();

  await page.keyboard.type("Hello")
  await page.keyboard.press("Digit0")
  

  await page.waitForTimeout(5000)


})