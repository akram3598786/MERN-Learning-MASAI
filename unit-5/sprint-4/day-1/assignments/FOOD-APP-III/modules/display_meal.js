
 const display_meal=(data)=>{
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
      let meal_name = document.createElement("p");
      let meal_area = document.createElement("p");
      meal_name.textContent = ele.strMeal;
      meal_area.textContent = ele.strArea;
      img.src = ele.strMealThumb;
      box.append(img, meal_name, meal_area);
      contents.append(box);
    });
}
  };

  export default display_meal;