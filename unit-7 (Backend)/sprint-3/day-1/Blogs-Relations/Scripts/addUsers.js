import ConnectToDatabase from "../Database/connectDatabase.js";
import express from "express";
import userModel from "../Models_Schemas/UserModel.js";
import crypto from "crypto";
import { faker } from '@faker-js/faker';

async function addUsers(req, res) {
    
await ConnectToDatabase();

    let users = [];

    for(let i=0;i<50;i++){
      let randomName = faker.name.fullName();
        const newUser = {
            name: randomName,
            email: `${randomName}@gmail.com`,
            profile: faker.image.avatar(),
    
            social_profiles: {
                linkedin: `${randomName}-linkedin.com`,
                facebook: `${randomName}-facebook.com`,
                twitter: `${randomName}-twitter.com`,
                github: `${randomName}-github.com`,
                instagram: `${randomName}-instagram.com`
            },
            Addresses: 
                {
                    houseNo: crypto.randomInt(4030, 9999),
                    city: faker.address.city(),
                    state: "Haryana",
                    pinCode: crypto.randomInt(111111, 999999)
                }
            
           /* ,
            Blog_id: {
                type: mongoose.Types.ObjectId,
                ref: "Blog"
            } */
        }

        users.push(newUser);
    }
   
    
    await userModel.insertMany(users);

    // let Showuser = await userModel.find().limit(5);
    // console.log(Showuser)
    res.send("Users created")
}

/*
{
        name: string,
        email: string,
        profile : string,
        social_profiles: {
            linkedin: string,
            facebook: string,
            twitter: string,
            github: string,
            instagram: string
        },
        Addresses: [
            {
                hounseNo: Number,
                city: string,
                state: string,
                pinCode: Number
            }
        ],

        // Normalized approach - passes a model reference by (ref)
        Blog_id: {
          type : mongoose.Types.ObjectId,
          ref : "Blog"
         }
    }
*/

export default addUsers;