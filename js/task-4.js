const form = document.querySelector('.login-form');
const onFormSubmit = event => {
  event.preventDefault();
  const userPassw = event.currentTarget.elements.password;
  const userEmail = event.currentTarget.elements.email;
  if (userPassw.value.trim() === '' || userEmail.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    const totalObj = {
      email: userEmail.value.trim(),
      password: userPassw.value.trim(),
    };
    console.log(totalObj);
    form.reset();
  }
};

form.addEventListener('submit', onFormSubmit);
