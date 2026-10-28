'use strict';

// Q5 - Movie Ticket Booking
const bookingPatterns = {
  name: /^[A-Za-z]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  seats: /^(?:[1-9]|10)$/
};

function validateBooking(values) {
  const errors = {};
  for (const fieldName of Object.keys(bookingPatterns)) {
    if (!bookingPatterns[fieldName].test(String(values[fieldName]).trim())) {
      errors[fieldName] = fieldName === 'seats'
        ? 'Choose between 1 and 10 seats.'
        : `Enter a valid ${fieldName}.`;
    }
  }
  return errors;
}

function createBookingForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <h2>Movie Ticket Booking</h2>
    <label>Name <input name="name" required></label><br>
    <label>Email <input name="email" type="email" required></label><br>
    <label>Seats (1-10) <input name="seats" type="number" min="1" max="10" required></label><br>
    <button type="submit">Book Tickets</button>
    <pre data-ticket></pre>
  `;
  form.noValidate = true;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const booking = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      seats: form.elements.seats.value.trim()
    };
    const errors = validateBooking(booking);
    const output = form.querySelector('[data-ticket]');

    if (Object.keys(errors).length > 0) {
      output.textContent = Object.values(errors).join('\n');
      console.log('Booking validation errors:', errors);
      return;
    }

    booking.seats = Number(booking.seats);
    output.textContent = `Booking confirmed\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
    console.log('Ticket details:', booking);
  });

  document.body.appendChild(form);
}

console.log('Q5 - Movie Ticket Booking');
if (typeof document !== 'undefined') {
  createBookingForm();
} else {
  const sampleBooking = { name: 'Alex', email: 'alex@example.com', seats: 2 };
  console.log('Sample validation:', validateBooking(sampleBooking));
}
