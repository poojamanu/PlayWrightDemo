import { test, expect } from "@playwright/test"
// to update a booking
test("update_booking", async ({ request }) => {
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
        firstname: "James",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
            checkin: "2018-01-02",
            checkout: "2019-01-03"
        },
        additionalneeds: "Breakfast"
    };

    const updateResponse = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`
        },
        data: updateData
    });

    expect(updateResponse.status()).toBe(200);
    const updateJson = await updateResponse.json();
    expect(updateJson.firstname).toBe("James");
    expect(updateJson.bookingdates.checkout).toBe("2019-01-03");
});