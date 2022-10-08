document.querySelector("form").addEventListener("submit",submitDetails);

let data=JSON.parse(localStorage.getItem("userDetails")) || [];
// console.log(data);
function submitDetails(){
     event.preventDefault();
    let Uname=document.querySelector("#name").value;
    let Uemail=document.querySelector("#email").value;
    let Uphone= document.querySelector("#number").value;
    let Upass=document.querySelector("#pass").value;
    let obj={name:Uname,email:Uemail,phone:Uphone,pass:Upass};
    
  data.push(obj);
    localStorage.setItem("userDetails",JSON.stringify(data));
    alert("SignUp Successfull");
    window.open("signIn.html", "_self");
}
