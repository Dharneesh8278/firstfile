const express = require('express');

const post = require("../models/post")
const router = express.Router();


 router.get("/", async (req,res) =>{

    const data = await post.find({});
    console.log(data)
     res.send(data)
 });

 router.post("/addpost", async(req,res) => {
     try{
        console.log(req.body);

        const data = await post.create({
        title : req.body .title,
        description : req.body.description,
        author : req.body.author,
        tags : req.body.tags,
        createdAt:new Date()

     })

     res.send(data)
    }
    catch(err){
        console.log(err)
    }
    
 })
 module.exports = router;