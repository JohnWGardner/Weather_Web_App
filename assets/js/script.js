const apiKey = "2b7ee3f098e996eea38e81986f8a163b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn = document.getElementById("weatherBtn")
const searchBox = document.getElementById("city");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data =  await response.json();

    console.log(data)
    document.querySelector(".card-title").innerHTML = data.name;
    document.querySelector("#temperature").innerHTML = data.main.temp;
    document.getElementById("condition").innerText = data.weather[0].main;
  document.getElementById("humidity").innerText = `${data.current.humidity}%`;
   
}



searchBtn.addEventListener("click", (e)=>{
    // e.preventdefault();
    checkWeather(searchBox.value);
   
})