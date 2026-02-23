// ===============================
// Performance Rehab Script
// Minimal, clean, production-safe
// ===============================


// 1️⃣ Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.style.display === "block";
    mobileNav.style.display = isOpen ? "none" : "block";
    menuBtn.setAttribute("aria-expanded", String(!isOpen));
  });

  // Close mobile menu when clicking a link
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.style.display = "none";
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}


// 2️⃣ Smooth Scroll (extra fallback support)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  });
});


// 3️⃣ Header Shadow On Scroll (adds premium feel)
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 10px 40px rgba(0,0,0,0.4)";
  } else {
    header.style.boxShadow = "none";
  }
});


// 4️⃣ Auto Update Footer Year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
