const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");
const passwordError = document.querySelector("#passwordError");
const passwordConfirmError = document.querySelector("#passwordConfirmError");

firstName.addEventListener("input", () => {
    if(firstName.value === "") {
        firstNameError.textContent = "Please enter in your first name.";
    }
    else if(firstName.value.length < 2) {
        firstNameError.textContent = "Minimum length: 2";
    }
    else {
        firstNameError.textContent = "";
    }
});

lastName.addEventListener("input", () => {
    if(lastName.value === "") {
        lastNameError.textContent = "Please enter in your last name.";
    }
    else if(lastName.value.length < 2) {
        lastNameError.textContent = "Minimum length: 2";
    }
    else {
        lastNameError.textContent = "";
    }
});

email.addEventListener("input", () => {
    if(email.validity.typeMismatch || email.value === "") {
        emailError.textContent = "Please enter in a valid email address.";
    }
    else {
        emailError.textContent = "";
    }
});

phone.addEventListener("input", () => {
    if(phone.validity.patternMismatch || phone.value === "") {
        phoneError.textContent = "Please enter in a 9 digit phone number.";
    }
    else {
        phoneError.textContent = "";
    }
});

password.addEventListener("input", () => {
    let message = "";
    let pwd = password.value;
    if(password.validity.patternMismatch) {
        if(!(/[A-Z]/.test(pwd)))
            message += "Password must contain at least 1 capital letter. \n";
        if(!(/[0-9]/.test(pwd)))
            message += "Password must contain at least 1 number. \n";
        if(pwd.length < 9)
            message += "Password must be at least 8 characters. \n";

        passwordError.textContent = message;
    }
    else {
        passwordError.textContent = "";
    }
});

passwordConfirm.addEventListener("input", () => {
    if(password.value !== passwordConfirm.value){
        passwordConfirmError.textContent = "Passwords do not much."
    }
    else {
        passwordConfirmError.textContent = "";
    }
});