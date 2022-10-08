import ConnectToDatabase from "../Database/connectDatabase.js";
import blogModel from "../Models_Schemas/BlogModel.js";
import crypto from "crypto";
import { faker } from '@faker-js/faker';
import commentModel from "../Models_Schemas/CommentModel.js";

async function addComment(req, res){

    await ConnectToDatabase();
    
    let blogs = await blogModel.find();
    let comments = [];

    for(let i=0;i<3;i++){
      
      let postedBlog = blogs[crypto.randomInt(0, blogs.length)];

        let comment = {
            commentMsg : faker.hacker.phrase(),
            Blog: postedBlog._id,
            User : {
                userId : postedBlog.User._id,
                name : postedBlog.User.name,
                profile : postedBlog.User.profile
              }

        } 
        comments.push(comment);
    }

    await commentModel.insertMany(comments);
    // let showcomments = await commentModel.find().limit(5);
    // console.log(showcomments);
    res.send("Comment posted")

}

export default addComment;

/*

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
      profile : string
    }

*/