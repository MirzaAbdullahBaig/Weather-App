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