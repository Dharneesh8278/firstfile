const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true

    },
    author:{
        type : String,
        required : true
    },
    tags:{
        type : [String],
        required : true
    },
    createdAt :{
        type : Date,
        required : true
    }
})

module.exports = mongoose.model("post",postSchema);