'use strict';

// Q7 - Login Form Validation using RegExp
const loginPatterns = {
  username: /^.{5,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/
};

function validateLogin(username, password) {
  const errors = [];
  if (!loginPatterns.username.test(username)) {
    errors.push('Username must be at least 5 characters long.');
  }
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long.');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must include a number.');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must include an uppercase letter.');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must include a lowercase letter.');
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push('Password must include a special character.');
  }
  return errors;
}

function createLoginForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <h2>Log In</h2>
    <label>Username <input name="username" required></label><br>
    <label>Password <input name="password" type="password" required></label><br>
    <button type="submit">Log in</button>
    <p role="status"></p>
  `;
  form.noValidate = true;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const errors = validateLogin(form.elements.username.value, form.elements.password.value);
    const status = form.querySelector('[role="status"]');
    status.textContent = errors.length ? errors.join(' ') : 'Login validation successful.';
    status.style.color = errors.length ? 'red' : 'green';
    console.log(errors.length ? 'Login errors:' : 'Login valid:', errors.length ? errors : 'success');
  });

  document.body.appendChild(form);
}

console.log('Q7 - Login Form Validation');
if (typeof document !== 'undefined') {
  createLoginForm();
} else {
  console.log('Sample errors:', validateLogin('alex1', 'StrongPass1!'));
}
