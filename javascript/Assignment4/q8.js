'use strict';

// Q8 - Dynamic Object Updater
const user = {
  name: 'John',
  email: 'john@mail.com',
  age: 21
};

function createUserEditor(userToEdit) {
  const form = document.createElement('form');
  form.innerHTML = `
    <h2>Edit User</h2>
    <label>Name <input name="name" required></label><br>
    <label>Email <input name="email" type="email" required></label><br>
    <label>Age <input name="age" type="number" min="0" required></label><br>
    <button type="submit">Update user</button>
    <pre data-user-details></pre>
  `;

  for (const fieldName of Object.keys(userToEdit)) {
    form.elements[fieldName].value = userToEdit[fieldName];
  }

  const details = form.querySelector('[data-user-details]');
  const renderUser = () => {
    details.textContent = JSON.stringify(userToEdit, null, 2);
  };
  renderUser();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    userToEdit.name = form.elements.name.value.trim();
    userToEdit.email = form.elements.email.value.trim();
    userToEdit.age = Number(form.elements.age.value);
    renderUser();
    console.log('Updated user:', userToEdit);
  });

  document.body.appendChild(form);
}

console.log('Q8 - Dynamic Object Updater');
if (typeof document !== 'undefined') {
  createUserEditor(user);
} else {
  user.age = 22;
  console.log('Updated user:', user);
}
