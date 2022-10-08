
const validateMiddleware = (req, res, next)=>{

//  console.log(req.url, req.method)

 let dataType = true, dataCorrrect=true;
 let dataKeys = ["ID", "Title","Author","Description"]
 let dataTypes = ["number", "string", "string", "string"];

  let postData = req.body;
//   console.log(movieData)
  dataKeys.forEach(el => { if(postData[el] === undefined || postData[el].length == 0 ) dataCorrrect = false });
  dataKeys.forEach((el, ind) => { if(typeof postData[el] !== dataTypes[ind]) dataType=false});

  if(!dataType) return res.status(400).send("Data type should be correct !");
  else if(!dataCorrrect) return res.status(400).send("Data is not valid !");
  else{
    console.log("Input Data validated")
    next();
  } 
 
}

module.exports = validateMiddleware;