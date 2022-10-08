document.querySelector("form").addEventListener("submit",getDetails);

let data=JSON.parse(localStorage.getItem("userDetails")) ;


function getDetails(event){
    event.preventDefault();
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#pass").value;

    let isExsist=false;
    for(let i=0;i<data.length;i++){
        if(data[i].email===email && data[i].pass===pass){
            let eml = data[i].email;
            console.log(eml);
            localStorage.setItem("logged_user",data[i].email);
            isExsist=true;
            break;
        }
    }

    if(isExsist==true){
        localStorage.setItem("login",true);
        alert("Welcome in Food App");
        window.open("../index.html","_self");
    }else{
        alert("Wrong Credentials");
        localStorage.setItem("login",false);    
    }
}
