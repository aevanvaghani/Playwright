const { test ,expect} = require("@playwright/test");

// only
/*test.only('test1' , async ({page}) =>{
    console.log('this is first')

}) */

// skip 
// test.skip('test2' , async ({page}) =>{
//     console.log('this is second')

// })

// test('test3', async({page,browserName}) =>{
//     console.log('this is test3')
//     if(browserName==='chromium')
//     {
//         test.skip()
//     }
// })

// fixme
// test('test4' ,async ({page}) =>{
//     test.fixme()
//     console.log('this is fourth')
// })

// fail
// test.only('test5' , async ({page}) =>{
//     test.fail()         //exp
//     console.log('this is fifth')
//     expect(1).toBe(2)       //act
//     // if both exp & actual is failed then the test pass
// })

// test.only('test6' , async ({page,browserName}) =>{
//     console.log('this is sixth')
//     if(browserName==='chromium')
//     {
//         test.fail()     //exp
//     }    
// })


//slow()
test('test7' ,async ({page}) =>{
        // test.slow()
        test.setTimeout(3000)
        console.log('this is seventh')
        await page.goto('https://demo.opencart.com/')
    })