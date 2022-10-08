const express = require('express');
const User = require("../models/user.model")
const Feeds = require("../models/blog.model")

const userRouter = express.Router();

userRouter.post("/create", async (req, res)=>{
 try{

    let user = req.body;
    await User.create(user);
    // let usr = await User.find();
    // console.log(usr);
    res.send("user craeyd")
}catch(err){
    console.log(err);
 }
    
})

userRouter.get("/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        return res.send(user);
    }   
    catch(err){
        return res.status(500).send(err.message)
    }
})


userRouter.get("/:id/blogs", async(req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id).populate('blogs');
        return res.send(user.blogs)
    }
    catch(err){
        return res.send(err.message)
    }
})


module.exports = userRouter;