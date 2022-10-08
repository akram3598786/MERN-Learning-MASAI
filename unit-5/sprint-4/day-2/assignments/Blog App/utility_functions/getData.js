
const getData=async(url)=>{
    try{
     let res=await fetch(url);
     let data=await res.json();
    return data;
    }catch(err){
     console.log(err);
    }

 }

 export {getData};