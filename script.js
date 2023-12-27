/* ========== toggle icon navbar ==============  */
let menuIcon = document.querySelector("#menu_dropdown");
let navbar = document.querySelector(".mini_navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active_navbar");
  console.log(menuIcon, navbar);
};
