// Reserved for future interactions
// Example: smooth scroll, animations, analytics hooks

document.addEventListener("DOMContentLoaded", () => {
  console.log("GovDeals Service homepage loaded successfully.");
});

// MOBILE NAV TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const inventoryData = [
  {
    id: 1,
    category: "new",
    year: "2024",
    price: 120000,
    title: "2024 Freightliner Cascadia",
    condition: "Brand New • Fully Inspected",
    image: "images/freightliner2024.jpg"
  },
  {
    id: 2,
    category: "used",
    year: "2023",
    price: 78000,
    title: "2023 Volvo VNL",
    condition: "Used • Certified Inspection",
    image: "images/volvo2023.jpg"
  },
  {
    id: 3,
    category: "rental",
    year: "2022",
    price: 45000,
    title: "2022 Kenworth T680",
    condition: "Rental • Maintained Fleet",
    image: "images/kenworth2022.jpg"
  }
];

const grid = document.getElementById("inventoryGrid");
const categoryFilter = document.getElementById("categoryFilter");
const yearFilter = document.getElementById("yearFilter");
const priceFilter = document.getElementById("priceFilter");

function renderInventory(data) {
  grid.innerHTML = "";

  data.forEach((truck, index) => {
    const card = document.createElement("div");
    card.className = "inventory-card";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <img src="${truck.image}" alt="${truck.title}">
      <div class="inventory-content">
        <h3>${truck.title}</h3>
        <p>${truck.condition}</p>
        <p>Year: ${truck.year}</p>
        <p class="price">$${truck.price.toLocaleString()}</p>
        <a href="#contact" class="quote-btn">Request a Quote</a>
      </div>
    `;

    grid.appendChild(card);
  });
}

function applyFilters() {
  let filtered = [...inventoryData];

  if (categoryFilter.value !== "all") {
    filtered = filtered.filter(t => t.category === categoryFilter.value);
  }

  if (yearFilter.value !== "all") {
    filtered = filtered.filter(t => t.year === yearFilter.value);
  }

  if (priceFilter.value !== "all") {
    filtered = filtered.filter(t => {
      if (priceFilter.value === "low") return t.price < 50000;
      if (priceFilter.value === "mid") return t.price >= 50000 && t.price <= 100000;
      if (priceFilter.value === "high") return t.price > 100000;
    });
  }

  renderInventory(filtered);
}

categoryFilter.addEventListener("change", applyFilters);
yearFilter.addEventListener("change", applyFilters);
priceFilter.addEventListener("change", applyFilters);

document.addEventListener("DOMContentLoaded", () => {
  renderInventory(inventoryData);
});


// CONTACT FORM HANDLING
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formStatus.textContent = "Sending your inquiry...";
  formStatus.style.color = "#2563eb";

  setTimeout(() => {
    formStatus.textContent =
      "Thank you. Your inquiry has been received. Our team will contact you shortly.";
    formStatus.style.color = "#16a34a";
    contactForm.reset();
  }, 1200);
});

// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();
