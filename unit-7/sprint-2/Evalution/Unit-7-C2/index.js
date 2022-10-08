
const { json } = require("express");
const express = require("express");
const fs = require("fs");
const loggerMiddleware = require("./Middlewares/Logger.middleware");
const validateMiddleware = require("./Middlewares/validation.middleware");
const PostsRoute = express.Router()
let count = 0;

const app = express();
app.use(express.json())

let port = 8080;
app.listen(port, (req, res) => {
    console.log(`listening on port ${port} `);
});

// GET function ================>

const getData=(req, res)=>{
    fs.readFile("./posts.json",{encoding : "utf-8"}, (err, data)=>{
        // console.log(data);
        res.send(data);
      })
}

const postData = (req, res) => {
    count++;
    let postData = req.body;
    console.log("Visited route ", count, " times");
  
    fs.readFile("./posts.json", (err, data)=>{
        const parsed = JSON.parse(data);
        parsed.Posts = [...parsed.Posts, postData];
        fs.writeFile("./posts.json", JSON.stringify(parsed),{encoding : 'utf-8'}, ()=>{
          res.send("new post created");
        }) 
     })
}

// PATCH Function
 const updateData= (req, res)=>{
    let {postId} = req.params;
    console.log(postId)
    fs.readFile("./posts.json",(err, data)=>{
        const parsed = JSON.parse(data);

        parsed.Posts.forEach((post)=> {if(post.ID == postId)  post.releaseSts = !post.releaseSts})
        console.log("after",parsed.Posts);
         fs.writeFile("./posts.json",JSON.stringify(parsed),{encoding : 'utf8'},()=>{
            res.send("Posts updated");
         })
    })
}

// DELETE Function ================>

const deleteData= (req,res)=>{
    let {postId} = req.params;
    fs.readFile("./posts.json", (err, data)=>{   
       const parsed = JSON.parse(data);
       parsed.Posts = parsed.Posts.filter((post)=>post.ID != postId);
       console.log(parsed);
       fs.writeFile("./posts.json", JSON.stringify(parsed),{encoding : 'utf-8'}, ()=>{
         res.send(" Post deleted");
       }) 
    })
}


app.use(PostsRoute);
PostsRoute.use(validateMiddleware); // Validating input data correct or not.
PostsRoute.use(loggerMiddleware);

PostsRoute.get("/posts", getData);
PostsRoute.post("/posts/create", postData);
PostsRoute.patch("/posts/:postId", updateData);
PostsRoute.delete("/posts/:postId", deleteData);

