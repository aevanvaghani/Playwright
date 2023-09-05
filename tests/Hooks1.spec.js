const { default: test, expect } = require("@playwright/test");

test('home page test', async({page}) =>{

    await page.goto("https://www.demoblaze.com/")
//  login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[@onclick='logIn()']").click()

//  home page
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength[9]
//  logout
    await page.locator('#logout2').click()
    
})

test('add product to cart test',async ({page}) =>{
    await page.goto("https://www.demoblaze.com/")
    //  login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator("//button[@onclick='logIn()']").click()

    // add product to cart
    await page.locator("(//a[@class='hrefch'])[1]").click()
    await page.locator("//a[@class='btn btn-success btn-lg']").click()

    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

    //  logout
    await page.locator('#logout2').click()
})