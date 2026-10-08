# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\post.spec.js >> post_api
- Location: tests\API\post.spec.js:3:1

# Error details

```
ReferenceError: expect is not defined
```

# Test source

```ts
  1  | import { test } from "@playwright/test"
  2  | 
  3  | test('post_api', async ({ request }) => {
  4  |     const authData =
  5  |     {
  6  |         "username": "admin",
  7  |         "password": "password123"
  8  |     }
  9  | 
  10 |     const response = await request.post("https://restful-booker.herokuapp.com/auth",{headers:{'Content-Type': 'application/json'},data:authData})
  11 |     console.log(response.status())
  12 | const responseJson=await response.json()
  13 |     console.log(responseJson)
> 14 | expect(responseJson.token).not.toBeNull() //to assert token should not be null
     |  ^ ReferenceError: expect is not defined
  15 | })
```