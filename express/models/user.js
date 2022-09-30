const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName :{
        type : String,
        require: true
    },
    lastName : {
        type : String,
        require : true
    }, 
    email : {
        type :String,
        require : true
    },
    phone : {
        type : Number,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    active : {
        type : Boolean,
        require : true
    }
})

module.exports = mongoose.model("user",userSchema);