const { default: test, expect } = require("@playwright/test");

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();

    await page.goto("https://www.demoblaze.com/")
    //  login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[@onclick='logIn()']").click()
})

test.afterEach(async () => {
    await page.locator('#logout2').click()
    await page.close()
})



test('home page test', async () => {


    //  home page
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength[9]
})

test('add product to cart test', async () => {

    await page.locator("(//h4[@class='card-title'])[1]").click()
    await page.locator("//a[@class='btn btn-success btn-lg']").click()

    await page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

})