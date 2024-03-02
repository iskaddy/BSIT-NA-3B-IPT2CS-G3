// Select the button element
const toggleModeBtn = document.getElementById('toggle-mode-btn');

// Add click event listener to the button
toggleModeBtn.addEventListener('click', () => {
    // Toggle the body class to switch between light and dark mode
    document.body.classList.toggle('light-mode');
});