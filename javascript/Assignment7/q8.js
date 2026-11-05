'use strict';

// Q8 - Close the dropdown in the document capture phase when clicking outside.
if (typeof document === 'undefined') {
  console.log('Q8 requires a browser. Load this script in an HTML page.');
} else {
  document.body.innerHTML = `
    <main class="dropdown-app">
      <h1>Custom Dropdown</h1>
      <div class="dropdown">
        <button id="dropdown-toggle" type="button" aria-expanded="false">Choose an option</button>
        <ul id="dropdown-options" hidden>
          <li><button type="button" data-value="Option 1">Option 1</button></li>
          <li><button type="button" data-value="Option 2">Option 2</button></li>
          <li><button type="button" data-value="Option 3">Option 3</button></li>
        </ul>
      </div>
      <p>Click outside the dropdown to close it.</p>
    </main>
  `;

  const style = document.createElement('style');
  style.textContent = `
    body { font: 16px Arial, sans-serif; margin: 2rem; }
    .dropdown-app { max-width: 30rem; margin: auto; }
    .dropdown { display: inline-block; position: relative; }
    #dropdown-options { background: white; border: 1px solid #aaa; list-style: none; margin: 0; min-width: 100%; padding: .25rem; position: absolute; }
    #dropdown-options button { background: white; border: 0; cursor: pointer; padding: .5rem; text-align: left; width: 100%; }
    #dropdown-options button:hover { background: #eee; }
  `;
  document.head.append(style);

  const dropdown = document.querySelector('.dropdown');
  const toggleButton = document.querySelector('#dropdown-toggle');
  const options = document.querySelector('#dropdown-options');

  // Capture runs before the clicked element's own handler, so only outside
  // clicks close the menu and inside clicks still reach their normal handlers.
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      options.hidden = true;
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  }, true);

  toggleButton.addEventListener('click', () => {
    options.hidden = !options.hidden;
    toggleButton.setAttribute('aria-expanded', String(!options.hidden));
  });

  options.addEventListener('click', (event) => {
    const option = event.target.closest('button[data-value]');
    if (!option) return;

    toggleButton.textContent = option.dataset.value;
    options.hidden = true;
    toggleButton.setAttribute('aria-expanded', 'false');
  });
}
