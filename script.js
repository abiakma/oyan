// document.addEventListener("DOMContentLoaded", function () {
//   const openBtn = document.getElementById("menu-open-button");
//   const closeBtn = document.getElementById("menu-close-button");
//   const navMenu = document.querySelector(".nav-menu");

//   openBtn.addEventListener("click", () => {
//     navMenu.style.display = "flex";
//   });

//   closeBtn.addEventListener("click", () => {
//     navMenu.style.display = "none";
//   });
// });


const openBtn = document.getElementById("menu-open-button");
const closeBtn = document.getElementById("menu-close-button");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.getElementById("overlay");

openBtn.onclick = () => {
  navMenu.style.display = "flex";
  overlay.style.display = "block";
};

closeBtn.onclick = () => {
  navMenu.style.display = "none";
  overlay.style.display = "none";
};
