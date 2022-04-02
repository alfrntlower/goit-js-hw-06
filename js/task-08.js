
const form = document.querySelector(".login-form");

const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');


form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    console.log(email.value);
    console.log(password.value);


    const elements = {
        email: email.value,
        password: password.value
    }

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    
    console.log(elements);

    event.currentTarget.reset();
    }



