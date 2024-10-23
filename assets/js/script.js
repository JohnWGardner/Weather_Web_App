const apiKey = "2b7ee3f098e996eea38e81986f8a163b"; // API key for OpenWeatherMap
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // Base URL for current weather API
const forecastApiUrl =
  "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";// Base URL for 5-day forecast API

const searchBtn = document.getElementById("weatherBtn"); // Get reference to the search button element
const searchBox = document.getElementById("city"); // Get reference to the search button element

async function checkWeather(city) { // Asynchronous function to fetch current weather data
  try {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`); // Make an API request to fetch current weather data for the specified city
    if (!response.ok) { // Check if the response status is not OK (i.e., something went wrong)
      throw new Error("Network response was not ok"); // Throw an error if the response is not OK
    }
    const data = await response.json(); // Parse the JSON response and assign it to the `data` variable
    console.log(data); // Log the data to the console for debugging
    // Log the data to the console for debugging
    document.querySelector(".card-title").innerHTML = data.name;
    document.querySelector("#temperature").innerHTML = data.main.temp + "°C";
    document.getElementById("condition").innerText = data.weather[0].main;
    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind-speed").innerText = data.wind.speed + "Km/h";
    // Update the weather icon
    const weatherIcon = document.querySelector("#weather-icon");
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    weatherIcon.alt = `Weather icon showing ${data.weather[0].description}`;
    weatherIcon.hidden = false;

    // Make weather card visible
    document.getElementById("weather-display").hidden = false;
  } catch (error) {
    console.error("Error fetching data:", error); // Handle any errors that occur during the fetch process
    // Update the UI to show an error state
    document.querySelector(".card-title").innerHTML = "Error";
    document.querySelector("#temperature").innerHTML = "--°C";
    document.getElementById("condition").innerText = "N/A";
    document.getElementById("humidity").innerText = "--%";
    document.getElementById("wind-speed").innerText = "--Km/h";
    const weatherIcon = document.querySelector("#weather-icon");
    weatherIcon.hidden = true; // Hide the weather icon in case of error

    // Card still visible for error messages
    document.getElementById("current-weather-card").hidden = false;
  }
}

async function getForecast(city) { // Asynchronous function to fetch 5-day weather forecast data
  const response = await fetch(forecastApiUrl + city + `&appid=${apiKey}`);
  try {
    if (!response.ok) {
      throw new Error("Failed to fetch forecast data!");
    }

    const forecastData = await response.json();

    console.log(forecastData);
  
    let forecastHTML= `<h2 id="forecast-display-label">5-Day Forecast</h2>` // Initialize a variable to hold the HTML content for the forecast

    for(let i=0; i<forecastData.list.length; i+=8){ // Loop through the forecast data, stepping every 8 entries (each entry is 3 hours apart)
    const forecast=forecastData.list[i]; // Get the forecast data for the current day
    const dateTime = new Date(forecast.dt*1000).toLocaleDateString("en-GB", { weekday: 'long' }); // Returns weather data in 3-hour intervals for 5 days and converts the timestamp to a readable date
    const temp = forecast.main.temp;// Get
    const description = forecast.weather[0].description;// Get
    const humidity = forecast.main.humidity;// Get
    const wind = forecast.wind.speed;// Get
    
    // Set the weather icon source and alt text
    const weatherIcon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`;
    weatherIcon.alt = `Weather icon showing ${forecast.weather[0].description}`;

    // Add the forecast data to the `forecastHTML` string
    forecastHTML+=
    `<div class="card mt-2 bg-warning forecast-card">
      <div class="card-body text-center">
          <h5 class="card-title">${dateTime}</h5>
          <img src="${weatherIcon}" alt="${condition}" class="mx-auto d-block">
          <p>Temperature: ${temp}°C</p>
          <p>Condition: ${description}</p>
          <p>Humidity: ${humidity}%</p>
          <p>Wind Speed: ${wind} km/h</p>
        </div>
      </div>`
    }
    const forecastContainer=document.getElementById("forecast-container"); // Find the forecast container in the HTML document 

    forecastContainer.innerHTML=forecastHTML; // Insert the constructed forecastHTML into the forecast container
   
    // Catch any errors that occur during the fetch and log them to the console
  } catch (error) { 
    console.log("Error fetching forecast data:", error);
  }
  document.getElementById("forecast-container").hidden = false; // Make the forecast container visible
}
// Add an event listener to the search box to detect 'Enter' key presses
searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkWeather(searchBox.value);
    getForecast(searchBox.value);
  }
});
// Add an event listener to the search button to detect clicks
searchBtn.addEventListener("click", (e) => {
  //e.preventdefault();
  checkWeather(searchBox.value); // Call the function to get current weather
  getForecast(searchBox.value); // Call the function to get forecast
});
