import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timer = document.querySelector('.timer');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

let initialDate;

startBtn.setAttribute('disabled', true);
startBtn.addEventListener('click', onClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startBtn.setAttribute('disabled', true);
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      initialDate = selectedDates[0];
      startBtn.removeAttribute('disabled', true);
    }
  },
};

flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return value.padStart(2, '0');
};

function onClick() {
    return setTimeout(updateTime, 1000);
};

function updateTime() {
  const countTime = initialDate - new Date();
  const count = convertMs(countTime);

  if (count.seconds >= 0) {
    days.textContent = addLeadingZero(String(count.days));
    hours.textContent = addLeadingZero(String(count.hours));
    minutes.textContent = addLeadingZero(String(count.minutes));
    seconds.textContent = addLeadingZero(String(count.seconds));
    setTimeout(updateTime, 1000);
  }
}