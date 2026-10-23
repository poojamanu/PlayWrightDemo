# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\post.spec.js >> update_booking
- Location: tests\API\post.spec.js:44:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "200"
Received: [Function status]
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test"
  2   | //https://restful-booker.herokuapp.com/apidoc/index.html?utm_source=chatgpt.com#api-Booking-CreateBooking
  3   | test('post_api', async ({ request }) => {
  4   |     const authData =
  5   |     {
  6   |         "username": "admin",
  7   |         "password": "password123"
  8   |     }
  9   | 
  10  |     const response = await request.post("https://restful-booker.herokuapp.com/auth", { headers: { 'Content-Type': 'application/json' }, data: authData })
  11  |     console.log(response.status())
  12  |     const responseJson = await response.json()
  13  |     console.log(responseJson)
  14  |     expect(responseJson.token).not.toBeNull() //to assert token should not be null
  15  | })
  16  | 
  17  | 
  18  | //to create booking
  19  | 
  20  | test("create_booking", async ({ request }) => {
  21  |     const bookingData =
  22  |     {
  23  |         "firstname": "Jim",
  24  |         "lastname": "Brown",
  25  |         "totalprice": 111,
  26  |         "depositpaid": true,
  27  |         "bookingdates": {
  28  |             "checkin": "2018-01-01",
  29  |             "checkout": "2019-01-01"
  30  |         },
  31  |         "additionalneeds": "Breakfast"
  32  |     }
  33  | 
  34  |     const response = await request.post("https://restful-booker.herokuapp.com/booking", { headers: { 'Content-Type': 'application/json' }, data: bookingData })
  35  |     console.log(response.status())
  36  |     const responseJson = await response.json()
  37  |     console.log(responseJson)
  38  |     expect(responseJson.bookingid).not.toBeNull()
  39  |     console.log("booking id is:" + responseJson.bookingid)
  40  |     expect(responseJson.booking.firstname).toBe(bookingData.firstname)
  41  | })
  42  | 
  43  | // to update a booking
  44  | test("update_booking", async ({ request }) => {
  45  |     // genarate token
  46  |     const authData =
  47  |     {
  48  |         "username": "admin",
  49  |         "password": "password123"
  50  |     }
  51  |     const authResponse = await request.post("https://restful-booker.herokuapp.com/auth", { data: authData, headers: { 'Content-Type': 'application/json' } })
  52  |     const authJson = await authResponse.json()
  53  |     const token = authJson.token
  54  |     expect(token).toBeTruthy();
  55  |     //create booking
  56  |     const bookingData =
  57  |     {
  58  |         "firstname": "James updated",
  59  |         "lastname": "Brown",
  60  |         "totalprice": 111,
  61  |         "depositpaid": true,
  62  |         "bookingdates": {
  63  |             "checkin": "2018-01-02",
  64  |             "checkout": "2019-01-03"
  65  |         },
  66  |         "additionalneeds": "Breakfast"
  67  |     }
  68  |     const bookingResponse = await request.post("https://restful-booker.herokuapp.com/booking", { headers: { 'Content-Type': 'application/json' }, data: bookingData })
> 69  |     expect(bookingResponse.status).toBe("200")
      |                                    ^ Error: expect(received).toBe(expected) // Object.is equality
  70  |     const bookingJson = await bookingResponse.json()
  71  |     const bookingId = bookingJson.bookingid
  72  | 
  73  |     //update booking
  74  | 
  75  |     const updateBooking = {
  76  |         firstname: "James",
  77  |         lastname: "Brown",
  78  |         totalprice: 111,
  79  |         depositpaid: true,
  80  |         bookingdates: {
  81  |             checkin: "2018-01-02",
  82  |             checkout: "2019-01-013"
  83  |         },
  84  |         additionalneeds: "Breakfast"
  85  |     }
  86  |     const updateResponse = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`,
  87  |         {
  88  |             headers: {
  89  |                 'Content-Type': 'application/json',
  90  |                 'Accept': 'application/json',
  91  |                 'Cookie': `token=${token}'`
  92  |             },
  93  |             data: updateBooking
  94  |         })
  95  |     const updatedResponse = await updatedResponse.json()
  96  |     expect(updatedResponse.status()).toBe("200")
  97  |     const updateJson=await updatedResponse.json()
  98  |     expect(updateJson.firstname).toBe("James")
  99  |     expect(updateJson.bookingdates.checkout).toBe("2019-01-013")
  100 | 
  101 | })
```