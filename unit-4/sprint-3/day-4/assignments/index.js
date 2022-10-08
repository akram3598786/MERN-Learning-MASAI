// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",display_data);

function display_data(){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let batch = document.getElementById("batch").value;
    let dsa = document.getElementById("dsa").value;
    let skillton = document.getElementById("cs").value;
    let coding = document.getElementById("coding").value;

    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    let td6=document.createElement("td");
    let td7=document.createElement("td");
    let td8=document.createElement("td");
    let tr=document.createElement("tr");
    let tbody=document.querySelector("tbody");
    
    td1.innerText=name;
    td2.innerText=batch;
    td3.innerText=dsa;
    td4.innerText=skillton;
    td5.innerText=coding;
  
    let percent=0;
    let course_sts="Async";
    dsa=parseInt(dsa);
    skillton=parseInt(skillton);
    coding=parseInt(coding);

    let sum = dsa+skillton+coding;
    let tot_mrks=30;
    percent=Math.floor((sum/tot_mrks)*100)
     if(percent>=50) course_sts="Regular";
     else course_sts = "Async";
   
    td6.innerText=percent;
    td7.innerText=course_sts;
    td8.innerText="Delete";
    td8.style.backgroundColor="red"
    td8.addEventListener("click",delete_row)
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.append(tr);
    console.log(tbody);
}

function delete_row(){
  event.target.parentNode.remove();
}