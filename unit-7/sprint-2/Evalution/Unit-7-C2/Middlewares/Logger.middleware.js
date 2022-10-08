
const morgan = require("morgan");
const os = require("os");
const fs = require('fs');

const loggerMiddleware = morgan((token, req, res)=>{
//   console.log(token);

function processInput ( text ) 
{     
  fs.open('./Logs.txt', 'a', 666, function( e, id ) {
   fs.write( id, text + os.EOL, null, 'utf8', function(){
    fs.close(id, function(){
     console.log('file is updated');
    });
   });
  });
 }

 let text = token.method(req,res) + " "+  token.url(req, res)+" "+token['user-agent'](req, res);
 processInput(text);
 console.log({
    Method : token.method(req,res),
    UserAgent : token['user-agent'](req, res),
    URLAccesed : token.url(req, res),
    Status : token.status(req,res),
    TimeTaken : `${token['response-time'](req, res)} ms`,
    Date : token.date(),
 });

})

module.exports = loggerMiddleware;