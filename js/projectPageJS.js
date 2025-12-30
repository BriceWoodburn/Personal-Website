// --- Image Carousel ---
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// --- Swipe Support ---
const slider = document.querySelector(".slideshow-container");
let startX = 0;
let endX = 0;

slider.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const swipeDistance = endX - startX;

  if (swipeDistance > swipeThreshold) {
    plusSlides(-1);
  } else if (swipeDistance < -swipeThreshold) {
    plusSlides(1);
  }
}

// --- Fade-in ---
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => observer.observe(section));
});


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