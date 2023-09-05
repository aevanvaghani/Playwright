const { default: test ,expect} = require("@playwright/test");

test('Keyboard actions',async ({page})=>{


    await page.goto('https://gotranscript.com/text-compare')

    await page.locator('[name="text1"]').fill('Welcome to Automation Testing')

    // Ctrl + A
    await page.keyboard.press('Control+A');

    // Ctrl + C
    await page.keyboard.press('Control+C');

    // Tab
    // await page.keyboard.press('Tab');
    await page.keyboard.down('Tab');

    // Ctrl + V
    await page.keyboard.press('Control+V')










        await page.waitForTimeout(5000)
})