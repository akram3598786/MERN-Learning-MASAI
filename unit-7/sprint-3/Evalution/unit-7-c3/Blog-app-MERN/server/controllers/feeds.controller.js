const express = require('express');
const Feed = require("../models/blog.model");
const User = require("../models/user.model")

const feedRouter = express.Router();

// Get all blogs Function
feedRouter.get("/",async (req, res)=>{
    try{
      
        const blogs = await Feed.find();
        console.log(blogs)
        // let userId = localStorage.getItem("userId");
        // console.log(localStorage);
        res.send(blogs)
        
    }catch(err){
        console.log(err);
    }
})

// Blog Create Function
feedRouter.post("/create/:userId", async (req, res) => {
    try{    
        const {userId} = req.params
        const feeds = await Feed(req.body);
        await feeds.save();
        console.log(feeds);
        const user = await User.findById(userId);
        user.blogs = [...user.blogs, feeds._id]
        await user.save();
        return res.status(201).send(feeds);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

// PATCH Function
feedRouter.patch("/:id", async (req, res) => {
    try{    
        const {id} = req.params;
     
        const updateFeeds = await Feed(req.body);
        console.log(req.body);
        // const feed = await Feed.findOneAndUpdate({_id : id,updateFeeds},{
        //     new: true
        //   });
        const feed = await Feed.findOneAndUpdate(id,updateFeeds);

        console.log(feed);
        // const user = await User.findById(userId);
        // user.blogs = [...user.blogs, feeds._id]
        // await user.save();
        return res.status(201).send(feed);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})
// PATCH Function
feedRouter.delete("/:id", async (req, res) => {
    try{    
        const {id} = req.params;
        const feed = await Feed.findOneAndDelete(id);

        console.log(feed);
        // const user = await User.findById(userId);
        // user.blogs = [...user.blogs, feeds._id]
        // await user.save();
        return res.status(201).send("Deleted");
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})


feedRouter.get("/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const feed = await Feed.findById(id).populate("userId")
        return res.status(200).send(feed)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})


module.exports = feedRouter;