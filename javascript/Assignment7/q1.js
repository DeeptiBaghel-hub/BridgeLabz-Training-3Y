'use strict';

// Q1 - Manage products with delegated edit/delete events and outside-click save.
if (typeof document === 'undefined') {
  console.log('Q1 requires a browser. Load this script in an HTML page.');
} else {
  document.body.innerHTML = `
    <main class="product-app">
      <h1>Product List</h1>
      <form id="product-form">
        <label for="product-input">Product name</label>
        <input id="product-input" required>
        <button type="submit">Add product</button>
      </form>
      <ul id="product-list"></ul>
    </main>
  `;

  const style = document.createElement('style');
  style.textContent = `
    body { font: 16px Arial, sans-serif; margin: 2rem; }
    .product-app { max-width: 32rem; margin: auto; }
    #product-form, #product-list li { display: flex; gap: .5rem; }
    #product-input { flex: 1; }
    #product-list { padding: 0; list-style: none; }
    #product-list li { align-items: center; margin: .75rem 0; }
    .product-name { flex: 1; }
    .edit-input { flex: 1; }
  `;
  document.head.append(style);

  const form = document.querySelector('#product-form');
  const input = document.querySelector('#product-input');
  const list = document.querySelector('#product-list');
  let editedItem = null;
  let editedInput = null;

  function saveEdit() {
    if (!editedItem || !editedInput) return;

    const name = editedInput.value.trim();
    if (name) {
      const label = document.createElement('span');
      label.className = 'product-name';
      label.textContent = name;
      editedInput.replaceWith(label);
    } else {
      editedItem.remove();
    }

    editedItem = null;
    editedInput = null;
  }

  function startEdit(item) {
    if (editedItem === item) return;
    saveEdit();

    const name = item.querySelector('.product-name');
    const editInput = document.createElement('input');
    editInput.className = 'edit-input';
    editInput.value = name.textContent;
    name.replaceWith(editInput);
    editedItem = item;
    editedInput = editInput;
    editInput.focus();
    editInput.select();

    editInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        saveEdit();
      } else if (event.key === 'Escape') {
        editedItem = null;
        editedInput = null;
        const label = document.createElement('span');
        label.className = 'product-name';
        label.textContent = name.textContent;
        editInput.replaceWith(label);
      }
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const productName = input.value.trim();
    if (!productName) return;

    const item = document.createElement('li');
    const label = document.createElement('span');
    label.className = 'product-name';
    label.textContent = productName;
    item.append(label);

    for (const action of ['edit', 'delete']) {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.action = action;
      button.textContent = action === 'edit' ? 'Edit' : 'Delete';
      item.append(button);
    }

    list.append(item);
    input.value = '';
    input.focus();
  });

  // One parent listener handles buttons on all current and future list items.
  list.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button || !list.contains(button)) return;

    const item = button.closest('li');
    if (button.dataset.action === 'edit') startEdit(item);
    else {
      if (item === editedItem) {
        editedItem = null;
        editedInput = null;
      }
      item.remove();
    }
  });

  document.addEventListener('click', (event) => {
    if (editedItem && !editedItem.contains(event.target)) saveEdit();
  }, true);
}
