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

//TODO: Active link
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

//?********Local Storage

localStorage.setItem("name", "bob");
localStorage.setItem("flex", "bob3");
localStorage.setItem("flex", "bob7");
console.log(localStorage.getItem("flex"));
localStorage.removeItem("name");
localStorage.removeItem("flex");
localStorage.setItem("huba", "5 + 5");
