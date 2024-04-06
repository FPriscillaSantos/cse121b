let apiKey = "b94871b1c5883343f564fce008a7b0a1";

function displayData(data){
    console.log(data);
    document.querySelector(".city").innerHTML = "Weather in " + data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
}

async function searchCity(city){
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
        city + 
        "&appid=" + 
        apiKey + 
        "&lang=pt_br" +
        "&units=metric"
    )
    .then(response => response.json());

    displayData(data);
}

function clickOnButton(){
   let city = document.querySelector(".input-city").value;
   searchCity(city);
}
