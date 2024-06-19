import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.banesco.com.pa/');
  // await page.getByPlaceholder('Estoy buscando...').click();
  await page.getByPlaceholder('Estoy buscando...').fill('token');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(20000);
  await page.locator('#paginated-list div').filter({ hasText: '¿Cómo puedo ingresar a Tus' }).nth(1).click();
  await page.waitForTimeout(10000);
  await page.locator('#paginated-list div').filter({ hasText: 'Ingresa a la página web https' }).nth(2).click();
});