
   document.querySelector("form").addEventListener("submit",validate);
   let users_data = JSON.parse(localStorage.getItem("user")) || [];
   function validate(){
       event.preventDefault();
       let eml=document.getElementById("email").value;
       let pass=document.getElementById("password").value;
       let flg=false;
       users_data.map((ele)=>{
           if(eml===ele.email && pass===ele.password){
               flg=true;
               localStorage.setItem("login_user",JSON.stringify(ele));
           }
       });
     if(flg){
       alert("Login Successfull");
       window.open("index.html","_self");
       localStorage.setItem("login",true);
     }else{
       alert("Invalid Email or Password");
     }
   }