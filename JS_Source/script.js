document.addEventListener("DOMContentLoaded", () => {
  const learnMoreLink = document.getElementById("learn-more-link");
  const extraFacts = document.getElementById("extra-facts");

  if (learnMoreLink && extraFacts) {
    learnMoreLink.addEventListener("click", (e) => {
      e.preventDefault();

      const isHidden =
        extraFacts.style.display === "none" || extraFacts.style.display === "";

      extraFacts.style.display = isHidden ? "block" : "none";
      learnMoreLink.textContent = isHidden ? "Show Less" : "Learn More";
    });
  }
});
