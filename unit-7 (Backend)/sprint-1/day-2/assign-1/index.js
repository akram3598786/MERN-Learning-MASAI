// import http from "http";

 import http from "http";
 import fs from "fs";
import { readdir } from 'node:fs/promises';

const server = http.createServer((req, res) => {
 
    const url = req.url;
    const method = req.method;
    console.log(url, method)
  let dirList=[]
     if(url==="/" && method=== 'GET'){
        //  res.write('This is HomePage', "\n");

        const getDirectories=async(path)=>{
         try {
             const files = await readdir(path);
     
              for (const file of files){  
                   res.write(`<a href="/public"><li>${file}</li></a>`)  
                  // console.log(file)
               //   dirList.push(file)
                 
              }
              
           } catch (err) {
             console.error(err);
           }
           res.end(); 
     }
        getDirectories("./");

        const content = fs.readFileSync('index.html',{
            encoding : 'utf-8'
        });
      // console.log(dirList)
      //   res.write(dirList);
         // res.write(content);
        // res.write(htmlCode);
     }
     else if(url==="/public" && method=== 'GET'){
        res.write('This is Public page');
         res.end();
     }
     else if(url==="/public/other" && method=== 'GET'){
        res.write('This is other page');
         res.end();
     }
     
    
})  

let port = 3000;
console.log("server running");
server.listen(port);
