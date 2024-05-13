const apiKey = `271ae9131cee8a60801a1edba4bc429d`;
const date = document.querySelector(".date").textContent = new Date().toDateString();

const formElement = document.querySelector(".search-form");
const city_input = document.querySelector(".city-input");

const cityElement = document.querySelector(".city");
const descriptionIcon = document.querySelector(".description i");
const descriptionText = document.querySelector(".description-text");
const temperature = document.querySelector(".temp");
const wind_speed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const visibility_distance = document.querySelector(".visibility-distance");

async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error("Unable to fetch weather data")
        }

        const data = await response.json();
        updateWeatherUI(data);
    } catch (error) {
        console.error(error);
    }
}

function updateWeatherUI(data) {
    const weatherIconName = getWeatherIconName(data.weather[0].main);

    cityElement.textContent = data.name;
    descriptionIcon.innerHTML = `<i class="material-icons">${weatherIconName}</i>`
    descriptionText.textContent = data.weather[0].description;
    temperature.textContent = `${Math.round(data.main.temp)}°`;
    wind_speed.textContent = `${data.wind.speed} KM/H`;
    humidity.textContent = `${data.main.humidity} %`;
    visibility_distance.textContent = `${data.visibility / 1000} KM/H`;
}

formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    const city = city_input.value

    if (city !== "") {
        fetchWeatherData(city);
    }
    city_input.value = "";
})

function getWeatherIconName(weatherCondition) {
    const iconMap = {
        Clear: "wb_sunny",
        Clouds: "wb_cloudy",
        Rain: "umbrella",
        Thunderstorm: "flash_on",
        Drizzle: "grain",
        Snow: "ac_unit",
        Mist: "cloud",
        Smoke: "cloud",
        Haze: "cloud",
        Fog: "cloud",
    };
    return iconMap[weatherCondition] || "help";
}