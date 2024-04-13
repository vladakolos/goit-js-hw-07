const nameInput = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');
const onInput = input => {
  const valueInput = input.currentTarget;
  const notTrimmedInput = valueInput.value;
  if (notTrimmedInput.trim() === '') {
    return (spanName.innerHTML = `Anonymous`);
  } else {
    spanName.innerHTML = `${notTrimmedInput.trim()}`;
  }
};
nameInput.addEventListener('input', onInput);
