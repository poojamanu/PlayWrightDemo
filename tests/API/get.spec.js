import {test,expect} from '@playwright/test'
test("get_api",async({request})=>{
    const response=await request.get("https://jsonplaceholder.typicode.com/posts/1")
    //console.log(response)
    const jsonResponse= await response.json()
   // console.log(jsonResponse)

    //status code
    const statuscode=response.status()
    console.log(statuscode)

    //status text
    const statusText=response.statusText()
    console.log(statusText)

    //assertion
    expect(statuscode).toBe(200)
    expect(statusText).toBe("OK")

    expect(response.ok()).toBeTruthy()
    expect(jsonResponse).toHaveProperty("userId",1)
    expect(jsonResponse.body).toContain("quia et suscipit")
})