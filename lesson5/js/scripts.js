function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(now);

datefield.textContent = fulldate;

//banner//
const today = new Date();
console.log(today);

const dayNumber = today.getDay();
console.log(dayNumber);

const element = document.getElementById("banner")

if (dayNumber == 5) {
    element.classList.add("showme");
} 
else {
    element.classList.add("hideme");
}