//TODO The time
const a = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById("lastupdated").textContent = a.toLocaleDateString("en-US", options);

//TODO The nav hamburger script
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

//TODO: The banner
const today = new Date();
const day = today.getDay();
console.log(day);

if (day != 5) {
  document.getElementById("banner").classList.toggle("hideBanner");
}
