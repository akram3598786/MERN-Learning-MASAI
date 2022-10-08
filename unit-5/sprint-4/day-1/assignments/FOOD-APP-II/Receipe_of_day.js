
import navbar from "./components/navbar.js";
 import display_meal from "./modules/display_meal.js";
 document.querySelector("nav").innerHTML=navbar;

const reciepe_of_day = async()=>{
    try{
        // let url="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52956";
        let url="https://www.themealdb.com/api/json/v1/1/random.php";
        let res=await fetch(url);
        let data = await res.json();
        // console.log(data);
        display_reciepe(data.meals);
    }catch(err){
        console.log(err);
    }
}

const display_reciepe=(data)=>{
    let contents = document.getElementById("contents");
    if(!data){
        let msg=document.createElement("h2");
        msg.textContent = "No food found!";
        msg.style.color="red";
        contents.append(msg);
    }else{
        
    data.forEach((ele) => { 
        let box = document.createElement("div");
        box.setAttribute("class", "box");
        let img = document.createElement("img");
        let id = document.createElement("p");
        let meal_name = document.createElement("p");
        let strArea = document.createElement("p");
        let strCategory = document.createElement("p");
        let strMeasure1 = document.createElement("p");
        let youtube = document.createElement("a");
        let btn=document.createElement("button");
        let strInstructions = document.createElement("p");

        img.src = ele.strMealThumb;
        meal_name.textContent = ele.strMeal;
        id.textContent = ele.idMeal;
        strArea.textContent = ele.strArea;
        strCategory.textContent = ele.strCategory;
        strMeasure1.textContent = ele.strMeasure1
        youtube.innerText = `Watch on Youtube`;
        youtube.href=ele.strYoutube;
        btn.innerHTML=youtube;
        btn.style.backgroundColor="red";
        btn.style.color="white";
        strInstructions.textContent = ele.strInstructions;
      box.append(img, meal_name,id,strArea,strCategory,strMeasure1,youtube,strInstructions);
      contents.append(box);
    }); 
}
}
reciepe_of_day();   
