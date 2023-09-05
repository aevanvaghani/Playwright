const { default: test, expect } = require("@playwright/test");

test("Soft assertions",async({page})=>{

    await page.goto("https://www.demoblaze.com/")
    
    //Hard assertions
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/")
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
    


})