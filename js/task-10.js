function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const boxes = document.querySelectorAll("#boxes");

const createBtn = document.querySelector('.create');
const destroyBtn = document.querySelector('.destroy');

createBtn.addEventListener('click', onCreateBtnClick)
destroyBtn.addEventListener('click',onDestroyBtnClick)

function onCreateBtnClick() {
  const amount = +input.value;

  createBoxes(amount);
}

function onDestroyBtnClick() {
  boxes.innerHTML = '';
}


function createBoxes (amount) {

    console.log(amount);
  const basicSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    
    const size = basicSize + i * 10;
    const div = document.createElement('div');
    
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: #${getRandomHexColor()}`;
    fragment.appendChild(div);
    
  }

  console.log(fragment);
  boxes.appendChild(fragment);
  
}



