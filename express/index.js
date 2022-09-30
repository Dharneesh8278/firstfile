const express = require("express");
const {urlencoded,json} = require("express");
const mongoose = require("mongoose")

mongoose.connect('mongodb://aruna:aruna321@cluster0-shard-00-00.3otoq.mongodb.net:27017,cluster0-shard-00-01.3otoq.mongodb.net:27017,cluster0-shard-00-02.3otoq.mongodb.net:27017/test?replicaSet=atlas-nqr31n-shard-0&ssl=true&authSource=admin')


const userRouter = require("./routes/user");
const postRouter = require("./routes/post")

const app = express();
                                                                                                          
app.use(json());
app.use(urlencoded({extended: false}));

app.get("/",(req,res) => {
    res.send("hello from express");
})
app.post("/users",async(req,res) =>{
    try{
       console.log(req.body)
        
        res.send('data added')
    }
    catch(err){
        console.log(err)
    }
})
app.use("/user",userRouter);
app.use("/post",postRouter);


app.listen(5000);
 
console.log("im listening")