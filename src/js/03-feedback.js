import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');

let dataObj = {};

const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
dataObj = { ...storageData };

if (storageData) {
  const { email, message } = storageData;
  const elements = formEl.elements;

  elements.email.value = email;
  elements.message.value = message;
}

formEl.addEventListener(
  'input',
  throttle(e => {
    const prop = e.target.name;
    const value = e.target.value;

    dataObj[prop] = value;

    localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
  }, 500)
);

formEl.addEventListener('submit', e => {
  e.preventDefault();

  localStorage.removeItem('feedback-form-state');
  e.target.reset();

  console.log(dataObj);
});
