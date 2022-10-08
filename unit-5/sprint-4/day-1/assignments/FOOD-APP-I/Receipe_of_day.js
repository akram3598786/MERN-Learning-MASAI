
import navbar from "./components/navbar.js";
 import display_meal from "./modules/display_meal.js";
 console.log(display_meal);
 document.querySelector("nav").innerHTML=navbar;

const reciepe_of_day = async()=>{
    try{
        let url="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52956";
        let res=await fetch(url);
        let data = await res.json();
         display_meal(data.meals);
    }catch(err){
        console.log(err);
    }
}
reciepe_of_day();   
