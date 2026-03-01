const form = document.getElementById("bookingForm");
const checkinInput = document.getElementById("checkin");
const checkoutInput = document.getElementById("checkout");
const guestsInput = document.getElementById("guests");
const roomTypeInput = document.getElementById("roomType");
const specialRequestInput = document.getElementById("specialRequest");
const message = document.getElementById("message");
const bookingCountDisplay = document.getElementById("bookingCount");

let bookingCounter = 0;

// Disable past dates
const today = new Date().toISOString().split("T")[0];
checkinInput.setAttribute("min", today);

// Dynamic checkout restriction
checkinInput.addEventListener("change", function () {
  checkoutInput.value = "";
  checkoutInput.setAttribute("min", checkinInput.value);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  message.className = "";

  const checkinDate = new Date(checkinInput.value);
  const checkoutDate = new Date(checkoutInput.value);
  const guests = parseInt(guestsInput.value);
  const roomType = roomTypeInput.value;
  const specialRequest = specialRequestInput.value;

  if (!checkinInput.value || !checkoutInput.value) {
    message.textContent = "Please select both dates!";
    message.className = "error";
    return;
  }

  if (checkoutDate <= checkinDate) {
    message.textContent = "Check-out date must be after check-in date!";
    message.className = "error";
    return;
  }

  if (guests <= 0 || guests > 10) {
    message.textContent = "Guest count must be between 1 and 10!";
    message.className = "error";
    return;
  }

  if (!roomType) {
    message.textContent = "Please select a room type!";
    message.className = "error";
    return;
  }

  message.textContent = `Booking Confirmed 🎉 
Room: ${roomType} | Guests: ${guests} 
Special Request: ${specialRequest ? specialRequest : "None"}`;

  message.className = "success";

  bookingCounter++;
  bookingCountDisplay.textContent = bookingCounter;

  form.reset();
});
