const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title : String,
    category : String,
    author : String,
    Content : String,
    Image : String,
    userId : {
        type: mongoose.Types.ObjectId,
        ref : 'User'
    }
},{
    versionKey : false,
    timestamps : true
});

module.exports = mongoose.model("Feeds", blogSchema);