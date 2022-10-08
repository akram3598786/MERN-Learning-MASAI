import mongoose from "mongoose";

const CoomentSchema = new mongoose.Schema({
   
    commentMsg: String,

    // normalized approach - store the id as ObjectId
    Blog: {
        type: mongoose.Types.ObjectId,
        ref: 'Blog'
    },

    // denormalized approach - store object info
    User : {
      _id : mongoose.Types.ObjectId,
      name : String,
      profile : String
    }
});

const commentModel = mongoose.model("Comment", CoomentSchema, "comments");

export default commentModel;