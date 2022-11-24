const express = require("express");
const ConnectDB  = require("./Config/ConnectDB.js");
const AuthRouter = require("./Middlewares/Auth.js");

const app = express();

app.use(express.json());
app.use("/auth",AuthRouter);

let port = 8080;
// app.get("/",(rq, res)=>[
//     res.send("Its working fine")
// ])
app.listen(port, async (req, res)=>{
    try{
       await ConnectDB();
       console.log("server running on 8080 port")
    }
    catch(err){
      console.log("Error occured", err);
    }
})