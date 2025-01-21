const apikey = "5d50cb77a4d850371ce5a430e31c9b24";
// Fetch the input element
const cityInputEl = document.getElementById("city-input");
// Fetch the ul element
const weatherDataEl = document.getElementById("weather-data");
// Query the form element
const formEl = document.querySelector("form");


// Function to get the weather data
const getWeatherData = async (cityValue) => {
    console.log('city', cityValue);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`;
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        // Convert the response to JSON
        const data = await response.json();
        console.log('data', data);
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`
        ];
        
        weatherDataEl.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;
        weatherDataEl.querySelector('.temperature').textContent = `${temperature}°C`;
        weatherDataEl.querySelector('.description').textContent = description;
        weatherDataEl.querySelector(".details").innerHTML = details.map(details => `<div>${details}</div>`).join('');
    } catch (error) {
        console.log(error);
    }
}
// Add event listener to the form element
formEl.addEventListener("submit", (event) => {
     // Prevent the default behavior of the form -> jumping to a new page sth
    event.preventDefault();
    // Get the value of the input element
    const cityValue = cityInputEl.value;
    // Call the getWeatherData function
    getWeatherData(cityValue);
});