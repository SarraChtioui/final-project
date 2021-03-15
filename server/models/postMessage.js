//import mongoose
// import mongoose from 'Mongoose';
var mongoose = require('mongoose');

//create mongoose schema
const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags: [String],
    selectedFile:String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type:Date,
        default: new Date()
    },

});
//Declare it, can name PostMessage or sth else
var PostMessage = mongoose.model('PostMessage', postSchema);

//export mongoose model
module.exports =  PostMessage;