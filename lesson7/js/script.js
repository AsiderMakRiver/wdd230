//**TODO:****************  The time **********
const a = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById("lastupdated").textContent = a.toLocaleDateString("en-US", options);

//TODO: **          The nav hamburger script
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

//TODO: **             Active link
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

//TODO: **            Local Storage
/*const millisecondsToday = new Date().getTime(); //Milliseconds today from 1 january 1970
localStorage.setItem("millisecondsTime", millisecondsToday); //Put that information to Local Storage
const box1 = localStorage.getItem("milisecondsTime", millisecondsToday); //Get information from Local Storage to JS
const millisecondsOneDay = 86400000;
localStorage.setItem("millisecondsOneDay", 86400000);
const box2 = millisecondsToday;
console.log(box1);
console.log(box2);
*/

// localStorage.setItem("person", JSON.stringify(object));
// console.log(localStorage.setItem("person", JSON.stringify(object)));

// const raw = localStorage.getItem("person");
// const person = JSON.parse(raw);
// person.name = "Vladilen";
// console.log(person);

//!:**                    A hint
//?** determine days between stored date and visit date... today
//?** determine today date
const millisecondToDays = 86400000; //? divede the difference between dates un milli
//?** Last visit ... stored in localStorage
const lastVisit = localStorage.getItem("lastvisit");
//?** deternine number of days (lastVisit - Date.now() / millisecondsToDays)  .toFixed(0)
//?** display to whenever I want to
//?** need update the stored date     localStorage.setItem('lastvisit', Date.now());

//*************************************! Local Storage
/* Calculates and alerts the user on how many days since their
last visit to the Gallery or welcomes them if this is their initial vist.
*/
let savedDate = new Date(localStorage.getItem("savedDate"));
const oneDay = 1000 * 60 * 60 * 24;
let difTime = d.getTime() - savedDate.getTime();
let difDays = Math.round(difTime / oneDay);
if ("savedDate" in localStorage) {
  document.getElementById("visitext").innerHTML = "Welcome Back - your last visit was " + difDays + " days ago.";
} else {
  document.getElementById("visitext").innerHTML = "Welcome to our Gallery";
}
saveDate();
function saveDate() {
  localStorage.setItem("savedDate", d);
}
