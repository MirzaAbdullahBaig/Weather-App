const apiKey = `271ae9131cee8a60801a1edba4bc429d`;
const city = "Islamabad";
const current_date = new Date();

const cityElement = document.querySelector(".city");
const date = document.querySelector(".date");
const descriptionText = document.querySelector(".description-text");
const temperature = document.querySelector(".temp");
const wind_speed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const visibility_distance = document.querySelector(".visibility-distance");

async function fetchWeatherData() {
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data  = await response.json();
    
    cityElement.textContent = data.name;
    date.textContent = current_date.toDateString();
    descriptionText.textContent = data.weather[0].description;
    temperature.textContent = `${Math.round(data.main.temp)}°`;
    wind_speed.textContent = `${data.wind.speed} KM/H`;
    humidity.textContent = `${data.main.humidity} %`;
    visibility_distance.textContent = `${data.visibility / 1000} KM/H`;
}
fetchWeatherData();