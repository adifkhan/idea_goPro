/* ========== toggle icon navbar ==============  */
let menuIcon = document.querySelector("#menu_dropdown");
let navbar = document.querySelector(".mini_navbar");
let searchIcon = document.querySelector(".search_icon");
let searchBox = document.querySelector(".search_box");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active_navbar");
};
searchIcon.onclick = () => {
  searchBox.classList.toggle("active_search");
};
