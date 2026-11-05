'use strict';

// Q7 - Log client coordinates and drop a dot at the double-click position.
if (typeof document === 'undefined') {
  console.log('Q7 requires a browser. Load this script in an HTML page.');
} else {
  document.body.innerHTML = `
    <main class="mouse-app">
      <h1>Mouse Path & Coordinates</h1>
      <p id="coordinates" aria-live="polite">Move the pointer inside the box.</p>
      <div id="mouse-box" aria-label="Mouse tracking area"></div>
    </main>
  `;

  const style = document.createElement('style');
  style.textContent = `
    body { font: 16px Arial, sans-serif; margin: 2rem; }
    .mouse-app { max-width: 28rem; margin: auto; }
    #mouse-box { background: #f2f2f2; border: 2px solid #555; height: 400px; position: relative; width: 400px; }
    .click-dot { background: red; border-radius: 50%; height: 10px; pointer-events: none; position: absolute; transform: translate(-50%, -50%); width: 10px; }
  `;
  document.head.append(style);

  const box = document.querySelector('#mouse-box');
  const coordinateOutput = document.querySelector('#coordinates');

  box.addEventListener('mousemove', (event) => {
    coordinateOutput.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
  });

  box.addEventListener('dblclick', (event) => {
    const bounds = box.getBoundingClientRect();
    const dot = document.createElement('span');
    dot.className = 'click-dot';
    dot.style.left = `${event.clientX - bounds.left}px`;
    dot.style.top = `${event.clientY - bounds.top}px`;
    box.append(dot);
  });
}
