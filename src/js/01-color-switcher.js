const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function setColor() {
    let randomHexColor = getRandomHexColor();
    bodyEl.setAttribute('style', `background-color: ${randomHexColor};`);
}

function toggleButtons(activate) {
    startBtn.disabled = activate;
    stopBtn.disabled = !activate;
}

function onStartBtnClick() {
    setColor();
    intervalId = setInterval(setColor, 1000);
    toggleButtons(true);
}

function onStopBtnClick() {
    clearInterval(intervalId);
    toggleButtons(false);
}

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);