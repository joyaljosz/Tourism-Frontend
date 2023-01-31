let email = document.getElementById("email");
let error = document.getElementById("error");
let pass = document.getElementById("pass");
let errors = document.getElementById("errors");
let num = document.getElementById("num");
let pherror = document.getElementById("pherror");
let str = document.getElementById("str");



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




function phone() {
    var regex = /^\d{10}$/;
    if ((num.value.match(regex))) {
        pherror.innerHTML = "Valid";
        pherror.style.color = "red";
        return true;
    } else {
        pherror.innerHTML = "Invalid";
        pherror.style.color = "red";
        return false;
    }
}

function StrChecker() {
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');

    if (strongPassword.test(pass)) {
        str.style.backgroundColor = "green";
        str.textContent = 'Strong';
    } else if (mediumPassword.test(pass)) {
        str.style.backgroundColor = 'blue';
        str.textContent = 'Medium';
    } else {
        str.style.backgroundColor = 'red';
        str.textContent = 'Weak';
    }
    return true;
}