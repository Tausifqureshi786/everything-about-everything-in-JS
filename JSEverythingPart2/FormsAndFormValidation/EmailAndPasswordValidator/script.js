let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let result = document.querySelector(".result");

let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    result.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);
    let isValid = true;

    if(!emailAns){
        document.querySelector("#emailError").textContent = "Email is incorrect"
        isValid = false
    }

    if(!passwordAns) {
        document.querySelector("#passwordError").textContent = "Password is incorrect"
        isValid = false
    }

    if(isValid){
        result.textContent = "Form submitted successfully";
    }

})