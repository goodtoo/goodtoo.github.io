const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const yearEl = document.getElementById("year");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
