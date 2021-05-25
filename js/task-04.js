const value = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const counter = {
   value: 0,
    incrementFunc() {
        this.value += 1;
    },
    decrementFunc() {
        this.value -= 1;
   },
}

incrementBtn.addEventListener('click', function () {
    counter.incrementFunc();
    value.textContent = counter.value;
} );
decrementBtn.addEventListener('click', function () {
    counter.decrementFunc();
    value.textContent = counter.value;
} );