import { test, expect } from '@playwright/test';

test('navigate to eddicitec.org, scroll to the bottom, and click the element', async ({ page }) => {
  await page.goto('https://eddicitec.org/');
  
  const inputElement = await page.locator('//*[@id="wpforms-267-field_0"]');
  
  await inputElement.click();
  
  await inputElement.fill('Saray');

  const inputElement1 = await page.locator('//*[@id="wpforms-267-field_0-last"]');
  
  await inputElement1.click();
  
  await inputElement1.fill('Ibarguen');

  const inputElement2 = await page.locator('//*[@id="wpforms-267-field_1"]');
  
  await inputElement2.click();
  
  await inputElement2.fill('ibarguensara27@gmail.com');

  const inputElement3 = await page.locator('//*[@id="wpforms-267-field_2"]');
  
  await inputElement3.click();
  
  await inputElement3.fill('esta es una prueba automatizada');

  const submitElement = await page.locator('//*[@id="wpforms-submit-267"]');
  
  await submitElement.click();
});

test('Navegando por la pagina', async ({ page }) => {
  await page.goto('https://eddicitec.org/');
  await expect(page).toHaveTitle(/eddicitec/);
  await page.locator('//*[@id="cmplz-cookiebanner-container"]/div/div[6]/button[1]').click();
  await page.waitForTimeout(2000);
  //await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);
  await page.mouse.wheel(0,1000);
  await page.getByRole('link', { name: 'Instagram' }).click();
  await page.waitForTimeout(2000);
  await page.pause();
});

test('Entrando desde el principio', async ({ page }) => {
  await page.goto('https://dev.banesco.com.pa/');
  await expect(page).toHaveTitle(/Banesco/);  
  
  const inputElement = page.getByPlaceholder('Estoy buscando...').nth(0);
  await inputElement.waitFor();
  await inputElement.scrollIntoViewIfNeeded();
  await inputElement.fill('token');
  await page.waitForTimeout(2000);
  await page.keyboard.press("Enter");
  await page.pause();
});

test('Test', async ({ page }) => {
  await page.goto('https://www.doitcenter.com.pa/');
  await expect(page).toHaveTitle(/Do it Center/);  
  await page.waitForTimeout(2000);
  const inputElement = page.getByAltText('Somier Standard Queen Con 9 Patas 200x150 Centímetros CREATIVE DECOR 5300007900');
  await inputElement.waitFor();
  await inputElement.scrollIntoViewIfNeeded();
  await inputElement.click();
  await page.waitForTimeout(2000);
  await page.keyboard.press("Enter");
  await page.pause();
});

test('Test 2', async ({ page }) => {
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  await page.waitForTimeout(2000);
  await page.locator('//*[@id="my-text-id"]').fill("input");
  await page.waitForTimeout(2000);
  await page.locator('//*[@type="password"]').fill("hola123");
  await page.waitForTimeout(2000);
  await page.locator('//*[@name="my-textarea"]').fill("esto es un comentario");
  await page.locator('//*[@name="my-readonly"]').click();
  const combobox = page.locator('select[name="my-select"]');
  await combobox.selectOption('2');
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Type to search...').fill('Los Angeles');
  await page.waitForTimeout(2000);
  await page.keyboard.press("Enter");
  await page.pause();
});

test('check', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
 
  await page.waitForTimeout(2000)
  await page.locator("#my-check-1").uncheck()
  await page.waitForTimeout(2000)
  await page.locator("#my-check-2").check()
 
  await page.pause()
});

test('RadioButon', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
 
  await page.waitForTimeout(2000)
  await page.locator("#my-radio-2").check()
 
  await page.pause()
});
test('RadioButonByLabel', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
 
  await page.waitForTimeout(2000)
  await page.getByLabel("Default radio").check();
 
  await page.pause()
});
 
test('getByText', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
 
  await page.waitForTimeout(2000)
  await page.getByText("Textarea").fill("HOLA MUNDO");
 
  await page.pause()
});
 
 
test('Dropdown', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  await page.waitForTimeout(2000)
  const select = await page.locator("body > main > div > form > div > div:nth-child(2) > label:nth-child(1) > select")
  await page.waitForTimeout(2000)
  await select.selectOption({ label: "Two" })
  await page.pause()
 
});
test('hover', async ({ page }) => {
 
  await page.goto('https://www.cochezycia.com/');
 
  // const rowLocator = page.getByRole('listitem');
  // await rowLocator.filter({ hasText: 'Departamentos' }) .hover()
  await page.locator("#navbar > ul > li:nth-child(1) > #departmentsCO").nth(1).hover()
  await page.getByRole('link', { name: 'Construcción' }).nth(1).hover();
  await page.getByRole('link', { name: 'Alambres' }).nth(1).click();
 
  await page.pause()
});

test('Drag and Drop', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/mouse_interaction.html');
  await page.waitForTimeout(2000)
  await page.locator('#draggable').dragTo(page.locator('#droppable'));
 
  await page.pause()
});
test('Upload file', async ({ page }) => {
 
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  await page.waitForTimeout(2000)
  await page.getByLabel('Default checkbox').setInputFiles([]);
  await page.locator('//input[@name="my-file"]').setInputFiles({
    name: 'file.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('this is test')
  });
 
  await page.pause()
});


//pruebas mias 
test('testing', async ({ page }) => {
 
  await page.goto('https://www.toyotarp.com/citasdetaller');
 
  await page.waitForTimeout(2000)
  await page.getByLabel("Tarde").check();
  await page.waitForTimeout(2000)
  await page.getByText('Comentario', { exact: true }).fill("no llamar");
  const select = await page.locator('select#jform_garage.custom-select');
  await page.waitForTimeout(2000)
  await select.selectOption({ label: "Penonomé" })
  await page.getByRole('navigation').getByText('Servicios', { exact: true }).click()
  await page.getByRole('link', { name: 'Membresía Kilometros' }).hover();
  await page.waitForTimeout(2000)
  await page.getByRole('navigation').getByRole('link', { name: 'Promociones' }).hover();
  await page.waitForTimeout(2000)
  await page.getByRole('navigation').getByRole('link', { name: 'Promociones' }).click();
  await page.pause()
});

test('testing 2', async ({ page }) => {
 
  await page.goto('https://www.toyotarp.com/arcop');
 
  await page.waitForTimeout(2000)
  await page.mouse.wheel(0,1000);
  await page.getByLabel('Anexar Documentos (pdf - jpg)').setInputFiles([]);
  await page.locator('//input[@name="archivotmp[]"]').setInputFiles({
    name: 'este-es-un-archivo.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('this is test')
  });
 
  await page.pause()
});