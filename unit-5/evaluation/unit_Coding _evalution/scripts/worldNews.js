
import {getData,searchData} from "./getData.js"

 let userData= JSON.parse(localStorage.getItem("user"));
 let news_result=document.getElementById("news_result");
 console.log(userData);  
   let user_img=document.getElementById("user_img");
   let user_name=document.getElementById("user_name");
   let user_email=document.getElementById("user_email");
   let user_country=document.getElementById("user_country");
    user_img.src = userData.image; 
   user_name.textContent=userData.name;
   user_email.textContent=userData.email;
   user_country.textContent = userData.country
 
/*
   <li value="in">India</li>
         <li value="us">Usa</li>
         <li value="ch">China</li>
         <li value="uk">UK</li>
         <li value="nz">New Zealand</l

*/

let search_box =document.getElementById("search_box").value;

let con_code= userData.country;
   datainit(con_code);

  async function datainit(code){
    try{
        // let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`;
         let data= await getData(code);
       console.log(data)
         displayNews(data);
    }catch(err){
     console.log(err);
    }
  }
   

   function displayNews(data){

     data.forEach(news => {
       let box=document.createElement("div");
       box.setAttribute("class","box");
       let thumbn = document.createElement("img");
     thumbn.src=news.urlToImage;
      let title = document.createElement("p");
      title.textContent=news.title;
      let pub_dt=document.createElement("p");
      let wtnBy=document.createElement("p");
      pub_dt.textContent= "Publish Date : "+news.publishedAt;
      wtnBy.textContent=news.author;
      let button=document.createElement("a");
      button.href= news.url;
      button.setAttribute("class","see_full_btn");
      button.textContent="Seefull News";
      box.append(thumbn,title,pub_dt,wtnBy,button);
      news_result.append(box);
      
     });
   }

  