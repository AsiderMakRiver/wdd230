document.querySelector("#currentyear").textContent = new Date().getFullYear();

//document.querySelector("#lastupdated").textContent = document.lastModified();
//console.log(lastupdated);

let lastupdated = document.lastModified;
document.querySelector("#lastupdated").textContent = lastupdated;

//document.querySelector("#lastupdated").textContent = Last Updated: ${document.lastModified};

/* toLocaleDateString
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);*/

const a = new Date();
document.getElementById("demo").textContent = a.getFullYear();

const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };

document.getElementById("currentDate").textContent = a.toLocalDateString(en - US, options);
