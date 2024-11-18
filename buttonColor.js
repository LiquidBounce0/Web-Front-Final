const buttonColor = ['green', 'red', 'blue', 'yellow', 'black'];
let colorIndex = 0;

function changeColor() {
    if (colorIndex >= buttonColor.length) {
        colorIndex = 0;
    }
    document.getElementById("form-submit").style.backgroundColor=buttonColor[colorIndex];
    colorIndex++;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    changeColor();
})