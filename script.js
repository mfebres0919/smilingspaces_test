const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".dropdown-toggle");

    toggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        const dropdown = toggle.nextElementSibling;

        // Close any other open dropdowns
        document.querySelectorAll(".dropdown").forEach(d => {
          if (d !== dropdown) d.classList.remove("open");
        });

        // Toggle this one
        dropdown.classList.toggle("open");
      });
    });
  });