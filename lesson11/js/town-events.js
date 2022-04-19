const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
})
    .then(function (jsonObject) {

        const towns = jsonObject['towns'];
        for (let i = 0; i < 4; i++) {

            let townName = document.querySelector("#townID").textContent;
            let x;
            if (townName == "Preston") {
                 x = 6;
            }

            else if (townName == "Soda Springs") {
                x = 0; 
            }

            else if (townName == "Fish Haven") {
                x = 2;
            }
            
            let h3 = document.createElement('h3');
            h3.textContent = towns[x].events[i];
            document.querySelector('section.events').appendChild(h3)
        }
    });