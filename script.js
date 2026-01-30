// ====== Contact Form Handling ======
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Simple feedback message
    status.textContent = "✅ Thank you! Your message has been sent.";
    status.style.color = "green";

    // Reset form fields
    form.reset();
  });
});

// ====== Mobile Navigation Toggle ======
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const toggleBtn = document.querySelector(".nav-toggle");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Auto-close menu when a link is clicked
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
});
