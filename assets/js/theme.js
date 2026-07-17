document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    // Set initial theme and hover label on page load
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.title = "Toggle dark mode";  // What it will do next
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.title = "Toggle light mode"; // What it will do next
    }
    
    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        const isLight = document.documentElement.hasAttribute('data-theme');
        
        if (isLight) {
            // Switch to dark mode
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('theme');
            themeToggle.title = "Toggle light mode";
        } else {
            // Switch to light mode
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.title = "Toggle dark mode";
        }
    });
});