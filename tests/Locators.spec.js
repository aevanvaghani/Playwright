// const {test, expect } = require("@playwright/test");
import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{

        await page.goto("https://demoblaze.com/");

        await page.locator('id=login2').click();
        await page.fill('#loginusername','pavanol');
        // await page.locator('#loginusername').fill("pavanol");

            await page.fill('#loginpassword','test@123');

            await page.click("button[onclick='logIn()']");

            const logoutlink= await page.locator("//a[@id='logout2']");

            await expect(logoutlink).toBeVisible();
            await page.close();




})