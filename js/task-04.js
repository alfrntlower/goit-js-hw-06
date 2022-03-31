
let valueEl = Number(document.querySelector('#value').textContent);
let counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click',decrementBtnClick )
incrementBtn.addEventListener('click',incrementBtnClick )

function decrementBtnClick() {
    valueEl -= 1;
    counterValue.innerText = valueEl;
}

function incrementBtnClick() {
    valueEl += 1; 
    counterValue.innerText = valueEl;
}

