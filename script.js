document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    const checkIfInView = () => {
      const windowHeight = window.innerHeight;
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        // Check if the element is in view
        if (elementTop < windowHeight - 50) {
          element.classList.add("show");
        }
      });
    };

    // Run the function when the user scrolls
    window.addEventListener("scroll", checkIfInView);

    // Also check if elements are already in view on load
    checkIfInView();
  });
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true; // Track form validity

        inputs.forEach(input => {
            if (!input.value.trim()) { // Check if the input is empty
                input.placeholder = 'Required'; // Change placeholder to "Required"
                input.classList.add('error'); // Optional: Add a class for styling
                isValid = false; // Set isValid to false
            } else {
                input.placeholder = input.placeholder.replace('Required', ''); // Reset placeholder
                input.classList.remove('error'); // Remove error class if input is valid
            }
        });

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if invalid
        }
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Increment the index
  slideIndex++;
  
  // If it's beyond the last slide, reset to the first slide
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show the current slide with fade-in effect
  slides[slideIndex-1].style.display = "flex";  

  // Set the function to repeat every 4 seconds
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
