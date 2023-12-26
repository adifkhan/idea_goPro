document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".dropdown-btn");
  const navList = document.querySelector("nav ul");

  dropdownButton.addEventListener("click", function () {
    navList.classList.toggle("show");
  });
});
