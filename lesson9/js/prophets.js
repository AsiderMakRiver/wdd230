const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let name_surname = document.createElement("h2");
      let dateOfBirth = document.createElement("h4");
      let dateOfPlace = document.createElement("h4");
      let image = document.createElement("img");
      // let primg = image.setAttribute("src", prophets[i].imageurl);
      name_surname.textContent = prophets[i].name + " " + prophets[i].lastname;
      dateOfBirth.textContent = "Date of Birth: " + prophets[i].birthdate;
      dateOfPlace.textContent = "Place of Birth: " + prophets[i].birthplace;
      image.setAttribute("src", prophets[i].imageurl);
      // *********************************************************************************
      card.appendChild(name_surname);
      card.appendChild(dateOfBirth);
      card.appendChild(dateOfPlace);
      card.appendChild(image);
      document.querySelector("div.cards").appendChild(card);

      // prophets.forEach((prophet) => {
      //   let card = documnet.createElement("section");
      //   let h2 = document.createElement("h2");
      //   h2.innerHTML = prophet.name + ' <span style="color: navy;">' + prophet.lastname + "</span>"; // challenge
      //   card.appendChild(h2);
      //   document.querySelector("div.cards").appendChild(card);
    }
    let primg = image.setAttribute("src", prophets[i].imageurl);
  });
