import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const optionsNotify = {
    position: 'center-top',
    timeout: 3000,
    clickToClose: true,
}
const optionsFlatpickr = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < Date.now()) {
          Notify.failure("Please choose a date in the future", optionsNotify);
      } else {
          startBtn.disabled = false;
          delta = (selectedDates[0].getTime() - Date.now());
          startBtn.addEventListener('click', startCountdown);
      }
    },
};

let delta = 0;
let intervalId;
let countdownData = {};

const startBtn = document.querySelector('button');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.disabled = true;

flatpickr("#datetime-picker", optionsFlatpickr); 
  
function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

const addLeadingZero = value => String(value).padStart(2, '0');

function updateCountdownTimer() {
    delta -= 1000;
    if (delta <= 1000) {
        clearInterval(intervalId);
        startBtn.disabled = false;
    }
    countdownData = convertMs(delta);
    let data = Object.values(countdownData);
    data = data.map(value => addLeadingZero(value));
    [daysEl.textContent, hoursEl.textContent, minutesEl.textContent, secondsEl.textContent] = data;
}

function startCountdown() {
    intervalId = setInterval(updateCountdownTimer, 1000);
    startBtn.disabled = true;
}


