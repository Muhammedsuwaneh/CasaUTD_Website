const hamburgerMenu = document.querySelector("#hamburger");
const topnav = document.querySelector(".top");
const logo = document.querySelector("#logo");
const nav = document.querySelector("#navbar ul");
const closebtn = document.querySelector('#closebtn')

hamburgerMenu.addEventListener("click", function () {
  topnav.classList.add("mobile-top");
  logo.classList.add("disp");
  nav.style.display = 'block';
  closebtn.style.display = 'block';
  hamburgerMenu.style.display = 'none';
});

closebtn.addEventListener("click", function () {
  topnav.classList.remove("mobile-top");
  logo.classList.remove("disp");
  nav.style.display = 'none';
  closebtn.style.display = 'none';
  hamburgerMenu.style.display = 'block';
});
