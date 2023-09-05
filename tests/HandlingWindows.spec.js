const { test, expect, chromium } = require('@playwright/test');

test('Handle Pages/Windows', async () =>{

    const browser = await chromium.launch()
    const context= await browser.newContext()

    const page1= await context.newPage()
    const page2= await context.newPage()

    const allpages = context.pages()
    console.log("No of pages created:" ,allpages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://www.orangehrm.com/")
    await expect(page2).toHaveTitle("OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM")
})



test.only('handle multiple pages/windows', async () =>{

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    const pagepromise = context.waitForEvent('page')
    await page1.locator("a[href='http://www.orangehrm.com']").click()

    const newPage = await pagepromise;
    await expect(newPage).toHaveTitle("OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM")

    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)

    await browser.close()
})