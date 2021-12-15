const requestURL = "https://asidermakriver.github.io/wdd230/lesson14/json/listOfCompanies.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const localBusiness = jsonObject["localBusiness"];
    for (let i = 0; i < localBusiness.length; i++) {
      // if (i !== 6 && i !== 0 && i !== 2) continue;
      // The order which I want! 6, 0, 2.
      //****************************************************Declare Variables*************
      let sectionHTML = document.createElement("section");
      let articleHTML = document.createElement("article");
      let townName = document.createElement("h2");
      let townMotto = document.createElement("p");
      let asideHTML = document.createElement("aside");
      let townFound = document.createElement("p");
      let townCurPopulation = document.createElement("p");
      let townAvRainFall = document.createElement("p");
      let figureHTML = document.createElement("figure");
      let imageHTML = document.createElement("img");
      let figcaption = document.createElement("figcaption");
      // let altForImg = "picture of city";
      //****************************************************Assign Variables***************
      townName.textContent = localBusiness[i].name;
      townMotto.textContent = localBusiness[i].motto;
      townFound.textContent = "Year Founded: " + localBusiness[i].yearFounded;
      townCurPopulation.textContent = "Population: " + localBusiness[i].currentPopulation;
      townAvRainFall.textContent = "Annual Rain Fall: " + localBusiness[i].averageRainfall;
      imageHTML.setAttribute("src", `images/${localBusiness[i].photo}`);
      // *******************************************Push Variables Into the HTML Code******
      sectionHTML.appendChild(articleHTML);
      articleHTML.appendChild(townName);
      articleHTML.appendChild(townMotto);
      sectionHTML.appendChild(asideHTML);
      asideHTML.appendChild(townFound);
      asideHTML.appendChild(townCurPopulation);
      asideHTML.appendChild(townAvRainFall);
      sectionHTML.appendChild(figureHTML);
      figureHTML.appendChild(imageHTML);
      figureHTML.appendChild(figcaption).classList.add("alt");
      document.querySelector("div.homeInfo").appendChild(sectionHTML).classList.add("homeInfoSection");
      // document.querySelector("figcapture.alt").appendChild(altForImg);
    }
  });
