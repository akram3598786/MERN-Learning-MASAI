
const display_blogs=(data,tbody)=>{
  
     data.map((ele)=>{
 
     let tr=document.createElement("tr");
     let td1=document.createElement("td");
     let td2=document.createElement("td");
     let td3=document.createElement("td");
     let td4=document.createElement("td");
     let td5=document.createElement("td");
     let td6=document.createElement("td");
     let td7=document.createElement("td");
     let view_link=document.createElement("button");
     view_link.innerText="View";
     let edit_link=document.createElement("button");
     edit_link.innerText="Edit";
     let delete_btn=document.createElement("button");
     delete_btn.innerText="Delete"
     td1.innerText=ele.id;
     td2.innerText=ele.title;
     td3.innerText=ele.category;
     td4.innerText=ele.author;
     td5.append(view_link);
     td6.append(edit_link);
     td7.append(delete_btn);
    tr.append(td1,td2,td3,td4,td5,td6,td7);
    tbody.append(tr);
 
    edit_link.addEventListener("click",()=>{
      window.open("edit.html", "_self");
      localStorage.setItem("edit_id",ele.id);
     //  console.log(localStorage.getItem("edit_id"));
    })
    delete_btn.addEventListener("click",()=>{
      window.open("home.html", "_self");
      localStorage.setItem("delete_id",ele.id);
    })
 });
 }

 export {display_blogs};