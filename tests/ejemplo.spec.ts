import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/LoginPage';

test('test', async ({ page }) => {
  await page.goto('https://www.multimax.net/');
  await page.getByText('Menú').first().click()
  const devMenu = await page.locator('#header > section > nav > div > div > div').all()
  console.log("ini")
  await page.waitForTimeout(2000)
  for (let div of devMenu){
    if(await(await div.innerText()).match("Hogar")){
        await div.getByText('Hogar').click()
        await page.waitForTimeout(2000)
        await div.nth(0).getByText('Colchones').click()
        await page.waitForTimeout(2000)
        break;
    }
  }
  console.log("END")
  await page.pause()
});

test('test 2', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const login = new LoginPage(page);
    await login.login("angel.fernandez", "123456");
    await page.waitForTimeout(2000)
    const devMenu = await page.locator('header > div > div').all()
    console.log("ini")
    await page.waitForTimeout(2000)
    for (let div of devMenu){
      if(await(await div.innerText()).match("dashboard")){
          await div.getByText('dashboard').click()
          await page.waitForTimeout(2000)
          await page.getByAltText('Panamfoto').click()
          await page.waitForTimeout(2000)
          break;
      }
    }
    await page.screenshot({path:"screenshot/test-2.png", fullPage:true})
    console.log("END")
    await page.pause()
});

test('test 3', async ({ page }, testInfo) => {
  await page.goto(process.env.url)
  const login = new LoginPage(page);
  await login.login("angel.fernandez", "123456");
  await page.waitForTimeout(2000)
  await page.screenshot({path:"screenshot/login.png", fullPage:true})
  await page.waitForTimeout(2000)
  const result = await page.getByRole('heading', {name: 'Hello, PlayWright'})
  await page.waitForTimeout(2000)
  await expect(result).toBeVisible()
  await testInfo.attach('login', {
  body: await page.screenshot(),
    contentType: 'image/png'
  })
  console.log("END")
  await page.pause()
});

test('test 4', async ({ page }, testInfo) => {
    await page.goto(process.env.url)
    const login = new LoginPage(page);
    await login.login("angel.fernandez", "123456");
    await page.waitForTimeout(2000)
    await page.getByRole('link', { name: 'admin' }).click()
    await page.waitForTimeout(2000)
    await page.locator('li').filter({ hasText: 'User 2add user' }).getByRole('button').click()
    await page.waitForTimeout(2000)
    await page.screenshot({path:"screenshot/test-4.png", fullPage:true})
    await testInfo.attach('login', {
      body: await page.screenshot(),
        contentType: 'image/png'
    })
    await page.pause()
});

test('test login', async ({ page }, testInfo) => {
  await page.goto(process.env.url)
  const login = new LoginPage(page)
  await login.login("angel.fernandez", "123456");
  await page.waitForTimeout(2000)
  await page.screenshot({path:"screenshot/login.png", fullPage:true})
  await page.waitForTimeout(2000)
  const result = await page.getByRole('heading', {name: 'Hello, PlayWright'})
  await page.waitForTimeout(2000)
  await expect(result).toBeVisible()
  await testInfo.attach('login', {
    body: await page.screenshot(),
    contentType: 'image/png'
  })
  console.log("END")
  await page.pause()
});

test('test login 2', async ({ page }, testInfo) => {
  await page.goto(process.env.url)
  await page.waitForTimeout(2000)
  const login = new LoginPage(page);
  await login.login("angel.fernandez", "123456");
  await page.waitForTimeout(2000)
  const result = await page.getByRole('link', {name: 'admin'}).click()
  await page.waitForTimeout(2000)
  await page.getByRole('listitem')
    .filter({hasText: "User 2"})
    .getByRole('button',{name:'add user 1'})
    .click()
  console.log("END")
  await page.pause()
});

test('dashboard', async ({ page }, testInfo)=>{
  await page.goto(process.env.url)
  await page.waitForTimeout(2000)
  const login = new LoginPage(page)
  await login.login("angel.fernandez", "123456");
  await page.waitForTimeout(2000)
  await page.getByRole('link', {name: 'paises'}).click()
  await page.waitForTimeout(2000)
  const rows = await page.locator('#countries > tbody > tr').all()
  console.log('ini')
  await page.waitForTimeout(2000)
  let countries: Country[] = []
  for (let row of rows){
    let countryName = await row.locator("xpath=.//td[2]").innerText()
    let capital = await row.locator("xpath=.//td[3]").innerText()
    let currency = await row.locator("xpath=.//td[4]").innerText()
    let language = await row.locator("xpath=.//td[5]").innerText()
    let county: Country ={
      name: countryName,
      capital: capital,
      currency: currency,
      language: language
    }
    countries.push(county)
  }
  console.log(countries[5])
  console.log("FIN")
  let validarPais: Country = countries[0];
  expect(validarPais.name =='Armenia');
  expect(validarPais.capital =='Yerevan');
  expect(validarPais.currency =='Dram');
  expect(validarPais.language =='Armenian');
  await page.screenshot({path:"screenshot/dashboard.png", fullPage:true})
    await testInfo.attach('login', {
      body: await page.screenshot(),
        contentType: 'image/png'
    });
  await page.pause()
})
export interface Country{
  name: string,
  capital: string,
  currency: string,
  language: string
}
