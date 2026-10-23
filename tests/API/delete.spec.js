import { test, expect } from "@playwright/test"
//https://restful-booker.herokuapp.com/apidoc/index.html?utm_source=chatgpt.com#api-Booking-CreateBooking


//to create booking

test("delete_booking", async ({ request }) => {

 const authData =
    {
        "username": "admin",
        "password": "password123"
    }

    const authResponse = await request.post("https://restful-booker.herokuapp.com/auth", { headers: { 'Content-Type': 'application/json' }, data: authData })
    console.log(authResponse.status())
    const authJson = await authResponse.json()
    const token=authJson.token
    expect(token).not.toBeNull() //to assert token should not be null

    //create booking
    const bookingData =
    {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    }

    const response = await request.post("https://restful-booker.herokuapp.com/booking", { headers: { 'Content-Type': 'application/json' }, data: bookingData })
    console.log(response.status())
    const responseJson = await response.json()
    console.log(responseJson)
    expect(responseJson.bookingid).not.toBeNull()
    const bookingId=responseJson.bookingid
    console.log("booking id is:" + bookingId)
    expect(responseJson.booking.firstname).toBe(bookingData.firstname)

    //delete booking

    const deleteResponse=await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingId}`,
        {
            headers:{
                'Content-Type': 'application/json',
                 'Cookie': `token=${token}`
            }
        }
    )

    expect(deleteResponse.status()).toBe(201)
})
