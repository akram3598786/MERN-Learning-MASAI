async function getweather() {
  let details_div = document.getElementById("details");
  try {
    let city = document.querySelector("input").value;
    let API_key = "cb8c1e56141fffff8b94dc5e505da7a5";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    let collect = await fetch(url);
    let data = await collect.json();
    //  console.log(data);
    let city_name = document.createElement("h3");
    city_name.textContent = "City Name : " + data.name;
    let tempr = document.createElement("p");
    tempr.innerHTML = `Temprature : ${data.main.feels_like} &#x2103;`;
    let min_temp = document.createElement("p");
    min_temp.innerHTML = `Min-Temprature : +${data.main.temp_min} &#x2103;`;
    let mx_temp = document.createElement("p");
    mx_temp.innerHTML = `Max-Temprature : +${data.main.temp_max} &#x2103;`;
    let wind = document.createElement("p");
    wind.innerText = "Wind Speed : " + data.wind.speed;
    let clouds = document.createElement("p");
    clouds.innerText = "Clouds : " + data.clouds.all;
    let sunrise = document.createElement("p");
    sunrise.textContent = `Sunrise : ` + data.sys.sunrise;
    let sunset = document.createElement("p");
    sunset.textContent = ` Senset : ` + data.sys.sunset;
    let msg = `You can male Weather Forcasting for 7 days, Check Below..`;

    details_div.innerText = "";
    details_div.append(
      city_name,
      tempr,
      min_temp,
      mx_temp,
      wind,
      clouds,
      sunrise,
      sunset,
      msg
    );

    let map_section = document.querySelector(".map_section");
    let iframe = document.createElement("iframe");
    iframe.setAttribute(
      "src",
      `https://maps.google.com/maps?q=${data.name}&t=&z=9&ie=UTF8&iwloc=&output=embed`
    );
    iframe.style.width = "578px";
    iframe.style.height = "500px";
    map_section.innerText = "";
    map_section.append(iframe);
  } catch (err) {
    console.log(err);
  }
}

async function getweather_forcast() {
  try {
    let city = document.querySelector("input").value;
    let API_key = "4e8ebc30cdf8189361da75fcbc76afd3";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}&units=metric`;
    let collect = await fetch(url);
    let data = await collect.json();
    //  console.log(data);
    displal_forcast(data);
  } catch (err) {
    console.log(err);
  }
}

displal_forcast = (data) => {
  let forcast_data = document.getElementById("forcast_data");
  // let tbody = document.getElementById("tbo
  let city = document.getElementById("city");
  city.innerText = data.city.name;
  let weather_data = data.list;
  // let tr=document.createElement("tr");
  // let td1=document.createElement("td");
  // let td2=document.createElement("td");
  // let td3=document.createElement("td");
  // let td4=document.createElement("td");
  // let td5=document.createElement("td");
  // let td6=document.createElement("td");
  // let td7=document.createElement("td");
  let days_data = [];
  forcast_data.innerText = "";
  weather_data.map((ele) => {
    let tempr = document.createElement("p");
    tempr.innerHTML = `Temp : ${ele.main.feels_like} &#x2103;`;
    let wind = document.createElement("p");
    wind.innerHTML = `Wind-Speed : ${ele.main.temp_min} Km/h`;
    let clouds = document.createElement("p");
    let cloud_desc = ele.weather[0].description;
    clouds.innerHTML = `Clouds : ${cloud_desc}`;
    let weather_icon = document.createElement("img");
    weather_icon.setAttribute("class", "weather_icon");
    if (cloud_desc == "light rain") weather_icon_src = "./img/light-rain.jpg";
    else if (cloud_desc == "overcast clouds")
      weather_icon_src = "./img/overcast.jpg";
    else if (cloud_desc == "rain") weather_icon_src = "./img/rain.jpg";
    else if (cloud_desc == "moderate rain")
      weather_icon_src = "./img/moderate rain.jpg";
    else if (cloud_desc == "broken clouds")
      weather_icon_src = "./img/overcast.jpg";
    else if (cloud_desc == "clear sky") weather_icon_src = "./img/sunny.jpg";
    else weather_icon_src = "./img/normal.jpg";
    // console.log(cloud_desc);
    weather_icon.setAttribute("src", weather_icon_src);

    let box = document.createElement("div");
    box.setAttribute("class", "forcast_box");
    box.append(weather_icon, tempr, wind);
    days_data.push(box);
  });

  for (let i = 0; i < 7; i++) {
    forcast_data.append(days_data[i]);
  }
};
