const form = document.getElementById("auth-form")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    validateInputs();

})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const validateInputs = () => {
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    let isValid


    if (emailValue === "") {
        setError(email, 'Email is required');
        isValid = false;
    } else {
        if (emailValue.indexOf("@") !== -1 && emailValue.indexOf(".") !== -1) {
            setSuccess(email);
            isValid = true
        } else {
            setError(email, "Incorrect Email");
            isValid = false
        }
    }
    if (passwordValue === "") {
        setError(password, 'Password is required');
        isValid = false;
    }
    if (confirmPasswordValue === "") {
        setError(confirmPassword, 'Password is required');
        isValid = false;
    }
    if (isValid) {
        if (passwordValue !== confirmPasswordValue) {
            setError(password, 'Password is not the same');
            setError(confirmPassword, 'Password is not the same');
            isValid = false;
        } else {
            setSuccess(password);
            setSuccess(confirmPassword);
        }

    }

    if (isValid) {
        saveCredentials(emailValue, passwordValue);
        window.location.href = "auth.html";
    }
}

function saveCredentials(username, password) {
    let credentials = JSON.parse(localStorage.getItem("credentials")) || {};

    credentials[username] = password;
    localStorage.setItem("credentials", JSON.stringify(credentials));
}

function getCredentials(username) {
    const credentials = JSON.parse(localStorage.getItem("credentials")) || {};

    return credentials[username] ? { username, password: credentials[username] } : null;
}
