import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const changeSettings = Notify.init({
  position: 'left-top',
});

const inputRef = document.querySelector('#datetime-picker');
const btnStartRef = document.querySelector('button[data-start]');
const daysValRef = document.querySelector('[data-days]');
const hoursValRef = document.querySelector('[data-hours]');
const minutesValRef = document.querySelector('[data-minutes]');
const secondsValRef = document.querySelector('[data-seconds]');

btnStartRef.addEventListener('click', onClick);
btnStartRef.style.pointerEvents = 'none';

let startTime = new Date().getTime();
let finalTime = 0;
let leftTime = 0;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    finalTime = selectedDates[0];
    auditValue();
  },
};

flatpickr(inputRef, options);

function auditValue() {
  if (startTime > finalTime) {
    Notify.failure('Please choose a date in the future');
  } else {
    btnStartRef.style.pointerEvents = 'auto';
  }
}

function onClick() {
  timerId = setInterval(() => {
    startTime = new Date().getTime();
    leftTime = finalTime - startTime;
    calculateTimerValue();
    stopTimerIf();
  }, 1000);
  console.log(timerId);
}

function calculateTimerValue() {
  daysValRef.textContent = Math.floor(leftTime / 1000 / 60 / 60 / 24)
    .toString()
    .padStart(2, '0');
  hoursValRef.textContent = (Math.floor(leftTime / 1000 / 60 / 60) % 24)
    .toString()
    .padStart(2, '0');
  minutesValRef.textContent = (Math.floor(leftTime / 1000 / 60) % 60)
    .toString()
    .padStart(2, '0');
  secondsValRef.textContent = (Math.floor(leftTime / 1000) % 60)
    .toString()
    .padStart(2, '0');
}

function stopTimerIf() {
  if (leftTime < 1000) {
    clearInterval(timerId);
  }
}
