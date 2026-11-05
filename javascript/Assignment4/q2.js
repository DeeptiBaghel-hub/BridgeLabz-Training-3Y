'use strict';

// Q2 - Student Form Validator
const studentPatterns = {
  name: /^[A-Za-z]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\d{10}$/,
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

function validateStudentField(fieldName, value) {
  if (!studentPatterns[fieldName].test(value)) {
    const messages = {
      name: 'Name must contain alphabets only.',
      email: 'Enter a valid email address.',
      phone: 'Phone must contain exactly 10 digits.',
      password: 'Password needs an uppercase letter, a number, and a special character.'
    };
    return messages[fieldName];
  }

  return '';
}

function createStudentForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <h2>Student Registration</h2>
    <label>Name <input name="name" type="text" required></label><span data-error="name"></span><br>
    <label>Email <input name="email" type="email" required></label><span data-error="email"></span><br>
    <label>Phone <input name="phone" type="tel" required></label><span data-error="phone"></span><br>
    <label>Password <input name="password" type="password" required></label><span data-error="password"></span><br>
    <button type="submit">Register</button>
    <p role="status"></p>
  `;
  form.noValidate = true;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    for (const fieldName of Object.keys(studentPatterns)) {
      const input = form.elements[fieldName];
      const message = validateStudentField(fieldName, input.value);
      const errorElement = form.querySelector(`[data-error="${fieldName}"]`);
      input.style.border = message ? '2px solid red' : '2px solid green';
      errorElement.textContent = message ? ` ${message}` : '';
      errorElement.style.color = 'red';
      if (message) isValid = false;
    }

    form.querySelector('[role="status"]').textContent = isValid
      ? 'Registration details are valid.'
      : 'Please correct the highlighted fields.';
  });

  document.body.appendChild(form);
}

console.log('Q2 - Student Form Validator');
if (typeof document !== 'undefined') {
  createStudentForm();
} else {
  const sampleStudent = {
    name: 'Mina',
    email: 'mina@example.com',
    phone: '9876543210',
    password: 'Strong1!'
  };
  for (const [fieldName, value] of Object.entries(sampleStudent)) {
    console.log(`${fieldName}: ${validateStudentField(fieldName, value) || 'valid'}`);
  }
}
