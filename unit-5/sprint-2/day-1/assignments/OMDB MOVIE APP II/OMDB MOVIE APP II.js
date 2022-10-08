

 document.querySelector("button").addEventListener("click",()=>{
     let movie_name=document.querySelector("input").value;
     getdata(movie_name);
 });
 
 async function getdata(movie_name){ 
     try{ 
     let API_key =  "5217a3f6";
      let url=`http://www.omdbapi.com/?i=tt3896198&apikey=${API_key}&t=${movie_name}`;
     let res=await fetch(url);
     let data = await res.json();
      if(data.Error){
      //  console.log(data.Error);
         let pop_box=document.querySelector(".pop_box");
         let msg=document.createElement("p");
         msg.innerText="Movie not found or having any error!";
         msg.style.color="red";
         pop_box.append(msg);
         let error_msg_layer=document.querySelector(".error_msg_layer");
         error_msg_layer.style.display="flex";
         document.querySelector(".cross").addEventListener("click",()=>{
          error_msg_layer.style.display="none";
         })
      }else{
         display(data);
      }
     }
     catch(err){
       console.log(data.Error);
     }
 }

 function display(data){
       let poster=document.getElementById("poster");
       let title=document.getElementById("title");
       console.log(data.Title)
        title.innerText=data.Title;
        poster.src=data.Poster;
       document.getElementById("release").innerText="Released: "+data.Released;
       document.getElementById("runtime").innerText="Runtime: "+data.Runtime;
       document.getElementById("actors").innerText="Actors: "+data.Actors;
       document.getElementById("director").innerText="Director: "+data.Director;
       document.getElementById("box_office").innerText="BoxOffice: "+data.BoxOffice;   
 }
