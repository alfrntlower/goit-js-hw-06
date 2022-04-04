

const fontSizeControl = document.querySelector("#font-size-control");
const fontSize = document.querySelector("#text");

console.log(fontSizeControl.value);

let size = fontSizeControl.value;
fontSize.style.fontSize = size + "px";

fontSizeControl.addEventListener("input", ()=> {
    
    size = fontSizeControl.value;
    fontSize.style.fontSize = size + "px";
   
})