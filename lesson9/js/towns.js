const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
})
    .then(function (jsonObject) {

        const towns = jsonObject['towns'];
        for (let i = 0; i < 3; i++) {
            let div = document.createElement('div');
            let card = document.createElement('section');
            let fig = document.createElement('figure');
            let h2 = document.createElement('h2');
            let h6 = document.createElement('h6');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');

            
            h2.textContent = towns[i].name;
            h6.textContent = towns[i].motto;
            year.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            image.setAttribute('src', "images/" + towns[i].photo);
            image.setAttribute('alt', "picture of " + towns[i].name);

            card.appendChild(h2);
            card.appendChild(h6);
            card.appendChild(year);
            card.appendChild(population);
            card.appendChild(rainfall);
            fig.appendChild(image);

            div.appendChild(document.querySelector('article.towns').appendChild(card));
            div.appendChild(document.querySelector('article.towns').appendChild(fig));
            document.querySelector('article.towns').appendChild(div);

        }
    });