function playAnimation() {
    const button = document.getElementById('form-main')
    if (!button.classList.contains('gradient')) {
        button.classList.add('gradient');
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    validateInputs()
    playAnimation();
})
