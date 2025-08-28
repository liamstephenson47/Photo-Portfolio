// script.js

const track = document.getElementById("carouselTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const slides = track.querySelectorAll("img");

let index = 0;
let slideWidth = slides[0].clientWidth;

const updateCarousel = () => {
  track.style.transform = `translateX(-${index * slideWidth}px)`;
};

const nextSlide = () => {
  index = (index + 1) % slides.length;
  updateCarousel();
};

const prevSlide = () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Autoplay
let autoplay = setInterval(nextSlide, 3000);

// Pause autoplay on hover
track.addEventListener("mouseenter", () => clearInterval(autoplay));
track.addEventListener("mouseleave", () => {
  autoplay = setInterval(nextSlide, 3000);
});

// Handle window resize
window.addEventListener("resize", () => {
  slideWidth = slides[0].clientWidth;
  updateCarousel();
});
