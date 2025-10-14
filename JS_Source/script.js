document.addEventListener("DOMContentLoaded", () => {
  // ===== LEARN MORE TOGGLE =====
  const learnMoreLink = document.getElementById("learn-more-link");
  const extraFacts = document.getElementById("extra-facts");

  if (learnMoreLink && extraFacts) {
    learnMoreLink.addEventListener("click", (e) => {
      e.preventDefault();
      const isHidden = window.getComputedStyle(extraFacts).display === "none";
      extraFacts.style.display = isHidden ? "block" : "none";
      learnMoreLink.textContent = isHidden ? "Show Less" : "Learn More";
    });
  }

  // ===== ACCORDION TOGGLE =====
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(header => {
    const icon = header.querySelector(".accordion-icon");
    const content = header.nextElementSibling;
    content.style.display = "none";

    header.addEventListener("click", () => {
      const isVisible = content.style.display === "block";
      content.style.display = isVisible ? "none" : "block";
      icon.classList.toggle("fa-plus", isVisible);
      icon.classList.toggle("fa-minus", !isVisible);
    });
  });

  // ===== HAMBURGER MENU TOGGLE =====
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  if (hamburgerIcon && mobileMenu) {
    hamburgerIcon.addEventListener("click", () => {
      const isOpen = hamburgerIcon.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });
  }

  // ===== RESPONSIVE HANDLER =====
  const mediaQuery = window.matchMedia("(min-width: 769px)"); // Adjusted to 769px to align with CSS
  const desktopNav = document.querySelector("header nav");

  const handleMediaChange = (e) => {
    if (e.matches) {
      // Desktop view: hide mobile menu and hamburger, show desktop nav
      mobileMenu?.classList.remove("open");
      hamburgerIcon?.classList.remove("open");
      hamburgerIcon.style.display = "none";
      desktopNav.style.display = "flex";
    } else {
      // Mobile view: show hamburger, hide desktop nav
      hamburgerIcon.style.display = "block";
      desktopNav.style.display = "none";
    }
  };

  mediaQuery.addEventListener("change", handleMediaChange);
  handleMediaChange(mediaQuery); // Run on initial load
});