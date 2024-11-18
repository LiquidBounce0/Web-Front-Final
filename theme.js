document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("theme-toggle");
    const mainContent = document.getElementById("main-content");

    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateButtonText(savedTheme);

    themeToggleButton.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateButtonText(newTheme);
    });
    
    function updateButtonText(theme) {
        themeToggleButton.textContent = theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode";
    }
});
