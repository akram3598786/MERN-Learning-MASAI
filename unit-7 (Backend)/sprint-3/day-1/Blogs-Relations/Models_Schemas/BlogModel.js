import mongoose from "mongoose";

const blogSchems = new mongoose.Schema(
 {
    title : String,
    body : String,
    likedCount : Number,
    User : {
        _id : mongoose.Types.ObjectId,
        name : String,
        email : String,
        profile : String, 
    }
 }
);

const blogModel = mongoose.model("Blog", blogSchems, "blogs");

export default blogModel;

