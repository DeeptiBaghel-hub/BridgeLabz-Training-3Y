'use strict';

// Q4 - Custom Form Builder
class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  buildForm() {
    const form = document.createElement('form');
    form.innerHTML = this.fields.map((field) => {
      const fieldName = field.name || field.label.toLowerCase().replace(/\s+/g, '_');
      const required = field.required ? 'required' : '';
      return `<label>${field.label}
        <input type="${field.type}" name="${fieldName}" ${required}>
      </label><br>`;
    }).join('') + '<button type="submit">Submit</button><pre data-form-output></pre>';

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const values = this.getFormData(form);
      form.querySelector('[data-form-output]').textContent = JSON.stringify(values, null, 2);
      console.log('Form data:', values);
    });

    document.body.appendChild(form);
    return form;
  }

  getFormData(form) {
    return Object.fromEntries(new FormData(form).entries());
  }
}

console.log('Q4 - Custom Form Builder');
if (typeof document !== 'undefined') {
  const formBuilder = new FormBuilder([
    { type: 'text', label: 'Username', required: true },
    { type: 'email', label: 'Email', required: true }
  ]);
  formBuilder.buildForm();
} else {
  console.log('Open this file in a browser to build and submit the dynamic form.');
}
