# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\delete.spec.js >> delete_booking
- Location: tests\API\delete.spec.js:7:1

# Error details

```
ReferenceError: bookingid is not defined
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | //https://restful-booker.herokuapp.com/apidoc/index.html?utm_source=chatgpt.com#api-Booking-CreateBooking
  3  | 
  4  | 
  5  | //to create booking
  6  | 
  7  | test("delete_booking", async ({ request }) => {
  8  | 
  9  |  const authData =
  10 |     {
  11 |         "username": "admin",
  12 |         "password": "password123"
  13 |     }
  14 | 
  15 |     const authResponse = await request.post("https://restful-booker.herokuapp.com/auth", { headers: { 'Content-Type': 'application/json' }, data: authData })
  16 |     console.log(authResponse.status())
  17 |     const authJson = await authResponse.json()
  18 |     console.log(authJson)
  19 |     expect(authJson.token).not.toBeNull() //to assert token should not be null
  20 | 
  21 |     //create booking
  22 |     const bookingData =
  23 |     {
  24 |         "firstname": "Jim",
  25 |         "lastname": "Brown",
  26 |         "totalprice": 111,
  27 |         "depositpaid": true,
  28 |         "bookingdates": {
  29 |             "checkin": "2018-01-01",
  30 |             "checkout": "2019-01-01"
  31 |         },
  32 |         "additionalneeds": "Breakfast"
  33 |     }
  34 | 
  35 |     const response = await request.post("https://restful-booker.herokuapp.com/booking", { headers: { 'Content-Type': 'application/json' }, data: bookingData })
  36 |     console.log(response.status())
  37 |     const responseJson = await response.json()
  38 |     console.log(responseJson)
  39 |     expect(responseJson.bookingid).not.toBeNull()
  40 |     console.log("booking id is:" + responseJson.bookingid)
  41 |     expect(responseJson.booking.firstname).toBe(bookingData.firstname)
  42 | 
  43 |     //delete booking
  44 | 
> 45 |     const deleteResponse=await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingid}`,
     |                                                                                               ^ ReferenceError: bookingid is not defined
  46 |         {
  47 |             headers:{
  48 |                 'Content-Type': 'application/json',
  49 |                  'Cookie': `token=${token}`
  50 |             }
  51 |         }
  52 |     )
  53 | 
  54 |     expect(deleteResponse.status()).toBe(200)
  55 | })
  56 | 
```