const tempNum = parseFloat(document.getElementById("temp").textContent);
//console.log(tempNum);

const speedNum = parseFloat(document.getElementById("speed").textContent);
//console.log(speedNum);

let windChill = 35.74 + (0.6215 * tempNum) - (35.75 * Math.pow(speedNum, 0.16)) 
                + (0.4275 * tempNum * Math.pow(speedNum, 0.16));
//console.log(windChill);
windChill = Math.round(windChill);
//console.log(windChill);


if (tempNum <= 50 && speedNum > 3) {
    document.getElementById("chill").textContent = "Wind Chill is "+windChill+"\xB0F";
} 
else {
    document.getElementById("chill").textContent = "No Wind Chill Today";
} 