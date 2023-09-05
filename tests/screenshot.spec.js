const { test ,expect} = require("@playwright/test");

test('page screenshot',async ({ page })=>{

    await page.goto('https://demo.opencart.com/')
    await page.screenshot({ path:'tests/screenshots'+Date.now()+'Homepage.png'})
})

test('fullpage screenshot',async ({ page })=>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({ path:'tests/screenshots'+Date.now()+'Homepage.png',fullPage:true})
    
})

test.only('element screenshot',async ({ page })=>{
    await page.goto('https://demo.opencart.com/')
    await page.locator("(//div[@class='product-thumb'])[1]").screenshot({ path:'tests/screenshots'+Date.now()+'macbook.png'})
    
})
