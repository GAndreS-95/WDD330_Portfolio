let townName = document.querySelector("#townID").textContent;
let townid;

if (townName == "Preston") {
  townid = 5604473;
}
else if (townName == "Soda Springs") {
  townid = 5607916;
}
else if (townName == "Fish Haven") {
  townid = 5585000;
}
//console.log(townid);


const apiURL = '//api.openweathermap.org/data/2.5/weather?id=' + [townid] + '&appid=f11edeb9ff4d88ed0eeaf0ebcbc06bb8&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //console.log(weatherInfo);
    
    document.querySelector('#description').innerHTML=weatherInfo.weather[0].description;
    document.querySelector('#temp').innerHTML=weatherInfo.main.temp;
    document.querySelector('#humidity').innerHTML=weatherInfo.main.humidity;
    document.querySelector('#speed').innerHTML=weatherInfo.wind.speed;

    let tempNum = weatherInfo.main.temp;
    let speedNum = weatherInfo.wind.speed;
    let windChill = 35.74 + (0.6215 * tempNum) - (35.75 * Math.pow(speedNum, 0.16)) + (0.4275 * tempNum * Math.pow(speedNum, 0.16));
    windChill = Math.round(windChill);
    //console.log(tempNum);
    //console.log(speedNum);
    //console.log(windChill);

    if (tempNum <= 50 && speedNum > 3) {
        document.querySelector("#chill").textContent = windChill + "\xB0F";
    } 
    else {
        document.querySelector("#chill").textContent = "N/A";
    } 
 });

