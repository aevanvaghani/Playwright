const { test ,expect} = require("@playwright/test");


test.beforeAll(async()=>{
    console.log("this is beforeall hook.......")
})
test.afterAll(async()=>{
    console.log("this is afterall hook......")
})

test.beforeEach(async()=>{
    console.log("this is beforeEach hook.......")
})
test.afterEach(async()=>{
    console.log("this is afterEach hook......")
})

test.describe.skip('group1',()=>{

    test('test1',async({page})=>{
        console.log("this is 1...")
    })

    test('test2',async({page})=>{
        console.log("this is 2...")
    })

})

test.describe('group2',()=>{

    test('test1',async({page})=>{
        console.log("this is 3...")
    })

    test('test2',async({page})=>{
        console.log("this is 4...")
    })

})