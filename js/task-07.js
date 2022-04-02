

const fontSizeControl = document.querySelector("#font-size-control");
const fontSize = document.querySelector("#text");

console.log(fontSizeControl.value);

fontSizeControl.addEventListener("input", ()=> {
    
    const size = fontSizeControl.value;
    fontSize.style.fontSize = size + "px";
   
})