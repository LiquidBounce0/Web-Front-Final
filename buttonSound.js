const buttonSound = new Audio();
buttonSound.src = 'buttonSound.webm';

function playSound() {
    buttonSound.play();
}

form.addEventListener("submit", function(e) {
    playSound()
})
