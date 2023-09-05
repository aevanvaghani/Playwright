const { test ,expect} = require("@playwright/test");

test('test1', async ({page})  =>{
    await page.goto('https://www.demoblaze.com/')
    await expect(page).toHaveTitle('STORE')
})

test('test2', async ({page})  =>{
    await page.goto('https://demo.nopcommerce.com/')
    await expect(page).toHaveTitle('nopCommerce demo store')
})

test('test3', async ({page})  =>{
    await page.goto('https://demo.opencart.com/')
    await expect(page).toHaveTitle('Your Store')
})