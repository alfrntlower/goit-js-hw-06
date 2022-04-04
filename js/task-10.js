function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
let boxes = document.querySelectorAll("#boxes");

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', onCreateBtnClick)
destroyBtn.addEventListener('click',onDestroyBtnClick)

function onCreateBtnClick() {
  let amount = Number(input.value);

  createBoxes(amount);
}

function onDestroyBtnClick() {
  boxes.innerHTML = ' ';
}


function createBoxes (amount) {

  console.log(amount);
  let basicSize = 30;
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};`;
    fragment.appendChild(div);

  }

  console.log(fragment);
  boxes.appendChild(fragment)
  console.log(boxes);
  
}






