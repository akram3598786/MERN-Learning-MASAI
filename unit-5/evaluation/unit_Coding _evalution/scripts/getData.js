

  const getData=async (code)=>{
    try{
        let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`;
         let res= await fetch(url);
         let data= await res.json();
        //  console.log(data.articles);
         return data.articles;
    }catch(err){
     console.log(err);
    }
  }
  const searchData=async (quer)=>{
    try{
        let url=`https://masai-mock-api.herokuapp.com/news?q=${quer}`;
         let res= await fetch(url);
         let data= await res.json();
        //  console.log(data.articles);
         return data.articles;
    }catch(err){
     console.log(err);
    }
  }
 
  export {getData,searchData};