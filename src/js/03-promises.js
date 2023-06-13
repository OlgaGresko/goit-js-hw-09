import { Notify } from 'notiflix/build/notiflix-notify-aio';

let formEl = document.querySelector('.form');

function createPromise(data) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
        setTimeout(() => {
      if (shouldResolve) {
          resolve(data);
        } else {
          reject(data);
      }
    }, data.delay);
  })
}

function countPromises () {
  let amount = parseInt(formEl.elements.amount.value);
  let firstDelay = parseInt(formEl.elements.delay.value);
  let step = parseInt(formEl.elements.step.value);

  for (let position = 1; position <= amount; position++) {
    let delay = firstDelay + (step * position);
    let data = {
      position, 
      delay,
    }
    
    createPromise(data)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
  }
}

formEl.addEventListener('submit', function(event) {
  event.preventDefault(); 
  countPromises();
  formEl.reset();
});






