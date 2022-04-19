fetch("json/directory.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);

    const directory = jsonObject['directory'];
    //console.log(directory);

    for (let i = 0; i < directory.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let image = document.createElement('img')
      let location = document.createElement('p');
      let phone_num = document.createElement('p');
      let site = document.createElement('p');

      h2.textContent = directory[i].name;
      location.textContent = "Address:  " + directory[i].address;
      phone_num.textContent = "Phone: " + directory[i].phone;
      site.textContent = "Website: " + directory[i].website;

      if (directory[i].logo == "none") {
        //console.log("no logo");
        card.appendChild(h2);
      }
      else {
        image.setAttribute('src', "images/" + directory[i].logo);
        image.setAttribute('alt', directory[i].name + " logo");
        card.appendChild(h2);
        card.appendChild(image);
      }

      //card.appendChild(h2);
      //card.appendChild(image);
      card.appendChild(location);
      card.appendChild(phone_num);
      card.appendChild(site);
    
      document.querySelector('div.cards').appendChild(card);
    }
});