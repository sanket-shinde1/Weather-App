
let API_CURRENT = "https://api.weatherapi.com/v1/current.json?key=b344d50bde9a4b9bb2b60413242002&q=pune";
const apikey = "key=b344d50bde9a4b9bb2b60413242002";
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidityValue").textContent;
const wind = document.getElementById("windValue").textContent;
const cloud = document.getElementById("cloudValue").textContent;
const input = document.getElementById("city");
const searchInput = document.getElementById("city");

function search(){
//search() helps to get the city name from the user.

    document.getElementById("weatherInfo").style.display = "block";
    const city = document.getElementById("city").value;
    getCurrentWeather(city);
}

async function displayWeatherCondition(resultPromise){
//displays the data on the page & handles the validation.

    try{
        const result = await resultPromise;
        document.getElementById("country").textContent = result.location.name +", " + result.location.region + " "+ result.location.localtime.slice(11);
        temperature.textContent = result.current.temp_c + "°c" ; 
        humidityValue.textContent = result.current.humidity + " %.";
        windValue.textContent = result.current.wind_kph + " kph";
        cloudValue.textContent = result.current.cloud + " okta"; 
    }
    catch{
        alert("Please Enter Valid City !");
        console.log(err.message);
    }

}

function getCurrentWeather(city){   

    API_CURRENT = "https://api.weatherapi.com/v1/current.json?"+apikey+"&q="+city;
    const resultPromise = fetchAPI(API_CURRENT);
    displayWeatherCondition(resultPromise);
}

const HEADERS = {
    method: 'GET', 
  }


async function fetchAPI(API_CURRENT){
//fetchAPI() fetch the given API and converts the data in the json format.

    try{
        const data = await fetch(API_CURRENT, HEADERS);
        const result = await data.json();
        return result;
    }
    catch(err){
        console.log(err);
     }    
}

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        search();
    }
});
