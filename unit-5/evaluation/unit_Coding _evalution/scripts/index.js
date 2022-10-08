/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

document.querySelector("form").addEventListener("submit", login);
  // let users_data = JSON.parse(localStorage.getItem("user")) || [];
  function login() {
    event.preventDefault();
   let form_sec =document.getElementById("user-form");

    let pic_url = document.getElementById("user_pic").value;
    let pic = document.createElement("img");
    // pic.setAttribute("src", pic_url);

    let user_name = document.getElementById("user_name").value;
    let user_email = document.getElementById("user_email").value;
    let user_country = document.getElementById("user_country").value;
    // (store country code "in", "ch", "nz", "us", "uk")
    let obj={
      name: user_name,
      image: pic_url,
      email: user_email,
      country: user_country
    }
    let flg = "";

    // users_data.push(obj);
    localStorage.setItem("user", JSON.stringify(obj));
    let msg = document.getElementById("msg");
    msg.innerText = "Login Successfully";
    msg.style.backgroundColor = "green";
    msg.style.width = "80%";
    form_sec.append(msg)
    setTimeout(() => {
      window.open("worldNews.html", "_self");
    }, 2000)
  }
