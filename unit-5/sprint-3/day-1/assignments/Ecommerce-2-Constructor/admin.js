
    let sold_flg=document.getElementById("sold");
    sold.innerText="false"
   
    
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
       products.push(obj);
       localStorage.setItem("Products",JSON.stringify(products));
       document.querySelector("form").reset();
   });
  
   function Obj(name,category,image_url,price,gender,sold){
       this.name=name;
       this.category=category;
       this.image_url=image_url;
       this.price=price;
       this.gender=gender;
       this.sold=sold;
   }
