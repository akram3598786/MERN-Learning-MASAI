import display_meal from "./modules/display_meal.js";
import navbar from "./components/navbar.js";

document.querySelector("nav").innerHTML = navbar;

const get_random = async () => {
  try {
    let url = "https://www.themealdb.com/api/json/v1/1/random.php";
    let res = await fetch(url);
    let data = await res.json();
    display_meal(data.meals);
  } catch (err) {
    console.log(err);
  }
};

get_random();

// I can use *get_data function* as module but writing individually to easy for reading.
