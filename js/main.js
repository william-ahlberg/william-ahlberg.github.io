

// Existing dark mode toggle code...
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

function switchLogos(isDark) {
  document.querySelectorAll('.social-links img').forEach(img => {
    const darkSrc = img.getAttribute('img-dark');
    const lightSrc = img.getAttribute('img-light');
    img.src = isDark ? darkSrc : lightSrc;
  });
}

// Example: toggle dark mode and logo images
darkModeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  switchLogos(isDark);
});
