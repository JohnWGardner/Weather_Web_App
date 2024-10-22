const apiKey = "2b7ee3f098e996eea38e81986f8a163b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn = document.getElementById("weatherBtn")
const searchBox = document.getElementById("city");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data =  await response.json();

    console.log(data)
    
    document.querySelector(".card-title").innerHTML = data.name;
    document.querySelector("#temperature").innerHTML = data.main.temp + "°C";
    document.getElementById("condition").innerText = data.weather[0].main;
    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind-speed").innerText = data.wind.speed + "Km/h";   

    const weatherIcon = document.querySelector("#weather-icon");
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = `Weather icon showing ${data.weather[0].description}`;
    weatherIcon.hidden = false;
    }

searchBtn.addEventListener("click", (e)=>{
    // e.preventdefault();
    checkWeather(searchBox.value);
   
})