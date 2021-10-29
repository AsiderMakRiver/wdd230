//TODO: The banner
const today = new Date();
const day = today.getDay();
if (day != 5) {
  document.getElementById("banner").classList.toggle("hideBanner");
}
