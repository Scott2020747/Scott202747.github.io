// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.style.display === "flex";
    navLinks.style.display = isOpen ? "none" : "flex";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  // Close menu after clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      if (window.innerWidth <= 720) {
        navLinks.style.display = "none";
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form: opens email client with prefilled message
function sendEmail(e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value.trim();
  const company = form.company.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const to = "contact@ohrcs.com"; // <-- CHANGE THIS to your real email
  const subject = encodeURIComponent(`OHR Enquiry from ${name}${company ? " (" + company + ")" : ""}`);
  const body = encodeURIComponent(
`Name: ${name}
Company: ${company}
Email: ${email}

Message:
${message}
`);

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  return false;
}
