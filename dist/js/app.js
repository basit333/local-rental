// Variables
const sectionServing = document.querySelector(".section-serving");
const headerHamburger = document.querySelector(".header__hamburger #check");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

// Mobile menu
if (mobileMenu && headerHamburger) {
  const handleMobileMenu = () => {
    mobileMenu.classList.toggle("show");
    scrollTo(0, 0);
    body.classList.toggle("disable")
  };
  headerHamburger.addEventListener("click", handleMobileMenu);
}

// Reveal Sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [ entry ] = entries;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.10,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});