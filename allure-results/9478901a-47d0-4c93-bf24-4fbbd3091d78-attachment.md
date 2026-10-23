# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\patch.spec.js >> partial_update
- Location: tests\API\patch.spec.js:2:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "200"
Received: 200
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | test("partial_update", async ({ request }) => {
  3  | 
  4  |     const authData = {
  5  |         username: "admin",
  6  |         password: "password123"
  7  |     };
  8  | 
  9  |     const authResponse = await request.post("https://restful-booker.herokuapp.com/auth", {
  10 |         data: authData,
  11 |         headers: { 'Content-Type': 'application/json' }
  12 |     });
  13 |     expect(authResponse.status()).toBe(200);
  14 |     const authJson = await authResponse.json();
  15 |     const token = authJson.token;
  16 |     expect(token).toBeTruthy();
  17 | 
  18 |     const bookingData = {
  19 |         firstname: "James updated",
  20 |         lastname: "Brown",
  21 |         totalprice: 111,
  22 |         depositpaid: true,
  23 |         bookingdates: {
  24 |             checkin: "2018-01-02",
  25 |             checkout: "2019-01-03"
  26 |         },
  27 |         additionalneeds: "Breakfast"
  28 |     };
  29 | 
  30 |     const bookingResponse = await request.post("https://restful-booker.herokuapp.com/booking", {
  31 |         headers: { 'Content-Type': 'application/json' },
  32 |         data: bookingData
  33 |     });
  34 |     expect(bookingResponse.status()).toBe(200);
  35 |     const bookingJson = await bookingResponse.json();
  36 |     const bookingId = bookingJson.bookingid;
  37 | 
  38 |     const updateData = {
  39 |         "firstname": "MAthew",
  40 |         "lastname": "harry"
  41 |     }
  42 |     const patchResponse=await request.patch(`https://restful-booker.herokuapp.com/booking/${bookingId}`,
  43 |         {
  44 |             headers:{
  45 |                 'Content-Type':'application/json',
  46 |                 'Accept': 'application/json',
  47 |                 'Cookie': `token=${token}`
  48 |             },
  49 |             data:updateData
  50 |         }
  51 |     )
> 52 |     expect(patchResponse.status()).toBe("200")
     |                                    ^ Error: expect(received).toBe(expected) // Object.is equality
  53 |     const patchJson=await patchResponse.json()
  54 |     expect(patchJson.firstname).toBe("MAthew")
  55 | 
  56 | })
```