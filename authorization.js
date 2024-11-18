const form = document.getElementById("auth-form")
const email = document.getElementById("email")
const password = document.getElementById("password")

function getCredentials(username) {
    const credentials = JSON.parse(localStorage.getItem("credentials")) || {};

    if (credentials[username]) {
        return {
            username: username,
            password: credentials[username]
        };
    } else {
        return null;
    }
}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    authorization();
})


function authorization() {
    const emailValue = email.value;
    const passwordValue = password.value;
    const user = getCredentials(emailValue);
    if (user.username === emailValue && user.password === passwordValue) {
        window.location.href = "index.html";
        localStorage.setItem("isLoggedIn", "true") ;
    } else {
        setError(email, "Incorrect Email or Password");
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
}
function updateStatus(username, newPassword) {



        localStorage.setItem("credentials", JSON.stringify(credentials));
        console.log(`Password updated for user: ${username}`);

}