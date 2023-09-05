const { default: test ,expect} = require("@playwright/test");

test('frames', async ({ page }) =>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const allframes = await page.frames()
    console.log("number of frames:" ,allframes.length)


    // approach   1
    // const var = await page.frame('name'); // if name is present
    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // await frame1.fill("//input[@name='mytext1']",'Hello')


    // approach   2
    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']")
    inputbox.fill("Hello")


    await page.waitForTimeout(5000)
})