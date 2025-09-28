document.addEventListener("DOMContentLoaded", () => {
  // Learn More toggle (for extra facts)
  const learnMoreLink = document.getElementById("learn-more-link");
  const extraFacts = document.getElementById("extra-facts");

  if (learnMoreLink && extraFacts) {
    learnMoreLink.addEventListener("click", (e) => {
      e.preventDefault();
      const isHidden = extraFacts.style.display === "none" || extraFacts.style.display === "";
      extraFacts.style.display = isHidden ? "block" : "none";
      learnMoreLink.textContent = isHidden ? "Show Less" : "Learn More";
    });
  }

  // Accordion toggle (for habitats)
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    const icon = header.querySelector(".accordion-icon");
    const content = header.nextElementSibling;

    // Hide content by default
    content.style.display = "none";

    header.addEventListener("click", () => {
      const isVisible = content.style.display === "block";

      // Toggle content
      content.style.display = isVisible ? "none" : "block";

      // Toggle icon class
      icon.classList.toggle("fa-plus", isVisible);
      icon.classList.toggle("fa-minus", !isVisible);
    });
  });
});
