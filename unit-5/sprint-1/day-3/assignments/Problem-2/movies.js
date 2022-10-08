
let movies=[
    {
        name: "MINIONS: THE RISE OF GRU",
        poster: "https://resizing.flixster.com/iNEeL_9Gqxf4QRepMO5xUzziyN4=/fit-in/180x240/v2/https://resizing.flixster.com/s2eQM6eCyFOAYE_jOckLuj7op84=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBkOGQzNDU5LWQ0YjgtNDczNi1hNmE1LWI1ZWFjY2QxZTNlYS5qcGc=" ,
        raiting : 9,
        release:"02-07-2022"
    },
    {
        name: "ELVIS",
        poster: "https://resizing.flixster.com/VZb0Mflp5h6Du4H8Ffu12YoIXGY=/fit-in/180x240/v2/https://resizing.flixster.com/mYfU74jKBCV9KA_O7ktmk5exwu4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzczNjAwNTk0LTRlZWEtNDY5Ni1iYWM1LWRhZjI1OWUzODNhNy5qcGc=",
        raiting : 8,
        release:"06-05-2022"
    },
    {
        name: "THE BLACK PHONE",
        poster: "https://resizing.flixster.com/JpWxd6mUJ1IGZQmixph44B8UWiE=/fit-in/180x240/v2/https://resizing.flixster.com/r38PjcA-XGIiW3UR2pfUaGEYTNk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk4ZDA3Njk0LWE2YWUtNGZlYi1iNjQ2LTVkMmI2YTkyYmIyNy5qcGc=",
        raiting : 7,
        release:"03-04-2022"
    },
    {
        name: "TOP GUN: MAVERICK",
        poster: "https://resizing.flixster.com/V_t9c33NhO_dVwTtCh1s0lRC2To=/fit-in/180x240/v2/https://resizing.flixster.com/TIM4kfHTVZrfpF0tYt9LIU69A5s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU1OWIwMWQwLWYyZDItNDk4Yi04MDIxLWI3OTJlNDI1NjA3NS5qcGc=",
        raiting : 5,
        release:"07-01-2022"
    },
    {
        name: "LIGHTYEAR ",
        poster: "https://resizing.flixster.com/3Dy4SlaW3gD4S431giA6Eo1bkyY=/fit-in/180x240/v2/https://resizing.flixster.com/237vh0it1m-T5ZYWLOWtwM5x02E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzRkODY5ODJkLTIxY2QtNGI3Yy1iYmVhLTdmNmZiZmI1OTVjNC5qcGc=",
        raiting : 5,
        release:"03-07-2021"
    },
    {
        name: "JURASSIC WORLD DOMINION ",
        poster: "https://resizing.flixster.com/RHPdg3LCUg8osbx4WrhJvxQxYKM=/fit-in/180x240/v2/https://resizing.flixster.com/2VPIaCRTElZ2Iwa0u5vdO8Tq_Kw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M5MjdhYzIwLTlhOWYtNDFiYS05YTM0LTkzNTUxNThlZWFkZi5qcGc=",
        raiting : 7,
        release:"02-06-2021"
    },
    {
        name: "EVERYTHING EVERYWHERE ALL AT ONCE",
        poster: "https://resizing.flixster.com/YEtJo5X13brZTogcU54WYk-lEbI=/fit-in/180x240/v2/https://resizing.flixster.com/mx-agGjjsUK1QMyuv3AJhHI3hgo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA3ZjU2MGU1LWMxODItNDlkMC1hYzJhLTY2YzMwOGZkMDhiZi5qcGc=",
        raiting : 8,
        release:"20-04-2020"
    },
    {
        name: "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS ",
        poster: "https://resizing.flixster.com/ZTjHFvEfpeypIat01dfvpgjH3r4=/fit-in/180x240/v2/https://resizing.flixster.com/RfZ4YhxZPdnbMcPd9CkitjdSijQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzIxODJmNzBkLWE5MDYtNGYyYi1hZGU4LWMyMTFlMTVjODkzMy5qcGc=",
        raiting : 6,
        release:"23-03-2020"
    },
    {
        name: "THE MAN FROM TORONTO",
        poster: "https://resizing.flixster.com/PBvGV75gMmtnxJuAWtmhlQsjXpI=/fit-in/180x240/v2/https://resizing.flixster.com/l9sgEFGp8tyYpz5RYRDcVLC4roE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2EyY2E4MjRkLTVhYWEtNDk3NC04ZTk4LTUwMmE2ZDQyNTQwMy5qcGc=",
        raiting : 7,
        release:"29-02-2020"
    },
];

localStorage.setItem("movies",JSON.stringify(movies));
let movies_list = JSON.parse(localStorage.getItem("movies"));
 show_movies();
 function show_movies(){
    movies_list.map((ele)=>{
        let box_div = document.createElement("div");
        box_div.setAttribute("class","box");
        let poster=document.createElement("img");
        poster.setAttribute("src",ele.poster);
        let name=document.createElement("p");
        name.innerText=ele.name;
        let release=document.createElement("p");
        release.innerText="Release : "+ele.release;
        let rating=document.createElement("p");
        rating.innerText="IMDB Rating : "+ele.raiting;
        let cont=document.getElementById("container");
        box_div.append(poster,name,release,rating)
        cont.append(box_div);
    });
 }