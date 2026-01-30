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
  const nav = document.querySelector("nav");
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "☰ Menu";
  toggleBtn.classList.add("nav-toggle");

  // Insert toggle button before nav links
  nav.insertBefore(toggleBtn, nav.firstChild);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});
