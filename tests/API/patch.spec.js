import { test, expect } from "@playwright/test"
test("partial_update", async ({ request }) => {

    const authData = {
        username: "admin",
        password: "password123"
    };

    const authResponse = await request.post("https://restful-booker.herokuapp.com/auth", {
        data: authData,
        headers: { 'Content-Type': 'application/json' }
    });
    expect(authResponse.status()).toBe(200);
    const authJson = await authResponse.json();
    const token = authJson.token;
    expect(token).toBeTruthy();

    const bookingData = {
        firstname: "James updated",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
            checkin: "2018-01-02",
            checkout: "2019-01-03"
        },
        additionalneeds: "Breakfast"
    };

    const bookingResponse = await request.post("https://restful-booker.herokuapp.com/booking", {
        headers: { 'Content-Type': 'application/json' },
        data: bookingData
    });
    expect(bookingResponse.status()).toBe(200);
    const bookingJson = await bookingResponse.json();
    const bookingId = bookingJson.bookingid;

    const updateData = {
        "firstname": "MAthew",
        "lastname": "harry"
    }
    const patchResponse=await request.patch(`https://restful-booker.herokuapp.com/booking/${bookingId}`,
        {
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            },
            data:updateData
        }
    )
    expect(patchResponse.status()).toBe(200)
    const patchJson=await patchResponse.json()
    expect(patchJson.firstname).toBe("MAthew")

})