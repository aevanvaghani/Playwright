const { default: test ,expect} = require("@playwright/test");

test('mouse hover', async ({page})=>{

    await page.goto('https://demo.opencart.com/')
    const Desktops = await page.locator("//a[normalize-space()='Desktops']")
    const macbook = await page.locator("//a[normalize-space()='Laptops & Notebooks']")

// mouse hover

    await Desktops.hover()
    await macbook.hover()

    await page.waitForTimeout(5000)

})