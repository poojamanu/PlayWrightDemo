# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\get.spec.js >> get_api
- Location: tests\API\get.spec.js:2:1

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "sunt aut facere"
Received string:    "quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto"
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | test("get_api",async({request})=>{
  3  |     const response=await request.get("https://jsonplaceholder.typicode.com/posts/1")
  4  |     //console.log(response)
  5  |     const jsonResponse= await response.json()
  6  |    // console.log(jsonResponse)
  7  | 
  8  |     //status code
  9  |     const statuscode=response.status()
  10 |     console.log(statuscode)
  11 | 
  12 |     //status text
  13 |     const statusText=response.statusText()
  14 |     console.log(statusText)
  15 | 
  16 |     //assertion
  17 |     expect(statuscode).toBe(200)
  18 |     expect(statusText).toBe("OK")
  19 | 
  20 |     expect(response.ok()).toBeTruthy()
  21 |     expect(jsonResponse).toHaveProperty("userId",1)
> 22 |     expect(jsonResponse.body).toContain("sunt aut facere")
     |                               ^ Error: expect(received).toContain(expected) // indexOf
  23 | })
```