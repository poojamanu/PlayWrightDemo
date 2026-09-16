import test from "@playwright/test";


exports.mytest = test.extend({
    userDetail:async({},use)=>{
        await use([
            {
            username:"standard_user",
            password:"secret_sauce"
        },{
            username:"locked_out_user",
            password:"secret_sauce"
        }])
    }
})