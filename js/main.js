function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
}

document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);