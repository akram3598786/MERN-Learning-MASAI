import ConnectToDatabase from "../Database/connectDatabase.js";
import { faker } from '@faker-js/faker';
import crypto from 'crypto';
import userModel from "../Models_Schemas/UserModel.js";
import blogModel from "../Models_Schemas/BlogModel.js";

async function addBlog(req, res){

    await ConnectToDatabase();

    let users = await userModel.find();
    let blogs = [];
    for(let i=0;i<100;i++){
        let memberUser = users[crypto.randomInt(0, users.length)];

        let blog =  {
            title : faker.hacker.phrase(),
            body : faker.lorem.lines(crypto.randomInt(10,20)),
            likedCount : crypto.randomInt(0,50),
            User : {
                _id : memberUser._id,
                name : memberUser.name,
                email : memberUser.email,
                profile : memberUser.profile, 
            }
         }

         blogs.push(blog);
    }

     await blogModel.insertMany(blogs);
    // let showBlog = await blogModel.find().limit(5);
    // console.log(showBlog);
    res.send("Blogs created")

}

export default addBlog;