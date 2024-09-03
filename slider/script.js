/* script.js */

let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let timer = null;
const slideInterval = 5000; // 5 seconds

// Initialize the slideshow
function initSlideshow() {
  showSlide(slideIndex);
  timer = setInterval(nextSlide, slideInterval);

  // Add event listeners for navigation buttons
  document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });

  document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  // Add event listeners for dots
  Array.from(dots).forEach(dot => {
    dot.addEventListener('click', (e) => {
      let index = parseInt(e.target.getAttribute('data-slide')) - 1;
      showSlide(index);
      resetTimer();
    });
  });
}

// Show a specific slide
function showSlide(index) {
  if (index >= slides.length) { slideIndex = 0; }
  if (index < 0) { slideIndex = slides.length - 1; }

  // Hide all slides
  Array.from(slides).forEach(slide => {
    slide.style.display = "none";
  });

  // Remove active class from all dots
  Array.from(dots).forEach(dot => {
    dot.classList.remove("active");
  });

  // Display the current slide and activate the corresponding dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

// Navigate to the next slide
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// Navigate to the previous slide
function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Reset the timer when user interacts manually
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, slideInterval);
}

// Start the slideshow when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initSlideshow);
            