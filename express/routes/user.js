const express = require('express');


const user = require("../models/user");

const router = express.Router();


// get data from database
router.get("/",async (req,res) => {
    const data = await user.find({});
    console.log(data);
    res.send(data);
});


// post data
router.post("/addUser", async (req,res) => {
    try {
        console.log(req.body);
        console.log(req.query);
        const data = await user.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            password : req.body.password,
            phone : req.body.phone,
            active : req.body.active
        })
       

        res.send("data added")
    }
    catch(err) {
        console.log(err);
    }
})

module.exports = router;