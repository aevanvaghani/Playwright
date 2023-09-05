const { default: test ,expect} = require("@playwright/test");

test('drag and drop', async({page})=>{

    await page.goto("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    const rome = await page.locator("#box6")
    const italy = await page.locator("#box106")

        //approach 1
        // await rome.hover()
        // await page.mouse.down()

        // await italy.hover()
        // await page.mouse.up()

        //approach 2
        await rome.dragTo(italy)


//  WASHINGTON    SPAIN

    const WASHINGTON = await page.locator("#box3")
    const SPAIN = await page.locator("#box107")
  
    await WASHINGTON.dragTo(SPAIN)






    await page.waitForTimeout(5000)

})