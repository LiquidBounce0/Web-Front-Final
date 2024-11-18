const form = document.getElementById('form-info');
const fullName= document.getElementById("full-name")
const phoneNumber = document.getElementById("phone-number")
const email= document.getElementById("email")


const now = new Date();
const day = now.getDay()
const hours = now.getHours();
const minutes = now.getMinutes();
let date = `${day}:${hours}:${minutes}`;




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
    const fullNameValue = fullName.value;
    const phoneNumberValue = phoneNumber.value;
    const emailValue = email.value;

    let isValid = true;

    if (fullNameValue === "") {
        setError(fullName, 'Full name is required');
        isValid = false;
    } else {
        setSuccess(fullName)
    }

    if (phoneNumberValue === "") {
        setError(phoneNumber, 'Phone number is required');
        isValid = false;
    } else {
        const regex = /[a-zA-Zа-яА-Я]/;
        if (regex.test(phoneNumberValue) === true) {
            setError(phoneNumber, "Incorrect number");
            isValid = false;
        } else  {
            setSuccess(phoneNumber);
        }
    }
    if (emailValue === "") {
        setError(email, 'Email is required');
        isValid = false;
    } else {
        if (emailValue.indexOf("@") !== -1 && emailValue.indexOf(".") !== -1) {
            setSuccess(email);
        } else {
            setError(email, "Incorrect Email");
            isValid = false
        }
    }

    if (isValid) {
        renderPopup(fullNameValue, phoneNumberValue, emailValue, date)
        showPopup();
    } else {
        document.querySelectorAll('.form-group input').forEach(input =>
            input.value = '')
    }


}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});

function renderPopup(fullname, number, email, date) {
    document.getElementById("fullnameInfo").innerText = fullname;
    document.getElementById("phoneInfo").innerText = number;
    document.getElementById("emailInfo").innerText = email;
    document.getElementById("dateInfo").innerText = date;

}

function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

const faqs = document.querySelectorAll(".faq-block");  // Selects all elements with class .faq-block
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle('active');
    });
});

