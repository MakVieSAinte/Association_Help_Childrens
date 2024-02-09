// Scripts Pour toggle le menu de navigation en version mobile

const hamburgerToggler = document.querySelector(".hamburger");

const navLinksContainer = document.querySelector(".navlinks-container");

const overlay = document.querySelector(".overlay");

const toggleNav = (e) => {
  hamburgerToggler.classList.toggle("open");

  const ariaToggle =
    hamburgerToggler.getAttribute("aria-expanded") === "true"
      ? "false"
      : "true";

  hamburgerToggler.setAttribute("aria-expanded", ariaToggle);

  navLinksContainer.classList.toggle("open");
  overlay.classList.toggle("active");
};

hamburgerToggler.addEventListener("click", toggleNav);
overlay.addEventListener("click", toggleNav);

// Scroll reveal anim

const sr = ScrollReveal({
  origin: "bottom",
  distance: "10px",
  duration: 3000,
  delay: 600,
  // reser: true,
});

sr.reveal(".s-header", {
  interval: 90,
  delay: 10,
  distance: "30px",
  origin: "top",
});

sr.reveal("un .card", {
  interval: 120,
  delay: 100,
  distance: "120px",
  origin: "top",
});

sr.reveal("section", {
  interval: 40,
  delay: 40,
  distance: "45px",
  origin: "bottom",
});

sr.reveal(".container-cards .card", {
  interval: 70,
  delay: 100,
  distance: "35px",
  origin: "bottom",
});

sr.reveal("footer", {
  delay: 60,
  distance: "45px",
  origin: "top",
});

// 925DEV
