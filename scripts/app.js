let menuOpen = false;
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu");

function sendFormInfo() {
  alert("Your message has been sent!");
}

function toggleMenu() {
  if (!menuOpen) {
    menuOpen = true;
    menu.style.right = "0%";
  } else {
    menuOpen = false;
    menu.style.right = "-100%";
  }
}

window.addEventListener("load", function () {
  menuBtn.addEventListener("click", function () {
    toggleMenu();
  });
});
