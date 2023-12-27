/* ========== toggle ==============  */
let menuIcon = document.querySelector("#menu_dropdown");
let navbar = document.querySelector(".mini_navbar");
let searchIcon = document.querySelector(".search_icon");
let searchBox = document.querySelector(".search_box");
let miniSearchIcon = document.querySelector(".mini_search_icon");

/*=== remove class list on click event on document body ===*/
document.body.onclick = (e) => {
  e.stopPropagation();
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active_navbar");
  searchBox.classList.remove("active_search");
};

/*=== toggle class list on click event on menu icon ===*/
menuIcon.onclick = (e) => {
  e.stopPropagation();
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active_navbar");
};

/*=== toggle class list on click event on search icon ===*/
searchIcon.onclick = (e) => {
  e.stopPropagation();
  searchBox.classList.toggle("active_search");
};

/*=== toggle class list on click event on mini menu search icon ===*/
miniSearchIcon.onclick = (e) => {
  e.stopPropagation();
  searchBox.classList.toggle("active_search");
};

/*=== stiop event on click event on search box ===*/
searchBox.onclick = (e) => {
  e.stopPropagation();
};
