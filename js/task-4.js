const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  const userData = {
    email: login,
    password,
  };

  if (!login || !password) {
    alert('You need to fill in all form fields!');
    return;
  }

  console.log(userData);
  form.reset();
}
