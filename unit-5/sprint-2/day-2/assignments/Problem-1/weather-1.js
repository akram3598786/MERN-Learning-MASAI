

https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=cb8c1e56141fffff8b94dc5e505da7a5
async function getweather(){
    let details_div = document.getElementById("details");
    try{ 
    let city=document.querySelector("input").value;
    let API_key = "cb8c1e56141fffff8b94dc5e505da7a5";
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    let collect= await fetch(url);
    let data = await collect.json();
       console.log(data);
    let city_name= document.createElement("h3");
    city_name.textContent="City Name : "+data.name;
    let tempr= document.createElement("p");
    tempr.textContent="Temprature : "+data.main.feels_like;
    let min_temp= document.createElement("p");
    min_temp.textContent="Min-Temprature : "+data.main.temp_min;
    let mx_temp= document.createElement("p");
    mx_temp.textContent="Max-Temprature : "+data.main.temp_max;
    let wind = document.createElement("p");
    wind.innerText="Wind Speed : "+data.wind.speed;
    let clouds= document.createElement("p");
    clouds.innerText="Clouds : "+data.clouds.all;
    let sunrise= document.createElement("p");
    sunrise.textContent=`<i class="fa-solid fa-sunrise"></i> Sunrise : `+data.sys.sunrise;
    let sunset= document.createElement("p");
    sunset.textContent=`<i class="fa-regular fa-sunset"></i> Senset : `+data.sys.sunset;

  details_div.innerText="";
  details_div.append(city_name,tempr,min_temp,mx_temp,wind,clouds,sunrise,sunset);
 
  let map_section=document.querySelector(".map_section");
  let iframe=document.createElement("iframe");
  iframe.setAttribute("src",`https://maps.google.com/maps?q=${data.name}&t=&z=9&ie=UTF8&iwloc=&output=embed`);
  iframe.style.width="578px";
  iframe.style.height="500px";
  map_section.innerText="";
  map_section.append(iframe);
    }
    catch(err){
        console.log(err);
    }
}
