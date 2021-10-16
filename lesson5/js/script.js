//TODO The time
let a = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById("lastupdated").textContent = a.toLocaleDateString("en-US", options);

//document.querySelector("#lastupdated").textContent = new Date().getFullYear();
//In one string

/*
const lastupdated = document.getElementById("lastupdated");
lastupdated.textContent = new Date().getFullYear();
In two strings*/

/*
const - переменная
lastupdated - название переменной
document - обращается к документу
.getElementById - к какому элементу? К какому айди?
.querySelector("#...")

textContent - это как innerHTML
*/
//TODO The nav hamburger script
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

//.classList - look for a child name sally and tell me what classes have been assigned.
//console.log(document.getElementById("sally").classList); - we can find out what a class name is
//Change the class name whenever the button is clicked.
//sally = primaryNav
//document.getElementById("primaryNav").classList.toggle("hide"); - Add the class hide, or if hide is already the class name it will remove it.

//TODO: The banner
var today = new Date();
var day = today.getDay();
console.log(day);

function showBanner(day) {
  if (day == 5) {
    document.getElementById("banner").style.display = "block";
    // document.getElementById("banner").list.removeChild("hideBanner");
  } else {
    document.getElementById("banner").style.display = "block";
  }
}

// if a (today is Friday)
// else .style.display = "block"
