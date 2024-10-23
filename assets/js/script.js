const apiKey = "2b7ee3f098e996eea38e81986f8a163b";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const forecastApiUrl =
  "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

const searchBtn = document.getElementById("weatherBtn");
const searchBox = document.getElementById("city");

async function checkWeather(city) {
  try {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);

    document.querySelector(".card-title").innerHTML = data.name;
    document.querySelector("#temperature").innerHTML = data.main.temp + "°C";
    document.getElementById("condition").innerText = data.weather[0].main;
    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind-speed").innerText = data.wind.speed + "Km/h";

    const weatherIcon = document.querySelector("#weather-icon");
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = `Weather icon showing ${data.weather[0].description}`;
    weatherIcon.hidden = false;

    // Make weather card visible
    document.getElementById("weather-display").hidden = false;
  } catch (error) {
    console.error("Error fetching data:", error);
    document.querySelector(".card-title").innerHTML = "Error";
    document.querySelector("#temperature").innerHTML = "--°C";
    document.getElementById("condition").innerText = "N/A";
    document.getElementById("humidity").innerText = "--%";
    document.getElementById("wind-speed").innerText = "--Km/h";
    const weatherIcon = document.querySelector("#weather-icon");
    weatherIcon.hidden = true;

    // Card still visible for error messages
    document.getElementById("current-weather-card").hidden = false;
  }
}

async function getForecast(city) {
  const response = await fetch(forecastApiUrl + city + `&appid=${apiKey}`);
  try {
    if (!response.ok) {
      throw new Error("Failed to fetch forecast data!");
    }

    const forecastData = await response.json();

    console.log(forecastData);
  
    let forecastHTML= `<h2 id="forecast-display-label">5-Day Forecast</h2>`

    for(let i=0; i<forecastData.list.length; i+=8){
    const forecast=forecastData.list[i];
    const dateTime = new Date(forecast.dt*1000).toLocaleDateString("en-GB", { weekday: 'long' });
    const temp = forecast.main.temp;
    const description = forecast.weather[0].description;
    const humidity = forecast.main.humidity;
    const wind = forecast.wind.speed;
    

    const weatherIcon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
    weatherIcon.alt = `Weather icon showing ${forecast.weather[0].description}`;

  
    forecastHTML+=
    `<div class="card mt-2 bg-warning">
      <div class="card-body">
          <h5 class="card-title">${dateTime}</h5>
          <img src="${weatherIcon}" alt="${condition}" class="d-block">
          <p>Temperature: ${temp}°C</p>
          <p>Condition: ${description}</p>
          <p>Humidity: ${humidity}%</p>
          <p>Wind Speed: ${wind} km/h</p>
        </div>
      </div>`
    }
    const forecastContainer=document.getElementById("forecast-container");
 

    forecastContainer.innerHTML=forecastHTML
   
  } catch (error) {
    console.log("Error fetching forecast data:", error);
  }
  document.getElementById("forecast-container").hidden = false;
}

searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkWeather(searchBox.value);
    getForecast(searchBox.value);
  }
});

searchBtn.addEventListener("click", (e) => {
  //e.preventdefault();
  checkWeather(searchBox.value);
  getForecast(searchBox.value);
});
