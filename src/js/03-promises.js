import { Notify } from 'notiflix/build/notiflix-notify-aio';

const changeSettings = Notify.init({
  position: 'center-top',
});

const formRef = document.querySelector('.form');

const inputsValue = {};

formRef.addEventListener('input', onInput);
formRef.addEventListener('submit', onSubmit);

function onInput(e) {
  if (Number(e.target.value) < 0) {
    Notify.failure('The value cannot be negative');
    e.target.value = '';
  }
  getValue(e);
}

function getValue(e) {
  let userTarget = e.target.name;
  switch (userTarget) {
    case 'delay':
      inputsValue.delay = Number(e.target.value);
      break;
    case 'step':
      inputsValue.step = Number(e.target.value);
      break;
    case 'amount':
      inputsValue.amount = Number(e.target.value);
      break;
  }
}

function onSubmit(e) {
  e.preventDefault();

  inputsValue.positon = 1;
  let submitDelay = inputsValue.delay;

  for (let i = 0; i < inputsValue.amount; i += 1) {
    createPromise(inputsValue.positon, submitDelay);
    inputsValue.positon += 1;
    submitDelay += inputsValue.step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    const result = {
      position,
      delay,
    };
    if (shouldResolve) {
      resolve(result);
    } else {
      reject(result);
    }
  });
  promise
    .then(({ position, delay }) => {
      setTimeout(
        () => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`),
        delay
      );
    })
    .catch(({ position, delay }) => {
      setTimeout(
        () => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`),
        delay
      );
    })
    .finally(() => formRef.reset());
}
