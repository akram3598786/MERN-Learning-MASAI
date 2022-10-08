// All the JS Code for the Add Students Page Goes Here

document.querySelector("form").addEventListener("submit",store_data);
let std_list=JSON.parse(localStorage.getItem("admission")) || [];
function store_data(){
 event.preventDefault();
 let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let course = document.getElementById("course").value;
let gender = document.getElementById("gender").value;

let obj={};
 obj = {
    name:name,
    email:email,
    phone:phone,
    gender:gender,
    course:course
}
  console.log(obj);
    std_list.push(obj);
    localStorage.setItem("admission",JSON.stringify(std_list));
    console.log(localStorage.admission)
}