import express from "express";
import ConnectToDatabase from "./Database/connectDatabase.js";
import addBlog from "./Scripts/addblog.js";
import addComment from "./Scripts/addComment.js";
import addUsers from "./Scripts/addUsers.js";

const app = express();
app.use(express.json());

// Connectiong to MongoDB database
// ConnectToDatabase();

app.post("/create/users", addUsers)
app.post("/create/blogs", addBlog)
app.post("/create/comments",addComment);

let port = 8080;
app.listen(port, ()=>{
    console.log(`Server Running on ${port}`)
})