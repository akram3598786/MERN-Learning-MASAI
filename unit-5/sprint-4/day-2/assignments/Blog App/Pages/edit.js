import form from "../components/form.js";
import {getData} from "../utility_functions/getData.js";
document.querySelector("main").innerHTML=form;   
let edit_id = localStorage.getItem("edit_id");
const take_blog=async()=>{
    try{
      let blog_data=await getData(`http://localhost:3000/blogs/${edit_id}`);
      fill_data_toEdit(blog_data);
    }catch(err){
        console.log(err);
    }
}
take_blog();

const fill_data_toEdit=(blog)=>{

    document.getElementById("title").value=blog.title;
    document.getElementById("category").value=blog.category;
    document.getElementById("author").value=blog.author;
    document.getElementById("body").value=blog.body;
}

document.getElementById("submit_btn").addEventListener("click",()=>{
    event.preventDefault();

    let obj={
        title:document.getElementById("title").value,
        category:document.getElementById("category").value,
        author:document.getElementById("author").value,
        body:document.getElementById("body").value
      }
      patchData(obj);
      document.querySelector("form").reset(); 
      window.open("home.html", "_self");
});

const patchData = async(obj)=>{
    try{
       let res = await fetch(`http://localhost:3000/blogs/${edit_id}`, {
           method:"PATCH",
           body:JSON.stringify(obj),
           headers:{
               "Content-Type":"application/json"
           }
       });
   }
   catch(err){
    //    console.log("Error occured")
     console.log(err)
   } 
}