import navbar from "./components/navbar.js";
document.querySelector("nav").innerHTML = navbar;

let logout_btn = document.createElement("button");
let user_container = document.getElementById("user_container");
let button_section = document.getElementById("btn_section");
let right_section = document.querySelector(".right");


console.log(localStorage.getItem("login"));

let flg=localStorage.getItem("login");

if(flg==true){ 
    made_use_profileData();
    // console.log("inside true")
   button_section.style.display = "none";
  logout_btn.setAttribute("id", "logout_btn");
  right_section.innerHTML=` <button id="logout_btn"> Logout</button>`;

  document.getElementById("logout_btn").addEventListener("click", () => {
    console.log("doing logout");
    //  button_section.style.display="flex";
    localStorage.setItem("login",false);
    //  location.reload();
     });
  user_container.style.display = "flex";
}else{
   // made_use_profileData(); uncomment this if user profile not working 
   // console.log("now logout")
  user_container.style.display = "flex";
  logout_btn.style.display="none";
  button_section.style.display="flex";
}

function made_use_profileData(){
   let data=JSON.parse(localStorage.getItem("userDetails"));
    let presentUserdata=localStorage.getItem("logged_user");
    for(let i=0;i<data.length;i++){
        if(data[i].email==presentUserdata){
            let usedetails = document.getElementById("usedetails");
            usedetails.innerText="";
            let name=document.createElement("p");
            let eml=document.createElement("p");
            let phone=document.createElement("p");
            name.textContent="Name : "+data[i].name;
            eml.textContent="Email : "+data[i].email;
            phone.textContent="Phone : "+data[i].phone;
            usedetails.append(name,eml,phone);
        }
    }
}
