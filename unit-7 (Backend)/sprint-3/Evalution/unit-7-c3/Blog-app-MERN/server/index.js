const express = require("express");
const connection = require('./configs/db');
const authRouter = require("./middlewares/auth");
const app = express();
const cors = require('cors');
const feedRouter = require("./controllers/feeds.controller");
const ConnectToDatabase  = require("./configs/db");
const userRouter = require("./controllers/user.controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);

app.use('/blogs', feedRouter);
app.use('/user',userRouter);
// app.get("/", (req, res) => {
//     return res.status(200).send("Hello")
// });
let port = 8080;
app.listen(port, async () => {
    try{
        await ConnectToDatabase();
        console.log("Server started on port 8080");
    }
    catch(err){
        console.log("Error", err.message)
    }
});
