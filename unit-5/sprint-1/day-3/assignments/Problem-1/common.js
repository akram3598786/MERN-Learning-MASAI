
// let login_user=JSON.parse(localStorage.getItem("user"));

function check_login_sts(){
    // console.log(localStorage.getItem("login"))
     event.preventDefault();
      if(localStorage.getItem("login")){
        document.getElementById("login").style.display="none";
        document.getElementById("signup").style.display="none";
        let login_user = JSON.parse(localStorage.getItem("login_user"));
        document.getElementById("user").innerHTML=`<p>${login_user.name}</p>`;
        let logout= document.getElementById("logout");
        logout.innerText="LogOut";
    }else{
        document.getElementById("login").style.display="block";
        document.getElementById("signup").style.display="block";
        document.getElementById("user").style.display="none";
        document.getElementById("logout").style.display="none";
    }
}

function gonext(){
    count++;
    slide_img()
 }
 function goback(){
    count--;
    slide_img()
 }
let slides=document.querySelectorAll(".slide");
let len = slides.length;
let count=0;
slides.forEach((silde,index)=>{
    silde.style.left = `${index * 100}%`;
    // silde.style.top = `${index * 100}%`; we can chage sliduing direction by chahging axix to translateY with top positioning
})

function slide_img(){
    let c=0
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${count*100}%)`; 
        // slide.style.transform = `translateY(-${count*100}%)`;
         
    })
}