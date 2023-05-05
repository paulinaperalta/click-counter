const decrease = document.querySelector('#decrease');
const increase = document.querySelector('#increase');
const reset = document.querySelector('#reset');
let counter = document.querySelector('#number');

let number = 0;

increase.addEventListener('click', () => {
    number += 1;
    counter.innerText = number;
    if (number > 0) {
        counter.classList.add('positiveNum')
        counter.classList.remove('negativeNum')
    } else if (number < 0) {
        counter.classList.add('negativeNum')
        counter.classList.remove('positiveNum')
    } else if (num === 0) {
        counter.classList.remove('positiveNum')
        counter.classList.remove('negativeNum')
    }
    
})

decrease.addEventListener('click', () => {
    number -= 1;
    counter.innerText = number;
    if (number > 0) {
        counter.classList.add('positiveNum')
        counter.classList.remove('negativeNum')
    } else if (number < 0) {
        counter.classList.add('negativeNum')
        counter.classList.remove('positiveNum')
    } else if (num === 0) {
        reset();
    }
})

reset.addEventListener('click', () => {
    number = 0;
    counter.innerText = number;
    counter.classList.remove('positiveNum')
    counter.classList.remove('negativeNum')
})

