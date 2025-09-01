
function wetter(){
   
    const country = document.getElementById("input").value.toUpperCase();
    const apiKay = "a33db39905a12b66496f70d309f7ecb0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKay}`

    
    



 if(country ==""){

    alert("Bitte gebe was in text feld ")

}else{


fetch(url)







    .then (response => response.json())

    .then (data => {
        console.log(data);
        let temp = data.main.temp 
        let celsius = temp - 273.15;
        celsius = celsius.toFixed(0); 
        let weatherDescription = data.weather[0].main;
        const humidity = data.main.humidity;
        const wind = data.wind.speed
        let statusPic =data.weather[0].icon;
        let urlIcons = `https://openweathermap.org/img/wn/${statusPic}@2x.png`;
        console.log(urlIcons)

      

        if(weatherDescription === "Clouds"){
            weatherDescription = "Bewölkt"
            
            

            
        }else if (weatherDescription === "Clear"){
            weatherDescription = "Klar"
        }else if (weatherDescription === "Rain"){
            weatherDescription = "Regen"
        }else if (weatherDescription === "Snow"){
            weatherDescription = "Schnee"
        }else if (weatherDescription === "Drizzle"){
            weatherDescription = "Nieseln"
        }else if (weatherDescription === "Thunderstorm"){
            weatherDescription = "Gewitter"
        }else if (weatherDescription === "mist"){
            weatherDescription = "Nebel"
        }


        document.getElementById("country").innerHTML =`Wetter in ${country} C°`
        document.getElementById("temp").innerHTML =`Temperatur: ${celsius} C°`;
        document.getElementById("wetter").innerHTML = `Wetter : ${weatherDescription}`  ;
        document.getElementById("img").src = urlIcons;
        document.getElementById("luftfeuchtigkeit").innerHTML =`Luftfeuchtigkeit: ${humidity} %`;
        document.getElementById("wind").innerHTML =`Windgeschwindikeit: ${wind} %`;

         document.getElementById("input").value="";



    })





}

}
 