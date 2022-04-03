function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeColorBtn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
const widgetColor = document.querySelector(".widget");

function onChangeColorClick(event) {
  
  const bgColor = getRandomHexColor()

  colorText.textContent = bgColor;

  widgetColor.style.backgroundColor = bgColor;
  
}

changeColorBtn.addEventListener('click', onChangeColorClick);
