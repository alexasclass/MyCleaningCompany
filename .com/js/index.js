// This section select the toggle button and dropdown menu
const toggleButton = document.getElementById('toggle-menu');
const menuDropdown = document.querySelector('.menu-dropdown');
const navLinks = document.querySelector('.nav-links');

// Adding event listener for the togglebutton
toggleButton.addEventListener('click', () => {
  // Toggle visibility by adding or removing menu
  menuDropdown.classList.toggle('show-menu');
  navLinks.classList.toggle('show-menu');
});
// Sticky Header on Scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('sticky'); 
  } else {
    
    header.classList.remove('sticky');
  }
});
window.addEventListener('load', () => {
  const navLinks = document.querySelector('.nav-links');
  if (window.innerWidth >= 768) {
    navLinks.classList.add('show-menu'); // Ensure visibility for large screens
  } else {
    navLinks.classList.remove('show-menu');
  }
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Handle form submission
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission

      // Get user inputs
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.querySelector("input[name='phone']").value;
      const message = document.getElementById("message").value;

      // Get selected options from the dropdown
      const maintenanceSelect = document.getElementById("mantenance");
      const selectedOptions = Array.from(maintenanceSelect.selectedOptions).map(option => option.value);

      // Output the results (for demonstration purposes)
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Message:", message);
      console.log("Selected Services:", selectedOptions);

      // Display an alert with a confirmation message
      alert(`Thank you, ${name}! We'll contact you shortly.`);
  });
});
// Testimonials array
const testimonials = [
  {
      text: "The cleaning team was absolutely amazing! My house has never been this spotless.",
      author: " Sarah M., Kansas City"
  },
  {
      text: "Very professional team , efficient, and super friendly. defenetly recommend!",
      author: "Katrina, Lee's Summit Missouri"
  },
  {
      text: "The team has been performing satisfactorily in their cleaning tasks for a few months,but they were late by more than 10 minutes on two occasions. ",
      author: "Dan. Leawood KS"
  },
  {
      text: "Highly recommend!",
      author: "John D., Missouri"
  },
  {
      text: "I’ve used their services for years, and they always exceed my expectations.",
      author: " Emily R., Overland Park"
  },
];

// DOM elements
const testimonialContainer = document.getElementById("testimonial-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentTestimonialIndex = 0;

// Function to display a testimonial
function showTestimonial(index) {
  const testimonial = testimonials[index];
  testimonialContainer.innerHTML = `
      <blockquote class="testimonial">
          <p>"${testimonial.text}"</p>
          <footer>${testimonial.author}</footer>
      </blockquote>
  `;
}

// Event listeners for buttons
prevButton.addEventListener("click", () => {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
});

nextButton.addEventListener("click", () => {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
});

// Initialize with the first testimonial
showTestimonial(currentTestimonialIndex);
