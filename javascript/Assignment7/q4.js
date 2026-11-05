'use strict';

// Q4 - Apply a theme class and data-theme attribute to the body.
if (typeof document === 'undefined') {
  console.log('Q4 requires a browser. Load this script in an HTML page.');
} else {
  document.body.innerHTML = `
    <main class="theme-app">
      <h1>Theme Switcher</h1>
      <p>Choose a theme to change this page.</p>
      <button type="button" data-theme-choice="light">Light</button>
      <button type="button" data-theme-choice="dark">Dark</button>
      <button type="button" data-theme-choice="blue">Blue</button>
    </main>
  `;

  const style = document.createElement('style');
  style.textContent = `
    body { font: 16px Arial, sans-serif; margin: 2rem; transition: background .2s, color .2s; }
    body.theme-light { background: #fff; color: #222; }
    body.theme-dark { background: #222; color: #f5f5f5; }
    body.theme-blue { background: #e8f2ff; color: #123b70; }
    .theme-app { max-width: 32rem; margin: auto; }
    button { margin-right: .4rem; padding: .5rem .8rem; }
  `;
  document.head.append(style);

  function applyTheme(theme) {
    document.body.setAttribute('class', `theme-${theme}`);
    document.body.setAttribute('data-theme', theme);
  }

  document.querySelectorAll('[data-theme-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      applyTheme(button.getAttribute('data-theme-choice'));
    });
  });

  applyTheme('light');
}
