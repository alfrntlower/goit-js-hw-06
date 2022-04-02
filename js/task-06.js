
const textInput = document.querySelector("#validation-input");
const inputLength = textInput.dataset.length;
const input = document.querySelector("input");

textInput.addEventListener("change", el => {
    const text = el.target.value;

    if (text.length === +inputLength) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    }
    else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }

});