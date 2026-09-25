import test from "@playwright/test"

test.describe("Grouping testcase",()=>{
    console.log("to demo describe")


test.beforeEach("beforeEachHooks",async({page})=>{
    console.log("Run before each test")
})

test("normal test",async({page})=>{
    console.log("Hello world")
})
test.skip("skip test",async({page})=>{
    console.log("this test is skipped")
})
test.fixme("Bug test",async({page})=>{
    console.log("this test contain bug so fix it")
})

test("slow test",async({page})=>{
    test.slow()
    console.log("increased timeout 3 times")
})

test.afterEach("after each test",async({page})=>{
    console.log("Run after each test")
})
// page and context fixtures wont work in afterall and before all 
test.afterAll("after all test",async({browser})=>{
    console.log("Run after all testcases")
})

test.beforeAll("before all test",async()=>{
    console.log("run before all testcases")
})

})