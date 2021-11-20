document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navUL = document.getElementById("nav-ul"); // Selects the UL that contains the list

  // Triggers the nav list using the styling in nav-style.css
  hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
  });
})