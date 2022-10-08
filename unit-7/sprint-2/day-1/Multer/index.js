const express = require("express");
const Router = express.Router();
const multer  = require('multer')
const fs = require('fs');
const upload = multer({ dest: './public/data/uploads/' })

const app = express();
app.use(express.json());

app.use(Router);

const getUi=(req, res)=>{
    fs.readFile("./index.html", {encoding : 'utf-8'},(err, data)=>{
        res.send(data);
    })
}

 Router.get('/',getUi);
 Router.post('/upload',upload.single('uploaded_file'), function (req, res) {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any 
    //  console.log(req.file, req.body)
    // console.log(req.file)
   res.send(req.file)
//   res.send(`<img src=` uploads/${req.file.filename}` alt="">`)
 });


let port = 8080;
app.listen(port,(req,res)=>{
    console.log(`Server running at ${port}`)
})