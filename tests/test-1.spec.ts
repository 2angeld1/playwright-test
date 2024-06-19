import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Buscar', { exact: true }).fill("Jugador de baloncesto letón");
  await page.waitForTimeout(2000);
  await page.keyboard.press('Enter');
  // await page.getByText('').click();
  // await page.waitForTimeout(2000);
  await page.locator('#hdtb-sc').getByRole('link', { name: 'Videos' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Kristaps Porzingis Highlights' }).click();
  await page.waitForTimeout(2000);
  await page.locator('.ytp-timed-markers-container').click();
  await page.getByLabel('Pausa combinación de teclas k').click();
  await page.pause();
});