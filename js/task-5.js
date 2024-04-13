function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const spanText = document.querySelector('.color');
const clickOnBtn = () => {
  body.style.backgroundColor = getRandomHexColor();
  spanText.innerHTML = `${body.style.backgroundColor}`;
};
btn.addEventListener('click', clickOnBtn);
