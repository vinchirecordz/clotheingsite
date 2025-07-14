const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  // Simple validation
  if (!name || !email || !subject || !message) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  // Success message simulation
  formMessage.style.color = "green";
  formMessage.textContent = "Your message has been sent successfully!";

  // Clear form
  document.getElementById("contactForm").reset();
});
