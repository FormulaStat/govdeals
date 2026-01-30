// Simple form handler for contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const status = document.getElementById("formStatus");
  status.textContent = "Thank you! Your message has been sent.";
  status.style.color = "green";

  // Reset form
  this.reset();
});
