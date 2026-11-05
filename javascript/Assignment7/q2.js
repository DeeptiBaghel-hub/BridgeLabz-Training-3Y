'use strict';

// Q2 - Keep a 100-character textarea limit and show warning colors.
if (typeof document === 'undefined') {
  console.log('Q2 requires a browser. Load this script in an HTML page.');
} else {
  document.body.innerHTML = `
    <main class="counter-app">
      <h1>Live Character Counter</h1>
      <label for="message">Message (maximum 100 characters)</label>
      <textarea id="message" maxlength="100" rows="6"></textarea>
      <p id="counter" aria-live="polite"></p>
      <button id="reset" type="button">Reset</button>
    </main>
  `;

  const style = document.createElement('style');
  style.textContent = `
    body { font: 16px Arial, sans-serif; margin: 2rem; }
    .counter-app { max-width: 32rem; margin: auto; }
    textarea { box-sizing: border-box; display: block; margin-top: .5rem; width: 100%; }
    #counter { color: green; }
    #counter.warning { color: #b77900; }
    #counter.limit { color: red; }
  `;
  document.head.append(style);

  const maximumCharacters = 100;
  const textarea = document.querySelector('#message');
  const counter = document.querySelector('#counter');

  function updateCounter() {
    const remaining = maximumCharacters - textarea.value.length;
    counter.textContent = `${remaining} characters remaining`;
    counter.classList.toggle('warning', remaining <= 20 && remaining > 0);
    counter.classList.toggle('limit', remaining === 0);
  }

  textarea.addEventListener('keydown', (event) => {
    const navigationKeys = [
      'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Tab', 'Home', 'End'
    ];
    const isShortcut = event.ctrlKey || event.metaKey;
    const isCharacterKey = event.key.length === 1;
    if (textarea.value.length >= maximumCharacters && isCharacterKey
        && !isShortcut && !navigationKeys.includes(event.key)) {
      event.preventDefault();
    }
  });

  textarea.addEventListener('paste', (event) => {
    const pastedText = event.clipboardData.getData('text');
    if (textarea.value.length + pastedText.length > maximumCharacters) {
      event.preventDefault();
    }
  });

  textarea.addEventListener('input', updateCounter);
  document.querySelector('#reset').addEventListener('click', () => {
    textarea.value = '';
    updateCounter();
    textarea.focus();
  });

  updateCounter();
}
