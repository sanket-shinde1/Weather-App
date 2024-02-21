
let API_CURRENT = "https://api.weatherapi.com/v1/current.json?key=b344d50bde9a4b9bb2b60413242002&q=pune";
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidityValue").textContent;
const wind = document.getElementById("windValue").textContent;
const cloud = document.getElementById("cloudValue").textContent;
const input = document.getElementById("city");


function search(){

    document.getElementById("weatherInfo").style.display = "block";
    const city = document.getElementById("city").value;
    getCurrentWeather(city);
}

function getCurrentWeather(city){

    API_CURRENT = "https://api.weatherapi.com/v1/current.json?key=b344d50bde9a4b9bb2b60413242002&q="+city;
    fetchAPI(API_CURRENT)
     .then((result)=>{
        document.getElementById("country").textContent = result.location.name +", " + result.location.region + " "+ result.location.localtime.slice(11);
        temperature.textContent = result.current.temp_c + "°c" ; 
        humidityValue.textContent = result.current.humidity + " %.";
        windValue.textContent = result.current.wind_kph + " kph";
        cloudValue.textContent = result.current.cloud + " okta"; 
    })
    .catch((err)=>{
        console.log("Something went wrong");
    })
}

const HEADERS = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    },
    mode: 'no-cors'
  }


async function fetchAPI(API_CURRENT){

    try{
        const data = await fetch(API_CURRENT, HEADERS);
        const result = await data.json();
        return result;
    }
    catch(err){
        console.log(err.message);
     }    
}

// fetchAPI()
//     .then((result)=>{
//         document.getElementById("country").textContent = result.location.name +", " + result.location.region + " "+ result.location.localtime.slice(11);
//         temperature.textContent = result.current.temp_c + "°c" ; 
//         humidityValue.textContent = result.current.humidity + " %.";
//         windValue.textContent = result.current.wind_kph + " kph";
//         cloudValue.textContent = result.current.cloud + " okta"; 
//     })

// const data = fetchAPI();
// console.log(data);
// document.getElementById("country").textContent = data.location.country;

//  let ans = document.getElementById("country").textContent;
// country.textContent = "INDIA";
// console.log(ans);
