import navbar from "./components/navbar.js";
document.querySelector("nav").innerHTML = navbar;
import display_meal from "./modules/display_meal.js";

let search_btn = document.getElementById("submit_btn");

const get_meal =async(name)=>{
  try {
    console.log(name);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data)
    document.getElementById("contents").innerHTML = "";
    display_meal(data.meals);
  } catch (err) {
    console.log(err);
  }
}

let timer_id;
document.getElementById("name").addEventListener("input", () => {
  if (timer_id) {
    clearTimeout(timer_id);
  }
  timer_id = setTimeout(function () {
    let name = document.getElementById("name").value;
    get_meal(name);
  }, 1000);
});

