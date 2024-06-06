// 37b84dd6ef01b6ed70ac408b7aad7b9f

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const apiKey = "37b84dd6ef01b6ed70ac408b7aad7b9f";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function getWeatherUpdate(city) {
    const response = await fetch(`${url + city}&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        let data = await response.json();

        // console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerText = `${Math.round(data.main.temp)}` + `°C`;
        document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
        document.querySelector(".wind").innerHTML = data.wind.speed + `km/hr`;
        const imageIcon = document.querySelector(".weather-icon");
        const weatherCondition = data.weather[0].main;
        if (weatherCondition == "Clouds") {
            imageIcon.src = "images/clouds.png";
        }
        else if (weatherCondition == "Rain") {
            imageIcon.src = "images/rain.png";
        }
        else if (weatherCondition == "Clear") {
            imageIcon.src = "images/clear.png";
        }
        else if (weatherCondition == "Mist") {
            imageIcon.src = "images/mist.png";
        }
        else if (weatherCondition == "Snow") {
            imageIcon.src = "images/snow.png";
        }
        else if (weatherCondition == "Drizzle") {
            imageIcon.src = "images/drizzle.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    getWeatherUpdate(searchbox.value);
    // searchbox.value = "";
});
document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getWeatherUpdate(searchbox.value);
    }
});
// getWeatherUpdate()
