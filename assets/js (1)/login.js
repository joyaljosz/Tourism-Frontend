let email = document.getElementById("email");

let error = document.getElementById("error");

let pass = document.getElementById("pass");
let errors = document.getElementById("errors");



function validate() {
    let regexp = /^([A_Za-z0-9\.-]+)@([A-A_Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    if (regexp.test(email.value)) {
        error.innerHTML = "Valid";
        error.style.color = "red";
        return true;

    } else {
        error.innerHTML = "Invalid ";
        error.style.color = "red";
        return false;

    }
}


function password() {
    var regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

    if (pass.value.match(regexp)) {
        errors.innerHTML = "Valid";
        errors.style.color = "red";
        return true;
    } else {
        errors.innerHTML = "Invalid";
        errors.style.color = "red";
        return false;
    }
}