const express = require("express");
const UserModel = require("../Models/User.model");
const UserRouter = express.Router();

UserRouter.get("/:userId", getUserData);

async function getUserData(req, res){
    try{
        let {userId} = req.params;
         let userData = await UserModel.findById(userId);
         userData = userData.toJSON();
         delete userData.password;
         if(userData) res.status(200).send(userData);
         else res.status(404).send("User not found !")
    }
    catch(err){
        res.send(err.message);
    }
}

module.exports = UserRouter;