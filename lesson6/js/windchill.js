//! f is the wind chill factor in Fahrenheit
//! t is the air average temperature in Fahrenheit
//! s is the wind speed in miles per hour.

function computeWindChill() {
  //Get two inputs: t and s.
  //Compute Wind Chill by this formula below.
  let t = document.getElementById("temperature").value;
  let s = document.getElementById("windSpeed").value;
  let f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);\
  console.log(f);
}
document.getElementById("output").innerHTML = f;
console.log(f);
