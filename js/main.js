// Select all circles
const circles = document.querySelectorAll('.parallax-circles .circle');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  circles.forEach(circle => {
    const speed = parseFloat(circle.getAttribute('data-speed'));
    circle.style.transform = `translate(-50%, calc(-50% + ${scrollTop * speed}px))`;
  });
});

// Fade in
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

faders.forEach(el => observer.observe(el));


// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("nav.nav-links");
const links = document.querySelectorAll("nav.nav-links a");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Collapse menu when a link is clicked
links.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});
