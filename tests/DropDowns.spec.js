const { default: test, expect } = require("@playwright/test");

test("Handle dropdowns",async({page})=>{

    await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');

    // await page.locator('(//select)[1]').selectOption({label:'India'})  
    // await page.locator('(//select)[1]').selectOption('India')
    // await page.locator('(//select)[1]').selectOption({value:'India'})
    // await page.locator('(//select)[1]').selectOption({index: 1})
    // await page.selectOption("(//select)[1]",'India');

    //Assertions
    // const option = await page.locator('(//select)[1] option')
    // await expect(option).toHaveCount(10)

    const option = await page.$$('(//select)[1]')
    console.log("Number of options:", option.length)


    await page.waitForTimeout(5000);


})