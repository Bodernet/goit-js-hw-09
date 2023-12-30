const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', handleFormSubmit);
textarea.addEventListener('input', handleTextarea);
input.addEventListener('input', handleInput);
populateFields();

function handleFormSubmit(e) {
  e.preventDefault();
  const formData = getFormData();
  if (
    !formData.email ||
    !formData.message ||
    formData.email.trim() === '' ||
    formData.message.trim() === ''
  ) {
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}
function handleInput() {
  const formData = {
    ...getFormData(),
    email: input.value.trim(),
  };
  saveFormData(formData);
}

function handleTextarea() {
  const formData = {
    ...getFormData(),
    message: textarea.value.trim(),
  };
  saveFormData(formData);
}
function getFormData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}
function saveFormData(formData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFields() {
  const formData = getFormData();
  if (formData.email) {
    input.value = formData.email;
  }
  if (formData.message) {
    textarea.value = formData.message;
  }
}
