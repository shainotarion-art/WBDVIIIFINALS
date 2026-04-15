
const form = document.getElementById("checkout-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

  window.location.href = "tickets.html";
});