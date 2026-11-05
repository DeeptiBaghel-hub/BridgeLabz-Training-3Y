'use strict';

// Q3 - Show one validated form step at a time and summarize completed values.
if (typeof document === 'undefined') {
  console.log('Q3 requires a browser. Load this script in an HTML page.');
} else {
  document.body.innerHTML = `
    <main class="form-app">
      <h1>Three-Step Form</h1>
      <p id="step-label" aria-live="polite"></p>
      <form id="multi-step-form" novalidate>
        <section data-step="0">
          <label for="name">Name</label>
          <input id="name" name="name" autocomplete="name" required>
        </section>
        <section data-step="1" hidden>
          <label for="email">Email</label>
          <input id="email" name="email" type="email" autocomplete="email" required>
        </section>
        <section data-step="2" hidden>
          <label for="password">Password</label>
          <input id="password" name="password" type="password" minlength="6" required>
        </section>
        <p id="step-error" role="alert"></p>
        <button id="back" type="button">Back</button>
        <button id="next" type="button">Next</button>
        <button id="finish" type="submit" hidden>Finish</button>
      </form>
      <section id="summary" hidden aria-live="polite"></section>
    </main>
  `;

  const style = document.createElement('style');
  style.textContent = `
    body { font: 16px Arial, sans-serif; margin: 2rem; }
    .form-app { max-width: 28rem; margin: auto; }
    label, input { display: block; margin: .5rem 0; }
    input { box-sizing: border-box; padding: .5rem; width: 100%; }
    #step-error { color: #b00020; }
  `;
  document.head.append(style);

  const form = document.querySelector('#multi-step-form');
  const steps = [...form.querySelectorAll('[data-step]')];
  const stepLabel = document.querySelector('#step-label');
  const errorOutput = document.querySelector('#step-error');
  const backButton = document.querySelector('#back');
  const nextButton = document.querySelector('#next');
  const finishButton = document.querySelector('#finish');
  const summary = document.querySelector('#summary');
  let currentStep = 0;

  function showStep() {
    steps.forEach((step, index) => {
      step.hidden = index !== currentStep;
    });
    stepLabel.textContent = `Step ${currentStep + 1} of ${steps.length}`;
    backButton.hidden = currentStep === 0;
    nextButton.hidden = currentStep === steps.length - 1;
    finishButton.hidden = currentStep !== steps.length - 1;
    errorOutput.textContent = '';
    steps[currentStep].querySelector('input').focus();
  }

  function validateCurrentStep() {
    const input = steps[currentStep].querySelector('input');
    if (!input.value.trim()) {
      errorOutput.textContent = `${input.labels[0].textContent} is required.`;
      input.focus();
      return false;
    }
    if (!input.checkValidity()) {
      errorOutput.textContent = input.type === 'email'
        ? 'Enter a valid email address.'
        : 'Enter a valid value.';
      input.focus();
      return false;
    }
    return true;
  }

  nextButton.addEventListener('click', () => {
    if (!validateCurrentStep()) return;
    currentStep += 1;
    showStep();
  });

  backButton.addEventListener('click', () => {
    currentStep -= 1;
    showStep();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validateCurrentStep()) return;

    const values = new FormData(form);
    summary.textContent =
      `Name: ${values.get('name')} | Email: ${values.get('email')} | Password: ${'*'.repeat(String(values.get('password')).length)}`;
    summary.hidden = false;
    form.hidden = true;
    stepLabel.hidden = true;
  });

  showStep();
}
