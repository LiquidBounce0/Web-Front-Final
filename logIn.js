function setLoggedOut() {
    localStorage.setItem("isLoggedIn", "false");
    window.location.reload();
}

let isLoggedIn = localStorage.getItem('isLoggedIn');
if (isLoggedIn === "true") {
    document.getElementById("auth-button").style.display = "none";
    document.getElementById("log-out-button").style.display = "inline-block";

} else {
    console.log("Logged Out");
}

const button = document.querySelector("#log-out-button"); // Replace with your button's ID or selector
button.addEventListener("click", setLoggedOut);

console.log(localStorage.getItem("isLoggedIn"));


