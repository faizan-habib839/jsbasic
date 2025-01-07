const apiKey="6c287d610b97754447a44bed49dc749f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";


const searchbar=document.querySelector(".search input");
const searchbutton=document.querySelector(".search button");

async function checkApi(city) {
    let response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C" ;
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".Humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " " + "km/h";

    
   

    searchbutton.addEventListener("click", () => {
        checkApi(searchbar.value);
    });
    
    
    
    

}  


