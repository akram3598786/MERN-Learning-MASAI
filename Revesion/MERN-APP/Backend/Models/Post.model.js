const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title : {type : String, require : true},
        description : {type : String},
    },{
        timestamps : true,
        versionKey : false
    }
    );

const PostModel = mongoose.model("Post", PostSchema, "posts");

module.exports = PostModel;
    