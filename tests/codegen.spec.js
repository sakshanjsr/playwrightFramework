


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('student' , {deplay:100});
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123', {deplay:100});
  await page.getByRole('button', { name: 'Submit' }).click();
  const loginMessage = await page.getByText('Congratulations student').textContent();
  expect (loginMessage.includes("Congratulations student")).toBeTruthy()
  

  await page.getByRole('link', { name: 'Log out' }).click();
});