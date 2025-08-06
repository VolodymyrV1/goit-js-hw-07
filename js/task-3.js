const linkInput = document.querySelector('#name-input');
const linkSpan = document.querySelector('#name-output');

linkInput.addEventListener('input', event => {
  let value = event.currentTarget.value.trim();

  if (value === '') {
    linkSpan.textContent = 'Anonymous';
  } else {
    value = value[0].toUpperCase() + value.slice(1);
    linkSpan.textContent = value;
  }
});

// linkInput.addEventListener('input', event => {
//   const value = event.currentTarget.value.trim();
//   linkSpan.textContent = value === '' ? 'Anonymous' : value;
// });

// linkInput.addEventListener('input', event => {
//   if (linkInput.value.trim() === '') {
//     linkSpan.textContent = 'Anonymous';
//   } else {
//     linkSpan.textContent = event.currentTarget.value.trim();
//   }
// });
