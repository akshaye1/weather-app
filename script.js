const apiKey = "42b8a9593411c503d21549b2f11745e9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + "&appid=" + apiKey);
        if (!response.ok) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            throw new Error('Network response was not ok');   
        }else{
            document.querySelector(".error").style.display = "none";
            
        }

        const data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15) + "°C"; // Convert temperature to Celsius
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";}
        
            else if(data.weather [0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
            }
            else if(data.weather [0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
            }
            else if(data.weather [0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather [0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
            }

            document.querySelector(".weather").style.display = "block";

    } catch (error) {
        console.error("Error:", error);
    }

}



searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

