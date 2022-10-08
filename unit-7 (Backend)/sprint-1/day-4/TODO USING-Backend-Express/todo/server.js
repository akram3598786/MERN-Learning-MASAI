
const express =  require("express");
const fs =  require("fs");
const cors = require("cors");
// import fs from "fs";
// console.log(express);

const app = express();

app.use(express.json())
app.use(cors());
let port = 8080;
app.listen(port,(req, res)=>{
    console.log(`listening on port ${port} `);
});

// GET function ================>

app.get("/",(req, res)=>{
    // res.send("This is HomePage");
    const data = fs.readFileSync("./db.json",{encoding : "utf-8"});
    res.send(data)
})


// POST Function ================>

app.post("/",(req,res)=>{

    fs.readFile("./db.json", (err, data)=>{
       const parsed = JSON.parse(data);
       parsed.Todos = [...parsed.Todos, req.body];
       fs.writeFile("./db.json", JSON.stringify(parsed),{encoding : 'utf-8'}, ()=>{
         res.send("new todo created");
       }) 
    })
})

// DELETE Function ================>

app.delete("/:id",(req,res)=>{
    let {id} = req.params;
    fs.readFile("./db.json", (err, data)=>{   
       const parsed = JSON.parse(data);
       parsed.Todos = parsed.Todos.filter((todo)=>todo.id != id);
       fs.writeFile("./db.json", JSON.stringify(parsed),{encoding : 'utf-8'}, ()=>{
         res.send(" todo deleted");
       }) 
    })
})

// PATCH Function
app.patch("/:id", (req, res)=>{
    let {id} = req.params;
    fs.readFile("./db.json",(err, data)=>{
        const parsed = JSON.parse(data);
        // console.log("before",parsed.Todos);
        parsed.Todos.forEach((todo)=> {if(todo.id == id)  todo.status = !todo.status})
         fs.writeFile("./db.json",JSON.stringify(parsed),{encoding : 'utf8'},()=>{
            res.send("Todo updated");
         })
    })
})






