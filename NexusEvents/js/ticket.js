
const name = localStorage.getItem("name");
const email = localStorage.getItem("email");
const event = localStorage.getItem("event");

document.getElementById("ticket-name").textContent = name;
document.getElementById("ticket-email").textContent = email;

// QR
QRCode.toCanvas(document.getElementById("qr"),
  `${name} - ${event}`,
  function (error) {
    if (error) console.error(error);
  }
);