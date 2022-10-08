// fill in javascript code here

document.querySelector("form").addEventListener("submit",show_data);

function show_data(){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let docID=document.getElementById("docID").value;
    let dept=document.getElementById("dept").value;
    let exp=document.getElementById("exp").value;
    let email=document.getElementById("email").value;
    let mbl=document.getElementById("mbl").value;

    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    let td6=document.createElement("td");
    let td7=document.createElement("td");
    let td8=document.createElement("td");
    let role="";
   
   if(exp>5) role="Senior";
   else if(exp>=2 && exp<=5) role="Junior";
   else if(exp<=1) role="Trainee";
   
    td1.innerText=name;
    td2.innerText=docID;
    td3.innerText=dept;
    td4.innerText=exp;
    td5.innerText=email;
    td6.innerText=mbl;
    td7.innerText=role;
    td8.innerText="Delete";
    td8.addEventListener("click",delete_row);
    td8.style.background="red";
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    let tbody=document.querySelector("tbody");
    tbody.append(tr);
     

}
 function delete_row(){
      event.target.parentNode.remove();
   }