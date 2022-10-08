
import express, { json } from "express";
import fs from "fs";
// console.log(express);

const app = express();

app.use(express.json())

let port = 8080;
app.listen(port,(req, res)=>{
    console.log(`listening on port ${port} `);
});

app.get("/",(req, res)=>{
    res.send("This is HomePage");
})


// GET function ================>

app.get("/todos",(req, res)=>{
    fs.readFile("./myserver.json",{encoding : "utf-8"}, (err, data)=>{
        // console.log(data);
        res.send(data);
      })
})


// POST Function ================>

app.post("/todos",(req,res)=>{

    fs.readFile("./myserver.json", (err, data)=>{
       const parsed = JSON.parse(data);
       parsed.Todos = [...parsed.Todos, req.body];
       fs.writeFile("./myserver.json", JSON.stringify(parsed),{encoding : 'utf-8'}, ()=>{
         res.send("new todo created");
       }) 
    })
})

// DELETE Function ================>

app.delete("/todos/:id",(req,res)=>{
    let {id} = req.params;
    fs.readFile("./myserver.json", (err, data)=>{   
       const parsed = JSON.parse(data);
       parsed.Todos = parsed.Todos.filter((todo)=>todo.id != id);
       fs.writeFile("./myserver.json", JSON.stringify(parsed),{encoding : 'utf-8'}, ()=>{
         res.send(" todo deleted");
       }) 
    })
})

// PATCH Function
app.patch("/todos/:id", (req, res)=>{
    let {id} = req.params;
    fs.readFile("./myserver.json",(err, data)=>{
        const parsed = JSON.parse(data);
        console.log("before",parsed.Todos);
        parsed.Todos.forEach((todo)=> {if(todo.id == id)  todo.status = !todo.status})
         fs.writeFile("./myserver.json",JSON.stringify(parsed),{encoding : 'utf8'},()=>{
            res.send("Todo updated");
         })
    })
})






