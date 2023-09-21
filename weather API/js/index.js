//ab92096a006202a68387ea03a0083256
const cityInput       = document.querySelector("#city-input");
const cityName        = document.querySelector("#city");
const cityTemperature = document.querySelector("#temperatureValue");
const cityWind        = document.querySelector("#windValue");
const cityHumidity    = document.querySelector("#umidityValue");
const cityIconWeather = document.querySelector("#weather-icon")
const cityDescription = document.querySelector("#description")
const btnSearch       = document.querySelector("#search");
const countryFlag     = document.querySelector("#country");
const weatherIcon     = document.querySelector(".weather-icon");
const flagCountry     = document.querySelector("#country")
const teste           = document.querySelector(".weather-data");


const urlWeatherKey = "ab92096a006202a68387ea03a0083256"
const urlFlag    = "https://flagsapi.com/";


async function getWeather(city) {
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${urlWeatherKey}&lang=pt_br`;
    try{ 
        const response = await fetch(urlWeather);
        const data = await response.json()
        return data;    
    } catch (err) {
        console.log('erro ' +err)
        return null
    }
    
}

async function showWeather(city) {
    const data = await getWeather(city);
    
    console.log(data)
    if (data.message){
        cityInput.value = 'Digite corretamente o nome da cidade'
        cityInput.setAttribute('readonly', true)
        setTimeout(() =>{
            cityInput.value = ''
            cityInput.readOnly = false;
        }, 2000)
    }else{
        iconWeather = data.weather[0].icon
        cityIconWeather.setAttribute("src", "http://openweathermap.org/img/wn/"+iconWeather+".png")
        flag = data.sys.country
        flagCountry.setAttribute("src", "https://flagsapi.com/"+flag+"/flat/32.png") 
        cityName.textContent = data.name;
        cityHumidity.textContent = data.main.humidity
        cityTemperature.textContent = data.main.temp
        cityDescription.textContent = data.weather[0].description
        cityWind.textContent = data.wind.speed
    }   
    
  
}

btnSearch.addEventListener("click", (e) =>{
    e.preventDefault();
    const city = cityInput.value;
    showWeather(city)
})
