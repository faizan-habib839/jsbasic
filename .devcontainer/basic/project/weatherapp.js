const apiKey="6c287d610b97754447a44bed49dc749f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";


const searchbox=document.querySelector(".search input");
 const searchbtn=document.querySelector(".search button");
 const weathericon=document.querySelector(".weather-icon");



  async function checkwaether(city) {
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`);
if(response.status ==404)
{
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
}
else
{
    var data=await response.json();
    


    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C" ;
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".Humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " " + "km/h";

    if(data.weather[0].main=="Clouds"){
        weathericon.src="weather-app-img/images/clouds.png"

    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="weather-app-img/images/clear.png"

    }

    else if(data.weather[0].main=="Clear"){
        weathericon.src="weather-app-img/images/clear.png"

    }

    else if(data.weather[0].main=="Rain"){
        weathericon.src="weather-app-img/images/rain.png"

    }
    else if(data.weather[0].main=="Drazzle"){
        weathericon.src="weather-app-img/images/drizzle.png"

    }

    else if(data.weather[0].main=="Mist"){
        weathericon.src="weather-app-img/images/mist.png"

    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

    
  }
}

   
  searchbtn.addEventListener("click", ()=>{

    checkwaether(searchbox.value);
  })
 


     

  




