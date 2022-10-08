
    document.querySelector("form").addEventListener("submit",register);
    let users_data = JSON.parse(localStorage.getItem("user")) || [];
     function register(){
         event.preventDefault();
         let name = document.getElementById("name").value;
         let email = document.getElementById("email").value;
         let c_no = document.getElementById("c_no").value;
         let password = document.getElementById("password").value;
         let flg="";
         if(name==="" || c_no ==="" || email==="" || password===""){
             alert("Please fill accurate data")
         }else{
         users_data.map((ele)=>{
             if(ele.email === email){
                 alert("User by this email already registered");
                 flg="exist"
             }
         })
        if(flg!=="exist"){
         let obj={
             name : name,
             email : email,
             c_no : c_no,
             password : password,
         }
           users_data.push(obj);
           localStorage.setItem("user",JSON.stringify(users_data));
           let msg = document.getElementById("msg");
           msg.innerText="Registered Successfully";
          msg.style.backgroundColor="green";
          msg.style.width="80%";
           setTimeout(()=>{
             window.open("login.html","_self");
           },4000)
     }
 }
     }