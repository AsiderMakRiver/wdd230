//ADD the key and change units to imperial
const apiURL =
  "//api.openweathermap.org/data/2.5/weather?id=625144&appid=d2fdc86a9958706a70d9f603bde9f1c3&units=metric";
//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    document.getElementById("place").innerHTML = weatherInfo.name;
    document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;
    document.getElementById("windSpeed").innerHTML = weatherInfo.wind.speed;
    const iconcode = weatherInfo.weather[0].icon;
    // console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    // console.log(icon_path);
    document.getElementById("weather_icon").src = icon_path;
  }); //end of "then" fat arrow function
//TODO: **                           ** Another program
const mydate = new Date();
console.log(mydate);
const y = mydate.getDay();
console.log(y);
const myweekday = new Array(7);
myweekday[0] = "Monday";
myweekday[1] = "Tuesday";
myweekday[2] = "Wednesday";
myweekday[3] = "Thursday";
myweekday[4] = "Friday";
myweekday[5] = "Saturday";
myweekday[6] = "Sunday";
console.log(myweekday[0]);
