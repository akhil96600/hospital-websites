const menu = document.querySelector("#menu__btn");
const navbar = document.querySelector(".navbar");
const mongoose = require("mongoose");
const Appointment = require("../models/Appointment");


menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
function watchVideo() {
  alert("Redirecting to the hospital's promotional video...");
  window.location.href = "https://www.youtube.com/"; // Change with actual video URL
}

function locateUs() {
  alert("Opening location in Google Maps...");
  window.open("https://maps.app.goo.gl/TzPZoyui9hPe3Gdo6", "_blank"); // Change with actual location link
}
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
