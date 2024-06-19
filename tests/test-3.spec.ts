import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('hola');
  await page.getByPlaceholder('my password').click();
  await page.getByPlaceholder('my password').fill('hola123');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.getByRole('link', { name: 'dashboard' }).click();
  await page.getByText('cochez').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'cochez' }).click();
  const page1 = await page1Promise;
});