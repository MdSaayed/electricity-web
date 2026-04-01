const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav a");
const enquiryButtons = document.querySelectorAll(".enquiry-button");
const enquiryBanner = document.getElementById("enquiry-banner");
const cartCount = document.getElementById("cart-count");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

let enquiryCount = 0;

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "Close" : "Menu";
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileNav && menuToggle) {
      mobileNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "Menu";
    }
  });
});

enquiryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    enquiryCount += 1;
    if (cartCount) {
      cartCount.textContent = String(enquiryCount);
    }
    if (enquiryBanner) {
      enquiryBanner.classList.remove("hidden");
    }
    button.textContent = "Added";
  });
});

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill the required fields.";
      formMessage.style.color = "#b42318";
      return;
    }

    formMessage.textContent = "Enquiry captured in this HTML demo. Connect a backend or email handler to send it.";
    formMessage.style.color = "#0f7b6c";
    contactForm.reset();
  });
}
