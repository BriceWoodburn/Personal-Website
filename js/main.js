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
  { threshold: 0.1 }
);

faders.forEach(el => observer.observe(el));
