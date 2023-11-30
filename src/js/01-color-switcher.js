const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let intervalId = null;

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
    intervalId = setInterval(changeBackgroundColor, 1000);
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled', true);
};

function onStopClick() {
    clearInterval(intervalId);
    startBtn.removeAttribute('disabled', true);
    stopBtn.setAttribute('disabled', true);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function changeBackgroundColor() {
    return body.style.backgroundColor = getRandomHexColor();
}