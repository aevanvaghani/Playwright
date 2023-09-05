const { default: test ,expect} = require("@playwright/test");

test('mouse right click and double click', async({page})=>{

    await page.goto('https://github.com/swisnl/jQuery-contextMenu/demo.html')

    // ex==

    const button = await page.locator("x-path")
    await button.click({button: 'right'})


// mouse double click

    await page.goto("website.com")
    const btnCopy = await page.locator("x-path")

    await btnCopy.dblclick()
    
    const f2 = await page.locator("x-path")
     
    await expect(f2).toHaveValue('hello world')

    await page.waitForTimeout(5000)

}) 
    