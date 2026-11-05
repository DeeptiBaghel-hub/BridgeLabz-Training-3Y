'use strict';

// Q9 - Validate a form on submit and clear each field's error while correcting.
if (typeof document === 'undefined') {
  console.log('Q9 requires a browser. Load this script in an HTML page.');
} else {
  document.body.innerHTML = `
    <main class="validation-app">
      <h1>Sign Up</h1>
      <form id="signup-form" novalidate>
        <label for="name">Name</label>
        <input id="name" name="name" required>
        <small class="error" data-error-for="name" aria-live="polite"></small>

        <label for="email">Email</label>
        <input id="email" name="email" type="email" required>
        <small class="error" data-error-for="email" aria-live="polite"></small>

        <label for="password">Password</label>
        <input id="password" name="password" type="password" minlength="6" required>
        <small class="error" data-error-for="password" aria-live="polite"></small>

        <button type="submit">Submit</button>
      </form>
      <p id="success-message" role="status"></p>
    </main>
  `;

  const style = document.createElement('style');
  style.textContent = `
    body { font: 16px Arial, sans-serif; margin: 2rem; }
    .validation-app { max-width: 28rem; margin: auto; }
    label, input { display: block; margin-top: .5rem; }
    input { box-sizing: border-box; padding: .5rem; width: 100%; }
    .error { color: #b00020; display: block; min-height: 1.2em; }
    #success-message { color: green; }
  `;
  document.head.append(style);

  const form = document.querySelector('#signup-form');
  const successMessage = document.querySelector('#success-message');

  function validateField(input) {
    const value = input.value.trim();
    let error = '';

    if (!value) {
      error = `${input.labels[0].textContent} is required.`;
    } else if (input.name === 'email' && !value.includes('@')) {
      error = 'Email must contain @.';
    } else if (input.name === 'password' && value.length < 6) {
      error = 'Password must be at least 6 characters.';
    }

    form.querySelector(`[data-error-for="${input.name}"]`).textContent = error;
    return error === '';
  }

  form.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', () => {
      validateField(input);
      successMessage.textContent = '';
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = [...form.querySelectorAll('input')];
    const formIsValid = inputs.map(validateField).every(Boolean);

    if (!formIsValid) {
      successMessage.textContent = '';
      return;
    }

    successMessage.textContent = 'Form Submitted Successfully';
  });
}
