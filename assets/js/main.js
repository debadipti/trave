// menu icon variable
var menuIcon = document.getElementById("bars");
var mainMenu = document.querySelector(".nav-links");
// event listener for menu icon
menuIcon.addEventListener("click", menuOpen);
// menuOpen function
function menuOpen(e) {
  if (mainMenu.classList.contains("show")) {
    mainMenu.classList.remove("show");
    mainMenu.classList.add("hide");
  } else {
    mainMenu.classList.add("show");
    mainMenu.classList.remove("hide");
  }
}
