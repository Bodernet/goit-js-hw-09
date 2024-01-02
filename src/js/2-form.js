const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', handleInput);
populateFields();

function handleFormSubmit(e) {
  e.preventDefault();

  const formData = getFormData();
  if (
    !formData.email ||
    !formData.message ||
    !formData.email.trim() ||
    !formData.message.trim()
  ) {
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}

function handleInput(e) {
  const formData = getFormData();
  if (e.target.matches('input, textarea')) {
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    formData[name] = trimmedValue;
    saveFormData(formData);
  }
}

function getFormData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

function saveFormData(formData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFields() {
  const formData = getFormData();
  for (const element of form.elements) {
    if (element.name && formData[element.name]) {
      element.value = formData[element.name];
    }
  }
}
