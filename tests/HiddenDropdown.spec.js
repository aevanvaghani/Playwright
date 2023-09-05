const { default: test , expect} = require("@playwright/test");

test('hidden options dropdown',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("//input[@placeholder='Username']").fill('Admin')
    await page.locator("//input[@placeholder='Password']").fill('admin123')
    await page.locator("button[type='submit']").click()

    await page.getByRole('link', { name: 'PIM' }).click();
    await page.locator('//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]').click()

    const options = await page.$$("//div[@role='listbox']//div")

    for(let option of options){

    const jobtitle = await option.textContent()
        // console.log(jobtitle)
        if(jobtitle.includes('Software Engineer')){
            await option.click()
            break;
        }
    }
    await page.waitForTimeout(5000)

})