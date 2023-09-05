const { default: test ,expect} = require("@playwright/test");

test('Single File',async ({page}) =>{

    await page.goto("https://www.foundit.in/")
    
    await page.waitForSelector('.mqfihd-upload')
    await page.locator('.mqfihd-upload').click()
    
    await page.locator('#file-upload').setInputFiles('tests\\uploadfiles\\sem-3 exam.pdf')

    await page.waitForTimeout(5000)

})



    test.only('Multiple Files', async ({page}) =>{

        await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

        await page.locator('#filesToUpload')
                    .setInputFiles(['tests\\uploadfiles\\sem-3 exam.pdf',
                                    'tests\\uploadfiles\\UNIT 1 PART 3.pdf']);

        await page.waitForTimeout(3000)
        expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('sem-3 exam.pdf')
        expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('UNIT 1 PART 3.pdf')

        await page.waitForTimeout(3000)
            // removing files
        await page.locator('#filesToUpload').setInputFiles([])
        await page.waitForTimeout(3000)

        expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

        await page.waitForTimeout(3000)

    })