let tempNum = parseFloat(document.querySelector("#temp").textContent);
console.log(tempNum);

let speedNum = parseFloat(document.querySelector("#speed").textContent);
console.log(speedNum);

let windChill = 35.74 + (0.6215 * tempNum) - (35.75 * Math.pow(speedNum, 0.16)) 
                + (0.4275 * tempNum * Math.pow(speedNum, 0.16));
//console.log(windChill);
windChill = Math.round(windChill);
console.log(windChill);


if (tempNum <= 50 && speedNum > 3) {
    document.querySelector("#chill").textContent = "Wind Chill is "+windChill+"\xB0F";
} 
else {
    document.querySelector("#chill").textContent = "No Wind Chill Today";
} 