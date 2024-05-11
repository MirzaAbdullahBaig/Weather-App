// 
const apiKey = `271ae9131cee8a60801a1edba4bc429d`;
const city = "Muskat";

async function fetchWeatherData() {
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

    const data  = await response.json();
    console.log(data);
    updateWeatherUi(data);
}

fetchWeatherData();

const cityElement = document.querySelector(".city");
const date = document.querySelector(".date");
const descriptionText = document.querySelector(".description-text");
const temperature = document.querySelector(".temp");
const wind_speed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const visibility_distance = document.querySelector(".visibility-distance");