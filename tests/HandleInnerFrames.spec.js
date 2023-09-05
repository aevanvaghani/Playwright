const { default: test ,expect} = require("@playwright/test");

test('Handle innerframes', async ({page}) =>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame_3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    // frame_3.locator("//input[@name='mytext3']").fill('welcome')

// nested frame
    const childFrames = await frame_3.childFrames()
    await childFrames[0].locator('//div[@id="i5"]').check()

    await page.waitForTimeout(5000)

})