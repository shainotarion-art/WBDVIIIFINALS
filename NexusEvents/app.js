// YEAR
document.querySelectorAll("[data-year]").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// EVENT SELECT
function selectEvent(eventName) {
  localStorage.setItem("event", eventName);
  window.location.href = "checkout.html";
}