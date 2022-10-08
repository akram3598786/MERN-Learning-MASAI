// All the Code for All Students Page Goes Here

let tbody = document.querySelector("tbody");
 display_data();

function display_data(){
  let std_data = JSON.parse(localStorage.getItem("admission")) || [];
    std_data.map((ele)=>{
      let tr=document.createElement("tr");

      let name=document.createElement("td");
      let gender=document.createElement("td");
      let email=document.createElement("td");
      let mobile=document.createElement("td");
      let course=document.createElement("td");
      let accept=document.createElement("td");
      let reject=document.createElement("td");

      name.innerText=ele.name;
      gender.innerText=ele.gender;
      email.innerText=ele.email;
      mobile.innerText=ele.phone;
      course.innerText=ele.course;
      let acc_btn=document.createElement("button");
      // acc_btn.setAttribute("id","accept_bt")
      let rej_btn=document.createElement("button");
      // rej_btn.setAttribute("id","reject_bt")
      acc_btn.innerText =  "ACCEPT";
      acc_btn.style.backgroundColor="green";
      rej_btn.innerText = "REJECT";
      rej_btn.style.backgroundColor="red";

      acc_btn.addEventListener("click",function(){
        addto_acept(ele.phone);
        remove_accepted(ele.phone);
      })
      rej_btn.addEventListener("click",function(){
        addto_reject(ele.phone);
        remove_rejeted(ele.phone);
      })
      tr.append(name,gender,email,mobile,course,acc_btn,rej_btn);
      tbody.append(tr)
    });
 let admitted_std=JSON.parse(localStorage.getItem("admission_accepted")) || [];
    function addto_acept(id){
        let obj=[{}];
        obj= std_data.filter((el)=>{
          return id==el.phone;
        })

        admitted_std.push(obj[0])
      localStorage.setItem("admission_accepted", JSON.stringify(admitted_std));
       console.log(localStorage.admission_accepted);
    }


    function remove_accepted(id){
      let filtered=[];
      filtered=std_data.filter((el)=>{
        return id!=el.phone;
       })
       localStorage.removeItem("admission");
       localStorage.setItem("admission",JSON.stringify(filtered));
       display_data();
    }
    function remove_rejeted(id){
      let filtered=[];
      filtered=std_data.filter((el)=>{
        return id!=el.phone;
       })
       localStorage.removeItem("admission");
       localStorage.setItem("admission",JSON.stringify(filtered));
       display_data();
    }
 let rejected_std=JSON.parse(localStorage.getItem("admission_rejected")) || [];
    function addto_reject(id){
        let obj=[{}];
        obj= std_data.filter((el)=>{
          return id==el.phone;
        })
        rejected_std.push(obj[0])
      localStorage.setItem("admission_rejected", JSON.stringify(rejected_std));
        console.log(localStorage.admission_rejected);
    }
}