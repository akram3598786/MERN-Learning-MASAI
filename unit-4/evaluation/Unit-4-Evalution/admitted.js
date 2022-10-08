// All the Code for the Admitted page goes here

let admitted=JSON.parse(localStorage.getItem("admission_accepted")) || [];

show();
function show(){
    let tbody = document.querySelector("tbody");

    admitted.map((ele)=>{

   
    let tr=document.createElement("tr");

    let name=document.createElement("td");
    let gender=document.createElement("td");
    let email=document.createElement("td");
    let mobile=document.createElement("td");
    let course=document.createElement("td");

    name.innerText=ele.name;
    gender.innerText=ele.gender;
    email.innerText=ele.email;
    mobile.innerText=ele.phone;
    course.innerText=ele.course;

    tr.append(name,gender,email,mobile,course);
      tbody.append(tr)
});

}
