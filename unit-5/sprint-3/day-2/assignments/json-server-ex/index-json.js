
        // const fs=require("browserify-fs");
         let sold_flg=document.getElementById("sold");
        sold_flg.innerText="False";
        
        document.querySelector("form").addEventListener("submit",()=>{
            event.preventDefault();
            let products = JSON.parse(localStorage.getItem("Products")) || [];
            let name = document.getElementById("name").value;
            let category = document.getElementById("category").value;
            let image_url = document.getElementById("image").value;
            let price = document.getElementById("price").value;
            let gender = document.getElementById("gender").value;
            sold_flg.innerText="True";
            let sold=false;
            const obj = new Obj(name,category,image_url,price,gender,sold);
            
            postdata(obj);
           // patchdata(obj);
           // putdata(obj);
           //  deletedata(11);
         
           // getdata();
          
        });
       
        function Obj(name,category,image_url,price,gender,sold){
            this.name=name;
            this.category=category;
            this.image_url=image_url;
            this.price=price;
            this.gender=gender;
            this.sold=sold;
        }

    
        postdata = async(obj)=>{
        try{
           let res = await fetch("http://localhost:3000/posts", {
               method:"POST",
               body:JSON.stringify(obj),
               headers:{
                   "Content-Type":"application/json"
               }
           })
       }
       catch(err){
           console.log("Error occured")
         console.log(err)
       } 
   }

   deletedata = async(id_no)=>{
            try{
                let res = await fetch(`http://localhost:3000/posts/${id_no}`, {
                method:"DELETE",
               // body:JSON.stringify(obj),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            }catch(err){
                console.log(err);
            } 
         }

         patchdata = async(obj)=>{
            try{
                let res = await fetch("http://localhost:3000/posts/11", {
                method:"PATCH",
                body:JSON.stringify(obj),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            }catch(err){
                console.log(err);
            } 
         }
           putdata = async(obj)=>{
            try{
                let res = await fetch("http://localhost:3000/posts/11", {
                method:"PATCH",
                body:JSON.stringify(obj),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            }catch(err){
                console.log(err);
            } 
         }

         getdata=async ()=>{
            try{
            let res = await fetch("http://localhost:3000/posts");
            let got_data = await res.json();
            console.log(got_data);
            }catch(err){
                console.log(err);
            }
          }
         
      


