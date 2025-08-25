const apikey="46c9daaf17fa3d9cac153667a76ce002"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const inputEl = document.querySelector("input")
const searchEl=document.getElementById("search-icon")
const weatherEl=document.querySelector(".weatherapp")

async function checkweather(city) {
    try{
        const responce=await fetch(apiurl +city+ `&appid=${apikey}`); 
        const data=await responce.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";

        if(data.weather[0].main =="Clouds"){
            weatherEl.src="images/clouds.png";

        }else if(data.weather[0].main == "Clear"){
            weatherEl.src="images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherEl.src="images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherEl.src="images/drizzle.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherEl.src= "images/snow.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherEl.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Wind"){
            weatherEl.src = "images/wind.png";
        }


    }
    catch (error){
      console.log(`error`,error);
    }
}

searchEl.addEventListener("click",()=>{
    checkweather(inputEl.value);
})
