const navbar = document.querySelector(".top");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.add("nav-bg");

    if (!scrolled) {
      navbar.style.transform = "translateY(-50px)";
    }

    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 100);
  } else {
    navbar.classList.remove("nav-bg");
    scrolled = false;
  }
};
